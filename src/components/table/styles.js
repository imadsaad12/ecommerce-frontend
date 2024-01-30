import styled from "styled-components";
import { TableContainer, TableHead, styled as style } from "@mui/material";

export const OperationsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TableContainerStyle = {
  height: "100%",
  borderRadius: "20px",
};
export const StyledTableHead = style(TableHead)`
  & .MuiTableCell-root {
    background-color: gray;
  }
`;
export const StyledTableContainer = style(TableContainer)`
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  max-height: 100%;
`;
