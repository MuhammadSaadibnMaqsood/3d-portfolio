import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 15, // Reduced tilt for a more professional feel
          scale: 1.02,
          speed: 450,
        }}
        className="bg-[#111111] p-5 rounded-[15px] sm:w-[360px] w-full border border-white/5 hover:border-[#00ffc3]/30 transition-all duration-300 shadow-2xl relative group"
      >
        {/* Technical Corner Brackets (Visible on Hover) */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00ffc3] opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 -translate-y-1" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00ffc3] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 translate-y-1" />

        <div className="relative w-full h-[230px]">
          {/* Project Image in a "Viewport" frame */}
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-[10px] grayscale group-hover:grayscale-0 transition-all duration-500"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-black/80 border border-[#00ffc3]/50 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-[#00ffc3] hover:text-black transition-all shadow-[0_0_15px_rgba(0,255,195,0.3)]"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain brightness-200 group-hover:invert transition-all"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-[#00ffc3] font-bold text-[22px] font-mono uppercase tracking-tight">
            {name}
          </h3>
          <p className="mt-2 text-slate-400 text-[14px] leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag.name}
              className={`text-[11px] font-mono py-1 px-2 rounded-sm bg-white/5 border border-white/10 ${tag.color}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-[1px] bg-[#00ffc3]" />
          <p className="text-[#00ffc3] font-mono tracking-[0.3em] uppercase text-sm">
            Case Studies
          </p>
        </div>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] uppercase">
          Port
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffc3] to-slate-500">
            folio.
          </span>
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-6 text-slate-400 text-[17px] max-w-3xl leading-[32px] font-light border-l border-[#00ffc3]/20 pl-6"
        >
          Each project is a milestone in my engineering journey. I focus on
          <span className="text-white"> clean architecture</span>, performance,
          and scalable code. Below are selected works that demonstrate my
          ability to transform complex logic into
          <span className="text-[#00ffc3]"> seamless user experiences</span>.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center lg:justify-start">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
