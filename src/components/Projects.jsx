import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Automatic Detection of Genetic Diseases in Pediatric Age ',
    description: 'Inherited retinal diseases cause severe visual deficits in children.',
    techStack: ['Python'],
    link: ''
  },
  {
    id: 2,
    title: 'Book Reading Platform',
    description: 'International Books avialable for reading enhance your brain power',
    techStack: ['React', 'tailwind'],
    link: 'https://readbook14.netlify.app'
  },
  {
    id: 3,
    title: 'Personal Blog',
    description: 'A minimalist blog to share thoughts, built with a focus on performance and SEO.',
    techStack: ['React', 'Markdown', 'Tailwind CSS'],
    link: ''
  }
];

const Projects = () => {
  return (
    <div className="menu min-h-screen bg-black rounded-3xl py-12 px-6 md:px-12 my-5 mx-3 border-1 shadow-2xl shadow-blue-600 hover:shadow-emerald-400">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            className="menu rounded-2xl shadow-lg overflow-hidden border-1"
          >
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4 ">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="text-sm bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
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
