// src/app/blog/[slug]/page.tsx
// Single blog post — static-rendered MDX, single-column long-form.

import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllSlugs, getPost } from "@/lib/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostDistributionLinks from "@/components/PostDistributionLinks";

// Pre-render every post at build time (static export requirement)
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // params is async in Next 15+ App Router
  return params.then((p) => {
    const post = getPost(p.slug);
    if (!post) return {};
    return {
      title: `${post.title} — Sun Zhelun`,
      description: post.excerpt,
    };
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1" style={{ paddingTop: "calc(var(--nav-height) + 3rem)" }}>
        <article className="section-container section-spacing">
          {/* Header */}
          <header className="mb-10" style={{ maxWidth: "var(--max-width-article)", margin: "0 auto 2.5rem" }}>
            <Link
              href="/blog/"
              className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
            >
              ← Writing
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mt-4 mb-3 leading-tight">
              {post.title}
            </h1>
            <div className="article-meta">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="article-meta-dot" />
              <span>{post.readingTime} min read</span>
              {post.tags.length > 0 && (
                <>
                  <span className="article-meta-dot" />
                  <span>{post.tags.join(" · ")}</span>
                </>
              )}
            </div>
          </header>

          {/* MDX body */}
          <div className="prose-editorial">
            <MDXRemote source={post.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
          </div>

          {/* Distribution links (canonical → cross-platform) */}
          <div style={{ maxWidth: "var(--max-width-article)", margin: "0 auto" }}>
            <PostDistributionLinks post={post} />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
