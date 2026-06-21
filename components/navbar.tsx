"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all",
        scrolled
          ? "border-b border-ink-line/80 bg-ink/80 backdrop-blur-md light:bg-paper/80 light:border-paper-line"
          : "bg-transparent"
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-lg font-bold tracking-tight">
          NG<span className="text-amber">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-sm text-paper/70 transition-colors hover:text-amber light:text-ink/70"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href="#contact"
            className="rounded-md bg-amber px-4 py-2 font-mono text-sm font-medium text-ink transition-transform hover:scale-105"
          >
            Hire Me
          </a>
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="border-t border-ink-line bg-ink md:hidden light:bg-paper light:border-paper-line"
        >
          <ul className="container-page flex flex-col gap-1 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 font-mono text-sm text-paper/80 light:text-ink/80"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="flex items-center justify-between pt-2">
              <ThemeToggle />
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-md bg-amber px-4 py-2 font-mono text-sm font-medium text-ink"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
}
