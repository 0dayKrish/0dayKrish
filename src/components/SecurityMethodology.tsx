"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeader } from "./ui/SectionHeader";
import {
  Radar,
  Network,
  Terminal,
  ShieldAlert,
  FileText,
  CheckCircle2,
  Shield,
} from "lucide-react";

export function SecurityMethodology() {
  const { securityMethodology } = portfolioData;
  const [activeStepIndex, setActiveStepIndex] = useState<number | null>(null);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case "Radar":
        return <Radar className="w-5 h-5 text-[var(--accent-emerald)]" />;
      case "Network":
        return <Network className="w-5 h-5 text-[var(--accent-emerald)]" />;
      case "Terminal":
        return <Terminal className="w-5 h-5 text-[var(--accent-emerald)]" />;
      case "ShieldAlert":
        return <ShieldAlert className="w-5 h-5 text-[var(--accent-amber)]" />;
      case "FileText":
        return <FileText className="w-5 h-5 text-[var(--accent-emerald)]" />;
      case "CheckCircle2":
        return <CheckCircle2 className="w-5 h-5 text-[var(--accent-emerald)]" />;
      default:
        return <Shield className="w-5 h-5 text-[var(--accent-emerald)]" />;
    }
  };

  return (
    <section
      id="methodology"
      className="py-16 sm:py-20 border-b border-[var(--border-color)] bg-[var(--bg-subtle)]/20"
      aria-label="Security Testing Methodology"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <SectionHeader label="SECURITY_METHODOLOGY" number="005" id="methodology-heading" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-8">
          <p className="font-mono text-xs sm:text-[0.8rem] text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            A structured, adversarial testing process designed to eliminate blind spots, separate theoretical noise from verified impact, and deliver reproducible vulnerability evidence.
          </p>
          <div className="font-mono text-[0.62rem] text-[var(--text-secondary)] bg-[var(--bg-subtle)] border border-[var(--border-color)] px-2.5 py-1 tracking-wider uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-emerald)]" />
            <span>PRACTITIONER LIFECYCLE // 6 PHASES</span>
          </div>
        </div>

        {/* Desktop Pipeline Workflow (1024px+) */}
        <div className="hidden lg:block border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-[4px_4px_0px_var(--shadow-color)] font-mono">
          {/* Top Telemetry Bar */}
          <div className="border-b border-[var(--border-color)] px-4 py-2.5 bg-[var(--bg-subtle)] flex items-center justify-between text-[0.62rem] tracking-wider text-[var(--text-secondary)]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-emerald)] animate-pulse" />
              <span className="text-[var(--text-primary)] font-bold">
                TESTING_PIPELINE // LINEAR_EXECUTION_FLOW
              </span>
            </div>
            <span className="text-[var(--text-muted)]">
              HOVER STEP TO FOCUS // CONTINUOUS SYSTEMIC VERIFICATION
            </span>
          </div>

          {/* 6 Sequential Step Cards with Connecting Connectors */}
          <div className="grid grid-cols-6 divide-x divide-[var(--border-color)]">
            {securityMethodology.map((step, idx) => {
              const isHovered = activeStepIndex === idx;
              const isDimmed = activeStepIndex !== null && !isHovered;

              return (
                <div
                  key={step.step}
                  onMouseEnter={() => setActiveStepIndex(idx)}
                  onMouseLeave={() => setActiveStepIndex(null)}
                  className={`p-5 flex flex-col justify-between transition-all duration-200 cursor-default select-none ${
                    isHovered
                      ? "bg-[var(--bg-card-hover)] shadow-[inset_0px_0px_16px_var(--accent-emerald-glow)]"
                      : "bg-[var(--bg-card)]"
                  } ${isDimmed ? "opacity-45 scale-[0.98]" : "opacity-100"}`}
                >
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-[var(--border-subtle)]">
                      <span className="text-xs font-bold text-[var(--accent-emerald)]">
                        {step.step}
                      </span>
                      <div className="p-1.5 bg-[var(--bg-subtle)] border border-[var(--border-color)]">
                        {getStepIcon(step.icon)}
                      </div>
                    </div>

                    {/* Step Title & Phase */}
                    <div className="text-[0.58rem] tracking-widest text-[var(--text-secondary)] uppercase">
                      {step.phase}
                    </div>
                    <h3 className="text-sm font-bold text-[var(--text-primary)] tracking-tight mt-0.5 mb-2">
                      {step.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-[0.68rem] text-[var(--text-secondary)] leading-relaxed mb-4">
                      {step.summary}
                    </p>
                  </div>

                  {/* Deliverable Badge */}
                  <div className="pt-3 border-t border-[var(--border-subtle)]">
                    <div className="text-[0.55rem] tracking-wider text-[var(--text-muted)] uppercase mb-1">
                      DELIVERABLE:
                    </div>
                    <div className="text-[0.62rem] font-bold text-[var(--text-primary)] leading-tight bg-[var(--bg-subtle)] p-1.5 border border-[var(--border-subtle)]">
                      {step.deliverable}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Phase Deep Dive Banner */}
          {activeStepIndex !== null && (
            <div className="p-4 border-t border-[var(--border-color)] bg-[var(--bg-subtle)] flex items-center justify-between gap-4 animate-in fade-in duration-150">
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 text-[0.62rem] font-bold bg-[var(--accent-emerald)] text-[var(--bg-primary)]">
                  PHASE {securityMethodology[activeStepIndex].step}
                </span>
                <span className="text-xs text-[var(--text-primary)] font-bold">
                  {securityMethodology[activeStepIndex].description}
                </span>
              </div>
              <div className="flex items-center gap-1 text-[0.62rem] text-[var(--text-secondary)] flex-shrink-0">
                <span className="text-[var(--text-muted)]">TECHNIQUES:</span>
                <span className="font-bold text-[var(--accent-emerald)]">
                  {securityMethodology[activeStepIndex].techniques.join(" • ")}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Vertical Process Timeline (Under 1024px) */}
        <div className="lg:hidden space-y-4 font-mono">
          {securityMethodology.map((step) => (
            <div
              key={step.step}
              className="p-5 border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-[3px_3px_0px_var(--shadow-color)]"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 text-[0.65rem] font-bold bg-[var(--accent-emerald)] text-[var(--bg-primary)]">
                    PHASE {step.step}
                  </span>
                  <span className="text-sm font-bold text-[var(--text-primary)]">
                    {step.title}
                  </span>
                </div>
                <div className="p-1 bg-[var(--bg-subtle)] border border-[var(--border-color)]">
                  {getStepIcon(step.icon)}
                </div>
              </div>

              <div className="text-[0.62rem] text-[var(--accent-emerald)] font-bold tracking-wider uppercase mb-1">
                {step.phase}
              </div>

              <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
                {step.description}
              </p>

              <div className="space-y-2 pt-3 border-t border-[var(--border-subtle)]">
                <div className="flex flex-wrap gap-1">
                  {step.techniques.map((t) => (
                    <span key={t} className="b-tag text-[0.58rem]">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="text-[0.62rem] text-[var(--text-primary)] bg-[var(--bg-subtle)] p-2 border border-[var(--border-subtle)]">
                  <span className="text-[var(--text-muted)]">DELIVERABLE: </span>
                  <span className="font-bold">{step.deliverable}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Methodology to Research Cross-Link Callout */}
        <div className="mt-6 p-4 border border-[var(--border-color)] bg-[var(--bg-subtle)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono">
          <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
            <span className="text-[var(--accent-emerald)] font-bold">▶</span>
            <span>Applied testing methodology across verified research writeups and vulnerability reports.</span>
          </div>
          <a
            href="#research"
            className="btn-brutalist flex-shrink-0"
          >
            <span className="btn-tab">↓</span>
            <span className="btn-body text-[0.62rem]">EXPLORE RESEARCH DOSSIERS</span>
          </a>
        </div>
      </div>
    </section>
  );
}
