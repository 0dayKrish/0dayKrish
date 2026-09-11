"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import { CyberRadar } from "./ui/CyberRadar";

export function Hero() {
  const { identity } = portfolioData;
  const [uptimeStr, setUptimeStr] = useState("000d 00h 00m 00s");

  useEffect(() => {
    const startDate = new Date(identity.uptimeDate).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = Math.max(0, now - startDate);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      const pad = (n: number) => n.toString().padStart(2, "0");
      setUptimeStr(`${days.toString().padStart(3, "0")}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [identity.uptimeDate]);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-20 pb-12 sm:pt-24 sm:pb-16 overflow-hidden border-b border-[var(--border-color)]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 w-full">
        {/* Top Status Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-2 border-b border-[var(--border-subtle)] text-[0.62rem] font-mono tracking-widest text-[var(--text-secondary)]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-emerald)] animate-pulse-glow inline-block" />
            <span className="text-[var(--text-primary)] font-bold">STATUS: {identity.status}</span>
          </div>
          <div className="flex items-center gap-4">
            <span>HANDLE: <span className="text-[var(--text-primary)] font-bold">@{identity.handle}</span></span>
            <span className="hidden md:inline">LOC: {identity.location}</span>
          </div>
        </div>

        {/* Main Hero Split */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12 xl:gap-16">
          {/* Left Hero Content */}
          <div className="flex-1 min-w-0">
            {/* Monospace Identifier */}
            <div className="inline-flex items-center gap-2 mb-3 border border-[var(--border-color)] bg-[var(--bg-subtle)] px-2.5 py-1 text-[0.62rem] font-mono tracking-widest text-[var(--text-primary)]">
              <span className="text-[var(--accent-emerald)] font-bold">01 // IDENTITY</span>
              <span>SECURITY RESEARCHER &amp; COMMUNITY BUILDER</span>
            </div>

            {/* Huge Brutalist Title */}
            <h1 className="font-mono font-bold leading-none tracking-tight select-none text-[clamp(2.8rem,7.5vw,6.5rem)] text-[var(--text-primary)] mb-2">
              KRISH.
            </h1>
            <h1 className="font-mono font-bold leading-none tracking-tight select-none text-[clamp(2.8rem,7.5vw,6.5rem)] text-[var(--text-primary)] mb-5">
              SHARMA.
            </h1>

            {/* Positioning Subheading */}
            <div className="font-mono font-bold text-[clamp(1.1rem,2.5vw,1.9rem)] leading-snug tracking-tight text-[var(--text-primary)] mb-4">
              CYBERSECURITY RESEARCHER &amp;{" "}
              <span className="text-[var(--accent-emerald)] block sm:inline">COMMUNITY BUILDER.</span>
            </div>

            {/* Confident, Short Supporting Copy */}
            <p className="font-mono text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed tracking-wide mb-6 max-w-xl">
              {identity.tagline}
            </p>

            {/* Quick Profile Links Bar */}
            <div className="flex flex-wrap items-center gap-2 mb-8 text-[0.65rem] font-mono">
              <a
                href={identity.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="b-tag hover:border-[var(--accent-emerald)]"
              >
                LINKEDIN: 0daykrish ↗
              </a>
              <a
                href={identity.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="b-tag hover:border-[var(--accent-emerald)]"
              >
                GITHUB: 0daykrish ↗
              </a>
              <a
                href={identity.social.bsidesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="b-tag b-tag-emerald"
              >
                FOUNDER: BSIDES VADODARA ↗
              </a>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent("open-security-dossier"))}
                className="btn-brutalist border-2 border-[var(--accent-emerald)] shadow-[3px_3px_0px_var(--accent-emerald)] cursor-pointer"
                title="Open Krish Sharma's Security Dossier"
              >
                <span className="btn-tab bg-[var(--accent-emerald)] text-white font-bold">🗎</span>
                <span className="btn-body text-[var(--accent-emerald)] font-bold">OPEN DOSSIER</span>
              </button>
              <a href="#projects" className="btn-brutalist">
                <span className="btn-tab">→</span>
                <span className="btn-body">VIEW WORK</span>
              </a>
              <a href="#vulnerability-hunt" className="btn-brutalist btn-brutalist-outline">
                <span className="btn-tab">⚡</span>
                <span className="btn-body">VULN HUNT</span>
              </a>
              <a href="#research" className="btn-brutalist btn-brutalist-outline">
                <span className="btn-tab">↓</span>
                <span className="btn-body">RESEARCH</span>
              </a>
            </div>

            {/* Metric Highlights Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[var(--border-subtle)] font-mono">
              <div>
                <div className="text-lg sm:text-xl font-bold text-[var(--text-primary)] leading-none">FOUNDER</div>
                <div className="text-[0.58rem] tracking-wider text-[var(--text-secondary)] mt-1">BSIDES VADODARA</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-[var(--accent-emerald)] leading-none">MSec-CAIS</div>
                <div className="text-[0.58rem] tracking-wider text-[var(--text-secondary)] mt-1">AI SECURITY EXPERT</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-[var(--text-primary)] leading-none">OFFENSIVE</div>
                <div className="text-[0.58rem] tracking-wider text-[var(--text-secondary)] mt-1">PENTEST &amp; AUDITING</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-[var(--text-primary)] leading-none">WEB &amp; API</div>
                <div className="text-[0.58rem] tracking-wider text-[var(--text-secondary)] mt-1">RESEARCH &amp; HARDENING</div>
              </div>
            </div>
          </div>

          {/* Right Visual Element */}
          <div className="w-full lg:w-auto flex-shrink-0 flex flex-col items-center lg:items-end">
            <CyberRadar />

            {/* Uptime Box */}
            <div className="w-full max-w-[560px] mt-4 border border-[#0a0a0a] dark:border-[var(--border-color)] bg-[#0a0a0a] dark:bg-[var(--bg-surface)] text-[#f4f3ef] dark:text-[var(--text-primary)] p-3 font-mono flex items-center justify-between gap-3 shadow-[3px_3px_0px_var(--accent-emerald)]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-emerald)] animate-pulse-glow" />
                <span className="text-[0.62rem] tracking-widest text-[#a3a3a3] dark:text-[var(--text-secondary)] font-semibold">
                  COMMUNITY UPTIME
                </span>
              </div>
              <div className="text-[0.72rem] font-bold tracking-wider tabular-nums bg-[#171717] dark:bg-[var(--bg-subtle)] px-2.5 py-1 border border-[#262626] dark:border-[var(--border-color)]">
                <span className="text-[var(--accent-emerald)] mr-1.5">▶</span>
                {uptimeStr}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
