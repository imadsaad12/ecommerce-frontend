import axios from "axios";
import { SIGNIN_URL } from "../URLs";
import { useMutation } from "@tanstack/react-query";

const signIn = async (payload) => {
  try {
    const url = SIGNIN_URL;

    const response = await axios.post(url, payload, { withCredentials: true });
    localStorage.setItem("isLoggedIn", "true");
    return response;
  } catch (error) {
    throw error;
  }
};

export const useSignInQuery = ({ onSuccess }) => {
  const { error, mutate, isLoading } = useMutation({
    mutationFn: signIn,
    onSuccess,
  });

  const handleApiCall = (data) => mutate(data);

  return { isLoading, error, handleApiCall };
};
