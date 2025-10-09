import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { refreshTokenThunk } from "../store/authSlice";

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const [isChecking, setIsChecking] = useState(true);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const data = await dispatch(refreshTokenThunk()).unwrap();
        if (data?.token) {
          setIsValid(true);
        } else {
          setIsValid(false);
        }
      } catch {
        setIsValid(false);
      } finally {
        setIsChecking(false);
      }
    };

    verifyToken();
  }, [dispatch]);

  if (isChecking) return <div>Cargando...</div>;

  return isValid ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
