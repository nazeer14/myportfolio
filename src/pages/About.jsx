import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function About() {
  return (
    <section className="py-10 px-4 lg:px-20 bg-gradient-to-br">
      <div className="max-w-5xl mx-auto rounded-2xl shadow-2xl shadow-fuchsia-600 hover:shadow-indigo-500 transition-all duration-300 p-6 sm:p-10 space-y-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-fuchsia-500 border-b border-fuchsia-500 pb-2">
          👨‍💻 About Me
        </h1>

        <p className="text-lg sm:text-xl leading-relaxed ">
          Hi, I'm <span className="text-fuchsia-400 font-semibold">Nazeer</span>! I'm a passionate web developer
          specializing in building dynamic and user-friendly web applications.
          <br /><br />
          With a solid foundation in Java, Spring Boot, JSP, and React.js, I love crafting seamless user experiences
          and scalable backend systems.
          <br /><br />
          Currently, I'm developing a full-featured platform that allows users to search for tourism spots, hotels,
          and restaurants, with an emphasis on clean design and performance.
        </p>

        <h2 className="text-2xl text-red-400 font-semibold">🧠 Skills</h2>
        <ul className="grid gap-3 sm:grid-cols-2 text-lg lg:text-xl pl-4 list-disc list-inside text-blue-500">
          <li><strong className="text-fuchsia-500">Frontend:</strong> HTML, CSS, JavaScript, React.js, JSP</li>
          <li><strong className="text-fuchsia-500">Backend:</strong> Java, Spring Boot, Servlets</li>
          <li><strong className="text-fuchsia-500">Database:</strong> SQL, JDBC</li>
          <li><strong className="text-fuchsia-500">Other:</strong> MVC Architecture, REST APIs</li>
        </ul>

        <h2 className="text-2xl text-red-400 font-semibold">🚀 What Drives Me</h2>
        <p className="text-lg sm:text-xl leading-relaxed">
          I enjoy solving complex problems and turning ideas into real-world solutions. My development philosophy
          revolves around writing clean, maintainable, and scalable code—while keeping up with the latest trends and tools
          in tech.
        </p>

        <h2 className="text-2xl text-red-400 font-semibold">🤝 Let's Connect</h2>
        <p className="text-lg sm:text-xl leading-relaxed">
          I'm always eager to collaborate on new and exciting projects. Whether you're building a product or just want to chat tech—let's connect!
        </p>

        {/* Social Media Icons */}
        <div className="flex gap-6 justify-center pt-4">
          <a
            href="https://github.com/nazeer14"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 text-2xl transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/nazeer-shaik14/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-gray-500 text-2xl transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:shaiknazeer141914@gmail.com"
            className="text-red-400 hover:text-gray-500 text-2xl transition duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
