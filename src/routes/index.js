import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import {
  BrowserRouter,
  Routes as RoutesWrapper,
  Route,
} from "react-router-dom";
import { ADMIN, PRODUCTS, SIGN_IN } from "./URLs";
import withLayout from "../HOCs/withLayout";
import Admin from "../pages/admin";
import Products from "../pages/products";
import SignIn from "../pages/signIn";

export default function Routes() {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <RoutesWrapper>
          <Route path={SIGN_IN} element={<SignIn />} />
        </RoutesWrapper>
        <RoutesWrapper>
          <Route path={ADMIN} Component={withLayout(Admin)} />
          <Route path={PRODUCTS} Component={withLayout(Products)} />
        </RoutesWrapper>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
// axios.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (
//       error.response &&
//       error.response.status === 401 &&
//       window.location !== SIGN_IN
//     ) {
//       removeToken();
//       window.location.href = SIGN_IN;
//     }
//     return Promise.reject(error);
//   }
// );
