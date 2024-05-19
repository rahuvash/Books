// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Register from './Pages/Register';
import SignIn from './Pages/SignIn';
// import Header from './Components/Header';
import Dashboard from './Pages/Dashboard';
import UploadBook from './Pages/UploadBook';

// import Footer from './Components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
   
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/uploadbook" element={<UploadBook />} />

      </Routes>
      {/* <Footer/> */}
    </Router>
  </React.StrictMode>
);
