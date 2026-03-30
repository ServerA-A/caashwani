"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Download,
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
import { useEffect, useState, useRef } from "react";
import profilePhoto from "../public/pfp.jpeg";

const heroHeadlineWords = [
  "Ashwani Kumar",
  "a Systems Builder",
  "an Automation-First Developer",
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: "easeOut" as const },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};

const scaleIn = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

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
            href="/cv-latest.pdf?v=20260325"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 flex items-center gap-2 rounded-full bg-[#0ea5e9] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#a855f7]"
          >
            <Download className="h-4 w-4" />
            Open CV
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
            href="/cv-latest.pdf?v=20260325"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-[#0ea5e9] px-4 py-2.5 text-sm font-medium text-white"
          >
            <Download className="h-4 w-4" />
            Open CV
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [typedHeadline, setTypedHeadline] = useState("");
  const [headlineWordIndex, setHeadlineWordIndex] = useState(0);
  const [headlineCharIndex, setHeadlineCharIndex] = useState(0);
  const [isDeletingHeadline, setIsDeletingHeadline] = useState(false);

  useEffect(() => {
    const currentWord = heroHeadlineWords[headlineWordIndex];
    const atWordEnd = headlineCharIndex === currentWord.length;
    const atWordStart = headlineCharIndex === 0;

    const delay = isDeletingHeadline
      ? 45
      : atWordEnd
        ? 1200
        : 80;

    const timeout = setTimeout(() => {
      if (!isDeletingHeadline && atWordEnd) {
        setIsDeletingHeadline(true);
        return;
      }

      if (isDeletingHeadline && atWordStart) {
        setIsDeletingHeadline(false);
        setHeadlineWordIndex((prev) => (prev + 1) % heroHeadlineWords.length);
        return;
      }

      const nextChar = isDeletingHeadline
        ? headlineCharIndex - 1
        : headlineCharIndex + 1;

      setHeadlineCharIndex(nextChar);
      setTypedHeadline(currentWord.slice(0, nextChar));
    }, delay);

    return () => clearTimeout(timeout);
  }, [headlineWordIndex, headlineCharIndex, isDeletingHeadline]);
  
  // Parallax scrolling values for planets and backgrounds
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 800]);

  const arsenalTrackOne = [
    "Python",
    "C/C++",
    "Java",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "SQL",
    "MySQL",
    "PostgreSQL",
  ];

  const arsenalTrackTwo = [
    "Git",
    "GitHub",
    "Docker",
    "Linux",
    "Jupyter",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "TensorFlow",
    "PyTorch",
    "Prisma",
    "Tailwind CSS",
  ];

  const projects = [
    {
      title: "ML Sentiment Analysis Model",
      tech: ["Python", "NumPy", "Pandas", "Scikit-learn"],
      date: "Nov 2025",
      preview: "/project-ml.svg",
      github: "https://github.com/ashuksmile",
      demo: "",
      problem:
        "Teams needed fast sentiment insights from large text datasets, but manual analysis was slow and inconsistent.",
      solution:
        "Built an end-to-end NLP pipeline using TF-IDF + Logistic Regression with clean preprocessing, validation, and tuned hyperparameters.",
      impact:
        "Delivered reliable sentiment classification with measurable precision/recall improvements and a repeatable workflow for future datasets.",
    },
    {
      title: "BankSys - Banking Management System",
      tech: ["C++", "File Handling", "Data Structures"],
      date: "Jun – Jul 2025",
      preview: "/project-banksys.svg",
      github: "https://github.com/ashuksmile",
      demo: "",
      problem:
        "Basic banking workflows were fragmented and error-prone in command-line training projects.",
      solution:
        "Engineered a modular C++ banking system with account lifecycle operations, file persistence, and structured transaction history.",
      impact:
        "Improved reliability and maintainability of core operations while creating a scalable base for additional banking features.",
    },
    {
      title: "Thumbnaily.in",
      tech: ["Next.js", "NextAuth", "Prisma", "PostgreSQL", "Tailwind CSS"],
      date: "May – Sep 2025",
      preview: "/project-thumbnaily.svg",
      github: "https://github.com/ashuksmile/thumbnaily",
      demo: "https://thumbnaily.in",
      problem:
        "Creators needed high-quality thumbnails quickly, but design iteration was time-consuming and skill-heavy.",
      solution:
        "Developed a full-stack AI thumbnail platform with secure auth, prompt-driven generation, and structured asset workflows.",
      impact:
        "Cut thumbnail production time and enabled users to generate polished visual concepts faster with a production-ready architecture.",
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
    <div ref={containerRef} className="relative min-h-screen bg-[#01040d] overflow-x-hidden text-neutral-200">
      {/* ── FLOATING BACKGROUND ── */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Dynamic Star background layer */}
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0 opacity-18">
          {[...Array(24)].map((_, i) => (
            <div
              key={`star-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                opacity: Math.random() * 0.7,
                boxShadow: "0 0 6px rgba(148,163,184,0.45)",
              }}
            />
          ))}
        </motion.div>
        
        {/* Deep space parallax layer */}
        <motion.div style={{ y: y2 }} className="absolute inset-0 z-0 opacity-8">
          {[...Array(12)].map((_, i) => (
            <div
              key={`nebula-star-${i}`}
              className="absolute rounded-full bg-[#38bdf8]"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                filter: "blur(2px)",
                opacity: Math.random() * 0.35,
              }}
            />
          ))}
        </motion.div>

        {/* Constellations lines parallax layer */}
        <motion.div style={{ y: y3 }} className="absolute inset-0 z-0 opacity-5">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="10%" y1="20%" x2="25%" y2="40%" stroke="#334155" strokeWidth="1" />
            <line x1="25%" y1="40%" x2="40%" y2="35%" stroke="#334155" strokeWidth="1" />
            <line x1="60%" y1="70%" x2="80%" y2="60%" stroke="#334155" strokeWidth="1" />
            <line x1="80%" y1="60%" x2="90%" y2="80%" stroke="#334155" strokeWidth="1" />
          </svg>
        </motion.div>

        {/* Nebula/Dust effects */}
        <motion.div
          className="absolute -left-40 top-0 h-[340px] w-[340px] rounded-full bg-[#0ea5e9]/6 blur-[130px]"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-40 bottom-20 h-[380px] w-[380px] rounded-full bg-[#1d4ed8]/5 blur-[130px]"
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

        <motion.div style={{ y: y1 }} className="opacity-20">
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
      <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden px-4 pb-10 pt-24 sm:px-6 sm:pt-28 md:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(14,165,233,0.14)_0%,_rgba(2,6,23,0)_70%)] blur-2xl" />
          <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-cyan-300/5 blur-3xl" />
          <div className="absolute -bottom-20 left-0 h-72 w-72 rounded-full bg-indigo-400/5 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:gap-14">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="max-w-4xl text-balance text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="block">Hello...</span>
              <span className="mt-1 block">I am <span className="text-cyan-200">{typedHeadline}</span>
              <span className="ml-1 inline-block h-[0.95em] w-[2px] animate-pulse bg-cyan-300 align-[-0.1em]" /></span>
            </h1>

            <motion.p
              className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base md:mx-0 md:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              I build practical software systems that connect data, automation, and user needs.
              My focus is shipping scalable solutions that remove friction and solve real problems.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:justify-start"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <a
                href="#projects"
                className="inline-flex h-12 items-center justify-center rounded-full bg-cyan-300 px-7 text-sm font-medium text-slate-950 transition-all hover:bg-cyan-200"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-slate-600 bg-slate-900/40 px-7 text-sm font-medium text-slate-100 transition-all hover:border-slate-400 hover:text-slate-50"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="mx-auto w-full max-w-[220px] sm:max-w-[260px] lg:max-w-[300px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="relative overflow-hidden rounded-full border border-slate-700/70 bg-slate-900/55 p-2 shadow-[0_0_18px_rgba(15,23,42,0.35)] backdrop-blur-xl sm:p-2.5">
              <div className="absolute right-0 top-0 h-12 w-12 rounded-full bg-cyan-300/10 blur-xl" />
              <div className="relative aspect-square overflow-hidden rounded-full border border-slate-700/80">
                <Image
                  src={profilePhoto}
                  alt="Ashwani Kumar"
                  width={340}
                  height={340}
                  className="h-full w-full object-cover object-top"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:bottom-8"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronRight className="h-6 w-6 rotate-90 text-slate-500" />
        </motion.div>
      </section>

      {/* ── ABOUT ── */}
      <motion.section id="about" className="mx-auto max-w-6xl px-4 py-12 sm:py-16 md:px-8 md:py-20 relative z-10" style={{ perspective: 1000 }} variants={sectionReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
        <SectionHeading icon={Briefcase} title="About Me" />
        <motion.div
          className="rounded-2xl border border-[#1e293b] bg-[#0f172a]/80 backdrop-blur-sm p-6 md:p-8 cursor-pointer transition-colors hover:border-[#0ea5e9]/50 shadow-lg"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
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
      </motion.section>

      {/* ── SKILLS ── */}
      <motion.section id="skills" className="mx-auto max-w-6xl px-4 py-12 sm:py-16 md:px-8 md:py-20" style={{ perspective: 1000 }} variants={sectionReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
        <SectionHeading icon={Code2} title="Technical Arsenal" />

        <motion.div
          className="mb-6 space-y-3 overflow-hidden"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={0}
        >
          <p className="text-sm text-[#9fb0c8]">
            Tools, languages, and frameworks I use to build production-ready systems.
          </p>

          <div className="space-y-5 pt-2">
            <div className="relative overflow-hidden rounded-xl">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-[#01040d] via-[#01040d]/95 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-[#01040d] via-[#01040d]/95 to-transparent" />
              <motion.div
                className="flex w-max gap-5"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              >
                {[...arsenalTrackOne, ...arsenalTrackOne].map((item, index) => (
                  <span
                    key={`track-1-${item}-${index}`}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-base font-medium text-cyan-200"
                  >
                    {item}
                  </span>
                ))}
              </motion.div>
            </div>

            <div className="relative overflow-hidden rounded-xl">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-[#01040d] via-[#01040d]/95 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-[#01040d] via-[#01040d]/95 to-transparent" />
              <motion.div
                className="flex w-max gap-5"
                animate={{ x: ["-50%", "0%"] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                {[...arsenalTrackTwo, ...arsenalTrackTwo].map((item, index) => (
                  <span
                    key={`track-2-${item}-${index}`}
                    className="rounded-full border border-[#334155] bg-[#0f172a] px-4 py-2 text-base font-medium text-[#cbd5e1]"
                  >
                    {item}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* ── PROJECTS ── */}
      <motion.section id="projects" className="mx-auto max-w-6xl px-4 py-12 sm:py-16 md:px-8 md:py-20" style={{ perspective: 1000 }} variants={sectionReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
        <SectionHeading icon={Wrench} title="Projects" />
        <motion.div
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((p) => (
            <motion.div
              key={p.title}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#1e293b] bg-[#0f172a]/85 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/45 hover:shadow-xl hover:shadow-cyan-400/10"
              variants={scaleIn}
              whileHover={{ y: -4, scale: 1.005 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="relative aspect-[16/9] overflow-hidden border-b border-[#1e293b]">
                <Image
                  src={p.preview}
                  alt={`${p.title} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/70 via-transparent to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-5 md:p-6">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold leading-tight text-[#e5e7eb] transition-colors group-hover:text-cyan-200 md:text-xl">
                    {p.title}
                  </h3>
                  <span className="shrink-0 rounded-full border border-[#334155] px-2.5 py-1 text-[11px] font-medium text-[#94a3b8]">
                    {p.date}
                  </span>
                </div>

                <div className="mb-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-cyan-500/25 bg-cyan-500/10 px-2.5 py-1 text-xs font-medium text-cyan-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="space-y-3 text-sm leading-relaxed text-[#aab4c3]">
                  <p>
                    <span className="font-semibold text-[#e2e8f0]">Problem:</span> {p.problem}
                  </p>
                  <p>
                    <span className="font-semibold text-[#e2e8f0]">Solution:</span> {p.solution}
                  </p>
                  <p>
                    <span className="font-semibold text-[#e2e8f0]">Impact:</span> {p.impact}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={p.github || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${p.github ? "border border-[#334155] text-[#dbe3ef] hover:border-cyan-400/60 hover:text-cyan-200" : "cursor-not-allowed border border-[#253041] text-[#5f6b80]"}`}
                    onClick={(e) => {
                      if (!p.github) e.preventDefault();
                    }}
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href={p.demo || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${p.demo ? "bg-cyan-400 text-[#082f49] hover:bg-cyan-300" : "cursor-not-allowed bg-[#1e293b] text-[#7b8798]"}`}
                    onClick={(e) => {
                      if (!p.demo) e.preventDefault();
                    }}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ── TRAINING ── */}
      <motion.section id="training" className="mx-auto max-w-6xl px-4 py-12 sm:py-16 md:px-8 md:py-20" style={{ perspective: 1000 }} variants={sectionReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
        <SectionHeading icon={BookOpen} title="Training" />
        <motion.div
          className="rounded-2xl border border-[#1e293b] bg-[#0f172a]/80 backdrop-blur-sm p-6 md:p-8 cursor-pointer transition-all duration-300 hover:border-[#0ea5e9]/45 hover:shadow-lg hover:shadow-[#0ea5e9]/8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
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
      </motion.section>

      {/* ── CERTIFICATES ── */}
      <motion.section
        id="certificates"
        className="mx-auto max-w-6xl px-4 py-12 sm:py-16 md:px-8 md:py-20"
        style={{ perspective: 1000 }}
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
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
              className="rounded-2xl border border-[#1e293b] bg-[#0f172a]/80 backdrop-blur-sm p-5 transition-all duration-300 hover:border-[#0ea5e9]/45 hover:shadow-lg hover:shadow-[#0ea5e9]/8 cursor-pointer"
              variants={scaleIn}
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
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
      </motion.section>

      {/* ── ACHIEVEMENTS ── */}
      <motion.section className="mx-auto max-w-6xl px-4 py-12 sm:py-16 md:px-8 md:py-20" style={{ perspective: 1000 }} variants={sectionReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
        <SectionHeading icon={Trophy} title="Achievements" />
        <motion.div
          className="rounded-2xl border border-[#1e293b] bg-[#0f172a]/80 backdrop-blur-sm p-6 md:p-8 cursor-pointer transition-all duration-300 hover:border-yellow-500/45 hover:shadow-lg hover:shadow-yellow-500/8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
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
      </motion.section>

      {/* ── EDUCATION ── */}
      <motion.section
        id="education"
        className="mx-auto max-w-6xl px-4 py-12 sm:py-16 md:px-8 md:py-20"
        style={{ perspective: 1000 }}
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <SectionHeading icon={GraduationCap} title="Education" />
        <motion.div
          className="grid gap-5 sm:gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {education.map((e, i) => (
            <motion.div
              key={e.institution}
              className="relative rounded-2xl border border-[#1e293b] bg-[#0f172a]/80 backdrop-blur-sm p-5 transition-all duration-300 hover:border-[#0ea5e9]/45 hover:shadow-lg hover:shadow-[#0ea5e9]/8 sm:p-6 cursor-pointer"
              variants={scaleIn}
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
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
        </motion.div>
      </motion.section>

      {/* ── LET'S CONNECT ── */}
      <motion.section id="contact" className="mx-auto max-w-6xl px-4 py-12 sm:py-16 md:px-8 md:py-20" variants={sectionReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
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
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#0ea5e9] px-8 text-sm font-medium text-white transition-all duration-300 hover:bg-[#38bdf8] hover:shadow-[0_0_14px_rgba(56,189,248,0.28)]"
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            Say Hello
          </motion.a>
        </motion.div>
      </motion.section>

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
              title="LinkedIn profile"
              aria-label="LinkedIn profile"
              className="text-[#555] transition-colors hover:text-[#0ea5e9]"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/ashuksmile"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub profile"
              aria-label="GitHub profile"
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
