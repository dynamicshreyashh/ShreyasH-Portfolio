import { SOCIAL_LINKS } from "../../config/constants";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const socialIcons = {
    GitHub: <FaGithub className="w-5 h-5" />,
    LinkedIn: <FaLinkedin className="w-5 h-5" />,
    Email: <FaEnvelope className="w-5 h-5" />
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light dark:bg-light dark:text-dark transition-colors duration-300 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left section */}
          <motion.div 
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-lg font-medium">
              © {currentYear} Shreyash Bhosale. All rights reserved.
            </p>
            <p className="text-gray-500 dark:text-gray-600 mt-2">
              Built with <span className="text-primary dark:text-primary-dark">Next.js</span>,{' '}
              <span className="text-primary dark:text-primary-dark">TypeScript</span>, and{' '}
              <span className="text-primary dark:text-primary-dark">Tailwind CSS</span>
            </p>
          </motion.div>
          
          {/* Social links */}
          <motion.div 
            className="flex space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {SOCIAL_LINKS.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-primary-dark transition-colors duration-300"
                aria-label={social.name}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {socialIcons[social.name as keyof typeof socialIcons] || social.name}
              </motion.a>
            ))}
          </motion.div>
        </div>
        
        {/* Bottom section */}
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-700 dark:border-gray-300 text-center text-gray-500 dark:text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>
            Open to new opportunities and collaborations. Let's build something amazing!
          </p>
          <p className="mt-2">
            <a 
              href="mailto:shreyashbhosale078@gmail.com" 
              className="text-primary dark:text-primary-dark hover:underline"
            >
              shreyashbhosale078@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}