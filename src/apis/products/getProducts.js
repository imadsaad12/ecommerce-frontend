import axios from "axios";
import { GET_PRODUCTS_URL } from "../URLs";
import { useQuery } from "@tanstack/react-query";

const getProducts = async () => {
  try {
    const url = GET_PRODUCTS_URL;

    const response = await axios.get(url, { withCredentials: true });

    return response;
  } catch (error) {
    throw error;
  }
};

export const useGetProductsQuery = () => {
  const { error, isLoading, status, data } = useQuery({
    queryFn: getProducts,
    retry: false,
    queryKey: ["products"],
  });

  return { isLoading, error, status, response: data };
};
