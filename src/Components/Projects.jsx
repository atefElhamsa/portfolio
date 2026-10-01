/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaDownload,
  FaStar,
  FaGooglePlay,
} from "react-icons/fa";
import {
  Layers,
  Sparkles,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Code2,
  CheckCircle2,
  Smartphone,
  LayoutGrid,
} from "lucide-react";
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
import ccAcademyImg from "/Images/cc_academy.png";
import ccScreen1 from "/Images/cc_screen1.png";
import ccScreen2 from "/Images/cc_screen2.png";
import ccScreen3 from "/Images/cc_screen3.png";
import ccScreen4 from "/Images/cc_screen4.png";
import ccScreen5 from "/Images/cc_screen5.png";
import { useLanguage } from "../context/LanguageContext";

const Projects = () => {
  const { t, language } = useLanguage();
  const isRtl = language === "ar";


  const [modalProject, setModalProject] = useState(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const accentColors = {
    indigo: {
      tag: "text-indigo-300 border-indigo-500/25 bg-indigo-500/10",
      titleHover: "group-hover:text-indigo-400",
      borderHover: "hover:border-indigo-500/40",
      glowBg: "rgba(99,102,241,0.12)",
      glowColor: "hover:shadow-[0_20px_50px_rgba(99,102,241,0.18)]",
      topShimmer: "from-indigo-500/0 via-indigo-500/70 to-indigo-500/0",
      btnDemo: "bg-indigo-600 hover:bg-indigo-500 text-white",
      badge: "bg-indigo-500/10 border-indigo-500/30 text-indigo-300",
    },
    emerald: {
      tag: "text-emerald-300 border-emerald-500/25 bg-emerald-500/10",
      titleHover: "group-hover:text-emerald-400",
      borderHover: "hover:border-emerald-500/40",
      glowBg: "rgba(16,185,129,0.12)",
      glowColor: "hover:shadow-[0_20px_50px_rgba(16,185,129,0.18)]",
      topShimmer: "from-emerald-500/0 via-emerald-500/70 to-emerald-500/0",
      btnDemo: "bg-emerald-600 hover:bg-emerald-500 text-white",
      badge: "bg-emerald-500/10 border-emerald-500/30 text-emerald-300",
    },
    purple: {
      tag: "text-purple-300 border-purple-500/25 bg-purple-500/10",
      titleHover: "group-hover:text-purple-400",
      borderHover: "hover:border-purple-500/40",
      glowBg: "rgba(168,85,247,0.12)",
      glowColor: "hover:shadow-[0_20px_50px_rgba(168,85,247,0.18)]",
      topShimmer: "from-purple-500/0 via-purple-500/70 to-purple-500/0",
      btnDemo: "bg-purple-600 hover:bg-purple-500 text-white",
      badge: "bg-purple-500/10 border-purple-500/30 text-purple-300",
    },
    blue: {
      tag: "text-blue-300 border-blue-500/25 bg-blue-500/10",
      titleHover: "group-hover:text-blue-400",
      borderHover: "hover:border-blue-500/40",
      glowBg: "rgba(59,130,246,0.12)",
      glowColor: "hover:shadow-[0_20px_50px_rgba(59,130,246,0.18)]",
      topShimmer: "from-blue-500/0 via-blue-500/70 to-blue-500/0",
      btnDemo: "bg-blue-600 hover:bg-blue-500 text-white",
      badge: "bg-blue-500/10 border-blue-500/30 text-blue-300",
    },
    sky: {
      tag: "text-sky-300 border-sky-500/25 bg-sky-500/10",
      titleHover: "group-hover:text-sky-400",
      borderHover: "hover:border-sky-500/40",
      glowBg: "rgba(14,165,233,0.12)",
      glowColor: "hover:shadow-[0_20px_50px_rgba(14,165,233,0.18)]",
      topShimmer: "from-sky-500/0 via-sky-500/70 to-sky-500/0",
      btnDemo: "bg-sky-600 hover:bg-sky-500 text-white",
      badge: "bg-sky-500/10 border-sky-500/30 text-sky-300",
    },
    pink: {
      tag: "text-pink-300 border-pink-500/25 bg-pink-500/10",
      titleHover: "group-hover:text-pink-400",
      borderHover: "hover:border-pink-500/40",
      glowBg: "rgba(236,72,153,0.12)",
      glowColor: "hover:shadow-[0_20px_50px_rgba(236,72,153,0.18)]",
      topShimmer: "from-pink-500/0 via-pink-500/70 to-pink-500/0",
      btnDemo: "bg-pink-600 hover:bg-pink-500 text-white",
      badge: "bg-pink-500/10 border-pink-500/30 text-pink-300",
    },
    yellow: {
      tag: "text-yellow-300 border-yellow-500/25 bg-yellow-500/10",
      titleHover: "group-hover:text-yellow-400",
      borderHover: "hover:border-yellow-500/40",
      glowBg: "rgba(234,179,8,0.12)",
      glowColor: "hover:shadow-[0_20px_50px_rgba(234,179,8,0.18)]",
      topShimmer: "from-yellow-500/0 via-yellow-500/70 to-yellow-500/0",
      btnDemo: "bg-yellow-600 hover:bg-yellow-500 text-slate-950 font-bold",
      badge: "bg-yellow-500/10 border-yellow-500/30 text-yellow-300",
    },
  };

  const featuredThemes = {
    yellow: {
      border: "border-yellow-500/30 hover:border-yellow-400/50",
      topShimmer: "via-yellow-400/80",
      bottomShimmer: "via-yellow-500/30",
      carouselBorder: "border-yellow-500/15",
      cornerGlow1: "bg-[radial-gradient(circle,rgba(250,204,21,0.08)_0%,transparent_70%)]",
      cornerGlow2: "bg-[radial-gradient(circle,rgba(245,158,11,0.08)_0%,transparent_70%)]",
      dotActive: "bg-yellow-400 shadow-[0_0_10px_rgba(234,179,8,0.7)]",
      progressBar: "from-yellow-400 to-amber-400",
      badge: "bg-yellow-400/10 border-yellow-400/35 text-yellow-300 shadow-[0_0_16px_rgba(234,179,8,0.15)]",
      badgeIcon: "text-yellow-400",
      tag: "text-yellow-200/90 border-yellow-500/25 bg-yellow-500/10 hover:bg-yellow-500/20 hover:border-yellow-400/40",
      titleHover: "group-hover:text-yellow-300",
      separator: "from-yellow-400 to-amber-400",
    },
    emerald: {
      border: "border-emerald-500/30 hover:border-emerald-400/50",
      topShimmer: "via-emerald-400/80",
      bottomShimmer: "via-emerald-500/30",
      carouselBorder: "border-emerald-500/15",
      cornerGlow1: "bg-[radial-gradient(circle,rgba(16,185,129,0.08)_0%,transparent_70%)]",
      cornerGlow2: "bg-[radial-gradient(circle,rgba(5,150,105,0.08)_0%,transparent_70%)]",
      dotActive: "bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.7)]",
      progressBar: "from-emerald-400 to-teal-400",
      badge: "bg-emerald-400/10 border-emerald-400/35 text-emerald-300 shadow-[0_0_16px_rgba(16,185,129,0.15)]",
      badgeIcon: "text-emerald-400",
      tag: "text-emerald-200/90 border-emerald-500/25 bg-emerald-500/10 hover:bg-emerald-500/20 hover:border-emerald-400/40",
      titleHover: "group-hover:text-emerald-300",
      separator: "from-emerald-400 to-teal-400",
    },
  };

  const projects = [
    {
      id: 0,
      name: t("projCcAcademyName"),
      description: t("projCcAcademyDesc"),
      image: ccScreen1,
      screenshots: [ccScreen1, ccScreen2, ccScreen3, ccScreen4, ccScreen5],
      playStore: "https://play.google.com/store/apps/details?id=com.cadandcode.academy",
      tags: ["Flutter", "Dart", "Google Play Live", "REST API", "Clean Architecture"],
      category: "Education & Mobile",
      featured: true,
      accentColor: "emerald",
      theme: "emerald",
      glowColor: "hover:shadow-[0_20px_60px_rgba(16,185,129,0.22)]",
      glowBg: "rgba(16,185,129,0.1)",
      badge: t("badgeLiveGooglePlay"),
      badgeIcon: FaGooglePlay,
      isLiveOnStore: true,
    },
    {
      id: 1,
      name: t("projQualiverseName"),
      description: t("projQualiverseDesc"),
      badge: t("badgeGraduationProject"),
      badgeIcon: FaStar,
      image: loginImg,
      screenshots: [loginImg, coursesImg, dashboardImg, aiModelImg, adminDashImg],

      downloadLink: "https://github.com/atefElhamsa/qualiverse_update/releases/latest/download/qualiverse_setup.exe",
      tags: ["Flutter Desktop", "Dart", "BLoC", "Clean Architecture", "GoRouter", "Dio (Interceptors & Token Refresh)"],
      category: "UI/UX & Dashboards",
      featured: true,
      glowColor: "hover:shadow-[0_20px_60px_rgba(234,179,8,0.22)]",
      glowBg: "rgba(234,179,8,0.1)",
      accentColor: "yellow",
      theme: "yellow",
    },
    {
      id: 2,
      name: t("projBmiName"),
      description: t("projBmiDesc"),
      image: bmiImage,
      github: "https://github.com/atefElhamsa/bmi_app",
      tags: ["Flutter", "Dart", "Custom UI", "Health Algorithms"],
      category: "Utility",
      accentColor: "indigo",
    },
    {
      id: 3,
      name: t("projQuizName"),
      description: t("projQuizDesc"),
      image: quizImage,
      github: "https://github.com/atefElhamsa/Quiz-App",
      tags: ["Flutter", "Dart", "State Management", "Interactive UI"],
      category: "Utility",
      accentColor: "purple",
    },
    {
      id: 4,
      name: t("projTodoName"),
      description: t("projTodoDesc"),
      image: todoImage,
      github: "https://github.com/atefElhamsa/todo-app",
      tags: ["Flutter", "Dart", "Local Storage", "CRUD"],
      category: "Utility",
      accentColor: "blue",
    },
    {
      id: 5,
      name: t("projNewsName"),
      description: t("projNewsDesc"),
      image: newsImage,
      github: "https://github.com/atefElhamsa/News-App",
      tags: ["Flutter", "REST API", "JSON Serialization", "Async Feeds"],
      category: "E-Commerce & API",
      accentColor: "sky",
    },
    {
      id: 6,
      name: t("projCandyName"),
      description: t("projCandyDesc"),
      image: candyImage,
      github: "https://github.com/atefElhamsa/Mr-Candy-App",
      tags: ["Flutter", "REST API", "E-Commerce", "Authentication"],
      category: "E-Commerce & API",
      accentColor: "pink",
    },
    {
      id: 7,
      name: t("projDashName"),
      description: t("projDashDesc"),
      image: responsiveImage,
      github: "https://github.com/atefElhamsa/responsive_app",
      tags: ["Flutter", "Adaptive Layout", "Responsive", "Cross-Platform"],
      category: "UI/UX & Dashboards",
      accentColor: "emerald",
    },
  ];

  // Carousel state for featured projects
  const [activeScreenshot, setActiveScreenshot] = useState({});
  const isHovered = useRef({});

  const getScreenshot = (id, screenshots) => {
    const idx = activeScreenshot[id] ?? 0;
    return screenshots ? screenshots[idx] : null;
  };

  const handleNextScreenshot = (project, e) => {
    if (e) e.stopPropagation();
    if (!project.screenshots) return;
    setActiveScreenshot((prev) => {
      const cur = prev[project.id] ?? 0;
      return { ...prev, [project.id]: (cur + 1) % project.screenshots.length };
    });
  };

  const handlePrevScreenshot = (project, e) => {
    if (e) e.stopPropagation();
    if (!project.screenshots) return;
    setActiveScreenshot((prev) => {
      const cur = prev[project.id] ?? 0;
      return {
        ...prev,
        [project.id]:
          (cur - 1 + project.screenshots.length) % project.screenshots.length,
      };
    });
  };

  // Auto-advance screenshot carousel every 3.5 seconds
  useEffect(() => {
    const featuredProjects = projects.filter((p) => p.featured && p.screenshots);
    const intervals = featuredProjects.map((project) => {
      return setInterval(() => {
        if (!isHovered.current[project.id]) {
          setActiveScreenshot((prev) => {
            const current = prev[project.id] ?? 0;
            const next = (current + 1) % project.screenshots.length;
            return { ...prev, [project.id]: next };
          });
        }
      }, 3500);
    });
    return () => intervals.forEach(clearInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  // Open modal
  const openModal = (project, initialIndex = 0) => {
    setModalProject(project);
    setModalImageIndex(initialIndex);
  };

  // Close modal on escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setModalProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      className="py-24 bg-slate-950 text-white relative overflow-hidden"
      id="projects"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Background Decorative Ambient Gradients */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 left-1/3 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4 shadow-sm shadow-indigo-500/10">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>{t("myWork")}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
              {t("featuredProjects")}
            </span>
          </h1>

          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            {t("projectsDesc")}
          </p>

          {/* Quick Metrics Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-8 pt-6 border-t border-slate-900/80">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 bg-slate-900/60 px-3.5 py-1.5 rounded-full border border-slate-800/80">
              <FaGooglePlay className="text-emerald-400 text-xs" />
              <span>{t("liveOnStore")}</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 bg-slate-900/60 px-3.5 py-1.5 rounded-full border border-slate-800/80">
              <FaStar className="text-yellow-400 text-xs" />
              <span>{t("badgeGraduationProject")}</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 bg-slate-900/60 px-3.5 py-1.5 rounded-full border border-slate-800/80">
              <Smartphone className="text-indigo-400 w-3.5 h-3.5" />
              <span>Flutter & Dart Expert</span>
            </div>
          </div>
        </motion.div>



        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          <AnimatePresence mode="popLayout">
            {projects.map((project) => {
              // ── 1. Featured Flagship Card (Qualiverse & C&C Academy) ──
              if (project.featured) {
                const currentTheme =
                  featuredThemes[project.theme] || featuredThemes.yellow;
                const currentScrIndex = activeScreenshot[project.id] ?? 0;

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.45 }}
                    className={`group lg:col-span-2 relative rounded-3xl overflow-hidden border ${currentTheme.border} bg-gradient-to-br from-slate-900/95 via-slate-900/80 to-slate-950/95 ${project.glowColor} shadow-2xl transition-all duration-500`}
                  >
                    {/* Top Accent Shimmer */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent ${currentTheme.topShimmer} to-transparent`}
                    />
                    <div
                      className={`absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent ${currentTheme.bottomShimmer} to-transparent`}
                    />

                    {/* Ambient Glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                      style={{
                        background: `radial-gradient(ellipse at 25% 60%, ${project.glowBg} 0%, transparent 60%)`,
                      }}
                    />

                    <div className="flex flex-col lg:flex-row min-h-[380px]">
                      {/* Left: Interactive Carousel */}
                      <div
                        className={`relative w-full lg:w-[52%] shrink-0 bg-slate-950/80 flex flex-col items-center justify-between overflow-hidden p-6 gap-4 border-b lg:border-b-0 ${
                          isRtl
                            ? "lg:border-l lg:border-r-0"
                            : "lg:border-r lg:border-l-0"
                        } ${currentTheme.carouselBorder}`}
                        onMouseEnter={() => {
                          isHovered.current[project.id] = true;
                        }}
                        onMouseLeave={() => {
                          isHovered.current[project.id] = false;
                        }}
                      >
                        {/* Background Subtle Radial */}
                        <div
                          className="absolute inset-0 opacity-25 pointer-events-none"
                          style={{
                            background: `radial-gradient(circle at center, ${project.glowBg} 0%, transparent 75%)`,
                          }}
                        />

                        {/* Top bar over image: quick preview badge */}
                        <div className="relative z-10 w-full flex items-center justify-between">
                          <span
                            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider ${currentTheme.badge}`}
                          >
                            {project.badgeIcon ? (
                              <project.badgeIcon
                                className={`${currentTheme.badgeIcon} text-[10px]`}
                              />
                            ) : (
                              <FaStar className="text-[9px]" />
                            )}
                            <span>{project.badge}</span>
                          </span>

                          <button
                            onClick={() => openModal(project, currentScrIndex)}
                            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white text-[10px] font-medium border border-slate-800 transition-all cursor-pointer group/zoom shadow-sm"
                            title={t("viewScreenshots")}
                          >
                            <Eye className="w-3 h-3 text-indigo-400 group-hover/zoom:scale-110 transition-transform" />
                            <span>{t("viewScreenshots")}</span>
                          </button>
                        </div>

                        {/* Screenshot Display Frame */}
                        <div
                          className="relative z-10 w-full flex items-center justify-center my-auto cursor-pointer group/frame"
                          onClick={() => openModal(project, currentScrIndex)}
                        >
                          <AnimatePresence mode="wait">
                            <motion.img
                              key={currentScrIndex}
                              src={
                                getScreenshot(project.id, project.screenshots) ||
                                project.image
                              }
                              alt={project.name}
                              initial={{ opacity: 0, scale: 0.96 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.96 }}
                              transition={{ duration: 0.35, ease: "easeOut" }}
                              className="h-[230px] sm:h-[260px] lg:h-[310px] w-auto max-w-full object-contain rounded-xl shadow-2xl transition-transform duration-500 group-hover/frame:scale-[1.03]"
                              loading="lazy"
                            />
                          </AnimatePresence>

                          {/* Navigation Arrows for Carousel */}
                          {project.screenshots && project.screenshots.length > 1 && (
                            <>
                              <button
                                onClick={(e) => handlePrevScreenshot(project, e)}
                                aria-label="Previous Screenshot"
                                className="absolute left-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 text-slate-300 hover:text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-110 shadow-lg cursor-pointer"
                              >
                                <ChevronLeft className="w-4 h-4" />
                              </button>
                              <button
                                onClick={(e) => handleNextScreenshot(project, e)}
                                aria-label="Next Screenshot"
                                className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 text-slate-300 hover:text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-110 shadow-lg cursor-pointer"
                              >
                                <ChevronRight className="w-4 h-4" />
                              </button>
                            </>
                          )}
                        </div>

                        {/* Bottom Dots & Progress Line */}
                        {project.screenshots && (
                          <div className="relative z-10 flex flex-col items-center gap-2 w-full px-6">
                            <div className="flex gap-1.5 items-center">
                              {project.screenshots.map((_, i) => (
                                <button
                                  key={i}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveScreenshot((prev) => ({
                                      ...prev,
                                      [project.id]: i,
                                    }));
                                  }}
                                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                                    currentScrIndex === i
                                      ? `${currentTheme.dotActive} w-6`
                                      : "bg-slate-700/80 hover:bg-slate-500 w-1.5"
                                  }`}
                                  aria-label={`Screenshot ${i + 1}`}
                                />
                              ))}
                            </div>
                            <div className="w-full h-[2px] bg-slate-800/80 rounded-full overflow-hidden">
                              <motion.div
                                key={currentScrIndex}
                                className={`h-full bg-gradient-to-r ${currentTheme.progressBar} rounded-full`}
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 3.5, ease: "linear" }}
                              />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Right: Content & Architecture Highlights */}
                      <div className="flex flex-col justify-between flex-grow p-6 sm:p-8 lg:p-9">
                        <div className="space-y-4">
                          {/* Category Tag */}
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                              {project.category}
                            </span>
                            <span className="text-slate-600">•</span>
                            <span className="text-[10px] text-slate-400 font-medium">
                              Flutter & Cross-Platform
                            </span>
                          </div>

                          {/* Title */}
                          <h2
                            className={`text-2xl sm:text-3xl font-extrabold text-white ${currentTheme.titleHover} transition-colors duration-300 tracking-tight leading-snug`}
                          >
                            {project.name}
                          </h2>

                          {/* Decorative Separator */}
                          <div
                            className={`w-14 h-[3px] bg-gradient-to-r ${currentTheme.separator} rounded-full`}
                          />

                          {/* Description */}
                          <p className="text-slate-300/90 text-xs sm:text-sm leading-relaxed font-normal">
                            {project.description}
                          </p>

                          {/* Tech Stack Chips */}
                          <div className="pt-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                              {t("techStackLabel")}
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {project.tags.map((tag, i) => (
                                <span
                                  key={i}
                                  className={`text-[9px] sm:text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border ${currentTheme.tag} transition-all duration-200 shadow-sm`}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons Bar */}
                        <div className="flex flex-wrap items-center gap-3 pt-6 mt-4 border-t border-slate-800/80">
                          {project.playStore && (
                            <a
                              href={project.playStore}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-400/35 transition-all duration-300 text-xs group/btn"
                            >
                              <FaGooglePlay className="text-xs group-hover/btn:scale-110 transition-transform" />
                              <span>{t("btnPlayStore")}</span>
                            </a>
                          )}

                          {project.downloadLink && (
                            <a
                              href={project.downloadLink}
                              download
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-slate-950 font-bold rounded-xl shadow-lg shadow-yellow-500/25 hover:shadow-yellow-400/35 transition-all duration-300 text-xs group/btn"
                            >
                              <FaDownload className="text-xs group-hover/btn:translate-y-0.5 transition-transform" />
                              <span>{t("btnDownload")}</span>
                            </a>
                          )}

                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-5 py-2.5 bg-slate-950/80 border border-slate-700/70 hover:border-indigo-500/60 hover:bg-indigo-500/10 text-slate-300 hover:text-white rounded-xl shadow-md transition-all duration-300 text-xs font-semibold group/btn"
                            >
                              <FaGithub className="text-sm group-hover/btn:scale-110 transition-transform" />
                              <span>{t("btnCode")}</span>
                            </a>
                          )}

                          {project.livedemo && (
                            <a
                              href={project.livedemo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl shadow-md shadow-indigo-600/30 transition-all duration-300 text-xs font-semibold group/btn"
                            >
                              <FaExternalLinkAlt className="text-xs group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                              <span>{t("btnDemo")}</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              }

              // ── 2. Specialized Grid Card (Responsive Showcase Card) ──
              const accent =
                accentColors[project.accentColor] || accentColors.indigo;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4 }}
                  className={`group bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 ${accent.borderHover} rounded-2xl overflow-hidden shadow-xl ${accent.glowColor} hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative`}
                >
                  {/* Top colored shimmer line on hover */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${accent.topShimmer} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20`}
                  />

                  {/* Dynamic radial glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 40% 30%, ${accent.glowBg} 0%, transparent 75%)`,
                    }}
                  />

                  {/* Card Visual Header: Mockup Showcase Area */}
                  <div
                    className="relative w-full h-52 sm:h-56 bg-slate-950/80 flex items-center justify-center overflow-hidden border-b border-slate-800/70 cursor-pointer group/showcase"
                    onClick={() => openModal(project, 0)}
                  >
                    {/* Inner Ambient Glow */}
                    <div
                      className="absolute inset-0 opacity-20 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at center, ${accent.glowBg} 0%, transparent 80%)`,
                      }}
                    />

                    {/* Dark gradient fade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none z-10" />

                    {/* Category floating pill */}
                    <div className="absolute top-3 left-3 z-20">
                      <span
                        className={`text-[9px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border ${accent.tag} backdrop-blur-md`}
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* Quick Preview Hover Button */}
                    <div className="absolute top-3 right-3 z-20 opacity-0 group-hover/showcase:opacity-100 transition-all duration-300 transform translate-y-1 group-hover/showcase:translate-y-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal(project, 0);
                        }}
                        className="p-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 shadow-md transition-colors"
                        title={t("viewScreenshots")}
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Project Screenshot with Smooth Zoom */}
                    <img
                      src={project.image}
                      alt={project.name}
                      className="relative h-[85%] w-auto max-w-[88%] object-contain rounded-lg shadow-2xl z-10 transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
                    <div>
                      {/* Title */}
                      <h3
                        className={`text-lg sm:text-xl font-bold text-white mb-2 ${accent.titleHover} transition-colors tracking-tight flex items-center justify-between`}
                      >
                        <span className="truncate">{project.name}</span>
                      </h3>

                      {/* Description */}
                      <p className="text-slate-400 text-xs sm:text-[13px] leading-relaxed line-clamp-3 mb-4 font-normal">
                        {project.description}
                      </p>

                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className={`text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md border ${accent.tag} shadow-sm`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons Footer */}
                    <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-800/70">
                      {project.playStore && (
                        <a
                          href={project.playStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-3.5 py-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-lg shadow-md shadow-emerald-950/40 hover:shadow-emerald-500/20 transition-all duration-300 text-xs font-semibold group/btn"
                        >
                          <FaGooglePlay className="me-1.5 text-[10px] group-hover/btn:scale-110 transition-transform" />
                          <span>{t("btnPlayStore")}</span>
                        </a>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-3.5 py-1.5 bg-slate-950/80 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/80 text-slate-300 hover:text-white rounded-lg shadow-sm transition-all duration-300 text-xs font-semibold group/btn"
                        >
                          <FaGithub className="me-1.5 text-xs group-hover/btn:scale-110 transition-transform" />
                          <span>{t("btnCode")}</span>
                        </a>
                      )}

                      {project.livedemo && (
                        <a
                          href={project.livedemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center px-3.5 py-1.5 ${
                            accent.btnDemo || "bg-indigo-600 hover:bg-indigo-500 text-white"
                          } rounded-lg shadow-md transition-all duration-300 text-xs font-semibold group/btn`}
                        >
                          <FaExternalLinkAlt className="me-1.5 text-[9px] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          <span>{t("btnDemo")}</span>
                        </a>
                      )}

                      {project.downloadLink && (
                        <a
                          href={project.downloadLink}
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-3.5 py-1.5 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold rounded-lg shadow-md transition-all duration-300 text-xs group/btn"
                        >
                          <FaDownload className="me-1.5 text-[10px] group-hover/btn:translate-y-0.5 transition-transform" />
                          <span>{t("btnDownload") || "Download"}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ── High-Res Screenshot Preview Lightbox Modal ── */}
      <AnimatePresence>
        {modalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-7 shadow-2xl overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {modalProject.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {modalProject.category} • Flutter & Cross-Platform
                  </p>
                </div>
                <button
                  onClick={() => setModalProject(null)}
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label={t("closeModal")}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image Display */}
              <div className="relative my-6 max-h-[60vh] flex items-center justify-center bg-slate-950/90 rounded-2xl p-4 overflow-hidden border border-slate-800/80">
                <img
                  src={
                    modalProject.screenshots
                      ? modalProject.screenshots[modalImageIndex] ||
                        modalProject.image
                      : modalProject.image
                  }
                  alt={modalProject.name}
                  className="max-h-[50vh] w-auto max-w-full object-contain rounded-lg shadow-xl"
                />

                {/* Next / Previous if multiple screenshots */}
                {modalProject.screenshots &&
                  modalProject.screenshots.length > 1 && (
                    <>
                      <button
                        onClick={() =>
                          setModalImageIndex(
                            (prev) =>
                              (prev - 1 + modalProject.screenshots.length) %
                              modalProject.screenshots.length
                          )
                        }
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 cursor-pointer"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() =>
                          setModalImageIndex(
                            (prev) =>
                              (prev + 1) % modalProject.screenshots.length
                          )
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 cursor-pointer"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
              </div>

              {/* Screenshot thumbnails selector if multiple */}
              {modalProject.screenshots &&
                modalProject.screenshots.length > 1 && (
                  <div className="flex items-center justify-center gap-2 mb-4 overflow-x-auto py-1">
                    {modalProject.screenshots.map((scr, idx) => (
                      <button
                        key={idx}
                        onClick={() => setModalImageIndex(idx)}
                        className={`w-14 h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                          modalImageIndex === idx
                            ? "border-indigo-500 scale-105 shadow-md shadow-indigo-500/30"
                            : "border-slate-800 opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={scr}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}

              {/* Modal Footer with Action Links */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800 text-xs">
                <div className="flex flex-wrap gap-1.5">
                  {modalProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  {modalProject.playStore && (
                    <a
                      href={modalProject.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-colors"
                    >
                      <FaGooglePlay className="text-[11px]" />
                      <span>{t("btnPlayStore")}</span>
                    </a>
                  )}
                  {modalProject.downloadLink && (
                    <a
                      href={modalProject.downloadLink}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold transition-colors"
                    >
                      <FaDownload className="text-[11px]" />
                      <span>{t("btnDownload")}</span>
                    </a>
                  )}
                  {modalProject.github && (
                    <a
                      href={modalProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold border border-slate-700 transition-colors"
                    >
                      <FaGithub className="text-xs" />
                      <span>{t("btnCode")}</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
