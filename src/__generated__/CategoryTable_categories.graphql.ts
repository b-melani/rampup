/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CategoryTable_categories = {
    readonly nodes: ReadonlyArray<{
        readonly categoryname: string;
        readonly category: number;
        readonly nodeId: string;
    } | null>;
    readonly " $refType": "CategoryTable_categories";
};
export type CategoryTable_categories$data = CategoryTable_categories;
export type CategoryTable_categories$key = {
    readonly " $data"?: CategoryTable_categories$data;
    readonly " $fragmentRefs": FragmentRefs<"CategoryTable_categories">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CategoryTable_categories",
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
  "type": "CategoriesConnection",
  "abstractKey": null
};
(node as any).hash = '94b7c586d2006f01034b7944d1b48262';
export default node;
