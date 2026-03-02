import { motion } from "framer-motion";
import { styles } from "../style";
import TechVisual from "./TechVisuals";

const Hero = () => {
  const titles = ["Full Stack Developer", "NEXT developer", "MERN Specialist"];

  return (
    <section className="relative w-full h-screen mx-auto bg-[#0a0a0a] overflow-hidden">
      {/* 1. Technical Grid Background */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* 2. Radial Glow for Depth */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,195,0.05),transparent_70%)]" />

      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-10 z-10`}
      >
        {/* LEFT SIDE: CONTENT */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 mt-5"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-[2px] bg-[#00ffc3]" />
            <p className="text-[#00ffc3] font-mono tracking-[0.2em] uppercase text-sm">
              Software Engineer
            </p>
          </div>

          <h1 className="text-white font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] leading-tight uppercase">
            I'M{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffc3] to-[#00b386]">
              SAAD
            </span>
          </h1>

          <div className="mt-4 h-[40px]">
            {/* Logic for rotating titles */}
            <motion.p
              key={Math.floor(Date.now() / 3000)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-slate-400 font-mono text-xl lg:text-2xl"
            >
              {`> `} {titles[Math.floor((Date.now() / 3000) % titles.length)]}
            </motion.p>
          </div>

          <p className="mt-6 text-slate-400 text-lg max-w-md leading-relaxed border-l-2 border-[#00ffc3]/20 pl-6">
            Building high-performance applications with the <span className="text-white">MERN/NEXT</span> stack and
            exploring the future of web development through <span className="text-[#00ffc3]">clean architecture</span>.
          </p>

          <div className="flex gap-6 mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#00ffc3] text-black px-8 py-4 rounded-sm font-bold uppercase tracking-wider text-sm hover:bg-white transition-all shadow-[0_0_15px_rgba(0,255,195,0.3)]"
            >
              <a href="#work">View Projects</a>
            </motion.button>
          
          </div>
        </motion.div>

        {/* RIGHT SIDE: CYBERNETIC VISUAL (Replaced 3D) */}
        <div className="flex-1 w-full h-[400px] lg:h-[650px] relative flex items-center justify-center">
          <TechVisual />
        </div>
      </div>
    </section>
  );
};

export default Hero;