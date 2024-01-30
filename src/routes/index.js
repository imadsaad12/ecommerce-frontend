import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import {
  BrowserRouter,
  Routes as RoutesWrapper,
  Route,
} from "react-router-dom";
import { ADMIN } from "./URLs";
import withLayout from "../HOCs/withLayout";
import Admin from "../pages/admin";

export default function Routes() {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <RoutesWrapper>
          {/* <Route path={ADMIN} element={<SignIn />} /> */}
        </RoutesWrapper>
        <RoutesWrapper>
          <Route path={ADMIN} Component={withLayout(Admin)} />
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
