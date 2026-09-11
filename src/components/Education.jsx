import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { education } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const EducationCard = ({ degree, institution, badge, location, highlights }) => (
  <motion.div
    variants={fadeIn("up", "spring", 0.2, 0.75)}
    className="w-full bg-gradient-to-r from-tertiary via-[#1a143a] to-tertiary p-8 rounded-3xl border border-[#915EFF]/30 shadow-2xl relative overflow-hidden"
  >
    <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#915EFF]/10 rounded-full blur-3xl pointer-events-none"></div>

    <div className="flex flex-wrap justify-between items-start gap-4">
      <div>
        <span className="text-xs font-bold px-3 py-1.5 bg-[#915EFF]/20 text-[#915EFF] rounded-lg border border-[#915EFF]/30 uppercase tracking-wide">
          {badge}
        </span>
        <h3 className="text-white text-2xl sm:text-3xl font-extrabold mt-3 tracking-tight">
          {institution}
        </h3>
        <p className="text-gray-300 text-lg font-semibold mt-1">{degree}</p>
      </div>

      <span className="text-sm font-medium text-secondary bg-black/40 px-3.5 py-1.5 rounded-full border border-white/10">
        📍 {location}
      </span>
    </div>

    <div className="mt-6 pt-6 border-t border-white/10">
      <h4 className="text-xs font-semibold text-secondary uppercase tracking-wider mb-3">Academic & Leadership Highlights</h4>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {highlights.map((item, index) => (
          <li key={index} className="flex items-start gap-2.5 text-sm text-gray-300 leading-relaxed">
            <span className="text-[#915EFF] font-bold mt-0.5">▸</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Academic Background</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      <div className="mt-10 flex flex-col gap-6">
        {education.map((item, index) => (
          <EducationCard key={`edu-${index}`} {...item} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
