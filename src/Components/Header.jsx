import React, { useState } from "react";
import { Home, User, Mail, Code2, GraduationCap, Menu, X } from "lucide-react";
import { FaTools } from "react-icons/fa";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white fixed w-full top-0 z-50 shadow-md py-4">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
          Atef Elhamsa
        </h1>

        <nav className="hidden md:flex gap-10">
          <a
            href="#home"
            className="flex items-center gap-2 hover:text-indigo-400 transition"
          >
            <Home className="h-5 w-5" /> Home
          </a>
          <a
            href="#about"
            className="flex items-center gap-2 hover:text-indigo-400 transition"
          >
            <User className="h-5 w-5" /> About me
          </a>
          <a
            href="#skills"
            className="flex items-center gap-2 hover:text-indigo-400 transition"
          >
            <FaTools className="h-5 w-5" /> Skills
          </a>
          <a
            href="#projects"
            className="flex items-center gap-2 hover:text-indigo-400 transition"
          >
            <Code2 className="h-5 w-5" /> Projects
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 hover:text-indigo-400 transition"
          >
            <Mail className="h-5 w-5" /> Contact me
          </a>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden flex flex-col gap-6 bg-gray-800 px-6 py-6">
          <a
            href="#home"
            className="flex items-center gap-2 hover:text-indigo-400 transition"
            onClick={() => setIsOpen(false)}
          >
            <Home className="h-5 w-5" /> Home
          </a>
          <a
            href="#about"
            className="flex items-center gap-2 hover:text-indigo-400 transition"
            onClick={() => setIsOpen(false)}
          >
            <User className="h-5 w-5" /> About me
          </a>
          <a
            href="#skills"
            className="flex items-center gap-2 hover:text-indigo-400 transition"
            onClick={() => setIsOpen(false)}
          >
            <FaTools className="h-5 w-5" /> Skills
          </a>
          <a
            href="#projects"
            className="flex items-center gap-2 hover:text-indigo-400 transition"
            onClick={() => setIsOpen(false)}
          >
            <Code2 className="h-5 w-5" /> Projects
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 hover:text-indigo-400 transition"
            onClick={() => setIsOpen(false)}
          >
            <Mail className="h-5 w-5" /> Contact me
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
