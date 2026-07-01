/* eslint-disable no-unused-vars */
import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaGithub, FaNodeJs } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { MdOutlineApi } from "react-icons/md";
import { GraduationCap, Briefcase, Award } from "lucide-react";
import { motion } from "framer-motion";

import dartIcon from "/Images/dart-icon.svg";
import flutterIcon from "/Images/flutter-icon.svg";
import blocIcon from "/Images/bloc-icon.svg";
import cv from "/CV/Atef_Elhamsa_CV.pdf";
import supabase from "/Images/supabase.jpg";
import { useLanguage } from "../context/LanguageContext";

const skills = [
  {
    name: "HTML",
    level: "lvlSolidFoundation",
    icon: <FaHtml5 className="text-orange-550 text-2xl" />,
    glow: "group-hover:border-orange-500/35 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]",
    barColor: "from-orange-500 to-amber-500",
  },
  {
    name: "CSS",
    level: "lvlPixelPerfect",
    icon: <FaCss3Alt className="text-blue-500 text-2xl" />,
    glow: "group-hover:border-blue-500/35 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]",
    barColor: "from-blue-500 to-sky-500",
  },
  {
    name: "JavaScript",
    level: "lvlCoreLogic",
    icon: <FaJs className="text-yellow-400 text-2xl" />,
    glow: "group-hover:border-yellow-400/35 group-hover:shadow-[0_0_20px_rgba(250,204,21,0.15)]",
    barColor: "from-yellow-400 to-amber-400",
  },
  {
    name: "Dart",
    level: "lvlDeepExpertise",
    icon: <img src={dartIcon} alt="Dart" className="w-6 h-6" />,
    glow: "group-hover:border-cyan-400/35 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]",
    barColor: "from-cyan-400 to-blue-500",
  },
  {
    name: "Flutter",
    level: "lvlProductionReady",
    icon: <img src={flutterIcon} alt="Flutter" className="w-6 h-6" />,
    glow: "group-hover:border-sky-400/35 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]",
    barColor: "from-sky-400 to-indigo-500",
  },
  {
    name: "Bloc Pattern",
    level: "lvlComplexStates",
    icon: <img src={blocIcon} alt="Bloc" className="w-6 h-6" />,
    glow: "group-hover:border-indigo-400/35 group-hover:shadow-[0_0_20px_rgba(129,140,248,0.15)]",
    barColor: "from-indigo-400 to-purple-650",
  },
  {
    name: "GitHub",
    level: "lvlCiCdFlow",
    icon: <FaGithub className="text-slate-200 text-2xl" />,
    glow: "group-hover:border-slate-400/35 group-hover:shadow-[0_0_20px_rgba(148,163,184,0.15)]",
    barColor: "from-slate-400 to-slate-600",
  },
  {
    name: "Firebase",
    level: "lvlAppArchitecture",
    icon: <SiFirebase className="text-amber-500 text-2xl" />,
    glow: "group-hover:border-amber-500/35 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]",
    barColor: "from-amber-500 to-orange-500",
  },
  {
    name: "REST APIs",
    icon: <MdOutlineApi className="text-emerald-450 text-2xl" />,
    level: "lvlFullIntegration",
    glow: "group-hover:border-emerald-450/35 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]",
    barColor: "from-emerald-400 to-teal-500",
  },
  {
    name: "Supabase",
    level: "lvlBackendSetup",
    icon: <img src={supabase} alt="Supabase" className="w-6 h-6 rounded" />,
    glow: "group-hover:border-emerald-500/35 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]",
    barColor: "from-emerald-500 to-teal-600",
  },
  {
    name: "Riverpod",
    level: "lvlReactiveData",
    icon: <Award className="text-cyan-300 text-2xl" />,
    glow: "group-hover:border-cyan-300/35 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]",
    barColor: "from-cyan-300 to-indigo-500",
  },
  {
    name: "Node.js",
    level: "lvlCurrentlyLearning",
    icon: <FaNodeJs className="text-green-500 text-2xl" />,
    glow: "group-hover:border-green-500/35 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.15)]",
    barColor: "from-green-500 to-emerald-500",
  },
];

const timeline = [
  {
    dateKey: "timelineItiDate",
    institutionKey: "itiInst",
    branchKey: "tantaBranch",
    roleKey: "itiCamp",
    detailsKey: "roleDev",
    type: "internship",
  },
  {
    dateKey: "timelineNtiDate",
    institutionKey: "ntiInst",
    branchKey: "tantaBranch",
    roleKey: "ntiCamp",
    detailsKey: "roleDev",
    type: "internship",
  },
  {
    dateKey: "timelineCoreDate",
    institutionKey: "coreAcad",
    branchKey: "tantaEgypt",
    roleKey: "roleInstructor",
    detailsKey: "teachingFlutter",
    type: "teaching",
  },
];

