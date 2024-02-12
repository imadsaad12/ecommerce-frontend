import axios from "axios";
import { EDIT_CATEGORY_URL } from "../URLs";
import { useMutation } from "@tanstack/react-query";

const editCategory = async (id, payload) => {
  try {
    console.log(id, payload);
    const url = EDIT_CATEGORY_URL(id);

    const response = await axios.put(url, payload, { withCredentials: true });

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
