import styled from "@emotion/styled/macro";
import React from "react";
import { useFragment } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import {
  CategoryTable_categories$data,
  CategoryTable_categories$key,
} from "./__generated__/CategoryTable_categories.graphql";

const Table = styled.table`
  border: black solid 1px;
  color: black;
  background-color: white;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  border: black solid 1px;
  color: black;
`;

const TableRow = styled.tr`
  border: black solid 1px;
  color: black;
`;

const TableCell = styled.td`
  border: black solid 1px;
  color: black;
`;

type CategoryItem = {
  readonly categoryname: string;
  readonly category: number;
  readonly nodeId: string;
};

type CategoryTableProps = { category: CategoryTable_categories$key };

export default function CategoryTable(props: CategoryTableProps) {
  function placeHolder2(data: CategoryTable_categories$data) {
    console.log(data);
    return data.nodes.map((item: CategoryItem | null, index: number) => {
      if (item) {
        const cells = Object.keys(item).map(
          (propertyName: string, i: number) => {
            return <TableCell key={i}>{(item as any)[propertyName]}</TableCell>;
          }
        );
        return <TableRow key={index}>{cells}</TableRow>;
      }
    });
  }

  function renderTableHeader(data: CategoryTable_categories$data) {
    if (data.nodes[0]) {
      let header = Object.keys(data.nodes[0]);
      return header.map((key, index) => {
        return <TableHeader key={index}>{key.toUpperCase()}</TableHeader>;
      });
    }
  }

  const result: CategoryTable_categories$data = useFragment(
    graphql`
      fragment CategoryTable_categories on CategoriesConnection {
        nodes {
          categoryname
          category
          nodeId
        }
      }
    `,
    props.category
  );

  return (
    <Table>
      <tbody>
        <tr>{renderTableHeader(result)}</tr>
        {placeHolder2(result)}
      </tbody>
    </Table>
  );
}
