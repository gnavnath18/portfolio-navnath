"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/content";

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container-page">
        <p className="font-mono text-sm text-teal">projects</p>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
          Selected work
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`group overflow-hidden rounded-xl border border-ink-line bg-ink-soft transition-colors hover:border-teal/50 light:border-paper-line light:bg-white ${
                project.featured ? "lg:col-span-1" : "lg:col-span-2"
              }`}
            >
              <div className="relative aspect-video overflow-hidden border-b border-ink-line light:border-paper-line">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/70 light:text-ink/70">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-ink-line px-3 py-1 font-mono text-xs text-amber light:border-paper-line"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
