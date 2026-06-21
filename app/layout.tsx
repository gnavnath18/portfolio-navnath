import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { site } from "@/data/content";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "700"],
});
const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

const title =
  "Navnath Gite | Python & FastAPI Backend Developer, GenAI Engineer, RAG Developer";
const description =
  "Navnath Gite is a backend developer and Databricks Certified GenAI Engineer specializing in Python, FastAPI, RAG systems and machine learning. Available for freelance backend, AI/RAG application development, and Python training.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  keywords: [
    "Navnath Gite",
    "Python Developer",
    "FastAPI Developer",
    "Backend Developer India",
    "GenAI Engineer",
    "RAG Developer",
    "Python Trainer",
    "Machine Learning Freelancer",
    "FastAPI Freelancer",
    "LangChain Developer",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    title,
    description,
    siteName: site.name,
    images: [{ url: "/images/og-image.svg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-image.svg"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: "Backend Developer & GenAI Engineer",
  description,
  email: `mailto:${site.email}`,
  sameAs: [site.social.github, site.social.linkedin],
  knowsAbout: [
    "Python",
    "FastAPI",
    "Backend Development",
    "Generative AI",
    "Retrieval-Augmented Generation",
    "Machine Learning",
    "LangChain",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "AISSMS College of Engineering",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${display.variable} ${body.variable} ${mono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} themes={["dark", "light"]}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
