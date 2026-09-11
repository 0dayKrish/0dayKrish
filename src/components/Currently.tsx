"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeader } from "./ui/SectionHeader";
import { ArrowRight, Radio, Shield, Terminal, Users, Sparkles } from "lucide-react";

export function Currently() {
  const { currentlyFocus } = portfolioData;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "RESEARCH":
        return <Terminal className="w-4 h-4 text-[var(--accent-emerald)]" />;
      case "BUILDING":
        return <Users className="w-4 h-4 text-[var(--accent-emerald)]" />;
      case "WORKING ON":
        return <Shield className="w-4 h-4 text-[var(--accent-emerald)]" />;
      case "EXPLORING":
        return <Sparkles className="w-4 h-4 text-[var(--accent-amber)]" />;
      default:
        return <Radio className="w-4 h-4 text-[var(--accent-emerald)]" />;
    }
  };

  return (
    <section
      id="currently"
      className="py-16 sm:py-20 border-b border-[var(--border-color)] bg-[var(--bg-primary)]"
      aria-label="Current Directions and Focus"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <SectionHeader label="CURRENT_FOCUS" number="002" id="currently-heading" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-8">
          <p className="font-mono text-xs sm:text-[0.8rem] text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            Real-time status overview of active security initiatives, technical toolchain development, community direction, and hands-on laboratory certifications.
          </p>
          <div className="font-mono text-[0.62rem] text-[var(--text-primary)] bg-[var(--bg-subtle)] border border-[var(--border-color)] px-3 py-1.5 tracking-widest uppercase flex items-center gap-2 shadow-[2px_2px_0px_var(--shadow-color)]">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-emerald)] animate-pulse" />
            <span className="font-bold">STATUS: ACTIVE ENGAGEMENTS</span>
          </div>
        </div>

        {/* 4-Card Status Telemetry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 font-mono">
          {currentlyFocus.map((item) => (
            <article
              key={item.id}
              className="border border-[var(--border-color)] bg-[var(--bg-surface)] p-5 shadow-[4px_4px_0px_var(--shadow-color)] hover:shadow-[5px_5px_0px_var(--accent-emerald)] hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[var(--border-color)] text-[0.62rem]">
                  <div className="flex items-center gap-1.5 text-[var(--accent-emerald)] font-bold tracking-widest">
                    <span>{item.index} {"//"}</span>
                    <span>{item.category}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-emerald)]" />
                    <span className="text-[0.58rem] text-[var(--text-muted)] font-bold">
                      [{item.status}]
                    </span>
                  </div>
                </div>

                {/* Subtitle & Title */}
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="p-1 bg-[var(--bg-subtle)] border border-[var(--border-subtle)]">
                    {getCategoryIcon(item.category)}
                  </div>
                  <span className="text-[0.62rem] text-[var(--text-secondary)] tracking-wider uppercase truncate">
                    {item.subtitle}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-[var(--text-primary)] tracking-tight leading-snug mb-3 group-hover:text-[var(--accent-emerald)] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="b-tag text-[0.58rem]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link to Relevant Section */}
              <div className="pt-3 border-t border-[var(--border-subtle)]">
                <a
                  href={item.linkHref}
                  className="inline-flex items-center justify-between w-full text-[0.65rem] font-bold text-[var(--text-primary)] hover:text-[var(--accent-emerald)] transition-colors uppercase tracking-wider no-underline"
                >
                  <span>{item.linkLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[var(--accent-emerald)] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
