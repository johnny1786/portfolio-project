import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { achievements } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const AchievementCard = ({ index, title, organization, badge, description }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className="bg-tertiary p-6 rounded-2xl sm:w-[360px] w-full border border-white/5 flex flex-col justify-between hover:border-[#915EFF]/40 transition-all duration-300 shadow-xl"
  >
    <div>
      <div className="flex justify-between items-center gap-2 mb-3">
        <span className="text-xs font-semibold px-3 py-1 bg-[#915EFF]/20 text-[#915EFF] rounded-full border border-[#915EFF]/30">
          {badge}
        </span>
        <span className="text-xs text-secondary font-medium">{organization}</span>
      </div>
      <h3 className="text-white text-[20px] font-bold mt-2 leading-snug">{title}</h3>
      <p className="text-secondary text-[14px] mt-3 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const Achievements = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Honors & Recognition</p>
        <h2 className={styles.sectionHeadText}>Achievements.</h2>
      </motion.div>

      <div className="mt-10 flex flex-wrap gap-7">
        {achievements.map((item, index) => (
          <AchievementCard key={`achievement-${index}`} index={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Achievements, "achievements");
