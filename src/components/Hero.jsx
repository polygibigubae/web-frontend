import React from "react";
import abuyeCh from "../assets/images/landingPage/abuyeCh.JPG";
import entranceGgub from "../assets/images/landingPage/entranceGgub.JPG";
import insideAdarashi from "../assets/images/landingPage/insideAdarashi.JPG";
import trav from "../assets/images/landingPage/trav1.JPG";

const Hero = () => {
  return (
    <section className="relative px-20 pt-10 pb-32 bg-[#FBFDFB] dark:bg-[#001720] border-b-[8px] border-white dark:border-[#001f2b] overflow-hidden flex flex-col md:flex-row items-center min-h-[85vh] transition-colors duration-500">
      <div className="w-full md:w-[45%] z-10 pr-10">
        <div className="inline-flex items-center gap-3 mb-3 opacity-80">
          <div className="w-6 h-[1px] bg-brand-yellow"></div>
          <p className="text-[10px] tracking-[0.25em] text-zinc-500 dark:text-zinc-400 uppercase font-semibold">
            Established 1888
          </p>
        </div>
        <h1 className="text-[5.5rem] font-serif text-[#002230] dark:text-white leading-[1.05] tracking-tight mb-8 relative">
          The Digital
          <br />
          <span className="italic text-brand-yellow mix-blend-normal">
            Sanctuary.
          </span>
        </h1>
        <p className="text-zinc-600 dark:text-zinc-300 mb-12 max-w-[440px] leading-[1.85] text-[16px]">
          Where ancient Ethiopian Orthodox Tewahedo traditions meet the digital
          age to connect our global community effortlessly. Access resources,
          stay informed, and engage spiritually inside this sanctuary.
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <button className="px-9 py-4 bg-[#002230] dark:bg-brand-yellow text-white dark:text-zinc-900 text-[12px] font-bold tracking-wider rounded-xl shadow-[0_12px_30px_-10px_rgba(0,34,48,0.6)] dark:shadow-[0_12px_30px_-10px_rgba(255,212,59,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(0,34,48,0.7)] dark:hover:shadow-[0_20px_40px_-10px_rgba(255,212,59,0.5)] hover:-translate-y-1 transition-all duration-300 uppercase">
            Start Contributing
          </button>
          <a
            href="#"
            className="group text-[12px] font-bold text-zinc-900 dark:text-zinc-200 flex items-center gap-2 uppercase tracking-wider px-2 py-4 hover:text-brand-yellow dark:hover:text-brand-yellow transition-colors"
          >
            Get Involved
            <span className="text-lg leading-none transform group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>
      </div>

      <div className="w-full md:w-[55%] relative mt-10 md:mt-0 flex justify-end items-center pr-4 xl:pr-10">
        {/* Decorative background blurs */}
        <div className="absolute right-[15%] top-[5%] w-[450px] h-[450px] bg-brand-yellow/20 rounded-full blur-[80px] -z-10 mix-blend-multiply"></div>
        <div className="absolute right-[2%] bottom-[5%] w-[350px] h-[350px] bg-teal-100/50 rounded-full blur-[80px] -z-10 mix-blend-multiply"></div>

        <div className="grid grid-cols-12 grid-rows-12 gap-5 w-full max-w-[620px] h-[680px]">
          {/* Box 1: Left tall box */}
          <div className="col-start-1 col-end-8 row-start-2 row-end-9 rounded-[32px] overflow-hidden shadow-2xl group border-[6px] border-white dark:border-[#001f2b] relative z-10 transform transition-transform duration-700 hover:-translate-y-2 hover:shadow-3xl hover:rotate-1 origin-bottom-right">
            <img
              src={entranceGgub}
              alt="Inside Adarashi"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>

          {/* Box 2: Top right squareish box */}
          <div className="col-start-7 col-end-13 row-start-1 row-end-6 rounded-[32px] overflow-hidden shadow-xl group border-[6px] border-white dark:border-[#001f2b] relative z-20 translate-y-6 -translate-x-4 transform transition-transform duration-700 hover:-translate-y-0 hover:shadow-3xl hover:-rotate-2 origin-bottom-left">
            <img
              src={abuyeCh}
              alt="Abuye Church"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-105"
            />
          </div>

          {/* Box 3: Bottom right tall box */}
          <div className="col-start-8 col-end-13 row-start-6 row-end-13 rounded-[32px] overflow-hidden shadow-2xl group border-[6px] border-white dark:border-[#001f2b] relative z-30 -translate-y-4 -translate-x-2 transform transition-transform duration-700 hover:-translate-y-6 hover:shadow-3xl origin-top-left hover:rotate-1">
            <img
              src={trav}
              alt="Travel Gathering"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </div>

          {/* Box 4: Bottom left wide box */}
          <div className="col-start-2 col-end-8 row-start-9 row-end-12 rounded-[28px] overflow-hidden shadow-lg group border-[6px] border-white dark:border-[#001f2b] relative z-40 -translate-y-2 translate-x-6 transform transition-transform duration-700 hover:-translate-y-4 hover:shadow-2xl hover:-rotate-1 origin-top-right">
            <img
              src={insideAdarashi}
              alt="Entrance"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 contrast-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
