import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { TableProps } from "../types";
import {
  OperationsContainer,
  StyledTableContainer,
  StyledTableHead,
  TableContainerStyle,
} from "./styles";
import { isEmpty } from "lodash";
import { Checkbox, IconButton, Tooltip } from "@mui/material";
import { formatAsDDMMYYYY } from "../../utils/formatDates";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F4F4F4",
    color: "black",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    overflowX: "scroll",
    "&::-webkit-scrollbar": {
      width: 0,
    },
  },
}));

export default function CustomizedTables({
  tableData = [],
  tableHeaders = [],
  actions = [],
  isActiveColumn,
  handleOnActivate = () => {},
}) {
  const isDateValue = (headerValue) =>
    headerValue === "created_at" || headerValue === "updated_at";

  return (
    <StyledTableContainer style={TableContainerStyle}>
      <Table stickyHeader>
        <style>
          {`
          ::-webkit-scrollbar {
            width: 3px;
          }
          ::-webkit-scrollbar-track {
            background-color: transparent;
          }
          ::-webkit-scrollbar-thumb {
            background-color: lightgray;
            border-radius: 5px;
          }
        `}
        </style>
        <StyledTableHead>
          <TableRow>
            {isActiveColumn && (
              <StyledTableCell style={{ fontSize: "18px" }} align="center">
                Active
              </StyledTableCell>
            )}
            {tableHeaders.map(({ headerKey }) => {
              return (
                <StyledTableCell
                  style={{ fontSize: "18px" }}
                  align="center"
                  key={headerKey}
                >
                  {headerKey}
                </StyledTableCell>
              );
            })}
            {!isEmpty(actions) && (
              <StyledTableCell align="center" key="operations">
                Actions
              </StyledTableCell>
            )}
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {tableData.map((row, index) => (
            <TableRow key={index}>
              {isActiveColumn && (
                <StyledTableCell align="center">
                  <Checkbox
                    checked={!!row.is_active}
                    onChange={({ target: { checked } }) =>
                      handleOnActivate(row.id, checked)
                    }
                  />
                </StyledTableCell>
              )}
              {tableHeaders.map(({ headerValue }) => {
                return (
                  <StyledTableCell
                    style={{ fontSize: "16px" }}
                    key={`${row[headerValue]}-index`}
                    align="center"
                  >
                    {isDateValue(headerValue)
                      ? formatAsDDMMYYYY(row[headerValue])
                      : row[headerValue]}
                  </StyledTableCell>
                );
              })}
              {!isEmpty(actions) && (
                <StyledTableCell align="center">
                  <OperationsContainer>
                    {actions.map(({ Icon, handleOnClick, text }) => {
                      return (
                        <Tooltip title={text} arrow>
                          <IconButton>
                            <Icon
                              size={"20px"}
                              onClick={() => handleOnClick(row?.id)}
                              style={{ cursor: "pointer" }}
                            />
                          </IconButton>
                        </Tooltip>
                      );
                    })}
                  </OperationsContainer>
                </StyledTableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
}
