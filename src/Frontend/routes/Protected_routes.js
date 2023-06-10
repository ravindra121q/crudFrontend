import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const ProtectedRoutes = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const location = useLocation();
  //   console.log(location.pathname);

  useEffect(() => {
    if (!token) {
      navigate("/login",{state:location.pathname});
    }
  }, [token, navigate]);

  return children;
};
