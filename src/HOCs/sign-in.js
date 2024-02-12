import { Navigate } from "react-router-dom";

export const withRedirection = (WrappedComponent) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (props) => {
    if (isLoggedIn) return <Navigate to="/admin" replace />;
    return <WrappedComponent {...props} />;
  };
};
