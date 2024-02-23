import axios from "axios";
import { ADD_PRODUCT_URL } from "../URLs";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const addProduct = async (payload) => {
  try {
    const url = ADD_PRODUCT_URL;
    const formData = new FormData();
    const atLeastOneValidSize = payload?.sizes?.some(
      (sizeData) =>
        sizeData?.size && sizeData?.color && sizeData?.inStock !== undefined
    );

    if (
      !payload.name ||
      !payload.description ||
      !payload.price ||
      payload?.sizes?.length === 0 ||
      payload?.images?.length === 0 ||
      payload?.images?.every(({ isDeleted = false }) => isDeleted === true)
    ) {
      toast.error("Please make sure all required fields are filled");
      throw new Error("Please make sure all required fields are filled");
    }

    if (!atLeastOneValidSize) {
      toast.error("Please make sure you at least one size");
      throw new Error("Please make sure you at least one size");
    }

    const atLeastOneImageForEachColor = payload?.sizes?.every(({ color }) =>
      payload?.images?.some(({ color: imageColor }) => imageColor === color)
    );

    if (!atLeastOneImageForEachColor) {
      toast.error("Please make sure you at least one image for each color");
      throw new Error("Please make sure you at least one image for each color");
    }

    formData.append("name", payload.name);
    formData.append("category", payload.category);
    formData.append("description", payload.description);
    formData.append("price", payload.price);
    formData.append("type", payload.type);
    formData.append("isHighPriority", payload.isHighPriority);

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
        sizeData.inStock !== undefined
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
