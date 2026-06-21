"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, FolderGit2 } from "lucide-react";
import { site } from "@/data/content";

const responseLines = [
  { k: "status", v: '"200 OK"' },
  { k: "engineer", v: '"Navnath Gite"' },
  { k: "stack", v: '["FastAPI", "PostgreSQL", "LangChain"]' },
  { k: "specialty", v: '"RAG systems & GenAI applications"' },
  { k: "certified", v: '"Databricks GenAI Engineer Associate"' },
  { k: "availability", v: '"open_for_freelance"' },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-grid-dark bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)] light:bg-grid-light"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-teal/10 blur-3xl"
        aria-hidden
      />

      <div className="container-page relative grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink-line px-3 py-1 font-mono text-xs text-teal light:border-paper-line"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            {site.tagline}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-balance font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Building scalable backend systems and{" "}
            <span className="text-amber">intelligent AI</span> solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-balance text-base text-paper/70 sm:text-lg light:text-ink/70"
          >
            I develop production-ready APIs, AI applications, Retrieval-Augmented
            Generation systems, and machine learning solutions using Python,
            FastAPI and Generative AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-md bg-amber px-5 py-3 font-mono text-sm font-semibold text-ink transition-transform hover:scale-105"
            >
              Hire Me
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md border border-ink-line px-5 py-3 font-mono text-sm font-medium text-paper transition-colors hover:border-teal hover:text-teal light:border-paper-line light:text-ink"
            >
              <FolderGit2 size={16} />
              View Projects
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-2 py-3 font-mono text-sm text-paper/60 transition-colors hover:text-paper light:text-ink/60 light:hover:text-ink"
            >
              <Download size={16} />
              Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-xl border border-ink-line bg-ink-soft shadow-2xl shadow-black/40 light:border-paper-line light:bg-white">
            <div className="flex items-center gap-2 border-b border-ink-line px-4 py-3 light:border-paper-line">
              <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
              <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
              <span className="h-3 w-3 rounded-full bg-[#28C840]" />
              <span className="ml-3 font-mono text-xs text-paper/40 light:text-ink/40">
                GET /api/v1/engineer
              </span>
            </div>
            <pre className="px-5 py-5 font-mono text-[13px] leading-7 text-paper/90 light:text-ink/90">
              <span className="text-paper/40 light:text-ink/40">{"{"}</span>
              {"\n"}
              {responseLines.map((line, i) => (
                <motion.span
                  key={line.k}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + i * 0.15 }}
                  className="block"
                >
                  {"  "}
                  <span className="text-teal">{line.k}</span>
                  <span className="text-paper/40 light:text-ink/40">: </span>
                  <span className="text-amber">{line.v}</span>
                  {i < responseLines.length - 1 && (
                    <span className="text-paper/40 light:text-ink/40">,</span>
                  )}
                </motion.span>
              ))}
              <span className="text-paper/40 light:text-ink/40">{"}"}</span>
              <span className="ml-0.5 inline-block h-4 w-2 animate-blink bg-amber align-middle" />
            </pre>
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-lg border border-ink-line bg-ink-soft px-4 py-2.5 font-mono text-xs text-paper/70 shadow-xl sm:block light:border-paper-line light:bg-white light:text-ink/70">
            <span className="text-teal">●</span> 200ms response, every time
          </div>
        </motion.div>
      </div>
    </section>
  );
}
