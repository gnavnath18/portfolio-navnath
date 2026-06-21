"use client";

import { motion } from "framer-motion";
import {
  Server,
  Sparkles,
  Workflow,
  BrainCircuit,
  GraduationCap,
  Compass,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/content";

const icons: Record<string, LucideIcon> = {
  Server,
  Sparkles,
  Workflow,
  BrainCircuit,
  GraduationCap,
  Compass,
};

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container-page">
        <p className="font-mono text-sm text-teal">services</p>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
          How I can help
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="rounded-lg border border-ink-line bg-ink-soft p-6 transition-all hover:-translate-y-1 hover:border-amber/50 light:border-paper-line light:bg-white"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-amber/10 text-amber">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-paper/60 light:text-ink/60">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
