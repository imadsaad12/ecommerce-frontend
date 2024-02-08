import axios from "axios";
import { ADD_CATEGORY_URL } from "../URLs";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const addCategory = async (payload) => {
  try {
    const url = ADD_CATEGORY_URL;
    if (!payload.category) {
      toast.error("Category fields cannot be empty");
      throw new Error("Category fields cannot be empty");
    }
    const response = await axios.post(url, payload, {
      withCredentials: true,
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
