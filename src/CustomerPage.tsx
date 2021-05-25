import { graphql } from "babel-plugin-relay/macro";
import React from "react";
import { loadQuery, usePreloadedQuery } from "react-relay/hooks";
import CustomerTable from "./CustomerTable";
import RelayEnvironment from "./RelayEnvironment";
import {
  CustomerPageQuery,
  CustomerPageQueryResponse,
} from "./__generated__/CustomerPageQuery.graphql";

// Define a query
export const customerQuery = graphql`
  query CustomerPageQuery {
    allCustomers(first: 5) {
      ...CustomerTable_customer
    }
  }
`;
// Immediately load the query as our app starts. For a real app, we'd move this
// into our routing configuration, preloading data as we transition to new routes.
const preloadedQuery: any = loadQuery(RelayEnvironment, customerQuery, {
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
export default function CustomerPage() {
  const data: CustomerPageQueryResponse = usePreloadedQuery<CustomerPageQuery>(
    customerQuery,
    preloadedQuery
  );

  return data?.allCustomers && <CustomerTable customer={data.allCustomers} />;
}
