import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants/index";
import { textVariant, fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <>
      {/* Section Header to match About & Experience */}
      <motion.div variants={textVariant()} className="mb-14">
        <div className="flex items-center gap-3 mb-2">
           <span className="w-8 h-[1px] bg-[#00ffc3]" />
           <p className="text-[#00ffc3] font-mono tracking-[0.3em] uppercase text-sm">
             Technical Stack
           </p>
        </div>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] uppercase">
          Tools & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffc3] to-slate-500">Tech.</span>
        </h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-x-12 gap-y-16">
        {technologies.map((technology, index) => (
          <motion.div 
            variants={fadeIn("up", "spring", index * 0.1, 0.75)}
            className="w-28 h-28 flex flex-col items-center group" 
            key={technology.name}
          >
            {/* The 3D Ball */}
            <BallCanvas icon={technology.icon} />
            
            {/* Label with Hover Effect */}
            <p className="mt-2 text-slate-500 font-mono text-[12px] uppercase tracking-widest group-hover:text-[#00ffc3] transition-colors duration-300">
              {technology.name}
            </p>
            
            {/* Subtle glow bar under text on hover */}
            <div className="w-0 h-[1px] bg-[#00ffc3] group-hover:w-full transition-all duration-300 shadow-[0_0_8px_#00ffc3]" />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");