// src/components/Blog.tsx
// Homepage "Writing" section — server component (reads filesystem at build time).
// Shows the 3 most recent posts with a "View all" link to /blog.

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getSortedPosts } from "@/lib/blog";
import BlogPostCard from "./BlogPostCard";

export default function Blog() {
  const latest = getSortedPosts().slice(0, 3);

  return (
    <section id="writing" className="section-spacing">
      <div className="section-container">
        <div className="flex items-end justify-between mb-6">
          <h2 className="section-title">Writing</h2>
          {latest.length > 0 && (
            <Link
              href="/blog/"
              className="flex items-center gap-1 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
            >
              View all
              <ArrowRight size={14} />
            </Link>
          )}
        </div>

        {latest.length === 0 ? (
          <div className="glass-card text-center py-12">
            <p className="text-sm text-[var(--color-text-secondary)] max-w-md mx-auto">
              Essays on LLM agents for scientific workflows, remote sensing automation,
              and the intersection of AI and geospatial analysis — coming soon.
            </p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-3">
            {latest.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
