import React from "react";
import { useTranslation } from "react-i18next";

const HighlightSection = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-[#002B36] dark:bg-[#00111a] px-20 py-32 transition-colors duration-500">
      <div className="flex flex-col md:flex-row items-center gap-24 max-w-[1200px] mx-auto">
        <div className="w-full md:w-[45%] relative">
          <div className="aspect-square w-full shadow-2xl relative z-10 border-8 border-[#002B36]/10">
            <img
              src="https://loremflickr.com/800/800/ethiopian,orthodox,church/all"
              alt="Community members gathering"
              className="w-full h-full object-cover filter contrast-[1.1] sepia-[0.3] hover:sepia-0 transition-all duration-700"
            />
          </div>

          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-brand-yellow dark:bg-yellow-400 z-20 flex items-center justify-center p-8 shadow-2xl transition-transform hover:scale-105 duration-500">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="text-zinc-900 w-full h-full"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </div>
        </div>

        <div className="w-full md:w-[55%] text-white pl-0 md:pl-10">
          <h2 className="font-serif text-[42px] mb-12 leading-[1.1] text-[#E5FAF9] tracking-tight">
            {t("highlight.title_1")}
            <br />
            <span className="italic">{t("highlight.title_2")}</span>
          </h2>

          <div className="border-l-[3px] border-brand-yellow pl-8 mb-12 mt-4 space-y-4">
            <p className="text-[22px] italic font-serif text-[#C5E1E0] leading-normal tracking-wide">
              {t("highlight.quote")}
            </p>
          </div>

          <p className="text-[#89A8A6] text-[10px] tracking-[0.2em] font-bold uppercase mb-8">
            {t("highlight.author")}
          </p>

          <p className="text-[#A2C4C2] dark:text-[#84a3a1] mb-12 leading-[1.8] font-sans max-w-[400px] text-[15px]">
            {t("highlight.desc")}
          </p>

          <button className="bg-white dark:bg-brand-yellow text-[#002B36] dark:text-zinc-900 px-10 py-3.5 text-[11px] font-bold tracking-[0.15em] hover:bg-brand-yellow dark:hover:bg-white transition-colors uppercase shadow-xl mt-4">
            {t("highlight.explore")} →
          </button>
        </div>
      </div>
    </section>
  );
};

export default HighlightSection;
