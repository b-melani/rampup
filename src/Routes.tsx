import Route from "found/Route";
import makeRouteConfig from "found/makeRouteConfig";
import { createBrowserRouter, Redirect } from "found";
import Link from "found/Link";
import CategoryPage from "./CategoryPage";
import CustomerPage from "./CustomerPage";
import React from "react";
import InputForm from "./InputForm";

// - <Suspense> specifies a fallback in case a child suspends.
const { Suspense } = React;

const EmptyPage = () => {
  return <span>Welcome!</span>;
};

const PageLayout: React.FC = ({ children }) => {
  return (
    <>
      <nav>
        <div>
          <ul>
            <li>
              <Link to="/" exact>
                Home
              </Link>
            </li>
            <li>
              <Link to="/customer" activeClassName="active">
                Customer table
              </Link>
            </li>
            <li>
              <Link to="/category" exact>
                Category table
              </Link>
            </li>
            <li>
              <Link to="/category/create" exact>
                Creating category
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Suspense fallback={"Loading..."}>{children}</Suspense>
        </div>
      </nav>
    </>
  );
};

const BrowserRouter = createBrowserRouter({
  routeConfig: makeRouteConfig(
    <Route Component={PageLayout} path="/">
      <Route Component={EmptyPage} />
      <Route path="category" Component={CategoryPage} />
      <Route path="category/create" Component={InputForm} />
      <Route path="customer" Component={CustomerPage} />
      <Redirect from="*" to="/" />
    </Route>
  ),
});

export default BrowserRouter;
