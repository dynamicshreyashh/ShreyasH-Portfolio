import { FaNodeJs, FaPython, FaGithub, FaJava, FaGitAlt, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiFirebase, SiJavascript, SiPostman, SiFastapi } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion";

export default function TechStack() {
  const techCategories = [
    {
      name: "Languages",
      items: [
        { name: "Java", icon: <FaJava className="text-[#007396]" /> },
        { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      ]
    },
    {
      name: "Frameworks",
      items: [
        { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
        { name: "Express", icon: <SiExpress className="text-black dark:text-white" /> },
        { name: "FastAPI", icon: <SiFastapi className="text-[#009688]" /> },
      ]
    },
    {
      name: "Tools",
      items: [
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
        { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
        { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
        { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
        { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
        { name: "VS Code", icon: <VscVscode className="text-[#007ACC]" /> },
      ]
    }
  ];

  return (
    <section id="tech-stack" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold mb-16 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          Tech Stack
        </motion.h2>

        {/* 3 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              {/* Category Title */}
              <h3 className="text-xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-200">
                {category.name}
              </h3>

              {/* Icons */}
              <div className="grid grid-cols-3 gap-6 place-items-center">
                {category.items.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center space-y-2"
                  >
                    <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-700 shadow-md">
                      <div className="text-3xl">{tech.icon}</div>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 text-xs font-medium">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
