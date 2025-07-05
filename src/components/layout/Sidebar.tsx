import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { usePortfolioConfig } from "../../hooks/usePortfolioConfig";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-scroll';

interface MenuItem {
  title: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { title: "About Me", href: "about" },
  { title: "Projects", href: "projects" },
  { title: "TechStack", href: "tech-stack" },
  { title: "Experience", href: "experience" },
  { title: "Education", href: "education" },
];

interface SidebarProps {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

const menuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const containerVariants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const sidebarVariants = {
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  closed: {
    x: "-100%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
};

const MenuItem = ({ 
  item, 
  onClose 
}: { 
  item: MenuItem; 
  onClose: () => void 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.li
      variants={menuItemVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative cursor-pointer"
    >
      <Link
        to={item.href}
        smooth={true}
        duration={500}
        onClick={onClose}
        className="block text-lg font-title text-gray-800 dark:text-gray-200 hover:text-white dark:hover:text-white hover:font-semibold transition-all duration-200 py-4 px-4 relative overflow-hidden"
      >
        <motion.span
          className="relative z-10 flex items-center justify-between"
          animate={{
            x: isHovered ? 15 : 0,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.span className="relative inline-block text-current">
            {item.title}
            <motion.span
              animate={{
                opacity: isHovered ? 1 : 0,
                scaleX: isHovered ? 1 : 0,
              }}
              className="absolute bg-primary dark:bg-primary-dark h-[2px] bottom-0 left-0 origin-left"
              style={{ width: "100%" }}
            />
          </motion.span>
          <motion.span
            animate={{
              opacity: isHovered ? 1 : 0,
              x: isHovered ? -8 : -50,
            }}
          >
            <FaArrowRight size={22} className="text-current" />
          </motion.span>
        </motion.span>
        <motion.div
          className="absolute inset-0 bg-primary dark:bg-primary-dark z-0"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ type: "tween", duration: 0.3 }}
          style={{ originX: 0 }}
        />
      </Link>
    </motion.li>
  );
};

export const Sidebar = ({ darkMode, setDarkMode }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { personal } = usePortfolioConfig();

  const toggleSidebar = () => setIsOpen((state) => !state);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        onClick={toggleSidebar}
        className="fixed top-4 right-4 z-[999] p-2 bg-primary dark:bg-primary-dark rounded-full shadow-lg hover:shadow-xl hover:scale-110 group transition-all duration-300 ease-out"
        whileHover={{
          rotate: 180,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.9 }}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isOpen ? "close" : "menu"}
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 180 }}
            transition={{ duration: 0.2 }}
            className="text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </AnimatePresence>
      </motion.button>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleSidebar}
            className="fixed inset-0 bg-black/50 z-40 cursor-pointer"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        className={`fixed top-0 left-0 h-full bg-light dark:bg-dark z-50 w-full md:w-64 md:transform-none md:opacity-100 md:pointer-events-auto md:shadow-lg px-8 py-12 transition-colors duration-300`}
      >
        {/* Dark Mode Toggle */}
        <button 
          onClick={toggleDarkMode}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-600" />}
        </button>

        {/* LogoName */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h1 className="font-display text-3xl font-bold tracking-tight text-primary dark:text-primary-dark">
            {personal.name}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2 font-title">
            {personal.role}
          </p>
        </motion.div>

        {/* Navigation Items */}
        <motion.ul variants={containerVariants} className="space-y-5">
          {menuItems.map((item) => (
            <MenuItem 
              key={item.title} 
              item={item} 
              onClose={() => setIsOpen(false)} 
            />
          ))}
        </motion.ul>
      </motion.nav>
    </>
  );
};