import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import billaImage from "/Images/billa.png";
import cafeImage from "/Images/flower.png";
import todoImage from "/Images/todo.png";
import newsImage from "/Images/news.jpg";
import candyImage from "/Images/candy.png";
import responsiveImage from "/Images/responsive.png";
import bmiImage from "/Images/bmi.png";
import quizImage from "/Images/quiz.png";
const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "BMI Calculator",
      description:
        "BmiApp is a Flutter application that calculates Body Mass Index (BMI) based on user input for height and weight.",
      image: bmiImage,
      github: "https://github.com/atefElhamsa/bmi_app",
    },
    {
      id: 2,
      name: "Quiz App",
      description:
        "Interactive quiz app developed, offering multiple-choice questions, and tracking user scores.",
      image: quizImage,
      github: "https://github.com/atefElhamsa/Quiz-App",
    },
    {
      id: 3,
      name: "Billa App",
      description:
        "Billa App is a food ordering application, offering seamless browsing and ordering experience, adding foods to their favorite list.",
      image: billaImage,
      github: "https://github.com/atefElhamsa/Billa",
    },
    {
      id: 4,
      name: "Cafe App (Flower)",
      description:
        "A café management app developed, featuring an intuitive UI for menu browsing and ordering.",
      image: cafeImage,
      github: "https://github.com/atefElhamsa/Flower",
    },
    {
      id: 5,
      name: "Note App (Todo)",
      description:
        "A simple note-taking app built using Flutter, allowing users to create, save, archive, and manage notes efficiently.",
      image: todoImage,
      github: "https://github.com/atefElhamsa/todo-app",
    },
    {
      id: 6,
      name: "NewsApp (News wave)",
      description:
        "A news aggregator app was built using Api, fetching, and displaying the latest headlines from various sources.",
      image: newsImage,
      github: "https://github.com/atefElhamsa/News-App",
    },
    {
      id: 7,
      name: "E-commerce App (MrCandy)",
      description:
        "A feature-rich mobile application built using Flutter with Api for seamless online shopping experiences. It includes user authentication, product browsing, cart management, and order processing functionalities.",
      image: candyImage,
      github: "https://github.com/atefElhamsa/Mr-Candy-App",
    },
    {
      id: 8,
      name: "Responsive Dasgboard App",
      description:
        "A responsive dashboard application built using Flutter, featuring adaptive layouts and interactive components for an optimal user experience across devices.",
      image: responsiveImage,
      github: "https://github.com/atefElhamsa/responsive_app",
    },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-6">
          <h2 className="text-4xl font-extrabold text-center mb-12">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text drop-shadow-lg underline decoration-indigo-400 decoration-4 underline-offset-6">
              Projects
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 sm:h-60 object-cover"
                />

                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-3 py-2 bg-gray-700 rounded-lg shadow hover:bg-gray-600 transition text-sm"
                    >
                      <FaGithub className="mr-2" /> GitHub
                    </a>

                    {project.livedemo && (
                      <a
                        href={project.livedemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-3 py-2 bg-indigo-600 rounded-lg shadow hover:bg-indigo-500 transition text-sm"
                      >
                        <FaExternalLinkAlt className="mr-2" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
