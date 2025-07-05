import React, { useState } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Hobbies from "./components/Resume";
import PopupPage from "./pages/PopupPage";
import OraAI from "./components/OraAI";

function App() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/education", label: "Academics", icon: true },
    { to: "/skills", label: "Skills" },
    { to: "/projects", label: "Projects" },
    { to: "/certificates", label: "Certificates" },
    { to: "/hobbies", label: "Resume" },
    { to: "/oraai", label: "OraAI" },
  ];

  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.4 },
  };

  const listVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br relative">
      {/* Header */}
      <Header />

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden fixed top-16 left-4 z-50 pt-10">
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-3 bg-purple-600 text-white rounded-lg shadow-md"
        >
          ☰ Menu
        </button>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <div className="flex mt-10">
        {/* Sidebar */}
        <aside
          className={`
      shadow-lg  transition-transform duration-300 ease-in-out
      h-[calc(100vh-5rem)] overflow-y-auto
      fixed top-0 left-0 w-64 z-50 transform 
      ${sidebarOpen ? "translate-x-0 bg-gray-300" : "-translate-x-full"}
      lg:translate-x-0 lg:static lg:w-1/4 lg:h-auto lg:z-auto 
    `}
        >
          <div className="h-[4.5rem] lg:h-20 flex items-center justify-between px-4 border-b">
            <span className="text-xl font-bold text-fuchsia-700">
              Dashboard
            </span>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-2xl text-gray-600"
            >
              ✖
            </button>
          </div>

          <motion.nav
            className="p-4 overflow-y-auto h-[calc(100vh-5rem)] flex flex-col gap-2"
            variants={listVariants}
            initial="initial"
            animate="animate"
          >
            {navItems.map(({ to, label, icon }) => (
              <motion.div key={to} variants={itemVariants}>
                <Link
                  to={to}
                  onClick={() => setSidebarOpen(false)}
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
                        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347"
                      />
                    </svg>
                  )}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:w-3/4  px-4 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div key={location.pathname} {...pageTransition}>
              <div className="space-y-6 pb-10">
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<Home />} />
                  <Route path="/education" element={<Education />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/certificates" element={<Certificates />} />
                  <Route path="/hobbies" element={<Hobbies />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/pup" element={<PopupPage />} />
                  <Route path="/oraai" element={<OraAI />} />
                </Routes>
              </div>
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
      {/* Footer */}
      <footer className="w-full mt-2 text-center p-4 bg-gradient-to-br bg-opacity-50 shadow-inner">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
