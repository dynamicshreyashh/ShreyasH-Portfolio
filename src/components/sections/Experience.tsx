import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

// Data extracted from your resume
const EXPERIENCE = [
  {
    company: "Sinek Marketing Technology Pvt. Ltd.",
    position: "Software Developer Intern",
    duration: "June 2024 — July 2024",
    location: "Kolhapur, India",
    points: [
      "Developed a full-stack Event Management System to facilitate corporate registrations and event scheduling.",
      "Implemented CRUD operations and data persistence logic to manage participant and event records.",
      "Designed a responsive web interface focused on user accessibility and intuitive event discovery."
    ],
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header - Matching your theme */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white"
          >
            Professional Experience
          </motion.h2>
          <div className="h-1.5 w-20 bg-indigo-600 mt-3 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative space-y-12">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800" />

          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative pl-8 md:pl-20"
            >
              {/* Timeline Node Icon */}
              <div className="absolute left-[-16px] md:left-4 top-0 w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 z-10">
                <Briefcase size={16} />
              </div>

              {/* Experience Card */}
              <div className="group bg-zinc-50 dark:bg-zinc-900/50 p-8 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 transition-all duration-300">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {exp.position}
                    </h3>
                    <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 font-medium mt-1">
                      <span className="text-lg">{exp.company}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end text-sm text-zinc-500">
                    <div className="flex items-center gap-2 bg-white dark:bg-zinc-800 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-700">
                      <Calendar size={14} className="text-indigo-500" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-1 mt-2 mr-2">
                      <MapPin size={14} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Content Points */}
                <ul className="space-y-4">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-indigo-500" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Bottom Decorative Element */}
                <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-zinc-200 dark:bg-zinc-800 rounded-md text-zinc-600 dark:text-zinc-400">
                      Full-Stack
                    </span>
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-zinc-200 dark:bg-zinc-800 rounded-md text-zinc-600 dark:text-zinc-400">
                      Internship
                    </span>
                  </div>
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="text-indigo-600 dark:text-indigo-400"
                  >
                    <ChevronRight size={20} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 px-8 py-4 rounded-2xl font-bold shadow-xl hover:opacity-90 transition-all"
          >
            See My Projects
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}