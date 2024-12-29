import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, ...rest }) => {
  const isAuthenticated = localStorage.getItem("user")
  console.log(isAuthenticated)

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
