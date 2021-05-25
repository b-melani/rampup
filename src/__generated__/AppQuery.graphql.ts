/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AppQueryVariables = {};
export type AppQueryResponse = {
    readonly allCustomers: {
        readonly " $fragmentRefs": FragmentRefs<"CustomerTable_customer">;
    } | null;
    readonly allCustHists: {
        readonly nodes: ReadonlyArray<{
            readonly orderid: number;
            readonly prodId: number;
        } | null>;
    } | null;
    readonly allCategories: {
        readonly " $fragmentRefs": FragmentRefs<"CategoryTable_categories">;
    } | null;
};
export type AppQuery = {
    readonly response: AppQueryResponse;
    readonly variables: AppQueryVariables;
};



/*
query AppQuery {
  allCustomers(first: 5) {
    ...CustomerTable_customer
  }
  allCustHists(last: 10, orderBy: ORDERID_DESC) {
    nodes {
      orderid
      prodId
    }
  }
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
],
v1 = {
  "kind": "Literal",
  "name": "last",
  "value": 10
},
v2 = {
  "alias": null,
  "args": [
    (v1/*: any*/),
    {
      "kind": "Literal",
      "name": "orderBy",
      "value": "ORDERID_DESC"
    }
  ],
  "concreteType": "CustHistsConnection",
  "kind": "LinkedField",
  "name": "allCustHists",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "CustHist",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "orderid",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "prodId",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": "allCustHists(last:10,orderBy:\"ORDERID_DESC\")"
},
v3 = [
  (v1/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
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
      },
      (v2/*: any*/),
      {
        "alias": null,
        "args": (v3/*: any*/),
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
    "name": "AppQuery",
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
      },
      (v2/*: any*/),
      {
        "alias": null,
        "args": (v3/*: any*/),
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
    "cacheID": "f43c391f93046d63facc39e149e3a182",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery {\n  allCustomers(first: 5) {\n    ...CustomerTable_customer\n  }\n  allCustHists(last: 10, orderBy: ORDERID_DESC) {\n    nodes {\n      orderid\n      prodId\n    }\n  }\n  allCategories(last: 10) {\n    ...CategoryTable_categories\n  }\n}\n\nfragment CategoryTable_categories on CategoriesConnection {\n  nodes {\n    categoryname\n    category\n    nodeId\n  }\n}\n\nfragment CustomerTable_customer on CustomersConnection {\n  nodes {\n    firstname\n    lastname\n    age\n    country\n    email\n  }\n}\n"
  }
};
})();
(node as any).hash = '4b6a54d2ee9c371deecdaeda404f9d4e';
export default node;
