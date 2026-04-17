import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      title: "Weekly Gatherings",
      desc: "Join us every Sunday for deep spiritual teachings and community fellowship.",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    },
    {
      title: "Library Access",
      desc: "Explore thousands of spiritual books, manuscripts, and digital archives.",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    },
    {
      title: "Choir (Mezmur)",
      desc: "Lift your voice and spirit with our dedicated Mezmur practice sessions.",
      icon: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3",
    },
    {
      title: "Charity Initiatives",
      desc: "Participate in local outreach, Mary's Joy, and community service programs.",
      icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
    },
  ];

  return (
    <section className="py-32 px-10 xl:px-20 bg-[#FAF9F5] dark:bg-[#001720] transition-colors duration-500">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-[42px] font-bold text-[#002230] dark:text-white mb-6 tracking-tight">
            Our Operations
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-[600px] mx-auto text-[15px] leading-[1.8]">
            Discover exactly how Poly Gibi Gubaie operates to support its
            members through our various active departments and continuous
            spiritual initiatives.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#002230] p-8 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] border border-zinc-100 dark:border-white/5 hover:-translate-y-2 transition-transform duration-300"
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
                    d={feature.icon}
                  ></path>
                </svg>
              </div>
              <h3 className="font-bold text-lg text-zinc-900 dark:text-white mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-[1.7]">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
