// src/ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Route {...rest} element={element} /> : <Navigate to="/signin" replace />;
};

export default ProtectedRoute;
