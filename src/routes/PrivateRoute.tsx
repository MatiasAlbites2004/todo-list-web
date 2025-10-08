import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const token = useAppSelector((state) => state.auth.token);
  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
