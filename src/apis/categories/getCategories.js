import axios from "axios";
import { GET_CATEGORIES_URL } from "../URLs";
import { useQuery } from "@tanstack/react-query";

const getCategories = async () => {
  try {
    const url = GET_CATEGORIES_URL;

    const response = await axios.get(url, { withCredentials: true });

    return response;
  } catch (error) {
    throw error;
  }
};

export const useGetCategoriesQuery = () => {
  const { error, isLoading, status, data, refetch } = useQuery({
    queryFn: getCategories,
    retry: false,
    queryKey: ["categories"],
  });

  return { isLoading, error, status, response: data, refetch };
};
