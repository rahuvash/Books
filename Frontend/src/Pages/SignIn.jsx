import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link
import Header from '../Components/Header';

const SignIn = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const signinSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const response = await fetch('http://localhost:3000/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const { message } = await response.json();
        throw new Error(message);
      }

      const { token, name } = await response.json();
      localStorage.setItem('token', token);
      localStorage.setItem('name', name);
      // alert(`Welcome, ${name}! Redirecting to dashboard...`);
      navigate('/dashboard');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Header />
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Sign In</h2>
          <form onSubmit={signinSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Sign In
            </button>
            <br/><br/>
          </form>
          <div className=" text-center">
            <span>Not Registered ? </span>
            <Link to="/register" className="text-blue-500 hover:underline">Register Now</Link>
          </div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
        </div>
      </div>
    </>
  );
};

export default SignIn;
