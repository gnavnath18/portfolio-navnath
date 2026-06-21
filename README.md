# Navnath Gite — Portfolio

portfolio site for a backend developer & GenAI engineer, built with
Next.js 15 (App Router), TypeScript, Tailwind CSS and Framer Motion.

## Stack

- Next.js 15 + TypeScript (App Router, SSR + SSG)
- Tailwind CSS (custom token system — see `tailwind.config.ts`)
- Framer Motion for animation
- lucide-react for icons
- next-themes for dark/light mode
- Formspree for the contact form (client-side fetch, no backend needed)

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Before you ship

1. **Resume** — drop your PDF at `public/resume.pdf` (the Hero "Resume" button
   links to `/resume.pdf`).
2. **Formspree** — create a form at https://formspree.io and replace
   `FORMSPREE_ENDPOINT` in `components/sections/contact.tsx` with your form URL.
3. **GitHub username** — replace `GITHUB_USERNAME` in
   `components/sections/github-stats.tsx` with your real GitHub handle.
4. **Content** — all copy (skills, projects, testimonials, experience, blog
   teasers, social links) lives in `data/content.ts`. Edit there, not in
   components.
5. **Site URL** — update `site.url` in `data/content.ts` to your real domain;
   it feeds `metadata.ts`, `sitemap.ts`, `robots.ts` and JSON-LD.
6. **Images** — `public/images/project-*.svg` and `avatar-*.svg` are
   placeholders. Swap in real screenshots/photos (jpg/png/webp) and update the
   paths in `data/content.ts`.

## Project structure

```
app/
  layout.tsx        Root layout, fonts, metadata, JSON-LD
  page.tsx           Assembles all sections
  globals.css         Tailwind layers + design tokens
  sitemap.ts          Dynamic sitemap.xml
  robots.ts            Dynamic robots.txt
  not-found.tsx        Custom 404
  blog/[slug]/page.tsx  Blog post template (SSG via generateStaticParams)
components/
  navbar.tsx, footer.tsx, theme-toggle.tsx, theme-provider.tsx
  sections/            One file per homepage section
data/
  content.ts           All site copy and structured content
lib/
  utils.ts              cn() class merge helper
public/
  images/                SVG placeholders + databricks-cert.png
  favicon.svg
```

## SEO

- `app/layout.tsx` sets title, description, keywords, canonical, Open Graph,
  Twitter card and a `Person` JSON-LD schema.
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and
  `/robots.txt` automatically at build/request time — no static files needed.
- Each blog post gets its own canonical URL and metadata via
  `generateMetadata` in `app/blog/[slug]/page.tsx`.

## Deployment

### Vercel (recommended — full SSR support)

```bash
npm install -g vercel
vercel login
vercel --prod
```

`vercel.json` is already configured. Vercel auto-detects Next.js.

### Netlify

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

`netlify.toml` uses `@netlify/plugin-nextjs` so SSR, image optimization and
the dynamic sitemap/robots routes all work as on Vercel.

### GitHub Pages (static export only)

GitHub Pages can only serve static files, so this path requires a static
export, which **disables** server-only features (next/image optimization,
on-demand ISR). To deploy here:

1. In `next.config.js`, add:
   ```js
   const nextConfig = {
     output: "export",
     images: { unoptimized: true },
   };
   ```
2. Push to `main` — `.github/workflows/deploy-gh-pages.yml` builds and
   publishes the `out/` folder to GitHub Pages automatically.
3. In your repo settings, set **Pages → Source → GitHub Actions**.

For full SSR/image-optimization behavior, prefer Vercel or Netlify.

## Performance notes

- Fonts load via `next/font/google` (self-hosted, no layout shift).
- All section components are server components except where interactivity
  (forms, theme toggle, motion) requires `"use client"`.
- Images use `next/image` with explicit `sizes` for responsive loading,
  except the GitHub stats images, which are external SVGs and lazy-loaded.
