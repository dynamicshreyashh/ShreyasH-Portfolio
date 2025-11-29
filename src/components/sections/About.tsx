import { motion } from "framer-motion";
import Image from "next/image";
// Remove this line: import profilePic from "/images/ShreyasH.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-2 h-2 rounded-full bg-blue-500" />
          <h2 className="text-gray-500 dark:text-gray-300 text-lg uppercase tracking-[0.05em]">
            About Me
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
              <Image
                src="/images/ShreyasH.jpg" // Direct path from public folder
                alt="Shreyash Bhosale"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* ... rest of your content remains the same ... */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}