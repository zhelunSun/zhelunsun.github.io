// src/components/BlogPostCard.tsx
// Card used in both the homepage "Writing" preview and the /blog list page.

import Link from "next/link";
import { BlogMeta } from "@/lib/blog";

export default function BlogPostCard({ post }: { post: BlogMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}/`}
      className="glass-card block group"
      aria-label={`Read: ${post.title}`}
    >
      <div className="flex flex-col gap-2">
        <div className="article-meta">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
          {post.tags.length > 0 && (
            <>
              <span className="article-meta-dot" />
              <span>{post.tags.slice(0, 2).join(" · ")}</span>
            </>
          )}
        </div>

        <h3 className="text-lg font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors leading-snug">
          {post.title}
        </h3>

        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}
