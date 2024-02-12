import axios from "axios";
import { GET_PRODUCTS_URL } from "../URLs";
import { useQuery } from "@tanstack/react-query";

const getProducts = async (category, type) => {
  try {
    const url = GET_PRODUCTS_URL(category, type);

    const response = await axios.get(url, { withCredentials: true });

    return response;
  } catch (error) {
    throw error;
  }
};

export const useGetProductsQuery = ({ category = "", type = "" }) => {
  const { error, isLoading, status, data, refetch } = useQuery({
    queryFn: () => getProducts(category, type),
    retry: false,
    queryKey: ["products"],
  });

  return { isLoading, error, status, response: data, refetch };
};
