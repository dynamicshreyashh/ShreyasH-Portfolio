import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | Shreyash Bhosale</title>
      </Helmet>

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
                <img
                  src="/images/ShreyasH.jpg"
                  alt="Shreyash Bhosale"
                  className="object-cover w-full h-full"
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
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Hi, I'm Shreyash 👋
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate software developer specializing in modern, scalable web applications.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I love building real-world projects using React, Node.js, FastAPI, MongoDB, Docker, and cloud tools.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
