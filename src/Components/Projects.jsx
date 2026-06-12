/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import bmiImage from "/Images/bmi.png";
import quizImage from "/Images/quiz.png";
import todoImage from "/Images/todo.png";
import newsImage from "/Images/news.jpg";
import candyImage from "/Images/candy.png";
import responsiveImage from "/Images/responsive.png";
import { useLanguage } from "../context/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    { id: "All", label: t("filterAll") },
    { id: "E-Commerce & API", label: t("filterEcommerce") },
    { id: "Utility", label: t("filterUtility") },
    { id: "UI/UX & Dashboards", label: t("filterUIUX") },
  ];

  const accentColors = {
    indigo: "text-indigo-300 border-indigo-500/20 bg-indigo-500/5",
    purple: "text-purple-300 border-purple-500/20 bg-purple-500/5",
    blue: "text-blue-300 border-blue-500/20 bg-blue-500/5",
    sky: "text-sky-300 border-sky-500/20 bg-sky-500/5",
    pink: "text-pink-300 border-pink-500/20 bg-pink-500/5",
    emerald: "text-emerald-300 border-emerald-500/20 bg-emerald-500/5",
  };

  const projects = [
    {
      id: 1,
      name: t("projBmiName"),
      description: t("projBmiDesc"),
      image: bmiImage,
      github: "https://github.com/atefElhamsa/bmi_app",
      tags: ["Flutter", "Dart", "UI/UX"],
      category: "Utility",
      glowColor: "hover:shadow-[0_20px_50px_rgba(99,102,241,0.15)] hover:border-indigo-500/30",
      glowBg: "rgba(99,102,241,0.06)",
      accentColor: "indigo",
    },
    {
      id: 2,
      name: t("projQuizName"),
      description: t("projQuizDesc"),
      image: quizImage,
      github: "https://github.com/atefElhamsa/Quiz-App",
      tags: ["Flutter", "Dart", "Local State"],
      category: "UI/UX & Dashboards",
      glowColor: "hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)] hover:border-purple-500/30",
      glowBg: "rgba(168,85,247,0.06)",
      accentColor: "purple",
    },
    {
      id: 3,
      name: t("projTodoName"),
      description: t("projTodoDesc"),
      image: todoImage,
      github: "https://github.com/atefElhamsa/todo-app",
      tags: ["Flutter", "Dart", "Database"],
      category: "Utility",
      glowColor: "hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] hover:border-blue-500/30",
      glowBg: "rgba(59,130,246,0.06)",
      accentColor: "blue",
    },
    {
      id: 4,
      name: t("projNewsName"),
      description: t("projNewsDesc"),
      image: newsImage,
      github: "https://github.com/atefElhamsa/News-App",
      tags: ["Flutter", "REST API", "JSON Serialization"],
      category: "E-Commerce & API",
      glowColor: "hover:shadow-[0_20px_50px_rgba(14,165,233,0.15)] hover:border-sky-500/30",
      glowBg: "rgba(14,165,233,0.06)",
      accentColor: "sky",
    },
    {
      id: 5,
      name: t("projCandyName"),
      description: t("projCandyDesc"),
      image: candyImage,
      github: "https://github.com/atefElhamsa/Mr-Candy-App",
      tags: ["Flutter", "REST API", "State Management", "Auth"],
      category: "E-Commerce & API",
      glowColor: "hover:shadow-[0_20px_50px_rgba(236,72,153,0.15)] hover:border-pink-500/30",
      glowBg: "rgba(236,72,153,0.06)",
      accentColor: "pink",
    },
    {
      id: 6,
      name: t("projDashName"),
      description: t("projDashDesc"),
      image: responsiveImage,
      github: "https://github.com/atefElhamsa/responsive_app",
      tags: ["Flutter", "Responsive Design", "Custom Layouts"],
      category: "UI/UX & Dashboards",
      glowColor: "hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)] hover:border-emerald-500/30",
      glowBg: "rgba(16,185,129,0.06)",
      accentColor: "emerald",
    },
  ];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden" id="projects">
      {/* Decorative radial gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.04),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.04),transparent_50%)]" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-xs uppercase tracking-[0.25em] text-indigo-400 font-bold mb-2">{t("myWork")}</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white relative inline-block">
            {t("featuredProjects")}
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-indigo-500 rounded-full" />
          </h1>
          <p className="text-slate-400 text-sm md:text-base mt-6 max-w-xl mx-auto">
            {t("projectsDesc")}
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16 relative z-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`relative px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 overflow-hidden cursor-pointer ${
                activeFilter === cat.id
                  ? "text-white shadow-[0_4px_20px_rgba(99,102,241,0.25)]"
                  : "text-slate-400 hover:text-slate-200 bg-slate-900/40 hover:bg-slate-900/60 border border-slate-900/80 hover:border-slate-800/80"
              }`}
            >
              {activeFilter === cat.id && (
                <motion.span
                  layoutId="activeFilterPill"
                  className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cards Grid with layout transition */}
        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className={`group bg-slate-900/40 border border-slate-900/80 hover:border-indigo-500/25 rounded-2xl overflow-hidden shadow-xl ${project.glowColor} transition-all duration-300 flex flex-row h-[250px] sm:h-[280px] p-3 sm:p-4 gap-4 relative`}
              >
                {/* Subtle dynamic background color glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${project.glowBg} 0%, transparent 70%)`
                  }}
                />

                {/* Left Side: Screenshot Media Area */}
                <div className="w-[100px] sm:w-[120px] h-full shrink-0 rounded-xl overflow-hidden bg-slate-950/50 flex items-center justify-center relative border border-slate-900/50">
                  {/* Blurred Background Screenshot */}
                  <img
                    src={project.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover blur-xl opacity-20 pointer-events-none scale-105"
                  />
                  {/* Dark overlay for contrast */}
                  <div className="absolute inset-0 bg-slate-950/20 pointer-events-none" />

                  {/* Sharp Floating Screenshot */}
                  <img
                    src={project.image}
                    alt={project.name}
                    className="relative h-[95%] w-auto object-contain rounded-lg shadow-xl z-10 transition-transform duration-500 group-hover:scale-103"
                    loading="lazy"
                  />
                </div>

                {/* Right Side: Project Card Content */}
                <div className="flex flex-col justify-between flex-grow h-full py-1">
                  <div>
                    {/* Tags List */}
                    <div className="flex flex-wrap gap-1 mb-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className={`text-[8px] sm:text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border ${
                            accentColors[project.accentColor] || "text-indigo-300 border-indigo-500/20 bg-indigo-500/5"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 group-hover:text-indigo-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed line-clamp-3 sm:line-clamp-4 font-normal">
                      {project.description}
                    </p>
                  </div>

                  {/* Buttons Action */}
                  <div className="flex gap-2.5 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-3.5 py-1.5 bg-slate-950/80 border border-slate-800 hover:border-indigo-500/40 hover:bg-indigo-500/10 text-slate-350 hover:text-white rounded-lg shadow-md transition-all duration-300 text-[10px] sm:text-xs font-semibold group/btn"
                    >
                      <FaGithub className="me-1.5 text-sm group-hover/btn:scale-110 transition-transform" /> {t("btnCode")}
                    </a>

                    {project.livedemo && (
                      <a
                        href={project.livedemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-550 text-white rounded-lg shadow-md transition-all duration-300 text-[10px] sm:text-xs font-semibold group/btn"
                      >
                        <FaExternalLinkAlt className="me-1.5 text-[9px] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" /> {t("btnDemo")}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
