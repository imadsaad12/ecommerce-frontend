import axios from "axios";
import { GENERATE_ACCESS_TOKEN_URL } from "../URLs";

export const generateAccessToken = () => {
  const url = GENERATE_ACCESS_TOKEN_URL;

  return axios.get(url);
};
