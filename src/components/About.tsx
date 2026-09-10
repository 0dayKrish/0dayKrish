"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeader } from "./ui/SectionHeader";

export function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-16 sm:py-20 border-b border-[#0a0a0a]" aria-label="About Krish Sharma">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <SectionHeader label="PRACTITIONER_MANIFEST" number="001" id="about-heading" />

        <div className="grid lg:grid-cols-12 gap-0 border border-[#0a0a0a] bg-[#eae7df] shadow-[4px_4px_0px_#0a0a0a]">
          {/* Left Column: Manifesto */}
          <div className="lg:col-span-7 border-b lg:border-b-0 lg:border-r border-[#0a0a0a]">
            {/* Window bar */}
            <div className="border-b border-[#0a0a0a] px-4 py-2.5 bg-[#dedad1] flex items-center justify-between font-mono text-[0.65rem] tracking-wider text-[#575757]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#059669]" />
                <span className="text-[#0a0a0a] font-bold">MANIFEST.SEC</span>
              </div>
              <span>V2.6 // OFFENSIVE_RESEARCH</span>
            </div>

            <div className="p-6 sm:p-8">
              <h2 className="font-mono font-bold text-xl sm:text-2xl text-[#0a0a0a] tracking-tight leading-snug mb-2">
                RESEARCHING ATTACK VECTORS.
              </h2>
              <h2 className="font-mono font-bold text-xl sm:text-2xl text-[#059669] tracking-tight leading-snug mb-6">
                EMPOWERING THE SECURITY COMMUNITY.
              </h2>

              <div className="space-y-4 font-mono text-xs sm:text-[0.82rem] text-[#575757] leading-relaxed">
                {about.manifestoParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Bottom tag bar */}
              <div className="mt-8 pt-4 border-t border-[#0a0a0a]/20 flex flex-wrap items-center justify-between gap-3 text-[0.62rem] font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#059669]" />
                  <span className="text-[#0a0a0a] font-bold">ETHOS:</span>
                  <span className="text-[#575757]">RESPONSIBLE DISCLOSURE &amp; ADVERSARIAL RIGOR</span>
                </div>
                <span className="text-[#059669] font-bold">[ VERIFIED PRAXIS ]</span>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Metrics & Focus */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="border-b border-[#0a0a0a] px-4 py-2.5 bg-[#dedad1] flex items-center justify-between font-mono text-[0.65rem] tracking-wider text-[#575757]">
                <span>KEY_SCOPE.LOG</span>
                <span className="text-[#059669] font-bold">■ VERIFIED</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                {about.stats.map((stat, idx) => (
                  <div
                    key={stat.label}
                    className={`p-5 border-b border-[#0a0a0a] ${
                      idx % 2 === 0 ? "sm:border-r border-[#0a0a0a]" : ""
                    } bg-[#f4f3ef] hover:bg-[#ffffff] transition-colors`}
                  >
                    <div className="font-mono text-[0.58rem] tracking-widest text-[#575757] uppercase mb-1">
                      {stat.label}
                    </div>
                    <div className="font-mono text-base sm:text-lg font-bold text-[#0a0a0a] tracking-tight leading-snug">
                      {stat.value}
                    </div>
                    <div className="font-mono text-[0.62rem] text-[#059669] mt-1 tracking-wide">
                      {stat.subtext}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Community Quote Card */}
            <div className="p-5 sm:p-6 bg-[#dedad1] border-t border-[#0a0a0a] font-mono">
              <div className="text-[0.62rem] text-[#575757] tracking-widest uppercase mb-2">
                {"// FOUNDER PHILOSOPHY"}
              </div>
              <blockquote className="text-xs text-[#0a0a0a] leading-relaxed border-l-2 border-[#059669] pl-3 italic mb-3">
                &quot;Real cybersecurity does not thrive in isolation. True resilience is built when independent researchers, students, and industry veterans exchange raw adversarial insight.&quot;
              </blockquote>
              <div className="flex items-center justify-between text-[0.6rem] text-[#575757]">
                <span>— Krish Sharma</span>
                <span className="text-[#059669] font-bold">Founder, BSides Vadodara</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
