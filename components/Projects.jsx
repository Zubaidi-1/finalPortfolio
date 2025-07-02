import { useState } from "react";
import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaHtml5,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { TbBrandMysql, TbBrandTailwind } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const skills = [
    { icon: <FaReact size={40} />, label: "ReactJS" },
    { icon: <FaJs size={40} />, label: "JavaScript" },
    { icon: <FaNodeJs size={40} />, label: "Node.js" },
    { icon: <TbBrandMysql size={40} />, label: "MySQL" },
    { icon: <TbBrandTailwind size={40} />, label: "Tailwind CSS" },
    { icon: <FaHtml5 size={40} />, label: "HTML" },
  ];

  const projects = [
    {
      name: "Price Match",
      description:
        "A calculator app that helps employees get prices for parts. Built with React and Tailwind CSS.",
      imagePath: "/finalPortfolio/image.png",
      github: "https://github.com/zubaidi-1/PriceMatch",
      live: "https://zubaidi-1.github.io/PriceMatch/",
    },
    {
      name: "Social Media",
      description:
        "A website for people to post, like and follow other users. Built with React, Tailwind CSS and NodeJS.",
      imagePath: "/finalPortfolio/image.png",
      github: "https://github.com/zubaidi-1/SocialMedia",
      live: "https://zubaidi-1.github.io/SocialMedia",
    },
  ];

  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-[#2c2c2c] px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
      {/* Skills Section */}
      <div className="w-full max-w-xl">
        <h2 className="text-white text-3xl mb-6">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex gap-2 items-center bg-[#d62828] p-4 rounded text-white w-[48%] cursor-pointer shadow-md"
            >
              {skill.icon}
              <p className="text-lg">{skill.label}</p>
            </motion.span>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="w-full max-w-3xl">
        <h2 className="text-white text-3xl mb-6 text-center md:text-left">
          Projects
        </h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-[#3a3a3a] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              <div className="w-full md:w-1/2 h-64 md:h-auto">
                <img
                  src={projects[current].imagePath}
                  alt={projects[current].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-white bg-[#d62828] flex flex-col justify-between w-full">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    {projects[current].name}
                  </h3>
                  <p className="text-gray-200">
                    {projects[current].description}
                  </p>
                </div>
                <div className="pt-6 flex gap-4">
                  <a
                    href={projects[current].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black transition"
                    aria-label="GitHub"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href={projects[current].live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black transition"
                    aria-label="Live Site"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <div className="flex justify-center mt-6 gap-6">
            <button
              onClick={handlePrev}
              className="bg-[#d62828] text-white p-3 rounded-full shadow-lg hover:bg-[#bb2020] transition duration-300"
              aria-label="Previous Project"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="bg-[#d62828] text-white p-3 rounded-full shadow-lg hover:bg-[#bb2020] transition duration-300"
              aria-label="Next Project"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
