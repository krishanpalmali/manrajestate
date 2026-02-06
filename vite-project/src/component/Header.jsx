import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import defaultAvatar from "../assets/avatar.png";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Information", path: "/information" },
  { name: "Contact", path: "/contact" },
];

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
          ? "bg-[#020617]/95 backdrop-blur-md shadow-xl"
          : "bg-[#0F172A]/70 backdrop-blur-sm border-b border-white/10"
      }`}
    >
      {/* MAIN BAR */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO SPACE */}
        <div className="w-32 hidden md:block" />

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 font-medium">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative pb-1 transition ${
                  isActive
                    ? "text-emerald-400 after:w-full"
                    : "text-gray-300 hover:text-emerald-300 after:w-0"
                }
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:bg-emerald-400 after:transition-all`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* DESKTOP RIGHT */}
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
          {currentUser?._id ? (
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
                className="px-4 py-2 rounded-full text-sm border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black transition"
              >
                Sign In
              </Link>
              <Link
                to="/sign-up"
                className="px-4 py-2 rounded-full text-sm bg-emerald-500 text-black hover:bg-emerald-600 transition shadow"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-white"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        } bg-[#020617]`}
      >
        <div className="px-6 py-6 space-y-6">

          {/* AVATAR SECTION (TOP) */}
          {currentUser?._id && (
            <Link
              to="/profile"
              onClick={() => setMenuOpen(false)}
              className="flex flex-col items-center gap-2 pb-4 border-b border-white/10"
            >
              <img
                src={currentUser.avatar || currentUser.photo || defaultAvatar}
                alt="profile"
                className="w-16 h-16 rounded-full object-cover border-2 border-emerald-400"
              />
              <span className="text-sm text-emerald-400 font-medium">
                View Profile
              </span>
            </Link>
          )}

          {/* NAV LINKS */}
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="block text-center text-lg font-medium text-gray-200 hover:text-emerald-400"
            >
              {item.name}
            </NavLink>
          ))}

          {/* AUTH BUTTONS (LOGGED OUT) */}
          {!currentUser?._id && (
            <div className="flex gap-4 pt-4">
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
      </div>
    </header>
  );
};

export default Header;
