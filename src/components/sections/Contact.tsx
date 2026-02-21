import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaPhone, FaArrowRight } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { MapPin } from "lucide-react";

// Data from your resume
const CONTACT_INFO = {
  email: "shreyashbhosale078@gmail.com",
  phone: "+91 7276690515",
  github: "https://github.com/dynamicshreyashh",
  linkedin: "https://linkedin.com/in/shreyashbhosale",
  location: "Pune, Maharashtra"
};

export default function Contact() {
  return (
    <section 
      id="contact"
      className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white"
          >
            Get In Touch
          </motion.h2>
          <div className="h-1.5 w-20 bg-indigo-600 mt-3 rounded-full mx-auto md:mx-0" />
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-md">
            Have a project in mind or just want to say hi? I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Left Side: Contact Cards */}
          <div className="lg:col-span-2 space-y-4">
            {[
              { 
                icon: <HiMail className="text-xl" />, 
                label: "Email", 
                value: CONTACT_INFO.email, 
                link: `mailto:${CONTACT_INFO.email}` 
              },
              { 
                icon: <FaLinkedin className="text-xl" />, 
                label: "LinkedIn", 
                value: "shreyashbhosale", 
                link: CONTACT_INFO.linkedin 
              },
              { 
                icon: <MapPin className="text-xl" />, 
                label: "Location", 
                value: CONTACT_INFO.location, 
                link: "#" 
              },
              { 
                icon: <FaPhone className="text-xl" />, 
                label: "Phone", 
                value: CONTACT_INFO.phone, 
                link: `tel:${CONTACT_INFO.phone}` 
              }
            ].map((item, idx) => (
              <motion.a
                key={idx}
                href={item.link}
                target="_blank"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4 p-5 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-800 flex items-center justify-center shadow-sm text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">{item.label}</p>
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Right Side: Interactive Form */}
          <div className="lg:col-span-3">
            <motion.form 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-zinc-50 dark:bg-zinc-900/50 p-8 md:p-10 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder=""
                    className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-1">Email Address</label>
                  <input
                    type="email"
                    placeholder=""
                    className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all dark:text-white"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-8">
                <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300 ml-1">Your Message</label>
                <textarea
                  rows={5}
                  placeholder="How can I help you?"
                  className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all dark:text-white resize-none"
                />
              </div>

              <button
                type="submit"
                className="group w-full md:w-auto px-10 py-4 bg-indigo-600 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20"
              >
                Send Message
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.form>
          </div>

        </div>
      </div>
    </section>
  );
}