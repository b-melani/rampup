import React from "react";
import { Form, Field } from "react-final-form";
import { commitCategoryCreateMutation } from "./Mutation";
import RelayEnvironment from "./RelayEnvironment";
import styled from "@emotion/styled/macro";

const InputDiv = styled.div`
  display: flex;
  background-color: rgb(255, 255, 255);
  color: black;
  margin: 5px;
  text-align: center;
  justify-content: space-between;
`;

interface InputProps {
  hasError: boolean;
}

const TextInput = styled.input<InputProps>`
  border: 1px solid #332d2d;
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
    <>
      <h1>React Final Form Example</h1>
      <InputDiv>
        <Form
          onSubmit={handleSubmit}
          render={({
            handleSubmit,
            form,
            submitting,
            pristine,
            values,
            submitSucceeded,
            invalid,
          }) => (
            <form onSubmit={handleSubmit} data-testid="form">
              <Field name="categoryName" validate={required}>
                {({ input, meta }) => (
                  <InputDiv>
                    <label>Category name: </label>
                    <TextInput
                      {...input}
                      hasError={meta.error && meta.touched}
                      type="text"
                      placeholder="Category name"
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </InputDiv>
                )}
              </Field>
              <Field
                name="categoryId"
                validate={composeValidators(required, mustBeNumber)}
              >
                {({ input, meta }) => (
                  <InputDiv>
                    <label>Category id: </label>
                    <TextInput
                      {...input}
                      hasError={meta.error && meta.touched}
                      type="number"
                      placeholder="Category id"
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </InputDiv>
                )}
              </Field>
              <Field
                name="clientMutationId"
                validate={composeValidators(required, mustBeString)}
              >
                {({ input, meta }) => (
                  <InputDiv>
                    <label>Category id: </label>
                    <TextInput
                      {...input}
                      hasError={meta.error && meta.touched}
                      type="text"
                      placeholder="Client mutation id"
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
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

                <pre>{JSON.stringify(values)}</pre>
              </div>
              {submitSucceeded && <p>Successed</p>}
            </form>
          )}
        />
      </InputDiv>
    </>
  );
};

export default InputForm;
