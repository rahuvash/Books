// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white  text-center fixed bottom-0 w-full">
      &copy; {new Date().getFullYear()} . All Rights Reserved.
    </footer>
  );
};

export default Footer;
