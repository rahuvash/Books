// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import SignIn from './Pages/SignIn';
import Dashboard from './Pages/Dashboard';
import UploadBook from './Pages/UploadBook';
import Register from  './Pages/Register';
import NoPageFound from './Pages/NoPageFound';
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/uploadbook" element={<UploadBook />} />
          <Route path="*" element={<NoPageFound />} />
        </Routes>

    </Router>
  </React.StrictMode>
);
