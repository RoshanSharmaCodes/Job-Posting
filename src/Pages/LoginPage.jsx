import React from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { updateProfileData } from "../Store/Slicers/ProfileSlicer"

function LoginPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleLogin = (data) => {
    fetch("http://localhost:3000/User/Login", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(data) })
    .then((data) => data.json())
    .then((result) => {
      console.log("Result:", result)
      if (result.emailId) {
        dispatch(updateProfileData(result))
        navigate("/")
      } else {
        alert("Sign Up Failed. Try again later.")
      }
      reset()
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email ID
            </label>
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
            <label htmlFor="password" className="block mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              {...register("password")}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <button type="submit" className="w-full border rounded bg-blue text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <span className="text-blue-500">
            {" "}
            Don't have an account?{" "}
            <Link to={"/SignUp"} className="hover:underline">
              Sign Up
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
