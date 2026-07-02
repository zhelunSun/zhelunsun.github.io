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
      style={{ paddingTop: "calc(var(--nav-height) + 2.5rem)", paddingBottom: "4rem" }}
    >
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full">
        {/* Avatar — portrait aspect ratio so the photo isn't cropped at the head */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="shrink-0"
        >
          <div className="relative w-48 h-[15rem] md:w-56 md:h-[17.5rem] rounded-2xl bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-bg-card)] border-2 border-[var(--color-border)] overflow-hidden shadow-sm">
            <Image
              src="/assets/zhelun-portrait.jpg"
              alt={`Portrait of ${profile.name}`}
              fill
              className="object-cover object-[center_15%]"
              priority
              sizes="(max-width: 768px) 12rem, 14rem"
            />
          </div>
        </motion.div>

        {/* Bio content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-3 text-center md:text-left"
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

          <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-xl text-[15px]">
            {profile.bio}
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3 mt-3 justify-center md:justify-start">
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
