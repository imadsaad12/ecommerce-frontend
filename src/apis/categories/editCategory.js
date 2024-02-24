import axios from "axios";
import { EDIT_CATEGORY_URL } from "../URLs";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const editCategory = async (id, payload) => {
  try {
    const url = EDIT_CATEGORY_URL(id);

    if (!payload.category) {
      toast.error("Category field cannot be empty");
      throw new Error("Category field cannot be empty");
    }

    const formData = new FormData();
    formData.append("category", payload.category);

    if (payload?.file) {
      formData.append("file", payload.file);
    }

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

export const useEditCategoryQuery = ({ onSuccess }) => {
  const { error, mutate, isPending } = useMutation({
    mutationFn: (params) => editCategory(params[0], params[1]),
    onSuccess,
  });

  const handleApiCall = (id, data) => mutate([id, data]);

  return { isPending, error, handleApiCall };
};
