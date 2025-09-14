/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaReact, FaAngular } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import dartIcon from "/Images/dart-icon.svg";
import flutterIcon from "/Images/flutter-icon.svg";
import cv from "/CV/Atef Elhamsa CV.pdf";
import myPhoto from "/Images/myPhoto.jpg";
const Navbar = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between px-10 py-25 bg-gray-900 text-white py-10 mt-20"
    >
      <div className="max-w-xl space-y-6 text-center md:text-left">
        <motion.h1
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-xl md:text-2xl font-normal">I'm</span>{" "}
          <span className="text-indigo-400 text-3xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Atef Elhamsa
          </span>
        </motion.h1>

        <motion.p
          className="text-xl font-medium text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Typewriter
            words={["A Flutter Developer", "UI & Ux Designer"]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={100}
            delaySpeed={1000}
          />
        </motion.p>

        <motion.p
          className="text-xl font-medium text-gray-300 mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <p> Building Modern Mobile Applications</p>
        </motion.p>

        <motion.div
          className="flex items-center justify-center md:justify-start gap-6 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <div className="bg-gray-800 p-3 rounded-xl shadow hover:shadow-lg transition">
            <img
              src={dartIcon}
              alt="Dart"
              className="text-cyan-400 text-3xl"
              height={30}
              width={30}
            />
          </div>
          <div className="bg-gray-800 p-3 rounded-xl shadow hover:shadow-lg transition">
            <img
              src={flutterIcon}
              alt="Flutter"
              className="text-red-600 text-3xl"
              height={30}
              width={30}
            />
          </div>
        </motion.div>

        <div className="flex gap-4 mt-6 justify-center md:justify-start">
          <motion.a
            href={cv}
            download
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow-lg "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.5 }}
          >
            Download CV
          </motion.a>

          <motion.a
            href="#contact"
            className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-lg shadow-lg"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#4f46e5",
              color: "#fff",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.8 }}
          >
            Contact Me
          </motion.a>
        </div>
      </div>

      <div className="relative flex justify-center items-center mt-10 md:mt-0">
        <div className="absolute w-40 md:w-64 h-40 md:h-64 rounded-full bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 opacity-40 animate-pulse blur-3xl"></div>

        <motion.img
          src={myPhoto}
          alt="Atef Elhamsa"
          className="rounded-full w-50 md:w-100 h-50 md:h-100 object-cover border-indigo-700 shadow-[0_0_25px_10px_rgba(99,102,241,0.5)] cursor-pointer"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
          }}
          whileHover={{
            scale: 1.05,
            rotate: [0, 3, -3, 0],
            transition: { duration: 0.5 },
          }}
        />
      </div>
    </section>
  );
};

export default Navbar;
