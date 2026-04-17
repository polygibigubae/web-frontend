import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "How do I join the Association?",
      a: "Becoming a member is easy. You simply need to attend our spiritual orientation on Sundays. Once you familiarize yourself with the community, you can officially register as a member.",
    },
    {
      q: "Who is eligible to participate?",
      a: "We primarily welcome current students and university alumni who seek a structured spiritual environment and fellowship within the Ethiopian Orthodox Tewahedo Church.",
    },
    {
      q: "Does the Association provide financial support?",
      a: "Yes, through our Charity Initiatives and 'Mary's Joy' programs, we help support struggling students and local community members in need.",
    },
    {
      q: "How can I join the Choir (Mezmur) department?",
      a: "The Mezmur department holds practice sessions every Saturday afternoon. Simply speak to the department head at the end of any of our main gatherings to join.",
    },
    {
      q: "Are the resources in the digital library free?",
      a: "Yes. All digital materials, liturgical texts, and sermons published on our platform are completely free to access.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="py-24 px-10 xl:px-20 min-h-screen bg-[#FBFDFB] dark:bg-[#001720] transition-colors duration-500"
    >
      <div className="max-w-[800px] mx-auto pt-10">
        <div className="text-center mb-16">
          <span className="text-brand-yellow font-bold tracking-widest uppercase text-xs mb-4 block">
            Help & Info
          </span>
          <h1 className="text-5xl font-serif font-bold text-[#002230] dark:text-white mb-6 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 mb-12 text-[15px] leading-[1.8] max-w-[600px] mx-auto">
            Everything you need to know about the Poly Gibi Gubaie community,
            our departments, and how you can get involved.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-[#002230] border transition-colors duration-300 rounded-2xl overflow-hidden shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] dark:shadow-none ${activeIndex === index ? "border-brand-yellow dark:border-brand-yellow" : "border-zinc-100 dark:border-white/5 hover:border-zinc-200 dark:hover:border-white/10"}`}
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <span
                  className={`font-bold text-[16px] transition-colors ${activeIndex === index ? "text-brand-yellow" : "text-zinc-900 dark:text-zinc-100"}`}
                >
                  {faq.q}
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all bg-[#FAF9F5] dark:bg-[#001720] text-[#002230] dark:text-white ${activeIndex === index ? "rotate-180 bg-brand-yellow text-zinc-900" : ""}`}
                >
                  <svg
                    className="w-4 h-4"
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
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-8 pb-6 text-zinc-600 dark:text-zinc-400 text-[14px] leading-[1.8]"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FAQ;
