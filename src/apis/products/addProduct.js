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
      throw new Error("Please make sure all required fields are filled");
    }
    formData.append("name", payload.name);
    formData.append("category", payload.category);
    formData.append("description", payload.description);
    formData.append("price", payload.price);
    formData.append("type", payload.type);

    payload.images.forEach((imageData, index) => {
      if (imageData.file && imageData.color) {
        formData.append(`images[${index}][url]`, imageData.url);
        formData.append(`images[${index}][file]`, imageData.file);
        formData.append(`images[${index}][color]`, imageData.color);
      }
    });
    payload.sizes.forEach((sizeData, index) => {
      if (
        sizeData !== null &&
        sizeData?.size &&
        sizeData.color &&
        sizeData.inStock
      ) {
        formData.append(`sizes[${index}][size]`, sizeData.size);
        formData.append(`sizes[${index}][color]`, sizeData.color);
        formData.append(`sizes[${index}][inStock]`, sizeData.inStock);
      }
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
  const { error, mutate, isPending } = useMutation({
    mutationFn: addProduct,
    onSuccess,
  });

  const handleApiCall = (data) => mutate(data);

  return { isPending, error, handleApiCall };
};
