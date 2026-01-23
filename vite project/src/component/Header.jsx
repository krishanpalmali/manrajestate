// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";
import defaultAvatar from "../assets/avatar.png";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Manraj Estate Logo"
            className="w-12 h-auto rounded-md bg-gray-100 p-1"
          />
          <h1 className="text-lg font-semibold text-gray-800 hidden sm:block">
            Manraj Estate
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/information" className="nav-link">
          Information
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="hidden sm:flex items-center relative">
            <FaSearch className="absolute left-3 text-gray-400 text-sm" />
            <input
              type="text"
              placeholder="Search properties..."
              className="pl-9 pr-3 py-1.5 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Auth */}
          {currentUser ? (
            <Link to="/profile">
              <img
                src={currentUser.avatar || defaultAvatar}
                alt="profile"
                className="w-9 h-9 rounded-full object-cover border-2 border-blue-600 cursor-pointer"
              />
            </Link>
          ) : (
            <div className="hidden sm:flex items-center gap-2">
              <Link
                to="/sign-in"
                className="px-3 py-1.5 text-sm border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50"
              >
                Sign In
              </Link>
              <Link
                to="/sign-up"
                className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Sign Up
              </Link>
            </div>
          )}

          {/* Toggle Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 text-xl focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <nav className="flex flex-col p-4 gap-3">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="mobile-link"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="mobile-link"
            >
              About
            </Link>
            <Link
              to="/services"
              onClick={() => setMenuOpen(false)}
              className="mobile-link"
            >
              Services
            </Link>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mobile-link"
            >
              Contact
            </Link>

            {/* Mobile Search */}
            <div className="relative mt-3">
              <FaSearch className="absolute left-3 top-2.5 text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="Search properties..."
                className="w-full pl-9 pr-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Mobile Auth */}
            {!currentUser && (
              <div className="flex gap-2 mt-3">
                <Link
                  to="/sign-in"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 text-center py-2 border border-blue-600 text-blue-600 rounded-md"
                >
                  Sign In
                </Link>
                <Link
                  to="/sign-up"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 text-center py-2 bg-blue-600 text-white rounded-md"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

/* Add this in your global CSS (or Tailwind layer) */

/*
.nav-link {
  @apply text-gray-700 font-medium hover:text-blue-600 transition;
}

.mobile-link {
  @apply text-gray-700 font-medium py-2 border-b border-gray-200;
}
*/
