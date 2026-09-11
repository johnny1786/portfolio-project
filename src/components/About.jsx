import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, description }) => (
  <Tilt className='xs:w-[260px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.3, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-6 px-6 min-h-[280px] flex justify-between items-center flex-col text-center border border-white/5'
      >
        <img
          src={icon}
          alt={title}
          className='w-14 h-14 object-contain opacity-90'
        />

        <h3 className='text-white text-[18px] font-bold mt-2 leading-snug'>
          {title}
        </h3>
        
        <p className="text-secondary text-[13px] leading-relaxed mt-2">
          {description}
        </p>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Engineering Focus & Expertise</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[16px] sm:text-[17px] max-w-4xl leading-[30px]'
      >
        I am a Software Engineer & AI/ML Developer focused on building high-performance backend systems, machine learning architectures, and scalable web applications. My work spans distributed systems (such as Docker-sandboxed execution engines), deep learning (gated image-tabular fusion and WCGAN-GP data balancing), multi-modal NLP (AWS Textract, RoBERTa, and Qwen LLMs), and full-stack web platforms (React, Next.js, Express, MongoDB, PostgreSQL). With hands-on enterprise software experience and workflow automation using Microsoft Power Automate, I focus on solving concrete engineering challenges with maintainable code.
      </motion.p>

      <div className='mt-14 flex flex-wrap gap-8 justify-start'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

