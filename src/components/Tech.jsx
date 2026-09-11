import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies, skillCategories } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technical Proficiency</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      {/* Categorized Skills Grid for Quick Recruiter Scanning */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((group, groupIdx) => (
          <motion.div
            key={group.category}
            variants={fadeIn("up", "spring", groupIdx * 0.2, 0.75)}
            className="bg-tertiary p-6 rounded-2xl border border-white/5 shadow-xl hover:border-[#915EFF]/30 transition-all duration-300"
          >
            <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#915EFF]"></span>
              {group.category}
            </h3>

            <div className="flex flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-black/40 hover:bg-[#915EFF]/20 text-gray-200 hover:text-white px-3.5 py-1.5 rounded-lg text-sm font-medium border border-white/10 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive 3D Canvas Icons */}
      <div className="mt-16 flex flex-row flex-wrap justify-center gap-8">
        {technologies.map((technology) => (
          <div className="w-24 h-24 flex flex-col items-center justify-center group" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <span className="text-xs text-secondary group-hover:text-white transition-colors mt-1 font-mono">
              {technology.name}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");

