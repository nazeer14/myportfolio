import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profilephoto from '../images/profilephoto.jpg';

function Header() {
  const [theme, setTheme] = useState('light');
  const [showThankYou, setShowThankYou] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const handleLike = () => {
    setShowThankYou(true);
    setTimeout(() => {
      setShowThankYou(false);
    }, 1000);
  };

  return (
    <header className="sticky top-2 z-50 w-full px-4 lg:px-16">
      <nav className="backdrop-blur-lg border border-cyan-800 rounded-3xl p-3 shadow-lg flex flex-wrap items-center justify-between">
        
        {/* Left: Profile */}
        <Link to="/" className="flex items-center flex-shrink-0">
          <img
            src={profilephoto}
            alt="profile"
            className="w-11 h-11 rounded-full border-2 "
          />
        </Link>

        {/* Hamburger Button for Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-2xl p-2 rounded-md hover:bg-purple-600 hover:text-white transition ml-auto"
          aria-label="Toggle Menu"
        >
          {menuOpen ? '✖️' : '☰'}
        </button>

        {/* Navigation & Actions */}
        <div
          className={`flex flex-col lg:flex-row lg:items-center w-full lg:w-auto mt-3 lg:mt-0 gap-4 lg:gap-6
            ${menuOpen ? 'block' : 'hidden'} lg:flex`}
        >
          {/* Navigation Links */}
          <div className="flex flex-col lg:flex-row lg:gap-6 gap-2 font-semibold text-lg lg:text-xl text-end">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-500 transition"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-500 transition"
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-500 transition"
            >
              Contact
            </Link>
          </div>

          {/* Like & Theme Toggle */}
          <div className="flex items-center gap-4 mt-2 lg:mt-0 ">
            <button
              onClick={handleLike}
              className="text-xl hover:text-red-500 transition transform hover:scale-110"
              aria-label="Like"
            >
              ❤️
            </button>

            {showThankYou && (
              <span className="text-green-600 text-md animate-bounce select-none">
                Thanks! ❤️
              </span>
            )}

            <button
              onClick={toggleTheme}
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-1 rounded-full shadow hover:shadow-md transition text-sm whitespace-nowrap"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
