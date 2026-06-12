import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import dartIcon from "/Images/dart-icon.svg";
import flutterIcon from "/Images/flutter-icon.svg";
import cv from "/CV/Atef_Elhamsa_CV.pdf";
import myPhoto from "/Images/myPhoto.jpg";
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const { t, language } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 lg:px-32 py-28 md:py-36 bg-slate-950 text-white overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_75%,rgba(236,72,153,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

      {/* Hero Left Content */}
      <div className="relative z-10 max-w-xl space-y-6 text-center md:text-start flex flex-col items-center md:items-start order-2 md:order-1 mt-10 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wider"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          {t("availableOpportunities")}
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-xl md:text-2xl font-light text-slate-400 block mb-2">{t("im")}</span>
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent drop-shadow-md">
            {t("name")}
          </span>
        </motion.h1>

        <motion.div
          className="text-xl md:text-2xl font-medium text-slate-300 min-h-[40px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          key={language} // Remount typewriter on language switch to update values
        >
          <span className="text-indigo-400">&gt; </span>
          <Typewriter
            words={[
              t("typewriterFlutterDev"),
              t("typewriterInstructor"),
              t("typewriterUIUX"),
              t("typewriterMobileSpec")
            ]}
            loop
            cursor
            cursorStyle="|"
            cursorColor="#818cf8"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </motion.div>

        <motion.p
          className="text-base md:text-lg text-slate-400 max-w-md font-normal leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {t("heroDesc")}
        </motion.p>

        {/* Tech Stack Mini Badge */}
        <motion.div
          className="flex items-center gap-4 mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <span className="text-sm text-slate-500 font-medium uppercase tracking-wider">{t("techStack")}</span>
          <div className="flex gap-3">
            <div className="group relative bg-slate-900 border border-slate-800 hover:border-cyan-500/50 p-2.5 rounded-xl shadow-lg transition-all duration-300 hover:shadow-cyan-500/10 hover:-translate-y-0.5">
              <img src={dartIcon} alt="Dart" className="w-6 h-6 transition-transform group-hover:scale-110" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-xs px-2 py-0.5 rounded border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none text-slate-200">Dart</span>
            </div>
            <div className="group relative bg-slate-900 border border-slate-800 hover:border-sky-500/50 p-2.5 rounded-xl shadow-lg transition-all duration-300 hover:shadow-sky-500/10 hover:-translate-y-0.5">
              <img src={flutterIcon} alt="Flutter" className="w-6 h-6 transition-transform group-hover:scale-110" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-xs px-2 py-0.5 rounded border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none text-slate-200">Flutter</span>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats Grid */}
        <motion.div
          className="grid grid-cols-3 gap-6 py-5 border-y border-slate-900 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="text-center md:text-start">
            <span className="block text-2xl md:text-3xl font-extrabold text-cyan-400">6+</span>
            <span className="text-[9px] sm:text-[10px] text-slate-500 font-bold uppercase tracking-wider leading-tight block mt-1">{t("completedProjects")}</span>
          </div>
          <div className="text-center md:text-start border-x border-slate-900 px-4">
            <span className="block text-2xl md:text-3xl font-extrabold text-indigo-400">ITI / NTI</span>
            <span className="text-[9px] sm:text-[10px] text-slate-500 font-bold uppercase tracking-wider leading-tight block mt-1">{t("certifiedSpecialist")}</span>
          </div>
          <div className="text-center md:text-start">
            <span className="block text-2xl md:text-3xl font-extrabold text-purple-400">{t("active")}</span>
            <span className="text-[9px] sm:text-[10px] text-slate-500 font-bold uppercase tracking-wider leading-tight block mt-1">{t("activeInstructor")}</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 pt-4 w-full justify-center md:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <a
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-indigo-500/25 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 text-center"
          >
            {t("viewCv")}
          </a>

          <a
            href="#contact"
            className="px-8 py-3.5 border border-slate-850 hover:border-indigo-500/50 bg-slate-900/60 hover:bg-indigo-500/10 text-slate-350 hover:text-white font-semibold rounded-xl shadow-md hover:-translate-y-0.5 transition-all duration-200 text-center"
          >
            {t("contactMe")}
          </a>
        </motion.div>
      </div>

      {/* Hero Right Avatar Content */}
      <div className="relative z-10 flex justify-center items-center order-1 md:order-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group"
        >
          {/* Animated decorative spinning & pulsing glow rings */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 via-indigo-600 to-purple-600 opacity-30 blur-2xl group-hover:opacity-50 transition-all duration-500 animate-pulse" />

          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 opacity-75 blur-sm group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

          {/* Glowing container border */}
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-indigo-500/50 p-1.5 bg-slate-950">
            <motion.img
              src={myPhoto}
              alt={t("name")}
              className="rounded-full w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <a href="#about" className="flex flex-col items-center gap-2 text-slate-500 hover:text-indigo-400 transition-colors">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold">{t("scrollDown")}</span>
          <div className="w-[24px] h-[40px] rounded-full border-2 border-slate-700 p-1 flex justify-center">
            <motion.div
              className="w-1.5 h-1.5 bg-indigo-500 rounded-full"
              animate={{
                y: [0, 16, 0],
                opacity: [1, 0.5, 1]
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
