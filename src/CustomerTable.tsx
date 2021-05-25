import styled from "@emotion/styled/macro";
import React from "react";
import { useFragment } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import {
  CustomerTable_customer$data,
  CustomerTable_customer$key,
} from "./__generated__/CustomerTable_customer.graphql";

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

type CustomerItem = {
  readonly firstname: string;
  readonly lastname: string;
  readonly age: number | null;
  readonly country: string;
  readonly email: string | null;
};

type CustomerTableProps = { customer: CustomerTable_customer$key };

export default function CustomerTable(props: CustomerTableProps) {
  function renderTableHeader(data: CustomerTable_customer$data) {
    if (data.nodes[0]) {
      let header = Object.keys(data.nodes[0]);
      return header.map((key, index) => {
        return <TableHeader key={index}>{key.toUpperCase()}</TableHeader>;
      });
    }
  }

  function placeHolder2(data: CustomerTable_customer$data) {
    console.log(data);
    return data.nodes.map((item: CustomerItem | null, index: number) => {
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

  const result: CustomerTable_customer$data = useFragment(
    graphql`
      fragment CustomerTable_customer on CustomersConnection {
        nodes {
          firstname
          lastname
          age
          country
          email
        }
      }
    `,
    props.customer
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
