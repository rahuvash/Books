import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Header from "../Components/Header";

const Register = () => {
  const navigate = useNavigate(); // Initialize the navigate hook
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    const formData = {
      "name": event.target.name.value,
      "email": event.target.email.value,
      "password": event.target.password.value,
    };
    console.log(formData);
    try {
      // Make the API POST request
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        formData
      );
      console.log("Data: ", response.data); // Log the response data
      alert("Form submitted successfully!"); // Show success message
      navigate("/signin"); // Redirect to the Sign In page
    } catch (error) {
      console.error("Error:", error.message); // Log any errors
      alert(error.message); // Show error message
    }
  };

  return (
    <>
    <Header/>
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name" // Add name attribute
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email" // Add name attribute
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-6 relative">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password" // Add name attribute
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 mt-8 flex items-center text-gray-600"
              onClick={handleTogglePassword}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <span>Already have an account? </span>
          <Link to="/signin" className="text-blue-500 hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Register;
