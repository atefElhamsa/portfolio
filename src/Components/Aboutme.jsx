/* eslint-disable no-unused-vars */
import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaGithub } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { MdOutlineApi } from "react-icons/md";
import { GraduationCap, Briefcase, Award } from "lucide-react";
import { motion } from "framer-motion";

import dartIcon from "/Images/dart-icon.svg";
import flutterIcon from "/Images/flutter-icon.svg";
import blocIcon from "/Images/bloc-icon.svg";
import cv from "/CV/Atef_Elhamsa_CV.pdf";
import supabase from "/Images/supabase.jpg";

const skills = [
  {
    name: "HTML",
    level: "95%",
    icon: <FaHtml5 className="text-orange-550 text-2xl" />,
    glow: "group-hover:border-orange-500/35 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]",
    barColor: "from-orange-500 to-amber-500",
  },
  {
    name: "CSS",
    level: "90%",
    icon: <FaCss3Alt className="text-blue-500 text-2xl" />,
    glow: "group-hover:border-blue-500/35 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]",
    barColor: "from-blue-500 to-sky-500",
  },
  {
    name: "JavaScript",
    level: "85%",
    icon: <FaJs className="text-yellow-400 text-2xl" />,
    glow: "group-hover:border-yellow-400/35 group-hover:shadow-[0_0_20px_rgba(250,204,21,0.15)]",
    barColor: "from-yellow-400 to-amber-400",
  },
  {
    name: "Dart",
    level: "100%",
    icon: <img src={dartIcon} alt="Dart" className="w-6 h-6" />,
    glow: "group-hover:border-cyan-400/35 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]",
    barColor: "from-cyan-400 to-blue-500",
  },
  {
    name: "Flutter",
    level: "97%",
    icon: <img src={flutterIcon} alt="Flutter" className="w-6 h-6" />,
    glow: "group-hover:border-sky-400/35 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]",
    barColor: "from-sky-400 to-indigo-500",
  },
  {
    name: "Bloc State Management",
    level: "99%",
    icon: <img src={blocIcon} alt="Bloc" className="w-6 h-6" />,
    glow: "group-hover:border-indigo-400/35 group-hover:shadow-[0_0_20px_rgba(129,140,248,0.15)]",
    barColor: "from-indigo-400 to-purple-650",
  },
  {
    name: "GitHub",
    level: "95%",
    icon: <FaGithub className="text-slate-200 text-2xl" />,
    glow: "group-hover:border-slate-400/35 group-hover:shadow-[0_0_20px_rgba(148,163,184,0.15)]",
    barColor: "from-slate-400 to-slate-600",
  },
  {
    name: "Firebase",
    level: "90%",
    icon: <SiFirebase className="text-amber-500 text-2xl" />,
    glow: "group-hover:border-amber-500/35 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]",
    barColor: "from-amber-500 to-orange-500",
  },
  {
    name: "REST APIs",
    icon: <MdOutlineApi className="text-emerald-450 text-2xl" />,
    level: "95%",
    glow: "group-hover:border-emerald-450/35 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]",
    barColor: "from-emerald-400 to-teal-500",
  },
  {
    name: "Supabase",
    level: "80%",
    icon: <img src={supabase} alt="Supabase" className="w-6 h-6 rounded" />,
    glow: "group-hover:border-emerald-500/35 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]",
    barColor: "from-emerald-500 to-teal-600",
  },
  {
    name: "Riverpod & Provider",
    level: "95%",
    icon: <Award className="text-cyan-300 text-2xl" />,
    glow: "group-hover:border-cyan-300/35 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]",
    barColor: "from-cyan-300 to-indigo-500",
  },
];

const timeline = [
  {
    date: "July 2025 – August 2025",
    institution: "Information Technology Institute (ITI)",
    branch: "Tanta Branch – Egypt",
    role: "Intensive Code Camp – Summer Internship",
    details: "Mobile App Developer using Flutter",
    type: "internship",
  },
  {
    date: "May 2025 – July 2025",
    institution: "National Telecommunication Institute (NTI)",
    branch: "Tanta Branch – Egypt",
    role: "Intensive Code Camp – Internship",
    details: "Mobile App Developer using Flutter",
    type: "internship",
  },
  {
    date: "June 2025 – October 2025",
    institution: "Core Academy",
    branch: "Tanta – Egypt",
    role: "Instructor",
    details: "Teaching Mobile App Development using Flutter",
    type: "teaching",
  },
];

