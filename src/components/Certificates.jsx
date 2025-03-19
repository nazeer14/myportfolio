import React from 'react'


const certificates = [
  {
    title: "React Developer Certificate",
    issuer: "Naresh IT",
    date: "January 2025",
    image: "null", // Replace with your certificate image URL
    link: "#", // Replace with the actual certificate link
  },
  {
    title: "Web Developer",
    issuer: "N.S.D.C",
    date: "September 2024",
    image: "/certificate.jpeg",
    link: "#",
  },
  {
    title: "Full Stack Development",
    issuer: "freeCodeCamp",
    date: "March 2024",
    image: "null",
    link: "#",
  },
];

const Certificates = () => {
  return (
    <div className="menu min-h-screen m-2 bg-black p-8 rounded-2xl border-1 shadow-xl shadow-blue-600 hover:shadow-emerald-400">
      <h1 className="text-4xl font-bold text-center mb-12 ">
        My Certificates
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="menu rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform border-1"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold ">
                {cert.title}
              </h2>
              <p className=" mb-4">Issued by: {cert.issuer}</p>
              <p className="">Date: {cert.date}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
