import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header with dot */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-blue-500" />
          <h2 className="text-gray-500 dark:text-gray-300 text-lg uppercase tracking-[0.05em]">
            About Me
          </h2>
        </motion.div>

        {/* Content */}
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-[1.25]"
          >
            Hello, I'm <span className="text-blue-500">Shreyash Bhosale</span>,
            <br />
            a <span className="text-gray-700 dark:text-gray-300">Full Stack Developer</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-500 dark:text-gray-400 italic"
          >
            I turn ideas into responsive, interactive web experiences ✨.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-700 dark:text-gray-300 space-y-4"
          >
            <p>
              I’m passionate about building full-stack applications that solve real-world problems — 
              from frontend interactivity to backend scalability.
            </p>
            <p>
              Proficient in <span className="font-medium text-gray-900 dark:text-white">React</span>,{" "}
              <span className="font-medium text-gray-900 dark:text-white">Node.js</span>,{" "}
              <span className="font-medium text-gray-900 dark:text-white">Express.js</span>,{" "}
              <span className="font-medium text-gray-900 dark:text-white">MongoDB</span>, and{" "}
              <span className="font-medium text-gray-900 dark:text-white">PostgreSQL</span>.
            </p>
            <p>
              Currently exploring <span className="font-medium text-blue-500">Java</span> and{" "}
              <span className="font-medium text-blue-500">AI technologies</span> to expand my toolkit and deliver even more powerful digital solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}  //this was my about.tsx exsisiting do changes as i said and give me updated one. also add the photo at left side and add description to right side exacly same as the image i have given 