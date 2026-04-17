import React from "react";

const TestimonialSection = () => {
  return (
    <section className="py-32 px-10 xl:px-20 bg-[#002B36] dark:bg-[#00111a] text-white relative overflow-hidden transition-colors duration-500">
      <div className="absolute -left-[20%] -top-[20%] w-[500px] h-[500px] bg-brand-yellow/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="max-w-[1000px] mx-auto relative z-10 text-center">
        <svg
          className="w-12 h-12 mx-auto text-brand-yellow opacity-80 mb-8"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <h2 className="font-serif text-[32px] md:text-[46px] leading-[1.3] text-white mb-10 tracking-tight">
          "The spiritual environment provided by Poly Gibi Gubaie has been the
          cornerstone of my faith journey through university. It truly stands as
          a sanctuary."
        </h2>
        <div className="flex flex-col items-center justify-center">
          <div className="w-14 h-14 bg-zinc-800 rounded-full mb-4 overflow-hidden border-2 border-brand-yellow">
            <img
              src="https://loremflickr.com/100/100/portrait/all"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-bold text-sm tracking-wider uppercase text-brand-yellow">
            Amanuel T.
          </span>
          <span className="text-xs text-[#A2C4C2] dark:text-[#84a3a1] mt-1 font-medium tracking-widest uppercase">
            Alumni Member
          </span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
