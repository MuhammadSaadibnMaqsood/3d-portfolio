import { motion } from "framer-motion";

const TechVisual = () => {
  const icons = ["React", "Next.js", "Node", "MongoDB", "TS", "Git"];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main Glowing Core */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute w-64 h-64 bg-[#00ffc3]/10 rounded-full blur-[80px]"
      />

      {/* Orbiting Ring 1 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-72 h-72 border border-[#00ffc3]/20 rounded-full border-dashed"
      />

      {/* Orbiting Ring 2 */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute w-[400px] h-[400px] border border-slate-800 rounded-full"
      />

      {/* Floating Skill Nodes */}
      {icons.map((skill, i) => (
        <motion.div
          key={skill}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 3,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bg-[#111] border border-[#00ffc3]/30 px-4 py-2 rounded-md shadow-[0_0_10px_rgba(0,255,195,0.1)]"
          style={{
            top: `${20 + i * 12}%`,
            left: `${15 + i * 10}%`,
          }}
        >
          <span className="text-[#00ffc3] font-mono text-xs font-bold tracking-widest uppercase">
            {skill}
          </span>
        </motion.div>
      ))}

      {/* Center "Data" Core */}
      <div className="relative z-10 bg-[#0a0a0a] border border-[#00ffc3] w-32 h-32 flex items-center justify-center rounded-xl rotate-45 shadow-[0_0_30px_rgba(0,255,195,0.2)]">
        <div className=" -rotate-45 flex flex-col items-center">
          <div className="w-8 h-8 border-2 border-[#00ffc3] rounded-full animate-ping absolute" />
          <span className="text-white font-black text-2xl tracking-tighter">
            S/D
          </span>
          <span className="text-[#00ffc3] text-[10px] font-mono">ACTIVE</span>
        </div>
      </div>

      {/* Decorative Lines (Corner Accents) */}
      <div className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-[#00ffc3]/20" />
      <div className="absolute bottom-10 left-10 w-20 h-20 border-b-2 border-l-2 border-[#00ffc3]/20" />

      {/* Binary Stream Effect (Subtle) */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 100 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute right-20 text-[#00ffc3]/10 font-mono text-[10px] whitespace-pre"
      >
        010101
        <br />
        110011
        <br />
        001100
        <br />
        101010
      </motion.div>
    </div>
  );
};

export default TechVisual;
