"use client";

import { motion } from "framer-motion";
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
} from "lucide-react";
import { useState } from "react";

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
    <span className="inline-block rounded-full bg-[#1e1e2e] px-3 py-1 text-xs font-medium text-[#a5b4fc] transition-colors hover:bg-[#2a2a3e]">
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
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#6366f1]/10">
        <Icon className="h-5 w-5 text-[#6366f1]" />
      </div>
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
      <div className="ml-4 h-px flex-1 bg-gradient-to-r from-[#6366f1]/30 to-transparent" />
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
      className="fixed top-0 z-50 w-full border-b border-[#222] bg-[#0a0a0a]/80 backdrop-blur-xl"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#" className="text-lg font-bold tracking-tight">
          <span className="text-[#6366f1]">A</span>K
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
            download
            className="ml-2 flex items-center gap-2 rounded-full bg-[#6366f1] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#818cf8]"
          >
            <Download className="h-4 w-4" />
            Download CV
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
          className="border-t border-[#222] bg-[#0a0a0a] px-4 pb-4 md:hidden"
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
            download
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-[#6366f1] px-4 py-2.5 text-sm font-medium text-white"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default function Home() {
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
      link: "https://github.com/ashuksmile",
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
    <div className="overflow-x-hidden">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden px-4 pt-16 pb-8 sm:pt-20">
        {/* Gradient orbs */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-[300px] w-[300px] rounded-full bg-[#6366f1]/10 blur-[100px] md:-left-40 md:-top-40 md:h-[500px] md:w-[500px] md:blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-[250px] w-[250px] rounded-full bg-[#818cf8]/8 blur-[80px] md:-bottom-40 md:-right-40 md:h-[400px] md:w-[400px] md:blur-[100px]" />

        <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
          <motion.h1
            className="mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Ashwani{" "}
            <span className="bg-gradient-to-r from-[#6366f1] to-[#818cf8] bg-clip-text text-transparent">
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
              download
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#6366f1] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#818cf8] hover:shadow-lg hover:shadow-[#6366f1]/20 sm:w-auto"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
            <div className="flex w-full gap-3 sm:w-auto">
              <a
                href="https://linkedin.com/in/ashwani-kumar5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[#333] px-5 py-3 text-sm font-medium transition-all hover:border-[#6366f1] hover:text-[#6366f1] sm:flex-initial sm:px-6"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com/ashuksmile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[#333] px-5 py-3 text-sm font-medium transition-all hover:border-[#6366f1] hover:text-[#6366f1] sm:flex-initial sm:px-6"
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
      <section id="about" className="mx-auto max-w-6xl px-4 py-12 sm:py-16 md:px-8 md:py-20">
        <SectionHeading icon={Briefcase} title="About Me" />
        <motion.div
          className="rounded-2xl border border-[#222] bg-[#111] p-6 md:p-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
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
      <section id="skills" className="mx-auto max-w-6xl px-4 py-12 sm:py-16 md:px-8 md:py-20">
        <SectionHeading icon={Code2} title="Skills" />
        <motion.div
          className="grid gap-6 sm:grid-cols-2"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              className="rounded-2xl border border-[#222] bg-[#111] p-6 transition-colors hover:border-[#6366f1]/30"
              variants={scaleIn}
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#6366f1]">
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
      <section id="projects" className="mx-auto max-w-6xl px-4 py-12 sm:py-16 md:px-8 md:py-20">
        <SectionHeading icon={Wrench} title="Projects" />
        <div className="space-y-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="group rounded-2xl border border-[#222] bg-[#111] p-6 transition-all hover:border-[#6366f1]/30 md:p-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-bold md:text-xl">{p.title}</h3>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6366f1] transition-colors hover:text-[#818cf8]"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
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
                    <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[#6366f1]" />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── TRAINING ── */}
      <section id="training" className="mx-auto max-w-6xl px-4 py-12 sm:py-16 md:px-8 md:py-20">
        <SectionHeading icon={BookOpen} title="Training" />
        <motion.div
          className="rounded-2xl border border-[#222] bg-[#111] p-6 md:p-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
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
          <p className="mb-4 text-sm text-[#6366f1]">
            Lovely Professional University
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm leading-relaxed text-[#aaa]">
              <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[#6366f1]" />
              Completed a certified 40-hour training program covering core Data
              Structures (Arrays, Linked Lists, Stacks, Queues, BST, Graphs)
              and Object-Oriented Programming concepts in C++.
            </li>
            <li className="flex items-start gap-2 text-sm leading-relaxed text-[#aaa]">
              <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[#6366f1]" />
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
      >
        <SectionHeading icon={Award} title="Certificates" />
        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {certificates.map((c) => (
            <motion.div
              key={c.title}
              className="rounded-2xl border border-[#222] bg-[#111] p-5 transition-all hover:border-[#6366f1]/30"
              variants={scaleIn}
            >
              <Award className="mb-3 h-5 w-5 text-[#6366f1]" />
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
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16 md:px-8 md:py-20">
        <SectionHeading icon={Trophy} title="Achievements" />
        <motion.div
          className="rounded-2xl border border-[#222] bg-[#111] p-6 md:p-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
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
      >
        <SectionHeading icon={GraduationCap} title="Education" />
        <div className="grid gap-5 sm:gap-6">
          {education.map((e, i) => (
            <motion.div
              key={e.institution}
              className="relative rounded-2xl border border-[#222] bg-[#111] p-5 transition-all hover:border-[#6366f1]/30 sm:p-6"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <div className="mb-1 flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#6366f1]/10">
                  <GraduationCap className="h-4 w-4 text-[#6366f1]" />
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
                <p className="text-sm font-semibold text-[#6366f1]">{e.score}</p>
                <p className="text-xs text-[#666]">{e.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#222] py-10">
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
              className="text-[#555] transition-colors hover:text-[#6366f1]"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/ashuksmile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#555] transition-colors hover:text-[#6366f1]"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
