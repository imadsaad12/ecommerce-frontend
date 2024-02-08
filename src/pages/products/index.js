import React, { useEffect, useState } from "react";
import { Container, TableContainer, TableHeader, Title } from "./styles";
import CustomizedTables from "../../components/table";
import useBreakpoint from "../../utilities/mediaQuery";
import { breakingPoints } from "../../global/breakingPoints";
import { Button } from "@mui/material";
import AddProductForm from "./addProductForm";
import { useGetProductsQuery } from "../../apis/products/getProducts";
import { formattedProducts } from "../../utilities/formatProducts";

export default function Products() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const isSmallScreen = useBreakpoint(breakingPoints.sm);
  const [products, setProducts] = useState([]);

  const { response, isLoading } = useGetProductsQuery();

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

  useEffect(() => {
    if (!isLoading) {
      setProducts(formattedProducts(response.data));
    }
  }, [isLoading]);

  return (
    <Container isOpen={isOpen}>
      {isFormOpen ? (
        <AddProductForm setIsFormOpen={setIsFormOpen} />
      ) : (
        <TableContainer>
          <TableHeader>
            <Title>Products</Title>
            <Button
              variant="contained"
              style={{ backgroundColor: "#3F0097" }}
              onClick={() => setIsFormOpen(true)}
            >
              Add Products
            </Button>
          </TableHeader>
          <CustomizedTables
            tableData={products}
            tableHeaders={[
              { headerKey: "Image", headerValue: "imageURL" },
              { headerKey: "Name", headerValue: "name" },
              { headerKey: "Description", headerValue: "description" },
              { headerKey: "Category", headerValue: "category" },
              { headerKey: "Items", headerValue: "formattedSizes" },
              { headerKey: "Price", headerValue: "price" },
              { headerKey: "Date", headerValue: "createdAt" },
            ]}
          />
        </TableContainer>
      )}
    </Container>
  );
}
