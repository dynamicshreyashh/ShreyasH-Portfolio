import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronRight, ChevronLeft, Github, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
};

export default function Projects() {
  const [index, setIndex] = useState(0);

  const projects: Project[] = [
    {
      title: "CareerConnect",
      description: "A dual-interface MERN platform where recruiters post vacancies and students apply for jobs in real time.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      image: "/images/careerconnect.png",
      githubUrl: "https://github.com/dynamicshreyashh/CareerConnect"
    },
    {
      title: "Smart Email Assistant",
      description: "An AI-powered service using Google Gemini to generate context-aware email replies in real-time.",
      technologies: ["Java", "Spring Boot", "Gemini AI", "Chrome Extension"],
      image: "/images/smart-email.png",
      githubUrl: "https://github.com/dynamicshreyashh/Smart-Email-Assistant"
    },
    {
      title: "AI Ecommerce ChatBot",
      description: "An intelligent shopping assistant providing instant product recommendations and guiding sales.",
      technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
      image: "/images/ecommerce-chatbot.jpg",
      githubUrl: "https://github.com/dynamicshreyashh/AI-Ecommerce-ChatBot-Frontend"
    },
    {
      title: "Natours App",
      description: "A secure tour booking platform with role-based access control and integrated Stripe payments.",
      technologies: ["Node.js", "Express.js", "MongoDB", "Stripe API"],
      image: "/images/natours.png",
      githubUrl: "https://github.com/dynamicshreyashh/Natours-App1"
    },
    {
      title: "Inventra",
      description: "Full-stack inventory management system with automated restocking logic and web scraping.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
      image: "/images/Portfolio1.jpg",
      githubUrl: "https://github.com/dynamicshreyashh/Inventra"
    },
    {
      title: "Wanderlust Travel Hub",
      description: "A travel discovery platform with Google Maps API for interactive destination exploring.",
      technologies: ["Node.js", "Express.js", "MongoDB", "Google Maps"],
      image: "/images/Portfolio2.webp",
      githubUrl: "https://github.com/dynamicshreyashh/WanderLust-Travel-Platform"
    },
    {
      title: "AI Virtual Mouse",
      description: "Gesture-controlled virtual mouse built with machine learning and real-time hand detection.",
      technologies: ["Python", "OpenCV", "TensorFlow"],
      image: "/images/Portfolio3.webp",
      githubUrl: "https://github.com/dynamicshreyashh/Ai-Virtual-Mouse-"
    },
    {
      title: "Event Management",
      description: "Firebase-powered platform for corporate registrations and event scheduling.",
      technologies: ["React", "Firebase", "Realtime DB"],
      image: "/images/Portfolio4.png",
      githubUrl: "https://github.com/dynamicshreyashh/Event-Management-Sytsem"
    }
  ];

  const nextProject = () => setIndex((prev) => (prev + 1) % projects.length);
  const prevProject = () => setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-zinc-950 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="mb-12 flex flex-col items-center text-center">
          <motion.h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Featured Projects
          </motion.h2>
          <div className="h-1.5 w-20 bg-blue-600 mt-3 rounded-full" />
          <p className="mt-4 text-zinc-500 text-sm italic">Click card to view on GitHub</p>
        </div>

        <div className="relative h-[550px] flex items-center justify-center">
          
          {/* Navigation */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between z-30 pointer-events-none md:px-10">
            <button onClick={prevProject} className="p-4 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 pointer-events-auto hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all shadow-xl">
              <ChevronLeft className="text-zinc-900 dark:text-white" />
            </button>
            <button onClick={nextProject} className="p-4 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 pointer-events-auto hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all shadow-xl">
              <ChevronRight className="text-zinc-900 dark:text-white" />
            </button>
          </div>

          <div className="relative w-full max-w-2xl h-full flex items-center justify-center">
            <AnimatePresence mode="popLayout">
              <motion.a
                key={index}
                href={projects[index].githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                
                // Animation States
                initial={{ x: 160, opacity: 0, scale: 0.8 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                exit={{ x: -160, opacity: 0, scale: 0.8 }}
                
                // Zoom on Hover
                whileHover={{ 
                  scale: 1.03, 
                  y: -5,
                  transition: { duration: 0.2 } 
                }}
                
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
                className="absolute inset-0 block group"
              >
                <div className="h-full bg-zinc-50 dark:bg-zinc-900 rounded-[3rem] border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden flex flex-col transition-all duration-300 group-hover:border-blue-500 group-hover:shadow-blue-500/10">
                  
                  {/* Image with overlay link indicator */}
                  <div className="h-3/5 overflow-hidden relative">
                    <img 
                      src={projects[index].image} 
                      alt="" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors flex items-center justify-center">
                       <div className="bg-white/90 dark:bg-zinc-900/90 p-4 rounded-full opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all shadow-2xl">
                          <Github className="text-zinc-900 dark:text-white" size={28} />
                       </div>
                    </div>
                  </div>
                  
                  <div className="p-10 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                         <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">Project {index + 1}</span>
                         <ExternalLink size={14} className="text-zinc-400 group-hover:text-blue-500 transition-colors" />
                      </div>
                      <h3 className="text-3xl font-bold text-zinc-900 dark:text-white">
                        {projects[index].title}
                      </h3>
                      <p className="mt-2 text-zinc-600 dark:text-zinc-400 text-sm line-clamp-2">
                        {projects[index].description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {projects[index].technologies.map(tech => (
                        <span key={tech} className="px-3 py-1 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-[10px] font-bold text-zinc-500 uppercase">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.a>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-3">
          {projects.map((_, i) => (
            <button 
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? 'w-12 bg-blue-600' : 'w-2 bg-zinc-300 dark:bg-zinc-800'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}