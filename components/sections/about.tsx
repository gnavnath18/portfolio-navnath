"use client";

import { motion } from "framer-motion";
import { stats, education } from "@/data/content";

const interests = [
  "Backend Development",
  "FastAPI Ecosystem",
  "Generative AI",
  "Retrieval-Augmented Generation",
  "Machine Learning",
  "Deep Learning",
  "Teaching Python and Data Science",
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="font-mono text-sm text-teal">about</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Backend by trade, AI by curiosity
          </h2>
          <p className="mt-6 text-base leading-relaxed text-paper/70 light:text-ink/70">
            I&apos;m a backend developer and AI enthusiast passionate about designing
            scalable APIs, database architectures and Generative AI systems.
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {interests.map((item) => (
              <li
                key={item}
                className="rounded-full border border-ink-line px-3 py-1.5 font-mono text-xs text-paper/70 light:border-paper-line light:text-ink/70"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-lg border border-ink-line bg-ink-soft p-5 light:border-paper-line light:bg-white">
            <p className="font-mono text-xs uppercase tracking-wide text-teal">Education</p>
            <p className="mt-2 font-display text-lg font-semibold">{education.degree}</p>
            <p className="mt-1 text-sm text-paper/60 light:text-ink/60">
              {education.school} &middot; {education.score}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-lg border border-ink-line bg-ink-soft p-6 light:border-paper-line light:bg-white"
            >
              <p className="font-display text-3xl font-bold text-amber sm:text-4xl">
                {s.value}
                {s.suffix}
              </p>
              <p className="mt-2 font-mono text-xs text-paper/60 light:text-ink/60">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
