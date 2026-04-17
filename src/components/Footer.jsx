import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#00111a] pt-24 pb-8 border-t border-zinc-100 dark:border-zinc-800 transition-colors duration-500 relative overflow-hidden">
      <div className="px-10 xl:px-20 max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20 mb-20">
          {/* Brand & Quote */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-[2px] bg-brand-yellow"></div>
              <h3 className="font-serif text-2xl font-bold text-[#002230] dark:text-white tracking-tight">
                Poly Gibi Gubaie
              </h3>
            </div>
            <p className="text-[14px] text-zinc-600 dark:text-zinc-400 leading-[1.8] max-w-[400px]">
              "Taste & See that the LORD is Good"
              <br />— Orthodox Youth Union of America (OYUMA)
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.2em] text-zinc-900 dark:text-white uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4 text-[13px] text-zinc-600 dark:text-zinc-400 font-medium">
              <li>
                <a
                  href="#"
                  className="hover:text-brand-yellow transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-yellow transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-yellow transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-yellow transition-colors"
                >
                  Mary's Joy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-yellow transition-colors"
                >
                  Departments (ክፍላት)
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.2em] text-zinc-900 dark:text-white uppercase mb-6">
              Connect
            </h4>
            <ul className="space-y-4 text-[13px] text-zinc-600 dark:text-zinc-400 font-medium">
              <li>
                <a
                  href="#"
                  className="hover:text-brand-yellow transition-colors flex items-center gap-2"
                >
                  Facebook <span className="text-[10px] opacity-70">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-yellow transition-colors flex items-center gap-2"
                >
                  Twitter <span className="text-[10px] opacity-70">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-yellow transition-colors flex items-center gap-2"
                >
                  YouTube <span className="text-[10px] opacity-70">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-100 dark:border-zinc-800/50">
          <p className="text-[11px] font-medium tracking-[0.15em] text-zinc-500 dark:text-zinc-500 uppercase mb-4 md:mb-0">
            © 2024 Poly Gibi Gubaie (ፖሊ ጊቢ ጉባኤ). All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-[10px] font-bold tracking-[0.1em] text-zinc-400 uppercase">
            <a
              href="#"
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
