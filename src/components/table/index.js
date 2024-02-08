import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import {
  StyledTableContainer,
  StyledTableHead,
  TableContainerStyle,
} from "./styles";
import { formatAsDDMMYYYY } from "../../utilities/dates";
import { Button } from "@mui/material";
import useBreakpoint from "../../utilities/mediaQuery";
import { breakingPoints } from "../../global/breakingPoints";

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
  addViewOrderButton,
  handleOnClickView,
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
            {tableHeaders.map(({ headerKey }) => {
              return (
                <StyledTableCell
                  style={{ fontSize: "18px", backgroundColor: "white" }}
                  align="center"
                  key={headerKey}
                >
                  {headerKey}
                </StyledTableCell>
              );
            })}
            {addViewOrderButton && (
              <StyledTableCell
                style={{ fontSize: "18px", backgroundColor: "white" }}
                align="center"
                key="view order"
              ></StyledTableCell>
            )}
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {tableData.map((row, index) => (
            <TableRow key={index}>
              {tableHeaders.map(({ headerValue, headerKey }) => {
                return (
                  <StyledTableCell
                    style={{ fontSize: "16px" }}
                    key={`${row[headerValue]}-index`}
                    align={headerValue === "formattedSizes" ? "left" : "center"}
                  >
                    {isDateValue(headerValue) ? (
                      formatAsDDMMYYYY(row[headerValue])
                    ) : headerKey === "Image" ? (
                      <img
                        src={row[headerValue]}
                        style={{ width: "30px", height: "30px" }}
                      />
                    ) : headerValue === "formattedSizes" ? (
                      <>
                        {row[headerValue].map((elm) => (
                          <li style={{ alignSelf: "flex-start" }}>{elm}</li>
                        ))}
                      </>
                    ) : (
                      row[headerValue]
                    )}
                  </StyledTableCell>
                );
              })}
              {addViewOrderButton && (
                <StyledTableCell style={{ fontSize: "16px" }} align="center">
                  <Button
                    variant="contained"
                    onClick={() => handleOnClickView(row?.uuid)}
                  >
                    view order
                  </Button>
                </StyledTableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
}
