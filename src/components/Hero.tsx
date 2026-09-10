"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import { CyberRadar } from "./ui/CyberRadar";
import { Interactive3DCard } from "./ui/Interactive3DCard";

export function Hero() {
  const { identity } = portfolioData;
  const [uptimeStr, setUptimeStr] = useState("000d 00h 00m 00s");
  const [viewMode, setViewMode] = useState<"3d" | "radar">("3d");

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
      className="relative min-h-[92vh] flex items-center pt-20 pb-12 sm:pt-24 sm:pb-16 overflow-hidden border-b border-[#0a0a0a]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 w-full">
        {/* Top Status Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-2 border-b border-[#0a0a0a]/15 text-[0.62rem] font-mono tracking-widest text-[#575757]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse-glow inline-block" />
            <span className="text-[#0a0a0a] font-bold">STATUS: {identity.status}</span>
          </div>
          <div className="flex items-center gap-4">
            <span>HANDLE: <span className="text-[#0a0a0a] font-bold">@{identity.handle}</span></span>
            <span className="hidden md:inline">LOC: {identity.location}</span>
          </div>
        </div>

        {/* Main Hero Split */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12 xl:gap-16">
          {/* Left Hero Content */}
          <div className="flex-1 min-w-0">
            {/* Monospace Identifier */}
            <div className="inline-flex items-center gap-2 mb-3 border border-[#0a0a0a] bg-[#dedad1] px-2.5 py-1 text-[0.62rem] font-mono tracking-widest text-[#0a0a0a]">
              <span className="text-[#059669] font-bold">01 // IDENTITY</span>
              <span>SECURITY RESEARCHER &amp; COMMUNITY BUILDER</span>
            </div>

            {/* Huge Brutalist Title */}
            <h1 className="font-mono font-bold leading-none tracking-tight select-none text-[clamp(2.8rem,7.5vw,6.5rem)] text-[#0a0a0a] mb-2">
              KRISH.
            </h1>
            <h1 className="font-mono font-bold leading-none tracking-tight select-none text-[clamp(2.8rem,7.5vw,6.5rem)] text-[#0a0a0a] mb-5">
              SHARMA.
            </h1>

            {/* Positioning Subheading */}
            <div className="font-mono font-bold text-[clamp(1.1rem,2.5vw,1.9rem)] leading-snug tracking-tight text-[#0a0a0a] mb-4">
              CYBERSECURITY RESEARCHER &amp;{" "}
              <span className="text-[#059669] block sm:inline">COMMUNITY BUILDER.</span>
            </div>

            {/* Confident, Short Supporting Copy */}
            <p className="font-mono text-xs sm:text-sm text-[#575757] leading-relaxed tracking-wide mb-6 max-w-xl">
              {identity.tagline}
            </p>

            {/* Quick Profile Links Bar */}
            <div className="flex flex-wrap items-center gap-2 mb-8 text-[0.65rem] font-mono">
              <a
                href={identity.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="b-tag hover:border-[#059669]"
              >
                LINKEDIN: 0daykrish ↗
              </a>
              <a
                href={identity.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="b-tag hover:border-[#059669]"
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
              <a href="#projects" className="btn-brutalist">
                <span className="btn-tab">→</span>
                <span className="btn-body">VIEW WORK</span>
              </a>
              <a href="#research" className="btn-brutalist btn-brutalist-outline">
                <span className="btn-tab">↓</span>
                <span className="btn-body">SECURITY RESEARCH</span>
              </a>
              <a href="#contact" className="btn-brutalist btn-brutalist-outline">
                <span className="btn-tab">✉</span>
                <span className="btn-body">GET IN TOUCH</span>
              </a>
            </div>

            {/* Metric Highlights Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#0a0a0a]/20 font-mono">
              <div>
                <div className="text-lg sm:text-xl font-bold text-[#0a0a0a] leading-none">FOUNDER</div>
                <div className="text-[0.58rem] tracking-wider text-[#575757] mt-1">BSIDES VADODARA</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-[#059669] leading-none">MSec-CAIS</div>
                <div className="text-[0.58rem] tracking-wider text-[#575757] mt-1">AI SECURITY EXPERT</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-[#0a0a0a] leading-none">OFFENSIVE</div>
                <div className="text-[0.58rem] tracking-wider text-[#575757] mt-1">PENTEST &amp; AUDITING</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-[#0a0a0a] leading-none">WEB &amp; API</div>
                <div className="text-[0.58rem] tracking-wider text-[#575757] mt-1">RESEARCH &amp; HARDENING</div>
              </div>
            </div>
          </div>

          {/* Right Visual Element: 3D Illustration following cursor */}
          <div className="w-full lg:w-auto flex-shrink-0 flex flex-col items-center lg:items-end">
            {/* View Mode Switcher */}
            <div className="flex items-center gap-2 mb-2 font-mono text-[0.6rem]">
              <button
                onClick={() => setViewMode("3d")}
                className={`b-tag cursor-pointer ${
                  viewMode === "3d" ? "bg-[#0a0a0a] text-white border-[#0a0a0a]" : ""
                }`}
              >
                [ 3D AVATAR ]
              </button>
              <button
                onClick={() => setViewMode("radar")}
                className={`b-tag cursor-pointer ${
                  viewMode === "radar" ? "bg-[#0a0a0a] text-white border-[#0a0a0a]" : ""
                }`}
              >
                [ RADAR TELEMETRY ]
              </button>
            </div>

            {viewMode === "3d" ? (
              <Interactive3DCard uptimeText={uptimeStr} />
            ) : (
              <div className="flex flex-col items-center lg:items-end">
                <CyberRadar />
                <div className="w-full max-w-[560px] mt-4 border border-[#0a0a0a] bg-[#0a0a0a] text-[#f4f3ef] p-3 font-mono flex items-center justify-between gap-3 shadow-[3px_3px_0px_#059669]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse-glow" />
                    <span className="text-[0.62rem] tracking-widest text-[#a3a3a3] font-semibold">
                      COMMUNITY UPTIME
                    </span>
                  </div>
                  <div className="text-[0.72rem] font-bold tracking-wider tabular-nums bg-[#171717] px-2.5 py-1 border border-[#262626]">
                    <span className="text-[#059669] mr-1.5">▶</span>
                    {uptimeStr}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
