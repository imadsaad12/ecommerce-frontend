import axios from "axios";
import { GET_PRODUCTS_URL } from "../URLs";
import { useQuery } from "@tanstack/react-query";

const getProducts = async (category, type, getProductsWithHightPriority) => {
  try {
    const url = GET_PRODUCTS_URL(category, type, getProductsWithHightPriority);

    const response = await axios.get(url, { withCredentials: true });

    return response;
  } catch (error) {
    throw error;
  }
};

export const useGetProductsQuery = ({
  category = "",
  type = "",
  getProductsWithHightPriority = "",
}) => {
  const { error, isLoading, status, data, refetch } = useQuery({
    queryFn: () => getProducts(category, type, getProductsWithHightPriority),
    retry: false,
    queryKey: ["products"],
  });

  return { isLoading, error, status, response: data, refetch };
};
