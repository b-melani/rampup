import { graphql } from "babel-plugin-relay/macro";
import React from "react";
import { loadQuery, usePreloadedQuery } from "react-relay/hooks";
import CategoryTable from "./CategoryTable";
import RelayEnvironment from "./RelayEnvironment";
import {
  CategoryPageQuery,
  CategoryPageQueryResponse,
} from "./__generated__/CategoryPageQuery.graphql";

// Define a query
export const categoryQuery = graphql`
  query CategoryPageQuery {
    allCategories(last: 10) {
      ...CategoryTable_categories
    }
  }
`;
// Immediately load the query as our app starts. For a real app, we'd move this
// into our routing configuration, preloading data as we transition to new routes.
const preloadedQuery: any = loadQuery(RelayEnvironment, categoryQuery, {
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
export default function CategoryPage() {
  console.log("RENDER");
  const data: CategoryPageQueryResponse = usePreloadedQuery<CategoryPageQuery>(
    categoryQuery,
    preloadedQuery
  );

  return data?.allCategories && <CategoryTable category={data.allCategories} />;
}
