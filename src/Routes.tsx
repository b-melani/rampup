import Route from "found/Route";
import makeRouteConfig from "found/makeRouteConfig";
import { createBrowserRouter, Redirect } from "found";
import Link from "found/Link";
import CategoryPage from "./CategoryPage";
import CustomerPage from "./CustomerPage";
import React from "react";
import InputForm from "./InputForm";

const { Suspense } = React;

const EmptyPage = () => {
  return <span>Coming soon..</span>;
};

const PageLayout: React.FC = ({ children }) => {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/" exact>
              home
            </Link>
          </li>
          <li>
            <Link to="/customer" activeClassName="active">
              CustomerTable
            </Link>
          </li>
          <li>
            <Link to="/category" exact>
              CategoryTable
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
