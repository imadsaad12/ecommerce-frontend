import axios from "axios";
import { GET_PRODUCT_BY_ID_URL } from "../URLs";
import { useQuery } from "@tanstack/react-query";

const getProductById = async (id) => {
  try {
    const url = GET_PRODUCT_BY_ID_URL(id);
    const response = await axios.get(url);
    return response;
  } catch (error) {
    throw error;
  }
};

export const useGetProductByIdQuery = (id) => {
  const { error, isLoading, data } = useQuery({
    queryFn: () => getProductById(id),
    queryKey: ["key"],
    retry: false,
  });

  return { isLoading, error, response: data };
};
