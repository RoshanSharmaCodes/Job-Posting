import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { FaAlignJustify, FaXmark } from "react-icons/fa6";

export default function Navbar() {
  const [isModalOpen, setModalOpen] = useState(false)

  const handleMenuToggle = () => {
    setModalOpen(!isModalOpen)
  }

  const navItems = [
    {
      path: "/",
      title: "Search Jobs",
    },
    {
      path: "/Post-Job",
      title: "Post Jobs",
    },
    {
      path: "/Salary-Estimate",
      title: "Salary Estimate",
    },
    {
      path: "/My-Jobs",
      title: "My Jobs",
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
          {navItems.map(({path, title}) => (
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
            <Link to={"/LogIn"} className="py-2 px-5 border rounded">Log In</Link>
            <Link to={"/SignUp"} className="py-2 px-5 border rounded bg-blue text-white">Sign Up</Link>
        </div>
        
        {/* Menu Bar for Mobile */}
        <div className="md:hidden block">
            <button onClick={handleMenuToggle}>{isModalOpen? <FaXmark className="w-5 h-5 text-primary"/> : <FaAlignJustify className="w-5 h-5 text-primary"/>}</button>
        </div>

     

      </nav>
         {/* Navbar for Mobile */}
         <div className={`px-4 bg-blue py-5 rounded-sm ${isModalOpen?"text-white":"hidden"}`}>
            <ul>
            {navItems.map(({path, title}) => (
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
          <Link to={"/LogIn"} className=" text-white py-1">Log In</Link>
            </ul>
             
        </div>
    </header>
  )
}
