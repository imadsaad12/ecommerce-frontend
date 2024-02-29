import axios from "axios";
import { DELETE_PRODUCT_URL } from "../URLs";
import { useMutation } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const deleteProduct = async (productId) => {
  try {
    const url = DELETE_PRODUCT_URL(productId);

    const response = await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export const useDeleteProductQuery = ({ onSuccess }) => {
  const { error, mutate, isPending } = useMutation({
    mutationFn: deleteProduct,
    onSuccess,
  });

  const handleApiCall = (categoryId) => mutate(categoryId);

  return { isPending, error, handleApiCall };
};
