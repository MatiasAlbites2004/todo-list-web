import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

interface PublicRouteProps {
  children: JSX.Element;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const token = useAppSelector((state) => state.auth.token);
  return token ? <Navigate to="/todo-list" /> : children;
};

export default PublicRoute;
