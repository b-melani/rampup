import React from "react";
import "./App.css";
import { graphql } from "babel-plugin-relay/macro";
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
  PreloadedQuery,
} from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";
import InputForm from "./InputForm";
import styled from "@emotion/styled/macro";
import { BrowserProtocol, queryMiddleware } from "farce";
import { createFarceRouter, createRender, makeRouteConfig, Route } from "found";
import CategoryTable from "./CategoryTable";
import CustomerTable from "./CustomerTable";
import { GraphQLTaggedNode, OperationType } from "relay-runtime";
import { CustomerTable_customer$key } from "./__generated__/CustomerTable_customer.graphql";
import { CategoryTable_categories$key } from "./__generated__/CategoryTable_categories.graphql";
import { AppQuery, AppQueryResponse } from "./__generated__/AppQuery.graphql";
//import { Resolver } from "found-relay";
const Resolver = require("found-relay");

// const Router = createFarceRouter({
//   historyProtocol: new BrowserProtocol(),
//   historyMiddlewares: [queryMiddleware],
//   routeConfig: makeRouteConfig(
//     <Route
//       path="/"
//       Component={App}
//       query={graphql`
//         query AppQuery {
//           allCustHists(last: 10, orderBy: ORDERID_DESC) {
//             nodes {
//               orderid
//               prodId
//             }
//           }
//           allCategories(last: 10) {
//             nodes {
//               categoryname
//               category
//               nodeId
//             }
//           }
//         }
//       `}
//     >
//       <Route path="customers">
//         <Route Component={App}
//           query=
//           {graphql`
//           query AppQuery {
//           allCustomers(first: 5) {
//           nodes {
//             firstname
//             lastname
//             age
//             country
//             email
//           }
//         }`}
//         />
//       </Route>
//     </Route>
//   ),
//   render: createRender({}),
// });

// ReactDOM.render(
//   <Router resolver={new Resolver(RelayEnvironment)} />,
//   document.getElementById("root")
// );

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 16px;
`;

const { Suspense } = React;

interface loadedQuery<T extends OperationType> {
  query: GraphQLTaggedNode;
  preloadedQuery: PreloadedQuery<T>;
}

// Define a query
export const myQuery = graphql`
  query AppQuery {
    allCustomers(first: 5) {
      ...CustomerTable_customer
    }
    allCustHists(last: 10, orderBy: ORDERID_DESC) {
      nodes {
        orderid
        prodId
      }
    }
    allCategories(last: 10) {
      ...CategoryTable_categories
    }
  }
`;
// Immediately load the query as our app starts. For a real app, we'd move this
// into our routing configuration, preloading data as we transition to new routes.
const preloadedQuery = loadQuery(RelayEnvironment, myQuery, {
  /* query variables */
});
// Inner component that reads the preloaded query results via `usePreloadedQuery()`.
// This works as follows:
// - If the query has completed, it returns the results of the query.
// - If the query is still pending, it "suspends" (indicates to React that the
//   component isn't ready to render yet). This will show the nearest <Suspense>
//   fallback.
// - If the query failed, it throws the failure error. For simplicity we aren't
//   handling the failure case here.
function App(props: any) {
  const data: AppQueryResponse = usePreloadedQuery<AppQuery>(
    myQuery,
    props.preloadedQuery
  );

  return (
    <div className="App">
      <header className="App-header">
        <InputForm />
        <Container>
          <h3>Customer table</h3>
          <h3>Category table</h3>
        </Container>
        <Container>
          {data?.allCustomers && <CustomerTable customer={data.allCustomers} />}
          {data?.allCategories && (
            <CategoryTable category={data.allCategories} />
          )}
        </Container>
      </header>
    </div>
  );
}

// The above component needs to know how to access the Relay environment, and we
// need to specify a fallback in case it suspends:
// - <RelayEnvironmentProvider> tells child components how to talk to the current
//   Relay Environment instance
// - <Suspense> specifies a fallback in case a child suspends.
function AppRoot() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={"Loading..."}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
