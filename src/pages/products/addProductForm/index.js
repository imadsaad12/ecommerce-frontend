import Button from "@mui/material/Button";
import { Container } from "./styles";
import { List } from "@mui/material";
import { FaArrowLeftLong } from "react-icons/fa6";
import ProductInformation from "./productInformation";
import ProductSizes from "./productSizes";
import ProductImages from "./productImages";
import { useAddProductQuery } from "../../../apis/products/addProduct";
import { useEditProductQuery } from "../../../apis/products/editProduct";
import { useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import { IoMdAdd } from "react-icons/io";
import { useEffect } from "react";

export default function AddProductForm({
  setIsFormOpen,
  refetchProducts,
  selectedProductToUpdate,
  isEditingMode,
  setSelectedProductToUpdate,
}) {
  const { handleApiCall, isPending } = useAddProductQuery({
    onSuccess: () => {
      refetchProducts();
      setIsFormOpen(false);
      formUtils.reset();
    },
  });
  const formUtils = useForm();

  const { handleApiCall: editProductApi, isPending: isEditingPending } =
    useEditProductQuery({
      onSuccess: () => {
        refetchProducts();
        setIsFormOpen(false);
        formUtils.reset();
      },
    });

  const handleOnAddProduct = () => {
    if (isEditingMode) {
      editProductApi(selectedProductToUpdate._id, formUtils.getValues());
    } else {
      handleApiCall(formUtils.getValues());
    }
  };

  return (
    <>
      <Button
        startIcon={<FaArrowLeftLong />}
        style={{
          alignSelf: "flex-start",
          marginLeft: "10%",
          marginBottom: "20px",
        }}
        onClick={() => {
          setIsFormOpen(false);
          setSelectedProductToUpdate({});
        }}
      >
        back
      </Button>
      <Container>
        <List sx={{ width: "90%", bgcolor: "background.paper" }}>
          <ProductInformation
            formUtils={formUtils}
            selectedProductToUpdate={selectedProductToUpdate}
            isEditingMode={isEditingMode}
          />
          <ProductSizes
            formUtils={formUtils}
            selectedProductToUpdate={selectedProductToUpdate}
          />
          <ProductImages
            formUtils={formUtils}
            selectedProductToUpdate={selectedProductToUpdate}
          />
        </List>
        <LoadingButton
          loading={isPending || isEditingPending}
          loadingPosition="start"
          startIcon={<IoMdAdd />}
          variant="contained"
          onClick={handleOnAddProduct}
        >
          Add product
        </LoadingButton>
      </Container>
    </>
  );
}
