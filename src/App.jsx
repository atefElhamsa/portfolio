import React, { useState, useEffect } from "react";
import "./App.css";
import Aboutme from "./Components/Aboutme";
import ScrollToTop from "./Components/buttonScroll";
import Contact from "./Components/Contact";
import Footer from "./Components/footer";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import { useLanguage } from "./context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { t, language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen text-white antialiased font-sans selection:bg-indigo-500 selection:text-white relative overflow-hidden">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 z-50 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Floating Ambient Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="w-[450px] h-[450px] rounded-full fixed top-1/4 left-[-100px] animate-float-1 bg-[radial-gradient(circle,rgba(168,85,247,0.15)_0%,transparent_60%)] will-change-transform" />
        <div className="w-[600px] h-[600px] rounded-full fixed bottom-1/4 right-[-150px] animate-float-2 bg-[radial-gradient(circle,rgba(99,102,241,0.08)_0%,transparent_60%)] will-change-transform" />
        <div className="w-[350px] h-[350px] rounded-full fixed top-3/4 left-1/3 animate-float-1 bg-[radial-gradient(circle,rgba(6,182,212,0.08)_0%,transparent_60%)] will-change-transform" />
      </div>

      <Navbar />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={language}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Hero />
          <Aboutme />
          <Projects />
          <Contact />
        </motion.main>
      </AnimatePresence>
      
      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/201552946586?text=Hi%20Atef,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-40 group flex items-center gap-2 bg-emerald-600/90 hover:bg-emerald-500 backdrop-blur-md border border-emerald-500/30 text-white p-3 rounded-full md:rounded-2xl shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_4px_25px_rgba(16,185,129,0.5)] transition-all duration-300 hover:-translate-y-1"
        title="Chat on WhatsApp"
      >
        <span className="relative flex h-5 w-5 items-center justify-center">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.072 1.592 5.428.001 9.845-4.417 9.848-9.846.002-2.63-1.02-5.101-2.871-6.955-1.852-1.854-4.324-2.876-6.954-2.877-5.43 0-9.848 4.417-9.851 9.847-.001 1.897.513 3.475 1.559 5.002l-.993 3.628 3.72-.976zm11.332-6.84c-.272-.137-1.614-.797-1.863-.888-.249-.09-.43-.137-.61.137-.18.272-.699.888-.857 1.07-.158.18-.317.204-.589.068-.272-.137-1.149-.423-2.19-1.353-.809-.721-1.355-1.613-1.513-1.886-.159-.273-.017-.42.12-.556.122-.122.272-.318.408-.477.136-.159.182-.272.272-.454.09-.181.045-.34-.023-.477-.068-.137-.61-1.472-.836-2.016-.22-.53-.44-.457-.61-.466-.157-.008-.339-.009-.521-.009-.18 0-.476.068-.724.34-.249.272-.951.93-0.951 2.268s.973 2.632 1.109 2.814c.136.182 1.914 2.923 4.638 4.103.648.281 1.153.448 1.547.573.651.207 1.243.178 1.71.108.522-.078 1.614-.659 1.841-1.295.226-.636.226-1.181.158-1.295-.068-.115-.249-.204-.522-.34z"/>
          </svg>
        </span>
        <span className="hidden md:inline text-xs font-bold uppercase tracking-wider ps-1 pe-2">{t("chatWithMe")}</span>
      </a>

      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
