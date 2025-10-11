import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { refreshTokenThunk } from "../store/authSlice";

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const [isChecking, setIsChecking] = useState(true);
  const token = useAppSelector((state) => state.auth.token);

  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        setIsChecking(false);
        return;
      }
      try {
        await dispatch(refreshTokenThunk()).unwrap();
      } catch {
      } finally {
        setIsChecking(false);
      }
    };
    verifyToken();
  }, [dispatch, token]);

  if (isChecking) return <div>Cargando...</div>;

  return token ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
