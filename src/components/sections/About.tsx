import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "/images/ShreyasH.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-2 h-2 rounded-full bg-blue-500" />
          <h2 className="text-gray-500 dark:text-gray-300 text-lg uppercase tracking-[0.05em]">
            About Me
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
              <Image
                src={profilePic}
                alt="Shreyash Bhosale"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-[1.25]">
              Hello, I'm{" "}
              <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                Shreyash Bhosale
              </span>
              , a{" "}
              <span className="text-gray-700 dark:text-gray-300">
                Full Stack Developer
              </span>
              .
            </h1>

            <p className="text-xl text-gray-500 dark:text-gray-400 italic">
              I turn ideas into responsive, interactive web experiences ✨.
            </p>

            <div className="text-gray-700 dark:text-gray-300 space-y-4">
              <p>
                I’m passionate about building full-stack applications that solve
                real-world problems — from frontend interactivity to backend
                scalability.
              </p>
              <p>
                Proficient in{" "}
                <span className="font-medium text-gray-900 dark:text-white">
                  React
                </span>
                ,{" "}
                <span className="font-medium text-gray-900 dark:text-white">
                  Node.js
                </span>
                ,{" "}
                <span className="font-medium text-gray-900 dark:text-white">
                  Express.js
                </span>
                ,{" "}
                <span className="font-medium text-gray-900 dark:text-white">
                  MongoDB
                </span>
                , and{" "}
                <span className="font-medium text-gray-900 dark:text-white">
                  PostgreSQL
                </span>
                .
              </p>
              <p>
                Currently exploring{" "}
                <span className="font-medium text-blue-500">Java</span> and{" "}
                <span className="font-medium text-blue-500">
                  AI technologies
                </span>{" "}
                to expand my toolkit and deliver even more powerful digital
                solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
