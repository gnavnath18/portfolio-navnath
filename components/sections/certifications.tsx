"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { certifications } from "@/data/content";

export function Certifications() {
  return (
    <section id="certifications" className="py-24">
      <div className="container-page">
        <p className="font-mono text-sm text-teal">certification</p>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
          Verified credentials
        </h2>

        <div className="mt-12 grid gap-8">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="grid overflow-hidden rounded-xl border border-ink-line bg-ink-soft md:grid-cols-[1.1fr_0.9fr] light:border-paper-line light:bg-white"
            >
              <div className="flex flex-col justify-center p-8">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-amber/40 px-3 py-1 font-mono text-xs text-amber">
                  <BadgeCheck size={14} />
                  Verified
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold sm:text-2xl">
                  {cert.title}
                </h3>
                <p className="mt-2 text-sm text-paper/60 light:text-ink/60">
                  Issued by {cert.issuer}
                </p>
                <dl className="mt-6 grid grid-cols-2 gap-4 font-mono text-xs">
                  <div>
                    <dt className="text-paper/40 light:text-ink/40">Issued</dt>
                    <dd className="mt-1 text-paper/80 light:text-ink/80">{cert.issued}</dd>
                  </div>
                  <div>
                    <dt className="text-paper/40 light:text-ink/40">Expires</dt>
                    <dd className="mt-1 text-paper/80 light:text-ink/80">{cert.expires}</dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="text-paper/40 light:text-ink/40">Credential ID</dt>
                    <dd className="mt-1 text-paper/80 light:text-ink/80">{cert.credentialId}</dd>
                  </div>
                </dl>
              </div>
              <div className="relative min-h-[260px] border-t border-ink-line bg-paper p-6 md:border-l md:border-t-0 light:border-paper-line">
                <div className="relative h-full w-full overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
