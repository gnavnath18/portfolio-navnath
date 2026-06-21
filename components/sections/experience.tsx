"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/content";

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container-page">
        <p className="font-mono text-sm text-teal">journey</p>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
          Learning timeline
        </h2>

        <div className="relative mt-14 ml-3 space-y-10 border-l border-ink-line pl-8 light:border-paper-line">
          {experience.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative"
            >
              <span className="absolute -left-[2.45rem] top-1 h-3 w-3 rounded-full border-2 border-amber bg-ink light:bg-paper" />
              <p className="font-mono text-xs text-teal">{item.year}</p>
              <h3 className="mt-1 font-display text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 max-w-2xl text-sm text-paper/60 light:text-ink/60">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
