import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./auth";

export function PrivateRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
