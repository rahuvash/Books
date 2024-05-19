import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
const Home = () => {
  return (
    <>
    <Header/>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Welcome to Bookself</h1>
      <div className="space-y-4">
        <Link to="/signin" className="block text-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          Sign In
        </Link>
        <div className="mt-4 text-center">
          <span>Don't have an account? </span>
          <Link to="/register" className="text-blue-500 hover:underline">
            Register here
          </Link>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default Home