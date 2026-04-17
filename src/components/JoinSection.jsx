import React from "react";

const JoinSection = () => {
  return (
    <section className="bg-[#FAF9F5] dark:bg-[#001720] py-32 px-20 flex justify-center border-t border-zinc-100 dark:border-zinc-800 relative transition-colors duration-500">
      <div className="text-center w-full max-w-4xl pt-8 pb-12 z-10 bg-white dark:bg-[#001f2b] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-black/5 dark:border-white/5 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-500">
        <p className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase mb-5">
          You are welcome
        </p>
        <h2 className="font-serif text-[48px] font-bold text-[#002230] dark:text-white mb-8 tracking-tight">
          Join the Association
        </h2>

        <p className="text-zinc-600 dark:text-zinc-400 mb-12 max-w-[500px] mx-auto leading-[1.8] text-[15px]">
          We invite you to partner with us in our membership program. Through
          this, we continue ensuring the legacy of faith is handed down.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
          <button className="bg-[#F5F5F5] dark:bg-[#002B36] hover:bg-[#EAEAEA] dark:hover:bg-[#003B46] text-zinc-900 dark:text-white font-bold px-[42px] py-[14px] text-[11px] tracking-[0.1em] uppercase transition-colors w-full sm:w-auto text-center flex justify-center items-center">
            Learn More{" "}
            <span className="ml-[6px] font-normal text-sm leading-none">→</span>
          </button>

          <button className="bg-[#002230] dark:bg-brand-yellow hover:bg-black dark:hover:bg-yellow-400 text-white dark:text-zinc-900 font-bold px-[42px] py-[14px] text-[11px] tracking-[0.1em] uppercase shadow-md transition-colors w-full sm:w-auto text-center flex justify-center items-center">
            Join the Association
          </button>
        </div>

        <a
          href="#"
          className="text-[11px] font-bold text-zinc-400 dark:text-zinc-500 hover:text-brand-yellow dark:hover:text-brand-yellow transition-colors uppercase tracking-[0.15em] flex items-center justify-center gap-2 mt-4"
        >
          See what Association Membership can do for you{" "}
          <span className="text-lg leading-none">→</span>
        </a>
      </div>
    </section>
  );
};

export default JoinSection;
