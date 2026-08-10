"use client";

import { motion } from "framer-motion";
import { publications, type Publication } from "@/data/publications";
import { FileText } from "lucide-react";

function PubCard({ pub, index }: { pub: Publication; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="glass-card group"
    >
      <div className="flex flex-col gap-2">
        {/* Title */}
        <h3 className="text-[15px] font-semibold text-[var(--color-text-primary)] leading-snug group-hover:text-[var(--color-accent)] transition-colors">
          {pub.citation}
        </h3>

        {/* Action buttons */}
        <div className="flex items-center gap-2 mt-1 flex-wrap">
          {pub.role === "first_author" && (
            <span className="badge text-[11px]">First Author</span>
          )}
          {pub.url && (
            <a
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="badge hover:bg-[var(--color-accent)]/20 transition-colors"
            >
              <FileText size={12} />
              Paper
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Publications() {
  const firstAuthor = publications.filter((p) => p.role === "first_author");
  const coAuthor = publications.filter((p) => p.role === "co_author");

  return (
    <section id="publications" className="section-spacing">
      <div className="section-container">
        <h2 className="section-title">Publications</h2>

        {/* First-author papers */}
        {firstAuthor.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-4">
              First Author
            </h3>
            <div className="flex flex-col gap-4">
              {firstAuthor.map((pub, i) => (
                <PubCard key={pub.id} pub={pub} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* Co-author papers */}
        {coAuthor.length > 0 && (
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] font-semibold mb-4">
              Co-Author
            </h3>
            <div className="flex flex-col gap-4">
              {coAuthor.map((pub, i) => (
                <PubCard
                  key={pub.id}
                  pub={pub}
                  index={i + firstAuthor.length}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
