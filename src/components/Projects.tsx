"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ExternalLink, FileText, Code, ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="section-spacing">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="glass-card flex flex-col justify-between group"
            >
              <div>
                {/* Period */}
                <span className="text-xs text-[var(--color-text-muted)] font-mono">
                  {project.period}
                </span>

                {/* Title */}
                <h3 className="text-base font-semibold text-[var(--color-text-primary)] mt-1 mb-2 group-hover:text-[var(--color-accent)] transition-colors flex items-start gap-1">
                  {project.title}
                  <ArrowUpRight
                    size={14}
                    className="shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity text-[var(--color-accent)]"
                  />
                </h3>

                {/* Description */}
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-4">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-[13px] text-[var(--color-text-muted)] pl-3 relative before:content-[''] before:absolute before:left-0 before:top-[8px] before:w-1 before:h-1 before:rounded-full before:bg-[var(--color-accent)]/40"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom: Tags + Links */}
              <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-[var(--color-border)]">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2 py-0.5 rounded bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
                  >
                    {tag}
                  </span>
                ))}
                <div className="ml-auto flex gap-2">
                  {project.paperUrl && (
                    <a
                      href={project.paperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="badge hover:bg-[var(--color-accent)]/20"
                    >
                      <FileText size={11} />
                      Paper
                    </a>
                  )}
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="badge hover:bg-[var(--color-accent)]/20"
                    >
                      <Code size={11} />
                      Code
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="badge hover:bg-[var(--color-accent)]/20"
                    >
                      <ExternalLink size={11} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
