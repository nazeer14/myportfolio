import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import profilephoto from "../images/profilephoto.jpg";
import {
  MdHome,
  MdPerson,
  MdMail,
  MdDarkMode,
  MdLightMode,
} from "react-icons/md";

function Header() {
  const location = useLocation();
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", storedTheme);
    setTheme(storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <header className="sticky top-2 z-50 w-full px-4 lg:px-16">
      <nav className="backdrop-blur-lg border border-cyan-800 rounded-3xl p-3 shadow-lg flex flex-wrap items-center justify-between">
        {/* Profile */}
        <Link to="/" className="flex items-center flex-shrink-0">
          <img
            src={profilephoto}
            alt="profile"
            className="w-11 h-11 rounded-full border-2"
          />
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-2xl p-2 rounded-md hover:bg-purple-600 hover:text-white transition ml-auto"
          aria-label="Toggle Menu"
        >
          {menuOpen ? "✖️" : "☰"}
        </button>

        {/* Navigation + Theme */}
        <div
          className={`flex flex-col lg:flex-row lg:items-center w-full lg:w-auto mt-3 lg:mt-0 gap-4 lg:gap-6
            ${menuOpen ? "block" : "hidden"} lg:flex`}
        >
          {/* Navigation Links */}
          <div className="flex flex-col lg:flex-row lg:gap-6 gap-2 font-semibold text-lg lg:text-xl text-end">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-2 hover:text-blue-500 transition ${
                location.pathname === "/" ? "text-blue-500" : ""
              }`}
            >
              <MdHome />
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-2 hover:text-blue-500 transition ${
                location.pathname === "/about" ? "text-blue-500" : ""
              }`}
            >
              <MdPerson />
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-2 hover:text-blue-500 transition ${
                location.pathname === "/contact" ? "text-blue-500" : ""
              }`}
            >
              <MdMail />
              Contact
            </Link>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full w-12 shadow-lg z-50 bg-white dark:bg-gray-800 text-yellow-500 dark:text-blue-400 hover:scale-110 transform transition-transform duration-300"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <MdLightMode className="w-6 h-6" />
            ) : (
              <MdDarkMode className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
