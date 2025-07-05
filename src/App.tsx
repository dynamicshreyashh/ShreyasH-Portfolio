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

function App() {
    const {personal} = usePortfolioConfig()

    useLayoutEffect(()=>{
        document.title = `${personal.name} - ${personal.role}`;
    },[personal])

  return (
    <Layout>
        <Hero />
        <TechStack />
        <Projects />
        <Experience />
        <Education />
        <Contact />
    </Layout>
  );
}

export default App;
