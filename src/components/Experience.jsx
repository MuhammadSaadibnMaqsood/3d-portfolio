import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../style";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#111111", // Deep black
        color: "#fff",
        borderBottom: "4px solid #00ffc3", // Emerald bottom accent
        boxShadow: "0 10px 30px -15px rgba(0,0,0,0.5)",
      }}
      contentArrowStyle={{ borderRight: "7px solid #111111" }}
      date={experience.date}
      iconStyle={{
        background: "#0a0a0a",
        color: "#00ffc3",
        boxShadow:
          "0 0 0 4px #00ffc3, inset 0 2px 0 rgba(0,0,0,0.08), 0 3px 0 4px rgba(0,0,0,0.05)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full p-2">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[70%] h-[70%] object-contain grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[#00ffc3] text-[22px] font-bold font-mono uppercase tracking-wider">
          {experience.title}
        </h3>
        <p
          className="text-slate-400 text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-none ml-0 space-y-3">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-slate-300 text-[14px] pl-1 tracking-tight flex items-start gap-3"
          >
            {/* Custom Technical Bullet */}
            <span className="text-[#00ffc3] font-bold mt-1 leading-none">
              ›
            </span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {/* Date shown inside on mobile, but we style it here for the timeline */}
      <style>{`
        .vertical-timeline-element-date {
          color: #00ffc3 !important;
          font-family: monospace;
          font-weight: bold;
          opacity: 0.8;
        }
        .vertical-timeline::before {
          background: #1e293b !important; /* Slate line */
        }
      `}</style>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-[1px] bg-[#00ffc3]" />
          <p className="text-[#00ffc3] font-mono tracking-[0.3em] uppercase text-sm">
            The Journey
          </p>
        </div>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] uppercase">
          Dev{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffc3] to-slate-500">
            Timeline.
          </span>
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#1e293b">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
