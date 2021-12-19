import styled from "styled-components";

export const Table = styled.table`
    color: #686461;
    border: 1px solid #DCDCDC;
    border-radius: 5px;
    width: 50%;
    margin: 50px auto 0;
    text-align: center;
    text-transform: capitalize;
`;
export const TableHead = styled.thead`
    text-transform: uppercase;
    color: #ffffff;
    background-color: deepskyblue;
    text-align: center;
`;
export const TableHeadCaption = styled.th`
padding: 10px;
`;
export const Row = styled.tr`
padding: 10px;
:nth-child(odd) {
  background-color: white;
}
:nth-child(even) {
  background-color: #F0F8FF;
}
`;
export const Cell = styled.td`
padding: 10px;
border-right: 1px solid #DCDCDC;
`;