import Route from "found/Route";
import makeRouteConfig from "found/makeRouteConfig";
import { createBrowserRouter, Redirect } from "found";
import Link from "found/Link";
import CategoryPage from "./CategoryPage";
import CustomerPage from "./CustomerPage";
import React from "react";
import InputForm from "./InputForm";
import styled from "@emotion/styled/macro";
import { Container, Title } from "./tableStyle";

const Li = styled.li`
  display: inline;
  font-size: 18px;
  font-variant-caps: all-petite-caps;
  a:link {
    color: white;
  }
  a:visited {
    color: white;
  }
  a:hover {
    color: white;
  }
  a:active {
    color: white;
  }
`;

const UnorderedList = styled.ul`
  display: flex;
  justify-content: space-around;
  background-color: #000000cf;
  max-width: 50%;
`;

// - <Suspense> specifies a fallback in case a child suspends.
const { Suspense } = React;

const EmptyPage = () => {
  return (
    <Container>
      <Title>Welcome!</Title>
    </Container>
  );
};

const PageLayout: React.FC = ({ children }) => {
  return (
    <>
      <nav>
        <div>
          <UnorderedList>
            <Li>
              <Link to="/" exact>
                Home
              </Link>
            </Li>
            <Li>
              <Link to="/customer">Customer table</Link>
            </Li>
            <Li>
              <Link to="/category" exact>
                Category table
              </Link>
            </Li>
            <Li>
              <Link to="/category/create" exact>
                Creating category
              </Link>
            </Li>
          </UnorderedList>
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
