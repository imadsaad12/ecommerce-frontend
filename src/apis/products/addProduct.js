import axios from "axios";
import { ADD_PRODUCT_URL } from "../URLs";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const addProduct = async (payload) => {
  try {
    const url = ADD_PRODUCT_URL;
    const formData = new FormData();
    if (
      !payload.name ||
      !payload.price ||
      payload?.sizes?.length === 0 ||
      payload?.images?.length === 0
    ) {
      toast.error("Please make sure all required fields are filled");
      return;
    }
    formData.append("name", "payload");
    formData.append("description", "Your Product Description");

    payload.forEach((imageData, index) => {
      formData.append(`images[${index}][url]`, imageData.url);
      formData.append(`images[${index}][file]`, imageData.file);
      formData.append(`images[${index}][color]`, imageData.color);
      formData.append(`images[${index}][inStock]`, imageData.inStock);
    });

    const response = await axios.post(url, formData, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const useAddProductQuery = ({ onSuccess }) => {
  const { error, mutate, isLoading } = useMutation({
    mutationFn: addProduct,
    onSuccess,
  });

  const handleApiCall = (data) => mutate(data);

  return { isLoading, error, handleApiCall };
};
