import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ProtectedRouteProps } from '../data/types';

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isLoggedIn }) => {
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
