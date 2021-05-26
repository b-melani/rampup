import { graphql } from "babel-plugin-relay/macro";
import { commitMutation } from "react-relay";
import RelayModernEnvironment from "relay-runtime/lib/store/RelayModernEnvironment";
import {
  MutationMutation,
  MutationMutationResponse,
  MutationMutationVariables,
} from "./__generated__/MutationMutation.graphql";

const mutation = graphql`
  mutation MutationMutation($input: CreateCategoryInput!) {
    createCategory(input: $input) {
      category {
        category
        categoryname
        nodeId
      }
      clientMutationId
    }
  }
`;

export function commitCategoryCreateMutation(
  environment: RelayModernEnvironment,
  variables: MutationMutationVariables
) {
  return new Promise<MutationMutationResponse>((resolve, reject) => {
    return commitMutation<MutationMutation>(environment, {
      mutation,
      variables,
      onCompleted: (response) => {
        resolve(response);
      },
      onError: (error) => {
        reject(error);
      },
      updater: (store) => {
        const payload = store
          .getRootField("createCategory")
          ?.getLinkedRecord("category");
        const params = { last: 10 };

        const allCategories = store
          .getRoot()
          ?.getLinkedRecord("allCategories", params);
        const categories = allCategories?.getLinkedRecords("nodes") || [];

        let newCategories;
        if (payload) {
          categories.pop();
          newCategories = [payload, ...categories];
        } else {
          newCategories = [...categories];
        }

        allCategories?.setLinkedRecords(newCategories, "nodes");
      },
    });
  });
}
