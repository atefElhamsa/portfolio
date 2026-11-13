/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaGithub, FaNodeJs, FaDatabase, FaLayerGroup, FaPython, FaMobileAlt, FaCogs } from "react-icons/fa";
import { SiFirebase, SiSupabase } from "react-icons/si";
import { MdOutlineApi } from "react-icons/md";
import { GraduationCap, Briefcase, Award, MapPin, Calendar, Building2, Globe, Sparkles, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

const workList = [
  {
    roleKey: "workRoleProgrammingInstructor",
    companyKey: "workCompanyCAC",
    periodKey: "workPeriodCAC",
    locationKey: "cairoEgypt",
    descKey: "workDescCAC",
    isOnline: true,
    isCurrent: true,
    tags: ["JavaScript", "Python", "Problem Solving", "Online Teaching"],
    color: "cyan",
    glow: "rgba(6,182,212,0.15)",
  },
  {
    roleKey: "workRoleCcInstructor",
    companyKey: "workCompanyCcAcademy",
    periodKey: "workPeriodCc",
    locationKey: "workLocationOnline",
    descKey: "workDescCc",
    isOnline: true,
    isCurrent: true,
    tags: ["Flutter", "Python", "C++", "Custom Systems", "Mobile Apps"],
    color: "emerald",
    glow: "rgba(16,185,129,0.15)",
  },
  {
    roleKey: "workRoleInstructor",
    companyKey: "workCompanyCoreAcademy",
    periodKey: "workPeriodCore",
    locationKey: "tantaEgypt",
    descKey: "workDescCore",
    isOnline: false,
    isCurrent: false,
    tags: ["Flutter", "Dart", "Mobile Dev", "Mentoring"],
    color: "indigo",
    glow: "rgba(99,102,241,0.15)",
  },
];

const educationList = [
  {
    roleKey: "eduDegree",
    companyKey: "eduInstitution",
    branchKey: "eduFaculty",
    periodKey: "eduPeriod",
    locationKey: "tantaEgypt",
    descKey: "eduDesc",
    type: "education",
    tags: ["B.Sc. Degree", "Computer Science", "QualiVerse AI"],
    color: "purple",
    glow: "rgba(168,85,247,0.15)",
  },
  {
    roleKey: "internItiTitle",
    companyKey: "internItiCompany",
    branchKey: "internItiBranch",
    periodKey: "internItiPeriod",
    locationKey: "tantaEgypt",
    descKey: "internItiDesc",
    type: "internship",
    tags: ["Flutter", "BLoC", "Clean Architecture", "Firebase"],
    color: "sky",
    glow: "rgba(14,165,233,0.15)",
  },
  {
    roleKey: "internNtiTitle",
    companyKey: "internNtiCompany",
    branchKey: "internNtiBranch",
    periodKey: "internNtiPeriod",
    locationKey: "tantaEgypt",
    descKey: "internNtiDesc",
    type: "internship",
    tags: ["Flutter", "REST API", "Dio", "Responsive UI"],
    color: "violet",
    glow: "rgba(139,92,246,0.15)",
  },
];

const colorMap = {
  cyan: {
    border: "hover:border-cyan-500/40 group-hover:border-cyan-500/30",
    dot: "bg-cyan-500",
    tag: "text-cyan-300 border-cyan-500/25 bg-cyan-500/10",
    icon: "text-cyan-400 group-hover:text-cyan-300",
    roleColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10 border-cyan-500/20",
    badge: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  },
  indigo: {
    border: "hover:border-indigo-500/40 group-hover:border-indigo-500/30",
    dot: "bg-indigo-500",
    tag: "text-indigo-300 border-indigo-500/25 bg-indigo-500/10",
    icon: "text-indigo-400 group-hover:text-indigo-300",
    roleColor: "text-indigo-400",
    iconBg: "bg-indigo-500/10 border-indigo-500/20",
    badge: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
  },
  emerald: {
    border: "hover:border-emerald-500/40 group-hover:border-emerald-500/30",
    dot: "bg-emerald-500",
    tag: "text-emerald-300 border-emerald-500/25 bg-emerald-500/10",
    icon: "text-emerald-400 group-hover:text-emerald-300",
    roleColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  },
  sky: {
    border: "hover:border-sky-500/40 group-hover:border-sky-500/30",
    dot: "bg-sky-500",
    tag: "text-sky-300 border-sky-500/25 bg-sky-500/10",
    icon: "text-sky-400 group-hover:text-sky-300",
    roleColor: "text-sky-400",
    iconBg: "bg-sky-500/10 border-sky-500/20",
    badge: "bg-sky-500/15 text-sky-300 border-sky-500/30",
  },
  purple: {
    border: "hover:border-purple-500/40 group-hover:border-purple-500/30",
    dot: "bg-purple-500",
    tag: "text-purple-300 border-purple-500/25 bg-purple-500/10",
    icon: "text-purple-400 group-hover:text-purple-300",
    roleColor: "text-purple-400",
    iconBg: "bg-purple-500/10 border-purple-500/20",
    badge: "bg-purple-500/15 text-purple-300 border-purple-500/30",
  },
  violet: {
    border: "hover:border-violet-500/40 group-hover:border-violet-500/30",
    dot: "bg-violet-500",
    tag: "text-violet-300 border-violet-500/25 bg-violet-500/10",
    icon: "text-violet-400 group-hover:text-violet-300",
    roleColor: "text-violet-400",
    iconBg: "bg-violet-500/10 border-violet-500/20",
    badge: "bg-violet-500/15 text-violet-300 border-violet-500/30",
  },
};

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

        {/* ── Experience & Education Unified Hub ── */}
        <motion.div
          id="experience"
          className="scroll-mt-24 space-y-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="space-y-3 pb-4 border-b border-slate-900">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-widest w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t("expEduSectionTitle")}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              {t("expEduSectionTitle")}
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-2xl leading-relaxed">
              {t("expEduSectionDesc")}
            </p>
          </div>

          {/* Direct 2-Column Grid (No Filters) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Column 1: Work & Teaching Experience */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-800/80">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  <Briefcase className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white leading-tight">{t("sectionWorkTitle")}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">{t("sectionWorkSubtitle")}</p>
                </div>
              </div>

              <div className="space-y-4">
                {workList.map((item, idx) => {
                  const c = colorMap[item.color] || colorMap.indigo;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                      className={`group relative bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 ${c.border} rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 overflow-hidden shadow-lg hover:shadow-2xl`}
                    >
                      {/* Shimmer line on top */}
                      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-current to-transparent ${c.icon} opacity-30 group-hover:opacity-100 transition-opacity`} />
                      
                      {/* Ambient glow */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{ background: `radial-gradient(circle at 15% 50%, ${item.glow} 0%, transparent 65%)` }}
                      />

                      <div className="relative z-10 flex flex-col gap-3.5">
                        {/* Top Badges */}
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${c.badge}`}>
                            {t(item.periodKey)}
                          </span>

                          <div className="flex items-center gap-2">
                            {item.isOnline && (
                              <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300">
                                <Globe className="w-3 h-3 animate-spin-slow" />
                                <span>Online</span>
                              </span>
                            )}
                            {item.isCurrent && (
                              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                <span>{t("workCurrentLabel")}</span>
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Role & Company */}
                        <div>
                          <h4 className={`text-base font-extrabold ${c.roleColor} group-hover:brightness-110 transition-all`}>
                            {t(item.roleKey)}
                          </h4>
                          <div className="flex items-center gap-2 mt-1">
                            <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            <span className="text-sm font-bold text-slate-200">
                              {t(item.companyKey)}
                            </span>
                          </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                          <MapPin className="w-3 h-3 text-slate-500 shrink-0" />
                          <span>{t(item.locationKey)}</span>
                        </div>

                        {/* Description */}
                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                          {t(item.descKey)}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                          {item.tags.map((tag, i) => (
                            <span
                              key={i}
                              className={`text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md border ${c.tag}`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Column 2: Education & Technical Internships */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-800/80">
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                  <GraduationCap className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white leading-tight">{t("sectionEduTitle")}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">{t("sectionEduSubtitle")}</p>
                </div>
              </div>

              <div className="space-y-4">
                {educationList.map((item, idx) => {
                  const c = colorMap[item.color] || colorMap.purple;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                      className={`group relative bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 ${c.border} rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 overflow-hidden shadow-lg hover:shadow-2xl`}
                    >
                      {/* Shimmer line on top */}
                      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-current to-transparent ${c.icon} opacity-30 group-hover:opacity-100 transition-opacity`} />

                      {/* Ambient glow */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{ background: `radial-gradient(circle at 15% 50%, ${item.glow} 0%, transparent 65%)` }}
                      />

                      <div className="relative z-10 flex flex-col gap-3.5">
                        {/* Top Badges */}
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${c.badge}`}>
                            {t(item.periodKey)}
                          </span>

                          <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-800/70 border border-slate-700/60 text-slate-300">
                            {item.type === "education" ? (
                              <>
                                <GraduationCap className="w-3 h-3 text-purple-400" />
                                <span>University Degree</span>
                              </>
                            ) : (
                              <>
                                <Award className="w-3 h-3 text-sky-400" />
                                <span>Intensive Camp</span>
                              </>
                            )}
                          </span>
                        </div>

                        {/* Role / Degree */}
                        <div>
                          <h4 className={`text-base font-extrabold ${c.roleColor} group-hover:brightness-110 transition-all`}>
                            {t(item.roleKey)}
                          </h4>
                          <div className="flex items-center gap-2 mt-1">
                            <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            <span className="text-sm font-bold text-slate-200">
                              {t(item.companyKey)}
                            </span>
                          </div>
                          {item.branchKey && (
                            <p className="text-xs text-slate-400 mt-0.5 font-medium">
                              {t(item.branchKey)}
                            </p>
                          )}
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                          <MapPin className="w-3 h-3 text-slate-500 shrink-0" />
                          <span>{t(item.locationKey)}</span>
                        </div>

                        {/* Description */}
                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                          {t(item.descKey)}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                          {item.tags.map((tag, i) => (
                            <span
                              key={i}
                              className={`text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md border ${c.tag}`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Aboutme;
