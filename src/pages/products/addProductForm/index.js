import Button from "@mui/material/Button";
import { Container } from "./styles";
import { List } from "@mui/material";
import { FaArrowLeftLong } from "react-icons/fa6";
import ProductInformation from "./productInformation";
import ProductSizes from "./productSizes";
import ProductImages from "./productImages";
import { useAddProductQuery } from "../../../apis/products/addProduct";
import { useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import { IoMdAdd } from "react-icons/io";

export default function AddProductForm({ setIsFormOpen }) {
  const { handleApiCall, isPending } = useAddProductQuery({
    onSuccess: () => setIsFormOpen(false),
  });
  const formUtils = useForm();

  const handleOnAddProduct = () => {
    handleApiCall(formUtils.getValues());
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
        onClick={() => setIsFormOpen(false)}
      >
        back
      </Button>
      <Container>
        <List sx={{ width: "90%", bgcolor: "background.paper" }}>
          <ProductInformation formUtils={formUtils} />
          <ProductSizes formUtils={formUtils} />
          <ProductImages formUtils={formUtils} />
        </List>
        <LoadingButton
          loading={isPending}
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
