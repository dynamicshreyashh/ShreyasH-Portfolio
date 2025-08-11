import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaCode, FaFileAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { HEADER_DATA } from "../../config/constants"; // Centralized contact info

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 bg-white dark:bg-dark py-12">
      {/* Profile Photo */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary dark:border-primary-dark mb-8 shadow-lg"
      >
        <img
          src="/images/ShreyasH.jpg"
          alt="Shreyash Bhosale"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Intro Text */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-mono text-gray-500 dark:text-gray-400 mb-2"
      >
        HELLO, I'M
      </motion.p>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-4xl md:text-5xl font-bold mb-2 text-gray-900 dark:text-white text-center"
      >
        Shreyash Bhosale
      </motion.h1>

      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 text-center"
      >
        Software Developer
      </motion.h2>

      <p className="text-center text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
  I design digital experiences that are{" "}
  <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold">
    fast, accessible, and human-centered
  </span>{" "}
  — blending creativity with logic to solve real-world problems through{" "}
  <span className="text-indigo-500 font-medium">clean code</span>, clear thinking, and{" "}
  <span className="text-pink-500 font-medium">intentional impact</span>.
</p>


      {/* Action Buttons */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {/* Contact Me */}
        <button
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
          className="flex items-center px-6 py-3 bg-primary dark:bg-primary-dark text-white rounded-lg hover:bg-opacity-90 transition-all group"
        >
          <HiMail className="mr-2" />
          Contact Me
        </button>

        {/* View Work */}
        <a
          href="#projects"
          className="flex items-center px-6 py-3 border-2 border-primary dark:border-primary-dark text-primary dark:text-primary-dark rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
        >
          <FaCode className="mr-2" />
          View Work
        </a>

        {/* View Resume */}
        <a
            href="/images/Shreyash_Bhosale_BTech_CSE.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
        >
          <FaFileAlt className="mr-2" />
          View Resume
        </a>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex gap-6"
      >
        <a
          href={HEADER_DATA.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-dark transition-colors"
          aria-label="GitHub"
        >
          <FaGithub className="w-6 h-6" />
        </a>
        <a
          href={HEADER_DATA.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-dark transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>
        <a
          href={`mailto:${HEADER_DATA.email}`}
          className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-dark transition-colors"
          aria-label="Email"
        >
          <HiMail className="w-6 h-6" />
        </a>
      </motion.div>
    </section>
  );
}
