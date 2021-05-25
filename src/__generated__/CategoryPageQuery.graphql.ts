/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CategoryPageQueryVariables = {};
export type CategoryPageQueryResponse = {
    readonly allCategories: {
        readonly " $fragmentRefs": FragmentRefs<"CategoryTable_categories">;
    } | null;
};
export type CategoryPageQuery = {
    readonly response: CategoryPageQueryResponse;
    readonly variables: CategoryPageQueryVariables;
};



/*
query CategoryPageQuery {
  allCategories(last: 10) {
    ...CategoryTable_categories
  }
}

fragment CategoryTable_categories on CategoriesConnection {
  nodes {
    categoryname
    category
    nodeId
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 10
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CategoryPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "CategoriesConnection",
        "kind": "LinkedField",
        "name": "allCategories",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CategoryTable_categories"
          }
        ],
        "storageKey": "allCategories(last:10)"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CategoryPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "CategoriesConnection",
        "kind": "LinkedField",
        "name": "allCategories",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Category",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
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
                "name": "category",
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
          }
        ],
        "storageKey": "allCategories(last:10)"
      }
    ]
  },
  "params": {
    "cacheID": "545fe240970e8ec9808ae2235de50cf1",
    "id": null,
    "metadata": {},
    "name": "CategoryPageQuery",
    "operationKind": "query",
    "text": "query CategoryPageQuery {\n  allCategories(last: 10) {\n    ...CategoryTable_categories\n  }\n}\n\nfragment CategoryTable_categories on CategoriesConnection {\n  nodes {\n    categoryname\n    category\n    nodeId\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e755b0f6adbd8aaf52e04afa7d98b97e';
export default node;
