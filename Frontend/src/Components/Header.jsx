// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from "../assets/Bookself.png"; // Import the image

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-2 flex justify-between items-center sticky top-0 z-10">
      <div>
        <Link to="/" className="text-white text-xl font-bold flex items-center">
          <img src={logoImage} alt="MyApp Logo" className="h-12 w-12 rounded-full ml-2 " />
        </Link>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/signin">Sign In</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
