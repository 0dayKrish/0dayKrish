"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeader } from "./ui/SectionHeader";

export function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-16 sm:py-20 border-b border-[var(--border-color)]" aria-label="About Krish Sharma">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <SectionHeader label="PRACTITIONER_MANIFEST" number="001" id="about-heading" />

        <div className="grid lg:grid-cols-12 gap-0 border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-[4px_4px_0px_var(--shadow-color)]">
          {/* Left Column: Manifesto */}
          <div className="lg:col-span-7 border-b lg:border-b-0 lg:border-r border-[var(--border-color)]">
            {/* Window bar */}
            <div className="border-b border-[var(--border-color)] px-4 py-2.5 bg-[var(--bg-subtle)] flex items-center justify-between font-mono text-[0.65rem] tracking-wider text-[var(--text-secondary)]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-emerald)]" />
                <span className="text-[var(--text-primary)] font-bold">MANIFEST.SEC</span>
              </div>
              <span>V2.6 // OFFENSIVE_RESEARCH</span>
            </div>

            <div className="p-6 sm:p-8">
              <h2 className="font-mono font-bold text-xl sm:text-2xl text-[var(--text-primary)] tracking-tight leading-snug mb-2">
                RESEARCHING ATTACK VECTORS.
              </h2>
              <h2 className="font-mono font-bold text-xl sm:text-2xl text-[var(--accent-emerald)] tracking-tight leading-snug mb-6">
                EMPOWERING THE SECURITY COMMUNITY.
              </h2>

              <div className="space-y-4 font-mono text-xs sm:text-[0.82rem] text-[var(--text-secondary)] leading-relaxed">
                {about.manifestoParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Bottom tag bar */}
              <div className="mt-8 pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-3 text-[0.62rem] font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent-emerald)]" />
                  <span className="text-[var(--text-primary)] font-bold">ETHOS:</span>
                  <span className="text-[var(--text-secondary)]">RESPONSIBLE DISCLOSURE &amp; ADVERSARIAL RIGOR</span>
                </div>
                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new CustomEvent("open-security-dossier"))}
                  className="text-[var(--accent-emerald)] hover:underline font-bold cursor-pointer inline-flex items-center gap-1"
                >
                  <span>[ OPEN SECURITY DOSSIER → ]</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Metrics & Focus */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="border-b border-[var(--border-color)] px-4 py-2.5 bg-[var(--bg-subtle)] flex items-center justify-between font-mono text-[0.65rem] tracking-wider text-[var(--text-secondary)]">
                <span>KEY_SCOPE.LOG</span>
                <span className="text-[var(--accent-emerald)] font-bold">■ VERIFIED</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                {about.stats.map((stat, idx) => (
                  <div
                    key={stat.label}
                    className={`p-5 border-b border-[var(--border-color)] ${
                      idx % 2 === 0 ? "sm:border-r border-[var(--border-color)]" : ""
                    } bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] transition-colors`}
                  >
                    <div className="font-mono text-[0.58rem] tracking-widest text-[var(--text-secondary)] uppercase mb-1">
                      {stat.label}
                    </div>
                    <div className="font-mono text-base sm:text-lg font-bold text-[var(--text-primary)] tracking-tight leading-snug">
                      {stat.value}
                    </div>
                    <div className="font-mono text-[0.62rem] text-[var(--accent-emerald)] mt-1 tracking-wide">
                      {stat.subtext}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Community Quote Card */}
            <div className="p-5 sm:p-6 bg-[var(--bg-subtle)] border-t border-[var(--border-color)] font-mono">
              <div className="text-[0.62rem] text-[var(--text-secondary)] tracking-widest uppercase mb-2">
                {"// FOUNDER PHILOSOPHY"}
              </div>
              <blockquote className="text-xs text-[var(--text-primary)] leading-relaxed border-l-2 border-[var(--accent-emerald)] pl-3 italic mb-3">
                &quot;Real cybersecurity does not thrive in isolation. True resilience is built when independent researchers, students, and industry veterans exchange raw adversarial insight.&quot;
              </blockquote>
              <div className="flex items-center justify-between text-[0.6rem] text-[var(--text-secondary)]">
                <span>— Krish Sharma</span>
                <span className="text-[var(--accent-emerald)] font-bold">Founder, BSides Vadodara</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
