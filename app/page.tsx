"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Code2,
  Briefcase,
  GraduationCap,
  Award,
  Trophy,
  Wrench,
  BookOpen,
  ChevronRight,
  ExternalLink,
  Mail,
  Star
} from "lucide-react";
import { useState, useRef } from "react";
import profilePhoto from "../public/pfp.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-[#1e293b] px-3 py-1 text-xs font-medium text-[#7dd3fc] transition-colors hover:bg-[#334155]">
      {children}
    </span>
  );
}

function SectionHeading({
  icon: Icon,
  title,
}: {
  icon: React.ElementType;
  title: string;
}) {
  return (
    <motion.div
      className="mb-8 flex items-center gap-3"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={0}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0ea5e9]/10">
        <Icon className="h-5 w-5 text-[#0ea5e9]" />
      </div>
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
      <div className="ml-4 h-px flex-1 bg-gradient-to-r from-[#0ea5e9]/30 to-transparent" />
    </motion.div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Training", href: "#training" },
    { label: "Certificates", href: "#certificates" },
    { label: "Education", href: "#education" },
  ];

  return (
    <motion.nav
      className="fixed top-0 z-50 w-full border-b border-[#1e293b] bg-[#020617]/80 backdrop-blur-xl"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#" className="text-lg font-bold tracking-tight">
          <span className="text-[#0ea5e9]">A</span>K
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#888] transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/CV%20(2).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 flex items-center gap-2 rounded-full bg-[#0ea5e9] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#a855f7]"
          >
            <Download className="h-4 w-4" />
            View CV
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          className="border-t border-[#1e293b] bg-[#020617] px-4 pb-4 md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-[#888] transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/CV%20(2).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-[#0ea5e9] px-4 py-2.5 text-sm font-medium text-white"
          >
            <Download className="h-4 w-4" />
            View CV
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  // Parallax scrolling values for planets and backgrounds
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 800]);

  const skills = {
    Languages: ["C/C++", "Java", "Python", "HTML/CSS", "JavaScript", "MySQL"],
    "Tools / Platforms": [
      "Ubuntu",
      "GitHub",
      "Git",
      "Docker",
      "Jupyter Notebook",
    ],
    Frameworks: [
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "PyTorch",
      "TensorFlow",
    ],
    "Soft Skills": [
      "Problem-Solving",
      "Team Player",
      "Project Management",
      "Adaptability",
    ],
  };

  const projects = [
    {
      title: "ML Sentiment Analysis Model",
      tech: ["Python", "NumPy", "Pandas", "Scikit-learn"],
      date: "Nov 2025",
      points: [
        "Constructed a sentiment classifier using Logistic Regression and TF-IDF vectorization.",
        "Refined and processed textual datasets to improve model accuracy and generalization.",
        "Evaluated performance using precision, recall, F1-score, and confusion matrix.",
        "Tuned hyperparameters and refined the ML pipeline to improve consistency and reduce overfitting.",
      ],
    },
    {
      title: "BankSys - Banking Management System",
      tech: ["C++", "File Handling", "Data Structures"],
      date: "Jun – Jul 2025",
      points: [
        "Developed a console-based banking management system with structured data handling for account creation, balance operations, and secure transaction processing.",
        "Formed a structured data model with file-based persistence, reliable storage, and quick record access.",
        "Implemented optimized modules for deposits, withdrawals, account search, and transaction history.",
        "Refactored program architecture into modular components, improving performance and maintainability.",
      ],
    },
    {
      title: "Thumbnaily.in",
      tech: ["Next.js", "NextAuth", "Prisma", "PostgreSQL", "Tailwind CSS"],
      date: "May – Sep 2025",
      link: "https://github.com/ashuksmile/thumbnaily",
      points: [
        "Contributed and launched Thumbnaily, a full-stack application for AI-powered thumbnail generation using Next.js.",
        "Integrated OpenAI to generate professional-quality thumbnails based on user prompt and visual preferences.",
        "Crafted efficient data models with Prisma and PostgreSQL, enabling smooth user workflows and secure auth.",
        "Deployed on a virtual machine with a complete CI/CD pipeline for reliable builds, updates, and scalability.",
      ],
    },
  ];

  const certificates = [
    {
      title:
        "Computational Theory: Language Principle & Finite Automata Theory",
      issuer: "Infosys",
      date: "Aug 2025",
    },
    {
      title: "Generative AI Apps and Solutions with No-Code Tools",
      issuer: "Infosys",
      date: "Aug 2025",
    },
    {
      title: "Java Programming",
      issuer: "iamneo",
      date: "May 2025",
    },
    {
      title: "Object Oriented Programming",
      issuer: "iamneo",
      date: "Dec 2024",
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Google (Coursera)",
      date: "Sep 2024",
    },
  ];

  const education = [
    {
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      degree: "B.Tech - Computer Science and Engineering",
      score: "CGPA: 8.05",
      date: "Aug 2023 – Present",
    },
    {
      institution: "G.G.S.S.S. Majra Sheoraj",
      location: "Rewari, Haryana",
      degree: "Intermediate",
      score: "Percentage: 81.4%",
      date: "Apr 2021 – Mar 2022",
    },
    {
      institution: "Shri Krishan Sr. Sec. School",
      location: "Rewari, Haryana",
      degree: "Matriculation",
      score: "Percentage: 100%",
      date: "Apr 2019 – Mar 2020",
    },
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#020617] overflow-x-hidden text-neutral-200">
      {/* ── FLOATING BACKGROUND ── */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Dynamic Star background layer */}
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0 opacity-40">
          {[...Array(40)].map((_, i) => (
            <div
              key={`star-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                opacity: Math.random(),
                boxShadow: "0 0 10px rgba(255,255,255,0.8)",
              }}
            />
          ))}
        </motion.div>
        
        {/* Deep space parallax layer */}
        <motion.div style={{ y: y2 }} className="absolute inset-0 z-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={`nebula-star-${i}`}
              className="absolute rounded-full bg-[#0ea5e9]"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                filter: "blur(2px)",
                opacity: Math.random() * 0.5,
              }}
            />
          ))}
        </motion.div>

        {/* Constellations lines parallax layer */}
        <motion.div style={{ y: y3 }} className="absolute inset-0 z-0 opacity-10">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="10%" y1="20%" x2="25%" y2="40%" stroke="#a855f7" strokeWidth="1" />
            <line x1="25%" y1="40%" x2="40%" y2="35%" stroke="#a855f7" strokeWidth="1" />
            <line x1="60%" y1="70%" x2="80%" y2="60%" stroke="#0ea5e9" strokeWidth="1" />
            <line x1="80%" y1="60%" x2="90%" y2="80%" stroke="#0ea5e9" strokeWidth="1" />
          </svg>
        </motion.div>

        {/* Nebula/Dust effects */}
        <motion.div
          className="absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-[#0ea5e9]/10 blur-[120px]"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-[#a855f7]/10 blur-[120px]"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <motion.div style={{ y: y1 }}>
        {/* Planets */}
        {/* Planet 1 - Purple/Blue */}
        <motion.div
          className="absolute left-[10%] top-[20%] h-24 w-24 sm:h-32 sm:w-32 rounded-full border border-white/5 cursor-pointer z-20"
          style={{
            background: "radial-gradient(circle at 30% 30%, #a855f7, #4f46e5, #000)",
            boxShadow: "inset -10px -10px 20px rgba(0,0,0,0.8), 0 0 20px rgba(79,70,229,0.3)",
            pointerEvents: "auto",
          }}
          animate={{ y: [0, -30, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.2, boxShadow: "inset -10px -10px 20px rgba(0,0,0,0.8), 0 0 40px rgba(79,70,229,0.6)" }}
          drag
          dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
          dragElastic={0.2}
        />

        {/* Planet 2 - Orange/Red (Mars-like) */}
        <motion.div
          className="absolute left-[80%] top-[40%] h-20 w-20 sm:h-28 sm:w-28 rounded-full border border-white/5 cursor-pointer z-20"
          style={{
            background: "radial-gradient(circle at 35% 35%, #0ea5e9, #38bdf8, #0369a1, #000)",
            boxShadow: "inset -12px -12px 25px rgba(0,0,0,0.85), 0 0 25px rgba(234,88,12,0.4)",
            pointerEvents: "auto",
          }}
          animate={{ x: [0, -40, 0], y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          whileHover={{ scale: 1.2, boxShadow: "inset -12px -12px 25px rgba(0,0,0,0.85), 0 0 45px rgba(234,88,12,0.7)" }}
          drag
          dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
          dragElastic={0.2}
        />

        {/* Planet 3 - Teal/Cyan (Ice giant) */}
        <motion.div
          className="absolute left-[20%] top-[70%] h-16 w-16 sm:h-24 sm:w-24 rounded-full border border-white/5 cursor-pointer z-20"
          style={{
            background: "radial-gradient(circle at 25% 25%, #a855f7, #9333ea, #4c1d95, #000)",
            boxShadow: "inset -8px -8px 15px rgba(0,0,0,0.8), 0 0 20px rgba(13,148,136,0.3)",
            pointerEvents: "auto",
          }}
          animate={{ x: [0, 30, 0], y: [0, -20, 0], rotate: [0, 25, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          whileHover={{ scale: 1.25, boxShadow: "inset -8px -8px 15px rgba(0,0,0,0.8), 0 0 40px rgba(13,148,136,0.6)" }}
          drag
          dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
          dragElastic={0.2}
        />

        {/* Planet 4 - Indigo/Dark */}
        <motion.div
          className="absolute right-[5%] top-[80%] h-36 w-36 sm:h-48 sm:w-48 rounded-full border border-white/5 opacity-80 cursor-pointer z-20"
          style={{
            background: "radial-gradient(circle at 20% 20%, #0ea5e9, #3730a3, #050505)",
            boxShadow: "inset -15px -15px 30px rgba(0,0,0,0.9), 0 0 30px rgba(99,102,241,0.2)",
            pointerEvents: "auto",
          }}
          animate={{ y: [0, 40, 0], rotate: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.1, opacity: 1, boxShadow: "inset -15px -15px 30px rgba(0,0,0,0.9), 0 0 50px rgba(99,102,241,0.5)" }}
          drag
          dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
          dragElastic={0.2}
        />

        {/* Planet 5 - Small Distant Moon (Pink/Magenta) */}
        <motion.div
          className="absolute left-[65%] top-[10%] h-10 w-10 sm:h-14 sm:w-14 rounded-full border border-white/10 opacity-60 cursor-pointer z-20"
          style={{
            background: "radial-gradient(circle at 30% 30%, #2dd4bf, #0ea5e9, #1e3a8a, #000)",
            boxShadow: "inset -5px -5px 10px rgba(0,0,0,0.9), 0 0 15px rgba(219,39,119,0.3)",
            pointerEvents: "auto",
          }}
          animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          whileHover={{ scale: 1.3, opacity: 1, boxShadow: "inset -5px -5px 10px rgba(0,0,0,0.9), 0 0 25px rgba(219,39,119,0.7)" }}
          drag
          dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
          dragElastic={0.2}
        />
        </motion.div>
      </div>

      <div className="relative z-10">
        <Navbar />

      {/* ── HERO ── */}
      <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden px-4 pt-16 pb-8 sm:pt-20">
        <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
          >
            <div className="relative h-48 w-48 sm:h-64 sm:w-64 overflow-hidden rounded-full border-4 border-[#0ea5e9]/50 shadow-[0_0_30px_rgba(14,165,233,0.3)]">
              {/* Use uploaded profile image with fallback avatar on load error */}
              <Image
                src={profilePhoto}
                alt="Ashwani Kumar"
                width={256}
                height={256}
                className="h-full w-full object-cover object-top"
                priority
              />
            </div>
          </motion.div>

          <motion.h1
            className="mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Ashwani{" "}
            <span className="bg-gradient-to-r from-[#0ea5e9] to-[#a855f7] bg-clip-text text-transparent">
              Kumar
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto mb-6 max-w-2xl px-2 text-sm leading-relaxed text-[#888] sm:mb-8 sm:px-0 sm:text-base md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            Computer Science Engineering student at LPU passionate about
            Full-Stack Development, Machine Learning, and building impactful
            software solutions.
          </motion.p>

          <motion.div
            className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a
              href="/CV%20(2).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0ea5e9] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#a855f7] hover:shadow-lg hover:shadow-[#0ea5e9]/20 sm:w-auto"
            >
              <Download className="h-4 w-4" />
              View CV
            </a>
            <div className="flex w-full gap-3 sm:w-auto">
              <a
                href="https://linkedin.com/in/ashwani-kumar5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[#333] px-5 py-3 text-sm font-medium transition-all hover:border-[#0ea5e9] hover:text-[#0ea5e9] sm:flex-initial sm:px-6"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com/ashuksmile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[#333] px-5 py-3 text-sm font-medium transition-all hover:border-[#0ea5e9] hover:text-[#0ea5e9] sm:flex-initial sm:px-6"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:bottom-8"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronRight className="h-6 w-6 rotate-90 text-[#555]" />
        </motion.div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-12 sm:py-16 md:px-8 md:py-20 relative z-10" style={{ perspective: 1000 }}>
        <SectionHeading icon={Briefcase} title="About Me" />
        <motion.div
          className="rounded-2xl border border-[#1e293b] bg-[#0f172a]/80 backdrop-blur-sm p-6 md:p-8 cursor-pointer transition-colors hover:border-[#0ea5e9]/50 shadow-lg"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2, z: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          viewport={{ once: true }}
          custom={1}
        >
          <p className="leading-relaxed text-[#aaa] md:text-lg">
            I am a B.Tech Computer Science student at Lovely Professional
            University with a strong foundation in programming, data structures,
            and full-stack development. I have hands-on experience building
            production-grade applications with Next.js, integrating AI services,
            and developing machine learning models. I thrive in collaborative
            environments and love turning complex problems into elegant
            solutions.
          </p>
        </motion.div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-12 sm:py-16 md:px-8 md:py-20" style={{ perspective: 1000 }}>
        <SectionHeading icon={Code2} title="Skills" />
        <motion.div
          className="grid gap-6 sm:grid-cols-2"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              className="rounded-2xl border border-[#1e293b] bg-[#0f172a]/80 backdrop-blur-sm p-6 transition-all hover:border-[#0ea5e9]/50 hover:shadow-lg hover:shadow-[#0ea5e9]/10 cursor-pointer"
              variants={scaleIn}
              whileHover={{ 
                scale: 1.05, 
                rotateY: index % 2 === 0 ? 5 : -5, 
                rotateX: 5,
                z: 30
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#0ea5e9]">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-12 sm:py-16 md:px-8 md:py-20" style={{ perspective: 1000 }}>
        <SectionHeading icon={Wrench} title="Projects" />
        <div className="space-y-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className={`group rounded-2xl border border-[#1e293b] bg-[#0f172a]/80 backdrop-blur-sm p-6 transition-all hover:border-[#0ea5e9]/50 hover:shadow-xl hover:shadow-[#0ea5e9]/10 md:p-8 relative overflow-hidden ${p.link ? "cursor-pointer" : "cursor-default"}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              whileHover={{ 
                scale: 1.02, 
                rotateX: 2,
                rotateY: i % 2 === 0 ? 2 : -2,
                z: 40 
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              viewport={{ once: true }}
              custom={i}
              onClick={() => {
                if (p.link) {
                  window.open(p.link, "_blank", "noopener,noreferrer");
                }
              }}
              onKeyDown={(e) => {
                if (!p.link) return;
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  window.open(p.link, "_blank", "noopener,noreferrer");
                }
              }}
              role={p.link ? "link" : undefined}
              tabIndex={p.link ? 0 : -1}
              aria-label={p.link ? `Open ${p.title} on GitHub` : undefined}
            >
              <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <h3 className={`text-lg font-bold md:text-xl transition-colors ${p.link ? "text-[#e5e7eb] group-hover:text-[#0ea5e9]" : ""}`}>{p.title}</h3>
                  {p.link && (
                    <span
                      title={`Open ${p.title} on GitHub`}
                      className="text-[#0ea5e9] transition-colors group-hover:text-[#a855f7]"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </span>
                  )}
                </div>
                <span className="text-xs font-medium text-[#888]">
                  {p.date}
                </span>
              </div>
              <div className="mb-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <ul className="space-y-2">
                {p.points.map((pt, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-sm leading-relaxed text-[#aaa]"
                  >
                    <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[#0ea5e9]" />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── TRAINING ── */}
      <section id="training" className="mx-auto max-w-6xl px-4 py-12 sm:py-16 md:px-8 md:py-20" style={{ perspective: 1000 }}>
        <SectionHeading icon={BookOpen} title="Training" />
        <motion.div
          className="rounded-2xl border border-[#1e293b] bg-[#0f172a]/80 backdrop-blur-sm p-6 md:p-8 cursor-pointer transition-all hover:border-[#0ea5e9]/50 hover:shadow-lg hover:shadow-[#0ea5e9]/10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          whileHover={{ scale: 1.02, rotateX: 2, rotateY: 1, z: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          viewport={{ once: true }}
          custom={0}
        >
          <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-lg font-bold">
              Data Structures & OOP in C++
            </h3>
            <span className="text-xs font-medium text-[#888]">
              Jun – Jul 2025
            </span>
          </div>
          <p className="mb-4 text-sm text-[#0ea5e9]">
            Lovely Professional University
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm leading-relaxed text-[#aaa]">
              <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[#0ea5e9]" />
              Completed a certified 40-hour training program covering core Data
              Structures (Arrays, Linked Lists, Stacks, Queues, BST, Graphs)
              and Object-Oriented Programming concepts in C++.
            </li>
            <li className="flex items-start gap-2 text-sm leading-relaxed text-[#aaa]">
              <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[#0ea5e9]" />
              Gained hands-on experience through projects like Banking
              Management System, File Encryption Tool, and Stock Prediction
              using Linear Regression.
            </li>
          </ul>
        </motion.div>
      </section>

      {/* ── CERTIFICATES ── */}
      <section
        id="certificates"
        className="mx-auto max-w-6xl px-4 py-12 sm:py-16 md:px-8 md:py-20"
        style={{ perspective: 1000 }}
      >
        <SectionHeading icon={Award} title="Certificates" />
        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {certificates.map((c, index) => (
            <motion.div
              key={c.title}
              className="rounded-2xl border border-[#1e293b] bg-[#0f172a]/80 backdrop-blur-sm p-5 transition-all hover:border-[#0ea5e9]/50 hover:shadow-lg hover:shadow-[#0ea5e9]/10 cursor-pointer"
              variants={scaleIn}
              whileHover={{ 
                scale: 1.05, 
                rotateX: 6,
                rotateY: index % 2 === 0 ? 5 : -5,
                z: 25 
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Award className="mb-3 h-5 w-5 text-[#0ea5e9]" />
              <h3 className="mb-1 text-sm font-semibold leading-snug">
                {c.title}
              </h3>
              <p className="text-xs text-[#888]">
                {c.issuer} &middot; {c.date}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── ACHIEVEMENTS ── */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16 md:px-8 md:py-20" style={{ perspective: 1000 }}>
        <SectionHeading icon={Trophy} title="Achievements" />
        <motion.div
          className="rounded-2xl border border-[#1e293b] bg-[#0f172a]/80 backdrop-blur-sm p-6 md:p-8 cursor-pointer transition-all hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          whileHover={{ scale: 1.02, rotateX: -2, rotateY: 2, z: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          viewport={{ once: true }}
          custom={0}
        >
          <div className="flex items-start gap-3">
            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-yellow-500/10">
              <Trophy className="h-4 w-4 text-yellow-500" />
            </div>
            <div>
              <h3 className="font-semibold">
                5 Stars in C++ Programming on HackerRank
              </h3>
              <p className="mt-1 text-sm text-[#888]">
                Earned through consistent coding challenges.{" "}
                <span className="text-xs text-[#555]">
                  Oct 2023 – Present
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── EDUCATION ── */}
      <section
        id="education"
        className="mx-auto max-w-6xl px-4 py-12 sm:py-16 md:px-8 md:py-20"
        style={{ perspective: 1000 }}
      >
        <SectionHeading icon={GraduationCap} title="Education" />
        <div className="grid gap-5 sm:gap-6">
          {education.map((e, i) => (
            <motion.div
              key={e.institution}
              className="relative rounded-2xl border border-[#1e293b] bg-[#0f172a]/80 backdrop-blur-sm p-5 transition-all hover:border-[#0ea5e9]/50 hover:shadow-lg hover:shadow-[#0ea5e9]/10 sm:p-6 cursor-pointer"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              whileHover={{ 
                scale: 1.02, 
                rotateX: i % 2 === 0 ? 2 : -2,
                rotateY: 1, 
                z: 30 
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              viewport={{ once: true }}
              custom={i}
            >
              <div className="mb-1 flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0ea5e9]/10">
                  <GraduationCap className="h-4 w-4 text-[#0ea5e9]" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="truncate text-base font-bold sm:text-lg">{e.institution}</h3>
                    <span className="shrink-0 text-xs font-medium text-[#888]">
                      {e.date}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-3 space-y-1 pl-12">
                <p className="text-sm text-[#ccc]">{e.degree}</p>
                <p className="text-sm font-semibold text-[#0ea5e9]">{e.score}</p>
                <p className="text-xs text-[#666]">{e.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── LET'S CONNECT ── */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-12 sm:py-16 md:px-8 md:py-20">
        <SectionHeading icon={Mail} title="Let's Connect" />
        <motion.div
          className="flex flex-col items-center justify-center rounded-3xl border border-[#1e293b] bg-gradient-to-b from-[#0f172a]/80 to-[#020617]/80 backdrop-blur-sm p-10 text-center md:py-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <h3 className="mb-4 text-2xl font-bold md:text-4xl">Interested in working together?</h3>
          <p className="mx-auto mb-8 max-w-xl text-[#888] md:text-lg">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <motion.a
            href="mailto:ashwanikumar.contact@gmail.com"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#0ea5e9] px-8 text-sm font-medium text-white transition-all hover:bg-[#a855f7] hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Say Hello
          </motion.a>
        </motion.div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#1e293b] py-10 relative z-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 md:flex-row md:justify-between md:px-8">
          <p className="text-sm text-[#555]">
            &copy; {new Date().getFullYear()} Ashwani Kumar. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/ashwani-kumar5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#555] transition-colors hover:text-[#0ea5e9]"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/ashuksmile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#555] transition-colors hover:text-[#0ea5e9]"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
