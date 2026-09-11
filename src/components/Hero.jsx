import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-col justify-between overflow-hidden">
      {/* 3D Canvas occupying full hero background, with model positioned on the right */}
      <div className="absolute inset-0 z-0">
        <ComputersCanvas />
      </div>

      {/* Hero Content Container on Left */}
      <div
        className={`relative z-10 top-[110px] sm:top-[125px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 sm:gap-6 pointer-events-none`}
      >
        {/* Purple Vertical Indicator Line */}
        <div className="flex flex-col justify-center items-center mt-3">
          <div className="w-5 h-5 rounded-full bg-[#915EFF] shadow-lg shadow-[#915EFF]/60" />
          <div className="w-1.5 sm:h-96 h-56 violet-gradient" />
        </div>

        {/* Content Details */}
        <div className="pointer-events-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#915EFF]/20 border border-[#915EFF]/40 text-[#c8abff] text-sm sm:text-base font-bold mb-4 shadow-md backdrop-blur-md">
            <span>🎓 NIT Patna Graduate</span>
            <span className="text-gray-400">•</span>
            <span>Software Engineer & AI-ML</span>
          </div>

          <h1 className="font-black text-white text-[44px] sm:text-[68px] lg:text-[78px] leading-[1.1] tracking-tight">
            Hi, I'm <span className="text-[#915EFF] bg-gradient-to-r from-[#915EFF] to-[#d8c2ff] bg-clip-text text-transparent">Madas Johnson</span>
          </h1>

          <p className="text-[#dfd9ff] font-bold text-[22px] sm:text-[32px] mt-3 leading-snug">
            Software Engineer & AI/ML Developer
          </p>

          <p className="mt-4 text-gray-200 text-[18px] sm:text-[22px] max-w-2xl font-medium leading-relaxed drop-shadow-md">
            Building <span className="text-white font-bold underline decoration-[#915EFF] underline-offset-4">distributed backend systems</span>, <span className="text-white font-bold underline decoration-[#915EFF] underline-offset-4">deep learning models</span>, and <span className="text-white font-bold underline decoration-[#915EFF] underline-offset-4">scalable web applications</span> with Python, Node.js, C++, and React.
          </p>

          <div className="mt-5 flex flex-wrap gap-2.5 text-xs sm:text-sm font-mono font-semibold text-gray-200">
            <span className="bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">Python</span>
            <span className="bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">Node.js</span>
            <span className="bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">C++</span>
            <span className="bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">Docker Ephemeral Sandbox</span>
            <span className="bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">React / Next.js</span>
          </div>

          {/* Action CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-[#915EFF] hover:bg-[#7b46e6] text-white px-7 py-3.5 rounded-xl text-base sm:text-lg font-bold transition-all shadow-xl shadow-[#915EFF]/40 flex items-center gap-2"
            >
              <span>View Projects</span>
              <span>↓</span>
            </a>

            <a
              href="https://drive.google.com/file/d/109oTgFsE9AyqJxcfm8KNNwQT6DGPdYSs/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tertiary/90 hover:bg-white/20 border-2 border-white/30 text-white px-6 py-3.5 rounded-xl text-base sm:text-lg font-bold transition-all backdrop-blur-md flex items-center gap-2"
            >
              <span>📄 Resume</span>
              <span className="text-xs">↗</span>
            </a>

            <a
              href="https://github.com/johnny1786"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tertiary/90 hover:bg-white/20 border-2 border-white/30 text-white px-6 py-3.5 rounded-xl text-base sm:text-lg font-bold transition-all backdrop-blur-md flex items-center gap-2"
            >
              <span>💻 GitHub</span>
            </a>

            <a
              href="#contact"
              className="bg-tertiary/90 hover:bg-white/20 border-2 border-white/30 text-white px-6 py-3.5 rounded-xl text-base sm:text-lg font-bold transition-all backdrop-blur-md"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute xs:bottom-6 bottom-8 w-full flex justify-center items-center z-10 pointer-events-auto">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 opacity-80 hover:opacity-100 transition-opacity">
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



