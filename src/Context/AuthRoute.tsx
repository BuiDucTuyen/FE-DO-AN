import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { toast } from "react-toastify";

interface AuthRouteProps {
  element: React.ReactNode;
}

const AuthRoute: React.FC<AuthRouteProps> = ({ element }) => {
  const { user } = useAuth();
  const storedUser = localStorage.getItem("user");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (storedUser && user) {
      const timeout = setTimeout(() => {
        setRedirect(true);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [storedUser, user]);

  if (redirect) {
    return <Navigate to="/" />;
  }

  return <>{element}</>;
};

export default AuthRoute;
