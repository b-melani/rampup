/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CreateCategoryInput = {
    clientMutationId?: string | null;
    category: CategoryInput;
};
export type CategoryInput = {
    category?: number | null;
    categoryname: string;
};
export type MutationMutationVariables = {
    input: CreateCategoryInput;
};
export type MutationMutationResponse = {
    readonly createCategory: {
        readonly category: {
            readonly category: number;
            readonly categoryname: string;
            readonly nodeId: string;
        } | null;
        readonly clientMutationId: string | null;
    } | null;
};
export type MutationMutation = {
    readonly response: MutationMutationResponse;
    readonly variables: MutationMutationVariables;
};



/*
mutation MutationMutation(
  $input: CreateCategoryInput!
) {
  createCategory(input: $input) {
    category {
      category
      categoryname
      nodeId
    }
    clientMutationId
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateCategoryPayload",
    "kind": "LinkedField",
    "name": "createCategory",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Category",
        "kind": "LinkedField",
        "name": "category",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "category",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "categoryname",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "nodeId",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "clientMutationId",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MutationMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MutationMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4c4fae41f42ea09bae2eeebb3bb57b29",
    "id": null,
    "metadata": {},
    "name": "MutationMutation",
    "operationKind": "mutation",
    "text": "mutation MutationMutation(\n  $input: CreateCategoryInput!\n) {\n  createCategory(input: $input) {\n    category {\n      category\n      categoryname\n      nodeId\n    }\n    clientMutationId\n  }\n}\n"
  }
};
})();
(node as any).hash = '0bf84d3202528ea1c9525741d99074eb';
export default node;
