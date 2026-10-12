import React from "react";
import { useTranslation } from "react-i18next";

const SpiritualArticles = () => {
  const { t } = useTranslation();

  const articles = [
    {
      title: "The Joy of Mary",
      excerpt: "Wotethasey menfeseye be'amlakiye wemedhaniye...",
      content: "Let us reflect on the deep joy...",
    },
    {
      title: "Overcoming Campus Challenges",
      excerpt: "Finding peace amidst the storms of student life...",
      content: "As students, we often face anxiety...",
    },
  ];

  return (
    <div className="pt-24 pb-12 px-10 xl:px-20 min-h-screen bg-white dark:bg-[#001f2b] transition-colors">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">
          {t("marys_joy_dropdown.articles.name", "Spiritual Articles")}
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-10">
          {t(
            "marys_joy_dropdown.articles.desc",
            "Read and find comfort in spiritual writings",
          )}
        </p>
        <div className="space-y-6">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#002230] border border-zinc-100 dark:border-white/5 shadow-sm"
            >
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                {article.title}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                {article.excerpt}
              </p>
              <button className="text-sm font-bold text-brand-dark dark:text-brand-yellow hover:underline">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpiritualArticles;
