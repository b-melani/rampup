import styled from "@emotion/styled/macro";

export const Table = styled.table`
  border: black solid 1px;
  color: black;
  background-color: white;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  border: black solid 1px;
  color: black;
`;

export const TableRow = styled.tr`
  border: black solid 1px;
  color: black;
`;

export const TableCell = styled.td`
  border: black solid 1px;
  color: black;
`;

export const Title = styled.h3`
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  max-width: 50%;
  flex-direction: column;
  align-items: center;
  margin: 3%;
`;

export const ErrorFieldVisible = styled.span`
  display: inline;
  color: red;
  font-size: 12px;
`;

export const ErrorFieldHidden = styled.span`
  display: inline;
  color: red;
  font-size: 12px;
  visibility: hidden;
`;
