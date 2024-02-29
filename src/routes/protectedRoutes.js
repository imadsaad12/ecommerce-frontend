import { Navigate } from "react-router-dom";
import { useValidateTokenQueryQuery } from "../apis/auth/validateToken";
import { SIGN_IN } from "./URLs";

const ProtectedRoute = ({ children }) => {
  const { status } = useValidateTokenQueryQuery();
  // if (status !== "pending") {
  //   if (status === "error") {
  //     return <Navigate to={SIGN_IN} replace />;
  //   }
  return children;
  // }
};

export default ProtectedRoute;
