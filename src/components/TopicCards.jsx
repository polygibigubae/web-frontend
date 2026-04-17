import React from "react";
import { useTranslation } from "react-i18next";

const TopicCards = () => {
  const { t } = useTranslation();
  const topics = [
    {
      id: 1,
      image: "https://loremflickr.com/800/800/ethiopia,cross/all",
      tag: t("topic_cards.topic_1_tag"),
      title: t("topic_cards.topic_1_title"),
    },
    {
      id: 2,
      image: "https://loremflickr.com/800/800/ethiopian,priest/all",
      tag: t("topic_cards.topic_2_tag"),
      title: t("topic_cards.topic_2_title"),
    },
    {
      id: 3,
      image: "https://loremflickr.com/800/1000/orthodox,bible/all",
      tag: t("topic_cards.topic_3_tag"),
      title: t("topic_cards.topic_3_title"),
    },
  ];

  return (
    <section className="px-20 py-24 bg-white dark:bg-[#001720] transition-colors duration-500">
      <div className="flex justify-between items-end mb-16">
        <div>
          <p className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 dark:text-zinc-400 uppercase mb-3">
            {t("topic_cards.explore_interest")}
          </p>
          <div className="flex gap-2">
            <div className="w-10 h-10 bg-brand-dark dark:bg-[#002230] flex flex-col justify-center items-center gap-[3px] rounded-sm cursor-pointer hover:bg-black dark:hover:bg-brand-yellow transition-colors group">
              <div className="w-[18px] h-[2px] bg-white dark:group-hover:bg-zinc-900"></div>
              <div className="w-[18px] h-[2px] bg-white dark:group-hover:bg-zinc-900"></div>
              <div className="w-[18px] h-[2px] bg-white dark:group-hover:bg-zinc-900"></div>
              <div className="w-[18px] h-[2px] bg-white dark:group-hover:bg-zinc-900"></div>
            </div>
            <div className="w-10 h-10 border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 flex items-center justify-center rounded-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="w-11 h-11 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center hover:bg-zinc-50 dark:hover:bg-[#002230] rounded-sm text-zinc-600 dark:text-zinc-400 transition-colors">
            <span className="text-lg leading-none">←</span>
          </button>
          <button className="w-11 h-11 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center hover:bg-zinc-50 dark:hover:bg-[#002230] rounded-sm text-zinc-900 dark:text-zinc-200 transition-colors">
            <span className="text-lg leading-none">→</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {topics.map((topic, index) => (
          <div
            key={topic.id}
            className="group cursor-pointer flex flex-col items-center"
          >
            <div
              className={`w-full overflow-hidden mb-8 relative ${index === 2 ? "aspect-[3/5] mt-[90px]" : index === 1 ? "aspect-[4/5] mt-[30px]" : "aspect-square"}`}
            >
              <div className="absolute top-5 left-5 bg-white dark:bg-[#001f2b] px-3 py-1 text-[10px] font-bold tracking-widest uppercase z-10 shadow-sm text-zinc-900 dark:text-zinc-200">
                {topic.tag}
              </div>
              <img
                src={topic.image}
                alt={topic.title}
                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${index > 0 ? "grayscale contrast-125" : "grayscale-[50%]"}`}
              />
            </div>
            <div className="w-full pr-10">
              <h3 className="font-serif text-[28px] text-zinc-900 dark:text-white mb-6 leading-[1.2] group-hover:text-brand-dark dark:group-hover:text-brand-yellow transition-colors tracking-tight">
                {topic.title}
              </h3>
              {index === 0 && (
                <p className="text-[14px] text-zinc-500 dark:text-zinc-400 mb-6 leading-relaxed">
                  {t("topic_cards.topic_1_desc")}
                </p>
              )}
              {index === 1 && (
                <p className="text-[14px] text-zinc-500 dark:text-zinc-400 mb-6 leading-relaxed">
                  {t("topic_cards.topic_2_desc")}
                </p>
              )}
              {index === 2 && (
                <p className="text-[14px] text-zinc-500 dark:text-zinc-400 mb-6 leading-relaxed">
                  {t("topic_cards.topic_3_desc")}
                </p>
              )}
              <div
                className={`w-12 h-1 transition-colors ${index === 0 ? "bg-brand-dark dark:bg-brand-yellow group-hover:bg-brand-yellow" : "bg-transparent group-hover:bg-brand-yellow"}`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopicCards;
