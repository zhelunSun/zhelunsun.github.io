// src/components/PostDistributionLinks.tsx
// Shown at the bottom of each blog post. This site is the canonical source;
// these links point to the cross-platform distributions (X, 知乎, 公众号, 小红书)
// for readers who prefer those platforms. Empty links are hidden.

import { BlogMeta } from "@/lib/blog";

export default function PostDistributionLinks({
  post,
}: {
  post: Pick<BlogMeta, "distribution" | "slug">;
}) {
  const links: { label: string; href: string | undefined }[] = [
    { label: "X / Twitter", href: post.distribution?.x },
    { label: "知乎 Zhihu", href: post.distribution?.zhihu },
    { label: "公众号 WeChat", href: post.distribution?.wechat },
    { label: "小红书 Xiaohongshu", href: post.distribution?.xiaohongshu },
  ];

  const active = links.filter((l): l is { label: string; href: string } => !!l.href);
  if (active.length === 0) return null;

  return (
    <section className="mt-12 pt-6 border-t border-[var(--color-border)]">
      <p className="text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-3">
        Also published on
      </p>
      <div className="flex flex-wrap gap-2">
        {active.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="badge"
          >
            {l.label}
          </a>
        ))}
      </div>
    </section>
  );
}
