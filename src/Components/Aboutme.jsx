import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaAngular,
  FaReact,
  FaGithub,
  FaSass,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiNextdotjs,
  SiMaterialdesign,
} from "react-icons/si";
import { MdApi } from "react-icons/md";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import dartIcon from "/Images/dart-icon.svg";
import flutterIcon from "/Images/flutter-icon.svg";
import blocIcon from "/Images/bloc-icon.svg";
import cv from "/CV/Atef Elhamsa CV.pdf";
import supabase from "/Images/supabase.jpg";
const skills = [
  {
    name: "HTML",
    level: "95%",
    icon: <FaHtml5 className="text-orange-500 text-2xl" />,
  },
  {
    name: "CSS",
    level: "90%",
    icon: <FaCss3Alt className="text-blue-500 text-2xl" />,
  },
  {
    name: "JavaScript",
    level: "85%",
    icon: <FaJs className="text-yellow-400 text-2xl" />,
  },
  {
    name: "Dart",
    level: "100%",
    icon: <img src={dartIcon} alt="Dart" className="w-6 h-6" />,
  },
  {
    name: "Flutter",
    level: "97%",
    icon: <img src={flutterIcon} alt="Flutter" className="w-6 h-6" />,
  },
  {
    name: "Bloc State Management",
    level: "99%",
    icon: <img src={blocIcon} alt="Bloc" className="w-6 h-6" />,
  },
  {
    name: "GitHub",
    level: "95%",
    icon: <FaGithub className="text-gray-300 text-2xl" />,
  },
  {
    name: "Firebase",
    level: "90%",
    icon: <SiFirebase className="text-yellow-500 text-2xl" />,
  },
  {
    name: "REST APIs",
    level: "95%",
    icon: <MdApi className="text-green-400 text-2xl" />,
  },
  {
    name: "Supabase",
    level: "80%",
    icon: <img src={supabase} alt="Supabase" className="w-6 h-6" />,
  },
];

const Aboutme = () => {
  return (
    <section
      id="about"
      className="bg-gray-900 text-gray-300 min-h-screen px-6 md:px-20 flex flex-col justify-start"
    >
      <motion.div
        className="max-w-3xl text-left space-y-6 mt-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-3xl md:text-6xl font-extrabold text-white">
          I'm{" "}
          <span className="text-indigo-400 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Atef Elhamsa
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
          Flutter Developer
        </h2>

        <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
          Passionate Flutter Developer skilled in{" "}
          <span className="text-indigo-400 font-semibold">Dart</span>,{" "}
          <span className="text-cyan-400 font-semibold">Fluter</span>, and
          cross-platform mobile development using Flutter. I specialize in
          building responsive, user-friendly mobile applications with clean,
          efficient code and modern UI designs. With experience in state
          management solutions like Provider, Riverpod, and Bloc, as well as
          Firebase and RESTful APIs, I focus on delivering seamless performance
          and engaging user experiences. Continuously learning and exploring new
          technologies, I strive to create innovative, high-quality mobile
          applications.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-start">
          <a
            href={cv}
            download
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-lg shadow-lg hover:bg-indigo-600 hover:text-white transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-extrabold text-center mb-12">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text drop-shadow-lg underline decoration-indigo-400 decoration-4 underline-offset-6">
                Education
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
                <p className="text-sm text-indigo-400 font-medium mb-2">
                  July 2025 – August 2025
                </p>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Information Technology Institute (ITI), Tanta Branch
                </h3>
                <p className="text-gray-300">
                  Tanta – Egypt
                  <br />
                  Intensive Code Camp –{" "}
                  <span className="text-indigo-300 font-semibold">
                    Summer Internship Mobile App Developer using Flutter
                  </span>
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
                <p className="text-sm text-indigo-400 font-medium mb-2">
                  May 2025 – July 2025
                </p>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  National Telecommunication Institute (NTI), Tanta Branch
                </h3>
                <p className="text-gray-300">
                  Tanta – Egypt
                  <br />
                  Intensive Code Camp –{" "}
                  <span className="text-indigo-300 font-semibold">
                    Internship Mobile App Developer using Flutter
                  </span>
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
                <p className="text-sm text-indigo-400 font-medium mb-2">
                  June 2025 – October 2025
                </p>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Instructor at Core Academy
                </h3>
                <p className="text-gray-300">
                  Tanta – Egypt
                  <br />
                  Instructor –{" "}
                  <span className="text-indigo-300 font-semibold">
                    Teaching Mobile App Development using Flutter
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div id="skills" className="max-w-7xl  pt-8 px-4">
          <h2 className="text-4xl font-extrabold text-center mb-12">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text drop-shadow-lg underline decoration-indigo-400 decoration-4 underline-offset-6">
              Skills
            </span>
          </h2>

          <p className="mb-10 text-gray-400 text-center">
            A focused stack for building fast, accessible, pixel–perfect
            interfaces.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="bg-gray-800 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl w-full h-full"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {skill.icon}
                    <span className="text-white font-medium">{skill.name}</span>
                  </div>
                  {/* <span className="text-blue-400 font-semibold">{skill.level}</span> */}
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-blue-500 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Aboutme;
