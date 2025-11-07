import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  image: string;
  githubUrl: string;
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Inventra – Inventory Management",
      description:
        "Full-stack inventory management platform for sales and expenses with web scraping.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Prisma",
      ],
      features: [
        "Automated product tracking and restocking",
        "Responsive admin dashboards",
        "Secure backend APIs",
        "Web scraping integration",
      ],
      image: "/images/Portfolio1.jpg",
      githubUrl: "https://github.com/dynamicshreyashh/Inventra",
    },
    {
      title: "Wanderlust Travel Hub",
      description:
        "Travel discovery web app with Google Maps API integration and secure authentication system.",
      technologies: ["Node.js", "Express.js", "MongoDB", "Google Maps API"],
      features: [
        "Interactive destination exploration",
        "Real-time location insights",
        "Secure JWT authentication",
        "Responsive EJS templates",
      ],
      image: "/images/Portfolio2.webp",
      githubUrl:
        "https://github.com/dynamicshreyashh/WanderLust-Travel-Platform",
    },
    {
      title: "AI Virtual Mouse",
      description:
        "Hand gesture-controlled virtual mouse using computer vision and machine learning.",
      technologies: ["Python", "OpenCV", "TensorFlow", "Tkinter"],
      features: [
        "Real-time hand detection",
        "Gesture recognition",
        "Customizable cursor controls",
        "User-friendly interface",
      ],
      image: "/images/Portfolio3.webp",
      githubUrl: "https://github.com/dynamicshreyashh/Ai-Virtual-Mouse-",
    },
    {
      title: "Event Management System",
      description:
        "A React-based web application for organizing, managing, and booking events with Firebase-powered backend and authentication.",
      technologies: ["React", "Firebase", "CSS"],
      features: [
        "User authentication with Firebase",
        "Event creation and management",
        "Responsive design with CSS",
        "User-friendly Event interface",
      ],
      image: "/images/Portfolio4.png",
      githubUrl:
        "https://github.com/dynamicshreyashh/Event-Management-Sytsem",
    },
    {
      title: "AI-Powered Code Reviewer",
      description:
        "A full-stack AI-based platform that reviews code, detects errors, and provides optimized suggestions using advanced LLMs. Supports syntax analysis, best-practice checking, and real-time improvement feedback for developers.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "OpenAI API",
        "Tailwind CSS",
      ],
      features: [
        "AI-powered code analysis and suggestions",
        "Error detection with detailed explanations",
        "Highlighting of problem lines and fixes",
        "Secure backend with JWT authentication",
        "Real-time response using Express.js API",
        "Clean and responsive UI built with Tailwind CSS",
      ],
      image: "/images/ai-code-reviewer.png",
      githubUrl:
        "https://github.com/dynamicshreyashh/AI-Powered-Code-Reviewer",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">🚀 My Projects</h2>

        <motion.div
          className="flex flex-wrap justify-center gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden cursor-pointer w-[300px] md:w-[350px] transform transition-all duration-300 hover:shadow-2xl"
              onClick={() => setSelectedProject(project)}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gradient-to-r from-purple-300 to-pink-300 dark:from-purple-700 dark:to-pink-700 px-2 py-1 rounded text-xs text-gray-800 dark:text-gray-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="mt-5 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg shadow-md transition"
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-white dark:bg-gray-900 rounded-2xl max-w-lg w-full p-6 relative"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                  onClick={() => setSelectedProject(null)}
                >
                  ✖
                </button>

                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="rounded-lg mb-4"
                />

                <h3 className="text-2xl font-bold mb-2">
                  {selectedProject.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {selectedProject.description}
                </p>

                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="list-disc list-inside mb-4 text-gray-600 dark:text-gray-300">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>

                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
                >
                  View Code
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
