import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-955 text-slate-550 py-12 border-t border-slate-900 text-center relative z-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm font-medium tracking-wide text-slate-400">
          &copy; {new Date().getFullYear()} <span className="text-slate-200">Atef Elhamsa</span>. All rights reserved.
        </p>
        <p className="text-xs text-slate-500">
          Built with React &amp; Tailwind CSS &bull; Crafted with care
        </p>
      </div>
    </footer>
  );
};

export default Footer;
