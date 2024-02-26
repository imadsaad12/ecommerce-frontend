import axios from "axios";
import { GET_PRODUCT_BY_ID_URL } from "../URLs";
import { useMutation, useQuery } from "@tanstack/react-query";

const getProductById = async (id) => {
  try {
    const url = GET_PRODUCT_BY_ID_URL(id);
    console.log(id);
    const response = await axios.get(url, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const useGetProductByIdQuery = (id) => {
  const { error, isLoading, data } = useQuery({
    queryFn: () => getProductById(id),
  });

  return { isLoading, error, response: data };
};
