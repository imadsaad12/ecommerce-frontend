import axios from "axios";
import { ADD_CATEGORY_URL } from "../URLs";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const addCategory = async (payload) => {
  try {
    const url = ADD_CATEGORY_URL;
    if (!payload.category || !payload.type || !payload?.file) {
      toast.error("Category , type and image fields cannot be empty");
      throw new Error("Category , type and image fields cannot be empty");
    }

    const formData = new FormData();
    formData.append("category", payload.category);
    formData.append("type", payload.type);
    formData.append("file", payload.file);

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

export const useAddCategoryQuery = ({ onSuccess }) => {
  const { error, mutate, isPending } = useMutation({
    mutationFn: addCategory,
    onSuccess,
  });

  const handleApiCall = (data) => mutate(data);

  return { isPending, error, handleApiCall };
};
