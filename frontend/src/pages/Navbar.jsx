import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import logo from "../assets/logo2.png";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { auth, logout } = useAuth();
  const [show, setShow] = useState(false);
  const dropdownRef = useRef(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Education", path: "/education" },
    { name: "Tracker", path: "/tracker" },
    { name: "Yojanas", path: "/yojanas" },
    { name: "Community", path: "/community" },
    { name: "Shop", path: "/shop" },
    { name: "Nutrition", path: "/nutrition" },
  ];

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full shadow bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4  flex items-center justify-between">
        {/* Logo */}
        <Link to='/'>
        <div className="flex items-center gap-2">
          <img src={logo} alt="Sakhii" className="h-20 w-auto text-[#CA3561]" />
          {/* <span className="font-bold text-pink-600 text-lg">Sakhii</span> */}
        </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10 font-medium text-gray-700">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-pink-600 border-b-2 border-pink-600 pb-1"
                    : "hover:text-pink-600 transition"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-3">
          {auth.user ? (
            // ✅ If logged in -> show user
            <div className="relative" ref={dropdownRef}>
              <button
                className="flex items-center gap-2 text-gray-700"
                onClick={() => setShow(!show)}
              >
                <FaUserCircle size={28} className="text-pink-600" />
                <span className="font-medium">{auth.user.name}</span>
              </button>
              {/* Dropdown */}
              {show && (
                <div className="absolute right-0 mt-2 w-40 bg-white border shadow-lg rounded-md">
                  <NavLink
                    to="/dashboard"
                    className="block px-4 py-2 hover:bg-pink-50"
                    onClick={() => setShow(false)}
                  >
                    Profile
                  </NavLink>
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 hover:bg-pink-50"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            // ✅ If not logged in -> show Sign up / Log in
            <>
              <NavLink to="/signup" className="text-sm font-medium">
                Sign up
              </NavLink>
              <NavLink
                to="/login"
                className="bg-pink-600 text-white px-3 py-1 rounded-md text-sm font-medium"
              >
                Log in
              </NavLink>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 text-pink-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t shadow-md">
          <ul className="flex flex-col gap-4 px-6 py-4 font-medium text-gray-700">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-pink-600 border-b-2 border-pink-600 pb-1 block"
                      : "hover:text-pink-600 transition block"
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-2 px-6 pb-4">
            {auth.user ? (
              <>
                <div className="flex items-center gap-2">
                  <FaUserCircle size={24} className="text-pink-600" />
                  <span>{auth.user.name}</span>
                </div>
                <NavLink
                  to="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium"
                >
                  Profile
                </NavLink>
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="bg-red-500 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/signup"
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium"
                >
                  Sign up
                </NavLink>
                <NavLink
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="bg-pink-600 text-white px-3 py-2 rounded-md text-sm font-medium w-full"
                >
                  Log in
                </NavLink>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
