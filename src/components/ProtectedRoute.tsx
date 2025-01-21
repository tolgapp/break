import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  isLoggedIn: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isLoggedIn }) => {
  return isLoggedIn ? <Outlet />: <Navigate to="/login" replace />;
};

export default ProtectedRoute;
