import axios from "axios";
import { DELETE_CATEGORY_URL } from "../URLs";
import { useMutation } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const deleteCategory = async (categoryId) => {
  try {
    const url = DELETE_CATEGORY_URL(categoryId);

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

export const useDeleteCategoryQuery = ({ onSuccess }) => {
  const { error, mutate, isPending } = useMutation({
    mutationFn: deleteCategory,
    onSuccess,
  });

  const handleApiCall = (categoryId) => mutate(categoryId);

  return { isPending, error, handleApiCall };
};
