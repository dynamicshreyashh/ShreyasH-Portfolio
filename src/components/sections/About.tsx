import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { User, Code2, GraduationCap, Sparkles, MapPin } from "lucide-react";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | Shreyash Bhosale</title>
      </Helmet>

      <section 
        id="about" 
        className="py-24 bg-white dark:bg-zinc-950 relative overflow-hidden transition-colors"
      >
        {/* Background Decorative Glows for that Unique UI */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6">
          
          {/* --- CENTER ALIGNED IMAGE & HEADER --- */}
          <div className="flex flex-col items-center text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative mb-8"
            >
              {/* The Colorful Glow Ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-[3rem] blur-lg opacity-50 animate-pulse" />
              
              {/* The Unique "Squircle" Profile Photo */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-[3rem] border-4 border-white dark:border-zinc-900 overflow-hidden shadow-2xl">
                <img
                  src="/images/ShreyasH.jpg" 
                  alt="Shreyash Bhosale"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-indigo-500 font-black uppercase tracking-[0.3em] text-xs">About Me</span>
              <h2 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white mt-4">
                Full-Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Developer</span>
              </h2>
            </motion.div>
          </div>

          {/* --- BENTO CONTENT GRID --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Main Bio Card: Using your specific "Blank Slate" text */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 p-8 md:p-10 rounded-[2.5rem] bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800"
            >
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
                <User className="text-indigo-500" /> Professional Profile
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg mb-6">
                "I like <span className="text-indigo-500 font-bold">starting from a blank slate</span> and turning it into a finished product. From frontend and backend to deployment, I focus on building software that's <span className="text-zinc-900 dark:text-white font-semibold">practical, usable, and reliable.</span>"
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
                As a Full-Stack Engineer, I specialize in <span className="text-purple-500 font-medium">Java (Spring Boot)</span> and <span className="text-indigo-500 font-medium">Node.js</span>, with a deep interest in integrating Generative AI to create smarter user experiences.
              </p>
            </motion.div>

            {/* Education Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-[2.5rem] bg-gradient-to-br from-indigo-600 to-purple-700 text-white relative overflow-hidden shadow-xl"
            >
              <GraduationCap className="mb-6 opacity-80" size={40} />
              <h3 className="text-xl font-bold mb-2">Education</h3>
              <p className="text-indigo-100 font-medium text-sm">B.Tech in Computer Science</p>
              <p className="text-xs text-indigo-200 mt-4 leading-relaxed">
                D.Y. Patil College of Engineering and Technology <br />
                2021 — 2025
              </p>
              <Sparkles className="absolute -bottom-4 -right-4 text-white/10" size={120} />
            </motion.div>

            {/* Location Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-[2.5rem] bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 border border-zinc-800 flex flex-col justify-center shadow-lg"
            >
              <div className="flex items-center gap-3 mb-2">
                <MapPin size={18} className="text-pink-500" />
                <span className="font-bold">Based in Pune</span>
              </div>
              <p className="text-zinc-400 dark:text-zinc-500 text-sm">Maharashtra, India</p>
            </motion.div>

            {/* Status & Action Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 p-8 rounded-[2.5rem] bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-6 shadow-sm"
            >
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-800 flex items-center justify-center shadow-inner">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                 </div>
                 <div>
                   <p className="text-xs font-black uppercase text-zinc-400">Current Status</p>
                   <p className="text-zinc-900 dark:text-white font-bold text-lg">Open for Full-time Roles</p>
                 </div>
              </div>
              
              <a 
                href="/images/Shreyash_Bhosale_BTech_CSE.pdf" 
                target="_blank"
                className="px-8 py-4 rounded-2xl bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
              >
                Download CV
              </a>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}