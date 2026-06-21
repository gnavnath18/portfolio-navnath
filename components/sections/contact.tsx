"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { site } from "@/data/content";

// Replace with your real Formspree form ID: https://formspree.io
const FORMSPREE_ENDPOINT = "https://formspree.io/f/your_form_id";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="font-mono text-sm text-teal">contact</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Let&apos;s build something
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-paper/60 light:text-ink/60">
            Open to freelance backend, RAG/GenAI application work, and Python
            training. Reach out directly or use the form.
          </p>

          <div className="mt-8 space-y-3 font-mono text-sm">
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-3 text-paper/70 transition-colors hover:text-amber light:text-ink/70"
            >
              <Mail size={16} /> {site.email}
            </a>
            <a
              href={site.social.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-paper/70 transition-colors hover:text-amber light:text-ink/70"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-paper/70 transition-colors hover:text-amber light:text-ink/70"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="space-y-4 rounded-xl border border-ink-line bg-ink-soft p-6 light:border-paper-line light:bg-white"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              required
              name="name"
              placeholder="Your name"
              className="rounded-md border border-ink-line bg-transparent px-4 py-3 text-sm outline-none focus:border-amber light:border-paper-line"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Your email"
              className="rounded-md border border-ink-line bg-transparent px-4 py-3 text-sm outline-none focus:border-amber light:border-paper-line"
            />
          </div>
          <input
            name="subject"
            placeholder="Subject"
            className="w-full rounded-md border border-ink-line bg-transparent px-4 py-3 text-sm outline-none focus:border-amber light:border-paper-line"
          />
          <textarea
            required
            name="message"
            rows={5}
            placeholder="Tell me about your project"
            className="w-full rounded-md border border-ink-line bg-transparent px-4 py-3 text-sm outline-none focus:border-amber light:border-paper-line"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-amber px-5 py-3 font-mono text-sm font-semibold text-ink transition-transform hover:scale-[1.02] disabled:opacity-60 sm:w-auto"
          >
            <Send size={16} />
            {status === "sending" ? "Sending..." : "Send message"}
          </button>
          {status === "sent" && (
            <p className="font-mono text-xs text-teal">Message sent — I&apos;ll reply soon.</p>
          )}
          {status === "error" && (
            <p className="font-mono text-xs text-red-400">
              Something went wrong. Email me directly instead.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
