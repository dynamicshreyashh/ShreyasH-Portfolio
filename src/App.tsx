import { useEffect, useRef, useState } from "react";
import type { CSSProperties, MouseEvent as ReactMouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  ChevronRight,
  Code2,
  Container,
  Database,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Play,
  Power,
  ServerCog,
  Terminal,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import "./App.css";

type Project = {
  title: string;
  kicker: string;
  description: string;
  detail: string;
  tags: string[];
  metrics: string[];
  href: string;
  image?: string;
  accent: string;
  code: string[];
};

const navLinks = [
  { label: "About", id: "about" },
  { label: "Work", id: "projects" },
  { label: "Systems lab", id: "systems" },
  { label: "Experience", id: "experience" },
];

const projects: Project[] = [
  {
    title: "Workqueue Redisflow",
    kicker: "ASYNC SYSTEMS / 01",
    description: "A distributed job-processing system built around Redis Streams.",
    detail: "Spring Boot producers and workers coordinate through consumer groups, retries, acknowledgements, and a dead-letter path.",
    tags: ["Java", "Spring Boot", "Redis Streams", "Workers"],
    metrics: ["consumer groups", "retry handling", "dead-letter queue"],
    href: "https://github.com/dynamicshreyashh/Workqueue-redisflow",
    accent: "#a7f36b",
    code: ["producer.publish(job)", "stream.claim(worker)", "retry.orDeadLetter(job)"],
  },
  {
    title: "Smart Email Assistant",
    kicker: "APPLIED AI / 02",
    description: "Context-aware Gmail replies powered by Google Gemini.",
    detail: "A Manifest V3 extension talks to a Spring Boot API, keeping the model key server-side while composing replies in three tones.",
    tags: ["Spring Boot", "Gemini", "Chrome MV3", "LLM"],
    metrics: ["3 reply tones", "server-side key", "Gmail workflow"],
    href: "https://github.com/dynamicshreyashh/smart-email-assistant",
    image: "/images/smart-email.png",
    accent: "#7dd3fc",
    code: ["compose.detected()", "reply = gemini.generate()", "draft.insert(reply)"],
  },
  {
    title: "URL Shortener",
    kicker: "DEPLOYED PRODUCT / 03",
    description: "A full-stack URL service with analytics and expiry rules.",
    detail: "A small product with the complete path from relational data modeling to Docker, automated verification, and a live deployment.",
    tags: ["Java", "JPA", "Docker", "GitHub Actions"],
    metrics: ["click tracking", "expiry support", "live on Render"],
    href: "https://github.com/dynamicshreyashh/url_shortner_app",
    accent: "#f0b429",
    code: ["url = shorten(input)", "redirect.track(click)", "deploy.verify(push)"],
  },
  {
    title: "CareerConnect",
    kicker: "FULL-STACK PLATFORM / 04",
    description: "A dual-interface recruitment platform for students and recruiters.",
    detail: "Recruiters publish roles while students discover and apply through a focused MERN workflow.",
    tags: ["React", "Node.js", "MongoDB", "REST"],
    metrics: ["recruiter flow", "student flow", "real-time updates"],
    href: "https://github.com/dynamicshreyashh/CareerConnect",
    image: "/images/careerconnect.png",
    accent: "#c4b5fd",
    code: ["role = recruiter.post()", "candidate = student.apply()", "status.sync()"],
  },
];

const projectNodePositions = [
  { left: "17%", top: "51%", depth: "34px" },
  { left: "38%", top: "20%", depth: "96px" },
  { left: "67%", top: "24%", depth: "68px" },
  { left: "82%", top: "62%", depth: "18px" },
];

const stackGroups = [
  { label: "Backend", icon: ServerCog, items: ["Java", "Spring Boot", "Spring Security", "REST APIs", "JPA / Hibernate"] },
  { label: "Data & systems", icon: Database, items: ["MySQL", "Redis Streams", "SQL", "Kafka (learning)", "Event-driven design"] },
  { label: "AI engineering", icon: BrainCircuit, items: ["Gemini", "Spring AI", "RAG", "LLM orchestration", "Multi-agent workflows"] },
  { label: "Delivery", icon: Container, items: ["Docker", "GitHub Actions", "Maven", "Render", "Postman"] },
];

const experience = [
  {
    date: "JAN — JUN 2025",
    role: "Graduate Engineer Trainee",
    company: "Hexaware Technologies · Spark Program",
    description: "Built a Student Rental Management System across student, property, rental, and booking domains.",
    bullets: ["Designed the relational model and REST API layer", "Implemented validation, CRUD flows, and error handling", "Separated business logic from data access with a service layer"],
  },
  {
    date: "2021 — 2025",
    role: "B.Tech · Computer Science",
    company: "D. Y. Patil College of Engineering and Technology",
    description: "Built the foundation through computer science, systems thinking, and shipping projects outside the classroom.",
    bullets: ["200+ DSA problems solved on LeetCode", "Oracle Cloud Infrastructure 2025 — AI Foundations Associate", "300+ GitHub contributions across 26+ public repositories"],
  },
];

const systemNodes = Array.from({ length: 56 }, (_, index) => {
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  const y = 1 - (index / 55) * 2;
  const radius = Math.sqrt(1 - y * y);
  const theta = goldenAngle * index;

  return {
    x: Math.cos(theta) * radius,
    y,
    z: Math.sin(theta) * radius,
    size: 1.2 + (index % 4) * 0.45,
  };
});

function SystemsCore({ pointer }: { pointer: { x: number; y: number } }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerRef = useRef(pointer);
  pointerRef.current = pointer;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let rotation = 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.max(1, Math.floor(width * pixelRatio));
      canvas.height = Math.max(1, Math.floor(height * pixelRatio));
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const draw = () => {
      const currentPointer = pointerRef.current;
      const centerX = width / 2 + Math.max(-1, Math.min(1, (currentPointer.x - window.innerWidth / 2) / window.innerWidth)) * 16;
      const centerY = height / 2 + Math.max(-1, Math.min(1, (currentPointer.y - window.innerHeight / 2) / window.innerHeight)) * 10;
      const radius = Math.min(width, height) * 0.34;
      const tilt = Math.max(-1, Math.min(1, (currentPointer.y - window.innerHeight / 2) / window.innerHeight)) * 0.16;
      const projected = systemNodes.map((node) => {
        const angle = rotation + (currentPointer.x - window.innerWidth / 2) / window.innerWidth * 0.2;
        const rotatedX = node.x * Math.cos(angle) - node.z * Math.sin(angle);
        const rotatedZ = node.x * Math.sin(angle) + node.z * Math.cos(angle);
        const rotatedY = node.y * Math.cos(tilt) - rotatedZ * Math.sin(tilt);
        const depth = node.y * Math.sin(tilt) + rotatedZ * Math.cos(tilt);
        return {
          x: centerX + rotatedX * radius,
          y: centerY + rotatedY * radius,
          z: depth,
          size: node.size,
        };
      });

      context.clearRect(0, 0, width, height);
      const glow = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius * 1.25);
      glow.addColorStop(0, "rgba(167, 243, 107, .12)");
      glow.addColorStop(0.5, "rgba(125, 211, 252, .045)");
      glow.addColorStop(1, "rgba(8, 10, 12, 0)");
      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);

      context.save();
      context.translate(centerX, centerY);
      context.rotate(-0.22);
      context.strokeStyle = "rgba(167, 243, 107, .18)";
      context.lineWidth = 1;
      context.setLineDash([2, 7]);
      context.beginPath();
      context.ellipse(0, 0, radius * 1.17, radius * 0.36, 0, 0, Math.PI * 2);
      context.stroke();
      context.strokeStyle = "rgba(125, 211, 252, .15)";
      context.setLineDash([]);
      context.beginPath();
      context.ellipse(0, 0, radius * 0.8, radius * 1.22, 0, 0, Math.PI * 2);
      context.stroke();
      context.restore();

      for (let index = 0; index < projected.length; index += 1) {
        const point = projected[index];
        const next = projected[(index + 7) % projected.length];
        if (point.z > -0.12 && next.z > -0.12) {
          context.beginPath();
          context.moveTo(point.x, point.y);
          context.lineTo(next.x, next.y);
          context.strokeStyle = `rgba(167, 243, 107, ${0.04 + Math.max(point.z, next.z) * 0.08})`;
          context.lineWidth = 0.7;
          context.stroke();
        }
      }

      projected
        .slice()
        .sort((a, b) => a.z - b.z)
        .forEach((point) => {
          const alpha = 0.28 + (point.z + 1) * 0.34;
          context.beginPath();
          context.arc(point.x, point.y, point.size * (0.78 + (point.z + 1) * 0.25), 0, Math.PI * 2);
          context.fillStyle = point.z > 0.15 ? `rgba(167, 243, 107, ${alpha})` : `rgba(125, 211, 252, ${alpha * 0.58})`;
          context.shadowColor = point.z > 0.15 ? "rgba(167, 243, 107, .7)" : "rgba(125, 211, 252, .45)";
          context.shadowBlur = point.z > 0.35 ? 8 : 3;
          context.fill();
        });
      context.shadowBlur = 0;

      if (!reducedMotion) rotation += 0.0035;
      animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    draw();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="systems-core-canvas" aria-hidden="true" />;
}

