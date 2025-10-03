import { motion } from "framer-motion";
import { styles } from "../style";
// import Computers from "./canvas/Computers";
import ComputersCanvas from "./canvas/Computers";
const Hero = () => {
  return (
    <section className="w-full h-screen relative mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`text-white ${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#915eff]">Saad</span>{" "}
          </h1>
          <p className={`text-white ${styles.heroSubText}`}>
            Undergraduate Software Engineer skilled in React, Java, and MERN
            stack, building creative web apps and exploring 3D interactive
            designs.
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[25px] h-[50px] rounded-3xl border-4 border-secondary flex justify-center items-start ">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