const Aboutme = () => {
  const { t } = useLanguage();

  return (
    <>
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
        <h2 className="text-xs uppercase tracking-[0.25em] text-indigo-400 font-bold mb-2">{t("aboutTitle")}</h2>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          {t("im")}{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            {t("name")}
          </span>
        </h1>

        <h3 className="text-xl md:text-2xl font-semibold text-slate-200">
          {t("aboutRole")}
        </h3>

        <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-3xl">
          {t("aboutDesc")}
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-indigo-650 hover:bg-indigo-600 text-white font-medium rounded-xl shadow-md transition-all duration-200 hover:-translate-y-0.5"
          >
            {t("viewCv")}
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 border border-slate-800 hover:border-indigo-500/40 text-indigo-455 hover:text-indigo-400 font-medium rounded-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            {t("contactMe")}
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 relative inline-block mb-8">
              {t("expEducation")}
              <span className="absolute -bottom-3 start-0 w-1/2 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
            </h2>

            {/* Timeline element */}
            <div className="relative ps-8 md:ps-14 border-s-2 border-indigo-500/20 space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Glowing line highlighter */}
                  <div className="absolute -start-[34px] md:-start-[58px] top-0 w-[2px] h-0 bg-gradient-to-b from-indigo-500 to-purple-500 group-hover:h-full transition-all duration-700 ease-out" />
                  
                  {/* Timeline icon indicator */}
                  <span className="absolute -start-[49px] md:-start-[73px] top-0 flex items-center justify-center w-10 h-10 rounded-full border-2 border-slate-800 bg-slate-950 text-slate-400 transition-all duration-500 group-hover:border-indigo-400 group-hover:bg-indigo-500/10 group-hover:text-indigo-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] z-10">
                    {item.type === "teaching" ? (
                      <Briefcase className="w-4 h-4" />
                    ) : (
                      <GraduationCap className="w-5 h-5" />
                    )}
                  </span>

                  {/* Glassmorphic timeline card */}
                  <div className="relative bg-slate-900/40 backdrop-blur-md border border-slate-800 p-6 md:p-8 rounded-[2rem] shadow-xl transition-all duration-500 group-hover:bg-slate-800/50 group-hover:border-indigo-500/30 group-hover:shadow-[0_10px_30px_rgba(99,102,241,0.1)] group-hover:-translate-y-1 overflow-hidden">
                    {/* Ambient Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <span className="text-xs font-bold text-indigo-300 tracking-wider uppercase bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20 inline-block mb-4 shadow-sm">
                        {t(item.dateKey)}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-100 transition-colors">
                        {t(item.institutionKey)}
                      </h3>
                      <p className="text-sm text-slate-400 mb-4 font-semibold flex items-center gap-2">
                        <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                        {t(item.branchKey)}
                      </p>
                      <p className="text-slate-300 text-base leading-relaxed">
                        {t(item.roleKey)} &ndash;{" "}
                        <span className="text-indigo-400 font-bold">
                          {t(item.detailsKey)}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid */}
      </section>

      <section
        id="skills"
        className="relative bg-slate-950 text-slate-300 py-24 px-6 md:px-20 lg:px-32 flex flex-col justify-start overflow-hidden"
      >
        {/* Background Gradients for Skills */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.04),transparent_50%)]" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="w-full relative z-10"
        >
          <div className="w-full">
            <h2 className="text-3xl font-bold text-white mb-2 relative inline-block">
              {t("myTechStack")}
              <span className="absolute bottom-0 start-0 w-1/3 h-1 bg-indigo-500 rounded" />
            </h2>
          <p className="text-slate-400 text-sm md:text-base mt-3 mb-10 max-w-xl">
            {t("techStackDesc")}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full mt-10">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -5 }}
                className="relative group rounded-[24px] p-[2px] overflow-hidden"
              >
                {/* Fallback subtle border when not hovered */}
                <div className="absolute inset-0 bg-slate-800/60 rounded-[24px] transition-colors duration-500 group-hover:bg-transparent" />
                
                {/* Animated spinning gradient border on hover */}
                <div className="absolute inset-[-150%] animate-[spin_3s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`w-full h-full bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,white_50%,transparent_100%)]`} />
                </div>
                
                {/* Colored overlay for the spinning border based on skill color */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r ${skill.barColor} mix-blend-color transition-opacity duration-500`} />
                
                {/* Inner Card */}
                <div className="relative h-full bg-slate-950/90 backdrop-blur-xl rounded-[22px] p-6 flex flex-col items-center justify-center gap-4 shadow-xl z-10 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/80 rounded-[22px] pointer-events-none" />
                  
                  {/* Ambient Glow behind icon */}
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-tr ${skill.barColor} blur-[30px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-full pointer-events-none`} />
                  
                  <div className="p-4 bg-slate-900/80 border border-slate-800/80 rounded-2xl shadow-inner group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 z-10 flex items-center justify-center w-16 h-16 relative">
                    {React.cloneElement(skill.icon, { className: `${skill.icon.props.className || ''} text-4xl group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-500`.trim() })}
                  </div>
                  
                  <div className="text-center z-10 w-full mt-2">
                    <h3 className="text-slate-200 font-bold text-lg group-hover:text-white transition-colors">
                      {skill.name}
                    </h3>
                    {/* Level text rising from bottom */}
                    <div className="max-h-0 group-hover:max-h-20 opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden mt-0 group-hover:mt-2 flex items-center justify-center">
                      <span className={`font-semibold text-transparent bg-clip-text bg-gradient-to-r ${skill.barColor} text-xs sm:text-sm tracking-widest uppercase drop-shadow-md text-center leading-tight`}>
                        {t(skill.level)}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
    </>
  );
};

export default Aboutme;
