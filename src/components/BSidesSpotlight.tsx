"use client";

import React from "react";
import Image from "next/image";
import bsidesLogo from "../../public/bsides-vadodara-logo.png";
import { portfolioData } from "@/data/portfolio";
import { SectionHeader } from "./ui/SectionHeader";

export function BSidesSpotlight() {
  const { bsidesVadodara } = portfolioData;

  return (
    <section
      id="bsides"
      className="py-16 sm:py-20 border-b border-[var(--border-color)] bg-[var(--bg-subtle)]/30"
      aria-label="BSides Vadodara Leadership"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <SectionHeader label="COMMUNITY_LEADERSHIP" number="003" id="bsides-heading" />

        {/* Hero Spotlight Card */}
        <div className="border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-[5px_5px_0px_var(--shadow-color)] mb-8">
          {/* Top Window Strip */}
          <div className="border-b border-[var(--border-color)] px-4 py-2.5 bg-[var(--bg-subtle)] flex flex-wrap items-center justify-between gap-2 font-mono text-[0.65rem] tracking-wider text-[var(--text-secondary)]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-emerald)] animate-pulse-glow inline-block" />
              <span className="text-[var(--text-primary)] font-bold uppercase">
                INITIATIVE: BSIDES VADODARA
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[var(--accent-emerald)] font-bold">TIMELINE: {bsidesVadodara.period}</span>
              <span className="hidden sm:inline text-[var(--text-muted)]">|</span>
              <span className="hidden sm:inline">OFFICIAL: bsidesvadodara.in</span>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              {/* Left Details */}
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 mb-3 border border-[var(--accent-emerald)] bg-[var(--accent-emerald)]/10 text-[var(--accent-emerald)] px-2.5 py-0.5 text-[0.62rem] font-mono font-bold tracking-widest uppercase">
                  FOUNDER &amp; COMMUNITY LEAD
                </div>

                <h2 className="font-mono font-bold text-2xl sm:text-3xl lg:text-4xl text-[var(--text-primary)] tracking-tight leading-tight mb-4">
                  BUILDING &amp; LEADING GUJARAT&apos;S INDEPENDENT SECURITY CONFERENCE.
                </h2>

                <p className="font-mono text-xs sm:text-[0.85rem] text-[var(--text-secondary)] leading-relaxed tracking-wide mb-6">
                  {bsidesVadodara.overview}
                </p>

                {/* Primary BSides Link CTA */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <a
                    href={bsidesVadodara.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-brutalist"
                  >
                    <span className="btn-tab">↗</span>
                    <span className="btn-body">VISIT BSIDESVADODARA.IN</span>
                  </a>

                  <a
                    href="mailto:krish@bsidesvadodara.in?subject=BSides%20Vadodara%20Inquiry"
                    className="btn-brutalist btn-brutalist-outline"
                  >
                    <span className="btn-tab">✉</span>
                    <span className="btn-body">SPONSOR / SPEAK / COLLABORATE</span>
                  </a>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)] font-mono text-[0.65rem] text-[var(--text-secondary)] flex flex-wrap gap-4">
                  <div>
                    <span className="text-[var(--text-primary)] font-bold">WORK EMAIL:</span>{" "}
                    <a
                      href="mailto:krish@bsidesvadodara.in"
                      className="text-[var(--accent-emerald)] hover:underline"
                    >
                      krish@bsidesvadodara.in
                    </a>
                  </div>
                  <div>
                    <span className="text-[var(--text-primary)] font-bold">SCOPE:</span> Conference Direction, CFP, Sponsorships, Operations
                  </div>
                </div>
              </div>

              {/* Right Media / Community Visual Slot */}
              <div className="lg:col-span-4 flex flex-col gap-3">
                <div className="border border-[var(--border-color)] bg-[var(--bg-subtle)] p-5 shadow-[3px_3px_0px_var(--shadow-color)] font-mono">
                  <div className="border-b border-[var(--border-color)] pb-2 mb-3 flex items-center justify-between text-[0.62rem] text-[var(--text-secondary)]">
                    <span>COMMUNITY_BADGE</span>
                    <span className="text-[var(--accent-emerald)] font-bold">[ VADODARA ]</span>
                  </div>

                  {/* Official BSides Vadodara Logo Container */}
                  <a
                    href={bsidesVadodara.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block aspect-square border border-[var(--border-color)] bg-white dark:bg-[var(--bg-surface)] p-4 relative overflow-hidden group shadow-[2px_2px_0px_var(--shadow-color)] hover:shadow-[4px_4px_0px_var(--accent-emerald)] transition-all cursor-pointer"
                    aria-label="Visit BSides Vadodara official website"
                  >
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={bsidesLogo}
                        alt="BSides Vadodara Official Logo"
                        fill
                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-200"
                        priority
                        sizes="(max-width: 1024px) 280px, 340px"
                      />
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between font-mono text-[0.55rem] text-[var(--text-secondary)] bg-[var(--bg-subtle)]/95 backdrop-blur-xs border border-[var(--border-color)] px-2 py-1">
                      <span className="font-bold text-[var(--text-primary)]">BSIDES VADODARA</span>
                      <span className="text-[var(--accent-emerald)] font-bold">OFFICIAL ↗</span>
                    </div>
                  </a>

                  <div className="mt-3 text-[0.6rem] text-[var(--text-secondary)] leading-relaxed">
                    Connecting students, active vulnerability researchers, enterprise CISOs, and ethical hackers across Western India.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars Grid */}
          <div className="border-t border-[var(--border-color)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[var(--border-color)]">
            {bsidesVadodara.pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="p-5 sm:p-6 bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] transition-colors flex flex-col justify-between font-mono"
              >
                <div>
                  <div className="text-[0.62rem] text-[var(--accent-emerald)] font-bold tracking-widest mb-1.5">
                    {"// PILLAR_"}{pillar.number}
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-[var(--text-primary)] tracking-tight leading-snug mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-[0.68rem] text-[var(--text-secondary)] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
