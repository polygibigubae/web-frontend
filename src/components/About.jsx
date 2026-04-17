import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const coreValues = [
    {
      title: "Orthodox Faith",
      desc: "Rooted deeply in the ancient traditions of the Ethiopian Orthodox Tewahedo Church.",
      icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
    },
    {
      title: "Community Fellowship",
      desc: "A home away from home where students find lifelong friends and spiritual family.",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    },
    {
      title: "Academic Excellence",
      desc: "Encouraging students to excel in their university studies alongside their faith.",
      icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222",
    },
    {
      title: "Charitable Service",
      desc: "Actively serving the marginalized and practicing the unconditional love of Christ.",
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    },
  ];

  const leaders = [
    {
      role: "Head Priest",
      name: "Abba Yohannes",
      img: "https://loremflickr.com/300/300/portrait/all?lock=10",
    },
    {
      role: "Association President",
      name: "Amanuel T.",
      img: "https://loremflickr.com/300/300/portrait/all?lock=20",
    },
    {
      role: "Choir Director",
      name: "Sara M.",
      img: "https://loremflickr.com/300/300/portrait/all?lock=30",
    },
    {
      role: "Admin Coordinator",
      name: "Dawit K.",
      img: "https://loremflickr.com/300/300/portrait/all?lock=40",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#FAF9F5] dark:bg-[#00111a] min-h-screen transition-colors duration-500 overflow-hidden relative"
    >
      {/* Decorative Blurs */}
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-brand-yellow/10 dark:bg-yellow-400/5 rounded-full blur-[100px] mix-blend-multiply pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[5%] w-[600px] h-[600px] bg-teal-100/30 dark:bg-teal-900/20 rounded-full blur-[120px] mix-blend-multiply pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-10 xl:px-20 pt-32 pb-20 relative z-10">
        {/* Section 1: Hero Header */}
        <section className="max-w-[800px] mb-32">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-yellow font-bold tracking-[0.2em] uppercase text-xs mb-6 block"
          >
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold text-[#002230] dark:text-white leading-[1.1] mb-8 tracking-tight"
          >
            A sanctuary built on{" "}
            <span className="italic text-brand-yellow">faith</span> & community.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-600 dark:text-zinc-400 text-[18px] leading-[1.8] max-w-[600px]"
          >
            Since 1888, Poly Gibi Gubaie has been the cornerstone of spiritual
            growth for Ethiopian Orthodox students. We exist to provide a home
            away from home—a place where ancient traditions map out the modern
            journey.
          </motion.p>
        </section>

        {/* Section 2: Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-[#001f2b] p-12 rounded-[32px] shadow-sm border border-zinc-100 dark:border-white/5 group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
          >
            <div className="w-14 h-14 bg-[#002230] dark:bg-brand-yellow text-white dark:text-zinc-900 rounded-full flex items-center justify-center mb-8 transform group-hover:scale-110 transition-transform">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h2 className="text-3xl font-serif font-bold text-[#002230] dark:text-white mb-4 tracking-tight">
              Our Mission
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 leading-[1.8]">
              To nurture a devout, educated, and spiritually grounded generation
              of youth capable of sustaining the rich heritage of the Ethiopian
              Orthodox Tewahedo Church in today's dynamic world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-[#001f2b] p-12 rounded-[32px] shadow-sm border border-zinc-100 dark:border-white/5 group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
          >
            <div className="w-14 h-14 bg-[#002230] dark:bg-brand-yellow text-white dark:text-zinc-900 rounded-full flex items-center justify-center mb-8 transform group-hover:scale-110 transition-transform">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                ></path>
              </svg>
            </div>
            <h2 className="text-3xl font-serif font-bold text-[#002230] dark:text-white mb-4 tracking-tight">
              Our Vision
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 leading-[1.8]">
              We envision a thriving, globally connected fellowship where every
              student finds immense joy, deep spiritual fulfillment, and
              lifelong guidance through our ministries.
            </p>
          </motion.div>
        </section>

        {/* Section 3: Our History Timeline */}
        <section className="mb-32 max-w-[1000px] mx-auto border-l-2 border-brand-yellow/30 pl-8 md:pl-16 relative">
          <h2 className="text-4xl font-serif font-bold text-[#002230] dark:text-white mb-16 tracking-tight">
            The Historic Journey
          </h2>

          <div className="space-y-16">
            <div className="relative">
              <div className="absolute -left-[41px] md:-left-[73px] top-1 w-5 h-5 rounded-full bg-brand-yellow ring-4 ring-[#FAF9F5] dark:ring-[#00111a]"></div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                Established in 1888
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-[1.8]">
                Founded as a small fellowship of devoted university students
                seeking to maintain their Orthodox roots in a rapidly changing
                academic environment.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] md:-left-[73px] top-1 w-5 h-5 rounded-full bg-brand-yellow ring-4 ring-[#FAF9F5] dark:ring-[#00111a]"></div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                Expansion & Recognition
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-[1.8]">
                Grew to over 5,000 members across multiple regional campuses,
                gaining official recognition from the holy synod for outstanding
                service to students.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] md:-left-[73px] top-1 w-5 h-5 rounded-full bg-brand-yellow ring-4 ring-[#FAF9F5] dark:ring-[#00111a]"></div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                The Digital Sanctuary
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-[1.8]">
                Today, Poly Gibi Gubaie operates completely digitally alongside
                physical gatherings, connecting tens of thousands globally
                through its comprehensive platform.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Core Values */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-[#002230] dark:text-white mb-4 tracking-tight">
              Our Core Values
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-[600px] mx-auto leading-[1.8]">
              The guiding principles that shape every Sunday gathering, outreach
              program, and late-night study session.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-white dark:bg-[#002b36] rounded-2xl shadow-sm border border-zinc-100 dark:border-white/5"
              >
                <div className="w-12 h-12 bg-teal-50 dark:bg-yellow-400/10 text-teal-600 dark:text-brand-yellow rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={value.icon}
                    ></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-zinc-900 dark:text-white mb-3 tracking-tight">
                  {value.title}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-[14px] leading-[1.7]">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 5: Leadership Team */}
        <section className="mb-32 bg-[#002230] dark:bg-[#001f2b] p-12 md:p-20 rounded-[40px] text-white">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="max-w-[500px]">
              <h2 className="text-4xl font-serif font-bold mb-4 tracking-tight">
                Meet the Leaders
              </h2>
              <p className="text-[#A2C4C2] dark:text-zinc-400 leading-[1.8]">
                Dedicated individuals committed to upholding the spiritual
                integrity and administrative excellence of our association.
              </p>
            </div>
            <button className="px-6 py-3 border border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-zinc-900 font-bold tracking-widest text-xs uppercase rounded-lg transition-colors">
              View Full Committee
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="w-full aspect-[4/5] bg-zinc-800 rounded-2xl mb-6 overflow-hidden">
                  <img
                    src={leader.img}
                    alt={leader.name}
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <h3 className="font-bold text-xl text-white tracking-tight">
                  {leader.name}
                </h3>
                <span className="text-brand-yellow text-sm font-bold tracking-wider uppercase mt-1 block">
                  {leader.role}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 6: Join CTA */}
        <section className="text-center py-20">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#002230] dark:text-white mb-6 tracking-tight">
            Become a part of our story.
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-[600px] mx-auto text-[18px] leading-[1.8] mb-10">
            Whether you are a freshman finding your way or an alumnus looking to
            give back, there is always a place for you here.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <button className="px-10 py-5 bg-[#002230] dark:bg-brand-yellow text-white dark:text-zinc-900 text-[13px] font-bold tracking-widest rounded-xl hover:-translate-y-1 shadow-[0_12px_30px_-10px_rgba(0,34,48,0.6)] dark:shadow-[0_12px_30px_-10px_rgba(255,212,59,0.3)] transition-all uppercase">
              Join the Association
            </button>
            <button className="px-10 py-5 bg-white dark:bg-transparent text-[#002230] dark:text-white border border-[#002230] dark:border-white/20 text-[13px] font-bold tracking-widest rounded-xl hover:bg-zinc-50 dark:hover:bg-white/5 transition-all uppercase">
              Contact Support
            </button>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default About;
