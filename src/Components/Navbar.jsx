/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Home, User, Mail, Code2, Menu, X } from "lucide-react";
import { FaTools } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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
          const top = el.offsetTop;
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
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-slate-950/70 border-b border-slate-900/60 py-4 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo with Gradient Text */}
          <a href="#home" className="flex items-center gap-2 group">
            <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
              {t("name")}
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`relative flex items-center gap-2 text-sm font-medium tracking-wide py-1.5 transition-colors duration-300 ${
                    isActive ? "text-indigo-400" : "text-slate-400 hover:text-indigo-300"
                  }`}
                >
                  {link.icon}
                  {t(link.labelKey)}
                  {isActive && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}

            {/* Premium Language Switcher Toggle */}
            <button
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-indigo-500/10 border border-slate-800 hover:border-indigo-500/30 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-all duration-200 cursor-pointer shadow-md"
            >
              <span>{language === "en" ? "العربية" : "English"}</span>
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
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-base font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-indigo-500/10 border-indigo-500/30 text-indigo-300 shadow-md shadow-indigo-500/5"
                          : "bg-slate-900/50 border-transparent text-slate-400 hover:text-slate-250 hover:bg-slate-900"
                      }`}
                    >
                      <span className={isActive ? "text-indigo-400" : "text-slate-505"}>
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
                  className="flex items-center justify-center gap-2 mt-4 px-4 py-3.5 rounded-xl border border-indigo-550/20 bg-indigo-500/5 text-indigo-300 hover:bg-indigo-500/10 text-base font-semibold transition-all duration-300 cursor-pointer shadow-md"
                >
                  <span>{language === "en" ? "العربية" : "English"}</span>
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
