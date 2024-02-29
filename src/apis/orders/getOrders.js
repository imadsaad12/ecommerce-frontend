import axios from "axios";
import { GET_ORDERS_WITH_LIMITS_URL } from "../URLs";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const getOrders = async (limit) => {
  try {
    const url = GET_ORDERS_WITH_LIMITS_URL(10);

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export const useGetOrdersQuery = () => {
  const { error, isLoading, status, data } = useQuery({
    queryFn: getOrders,
    retry: false,
    queryKey: ["orders"],
  });

  return { isLoading, error, status, response: data };
};
