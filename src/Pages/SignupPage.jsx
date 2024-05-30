import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { handleEmailandPasswordSignUp } from "../Firebase/authentication";

function SignupPage() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const handleSignUp = (data) => {
    if(data.password === data.confirmPassword){
      handleEmailandPasswordSignUp(data.emailId, data.password)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">Email ID</label>
            <input
              type="email"
              id="email"
              name="email"
              {...register("emailId")}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              {...register("password")}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block mb-1 font-medium">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              {...register("confirmPassword")}
              placeholder="Confirm your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full border rounded bg-blue text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 transform hover:scale-105"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center mt-4">
          <p>Already have an account? <Link to="/Login" className="text-blue-500 hover:underline">Login</Link></p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
