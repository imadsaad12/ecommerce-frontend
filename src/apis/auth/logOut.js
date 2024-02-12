import axios from "axios";
import { LOGOUT_URL } from "../URLs";
import { useMutation } from "@tanstack/react-query";

const logOut = async () => {
  try {
    const url = LOGOUT_URL;

    const response = await axios.post(url, {}, { withCredentials: true });

    return response;
  } catch (error) {
    throw error;
  }
};

export const useLogOutQuery = ({ onSuccess }) => {
  const { error, mutate, isPending } = useMutation({
    mutationFn: logOut,
    onSuccess,
  });

  const handleApiCall = () => mutate();

  return { isPending, error, handleApiCall };
};
