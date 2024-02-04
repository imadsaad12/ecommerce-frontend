import React, { useEffect, useState } from "react";
import { Container, TableContainer, TableHeader, Title } from "./styles";
import CustomizedTables from "../../components/table";
import useBreakpoint from "../../utilities/mediaQuery";
import { breakingPoints } from "../../global/breakingPoints";
import { Button } from "@mui/material";
import AddProductForm from "./addProductForm";

export default function Products() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(true);
  const isSmallScreen = useBreakpoint(breakingPoints.sm);

  useEffect(() => {
    const observeSizeChanges = () => {
      const targetElement = document.getElementById("side-bar");

      if (!targetElement) return;

      const resizeObserver = new ResizeObserver(() => {
        const divWidth = targetElement.offsetWidth;

        setIsOpen(divWidth > 100 && isSmallScreen);
      });

      resizeObserver.observe(targetElement);

      return () => {
        resizeObserver.disconnect();
      };
    };

    observeSizeChanges();
  }, [setIsOpen]);

  return (
    <Container isOpen={isOpen}>
      {isFormOpen ? (
        <AddProductForm />
      ) : (
        <TableContainer>
          <TableHeader>
            <Title>Products</Title>
            <Button variant="contained" style={{ backgroundColor: "#3F0097" }}>
              Add Products
            </Button>
          </TableHeader>
          <CustomizedTables
            tableData={[
              {
                name: "asas",
                description: "asa",
                price: "20.00 USD",
                date: "20/1/2024",
              },
              {
                name: "asas",
                description: "asa",
                price: "20.00 USD",
                date: "20/1/2024",
              },
              {
                name: "asas",
                description: "asa",
                price: "20.00 USD",
                date: "20/1/2024",
              },
              {
                name: "asas",
                description: "asa",
                price: "20.00 USD",
                date: "20/1/2024",
              },
            ]}
            tableHeaders={[
              { headerKey: "Name", headerValue: "name" },
              { headerKey: "Description", headerValue: "description" },
              { headerKey: "Price", headerValue: "price" },
              { headerKey: "Date", headerValue: "date" },
            ]}
          />
        </TableContainer>
      )}
    </Container>
  );
}
