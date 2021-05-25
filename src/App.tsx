import React from "react";
import "./App.css";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";
import InputForm from "./InputForm";
import styled from "@emotion/styled/macro";
import { Link } from "found";
import BrowserRouter from "./Routes";

const { Suspense } = React;

// // Immediately load the query as our app starts. For a real app, we'd move this
// // into our routing configuration, preloading data as we transition to new routes.
// const preloadedQuery = loadQuery(RelayEnvironment, myQuery, {
//   /* query variables */
// });
// Inner component that reads the preloaded query results via `usePreloadedQuery()`.
// This works as follows:
// - If the query has completed, it returns the results of the query.
// - If the query is still pending, it "suspends" (indicates to React that the
//   component isn't ready to render yet). This will show the nearest <Suspense>
//   fallback.
// - If the query failed, it throws the failure error. For simplicity we aren't
//   handling the failure case here.

// The above component needs to know how to access the Relay environment, and we
// need to specify a fallback in case it suspends:
// - <RelayEnvironmentProvider> tells child components how to talk to the current
//   Relay Environment instance
// - <Suspense> specifies a fallback in case a child suspends.
function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <div>
        <BrowserRouter />
      </div>
    </RelayEnvironmentProvider>
  );
}

export default App;
