// src/lib/blog.ts
// Build-time content loader for the blog. Reads Markdown/MDX files from
// content/blog/, parses YAML frontmatter, and exposes typed accessors.
// All functions run on the server (Node fs) at build time — fully static.

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface BlogMeta {
  slug: string;
  title: string;
  date: string; // ISO date, e.g. "2026-06-15"
  excerpt: string;
  tags: string[];
  /** Optional distribution links — filled in per post once published on X/Zhihu/公众号. */
  distribution?: {
    x?: string;
    zhihu?: string;
    wechat?: string;
    xiaohongshu?: string;
  };
}

export interface BlogPost extends BlogMeta {
  /** Raw MDX content string (to be compiled by next-mdx-remote). */
  content: string;
  /** Estimated reading time in minutes. */
  readingTime: number;
}

/**
 * Get metadata for all posts, sorted newest-first by date.
 */
export function getSortedPosts(): BlogMeta[] {
  const slugs = getAllSlugs();
  const posts = slugs.map((slug) => {
    const { meta } = readPost(slug);
    return meta;
  });
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

/**
 * Get a single post (metadata + raw content) by slug.
 * Returns null if the slug does not exist.
 */
export function getPost(slug: string): BlogPost | null {
  if (!getAllSlugs().includes(slug)) return null;
  const { meta, content } = readPost(slug);
  const wordCount = content.split(/\s+/).filter(Boolean).length;
  const readingTime = Math.max(1, Math.round(wordCount / 200));
  return { ...meta, content, readingTime };
}

/**
 * All slugs (filenames without extension) in content/blog/.
 * Used by generateStaticParams to pre-render every post.
 */
export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => file.replace(/\.mdx?$/, ""));
}

/** Internal: read + frontmatter-parse a single post file. */
function readPost(slug: string): { meta: BlogMeta; content: string } {
  // Prefer .mdx, fall back to .md
  const mdxPath = path.join(BLOG_DIR, `${slug}.mdx`);
  const mdPath = path.join(BLOG_DIR, `${slug}.md`);
  const fullPath = fs.existsSync(mdxPath) ? mdxPath : mdPath;
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  return {
    meta: {
      slug,
      title: String(data.title ?? slug),
      date: String(data.date ?? "1970-01-01"),
      excerpt: String(data.excerpt ?? ""),
      tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
      distribution: data.distribution,
    },
    content,
  };
}
