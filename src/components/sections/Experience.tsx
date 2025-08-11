import { EXPERIENCE } from '../../config/constants';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react'; // you can replace with any icon set

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          Work Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l-4 border-blue-500 pl-8 space-y-12">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="absolute -left-12 top-6 w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full shadow-md">
                <Briefcase size={20} />
              </div>

              <h3 className="text-2xl font-semibold">{exp.position}</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                {exp.company} • {exp.duration}
              </p>

              {/* Points */}
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {exp.points.map((point, i) => (
                  <li key={i} className="hover:text-blue-600 transition-colors">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* View Work Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#projects"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            View My Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
