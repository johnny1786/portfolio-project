import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const FeaturedHeroCard = ({ name, description, tags, category, year, source_code_link }) => (
  <motion.div
    variants={fadeIn("up", "spring", 0.1, 0.75)}
    className="w-full bg-gradient-to-br from-tertiary via-[#161036] to-black p-8 rounded-3xl border border-[#915EFF]/40 shadow-2xl relative overflow-hidden mb-8"
  >
    <div className="absolute top-0 right-0 w-80 h-80 bg-[#915EFF]/10 rounded-full blur-3xl pointer-events-none"></div>

    <div className="flex flex-wrap justify-between items-center gap-3 mb-4">
      <span className="text-xs font-bold px-3.5 py-1.5 bg-[#915EFF]/20 text-[#915EFF] rounded-lg border border-[#915EFF]/30 uppercase tracking-wider">
        ★ Featured Project · {category}
      </span>
      <span className="text-xs font-mono text-secondary bg-black/40 px-3 py-1 rounded-md border border-white/10">{year}</span>
    </div>

    <h3 className="text-white text-2xl sm:text-3xl font-extrabold tracking-tight">{name}</h3>

    <p className="mt-4 text-gray-300 text-base sm:text-lg leading-relaxed max-w-4xl">
      {description}
    </p>

    <div className="mt-6 flex flex-wrap gap-2.5">
      {tags.map((tag) => (
        <span
          key={`hero-tag-${tag.name}`}
          className="text-xs font-mono px-3 py-1 bg-black/60 rounded-md text-purple-300 border border-[#915EFF]/30"
        >
          #{tag.name}
        </span>
      ))}
    </div>

    <div className="mt-8 flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
      <a
        href={source_code_link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#915EFF] hover:bg-[#7b46e6] text-white text-sm font-bold py-2.5 px-5 rounded-xl transition-all shadow-lg shadow-[#915EFF]/25"
      >
        <img src={github} alt="github" className="w-5 h-5 object-contain" />
        Explore Source Code & Sandbox Docs
      </a>
    </div>
  </motion.div>
);

const StandardProjectCard = ({
  index,
  name,
  description,
  tags,
  category,
  year,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.15, 0.75)} className="w-full">
      <Tilt
        options={{
          max: 15,
          scale: 1,
          speed: 400,
        }}
        className='bg-tertiary p-6 rounded-2xl w-full border border-white/5 hover:border-[#915EFF]/40 transition-all duration-300 shadow-xl flex flex-col justify-between h-full'
      >
        <div>
          <div className="flex justify-between items-center text-xs font-semibold mb-3">
            <span className="text-[#915EFF] bg-[#915EFF]/10 px-2.5 py-1 rounded-md border border-[#915EFF]/20">
              {category}
            </span>
            <span className="text-secondary">{year}</span>
          </div>

          <h3 className='text-white font-bold text-[20px] leading-snug mt-1'>{name}</h3>
          
          <p className='mt-3 text-secondary text-[14px] leading-relaxed'>
            {description}
          </p>
        </div>

        <div className="mt-6">
          <div className='flex flex-wrap gap-2 mb-5'>
            {tags.map((tag) => (
              <span
                key={`${name}-${tag.name}`}
                className='text-[12px] font-mono px-2.5 py-0.5 bg-black/40 rounded text-gray-300 border border-white/5'
              >
                #{tag.name}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-3 border-t border-white/5">
            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-black/50 hover:bg-black/80 text-white text-xs font-semibold py-2.5 px-3 rounded-lg border border-white/10 transition-all"
            >
              <img src={github} alt="github" className="w-4 h-4 object-contain" />
              Source Code
            </a>

            {live_demo_link && (
              <a
                href={live_demo_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#915EFF] hover:bg-[#7b46e6] text-white text-xs font-semibold py-2.5 px-3 rounded-lg transition-all shadow-md shadow-[#915EFF]/20"
              >
                <span>Live Demo</span>
                <span className="text-[10px]">↗</span>
              </a>
            )}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Distributed Systems", "AI / ML", "Full Stack"];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Engineering Portfolio</p>
        <h2 className={`${styles.sectionHeadText}`}>Featured Projects.</h2>
      </motion.div>

      <div className='w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mt-3'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='text-secondary text-[16px] sm:text-[17px] max-w-3xl leading-[30px]'
        >
          Verified software engineering, deep learning, and distributed systems projects built with Python, Node.js, C++, Docker, and React.
        </motion.p>

        {/* Interactive Category Filter Bar */}
        <div className="flex flex-wrap gap-2 bg-black/30 p-1.5 rounded-xl border border-white/10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-[#915EFF] text-white shadow-md shadow-[#915EFF]/30"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className='mt-10'>
        {/* Render Featured Hero Card if All is selected */}
        {activeCategory === "All" && projects.length > 0 && (
          <FeaturedHeroCard {...projects[0]} />
        )}

        <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
          {(activeCategory === "All" ? projects.slice(1) : filteredProjects).map((project, index) => (
            <StandardProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");


