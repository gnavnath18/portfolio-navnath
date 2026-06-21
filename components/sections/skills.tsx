"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/content";

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container-page">
        <p className="font-mono text-sm text-teal">skills</p>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
          I build with
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.08, duration: 0.5 }}
              className="group rounded-lg border border-ink-line bg-ink-soft p-6 transition-colors hover:border-amber/50 light:border-paper-line light:bg-white"
            >
              <h3 className="font-display text-lg font-semibold">{group.title}</h3>
              <div className="mt-5 space-y-4">
                {group.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between font-mono text-xs">
                      <span className="text-paper/80 light:text-ink/80">{skill.name}</span>
                      <span className="text-paper/40 light:text-ink/40">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink-line light:bg-paper-line">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: si * 0.08 }}
                        className="h-full rounded-full bg-gradient-to-r from-teal to-amber"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
