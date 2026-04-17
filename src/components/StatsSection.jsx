import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Counter Hook to animate numbers
function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const step = end / (duration / 16);
      const timer = setInterval(() => {
        start += step;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return { count, ref };
}

const StatsSection = () => {
  const { count: deptCount, ref: deptRef } = useCountUp(50, 2000);
  const { count: memberCount, ref: memberRef } = useCountUp(10000, 2500);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 bg-white dark:bg-[#00111a] border-y border-zinc-100 dark:border-zinc-800 transition-colors duration-500 overflow-hidden relative">
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-brand-yellow/5 dark:bg-yellow-400/5 rounded-full blur-[80px]"></div>
      <div className="max-w-[1200px] mx-auto px-10 xl:px-20 relative z-10">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-6 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <span className="text-4xl md:text-6xl font-serif font-bold text-[#002230] dark:text-brand-yellow mb-3 tracking-tight drop-shadow-md">
              1888
            </span>
            <span className="text-[11px] font-bold tracking-[0.25em] text-zinc-500 dark:text-zinc-400 uppercase">
              Established
            </span>
          </motion.div>
          <motion.div
            variants={itemVariants}
            ref={deptRef}
            className="flex flex-col items-center"
          >
            <span className="text-4xl md:text-6xl font-serif font-bold text-[#002230] dark:text-brand-yellow mb-3 tracking-tight drop-shadow-md">
              {deptCount}+
            </span>
            <span className="text-[11px] font-bold tracking-[0.25em] text-zinc-500 dark:text-zinc-400 uppercase">
              Departments
            </span>
          </motion.div>
          <motion.div
            variants={itemVariants}
            ref={memberRef}
            className="flex flex-col items-center"
          >
            <span className="text-4xl md:text-6xl font-serif font-bold text-[#002230] dark:text-brand-yellow mb-3 tracking-tight drop-shadow-md">
              {(memberCount / 1000).toFixed(1)}k+
            </span>
            <span className="text-[11px] font-bold tracking-[0.25em] text-zinc-500 dark:text-zinc-400 uppercase">
              Members
            </span>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <span className="text-4xl md:text-6xl font-serif font-bold text-[#002230] dark:text-brand-yellow mb-3 tracking-tight drop-shadow-md">
              24/7
            </span>
            <span className="text-[11px] font-bold tracking-[0.25em] text-zinc-500 dark:text-zinc-400 uppercase">
              Spiritual Support
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
