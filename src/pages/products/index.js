import React, { useEffect, useState } from "react";
import { Container, TableContainer, TableHeader, Title } from "./styles";
import CustomizedTables from "../../components/table";
import useBreakpoint from "../../utilities/mediaQuery";
import { breakingPoints } from "../../global/theme";
import { Button } from "@mui/material";
import AddProductForm from "./addProductForm";
import { useGetProductsQuery } from "../../apis/products/getProducts";
import { formattedProducts } from "../../utilities/formatProducts";
import DeleteProductPopup from "./deleteProductPopup";

export default function Products() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteProductPopupOpen, setIsDeleteProductPopupOpen] =
    useState(false);
  const [selectedIdForAction, setSelectedIdForAction] = useState(false);
  const [isEditingMode, setIsEditingMode] = useState(false);
  const isSmallScreen = useBreakpoint(breakingPoints.sm);
  const [products, setProducts] = useState([]);
  const [selectedProductToUpdate, setSelectedProductToUpdate] = useState([]);

  const { response, isLoading, refetch } = useGetProductsQuery({});

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

  const refetchProducts = () => {
    refetch()
      .then(({ data: { data } }) => setProducts(formattedProducts(data)))
      .catch((err) => console.log(err));
  };

  const tableHeaders = [
    { headerKey: "Image", headerValue: "imageURL" },
    { headerKey: "Name", headerValue: "name" },
    { headerKey: "Description", headerValue: "description" },
    { headerKey: "Category", headerValue: "category" },
    { headerKey: "Type", headerValue: "type" },
    { headerKey: "Items", headerValue: "formattedSizes" },
    { headerKey: "Price", headerValue: "price" },
    { headerKey: "Date", headerValue: "createdAt" },
  ];

  useEffect(() => {
    if (!isLoading) {
      setProducts(formattedProducts(response.data));
    }
  }, [isLoading]);

  return (
    <>
      <DeleteProductPopup
        isDeleteProductPopupOpen={isDeleteProductPopupOpen}
        setIsDeleteProductPopupOpen={setIsDeleteProductPopupOpen}
        selectedIdForAction={selectedIdForAction}
        refetchProducts={refetchProducts}
      />
      <Container isOpen={isOpen}>
        {isFormOpen ? (
          <AddProductForm
            setIsFormOpen={setIsFormOpen}
            refetchProducts={refetchProducts}
            isEditingMode={isEditingMode}
            setIsEditingMode={setIsEditingMode}
            selectedProductToUpdate={selectedProductToUpdate}
            setSelectedProductToUpdate={setSelectedProductToUpdate}
          />
        ) : (
          <TableContainer>
            <TableHeader>
              <Title>Products</Title>
              <Button
                variant="contained"
                style={{ backgroundColor: "#3F0097" }}
                onClick={() => {
                  setIsFormOpen(true);
                  setIsEditingMode(false);
                }}
              >
                Add Products
              </Button>
            </TableHeader>
            <CustomizedTables
              tableData={products}
              addProductOperationsButtons={true}
              handleOnClickDeleteProduct={(id) => {
                setSelectedIdForAction(id);
                setIsDeleteProductPopupOpen(true);
              }}
              handleOnClickEditProduct={(id) => {
                setSelectedIdForAction(id);
                const product = response?.data?.find(({ _id }) => _id === id);
                setSelectedProductToUpdate(product);
                setIsEditingMode(true);
                setIsFormOpen(true);
              }}
              tableHeaders={tableHeaders}
            />
          </TableContainer>
        )}
      </Container>
    </>
  );
}
