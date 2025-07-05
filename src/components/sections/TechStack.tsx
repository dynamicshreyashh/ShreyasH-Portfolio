import { FaNodeJs, FaPython, FaGithub, FaJava, FaGitAlt, FaHtml5, FaCss3Alt} from "react-icons/fa";
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
       // { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
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
    <section id="tech-stack" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white"
        >
          <span className="text-primary dark:text-primary-dark">#</span> Tech Stack
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white flex items-center">
                <span className="w-4 h-4 bg-primary dark:bg-primary-dark rounded-full mr-3"></span>
                {category.name}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.items.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ y: -3 }}
                    className="flex items-center space-x-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <div className="text-2xl">
                      {tech.icon}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{tech.name}</span>
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