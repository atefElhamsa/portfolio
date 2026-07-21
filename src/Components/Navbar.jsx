/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Home, User, Mail, Code2, Menu, X } from "lucide-react";
import { FaTools } from "react-icons/fa";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navLinks = [
    { id: "home", labelKey: "navHome", icon: <Home className="h-4 w-4" /> },
    { id: "about", labelKey: "navAbout", icon: <User className="h-4 w-4" /> },
    { id: "skills", labelKey: "navSkills", icon: <FaTools className="h-4 w-4" /> },
    { id: "projects", labelKey: "navProjects", icon: <Code2 className="h-4 w-4" /> },
    { id: "contact", labelKey: "navContact", icon: <Mail className="h-4 w-4" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 origin-left z-[100]"
        style={{ scaleX }}
      />
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-xl bg-slate-950/50 border-b border-white/5 py-3 px-6 md:px-12 lg:px-20 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo with Gradient Text */}
          <a href="#home" className="flex items-center gap-2 group">
            <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent group-hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.5)] transition-all duration-300">
              {t("name")}
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1.5 bg-slate-900/30 backdrop-blur-md px-2 py-1.5 rounded-2xl border border-white/5 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`relative flex items-center gap-2 text-sm font-medium tracking-wide px-4 py-2 rounded-xl transition-all duration-300 group ${isActive ? "text-white" : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                >
                  <span className={`transition-transform duration-300 group-hover:scale-110 ${isActive ? 'text-indigo-400 drop-shadow-md' : ''}`}>
                    {link.icon}
                  </span>
                  <span className="relative z-10">{t(link.labelKey)}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navBubble"
                      className="absolute inset-0 bg-white/10 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.1)] border border-white/10"
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />
                  )}
                </a>
              );
            })}

            {/* Premium Language Switcher Toggle */}
            <div className="h-6 w-px bg-white/10 mx-2" />
            <button
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-white/10 text-xs font-bold text-slate-300 hover:text-white transition-all duration-300 cursor-pointer uppercase tracking-wider relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">{language === "en" ? "AR" : "EN"}</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition focus:outline-none"
            aria-label="Toggle Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Sidebar drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-slate-950 border-l border-slate-900 p-6 flex flex-col md:hidden"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  {t("navTitle")}
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-350 hover:text-white transition"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-5">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-4 px-5 py-3.5 rounded-2xl border backdrop-blur-md text-base font-medium transition-all duration-300 ${isActive
                        ? "bg-white/10 border-white/20 text-white shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
                        : "bg-slate-900/40 border-transparent text-slate-400 hover:text-white hover:bg-white/5"
                        }`}
                    >
                      <span className={`p-2 rounded-xl transition-colors ${isActive ? "bg-indigo-500/20 text-indigo-300" : "bg-slate-800/50 text-slate-400"}`}>
                        {link.icon}
                      </span>
                      {t(link.labelKey)}
                    </a>
                  );
                })}

                {/* Mobile Language Switcher Button */}
                <button
                  onClick={() => {
                    setLanguage(language === "en" ? "ar" : "en");
                    setIsOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 mt-6 px-4 py-4 rounded-2xl border border-white/10 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-white hover:from-indigo-500/20 hover:to-purple-500/20 text-base font-bold uppercase tracking-wider transition-all duration-300 shadow-lg"
                >
                  <span>{language === "en" ? "AR" : "EN"}</span>
                </button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
