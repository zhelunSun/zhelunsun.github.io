"use client";

import { motion } from "framer-motion";
import { education } from "@/data/education";
import { MapPin } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="section-spacing">
      <div className="section-container">
        <h2 className="section-title">Education</h2>

        <div className="flex flex-col gap-6">
          {education.map((item, i) => (
            <motion.div
              key={item.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="glass-card flex flex-col sm:flex-row sm:items-start gap-4"
            >
              {/* Left: Period badge */}
              <div className="shrink-0">
                <span className="badge">{item.period}</span>
              </div>

              {/* Right: Details */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                  {item.institution}
                </h3>
                <p className="text-[var(--color-accent)] text-sm font-medium mb-1">
                  {item.degree}
                </p>
                <p className="text-xs text-[var(--color-text-muted)] flex items-center gap-1 mb-2">
                  <MapPin size={12} />
                  {item.location}
                </p>
                {item.notes && (
                  <ul className="space-y-1">
                    {item.notes.map((note) => (
                      <li
                        key={note}
                        className="text-sm text-[var(--color-text-secondary)] pl-3 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-accent)]/30"
                      >
                        {note}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
