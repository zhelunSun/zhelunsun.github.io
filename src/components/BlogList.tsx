// src/components/BlogList.tsx
// Full list of posts — used on /blog

import { BlogMeta } from "@/lib/blog";
import BlogPostCard from "./BlogPostCard";

export default function BlogList({ posts }: { posts: BlogMeta[] }) {
  if (posts.length === 0) {
    return (
      <p className="text-[var(--color-text-muted)] italic">
        No posts yet. Check back soon.
      </p>
    );
  }
  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <BlogPostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
