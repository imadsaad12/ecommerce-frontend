import { Navigate } from "react-router-dom";
import { useValidateTokenQueryQuery } from "../apis/auth/validateToken";

const ProtectedRoute = ({ children }) => {
  const { status } = useValidateTokenQueryQuery();

  if (status === "error") {
    // return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
