import axios from "axios";
import { VALIDATE_TOKEN_URL } from "../URLs";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const validateToken = async () => {
  try {
    const url = VALIDATE_TOKEN_URL;

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

export const useValidateTokenQueryQuery = () => {
  const { error, isLoading, status } = useQuery({
    queryFn: validateToken,
    retry: false,
    queryKey: ["validate"],
  });

  return { isLoading, error, status };
};
