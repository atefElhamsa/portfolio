import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import dartIcon from "/Images/dart-icon.svg";
import flutterIcon from "/Images/flutter-icon.svg";
import cv from "/CV/Atef_Elhamsa_CV.pdf";
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const { t, language } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-20 lg:px-32 py-28 md:py-36 bg-slate-950 text-white overflow-hidden"
    >
      {/* Dynamic Animated Background Orbs matching Contact/Projects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(99,102,241,0.06),transparent_50%)]" />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(79,70,229,0.1)_0%,transparent_60%)]"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[10%] right-[5%] w-[35vw] h-[35vw] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(6,182,212,0.1)_0%,transparent_60%)]"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[30vw] h-[30vw] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(168,85,247,0.1)_0%,transparent_60%)]"
      />

      {/* Grid Pattern overlay matching original style */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-50 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-5xl space-y-8 text-center flex flex-col items-center mt-10 md:mt-0">

        {/* Floating Available Badge */}
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-900/40 backdrop-blur-md border border-slate-800 shadow-lg text-indigo-300 text-sm font-bold tracking-widest uppercase hover:bg-slate-900/70 transition-all duration-300 cursor-default"
        >
          <span className="relative flex h-3 w-3 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
          </span>
          {t("availableOpportunities")}
        </motion.div>

        {/* Massive Title */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-[6.5rem] font-black tracking-tight leading-[1.1]"
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <span className="text-xl md:text-3xl font-semibold text-slate-400 block mb-4 uppercase tracking-[0.2em]">{t("im")}</span>
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-sky-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(99,102,241,0.2)]">
            {t("name")}
          </span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          className="text-lg sm:text-2xl md:text-4xl font-bold text-slate-300 min-h-[50px] bg-slate-900/40 backdrop-blur-md border border-slate-800 flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-xl mx-auto w-fit max-w-[90vw]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          key={language}
        >
          <span className="text-indigo-400 mr-2 sm:mr-3 shrink-0">{"{ "}</span>
          <div className="whitespace-nowrap overflow-hidden">
            <Typewriter
              words={[
                t("typewriterFlutterDev"),
                t("typewriterInstructor"),
                t("typewriterUIUX"),
                t("typewriterMobileSpec")
              ]}
              loop
              cursor
              cursorStyle="_"
              cursorColor="#818cf8"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </div>
          <span className="text-indigo-400 ml-2 sm:ml-3 shrink-0">{" }"}</span>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-base md:text-xl text-slate-400 max-w-3xl font-medium leading-relaxed mx-auto pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {t("heroDesc")}
        </motion.p>

        {/* Tech Stack Floating Badges */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-6 pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center gap-3 bg-slate-900/40 backdrop-blur-md border border-slate-800 px-5 py-3 rounded-2xl shadow-xl hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-slate-900/70 transition-all duration-300 group">
            <img src={dartIcon} alt="Dart" className="w-8 h-8 group-hover:scale-110 transition-transform" />
            <span className="text-slate-200 font-bold tracking-wide">Dart</span>
          </div>
          <div className="flex items-center gap-3 bg-slate-900/40 backdrop-blur-md border border-slate-800 px-5 py-3 rounded-2xl shadow-xl hover:-translate-y-1 hover:border-sky-500/30 hover:bg-slate-900/70 transition-all duration-300 group">
            <img src={flutterIcon} alt="Flutter" className="w-8 h-8 group-hover:scale-110 transition-transform" />
            <span className="text-slate-200 font-bold tracking-wide">Flutter</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 pt-10 w-full justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-4 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-1 transition-all duration-300 overflow-hidden text-center"
          >
            <span className="relative z-10">{t("viewCv")}</span>
          </a>

          <a
            href="#contact"
            className="px-10 py-4 bg-slate-900/40 backdrop-blur-md border border-slate-800 hover:border-indigo-500/40 hover:bg-indigo-500/10 text-white font-bold text-lg rounded-2xl shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
          >
            {t("contactMe")}
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-3 text-slate-500 hover:text-indigo-400 transition-colors">
        <span className="text-[10px] uppercase tracking-[0.3em] font-black">{t("scrollDown")}</span>
        <a href="#about" className="w-[30px] h-[50px] rounded-full border-2 border-current p-1 flex justify-center backdrop-blur-sm bg-slate-950/50">
          <motion.div
            className="w-2 h-2 bg-current rounded-full"
            animate={{ y: [0, 24, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
