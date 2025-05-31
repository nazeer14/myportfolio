import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    title: "B-Tech",
    details: {
      Branch: "Computer Science and Engineering",
      University: "JNTU Hyderabad",
      College: "Sana Engineering College",
      "Academic Years": "2020 - 2024",
      Place: "Kodad",
      CGPA: "7.13",
    },
  },
  {
    title: "Intermediate",
    details: {
      Branch: "MPC",
      Board: "Telangana Board of Intermediate Education",
      College: "Laqshya Junior College",
      "Academic Years": "2018 - 2020",
      Place: "Kodad",
      Marks: "647",
    },
  },
  {
    title: "SSC",
    details: {
      Class: "10",
      Board: "TG Board of Secondary Education",
      School: "Govt. High School",
      "Academic Year": "2017 - 2018",
      Place: "T.B Palem",
      GPA: "7.5",
    },
  },
];

function Education() {
  return (
    <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 p-4">
      {educationData.map((edu, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="menu bg-black text-white rounded-2xl shadow-lg shadow-blue-800 hover:shadow-amber-200 transition-all duration-300 p-6"
        >
          <h2 className="text-2xl font-bold underline mb-4 text-center">
            {edu.title}
          </h2>
          <ul className="space-y-2 text-lg">
            {Object.entries(edu.details).map(([label, value], idx) => (
              <li key={idx}>
                <span className="text-yellow-500 font-semibold">{label}:</span>{" "}
                {value}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}

export default Education;
