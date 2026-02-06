import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import defaultAvatar from "../assets/avatar.png";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#020617]/95 backdrop-blur-md shadow-2xl"
          : "bg-[#0F172A]/70 backdrop-blur-sm border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT SPACE (nav ko thoda right lane ke liye) */}
        <div className="hidden md:block w-32"></div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 font-medium">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Information", path: "/information" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative pb-1 transition-all duration-300 ${
                  isActive
                    ? "text-emerald-400 after:w-full"
                    : "text-gray-300 hover:text-emerald-300 after:w-0"
                }
                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:bg-emerald-400 after:transition-all`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* RIGHT SECTION (Desktop) */}
        <div className="hidden md:flex items-center gap-5">

          {/* Search */}
          <div className="relative">
            <FaSearch className="absolute left-3 top-3 text-sm text-gray-400" />
            <input
              type="text"
              placeholder="Search properties..."
              className="
                pl-9 pr-4 py-2 rounded-full text-sm
                bg-white/10 text-white placeholder-gray-400
                border border-white/20
                focus:outline-none focus:ring-2 focus:ring-emerald-400
              "
            />
          </div>

          {/* Auth */}
          {currentUser ? (
            <Link to="/profile">
              <img
                src={currentUser.avatar || currentUser.photo || defaultAvatar}
                alt="profile"
                className="w-10 h-10 rounded-full object-cover border-2 border-emerald-400"
              />
            </Link>
          ) : (
            <>
              <Link
                to="/sign-in"
                className="
                  px-4 py-2 rounded-full text-sm
                  border border-emerald-400 text-emerald-400
                  hover:bg-emerald-400 hover:text-black transition
                "
              >
                Sign In
              </Link>
              <Link
                to="/sign-up"
                className="
                  px-4 py-2 rounded-full text-sm
                  bg-emerald-500 text-black
                  hover:bg-emerald-600 transition shadow-lg
                "
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Toggle Button (Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-white"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#020617] px-6 py-6 space-y-6">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Information", path: "/information" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="block text-center text-gray-200 text-lg font-medium hover:text-emerald-400"
            >
              {item.name}
            </NavLink>
          ))}

          {!currentUser && (
            <div className="pt-4 flex gap-4">
              <Link
                to="/sign-in"
                onClick={() => setMenuOpen(false)}
                className="w-full text-center border border-emerald-400 text-emerald-400 py-2 rounded-full"
              >
                Sign In
              </Link>
              <Link
                to="/sign-up"
                onClick={() => setMenuOpen(false)}
                className="w-full text-center bg-emerald-500 text-black py-2 rounded-full"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
