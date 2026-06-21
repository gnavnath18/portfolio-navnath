import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { blogPosts, site } from "@/data/content";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return {};

  return {
    title: `${post.title} | ${site.name}`,
    description: post.excerpt,
    alternates: {
      canonical: `${site.url}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <article className="container-page py-32">
      <Link
        href="/#blog"
        className="inline-flex items-center gap-2 font-mono text-sm text-teal"
      >
        <ArrowLeft size={16} /> Back to articles
      </Link>

      <p className="mt-8 font-mono text-xs text-paper/40">
        {new Date(post.date).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </p>

      <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
        {post.title}
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper/70">
        {post.excerpt}
      </p>

      <p className="mt-10 max-w-2xl text-sm text-paper/50">
        Full article coming soon. In the meantime, reach out via the contact
        section if you have questions on this topic.
      </p>
    </article>
  );
}