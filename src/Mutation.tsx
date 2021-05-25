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
        console.log("END UPDATER");

        //   // Get connection record
        //   const connectionRecord = ConnectionHandler.getConnection(
        //     feedbackRecord,
        //     'CommentsComponent_comments_connection',
        //   );

        //   // Get the payload returned from the server
        //   const payload = store.getRootField('comment_create');

        //   // Get the edge inside the payload
        //   const serverEdge = payload.getLinkedRecord('comment_edge');

        //   // Build edge for adding to the connection
        //   const newEdge = ConnectionHandler.buildConnectionEdge(
        //     store,
        //     connectionRecord,
        //     serverEdge,
        //   );

        //   // Add edge to the end of the connection
        //   ConnectionHandler.insertEdgeAfter(
        //     connectionRecord,
        //     newEdge,
        //   );
      },
    });
  });
}

//module.exports = { commit: commitCategoryCreateMutation };
