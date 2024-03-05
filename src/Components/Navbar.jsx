import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"

export default function Navbar() {
  const [isModalOpen, setModalOpen] = useState(false)

  const toggleModal = () => {
    setModalOpen(!isModalOpen)
  }

  const navItems = [
    {
      path: "/Post-Job",
      title: "Post Jobs",
    },
    {
      path: "/",
      title: "Search Jobs",
    },
    {
      path: "/Salary",
      title: "Salary Estimate",
    },
    {
      path: "/My-Job",
      title: "My Jobs",
    },
  ]
  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <nav className="flex justify-between items-center py-6">
        <a href="/" className="flex items-center gap-2 text-2xl">
          <span>
            <span className="text-blue">Remotely</span>Works
          </span>
        </a>
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
        <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
            <Link to={"/LogIn"} className="py-2 px-5 border rounded">Log In</Link>
            <Link to={"/SignUp"} className="py-2 px-5 border rounded bg-blue text-white">Sign Up</Link>
        </div>
      </nav>
    </header>
  )
}
