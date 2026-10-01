/* eslint-disable no-unused-vars */
import React from "react";
import { FaGithub, FaNodeJs, FaDatabase, FaLayerGroup, FaPython, FaMobileAlt, FaCogs, FaWhatsapp, FaFacebook, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";
import { SiFirebase, SiSupabase } from "react-icons/si";
import { MdOutlineApi } from "react-icons/md";
import { GraduationCap, Briefcase, Award } from "lucide-react";
import { motion } from "framer-motion";

import dartIcon from "/Images/dart-icon.svg";
import flutterIcon from "/Images/flutter-icon.svg";
import blocIcon from "/Images/bloc-icon.svg";
import cv from "/CV/Atef_Elhamsa_CV.pdf";
import { useLanguage } from "../context/LanguageContext";

const skills = [
  {
    name: "Flutter",
    level: "lvlProductionReady",
    icon: <img src={flutterIcon} alt="Flutter" className="w-12 h-12 md:w-16 md:h-16" />,
    glowColor: "rgba(14,165,233,0.15)",
    borderColor: "hover:border-sky-500/30",
  },
  {
    name: "Dart",
    level: "lvlDeepExpertise",
    icon: <img src={dartIcon} alt="Dart" className="w-10 h-10 md:w-14 md:h-14" />,
    glowColor: "rgba(14,165,233,0.15)",
    borderColor: "hover:border-sky-500/30",
  },
  {
    name: "BLoC / Cubit",
    level: "lvlComplexStates",
    icon: <img src={blocIcon} alt="Bloc" className="w-8 h-8 md:w-10 md:h-10" />,
    glowColor: "rgba(168,85,247,0.15)",
    borderColor: "hover:border-purple-500/30",
  },
  {
    name: "Clean Architecture",
    level: "lvlSystemDesign",
    icon: <FaLayerGroup className="text-4xl text-indigo-400" />,
    glowColor: "rgba(99,102,241,0.15)",
    borderColor: "hover:border-indigo-500/30",
  },
  {
    name: "Firebase",
    level: "lvlAppArchitecture",
    icon: <SiFirebase className="text-4xl md:text-5xl text-amber-500" />,
    glowColor: "rgba(245,158,11,0.15)",
    borderColor: "hover:border-amber-500/30",
  },
  {
    name: "REST API & Dio",
    level: "lvlFullIntegration",
    icon: <MdOutlineApi className="text-4xl md:text-5xl text-emerald-400" />,
    glowColor: "rgba(16,185,129,0.15)",
    borderColor: "hover:border-emerald-500/30",
  },
  {
    name: "SQLite & Hive",
    level: "lvlLocalStorage",
    icon: <FaDatabase className="text-4xl text-blue-400" />,
    glowColor: "rgba(59,130,246,0.15)",
    borderColor: "hover:border-blue-500/30",
  },
  {
    name: "Git & GitHub",
    level: "lvlVersionControl",
    icon: <FaGithub className="text-4xl text-slate-300" />,
    glowColor: "rgba(203,213,225,0.15)",
    borderColor: "hover:border-slate-500/30",
  },
  {
    name: "Provider",
    level: "lvlStateManagement",
    icon: <Award className="text-4xl text-cyan-400" />,
    glowColor: "rgba(34,211,238,0.15)",
    borderColor: "hover:border-cyan-500/30",
  },
  {
    name: "Python",
    level: "lvlBackendScripts",
    icon: <FaPython className="text-4xl text-yellow-500" />,
    glowColor: "rgba(234,179,8,0.15)",
    borderColor: "hover:border-yellow-400/30",
  },
  {
    name: "Responsive UI",
    level: "lvlAdaptiveLayouts",
    icon: <FaMobileAlt className="text-4xl text-pink-400" />,
    glowColor: "rgba(244,114,182,0.15)",
    borderColor: "hover:border-pink-500/30",
  },
  {
    name: "CI/CD Pipelines",
    level: "lvlAutomation",
    icon: <FaCogs className="text-4xl text-slate-400" />,
    glowColor: "rgba(148,163,184,0.15)",
    borderColor: "hover:border-slate-500/30",
  },
  {
    name: "Node.js",
    level: "lvlBackendSetup",
    icon: <FaNodeJs className="text-4xl md:text-5xl text-green-500" />,
    glowColor: "rgba(34,197,94,0.15)",
    borderColor: "hover:border-green-500/30",
  },
  {
    name: "Supabase",
    level: "lvlAppArchitecture",
    icon: <SiSupabase className="text-4xl md:text-5xl text-emerald-500" />,
    glowColor: "rgba(62,207,142,0.15)",
    borderColor: "hover:border-emerald-400/30",
  }
];

const timeline = [
  {
    dateKey: "timelineCcDate",
    institutionKey: "ccAcad",
    branchKey: "tantaEgypt",
    roleKey: "roleFounder",
    detailsKey: "teachingAndManaging",
    type: "teaching",
  },
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
  {
    dateKey: "timelineEduDate",
    institutionKey: "tantaUniv",
    branchKey: "facultyCompInfo",
    roleKey: "bscDegree",
    detailsKey: "graduatedJune2026",
    type: "education",
  },
];

const Aboutme = () => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-slate-950 text-white py-24 px-6 md:px-20 lg:px-32 overflow-hidden">

      {/* Decorative radial gradients matching Projects/Contact */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.06),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.06),transparent_50%)]" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-32">

        {/* Intro Section */}
        <motion.div
          id="about"
          className="scroll-mt-24 max-w-5xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {/* Academy Profile Banner */}
          <div className="mb-24 rounded-3xl shadow-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md overflow-hidden flex flex-col">
            {/* Cover Image */}
            <div className="h-48 md:h-64 w-full overflow-hidden relative group">
              <img src="/Images/fb_cover.png" alt="C&C Academy Cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 hover:opacity-100" loading="lazy" />
            </div>

            {/* Bottom Info Section */}
            <div className="relative px-6 md:px-10 pb-8 pt-20 flex flex-col md:flex-row md:items-end justify-between gap-6">

              {/* Profile Picture */}
              <div className="absolute -top-16 md:-top-20 left-6 md:left-10 p-2 bg-slate-950 rounded-full border border-slate-800 shadow-xl z-10">
                <img src="/Images/fb_profile.png" alt="C&C Academy Profile" className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover" loading="lazy" />
              </div>

              {/* Info and Social Links */}
              <div className="flex-1 mt-2 md:mt-0 md:ml-[160px]">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">C&C Academy</h3>
                <p className="text-xs text-indigo-400 mb-4 font-bold uppercase tracking-[0.2em]">Design it. Code it. Build the future.</p>

                {/* Social Icons */}
                <div className="flex flex-wrap items-center gap-3">
                  <a href="https://wa.me/201272442829" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:bg-green-500/10 hover:border-green-500/50 text-slate-400 hover:text-green-500 transition-all duration-300 hover:-translate-y-1">
                    <FaWhatsapp className="text-lg" />
                  </a>
                  <a href="https://www.facebook.com/cadcode.academy" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:bg-blue-600/10 hover:border-blue-600/50 text-slate-400 hover:text-blue-500 transition-all duration-300 hover:-translate-y-1">
                    <FaFacebook className="text-lg" />
                  </a>
                  <a href="https://www.instagram.com/cadcode.academy/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:bg-pink-500/10 hover:border-pink-500/50 text-slate-400 hover:text-pink-500 transition-all duration-300 hover:-translate-y-1">
                    <FaInstagram className="text-lg" />
                  </a>
                  <a href="https://www.tiktok.com/@cadcode.academy" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:bg-white/10 hover:border-white/50 text-slate-400 hover:text-white transition-all duration-300 hover:-translate-y-1">
                    <FaTiktok className="text-lg" />
                  </a>
                  <a href="https://www.linkedin.com/company/codenova-academy/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:bg-sky-500/10 hover:border-sky-500/50 text-slate-400 hover:text-sky-400 transition-all duration-300 hover:-translate-y-1">
                    <FaLinkedin className="text-lg" />
                  </a>
                </div>
              </div>

              {/* Visit Button */}
              <div className="mt-4 md:mt-0 flex-shrink-0">
                <a href="https://cadcode-neon.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.5)] transition-all duration-300 text-sm hover:-translate-y-1">
                  Visit Website
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-4xl space-y-6">
            <h2 className="text-xs uppercase tracking-[0.25em] text-indigo-400 font-bold mb-2">
              {t("aboutTitle")}
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              {t("im")} <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-sky-400 bg-clip-text text-transparent">{t("name")}</span>
            </h1>
            <h3 className="text-xl md:text-2xl font-semibold text-slate-200">
              {t("aboutRole")}
            </h3>
            <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-3xl">
              {t("aboutDesc")}
            </p>

            <div className="flex gap-4 pt-4">
              <a href={cv} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1">
                {t("viewCv")}
              </a>
              <a href="#contact" className="px-8 py-3 bg-slate-900/40 backdrop-blur-md border border-slate-800 hover:border-indigo-500/40 text-slate-300 hover:text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-1">
                {t("contactMe")}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Skills Section - Unified Bento Grid */}
        <motion.div
          id="skills"
          className="scroll-mt-24 space-y-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white relative inline-block mb-4">
              {t("myTechStack")}
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-indigo-500 rounded-full" />
            </h2>
            <p className="text-slate-400 text-sm md:text-base mt-4 max-w-xl">
              {t("techStackDesc")}
            </p>
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.95 },
                  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300 } }
                }}
                className={`group relative bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-6 hover:bg-slate-800/50 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-center gap-4 ${skill.borderColor}`}
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl`} style={{ background: `radial-gradient(circle at center, ${skill.glowColor} 0%, transparent 80%)` }} />

                {/* Icon Container */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-slate-950/60 border border-slate-800 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300 relative z-10">
                  {skill.icon}
                </div>

                {/* Text Content */}
                <div className="text-center relative z-10">
                  <h3 className="text-slate-200 font-bold text-lg md:text-xl group-hover:text-white transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-slate-500 text-[10px] md:text-xs font-semibold uppercase tracking-widest mt-1 group-hover:text-indigo-300 transition-colors">
                    {t(skill.level)}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Unified Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 relative inline-block mb-16">
            {t("expEducation")}
            <span className="absolute -bottom-3 start-0 w-1/2 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
          </h2>

          <div className="relative max-w-4xl ps-8 md:ps-14 border-s-2 border-indigo-500/20 space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="relative group">
                {/* Glowing line highlighter */}
                <div className="absolute -start-[34px] md:-start-[58px] top-0 w-[2px] h-0 bg-gradient-to-b from-indigo-500 to-purple-500 group-hover:h-full transition-all duration-700 ease-out" />

                {/* Timeline icon indicator */}
                <span className="absolute -start-[49px] md:-start-[73px] top-0 flex items-center justify-center w-10 h-10 rounded-full border-2 border-slate-800 bg-slate-950 text-slate-400 transition-all duration-500 group-hover:border-indigo-400 group-hover:bg-indigo-500/10 group-hover:text-indigo-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] z-10">
                  {item.type === "teaching" ? (
                    <Briefcase className="w-4 h-4" />
                  ) : item.type === "education" ? (
                    <GraduationCap className="w-5 h-5 text-purple-400" />
                  ) : (
                    <GraduationCap className="w-5 h-5" />
                  )}
                </span>

                {/* Glassmorphic timeline card */}
                <div className="relative bg-slate-900/40 backdrop-blur-md border border-slate-800 p-6 md:p-8 rounded-3xl shadow-lg transition-all duration-500 group-hover:bg-slate-900/70 group-hover:border-indigo-500/30 group-hover:shadow-xl group-hover:-translate-y-1 overflow-hidden">
                  {/* Ambient Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10">
                    <span className="text-xs font-bold text-indigo-300 tracking-wider uppercase bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20 inline-block mb-4 shadow-sm">
                      {t(item.dateKey)}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                      {t(item.institutionKey)}
                    </h3>
                    <p className="text-sm text-slate-400 mb-4 font-semibold flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
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
  );
};

export default Aboutme;
