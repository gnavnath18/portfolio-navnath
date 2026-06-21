"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/content";

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="container-page">
        <p className="font-mono text-sm text-teal">testimonials</p>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
          What clients say
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-lg border border-ink-line bg-ink-soft p-6 light:border-paper-line light:bg-white"
            >
              <Quote className="text-amber" size={22} />
              <blockquote className="mt-4 text-sm leading-relaxed text-paper/80 light:text-ink/80">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-display text-sm font-semibold">{t.name}</p>
                  <p className="font-mono text-xs text-paper/50 light:text-ink/50">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
