import { techStack } from "@/data/content";

export function TechStack() {
  const items = [...techStack, ...techStack];
  return (
    <section className="border-y border-ink-line py-12 light:border-paper-line">
      <div className="container-page mb-6">
        <p className="font-mono text-sm text-teal">tech stack</p>
      </div>
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee gap-12">
          {items.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="font-display text-2xl font-semibold text-paper/30 light:text-ink/25"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
