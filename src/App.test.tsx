import React, { Suspense } from "react";
import { render, act, screen } from "@testing-library/react";
import App from "./App";
import { Environment } from "relay-runtime";
const { RelayEnvironmentProvider, loadQuery } = require("react-relay");
const {
  MockPayloadGenerator,
  createMockEnvironment,
  RelayMockEnvironment,
} = require("relay-test-utils");
import { myQuery } from "./App";
import { MockResolvers } from "relay-test-utils/lib/RelayMockPayloadGenerator";
import { AppQueryVariables } from "./__generated__/AppQuery.graphql";

describe("App", () => {
  let environment: RelayMockEnvironment;
  let TestRenderer: React.FC;

  const mockResolver: MockResolvers = {
    myQuery: (): AppQueryVariables => {
      return {
        allCustomers: {
          nodes: [
            {
              firstname: "Ed",
              lastname: "Smith",
              age: "22",
              email: "null",
              county: "HU",
            },
          ],
        },
      };
    },
  };

  beforeEach(() => {
    environment = createMockEnvironment();
    const preloadedQuery = loadQuery(environment, myQuery, {});
    TestRenderer = () => (
      <RelayEnvironmentProvider environment={environment}>
        <Suspense fallback={"Loading..."}>
          <App preloadedQuery={preloadedQuery} />
        </Suspense>
      </RelayEnvironmentProvider>
    );
    environment.mock.queuePendingOperation(myQuery, {});
  });

  it("fetch", () => {
    render(<TestRenderer />);

    screen.debug();

    act(() => {
      environment.mock.resolveMostRecentOperation((operation: any) =>
        MockPayloadGenerator.generate(operation, mockResolver)
      );
    });
  });
});

const mockResolver = {
  AppQuery: (): AppQueryVariables => {
    return {
      allCustomers: {
        nodes: [
          {
            firstname: "Ed",
            lastname: "Smith",
            age: "22",
            email: "null",
            county: "HU",
          },
        ],
      },
    };
  },
};

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
