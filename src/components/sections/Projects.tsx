import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Inventra – Inventory Management",
      description: "Full-stack inventory management platform for sales and expenses with web scrapping.",
      technologies: ["Next.js", "React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Prisma"],
      features: [
        "Automated product tracking and restocking",
        "Responsive admin dashboards",
        "Secure backend APIs",
        "Web scraping integration"
      ],
      image: "/images/Portfolio1.jpg",
      githubUrl: "https://github.com/dynamicshreyashh/Inventra",
      //demoUrl: "#"
    },
    {
      title: "Wanderlust Travel Hub",
      description: "Travel discovery web app with Google Maps API integration and secure authentication system.",
      technologies: ["Node.js", "Express.js", "MongoDB", "Google Maps API"],
      features: [
        "Interactive destination exploration",
        "Real-time location insights",
        "Secure JWT authentication",
        "Responsive EJS templates"
      ],
      image: "/images/Portfolio2.webp",
      githubUrl: "https://github.com/dynamicshreyashh/WanderLust-Travel-Platform",
      //demoUrl: "#"
    },
    {
      title: "AI Virtual Mouse",
      description: "Hand gesture-controlled virtual mouse using computer vision and machine learning.",
      technologies: ["Python", "OpenCV", "TensorFlow", "Tkinter"],
      features: [
        "Real-time hand detection",
        "Gesture recognition",
        "Customizable cursor controls",
        "User-friendly interface"
      ],
      image: "/images/Portfolio3.webp",
      githubUrl: "https://github.com/dynamicshreyashh/Ai-Virtual-Mouse-",
     // demoUrl: "#"
    },
    {
      title: "Event Management System",
      description: "A React-based web application for organizing, managing, and booking events with Firebase-powered backend and authentication.",
      technologies: ["React", "Firebase", "CSS"],
      features: [
      "User authentication with Firebase",
      "Event creation and management",
       "Responsive design with CSS",
       "User-friendly Event interface"
  ],
       image: "/images/Portfolio4.png",
       githubUrl: "https://github.com/dynamicshreyashh/Event-Management-Sytsem"

    }

  ];
  

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>

        {/* Horizontal Scroll Container */}
        <motion.div
          className="flex space-x-6 overflow-x-auto pb-4"
          whileTap={{ cursor: "grabbing" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
               id={project.title === "Event Management System" ? "event-management" : undefined}
              className="min-w-[300px] md:min-w-[400px] bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

               <div className="flex justify-center gap-6 mt-4">
               <a
                href={project.githubUrl}
                className="text-blue-600 hover:text-blue-800 font-medium"
                target="_blank"
                rel="noopener noreferrer"
                >
                 View Code
               </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
