import "./App.css";
import Hero from "./components/sections/Hero";
import { Layout } from "./components/layout/Layout";
import { usePortfolioConfig } from "./hooks/usePortfolioConfig";
import Contact from "./components/sections/Contact";
import Projects from "./components/sections/Projects";
import TechStack from "./components/sections/TechStack";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import { useLayoutEffect } from "react";
import { motion } from "framer-motion";

function App() {
  const { personal } = usePortfolioConfig();

  useLayoutEffect(() => {
    document.title = `${personal.name} - ${personal.role}`;
  }, [personal]);

  const sectionWrapper = (children: JSX.Element, key: string) => (
    <motion.section
      key={key}
      id={key}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-20 border-b border-gray-200 dark:border-gray-800"
    >
      {children}
    </motion.section>
  );

  return (
    <Layout>
      {sectionWrapper(<Hero />, "hero")}
      {sectionWrapper(<TechStack />, "techstack")}
      {sectionWrapper(<Projects />, "projects")}
      {sectionWrapper(<Experience />, "experience")}
      {sectionWrapper(<Education />, "education")}
      {sectionWrapper(<Contact />, "contact")}
    </Layout>
  );
}

export default App;
