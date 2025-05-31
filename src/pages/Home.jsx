import React from "react";
import pic from "../images/profilephoto.jpg";
import { motion } from "framer-motion";
import Certificates from "../components/Certificates";
import Projects from "../components/Projects";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate=useNavigate();
  return (
    <div className="flex flex-col gap-20 lg:mt-10 mt-32 lg:px-16 px-4">
      {/* Hero Section */}
      <motion.div
        whileHover={{ opacity: 1, scale: 1.02 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="menu flex flex-col-reverse lg:flex-row items-center justify-between rounded-3xl p-8 shadow-xl shadow-amber-200 hover:shadow-purple-500 transition-all duration-300"
      >
        {/* Text Section */}
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl font-bold text-purple-500">Hire Me...</h1>
          <p className="text-xl leading-relaxed">
            Hello! I'm{" "}
            <span className="font-semibold text-cyan-400">Nazeer</span>, a
            passionate and driven{" "}
            <span className="text-red-500 font-bold text-2xl">
              Full Stack Java Developer
            </span>{" "}
            with a strong foundation in Computer Science and Engineering.
            <br />I graduated in 2024 and am now eager to contribute to
            real-world projects with creativity and dedication. I love building
            modern web applications that solve meaningful problems.
          </p>
        </div>

        {/* Profile Image */}
        <div className="mb-6 lg:mb-0 lg:ml-8 flex-shrink-0">
          <img
            src={pic}
            alt="Nazeer"
            className="rounded-full shadow-md border-4 border-purple-400 lg:w-64 lg:h-64 w-48 h-48 object-cover"
          />
        </div>
      </motion.div>

      {/* Certificates Section */}
      <motion.div
        whileHover={{ opacity: 1, scale: 1.02 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex items-center justify-center"
      >
        <Certificates />
      </motion.div>

      {/* Projects Section */}
      <motion.div
        whileHover={{ opacity: 1, scale: 1.02 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex items-center justify-center"
      >
        <Projects />
      </motion.div>
      <div className="mt-6" onClick={()=>navigate('/contact')}>
        <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-xl transition">
          Contact Me
        </button>
      </div>
    </div>
  );
}

export default Home;
