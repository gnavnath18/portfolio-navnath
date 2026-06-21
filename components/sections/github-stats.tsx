"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";

const GITHUB_USERNAME = "navnathgite"; // placeholder — replace with real GitHub username

export function GithubStats() {
  return (
    <section className="py-24">
      <div className="container-page">
        <p className="font-mono text-sm text-teal">github</p>
        <h2 className="mt-3 flex items-center gap-3 font-display text-3xl font-bold sm:text-4xl">
          <Github size={28} /> Activity
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 grid gap-6 lg:grid-cols-2"
        >
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=transparent&hide_border=true&title_color=FFB72B&icon_color=00C2A8&text_color=E7EAEE`}
            alt="GitHub contribution stats"
            loading="lazy"
            className="w-full rounded-lg border border-ink-line light:border-paper-line"
          />
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=transparent&hide_border=true&title_color=FFB72B&text_color=E7EAEE`}
            alt="Most used languages"
            loading="lazy"
            className="w-full rounded-lg border border-ink-line light:border-paper-line"
          />
          <img
            src={`https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USERNAME}&theme=react-dark&hide_border=true&bg_color=00000000&color=E7EAEE&line=FFB72B&point=00C2A8`}
            alt="GitHub activity graph"
            loading="lazy"
            className="w-full rounded-lg border border-ink-line lg:col-span-2 light:border-paper-line"
          />
        </motion.div>
      </div>
    </section>
  );
}
