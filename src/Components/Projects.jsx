import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "E-commerce Jumia Clone",
      description:
        "Built with Onion Architecture, Entity Framework, and AutoMapper. Features localization and a scalable Admin Dashboard.",
      image: "Images/Jumia.png",
      github: "https://github.com/Hebaabdelaal1/jumia-clone",
    },
    {
      id: 2,
      name: "E-Commerce B.Tech Clone",
      description: "Frontend clone using JavaScript, HTML5, and CSS3.",
      image: "Images/B.tech.png",
      github: "https://github.com/Hebaabdelaal1/B.TECH-Frontend",
    },
    {
      id: 3,
      name: "Udemy Clone",
      description:
        "Frontend with React.js, Firebase backend, and Material-UI for modern design.",
      image: "Images/udemy.png",
      github: "https://github.com/Hebaabdelaal1/-udemy-clone",
      livedemo: "https://udemy-client-791t.vercel.app/",
    },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white" id="projects">
                  <motion.div
      
        initial={{ opacity: 0, y: 50 }}          
        whileInView={{ opacity: 1, y: 0 }}      
        viewport={{ once: true, amount: 0.2 }}  
        transition={{ duration: 0.8, delay: .2 }} 
      >
      <div className="max-w-6xl mx-auto px-6">
  
        <h2 className="text-4xl font-extrabold text-center mb-12">
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text drop-shadow-lg underline decoration-indigo-400 decoration-4 underline-offset-6">
            Projects
          </span>
        </h2>

       
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
            >
            
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover"
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
