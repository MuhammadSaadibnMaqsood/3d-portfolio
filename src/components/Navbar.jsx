import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../style";
import { navLinks } from "../constants/index";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* LOGO SECTION */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="relative">
            <img
              src="logo2.png"
              alt="logo"
              className="w-10 h-10 rounded-full object-contain border border-[#00ffc3]/30 group-hover:border-[#00ffc3] transition-colors"
            />
            <div className="absolute inset-0 rounded-full bg-[#00ffc3]/20 blur-sm group-hover:blur-md transition-all" />
          </div>

          <p className="text-white text-[20px] font-bold cursor-pointer flex items-center tracking-tight">
            <span className="text-[#00ffc3]">SAAD</span>
            <span className="sm:block hidden text-slate-400 font-light ml-1">
              | Engineer
            </span>
          </p>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="list-none hidden sm:flex flex-row gap-8">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="relative group"
              onClick={() => setActive(nav.title)}
            >
              <a
                href={`#${nav.id}`}
                className={`${
                  active === nav.title ? "text-[#00ffc3]" : "text-slate-300"
                } hover:text-[#00ffc3] text-[15px] font-mono uppercase tracking-[0.1em] font-medium cursor-pointer transition-colors duration-300`}
              >
                {nav.title}
              </a>

              {/* Active/Hover Indicator Line */}
              {active === nav.title && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#00ffc3] shadow-[0_0_8px_#00ffc3]"
                />
              )}
            </li>
          ))}
        </ul>

        {/* MOBILE MENU */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div className="p-2 bg-white/5 rounded-lg border border-white/10">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[24px] h-[24px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          </div>

          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-screen w-[70%] bg-[#0f0f0f]/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center border-l border-white/10"
              >
                {/* Close icon inside menu */}
                <div className="absolute top-10 right-10">
                  <img
                    src={close}
                    className="w-8 h-8 cursor-pointer opacity-50 hover:opacity-100"
                    onClick={() => setToggle(false)}
                  />
                </div>

                <ul className="list-none flex flex-col gap-8 items-center">
                  {navLinks.map((nav, index) => (
                    <motion.li
                      key={nav.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`font-mono text-[20px] uppercase tracking-widest cursor-pointer ${
                        active === nav.title
                          ? "text-[#00ffc3]"
                          : "text-slate-400"
                      }`}
                      onClick={() => {
                        setToggle(false);
                        setActive(nav.title);
                      }}
                    >
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
