import React from 'react';
import { Link } from 'react-router-dom';

const NoPageFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src="https://t3.ftcdn.net/jpg/01/59/17/98/360_F_159179817_F8joMJLDzGCjFSENf7ectW43ZJ7mlXvr.jpg" alt="Page Not Found" className="mb-4" />
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Oops! Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-4">The page you are looking for does not exist.</p>
      <Link to="/dashboard" className="text-blue-500 hover:underline">Go back to home</Link>
    </div>
  );
};

export default NoPageFound;
