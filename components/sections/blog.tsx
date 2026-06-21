"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/data/content";

export function Blog() {
  return (
    <section id="blog" className="py-24">
      <div className="container-page">
        <p className="font-mono text-sm text-teal">writing</p>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
          Latest articles
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {blogPosts.map((post, i) => (
            <motion.a
              key={post.slug}
              href={`/blog/${post.slug}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="group flex items-start justify-between gap-4 rounded-lg border border-ink-line bg-ink-soft p-6 transition-colors hover:border-teal/50 light:border-paper-line light:bg-white"
            >
              <div>
                <p className="font-mono text-xs text-paper/40 light:text-ink/40">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
                <h3 className="mt-2 font-display text-base font-semibold">{post.title}</h3>
                <p className="mt-2 text-sm text-paper/60 light:text-ink/60">{post.excerpt}</p>
              </div>
              <ArrowUpRight
                size={18}
                className="mt-1 shrink-0 text-paper/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber light:text-ink/40"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
