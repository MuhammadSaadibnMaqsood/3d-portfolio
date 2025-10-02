import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants/index";
import { fadeIn, textVariant } from "../utils/motion";

const SerivceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      >
        <div
          options={{
            max: 45,
            scale: 1.1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
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
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        I’m Muhammad Saad, an undergraduate Software Engineering student and
        aspiring Software Engineer. I have hands-on experience in frontend web
        development with React, TypeScript and Tailwind CSS, and I also explore
        full-stack projects using the MERN stack. Alongside web development, I
        have a strong foundation in C, Data Structures & Algorithms, and
        building practical projects. I’m passionate about learning new
        technologies, solving problems, and creating impactful digital
        solutions.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <SerivceCard key={index} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default About;
