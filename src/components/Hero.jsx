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
    </section>
  );
};

export default Hero;
