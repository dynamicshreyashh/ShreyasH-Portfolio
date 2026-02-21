import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Server, 
  Layout, 
  Database, 
  Cloud, 
  Wrench 
} from "lucide-react"; 

// Brand Icons
import { 
  FaJava, 
  FaNodeJs, 
  FaGitAlt, 
  FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaGithub, 
  FaAws 
} from "react-icons/fa";
import { 
  SiJavascript, 
  SiSpringboot, 
  SiExpress, 
  SiMongodb, 
  SiMysql, 
  SiPostgresql, 
  SiHibernate, 
  SiPostman, 
  SiGo, 
  SiGooglecloud, 
  SiOracle 
} from "react-icons/si";

const skillGroups = [
  {
    category: "Languages",
    icon: <Code2 className="w-5 h-5 text-blue-600" />,
    items: [
      { name: "Java", icon: <FaJava className="text-[#E76F00]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E] bg-black" /> },
      { name: "Go", icon: <SiGo className="text-[#00ADD8]" /> },
    ],
  },
  {
    category: "Backend",
    icon: <Server className="w-5 h-5 text-green-600" />,
    items: [
      { name: "Spring Boot", icon: <SiSpringboot className="text-[#6DB33F]" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="text-black dark:text-white" /> },
      { name: "Hibernate", icon: <SiHibernate className="text-[#BCAE79]" /> },
    ],
  },
  {
    category: "Frontend",
    icon: <Layout className="w-5 h-5 text-purple-600" />,
    items: [
      { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
    ],
  },
  {
    category: "Database",
    icon: <Database className="w-5 h-5 text-orange-600" />,
    items: [
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud className="w-5 h-5 text-cyan-600" />,
    items: [
      { name: "GCP", icon: <SiGooglecloud className="text-[#4285F4]" /> },
      { name: "AWS", icon: <FaAws className="text-[#FF9900]" /> },
      { name: "Oracle Cloud", icon: <SiOracle className="text-[#F80000]" /> },
    ],
  },
  {
    category: "Tools",
    icon: <Wrench className="w-5 h-5 text-zinc-600" />,
    items: [
      { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
      { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> }, 
    ],
  },
];

export default function TechStack() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400"
          >
            Tech Stack
          </motion.h2>
          <div className="h-1 w-12 bg-indigo-600 mx-auto mt-2 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl shadow-zinc-200/50 dark:shadow-none transition-all hover:border-indigo-500/30"
            >
              <div className="flex flex-col items-center mb-10">
                <h3 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
                  {group.category}
                </h3>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-3 gap-y-10 gap-x-4">
                {group.items.map((item) => (
                  <div key={item.name} className="flex flex-col items-center gap-3 group/item">
                    <div className="w-16 h-16 flex items-center justify-center bg-zinc-50 dark:bg-zinc-800 rounded-2xl border border-zinc-100 dark:border-zinc-700 shadow-sm transition-all group-hover/item:scale-110 group-hover/item:shadow-md">
                      <span className="text-3xl">{item.icon}</span>
                    </div>
                    <span className="text-[11px] font-bold text-zinc-500 dark:text-zinc-400 text-center leading-tight">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}