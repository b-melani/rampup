import { fireEvent, render, act, screen } from "@testing-library/react";
import InputForm from "./InputForm";
import {
  createMockEnvironment,
  MockPayloadGenerator,
  RelayMockEnvironment,
} from "relay-test-utils";
import userEvent from "@testing-library/user-event";

describe("InputForm", () => {
  let environment: RelayMockEnvironment;
  let TestRenderer: React.FC;

  beforeEach(() => {
    environment = createMockEnvironment();
    TestRenderer = () => {
      return <InputForm />;
    };
  });

  it("should crate category", async () => {
    render(<TestRenderer />);
    userEvent.type(screen.getByPlaceholderText("Category name"), "Flower");
    userEvent.type(screen.getByPlaceholderText("Category id"), "26");
    userEvent.type(
      screen.getByPlaceholderText("Client mutation id"),
      "Flower_rose"
    );
    environment.mock.queueOperationResolver((operation) =>
      MockPayloadGenerator.generate(operation)
    );
    act(() => {
      fireEvent.click(screen.getByText("Submit"));
    });
    expect(await screen.findByText("Successed")).toBeInTheDocument();
  });
});
