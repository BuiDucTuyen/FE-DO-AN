import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

interface PrivateRouteProps {
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { user } = useAuth();
  const storedUser = localStorage.getItem("user");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!storedUser && !user) {
      const timeout = setTimeout(() => {
        setRedirect(true);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [storedUser, user]);

  if (redirect) {
    return <Navigate to="/dangnhap" />;
  }

  return <>{element}</>;
};

export default PrivateRoute;
