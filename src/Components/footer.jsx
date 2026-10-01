import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-550 py-12 border-t border-slate-900 text-center relative z-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-4">
        <p className="text-sm font-medium tracking-wide text-slate-400">
          &copy; {new Date().getFullYear()} <span className="text-slate-200">{t("name")}</span>. {t("allRightsReserved")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
