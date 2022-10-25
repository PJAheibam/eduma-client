import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useAuth();
  const location = useLocation();
  if (loading) return <div>Loading</div>;
  if (user && user?.uid) return children;
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
