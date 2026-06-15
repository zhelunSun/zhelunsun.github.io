// src/app/blog/page.tsx
// Blog index — full article list.

import { getSortedPosts } from "@/lib/blog";
import BlogList from "@/components/BlogList";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Writing — Sun Zhelun",
  description:
    "Essays and notes on building LLM-based agent systems for scientific research and remote sensing.",
};

export default function BlogPage() {
  const posts = getSortedPosts();

  return (
    <>
      <Navbar />
      <main className="flex-1" style={{ paddingTop: "calc(var(--nav-height) + 3rem)" }}>
        <div className="section-container section-spacing">
          <header className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)] mb-2">
              Writing
            </h1>
            <p className="text-[var(--color-text-secondary)] text-sm">
              Essays and research notes on agent systems for science and remote sensing.
            </p>
          </header>

          <BlogList posts={posts} />
        </div>
      </main>
      <Footer />
    </>
  );
}