const Aboutme = () => {
  return (
    <section
      id="about"
      className="relative bg-slate-950 text-slate-300 py-24 px-6 md:px-20 lg:px-32 flex flex-col justify-start overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.06),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.04),transparent_50%)]" />

      {/* About Section Main Intro */}
      <motion.div
        className="max-w-4xl space-y-6 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-xs uppercase tracking-[0.25em] text-indigo-400 font-bold mb-2">About Me</h2>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          I'm{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Atef Elhamsa
          </span>
        </h1>

        <h3 className="text-xl md:text-2xl font-semibold text-slate-200">
          Flutter Developer & Instructor
        </h3>

        <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-3xl">
          Passionate Flutter Developer skilled in{" "}
          <span className="text-cyan-450 font-semibold">Dart</span>,{" "}
          <span className="text-cyan-400 font-semibold">Flutter</span>, and
          cross-platform mobile development. I specialize in building responsive, user-friendly mobile applications with clean, efficient code and modern UI designs. With experience in state management solutions like Provider, Riverpod, and Bloc, as well as Firebase and RESTful APIs, I focus on delivering seamless performance and engaging user experiences. Continuously learning and exploring new technologies, I strive to create innovative, high-quality mobile applications.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href={cv}
            download
            className="px-6 py-2.5 bg-indigo-650 hover:bg-indigo-600 text-white font-medium rounded-xl shadow-md transition-all duration-200 hover:-translate-y-0.5"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 border border-slate-800 hover:border-indigo-500/40 text-indigo-450 hover:text-indigo-400 font-medium rounded-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Education & Internships Timeline */}
      <section className="py-20 relative z-10 w-full">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <h2 className="text-3xl font-bold text-white relative inline-block">
              Experience & Education
              <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-indigo-500 rounded" />
            </h2>

            {/* Timeline element */}
            <div className="relative pl-6 md:pl-10 border-l border-slate-800 space-y-10">
              {timeline.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Timeline icon indicator */}
                  <span className="absolute -left-[39px] md:-left-[55px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full border border-slate-800 bg-slate-950 text-indigo-400 transition-all duration-300 group-hover:border-indigo-550 group-hover:text-indigo-350 shadow-md group-hover:shadow-[0_0_10px_rgba(99,102,241,0.2)]">
                    {item.type === "teaching" ? (
                      <Briefcase className="w-4 h-4" />
                    ) : (
                      <GraduationCap className="w-4 h-4" />
                    )}
                  </span>

                  {/* Glassmorphic timeline card */}
                  <div className="hover-shimmer bg-slate-900/40 border border-slate-900 group-hover:border-slate-800/80 p-6 md:p-8 rounded-2xl shadow-md transition-all duration-300 group-hover:bg-slate-900/60 group-hover:-translate-y-1">
                    <span className="text-xs font-semibold text-indigo-450 bg-indigo-550/10 px-3 py-1 rounded-full border border-indigo-550/20 inline-block mb-3">
                      {item.date}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {item.institution}
                    </h3>
                    <p className="text-sm text-slate-400 mb-3 font-medium flex items-center gap-1">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      {item.branch}
                    </p>
                    <p className="text-slate-350 text-base">
                      {item.role} &ndash;{" "}
                      <span className="text-indigo-300 font-semibold">
                        {item.details}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="w-full relative z-10 pt-4"
      >
        <div id="skills" className="w-full">
          <h2 className="text-3xl font-bold text-white mb-2 relative inline-block">
            My Tech Stack
            <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-indigo-500 rounded" />
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-3 mb-10 max-w-xl">
            A specialized toolkit focused on creating ultra-performance, pixel-perfect mobile applications and fast-loading web interfaces.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
            {skills.map((skill, i) => (
              <div
                key={i}
                className={`group hover-shimmer bg-slate-900/35 border border-slate-900/80 p-5 rounded-2xl transition-all duration-300 hover:bg-slate-900/65 hover:-translate-y-1 w-full ${skill.glow}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="transition-transform duration-300 group-hover:scale-110">
                      {skill.icon}
                    </span>
                    <span className="text-slate-200 font-medium group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium group-hover:text-indigo-400 transition-colors">
                    {skill.level}
                  </span>
                </div>
                {/* Visual meter bar */}
                <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden">
                  <motion.div
                    className={`bg-gradient-to-r ${skill.barColor} h-full rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
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
