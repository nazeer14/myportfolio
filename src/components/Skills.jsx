import React from 'react';
import java from '../images/491909.jpg';
import javaee from '../images/tutorial-java-ee-logo.png';
import js from '../images/jscss.jpeg';
import react from '../images/react logo.jpeg';
import spring from '../images/spring logo.jpeg';
import sql from '../images/sql1.jpeg';
import git from '../images/git.jpeg';
import github from '../images/github.jpeg';
import jira from '../images/Jira-Symbol.png';
import pm from '../images/postman-600на400.png';


const skills = [
  { src: java, alt: 'Java SE' },
  { src: javaee, alt: 'Java EE' },
  { src: js, alt: 'JavaScript' },
  { src: sql, alt: 'SQL' },
  { src: react, alt: 'React' },
  { src: spring, alt: 'Spring Boot' },
];

const tools = [
  { src: git, alt: 'Git' },
  { src: github, alt: 'GitHub' },
  { src: pm, alt: 'Postman' },
  { src: jira, alt: 'Jira' },
];


function Skills() {
  return (
    <div className="m-4">
      <h2 className="text-center text-2xl font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 py-3 rounded-2xl mb-6 shadow-md">
        Programming Languages & Frameworks
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((item) => (
          <div
            key={item.alt}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-transform hover:scale-105 p-2 text-white dark:bg-gray-900"
            tabIndex={0}
            aria-label={item.alt + " skill"}
          >
            <img
              src={item.src}
              alt={item.alt + " logo"}
              className="w-full h-40 object-contain rounded-lg"
              title={item.alt}
              loading="lazy"
            />
            <p className="text-center text-sm mt-2 font-medium">{item.alt}</p>
          </div>
        ))}
      </div>

      <h2 className="text-center text-3xl font-semibold text-white bg-gradient-to-r from-pink-500 to-yellow-500 py-3 rounded-2xl mt-10 mb-6 shadow-md">
        Tools
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {tools.map((item) => (
          <div
            key={item.alt}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-transform hover:scale-105 p-2 text-white bg-white dark:bg-gray-900"
            tabIndex={0}
            aria-label={item.alt + " tool"}
          >
            <img
              src={item.src}
              alt={item.alt + " logo"}
              className="w-full h-40 object-contain rounded-lg"
              title={item.alt}
              loading="lazy"
            />
            <p className="text-center text-sm mt-2 font-medium">{item.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Skills;
