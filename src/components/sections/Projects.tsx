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
    title: "CareerConnect – Job Recruitment Platform",
    description:
      "A dual-interface MERN platform where recruiters post vacancies and students apply for jobs in real time. Features secure role-based authentication and optimized database search performance.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST APIs"
    ],
    features: [
      "Student + Recruiter dual interfaces",
      "JWT authentication with httpOnly cookies",
      "Role-based authorization (Recruiter/Student)",
      "Optimized MongoDB compound indexes",
      "Real-time application tracking",
    ],
    image: "/images/careerconnect.png", 
    githubUrl: "https://github.com/dynamicshreyashh/CareerConnect"
  },

  {
  title: "AI Ecommerce ChatBot",
  description:
    "An intelligent shopping assistant that enhances user experience by providing instant product recommendations, answering queries, and guiding users through the sales funnel.",
  technologies: [
    "React.js",
    "Tailwind CSS",
    "Framer Motion",
    "Lucide React",
    "Context API",
    "REST API"
  ],
  features: [
    "AI-powered conversational interface for product discovery",
    "Dynamic message rendering with smooth Framer Motion animations",
    "Responsive design optimized for both desktop and mobile users",
    "Integration-ready architecture for backend AI services",
    "Interactive UI components for real-time user feedback"
  ],
  image: "/images/ecommerce-chatbot.jpg", // Replace with your actual image path
  githubUrl: "https://github.com/dynamicshreyashh/AI-Ecommerce-ChatBot-Frontend"
},

  {
    title: "Natours App – Tour Booking Platform",
    description:
      "A secure tour booking platform using JWT authentication, role-based access control, integrated Stripe payments, and geospatial tour discovery.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Stripe API"
    ],
    features: [
      "JWT-based authentication & RBAC",
      "Stripe-powered online payments",
      "Booking confirmations & email flows",
      "Geospatial location-based tour search",
      "Admin dashboard for managing tours"
    ],
    image: "/images/natours.png",
    githubUrl: "https://github.com/dynamicshreyashh/Natours-App1"
  },

  {
  title: "Smart Email Assistant",
  description:
    "An AI-powered service that analyzes email content to generate context-aware replies in real-time, integrated directly into the Gmail interface.",
  technologies: [
    "Java",
    "Spring Boot",
    "Google Gemini AI",
    "Chrome Extension",
    "JavaScript",
    "REST API"
  ],
  features: [
    "Real-time AI context-aware reply generation",
    "Custom Chrome Extension with MutationObserver for DOM injection",
    "Secure REST API architecture to decouple AI logic",
    "Handled complex CORS security challenges",
    "API key protection for backend AI services"
  ],
  image: "/images/smart-email.png", // Replace with your actual image path
  githubUrl: "https://github.com/dynamicshreyashh/Smart-Email-Assistant", // Updated based on your GitHub handle
},

  {
    title: "Inventra – Inventory Management",
    description:
      "Full-stack inventory management system with automated restocking logic and web scraping for real-time product data.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma"
    ],
    features: [
      "Automated product tracking",
      "Admin dashboards",
      "Secure backend APIs",
      "Web scraping integration"
    ],
    image: "/images/Portfolio1.jpg",
    githubUrl: "https://github.com/dynamicshreyashh/Inventra"
  },

  {
    title: "Wanderlust Travel Hub",
    description:
      "A travel discovery platform with Google Maps API and secure authentication, allowing users to explore destinations interactively.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Google Maps API"],
    features: [
      "Interactive maps",
      "Real-time location insights",
      "JWT authentication",
      "Responsive UI"
    ],
    image: "/images/Portfolio2.webp",
    githubUrl: "https://github.com/dynamicshreyashh/WanderLust-Travel-Platform"
  },

  {
    title: "AI Virtual Mouse",
    description:
      "Gesture-controlled virtual mouse built with machine learning and real-time hand detection using computer vision.",
    technologies: ["Python", "OpenCV", "TensorFlow", "Tkinter"],
    features: [
      "Real-time hand tracking",
      "Gesture recognition",
      "Custom cursor controls",
      "User-friendly interface"
    ],
    image: "/images/Portfolio3.webp",
    githubUrl: "https://github.com/dynamicshreyashh/Ai-Virtual-Mouse-"
  },

  {
    title: "Event Management System",
    description:
      "A React + Firebase powered platform for organizing and managing events with real-time updates and user authentication.",
    technologies: ["React", "Firebase", "CSS"],
    features: [
      "Firebase authentication",
      "Event creation and management",
      "Real-time updates",
      "Responsive UI"
    ],
    image: "/images/Portfolio4.png",
    githubUrl: "https://github.com/dynamicshreyashh/Event-Management-Sytsem"
  }
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
