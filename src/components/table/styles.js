import styled from "styled-components";
import { TableContainer, TableHead, styled as style } from "@mui/material";

export const OperationsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TableContainerStyle = {
  height: "88%",
};
export const StyledTableHead = style(TableHead)`
  & .MuiTableCell-root {
    font-weight:bold
  }
`;
export const StyledTableContainer = style(TableContainer)`
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  max-height: 100%;
`;
