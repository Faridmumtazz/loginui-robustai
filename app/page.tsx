'use client';

import React, { useState } from 'react';

export default function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Illustration and Text */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-tr from-blue-400 to-purple-600 p-12">
        <div className="flex flex-col justify-center items-center h-full w-full">
          <img src="/Robust-Ai.png" alt="RobustAI Logo" className="mb-8 self-start" />
          <img src="/Group 25.png" alt="RobustAI Illustration" className="mb-8" />
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex w-full lg:w-1/2 justify-center items-center bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-6">
            Sign in to <span className="text-purple-600">RobustAI</span>
          </h2>
          <form className="space-y-6">
            {/* Email Input */}
            <div className="relative">
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="input your email"
                className="w-full p-4 pr-12 text-sm border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
              />
              <div className="absolute inset-y-0 right-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m0 0l-4 4m4-4l4-4" />
                </svg>
              </div>
            </div>

            {/* Password Input with Eye Icon for Show/Hide */}
            <div className="relative">
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                type={passwordVisible ? 'text' : 'password'} // Toggle between text and password
                name="password"
                id="password"
                placeholder="input your password"
                className="w-full p-4 pr-12 text-sm border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
              />
              <div className="absolute inset-y-0 right-4 flex items-center">
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="focus:outline-none"
                >
                  {passwordVisible ? (
                    // Icon for visible password (eye open)
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 2C5.523 2 1.733 5.11.293 9.111a1.138 1.138 0 000 .778C1.733 14.89 5.523 18 10 18c4.477 0 8.267-3.11 9.707-7.111a1.138 1.138 0 000-.778C18.267 5.11 14.477 2 10 2zm0 14a6 6 0 110-12 6 6 0 010 12zM10 6a2 2 0 100 4 2 2 0 000-4z" />
                    </svg>
                  ) : (
                    // Icon for hidden password (eye closed)
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0110 19c-4.478 0-8.268-3.11-9.708-7.111a1.138 1.138 0 010-.778A10.014 10.014 0 0110 5c1.318 0 2.577.26 3.742.743M15 15l4.8 4.8M9 9l-2.1-2.1" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                />
                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">Remember me</label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
                  Forgot Password?
                </a>
              </div>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full py-4 px-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-lg shadow-lg hover:from-purple-600 hover:to-blue-600 transition-all"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
