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
import { breakingPoints } from "../../global/theme";

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
  addProductOperationsButtons,
  handleOnClickDeleteProduct,
  handleOnClickEditProduct,
}) {
  const isDateValue = (headerValue) =>
    headerValue === "created_at" || headerValue === "updated_at";

  function truncateText(text, limit) {
    const words = text.split(" ");

    if (words.length <= limit) {
      return text;
    }

    const truncatedWords = words?.slice(0, limit);
    const truncatedText = truncatedWords.join(" ");

    return `${truncatedText} ...`;
  }

  const renderListWithEllipsis = (array) => {
    if (!array || array.length === 0) {
      return null;
    }

    const renderedItems = array?.slice(0, 1)?.map((item, index) => (
      <li key={index} style={{ alignSelf: "flex-start" }}>
        {item}
      </li>
    ));

    const ellipsis = array.length > 1 ? <li>...</li> : null;

    return (
      <ul>
        {renderedItems}
        {ellipsis}
      </ul>
    );
  };

  return (
    <StyledTableContainer style={TableContainerStyle}>
      <Table stickyHeader style={{ textTransform: "capitalize" }}>
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
            {addProductOperationsButtons && (
              <StyledTableCell
                style={{ fontSize: "18px", backgroundColor: "white" }}
                align="center"
                key="view order"
              >
                operations
              </StyledTableCell>
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
                        style={{ width: "50px", height: "50px" }}
                      />
                    ) : headerValue === "formattedSizes" ? (
                      <>{renderListWithEllipsis(row[headerValue])}</>
                    ) : headerValue === "description" ? (
                      <>{truncateText(row[headerValue], 10)}</>
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
              {addProductOperationsButtons && (
                <StyledTableCell align="center">
                  <div
                    style={{
                      fontSize: "16px",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <Button
                      variant="outlined"
                      onClick={() => handleOnClickEditProduct(row._id)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => handleOnClickDeleteProduct(row._id)}
                      color="error"
                    >
                      Delete
                    </Button>
                  </div>
                </StyledTableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
}
