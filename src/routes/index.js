import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import {
  BrowserRouter,
  Routes as RoutesWrapper,
  Route,
} from "react-router-dom";
import { ADMIN, ORDERS, PRODUCTS, SIGN_IN } from "./URLs";
import withLayout from "../HOCs/withLayout";
import Admin from "../pages/admin";
import Products from "../pages/products";
import SignIn from "../pages/signIn";
import Orders from "../pages/orders";
import axios from "axios";
import { generateAccessToken } from "../apis/auth/generateAccessToken";
import { toast } from "react-toastify";
import { withRedirection } from "../HOCs/sign-in";

export default function Routes() {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <RoutesWrapper>
          <Route path={SIGN_IN} Component={withRedirection(SignIn)} />
          <Route path={ADMIN} Component={withLayout(Admin)} />
          <Route path={ORDERS} Component={withLayout(Orders)} />
          <Route path={PRODUCTS} Component={withLayout(Products)} />
        </RoutesWrapper>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 498) {
      localStorage.removeItem("isLoggedIn");
      window.location.href = SIGN_IN;
    } else if (
      (error.response.status === 401 || error.response.status === 403) &&
      !originalRequest._retry &&
      window.location.pathname !== SIGN_IN
    ) {
      originalRequest._retry = true;
      try {
        await generateAccessToken();

        return axios(originalRequest);
      } catch (err) {
        toast.error(error?.response?.data?.message);
        await Promise.reject(error);
      }
    }
    toast.error(error?.response?.data?.message);
    await Promise.reject(error);
  }
);
