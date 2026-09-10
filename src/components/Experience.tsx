"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeader } from "./ui/SectionHeader";

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-16 sm:py-20 border-b border-[#0a0a0a]" aria-label="Experience and Leadership">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <SectionHeader label="OPERATIONS_TIMELINE" number="007" id="experience-heading" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
          <p className="font-mono text-xs sm:text-[0.8rem] text-[#575757] max-w-xl">
            Community leadership, conference operations, and independent cybersecurity research history.
          </p>
          <span className="b-tag b-tag-emerald">
            VERIFIED ROLES
          </span>
        </div>

        {/* Master Experience Table Layout */}
        <div className="border border-[#0a0a0a] bg-[#eae7df] shadow-[4px_4px_0px_#0a0a0a]">
          {/* Table Header for Desktop */}
          <div className="hidden md:grid grid-cols-12 border-b border-[#0a0a0a] bg-[#dedad1] font-mono text-[0.62rem] tracking-wider text-[#575757]">
            <div className="col-span-4 p-3 border-r border-[#0a0a0a] font-bold">ORGANIZATION / INITIATIVE</div>
            <div className="col-span-3 p-3 border-r border-[#0a0a0a] font-bold">ROLE</div>
            <div className="col-span-3 p-3 border-r border-[#0a0a0a] font-bold">PERIOD</div>
            <div className="col-span-2 p-3 font-bold">LOCATION</div>
          </div>

          {/* Timeline Items */}
          <div className="divide-y divide-[#0a0a0a]">
            {experience.map((item, idx) => (
              <article key={item.id} className="bg-[#f4f3ef] hover:bg-white transition-colors font-mono">
                {/* Desktop Meta Row */}
                <div className="hidden md:grid grid-cols-12 border-b border-[#0a0a0a]/20 text-xs">
                  <div className="col-span-4 p-4 border-r border-[#0a0a0a] font-bold text-[#0a0a0a] flex items-center gap-2">
                    <span className="text-[#059669]">0{idx + 1}</span>
                    <span>{item.organization}</span>
                    {item.websiteUrl && (
                      <a
                        href={item.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#059669] hover:underline text-[0.65rem]"
                        aria-label={`Visit ${item.organization}`}
                      >
                        [↗]
                      </a>
                    )}
                  </div>
                  <div className="col-span-3 p-4 border-r border-[#0a0a0a] text-[#0a0a0a] font-semibold flex items-center">
                    {item.role}
                  </div>
                  <div className="col-span-3 p-4 border-r border-[#0a0a0a] text-[#575757] text-[0.7rem] flex items-center">
                    {item.period}
                  </div>
                  <div className="col-span-2 p-4 text-[#575757] text-[0.7rem] flex items-center">
                    {item.location}
                  </div>
                </div>

                {/* Mobile Meta Header */}
                <div className="md:hidden p-4 border-b border-[#0a0a0a]/20 bg-[#dedad1]/50">
                  <div className="flex items-center justify-between text-[0.62rem] text-[#575757] mb-1">
                    <span className="text-[#059669] font-bold">0{idx + 1} {"//"} {item.type}</span>
                    <span className="text-[#0a0a0a] font-bold">{item.period}</span>
                  </div>
                  <h3 className="font-bold text-sm text-[#0a0a0a]">{item.organization}</h3>
                  <div className="text-xs text-[#059669] font-semibold mt-0.5">{item.role}</div>
                  <div className="text-[0.65rem] text-[#575757] mt-0.5">{item.location}</div>
                </div>

                {/* Body / Bullets */}
                <div className="p-4 sm:p-6 bg-[#eae7df]/40">
                  <p className="text-xs text-[#575757] leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="text-[0.65rem] text-[#059669] font-bold uppercase tracking-wider mb-2">
                    {"// OPERATIONAL HIGHLIGHTS & RESPONSIBILITIES:"}
                  </div>

                  <ul className="space-y-2 text-xs text-[#0a0a0a]">
                    {item.highlights.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="text-[#059669] font-bold flex-shrink-0 mt-0.5">&gt;</span>
                        <span className="text-[#575757] leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
