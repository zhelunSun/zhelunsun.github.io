"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { Mail, GraduationCap, MapPin } from "lucide-react";
import GithubIcon from "./GithubIcon";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative flex items-center section-container"
      style={{ paddingTop: "calc(var(--nav-height) + 4rem)", paddingBottom: "5rem" }}
    >
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16 w-full">
        {/* Avatar — larger circle with a top-focused crop to keep the head intact */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="shrink-0"
        >
          <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-bg-card)] border-2 border-[var(--color-border)] overflow-hidden shadow-sm">
            <Image
              src="/assets/zhelun-portrait.jpg"
              alt={`Portrait of ${profile.name}`}
              fill
              className="object-cover object-[center_8%]"
              priority
              sizes="(max-width: 768px) 15rem, 18rem"
            />
          </div>
        </motion.div>

        {/* Bio content — wider so the right side doesn't feel empty */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-4 text-center md:text-left md:flex-1"
        >
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-1">
              {profile.name}
              <span className="ml-2 text-xl text-[var(--color-text-muted)] font-normal">
                {profile.nameChinese}
              </span>
            </h1>
            <p className="text-lg text-[var(--color-accent)] font-medium flex items-center gap-2 justify-center md:justify-start">
              <GraduationCap size={18} />
              {profile.title}, {profile.affiliation}
            </p>
            <p className="text-sm text-[var(--color-text-muted)] flex items-center gap-1.5 mt-1 justify-center md:justify-start">
              <MapPin size={14} />
              {profile.location}
            </p>
          </div>

          <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-2xl text-[15px]">
            {profile.bio}
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3 mt-2 justify-center md:justify-start">
            {profile.social.github && (
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-border-hover)] transition-all"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
            )}
            {profile.social.scholar && (
              <a
                href={profile.social.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-border-hover)] transition-all"
                aria-label="Google Scholar"
              >
                <GraduationCap size={18} />
              </a>
            )}
            <a
              href={profile.social.email}
              className="p-2.5 rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-border-hover)] transition-all"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
