"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ExternalLink, FileText, Code, ArrowUpRight, Image as ImageIcon } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="section-spacing">
      <div className="section-container">
        <h2 className="section-title font-serif">Projects</h2>

        <div className="flex flex-col gap-6">
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
              className="group flex flex-col sm:flex-row gap-6 p-4 -mx-4 rounded-xl hover:bg-[var(--color-bg-secondary)] transition-colors"
            >
              {/* Left Column: Image */}
              <div className="w-full sm:w-1/3 md:w-1/4 shrink-0">
                <div className="aspect-[4/3] sm:aspect-[3/2] rounded-lg border border-[var(--color-border)] overflow-hidden bg-[var(--color-bg-card)] flex items-center justify-center text-[var(--color-text-muted)] p-1 shadow-sm group-hover:shadow transition-shadow">
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover rounded opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                  ) : (
                    <div className="w-full h-full bg-[var(--color-bg-secondary)] flex flex-col items-center justify-center rounded">
                      <ImageIcon size={24} className="mb-2 opacity-30" />
                      <span className="text-[10px] uppercase font-semibold tracking-wider opacity-40">Preview</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="w-full sm:w-2/3 md:w-3/4 flex flex-col pt-1">
                <div className="flex flex-col-reverse sm:flex-row sm:items-start justify-between gap-1 mb-1">
                  <h3 className="text-[1.05rem] font-semibold text-[var(--color-text-primary)] font-serif group-hover:text-[var(--color-accent)] transition-colors flex items-start gap-1">
                    {project.title}
                    <ArrowUpRight
                      size={14}
                      className="shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity text-[var(--color-accent)]"
                    />
                  </h3>
                  <span className="text-xs text-[var(--color-text-muted)] font-mono whitespace-nowrap mt-1 sm:mt-1.5">
                    {project.period}
                  </span>
                </div>

                <p className="text-[14px] text-[var(--color-text-secondary)] leading-relaxed mb-3">
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

                <div className="mt-auto pt-2 flex flex-wrap items-center gap-3 border-t border-[var(--color-border)]/50 pt-3">
                  <div className="flex flex-wrap gap-1.5 mr-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2 py-0.5 rounded bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] border border-[var(--color-border)] shadow-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {project.paperUrl && (
                      <a
                        href={project.paperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="badge"
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
                        className="badge"
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
                        className="badge"
                      >
                        <ExternalLink size={11} />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
