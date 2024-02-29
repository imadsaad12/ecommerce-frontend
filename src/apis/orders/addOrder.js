import axios from "axios";
import { ADD_ORDER_URL } from "../URLs";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const addOrder = async (payload) => {
  try {
    const url = ADD_ORDER_URL;

    const response = await axios.post(url, payload);
    return response;
  } catch (error) {
    throw error;
  }
};

export const useAddOrderQuery = ({ onSuccess }) => {
  const { error, mutate, isPending } = useMutation({
    mutationFn: addOrder,
    onSuccess,
  });

  const handleApiCall = (data) => mutate(data);

  return { isPending, error, handleApiCall };
};
