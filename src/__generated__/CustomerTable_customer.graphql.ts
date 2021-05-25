/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CustomerTable_customer = {
    readonly nodes: ReadonlyArray<{
        readonly firstname: string;
        readonly lastname: string;
        readonly age: number | null;
        readonly country: string;
        readonly email: string | null;
    } | null>;
    readonly " $refType": "CustomerTable_customer";
};
export type CustomerTable_customer$data = CustomerTable_customer;
export type CustomerTable_customer$key = {
    readonly " $data"?: CustomerTable_customer$data;
    readonly " $fragmentRefs": FragmentRefs<"CustomerTable_customer">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CustomerTable_customer",
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
  "type": "CustomersConnection",
  "abstractKey": null
};
(node as any).hash = '9258677968111f6f9874b9a36bafcde8';
export default node;
