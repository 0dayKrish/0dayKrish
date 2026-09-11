"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeader } from "./ui/SectionHeader";

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-16 sm:py-20 border-b border-[var(--border-color)]" aria-label="Experience and Leadership">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <SectionHeader label="OPERATIONS_TIMELINE" number="007" id="experience-heading" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
          <p className="font-mono text-xs sm:text-[0.8rem] text-[var(--text-secondary)] max-w-xl">
            Community leadership, conference operations, and independent cybersecurity research history.
          </p>
          <span className="b-tag b-tag-emerald">
            VERIFIED ROLES
          </span>
        </div>

        {/* Master Experience Table Layout */}
        <div className="border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-[4px_4px_0px_var(--shadow-color)]">
          {/* Table Header for Desktop */}
          <div className="hidden md:grid grid-cols-12 border-b border-[var(--border-color)] bg-[var(--bg-subtle)] font-mono text-[0.62rem] tracking-wider text-[var(--text-secondary)]">
            <div className="col-span-4 p-3 border-r border-[var(--border-color)] font-bold">ORGANIZATION / INITIATIVE</div>
            <div className="col-span-3 p-3 border-r border-[var(--border-color)] font-bold">ROLE</div>
            <div className="col-span-3 p-3 border-r border-[var(--border-color)] font-bold">PERIOD</div>
            <div className="col-span-2 p-3 font-bold">LOCATION</div>
          </div>

          {/* Timeline Items */}
          <div className="divide-y divide-[var(--border-color)]">
            {experience.map((item, idx) => (
              <article key={item.id} className="bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] transition-colors font-mono">
                {/* Desktop Meta Row */}
                <div className="hidden md:grid grid-cols-12 border-b border-[var(--border-subtle)] text-xs">
                  <div className="col-span-4 p-4 border-r border-[var(--border-color)] font-bold text-[var(--text-primary)] flex items-center gap-2">
                    <span className="text-[var(--accent-emerald)]">0{idx + 1}</span>
                    <span>{item.organization}</span>
                    {item.websiteUrl && (
                      <a
                        href={item.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--accent-emerald)] hover:underline text-[0.65rem]"
                        aria-label={`Visit ${item.organization}`}
                      >
                        [↗]
                      </a>
                    )}
                  </div>
                  <div className="col-span-3 p-4 border-r border-[var(--border-color)] text-[var(--text-primary)] font-semibold flex items-center">
                    {item.role}
                  </div>
                  <div className="col-span-3 p-4 border-r border-[var(--border-color)] text-[var(--text-secondary)] text-[0.7rem] flex items-center">
                    {item.period}
                  </div>
                  <div className="col-span-2 p-4 text-[var(--text-secondary)] text-[0.7rem] flex items-center">
                    {item.location}
                  </div>
                </div>

                {/* Mobile Meta Header */}
                <div className="md:hidden p-4 border-b border-[var(--border-subtle)] bg-[var(--bg-subtle)]/50">
                  <div className="flex items-center justify-between text-[0.62rem] text-[var(--text-secondary)] mb-1">
                    <span className="text-[var(--accent-emerald)] font-bold">0{idx + 1} {"//"} {item.type}</span>
                    <span className="text-[var(--text-primary)] font-bold">{item.period}</span>
                  </div>
                  <h3 className="font-bold text-sm text-[var(--text-primary)]">{item.organization}</h3>
                  <div className="text-xs text-[var(--accent-emerald)] font-semibold mt-0.5">{item.role}</div>
                  <div className="text-[0.65rem] text-[var(--text-secondary)] mt-0.5">{item.location}</div>
                </div>

                {/* Body / Bullets */}
                <div className="p-4 sm:p-6 bg-[var(--bg-surface)]/40">
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="text-[0.65rem] text-[var(--accent-emerald)] font-bold uppercase tracking-wider mb-2">
                    {"// OPERATIONAL HIGHLIGHTS & RESPONSIBILITIES:"}
                  </div>

                  <ul className="space-y-2 text-xs text-[var(--text-primary)]">
                    {item.highlights.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="text-[var(--accent-emerald)] font-bold flex-shrink-0 mt-0.5">&gt;</span>
                        <span className="text-[var(--text-secondary)] leading-relaxed">{bullet}</span>
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
