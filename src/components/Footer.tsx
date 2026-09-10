"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const { identity } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#dedad1] border-t border-[#0a0a0a] py-10 font-mono text-xs text-[#0a0a0a]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#0a0a0a]/20">
          {/* Brand & Descriptor */}
          <div>
            <div className="font-bold text-sm sm:text-base tracking-wider uppercase flex items-center gap-2 mb-1.5">
              <span>{identity.name}</span>
              <span className="text-[#059669]">/</span>
              <span className="text-[#575757]">@{identity.handle}</span>
            </div>
            <p className="text-[0.68rem] text-[#575757] max-w-md leading-relaxed">
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
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[0.62rem] text-[#575757]">
          <div>
            © {new Date().getFullYear()} Krish Sharma. Built with Next.js, TypeScript &amp; Tailwind CSS.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#059669] inline-block" />
            <span>SECURITY LEVEL: ZERO-TRUST // ETHICAL PRAXIS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
