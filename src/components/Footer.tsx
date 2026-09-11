"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const { identity } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--bg-subtle)] border-t border-[var(--border-color)] py-10 font-mono text-xs text-[var(--text-primary)]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[var(--border-subtle)]">
          {/* Brand & Descriptor */}
          <div>
            <div className="font-bold text-sm sm:text-base tracking-wider uppercase flex items-center gap-2 mb-1.5">
              <span>{identity.name}</span>
              <span className="text-[var(--accent-emerald)]">/</span>
              <span className="text-[var(--text-secondary)]">@{identity.handle}</span>
            </div>
            <p className="text-[0.68rem] text-[var(--text-secondary)] max-w-md leading-relaxed">
              Cybersecurity Researcher &amp; Founder of BSides Vadodara. Dedicated to offensive security, AI defense, and community empowerment.
            </p>
          </div>

          {/* Quick Links & Back to Top */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={identity.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="b-tag text-[0.6rem]"
            >
              LINKEDIN ↗
            </a>
            <a
              href={identity.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="b-tag text-[0.6rem]"
            >
              GITHUB ↗
            </a>
            <a
              href={identity.social.bsidesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="b-tag b-tag-emerald text-[0.6rem]"
            >
              BSIDES VADODARA ↗
            </a>
            <button
              onClick={scrollToTop}
              className="btn-brutalist cursor-pointer"
              aria-label="Scroll to top of page"
            >
              <span className="btn-tab">↑</span>
              <span className="btn-body text-[0.58rem]">TOP</span>
            </button>
          </div>
        </div>

        {/* Bottom Legal / Telemetry Line */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[0.62rem] text-[var(--text-secondary)]">
          <div>
            © {new Date().getFullYear()} Krish Sharma. Built with Next.js, TypeScript &amp; Tailwind CSS.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-emerald)] inline-block" />
            <span>SECURITY LEVEL: ZERO-TRUST // ETHICAL PRAXIS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
