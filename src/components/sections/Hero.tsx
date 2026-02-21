import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaCode, FaFileAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { ArrowRight, Sparkles } from "lucide-react";
import { HEADER_DATA } from '../../config/constants';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-white dark:bg-zinc-950 py-20 overflow-hidden">
      
      {/* Background: Modern Gradient Blobs from original code */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center max-w-4xl w-full"
      >
        {/* Unique Profile Photo: Centered with a "Squircle" Glow */}
        <motion.div
          variants={item}
          whileHover={{ scale: 1.05, rotate: 2 }}
          className="relative mb-10"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-[3rem] blur-2xl opacity-40 animate-pulse" />
          <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-[3rem] overflow-hidden border-4 border-white dark:border-zinc-900 shadow-2xl bg-zinc-100 dark:bg-zinc-800">
            <img
              src="/images/ShreyasH.jpg"
              alt="Shreyash Bhosale"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Intro Badge */}
        <motion.div 
          variants={item}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-6"
        >
          <Sparkles size={14} className="text-indigo-500" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
            Full-Stack Developer
          </span>
        </motion.div>

        {/* Name: Bold Gradient from Original Code */}
        <motion.h1
          variants={item}
          className="text-5xl md:text-8xl font-black mb-6 text-center tracking-tighter"
        >
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Shreyash Bhosale
          </span>
        </motion.h1>

        {/* The Requested Tagline */}
        <motion.p
          variants={item}
          className="text-center text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
        >
          "I like <span className="text-indigo-500 font-bold">starting from a blank slate</span> and turning it into a finished product. 
          From frontend and backend to deployment, I focus on building software that's 
          <span className="text-zinc-900 dark:text-white"> practical, usable, and reliable.</span>"
        </motion.p>

        {/* Action Buttons: Unified Modern Style */}
        <motion.div
          variants={item}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <motion.button
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-2 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 rounded-2xl font-bold shadow-xl transition-all"
          >
            <HiMail size={20} />
            Contact Me
          </motion.button>

          <motion.a
            whileHover={{ y: -4 }}
            href="#projects"
            className="flex items-center gap-2 px-8 py-4 border-2 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white rounded-2xl font-bold hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all"
          >
            <FaCode size={18} />
            View Work
          </motion.a>

          <motion.a
            whileHover={{ y: -4 }}
            href="/images/Shreyash_Bhosale_BTech_CSE.pdf"
            target="_blank"
            className="flex items-center gap-2 px-8 py-4 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-2xl font-bold transition-all"
          >
            <FaFileAlt size={18} />
            Resume
          </motion.a>
        </motion.div>

        {/* Colorful Social Links */}
        <motion.div
          variants={item}
          className="flex gap-8"
        >
          {[
            { icon: <FaGithub size={24} />, link: HEADER_DATA.github, color: "hover:text-indigo-500" },
            { icon: <FaLinkedin size={24} />, link: HEADER_DATA.linkedin, color: "hover:text-purple-500" },
            { icon: <HiMail size={26} />, link: `mailto:${HEADER_DATA.email}`, color: "hover:text-pink-500" }
          ].map((social, i) => (
            <a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-zinc-400 ${social.color} transition-all duration-300 transform hover:scale-125`}
            >
              {social.icon}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}