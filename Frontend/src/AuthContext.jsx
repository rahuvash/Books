// src/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Check if a JSON token exists in localStorage
    const token = localStorage.getItem('token');
    return !!token; // Return true if a token exists, otherwise false
  });

  const login = () => {
    // Logic to handle user login (e.g., authenticate user with server, set token in localStorage)
    // After successful login, update isAuthenticated state
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Logic to handle user logout (e.g., clear token from localStorage)
    // After logout, update isAuthenticated state
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
