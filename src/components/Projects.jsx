import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Book Daily Worker",
    description:
      "Platform to connect users with daily workers for household services.",
    techStack: ["Java", "React", "Spring Boot", "MySQL", "TailwindCSS"],
    link: "https://github.com/nazeer14/QuickServ-frontend.git",
  },
  {
    id: 2,
    title: "Automatic Detection of Genetic Diseases in Pediatric Age",
    description:
      "Inherited retinal diseases cause severe visual deficits in children.",
    techStack: ["Python"],
    link: "https://github.com/nazeer14/Major-Project.git",
  },
  {
    id: 3,
    title: "Book Reading Platform",
    description:
      "International books available for reading to enhance your brain power.",
    techStack: ["React", "TailwindCSS"],
    link: "https://readbook14.netlify.app",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br  rounded-3xl py-12 px-6 md:px-12 my-5 mx-3 border shadow-2xl shadow-blue-600 hover:shadow-emerald-400 transition">
      <h2 className="text-4xl font-bold text-center  mb-12">My Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className=" rounded-2xl shadow-lg overflow-hidden border hover:shadow-xl"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-purple-500 mb-3">
                {project.title}
              </h3>
              <p className=" mb-4">
                {project.description || "No description provided."}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium bg-gradient-to-r from-purple-300 to-pink-300 text-gray-800 px-3 py-1 rounded-full shadow"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} project`}
                className="inline-block w-full text-center px-5 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
