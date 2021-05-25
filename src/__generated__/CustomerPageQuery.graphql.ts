/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CustomerPageQueryVariables = {};
export type CustomerPageQueryResponse = {
    readonly allCustomers: {
        readonly " $fragmentRefs": FragmentRefs<"CustomerTable_customer">;
    } | null;
};
export type CustomerPageQuery = {
    readonly response: CustomerPageQueryResponse;
    readonly variables: CustomerPageQueryVariables;
};



/*
query CustomerPageQuery {
  allCustomers(first: 5) {
    ...CustomerTable_customer
  }
}

fragment CustomerTable_customer on CustomersConnection {
  nodes {
    firstname
    lastname
    age
    country
    email
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 5
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CustomerPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "CustomersConnection",
        "kind": "LinkedField",
        "name": "allCustomers",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CustomerTable_customer"
          }
        ],
        "storageKey": "allCustomers(first:5)"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CustomerPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "CustomersConnection",
        "kind": "LinkedField",
        "name": "allCustomers",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Customer",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "firstname",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "lastname",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "age",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "country",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "email",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "allCustomers(first:5)"
      }
    ]
  },
  "params": {
    "cacheID": "95c8ef22b1ceb65efc7b656b841f2231",
    "id": null,
    "metadata": {},
    "name": "CustomerPageQuery",
    "operationKind": "query",
    "text": "query CustomerPageQuery {\n  allCustomers(first: 5) {\n    ...CustomerTable_customer\n  }\n}\n\nfragment CustomerTable_customer on CustomersConnection {\n  nodes {\n    firstname\n    lastname\n    age\n    country\n    email\n  }\n}\n"
  }
};
})();
(node as any).hash = '3dff492bae24456775e2e58058a83eab';
export default node;