function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [selectedProject, setSelectedProject] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [introOpen, setIntroOpen] = useState(true);
  const [bootProgress, setBootProgress] = useState(0);
  const [soundOn, setSoundOn] = useState(false);
  const [navTransition, setNavTransition] = useState<string | null>(null);
  const navTimerRef = useRef<number | null>(null);
  const navClearTimerRef = useRef<number | null>(null);

  useEffect(() => {
    document.title = "Shreyash Bhosale — Java Full-Stack Developer";
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!introOpen) return;
    const bootTimer = window.setInterval(() => {
      setBootProgress((value) => Math.min(value + 4, 100));
    }, 95);
    const autoEnterTimer = window.setTimeout(() => {
      setIntroOpen(false);
    }, 5200);
    return () => {
      window.clearInterval(bootTimer);
      window.clearTimeout(autoEnterTimer);
    };
  }, [introOpen]);

  useEffect(() => {
    const sections = ["about", "projects", "systems", "experience", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-28% 0px -62% 0px", threshold: [0.1, 0.3, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const revealSections = Array.from(document.querySelectorAll(".reveal-section"));
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.target.classList.toggle("is-visible", entry.isIntersecting));
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );
    revealSections.forEach((section) => revealObserver.observe(section));
    return () => revealObserver.disconnect();
  }, []);

  useEffect(() => () => {
    if (navTimerRef.current) window.clearTimeout(navTimerRef.current);
    if (navClearTimerRef.current) window.clearTimeout(navClearTimerRef.current);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const navigateTo = (id: string, label: string) => {
    if (navTimerRef.current) window.clearTimeout(navTimerRef.current);
    if (navClearTimerRef.current) window.clearTimeout(navClearTimerRef.current);
    setNavTransition(label);
    navTimerRef.current = window.setTimeout(() => {
      scrollTo(id);
      navClearTimerRef.current = window.setTimeout(() => setNavTransition(null), 660);
    }, 110);
  };

  const handlePointerMove = (event: ReactMouseEvent<HTMLDivElement>) => {
    setPointer({ x: event.clientX, y: event.clientY });
  };

  const enterExperience = (withSound = false) => {
    setSoundOn(withSound);
    setIntroOpen(false);
  };

  const activeProject = projects[selectedProject];

  return (
    <div
      className="portfolio-shell"
      onMouseMove={handlePointerMove}
      style={{ "--pointer-x": pointer.x + "px", "--pointer-y": pointer.y + "px" } as CSSProperties}
    >
      <div className="cursor-glow" aria-hidden="true" />
      <div className="noise-layer" aria-hidden="true" />
      <div className="progress-line" style={{ width: progress + "%" }} aria-hidden="true" />

      <AnimatePresence>
        {introOpen && (
          <motion.div
            className="intro-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.03, filter: "blur(10px)" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <div className="intro-stars" aria-hidden="true" />
            <div className="intro-scanlines" aria-hidden="true" />
            <div className="intro-shell">
              <div className="intro-topline">
                <span><span className="live-dot" /> SHREYASH / OS</span>
                <span>portfolio build 01.25</span>
              </div>
              <div className="intro-layout">
                <div className="intro-copy">
                  <p className="intro-overline">A SMALL DIGITAL UNIVERSE BY SHREYASH BHOSALE</p>
                  <h1>Welcome to<br /><em>the build.</em></h1>
                  <p className="intro-message">A Java engineer’s portfolio, booting up. Expect systems, experiments, and a little signal in the noise.</p>
                  <div className="intro-terminal">
                    <span><b>$</b> initialize --experience</span>
                    <span className="terminal-dim">loading interface / api / systems lab</span>
                    <span className="terminal-ok"><Check size={12} /> environment ready</span>
                  </div>
                </div>
                <div className="intro-core" aria-hidden="true">
                  <div className="core-rings"><span /><span /><span /></div>
                  <div className="core-mark"><Power size={22} /><b>SB</b></div>
                  <div className="core-label label-top">JAVA / AI / SYSTEMS</div>
                  <div className="core-label label-bottom">PRESS ENTER TO CONNECT</div>
                </div>
              </div>
              <div className="intro-bottom">
                <div className="boot-meter">
                  <div className="boot-meter-label"><span>boot sequence</span><b>{String(bootProgress).padStart(3, "0")}%</b></div>
                  <div className="boot-track"><span style={{ width: bootProgress + "%" }} /></div>
                </div>
                <div className="intro-actions">
                  <button className="button button-primary intro-enter" onClick={() => enterExperience(true)}><Play size={14} fill="currentColor" /> Enter with theme</button>
                  <button className="intro-skip" onClick={() => enterExperience(false)}>skip intro <ArrowUpRight size={13} /></button>
                </div>
              </div>
              <p className="intro-footnote">soundtrack available · click enter to start audio · auto-entry in a few seconds</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {navTransition && (
          <motion.div className="nav-transition" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            <span className="transition-orbit transition-orbit-one" aria-hidden="true" />
            <span className="transition-orbit transition-orbit-two" aria-hidden="true" />
            <span className="transition-dash transition-dash-one" aria-hidden="true" />
            <span className="transition-dash transition-dash-two" aria-hidden="true" />
            <span className="transition-readout"><small>jump / 0{navLinks.findIndex((link) => link.label === navTransition) + 1}</small><b>{navTransition}</b><i /></span>
          </motion.div>
        )}
      </AnimatePresence>

      <header className={"topbar " + (scrolled ? "is-scrolled" : "")}>
        <button className="brand-mark" onClick={() => scrollTo("home")} aria-label="Back to top">
          <span>SB</span><i>®</i>
        </button>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <button key={link.id} className={activeSection === link.id ? "is-active" : ""} onClick={() => navigateTo(link.id, link.label)}>
              <span>{link.label}</span>
              <small>0{navLinks.findIndex((item) => item.id === link.id) + 1}</small>
            </button>
          ))}
        </nav>
        <div className="topbar-actions">
          <span className="available-chip"><span className="pulse-dot" /> open to work</span>
          <a className="mini-icon" href="https://github.com/dynamicshreyashh" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16} /></a>
          <button className="mobile-menu-trigger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">{mobileOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div className="mobile-nav" initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }}>
            {navLinks.map((link) => <button key={link.id} onClick={() => navigateTo(link.id, link.label)}>{link.label}<ArrowUpRight size={15} /></button>)}
            <a href="mailto:shreyashbhosale078@gmail.com">Start a conversation <ArrowUpRight size={15} /></a>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-content page-width">
            <motion.div className="hero-copy" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="eyebrow"><span className="eyebrow-line" /> <span>JAVA FULL-STACK DEVELOPER / PUNE, INDIA</span></div>
              <h1>Software with<br /><em>structure.</em><br /><span>Built for motion.</span></h1>
              <p className="hero-lede">I build backend systems, practical AI features, and full-stack products that move cleanly from <strong>idea → architecture → deployment.</strong></p>
              <div className="hero-actions">
                <button className="button button-primary" onClick={() => scrollTo("projects")}>Explore selected work <ArrowDownRight size={17} /></button>
                <a className="button button-quiet" href="/images/Shreyash_Bhosale_BTech_CSE.pdf" target="_blank" rel="noreferrer">View resume <Download size={16} /></a>
              </div>
              <div className="hero-meta"><span><MapPin size={14} /> Pune, Maharashtra</span><span><Activity size={14} /> building the next layer</span></div>
            </motion.div>

            <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.15 }}>
              <div className="visual-header"><span><span className="live-dot" /> system map / live</span><span>v.2025—now</span></div>
              <div className="portrait-stage">
                <SystemsCore pointer={pointer} />
                <div className="orbit orbit-one" /><div className="orbit orbit-two" />
                <div className="portrait-card"><img src="/images/ShreyasH.jpg" alt="Shreyash Bhosale" /><span className="portrait-label">SHREYASH<br /><b>BHOSALE</b></span></div>
                <span className="orbit-tag tag-one">JAVA / API</span><span className="orbit-tag tag-two">AI / RAG</span><span className="orbit-tag tag-three">SYSTEMS</span>
              </div>
              <div className="system-map">
                <div className="map-label">HOW I THINK ABOUT A BUILD</div>
                <div className="map-flow"><div className="map-node"><Code2 size={15} /><span>interface</span></div><div className="flow-line" /><div className="map-node map-node-active"><ServerCog size={15} /><span>service</span></div><div className="flow-line" /><div className="map-node"><Database size={15} /><span>data</span></div></div>
                <div className="map-foot"><span>async when it matters</span><span>reliable by default</span></div>
              </div>
            </motion.div>
          </div>
          <div className="scroll-cue"><span>scroll to inspect</span><ChevronRight size={14} /></div>
        </section>

         <section className="section section-about page-width reveal-section" id="about">
          <div className="section-heading"><span className="section-index">01</span><div><p className="section-kicker">PROFILE / THE THROUGH-LINE</p><h2>Curious about the<br /><span>parts beneath the screen.</span></h2></div></div>
          <div className="about-grid">
            <div className="about-statement"><p>I enjoy the whole path of a product: shaping the domain, making the API honest, giving the interface a pulse, and shipping something another person can actually use.</p><p>These days my attention is moving deeper into <strong>distributed systems</strong> and <strong>AI engineering</strong>—queues, failures, retrieval, orchestration, and the trade-offs hiding behind a “simple” feature.</p><a className="text-link" href="mailto:shreyashbhosale078@gmail.com">Let’s build something considered <ArrowUpRight size={15} /></a></div>
            <div className="signal-grid"><div className="signal-card signal-card-bright"><span>01</span><strong>200+</strong><small>DSA problems solved</small></div><div className="signal-card"><span>02</span><strong>300+</strong><small>GitHub contributions</small></div><div className="signal-card"><span>03</span><strong>26+</strong><small>public repositories</small></div><div className="signal-card signal-card-wide"><span>04</span><strong>OCI 2025</strong><small>AI Foundations Associate</small></div></div>
          </div>
        </section>

         <section className="section section-projects page-width reveal-section" id="projects">
          <div className="section-heading heading-split"><div><span className="section-index">02</span><div><p className="section-kicker">SELECTED WORK / SHIPPED</p><h2>Small products.<br /><span>Serious systems thinking.</span></h2></div></div><p className="heading-note">A few places where I went beyond making the feature work—and started asking how it behaves under pressure.</p></div>
          <div className="project-space">
            <div className="project-space-topline"><span><span className="live-dot" /> project architecture / interactive map</span><span>{String(projects.length).padStart(2, "0")} nodes · choose a system</span></div>
            <div className="project-constellation">
              <div className="constellation-grid" aria-hidden="true" />
              <span className="constellation-line line-a" aria-hidden="true" />
              <span className="constellation-line line-b" aria-hidden="true" />
              <span className="constellation-line line-c" aria-hidden="true" />
              <span className="constellation-line line-d" aria-hidden="true" />
              <div className="constellation-core" aria-hidden="true"><span /><b>SB</b><small>systems<br />in motion</small></div>
              {projects.map((project, index) => {
                const node = projectNodePositions[index];
                return <button key={project.title} className={"project-node " + (selectedProject === index ? "is-selected" : "")} onClick={() => setSelectedProject(index)} style={{ "--node-left": node.left, "--node-top": node.top, "--node-depth": node.depth, "--node-accent": project.accent } as CSSProperties} aria-label={"Inspect " + project.title}>
                  <span className="project-node-ring" aria-hidden="true" /><span className="project-node-number">0{index + 1}</span><span className="project-node-name">{project.title}</span><span className="project-node-type">{project.kicker.split(" / ")[0]}</span>
                </button>;
              })}
            </div>
            <div className="project-space-footer"><span>drag your attention through the graph</span><span className="project-space-active"><i /> selected: {projects[selectedProject].title}</span></div>
          </div>
          <div className="projects-layout">
            <div className="project-index" role="tablist" aria-label="Selected projects">
              {projects.map((project, index) => <button key={project.title} className={selectedProject === index ? "project-tab is-selected" : "project-tab"} onClick={() => setSelectedProject(index)} role="tab" aria-selected={selectedProject === index}><span className="tab-number">0{index + 1}</span><span className="tab-copy"><b>{project.title}</b><small>{project.kicker}</small></span><ChevronRight size={17} /></button>)}
              <a className="all-work-link" href="https://github.com/dynamicshreyashh?tab=repositories" target="_blank" rel="noreferrer">browse all repositories <ArrowUpRight size={14} /></a>
            </div>
            <div className="project-feature-wrap">
              <AnimatePresence mode="wait">
                <motion.article key={activeProject.title} className="project-feature" style={{ "--project-accent": activeProject.accent } as CSSProperties} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.35 }}>
                  <div className="feature-topline"><span>{activeProject.kicker}</span><span>0{selectedProject + 1} / 0{projects.length}</span></div>
                  <div className="feature-visual">{activeProject.image ? <img src={activeProject.image} alt={activeProject.title + " preview"} /> : <div className="code-visual"><div className="code-window-bar"><span /><span /><span /><b>worker.ts</b></div>{activeProject.code.map((line, index) => <div className="code-line" key={line}><small>0{index + 1}</small><code><i>{line.split(".")[0]}</i>{line.includes(".") ? "." + line.split(".").slice(1).join(".") : ""}</code></div>)}</div>}<div className="feature-glow" /></div>
                  <div className="feature-body"><div><h3>{activeProject.title}</h3><p className="feature-description">{activeProject.description}</p><p className="feature-detail">{activeProject.detail}</p></div><a className="round-link" href={activeProject.href} target="_blank" rel="noreferrer" aria-label={"Open " + activeProject.title + " on GitHub"}><ExternalLink size={18} /></a></div>
                  <div className="feature-footer"><div className="tag-list">{activeProject.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="metric-list">{activeProject.metrics.map((metric) => <span key={metric}><Check size={13} /> {metric}</span>)}</div></div>
                </motion.article>
              </AnimatePresence>
            </div>
          </div>
        </section>

         <section className="section section-systems page-width reveal-section" id="systems">
          <div className="section-heading"><span className="section-index">03</span><div><p className="section-kicker">SYSTEMS LAB / CURRENT DIRECTION</p><h2>Learning the shape<br /><span>of what comes next.</span></h2></div></div>
          <div className="systems-intro"><p>I’m moving from building individual features to understanding the systems that make software dependable at scale. Not collecting buzzwords—studying the trade-offs.</p><div className="systems-status"><span className="pulse-dot" /> currently exploring</div></div>
          <div className="capability-grid">{stackGroups.map((group, index) => { const Icon = group.icon; return <motion.div className="capability-card" key={group.label} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}><div className="capability-top"><span className="capability-icon"><Icon size={18} /></span><span>0{index + 1}</span></div><h3>{group.label}</h3><div className="capability-items">{group.items.map((item) => <span key={item}>{item}</span>)}</div></motion.div>; })}</div>
          <div className="principle-strip"><Terminal size={18} /><span>engineering filter</span><strong>Can it be understood? Can it recover? Can it be extended without fear?</strong><ArrowUpRight size={17} /></div>
        </section>

         <section className="section section-experience page-width reveal-section" id="experience">
          <div className="section-heading heading-split"><div><span className="section-index">04</span><div><p className="section-kicker">EXPERIENCE / FOUNDATION</p><h2>The work behind<br /><span>the work.</span></h2></div></div><p className="heading-note">A practical foundation in product work, APIs, and the discipline of finishing what I start.</p></div>
          <div className="experience-list">{experience.map((item, index) => <motion.article className="experience-item" key={item.role} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}><div className="experience-date">{item.date}</div><div className="experience-marker"><span /></div><div className="experience-copy"><div className="experience-role"><h3>{item.role}</h3><span>{item.company}</span></div><p>{item.description}</p><ul>{item.bullets.map((bullet) => <li key={bullet}><span />{bullet}</li>)}</ul></div></motion.article>)}</div>
        </section>

         <section className="contact-section page-width reveal-section" id="contact">
          <div className="contact-card"><div className="contact-orb" /><div className="contact-copy"><span className="section-kicker">05 / START A CONVERSATION</span><h2>Have a system<br /><em>worth building?</em></h2><p>I’m open to Java full-stack, backend engineering, and thoughtful AI product opportunities.</p></div><div className="contact-actions"><a className="button button-primary" href="mailto:shreyashbhosale078@gmail.com">Send an email <Mail size={16} /></a><div className="contact-links"><a href="https://www.linkedin.com/in/shreyash-5a7726245/" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a><a href="https://github.com/dynamicshreyashh" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a></div></div></div>
        </section>
      </main>

      <footer className="footer page-width"><span>© {new Date().getFullYear()} SHREYASH BHOSALE</span><span>JAVA / SYSTEMS / AI</span><a href="#home" onClick={(event) => { event.preventDefault(); scrollTo("home"); }}>back to top <ArrowUpRight size={14} /></a></footer>

      <AnimatePresence>
        {soundOn && (
          <motion.div className="music-dock" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 18 }}>
            <iframe
              className="music-iframe"
              title="Portfolio theme music"
              src="https://www.youtube-nocookie.com/embed/Z5D-35D7eXE?autoplay=1&loop=1&playlist=Z5D-35D7eXE&controls=0&modestbranding=1&rel=0&playsinline=1"
              allow="autoplay; encrypted-media"
            />
            <span className="music-eq"><i /><i /><i /><i /></span>
            <span className="music-label"><b>theme / live</b><small>background signal</small></span>
            <button className="music-toggle" onClick={() => setSoundOn(false)} aria-label="Turn theme music off"><Volume2 size={16} /></button>
          </motion.div>
        )}
        {!soundOn && !introOpen && (
          <motion.button className="music-reopen" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} onClick={() => setSoundOn(true)} aria-label="Turn theme music on">
            <VolumeX size={16} /><span>theme</span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
