import { motion } from "framer-motion";
import { EDUCATION } from '../../config/constants';
import { GraduationCap } from 'lucide-react'; // Education hat icon

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <motion.div
            animate={{ rotate: 10, y: -5 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.5
            }}
          >
            <GraduationCap className="w-8 h-8 text-blue-600" />
          </motion.div>
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
            <span className="text-blue-600">#</span>Education
          </h2>
        </motion.div>
        
        <div className="grid gap-6">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex flex-col md:flex-row md:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 pl-8">
                    {edu.institution}
                  </p>
                </div>
                <div className="md:text-right pl-8 md:pl-0">
                  <p className="text-gray-900 dark:text-white font-medium">
                    {edu.year}
                  </p>
                  <motion.p 
                    className="text-gray-500 dark:text-gray-400 bg-blue-100 dark:bg-blue-900/30 inline-block px-3 py-1 rounded-full mt-1"
                    whileHover={{ scale: 1.05 }}
                  >
                    {edu.grade}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}