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
import { toast } from "react-toastify";
import { withRedirection } from "../HOCs/sign-in";
import Product from "../pages/product/index";
import ViewProducts from "../pages/viewproducts/index";
import Order from "../pages/order";
import Layout from "../HOCs/mainlayout";
import Cart from "../pages/cart";

export default function Routes() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <RoutesWrapper>
          <Route path={SIGN_IN} Component={withRedirection(SignIn)} />
          <Route path={ADMIN} Component={withLayout(Admin)} />
          <Route path={ORDERS} Component={withLayout(Orders)} />
          <Route path={PRODUCTS} Component={withLayout(Products)} />
          <Route
            path={"/product"}
            Component={Layout(Product, "nontransparent")}
          />
          <Route path={"/"} Component={Layout(ViewProducts, "transparent")} />
          <Route path={"/order"} Component={Layout(Order, "nontransparent")} />
          <Route path={"/cart"} Component={Layout(Cart, "nontransparent")} />
        </RoutesWrapper>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    // const originalRequest = error.config;
    if (
      error.response.status === 498 ||
      error.response.status === 401 ||
      error.response.status === 403
    ) {
      window.location.href = SIGN_IN;
      localStorage.removeItem("isLoggedIn");
    }
    // } else if (
    //   (error.response.status === 401 || error.response.status === 403) &&
    //   !originalRequest._retry &&
    //   window.location.pathname !== SIGN_IN &&
    //   [(PRODUCTS, ORDERS, ADMIN)].some(
    //     (elm) => elm === window.location.pathname
    //   )
    // ) {
    //   originalRequest._retry = true;
    //   try {
    //     await generateAccessToken();

    //     return axios(originalRequest, { withCredentials: true });
    //   } catch (err) {
    //     toast.error(error?.response?.data?.message);
    //     await Promise.reject(error);
    //   }
    // }
    toast.error(error?.response?.data?.message);
    await Promise.reject(error);
  }
);
