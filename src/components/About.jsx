import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants/index";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
        className="w-full p-[1px] rounded-[10px] shadow-2xl group transition-all duration-300"
        style={{
          background: "linear-gradient(135deg, #00ffc3 0%, rgba(0,255,195,0) 50%, #00ffc3 100%)",
        }}
      >
        <div
          options={{
            max: 25,
            scale: 1,
            speed: 450,
          }}
          className="bg-[#0f0f0f] rounded-[10px] py-8 px-10 min-h-[280px] flex justify-evenly items-center flex-col relative overflow-hidden"
        >
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: `radial-gradient(#00ffc3 0.5px, transparent 0.5px)`, backgroundSize: '10px 10px' }} 
          />
          
          {/* Corner Brackets for Technical Look */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#00ffc3]/30 group-hover:border-[#00ffc3] transition-colors" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#00ffc3]/30 group-hover:border-[#00ffc3] transition-colors" />

          <div className="relative">
            <div className="absolute inset-0 bg-[#00ffc3] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity" />
            <img src={icon} alt={title} className="w-16 h-16 object-contain relative z-10" />
          </div>

          <h3 className="text-white text-[18px] font-mono font-bold text-center uppercase tracking-wider">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <div className="flex items-center gap-3 mb-2">
           <span className="w-8 h-[1px] bg-[#00ffc3]" />
           <p className="text-[#00ffc3] font-mono tracking-[0.3em] uppercase text-sm">
             Introduction
           </p>
        </div>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] uppercase">
          Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffc3] to-slate-500">Expertise.</span>
        </h2>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-10 mt-10">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-slate-400 text-[17px] max-w-3xl leading-[32px] font-light border-l border-[#00ffc3]/20 pl-6"
        >
          I’m <span className="text-white font-bold">Muhammad Saad</span>, an undergraduate Software Engineer 
          driven by the intersection of <span className="text-[#00ffc3]">Logic & Design</span>. 
          I specialize in building robust frontend systems with <span className="text-white italic">React & TypeScript</span>, 
          while architecting scalable backends via the <span className="text-[#00ffc3]">MERN stack</span>.
          <br /><br />
          My focus is on writing clean, maintainable code and optimizing data structures for high-performance 
          web applications. I don't just build websites; I engineer digital solutions that solve real-world problems.
        </motion.p>
        
        {/* Quick Stats Overlay (Optional visual flair) */}
        <motion.div 
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="hidden lg:flex flex-col justify-center gap-4 border border-white/5 bg-white/5 p-6 rounded-lg backdrop-blur-sm"
        >
          <div className="flex flex-col text-center px-4">
             <span className="text-[#00ffc3] font-mono text-3xl font-bold">20+</span>
             <span className="text-slate-500 text-[10px] uppercase tracking-widest">Projects</span>
          </div>
          <div className="h-[1px] w-full bg-white/10" />
          <div className="flex flex-col text-center px-4">
             <span className="text-[#00ffc3] font-mono text-3xl font-bold">100%</span>
             <span className="text-slate-500 text-[10px] uppercase tracking-widest">Commitment</span>
          </div>
        </motion.div>
      </div>

      <div className="mt-20 flex flex-wrap gap-8 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");