import React from "react";
import { Form, Field } from "react-final-form";
import { commitCategoryCreateMutation } from "./Mutation";
import RelayEnvironment from "./RelayEnvironment";
import styled from "@emotion/styled/macro";
import {
  Container,
  ErrorFieldHidden,
  ErrorFieldVisible,
  Title,
} from "./tableStyle";

const InputDiv = styled.div`
  display: flex;
  background-color: rgb(255, 255, 255);
  color: black;
  margin: 5px;
  padding-bottom: 10px;
  width: 150%;
  text-align: center;
`;

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const FlexLeft = styled.div`
  display: flex;
  flex: 6;
  justify-content: space-between;
  font-size: smaller;
`;

const FlexRight = styled.div`
  display: flex;
  flex: 4;
  margin-left: 4px;
`;

interface InputProps {
  hasError: boolean;
}

const TextInput = styled.input<InputProps>`
  display: inline-block;
  border: 1px solid #332d2d;
  border-radius: 4px;
  border-color: ${(props) => (props.hasError ? " red" : "none")};
`;

const required = (value: string) => (value ? undefined : "Required!");
const mustBeNumber = (value: string) =>
  isNaN(parseInt(value)) ? "Must be a number" : undefined;

const mustBeString = (value: string) =>
  typeof value === "string" ? undefined : "Must be a string!";

type ValidatorFunction = (prop: string) => undefined | string;

const composeValidators =
  (...validators: ValidatorFunction[]) =>
  (value: string) =>
    validators.reduce(
      (acc: string | undefined, validator: ValidatorFunction) => {
        return acc || validator(value);
      },
      undefined
    );

type Input = {
  categoryName: string;
  categoryId: string;
  clientMutationId: string;
};

const handleSubmit = async (values: Input) => {
  try {
    await commitCategoryCreateMutation(RelayEnvironment, {
      input: {
        category: {
          categoryname: values.categoryName,
          category: parseInt(values.categoryId),
        },
        clientMutationId: values.clientMutationId,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const InputForm: React.FC = () => {
  return (
    <Container>
      <Title>React Final Form Example</Title>
      <InputDiv>
        <FormContainer>
          <Form
            onSubmit={handleSubmit}
            render={({
              handleSubmit,
              form,
              submitting,
              pristine,
              submitSucceeded,
              invalid,
            }) => (
              <form onSubmit={handleSubmit} data-testid="form">
                <Field name="categoryName" validate={required}>
                  {({ input, meta }) => (
                    <InputDiv>
                      <FlexLeft>
                        <label>Category name: </label>
                        <TextInput
                          {...input}
                          hasError={meta.error && meta.touched}
                          type="text"
                          placeholder="Category name"
                        />
                      </FlexLeft>
                      <FlexRight>
                        {meta.error && meta.touched ? (
                          <ErrorFieldVisible>{meta.error}</ErrorFieldVisible>
                        ) : (
                          <ErrorFieldHidden>Required!</ErrorFieldHidden>
                        )}
                      </FlexRight>
                    </InputDiv>
                  )}
                </Field>
                <Field
                  name="categoryId"
                  validate={composeValidators(required, mustBeNumber)}
                >
                  {({ input, meta }) => (
                    <InputDiv>
                      <FlexLeft>
                        <label>Category id: </label>
                        <TextInput
                          {...input}
                          hasError={meta.error && meta.touched}
                          type="number"
                          placeholder="Category id"
                        />
                      </FlexLeft>
                      <FlexRight>
                        {meta.error && meta.touched ? (
                          <ErrorFieldVisible>{meta.error}</ErrorFieldVisible>
                        ) : (
                          <ErrorFieldHidden>Required!</ErrorFieldHidden>
                        )}
                      </FlexRight>
                    </InputDiv>
                  )}
                </Field>
                <Field
                  name="clientMutationId"
                  validate={composeValidators(required, mustBeString)}
                >
                  {({ input, meta }) => (
                    <InputDiv>
                      <FlexLeft>
                        <label>Category id: </label>
                        <TextInput
                          {...input}
                          hasError={meta.error && meta.touched}
                          type="text"
                          placeholder="Client mutation id"
                        />
                      </FlexLeft>
                      <FlexRight>
                        {meta.error && meta.touched ? (
                          <ErrorFieldVisible>{meta.error}</ErrorFieldVisible>
                        ) : (
                          <ErrorFieldHidden>Required!</ErrorFieldHidden>
                        )}
                      </FlexRight>
                    </InputDiv>
                  )}
                </Field>

                <div className="buttons">
                  <button type="submit" disabled={submitting || invalid}>
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={() => form.reset()}
                    disabled={submitting || pristine}
                  >
                    Reset
                  </button>
                </div>
                {submitSucceeded && <p>Success</p>}
              </form>
            )}
          />
        </FormContainer>
      </InputDiv>
    </Container>
  );
};

export default InputForm;
