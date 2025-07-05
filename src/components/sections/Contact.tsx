import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { HEADER_DATA } from '../../config/constants';

export default function Contact() {
  return (
    <section 
      id="contact"
      className="py-20 bg-gray-50 dark:bg-gray-900 scroll-mt-16" // Added scroll-margin
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
        >
          Get in Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I'm always open to new collaborations! Drop a message anytime.
            </p>
            
            <div className="space-y-4">
              <a href={`mailto:${HEADER_DATA.email}`} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark transition-colors">
                <HiMail className="w-5 h-5 flex-shrink-0" />
                {HEADER_DATA.email}
              </a>
              
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <FaPhone className="w-5 h-5 flex-shrink-0" />
                {HEADER_DATA.phone}
              </div>
              
              <a href={HEADER_DATA.github} target="_blank" className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark transition-colors">
                <FaGithub className="w-5 h-5 flex-shrink-0" />
                GitHub
              </a>
              
              <a href={HEADER_DATA.linkedin} target="_blank" className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark transition-colors">
                <FaLinkedin className="w-5 h-5 flex-shrink-0" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="px-6 py-3 bg-primary dark:bg-primary-dark text-white rounded-lg hover:bg-opacity-90 transition-colors w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}