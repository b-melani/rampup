import { act } from "@testing-library/react";
import { createMockEnvironment, MockPayloadGenerator } from "relay-test-utils";
import { commitCategoryCreateMutation } from "./Mutation";

test("it should create category mutation", () => {
  const environmenmt = createMockEnvironment();
  //const onCompleted = jest.fn();
  commitCategoryCreateMutation(environmenmt, {
    input: {
      category: {
        categoryname: "dog",
        category: 25,
      },
      clientMutationId: "dog25",
    },
  });
  const operation = environmenmt.mock.getMostRecentOperation();

  act(() => {
    environmenmt.mock.resolve(
      operation,
      MockPayloadGenerator.generate(operation)
    );
  });
});
