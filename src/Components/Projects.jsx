/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { FaGithub, FaExternalLinkAlt, FaDownload, FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import bmiImage from "/Images/bmi.png";
import quizImage from "/Images/quiz.png";
import todoImage from "/Images/todo.png";
import newsImage from "/Images/news.jpg";
import candyImage from "/Images/candy.png";
import responsiveImage from "/Images/responsive.png";
import loginImg from "/Images/login.png";
import coursesImg from "/Images/course_files_page.png";
import dashboardImg from "/Images/dashboard.png";
import aiModelImg from "/Images/ai.png";
import adminDashImg from "/Images/admin_dashboard.png";
import { useLanguage } from "../context/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();

  const accentColors = {
    indigo: "text-indigo-300 border-indigo-500/20 bg-indigo-500/5",
    purple: "text-purple-300 border-purple-500/20 bg-purple-500/5",
    blue: "text-blue-300 border-blue-500/20 bg-blue-500/5",
    sky: "text-sky-300 border-sky-500/20 bg-sky-500/5",
    pink: "text-pink-300 border-pink-500/20 bg-pink-500/5",
    emerald: "text-emerald-300 border-emerald-500/20 bg-emerald-500/5",
    yellow: "text-yellow-300 border-yellow-500/20 bg-yellow-500/5",
  };

  const projects = [
    {
      id: 1,
      name: t("projQualiverseName"),
      description: t("projQualiverseDesc"),
      image: loginImg,
      screenshots: [loginImg, coursesImg, dashboardImg, aiModelImg, adminDashImg],
      github: "https://github.com/QualiVerse/QualiVerse-qualiverse-frontend",
      downloadLink: "https://github.com/atefElhamsa/qualiverse_update/releases/latest/download/qualiverse_setup.exe",
      tags: ["Flutter Desktop", "Dart", "BLoC", "Clean Architecture", "GoRouter", "Dio (Interceptors & Token Refresh)"],
      category: "UI/UX & Dashboards",
      featured: true,
      glowColor: "hover:shadow-[0_20px_60px_rgba(234,179,8,0.25)] hover:border-yellow-400/40",
      glowBg: "rgba(234,179,8,0.08)",
      accentColor: "yellow",
    },
    {
      id: 2,
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
      id: 3,
      name: t("projQuizName"),
      description: t("projQuizDesc"),
      image: quizImage,
      github: "https://github.com/atefElhamsa/Quiz-App",
      tags: ["Flutter", "Dart", "Local State"],
      category: "Utility",
      glowColor: "hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)] hover:border-purple-500/30",
      glowBg: "rgba(168,85,247,0.06)",
      accentColor: "purple",
    },
    {
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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


  // Screenshot carousel state + auto-play
  const [activeScreenshot, setActiveScreenshot] = useState({});
  const isHovered = useRef({});

  const getScreenshot = (id, screenshots) => {
    const idx = activeScreenshot[id] ?? 0;
    return screenshots ? screenshots[idx] : null;
  };

  // Auto-advance every 3 seconds for all featured projects
  useEffect(() => {
    const featuredProjects = projects.filter(p => p.featured && p.screenshots);
    const intervals = featuredProjects.map(project => {
      return setInterval(() => {
        if (!isHovered.current[project.id]) {
          setActiveScreenshot(prev => {
            const current = prev[project.id] ?? 0;
            const next = (current + 1) % project.screenshots.length;
            return { ...prev, [project.id]: next };
          });
        }
      }, 3000);
    });
    return () => intervals.forEach(clearInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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


        {/* Cards Grid with layout transition */}
        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {projects.map((project) => (
              project.featured ? (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 24 }}
                  transition={{ duration: 0.5 }}
                  className={`group lg:col-span-2 relative rounded-3xl overflow-hidden border border-yellow-500/25 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950/90 ${project.glowColor} shadow-2xl transition-all duration-500`}
                >
                  {/* Ambient glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at 20% 60%, ${project.glowBg} 0%, transparent 60%)` }}
                  />
                  {/* Subtle dot-grid texture */}
                  <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

                  {/* Top golden shimmer line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400/70 to-transparent" />
                  {/* Bottom subtle line */}
                  <div className="absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />

                  <div className="flex flex-col lg:flex-row min-h-[360px]">
                    {/* ── LEFT: Screenshot Carousel ── */}
                    <div
                      className="relative w-full lg:w-[54%] shrink-0 bg-slate-950/70 flex flex-col items-center justify-center overflow-hidden py-6 px-3 gap-4 border-r border-yellow-500/10"
                      onMouseEnter={() => { isHovered.current[project.id] = true; }}
                      onMouseLeave={() => { isHovered.current[project.id] = false; }}
                    >
                      {/* Ambient glow instead of expensive blurred image */}
                      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: `radial-gradient(circle at center, ${project.glowBg} 0%, transparent 80%)` }} />
                      
                      {/* Corner accent glow */}
                      <div className="absolute top-0 left-0 w-32 h-32 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(250,204,21,0.05)_0%,transparent_70%)]" />
                      <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(245,158,11,0.05)_0%,transparent_70%)]" />

                      {/* Main screenshot with frame */}
                      <div className="relative z-10 w-full flex items-center justify-center">
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={activeScreenshot[project.id] ?? 0}
                            src={getScreenshot(project.id, project.screenshots) || project.image}
                            alt={project.name}
                            initial={{ opacity: 0, x: 12 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -12 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="h-[250px] lg:h-[350px] w-auto max-w-full object-contain"
                            loading="lazy"
                          />
                        </AnimatePresence>
                      </div>

                      {/* Dots + progress bar */}
                      <div className="relative z-10 flex flex-col items-center gap-2 w-full px-8">
                        <div className="flex gap-2 items-center">
                          {project.screenshots.map((scr, i) => (
                            <button
                              key={i}
                              onClick={() => setActiveScreenshot(prev => ({ ...prev, [project.id]: i }))}
                              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${(activeScreenshot[project.id] ?? 0) === i
                                ? "bg-yellow-400 w-6 shadow-[0_0_8px_rgba(234,179,8,0.6)]"
                                : "bg-slate-700 hover:bg-slate-500 w-1.5"
                                }`}
                            />
                          ))}
                        </div>
                        <div className="w-full h-[2px] bg-slate-800/80 rounded-full overflow-hidden">
                          <motion.div
                            key={activeScreenshot[project.id] ?? 0}
                            className="h-full bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 3, ease: "linear" }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* ── RIGHT: Content ── */}
                    <div className="flex flex-col justify-between flex-grow p-6 lg:p-8">
                      <div className="space-y-4">
                        {/* Crown badge */}
                        <div className="flex items-center gap-2">
                          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-[0.18em] bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 shadow-[0_0_12px_rgba(234,179,8,0.1)]">
                            <FaStar className="text-yellow-400 text-[8px]" /> Graduation Project · AI-Powered
                          </span>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="text-[8px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border text-yellow-200/80 border-yellow-500/20 bg-yellow-500/5 hover:bg-yellow-500/10 hover:border-yellow-400/30 transition-colors duration-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl lg:text-3xl font-extrabold text-white group-hover:text-yellow-300 transition-colors duration-300 leading-tight tracking-tight">
                          {project.name}
                        </h3>

                        {/* Separator */}
                        <div className="w-12 h-[2px] bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full" />

                        {/* Description */}
                        <p className="text-slate-400 text-[12px] leading-[1.85] font-normal">
                          {project.description}
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-3 pt-6 mt-2 border-t border-slate-800/60">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-2 bg-slate-950/80 border border-slate-700/60 hover:border-yellow-500/50 hover:bg-yellow-500/8 text-slate-300 hover:text-white rounded-xl shadow-md transition-all duration-300 text-[11px] font-semibold group/btn"
                        >
                          <FaGithub className="text-sm group-hover/btn:scale-110 transition-transform" /> {t("btnCode")}
                        </a>
                        {project.downloadLink && (
                          <a
                            href={project.downloadLink}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-slate-950 font-bold rounded-xl shadow-lg shadow-yellow-500/25 hover:shadow-yellow-400/35 transition-all duration-300 text-[11px] group/btn"
                          >
                            <FaDownload className="text-[10px] group-hover/btn:translate-y-[1px] transition-transform" /> {t("btnDownload")}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
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
                    {/* Ambient Glow */}
                    <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: `radial-gradient(circle at center, ${project.glowBg} 0%, transparent 80%)` }} />
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
                            className={`text-[8px] sm:text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border ${accentColors[project.accentColor] || "text-indigo-300 border-indigo-500/20 bg-indigo-500/5"
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
                      {project.downloadLink && (
                        <a
                          href={project.downloadLink}
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg shadow-md transition-all duration-300 text-[10px] sm:text-xs font-semibold group/btn"
                        >
                          <FaDownload className="me-1.5 text-[9px] group-hover/btn:translate-y-[1px] transition-transform" /> {t("btnDownload") || "Download"}
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
