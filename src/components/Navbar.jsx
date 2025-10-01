import React, { useState } from "react";
import { styles } from "../style";
import { Link } from "react-router-dom";
import { navLinks } from "../constants/index";
import { logo, menu, close } from "../assets";
import { li } from "framer-motion/m";
// import { link } from "framer-motion/client";
// import {logo2} from '../assets/'
const Navbar = () => {
  const [active, setActive] = useState("");
  return (
    <nav
      className={`w-full flex items-center py-5 fixed top-0 z-20 bg-primary ${styles.paddingX}`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src="logo2.png"
            alt="logo"
            className="w-9 h-9 object-contain rounded-full"
          />
          <p className="text-white text-[14px] font-bold cursor-pointer">
            Saad<span className="sm:block  hidden">- ibn Maqsood</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white transition-all duration-300 text-[15px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* MOBILE NAV  */}
      </div>
    </nav>
  );
};

export default Navbar;
