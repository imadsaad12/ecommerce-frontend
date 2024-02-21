import axios from "axios";
import { EDIT_PRODUCT_URL } from "../URLs";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const editProduct = async (id, payload) => {
  try {
    const url = EDIT_PRODUCT_URL(id);

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

    formData.append("name", payload.name);
    formData.append("category", payload.category);
    formData.append("description", payload.description);
    formData.append("price", payload.price);
    formData.append("type", payload.type);

    payload.images.forEach((imageData, index) => {
      if (imageData.color) {
        if (!imageData?.isDeleted) imageData.isDeleted = false;
        formData.append(`images[${index}][url]`, imageData.url);
        formData.append(`images[${index}][file]`, imageData.file);
        formData.append(`images[${index}][color]`, imageData.color);
        formData.append(`images[${index}][id]`, imageData.id);
        formData.append(`images[${index}][isDeleted]`, imageData.isDeleted);
      }
    });
    payload.sizes.forEach((sizeData, index) => {
      if (
        sizeData !== null &&
        sizeData?.size &&
        sizeData?.color &&
        sizeData?.inStock !== undefined
      ) {
        formData.append(`sizes[${index}][size]`, sizeData.size);
        formData.append(`sizes[${index}][color]`, sizeData.color);
        formData.append(`sizes[${index}][inStock]`, sizeData.inStock);
      }
    });

    const response = await axios.put(url, formData, {
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

export const useEditProductQuery = ({ onSuccess }) => {
  const { error, mutate, isPending } = useMutation({
    mutationFn: (params) => editProduct(params[0], params[1]),
    onSuccess,
  });

  const handleApiCall = (id, data) => mutate([id, data]);

  return { isPending, error, handleApiCall };
};
