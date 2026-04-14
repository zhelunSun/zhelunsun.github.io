import { profile } from "@/data/profile";
import { Mail, GraduationCap } from "lucide-react";
import GithubIcon from "./GithubIcon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
      <div className="section-container py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--color-text-muted)]">
        <p>
          © {currentYear} {profile.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {profile.social.github && (
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-accent)] transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>
          )}
          {profile.social.scholar && (
            <a
              href={profile.social.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-accent)] transition-colors"
              aria-label="Google Scholar"
            >
              <GraduationCap size={16} />
            </a>
          )}
          <a
            href={profile.social.email}
            className="hover:text-[var(--color-accent)] transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
