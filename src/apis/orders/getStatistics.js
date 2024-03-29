import axios from "axios";
import { GET_STATISTICS_URL } from "../URLs";
import { useQuery } from "@tanstack/react-query";

const getStatistics = async () => {
  try {
    const url = GET_STATISTICS_URL;

    const response = await axios.get(url, { withCredentials: true });

    return response;
  } catch (error) {
    throw error;
  }
};

export const useGetStatisticsQuery = () => {
  const { error, isLoading, status, data } = useQuery({
    queryFn: getStatistics,
    retry: false,
    queryKey: ["statistics"],
  });

  return { isLoading, error, status, response: data };
};
