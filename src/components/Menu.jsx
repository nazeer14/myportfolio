import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./theme.css";

function Menu() {
  const location = useLocation();
  const [theme, setTheme] = useState("light");

  // Load saved theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", storedTheme);
    setTheme(storedTheme);
  }, []);

  // Toggle between dark and light mode
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/education", label: "Academics", icon: true },
    { to: "/skills", label: "Skills" },
    { to: "/projects", label: "Projects" },
    { to: "/certificates", label: "Certificates" },
    { to: "/hobbies", label: "Resume" },
    { to: "/oraai", label: "OraAI" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br flex">
      {/* Sidebar */}
      <aside className="flex flex-col fixed top-20 left-0 h-[calc(100vh-5rem)] w-1/4 bg-opacity-80 shadow-lg rounded-r-xl z-40 p-4 scrollbar-hide">
        {" "}
        <div className="flex justify-between items-center mb-4">
          <div className="text-xl font-bold text-fuchsia-700">Dashboard</div>
        </div>
        <nav className="flex flex-col lg:gap-2 gap-2 justify-around lg:justify-start">
          {navItems.map(({ to, label, icon }) => (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-colors duration-200 ${
                location.pathname === to
                  ? "bg-fuchsia-100 text-fuchsia-700 font-semibold"
                  : "text-blue-600 hover:bg-green-100 hover:text-green-600"
              }`}
            >
              {label}
              {icon && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347M4.26 10.147A50.636 50.636 0 0 0 1.602 9.334 59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84 50.717 50.717 0 0 1-2.658.814M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>
              )}
            </Link>
          ))}
        </nav>
        {/* OraAI Logo */}
        <div className="mt-6 text-center">
          <Link to="/oraai">
            <img
              src="robot.png"
              alt="OraAI"
              className="mx-auto w-16 h-16 transition-transform duration-300 hover:scale-110"
            />
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 mt-20 px-4 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default Menu;
