import React, { useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { FaAlignJustify, FaXmark } from "react-icons/fa6"
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"
import firebaseApp from "../Firebase/firebase.config"
import { useDispatch, useSelector } from "react-redux"
import { deleteProfileData } from "../Store/Slicers/ProfileSlicer"
import { handleSignOut } from "../Firebase/authentication"

export default function Navbar() {
  const [isModalOpen, setModalOpen] = useState(false)
  const dispatch  = useDispatch()
  const navigate = useNavigate()
  const profileInfo = useSelector((state) => state.profileReducer)
  const handleMenuToggle = () => {
    setModalOpen(!isModalOpen)
  }

  const handleLogOut = () => {
    handleSignOut()
    dispatch(deleteProfileData())
    navigate("/")
  }

  const navItems = [
    {
      path: "/",
      title: "Search Jobs",
      hide: true
    },
    {
      path: "/Post-Job",
      title: "Post Jobs",
      hide: profileInfo.active
    },
    {
      path: "/Salary-Estimate",
      title: "Salary Estimate",
      hide: true
    },
    {
      path: "/My-Jobs",
      title: "My Jobs",
      hide: profileInfo.active
    },
    {
      path: "/AppliedJobs",
      title: "Applied Jobs",
      hide: profileInfo.active
    },
    {
      path: "/Profile",
      title: "My Profile",
      hide: profileInfo.active
    },
  ]
  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <nav className="flex justify-between items-center py-6">
        {/* Main Logo */}
        <a href="/" className="flex items-center gap-2 text-2xl">
          <span>
            <span className="text-blue">Remotely</span>Works
          </span>
        </a>

        {/* NavBar Menu Items */}
        <ul className="hidden md:flex gap-12">
          {navItems.map(({ path, title, hide}) =>  hide && ( 
            <li key={path} className="text-base text-primary">
              <NavLink
                to={path}
                className={({ isActive }) => {
                  isActive ? "active" : ""
                }}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
          {profileInfo.active == false && (
            <Link to={"/Login"} className="py-2 px-5 border rounded">
              Log In
            </Link>
          )}
          {profileInfo.active == false && (
            <Link to={"/SignUp"} className="py-2 px-5 border rounded bg-blue text-white">
              Sign Up
            </Link>
          )}
          {profileInfo.active == true && (
            <Link to={"/"} onClick={handleLogOut} className="py-2 px-5 border rounded bg-blue text-white">
              Log Out
            </Link>
          )}
        </div>

        {/* Menu Bar for Mobile */}
        <div className="md:hidden block">
          <button onClick={handleMenuToggle}>
            {isModalOpen ? <FaXmark className="w-5 h-5 text-primary" /> : <FaAlignJustify className="w-5 h-5 text-primary" />}
          </button>
        </div>
      </nav>
      {/* Navbar for Mobile */}
      <div className={`px-4 bg-blue py-5 rounded-sm ${isModalOpen ? "text-white" : "hidden"}`}>
        <ul>
          {navItems.map(({ path, title }) => (
            <li key={path} className=" text-white py-1">
              <NavLink
                to={path}
                className={({ isActive }) => {
                  isActive ? "active text-white" : ""
                }}
              >
                {title}
              </NavLink>
            </li>
          ))}
          <Link to={"/LogIn"} className=" text-white py-1">
            Log In
          </Link>
        </ul>
      </div>
    </header>
  )
}
