import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  AiFillHome,
  AiOutlineBook,
  AiOutlineTool,
  AiOutlineProject,
  AiOutlineFileText,
  AiOutlineSmile,
  AiOutlineRobot,
} from "react-icons/ai"; // Import icons
import "./theme.css";

function Menu() {
  const location = useLocation();

  const navItems = [
    { to: "/", label: "Home", icon: <AiFillHome /> },
    { to: "/education", label: "Academics", icon: <AiOutlineBook /> },
    { to: "/skills", label: "Skills", icon: <AiOutlineTool /> },
    { to: "/projects", label: "Projects", icon: <AiOutlineProject /> },
    { to: "/certificates", label: "Certificates", icon: <AiOutlineFileText /> },
    { to: "/resume", label: "Resume", icon: <AiOutlineSmile /> },
    { to: "/oraai", label: "OraAI", icon: <AiOutlineRobot /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br flex shadow-lg ">
      {/* Sidebar */}
      <aside className="flex flex-col fixed top-20 left-0 h-[calc(100vh-5rem)] w-1/4 bg-opacity-80 shadow-lg rounded-r-xl z-40 p-4 scrollbar-hide">
        <div className="flex justify-between items-center mb-4">
          <div className="text-xl font-bold text-fuchsia-700">Dashboard</div>
        </div>

        <nav className="flex flex-col gap-2">
          {navItems.map(({ to, label, icon }) => (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-300 transform hover:translate-x-1 hover:scale-[1.02] ${
                location.pathname === to
                  ? "bg-fuchsia-100 text-fuchsia-700 font-semibold"
                  : "text-blue-600 hover:bg-green-100 hover:text-green-600"
              }`}
            >
              <span style={{ color: "black", fontSize: "24px" }}>
                {icon}
              </span>
              {label}
            </Link>
          ))}
        </nav>

        {/* OraAI Logo */}
        <div className="mt-6 text-center">
          <Link to="/oraai">
            <img
              src="/robot.png"
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
