"use client";

import { motion } from "framer-motion";
import { Rss, ArrowRight } from "lucide-react";

export default function Blog() {
  return (
    <section id="blog" className="section-spacing">
      <div className="section-container">
        <h2 className="section-title">Tech Blog</h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card text-center py-12"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center">
              <Rss size={24} className="text-[var(--color-accent)]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-1">
                Coming Soon
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] max-w-md mx-auto">
                I&apos;m preparing in-depth posts on LLM agents for scientific
                workflows, remote sensing automation, and thoughts at the
                intersection of AI and geospatial analysis.
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs text-[var(--color-text-muted)]">
              <span>Stay tuned</span>
              <ArrowRight size={12} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
