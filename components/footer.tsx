import { site } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-ink-line py-10 light:border-paper-line">
      <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-paper/40 light:text-ink/40">
          © {new Date().getFullYear()} {site.name}.
        </p>
        <p className="font-mono text-xs text-paper/40 light:text-ink/40">
          Designed for clarity, not noise.
        </p>
      </div>
    </footer>
  );
}
