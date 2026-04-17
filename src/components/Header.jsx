import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../assets/polyGG logo blue.png";

const Header = () => {
  const { i18n, t } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setIsDarkMode(true);
    }
  };

  const currentLang = i18n.language?.startsWith("am") ? "Amh" : "Eng";

  const toggleLanguage = () => {
    i18n.changeLanguage(currentLang === "Eng" ? "am" : "en");
  };

  const departments = [
    {
      name: t("departments.education.name"),
      desc: t("departments.education.desc"),
    },
    {
      name: t("departments.development.name"),
      desc: t("departments.development.desc"),
    },
    { name: t("departments.choir.name"), desc: t("departments.choir.desc") },
    {
      name: t("departments.members_care.name"),
      desc: t("departments.members_care.desc"),
    },
    {
      name: t("departments.language_special_needs.name"),
      desc: t("departments.language_special_needs.desc"),
    },
    {
      name: t("departments.programs_coordination.name"),
      desc: t("departments.programs_coordination.desc"),
    },
    {
      name: t("departments.professionals_charity.name"),
      desc: t("departments.professionals_charity.desc"),
    },
    {
      name: t("departments.info_records.name"),
      desc: t("departments.info_records.desc"),
    },
    {
      name: t("departments.audit_inspection.name"),
      desc: t("departments.audit_inspection.desc"),
    },
    {
      name: t("departments.finance_property.name"),
      desc: t("departments.finance_property.desc"),
    },
  ];

  return (
    <header className="flex items-center justify-between px-10 xl:px-20 py-5 bg-white dark:bg-[#001f2b] dark:border-zinc-800 shrink-0 border-b border-zinc-100 transition-colors duration-500 z-50 relative">
      <div className="flex items-center gap-4 cursor-pointer">
        <Link to="/" className="flex items-center gap-4">
          <img
            src={logo}
            alt="Poly Gibi Gubaie Logo"
            className="h-14 w-14 object-contain shrink-0"
          />
          <div className="flex flex-col">
            <span className="font-serif text-lg xl:text-xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
              {t("nav.poly_gibi_gubaie")}
            </span>
            <span className="text-[11px] xl:text-[12px] font-medium tracking-normal text-zinc-500 dark:text-zinc-400 mt-0.5">
              {t("nav.poly_gibi_gubaie_am")}
            </span>
          </div>
        </Link>
      </div>

      <nav className="hidden lg:flex items-center gap-8 xl:gap-12 font-sans text-[11px] font-bold tracking-widest text-zinc-500 dark:text-zinc-400 uppercase">
        <Link
          to="/"
          className="text-zinc-900 dark:text-white pb-1 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-brand-yellow transition-colors"
        >
          {t("nav.home")}
        </Link>
        <Link
          to="/about"
          className="hover:text-zinc-900 dark:hover:text-white transition-colors"
        >
          {t("nav.about")}
        </Link>
        <Link
          to="/faq"
          className="hover:text-zinc-900 dark:hover:text-white transition-colors"
        >
          {t("nav.faq")}
        </Link>
        <a
          href="#"
          className="hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-2"
        >
          {t("nav.marys_joy")}
        </a>

        {/* Mega Menu Dropdown */}
        <div className="relative group/nav h-full py-6 -my-6">
          <button className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-white transition-colors text-[11px] font-bold tracking-widest uppercase outline-none">
            {t("nav.departments")}
            <svg
              className="w-3.5 h-3.5 group-hover/nav:rotate-180 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <div className="absolute left-1/2 -translate-x-1/2 top-[100%] pt-2 w-[650px] opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 transform translate-y-4 group-hover/nav:translate-y-0 z-50">
            <div className="bg-white dark:bg-[#002230] rounded-2xl shadow-[0_30px_80px_-15px_rgba(0,0,0,0.15)] dark:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] border border-black/5 dark:border-white/5 p-8 grid grid-cols-2 gap-x-8 gap-y-6">
              {departments.map((dept, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="group/item flex flex-col items-start p-3 -m-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-[#001720] transition-colors"
                >
                  <span className="font-bold text-[13px] text-zinc-900 dark:text-white normal-case tracking-normal mb-1 group-hover/item:text-brand-yellow transition-colors">
                    {dept.name}
                  </span>
                  <span className="text-[11px] text-zinc-500 dark:text-zinc-400 normal-case tracking-normal font-medium">
                    {dept.desc}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="flex items-center gap-2 xl:gap-4">
        {/* Search Icon */}
        <button
          className="p-2.5 rounded-xl text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-[#002B36] hover:text-brand-dark dark:hover:text-brand-yellow transition-all"
          title="Search"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>

        <Link
          to="/login"
          className="hidden sm:block text-[11px] font-bold text-zinc-600 dark:text-zinc-300 hover:text-brand-dark dark:hover:text-brand-yellow transition-colors tracking-widest uppercase"
        >
          {t("nav.login")}
        </Link>
        <Link
          to="/signup"
          className="hidden sm:block px-4 py-2 text-[11px] font-bold text-white bg-[#002230] dark:bg-brand-yellow dark:text-zinc-900 hover:bg-black dark:hover:bg-amber-400 rounded-xl tracking-[0.1em] transition-all shadow-sm transform hover:-translate-y-0.5 uppercase"
        >
          {t("nav.signup")}
        </Link>

        <div className="w-[1px] h-5 bg-zinc-200 dark:bg-zinc-700 mx-1 hidden sm:block"></div>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2.5 rounded-xl text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-[#002B36] hover:text-brand-dark dark:hover:text-brand-yellow transition-all"
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDarkMode ? (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3a6 6 0 009 9 9 9 0 11-9-9Z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 3v4M21 5h-4"
              ></path>
            </svg>
          )}
        </button>

        {/* Language Toggle */}
        <button
          onClick={toggleLanguage}
          className="flex items-center justify-center px-4 py-2.5 ml-1 text-xs font-bold text-white bg-[#002230] dark:bg-brand-yellow dark:text-zinc-900 hover:bg-black dark:hover:bg-amber-400 rounded-xl tracking-[0.1em] uppercase transition-all min-w-[70px] shadow-sm transform hover:-translate-y-0.5"
          title="Toggle Language"
        >
          {currentLang === "Eng" ? "AMH" : "ENG"}
        </button>
      </div>
    </header>
  );
};

export default Header;
