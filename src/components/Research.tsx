"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { ResearchItem } from "@/types/portfolio";
import { SectionHeader } from "./ui/SectionHeader";

export function Research() {
  const { researchAndWriteups } = portfolioData;
  const [activeResearchModal, setActiveResearchModal] = useState<ResearchItem | null>(null);

  const getSeverityBadgeClass = (severity?: string) => {
    switch (severity) {
      case "CRITICAL":
        return "bg-[#ef4444] text-white border-[#991b1b]";
      case "HIGH":
        return "bg-[#f97316] text-white border-[#c2410c]";
      case "MEDIUM":
        return "bg-[#eab308] text-[#0a0a0a] border-[#a16207]";
      default:
        return "bg-[#059669] text-white border-[#047857]";
    }
  };

  return (
    <section id="research" className="py-16 sm:py-20 border-b border-[var(--border-color)]" aria-label="Security Research">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <SectionHeader label="SECURITY_RESEARCH" number="007" id="research-heading" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
          <p className="font-mono text-xs sm:text-[0.8rem] text-[var(--text-secondary)] max-w-xl">
            Vulnerability research, access-control logic flaws, adversarial AI testing, and practical penetration testing methodologies.
          </p>
          <span className="b-tag b-tag-emerald">
            STATUS: ACTIVE ADVERSARIAL RESEARCH
          </span>
        </div>

        {/* Master Research Log Box */}
        <div className="border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-[4px_4px_0px_var(--shadow-color)]">
          {/* Header */}
          <div className="border-b border-[var(--border-color)] px-4 py-2.5 bg-[var(--bg-subtle)] flex items-center justify-between font-mono text-[0.65rem] tracking-wider text-[var(--text-secondary)]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-emerald)]" />
              <span className="text-[var(--text-primary)] font-bold">RESEARCH_LOG.TXT</span>
            </div>
            <span>{researchAndWriteups.length} DOSSIERS ARCHIVED</span>
          </div>

          {/* Research Articles List */}
          <div className="divide-y divide-[var(--border-color)]">
            {researchAndWriteups.map((item, idx) => (
              <article
                key={item.id}
                className="p-5 sm:p-6 bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Left Column: Scope, Title, Summary */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-[0.62rem]">
                      <span className="text-[var(--accent-emerald)] font-bold">0{idx + 1} {"//"}</span>
                      <span className="border border-[var(--border-color)] bg-[var(--bg-subtle)] px-2 py-0.5 font-semibold text-[var(--text-primary)]">
                        {item.category}
                      </span>
                      <span className="text-[var(--text-secondary)]">SCOPE: {item.scope}</span>
                      <span className="text-[var(--text-muted)]">|</span>
                      <span className="text-[var(--text-secondary)]">{item.date}</span>

                      {item.reportDetails && (
                        <span
                          className={`px-1.5 py-0.5 border text-[0.55rem] font-bold uppercase tracking-wider ${getSeverityBadgeClass(
                            item.reportDetails.severity
                          )}`}
                        >
                          {item.reportDetails.severity}
                        </span>
                      )}
                    </div>

                    <h3 className="font-mono font-bold text-sm sm:text-base text-[var(--text-primary)] tracking-tight leading-snug mb-2">
                      {item.title}
                    </h3>

                    <p className="font-mono text-xs text-[var(--text-secondary)] leading-relaxed mb-3 max-w-3xl">
                      {item.summary}
                    </p>

                    {/* Tag Pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span key={tag} className="b-tag text-[0.58rem]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Action Button */}
                  <div className="lg:self-center flex-shrink-0">
                    <button
                      onClick={() => setActiveResearchModal(item)}
                      className="btn-brutalist cursor-pointer w-full sm:w-auto"
                    >
                      <span className="btn-tab">→</span>
                      <span className="btn-body text-[0.62rem]">READ DOSSIER</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Research Dossier Modal */}
      {activeResearchModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="dossier-title"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveResearchModal(null)}
        >
          <div
            className="bg-[var(--bg-subtle)] border-2 border-[var(--border-color)] shadow-[8px_8px_0px_var(--shadow-color)] max-w-2xl w-full max-h-[85vh] overflow-y-auto font-mono p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="border-b border-[var(--border-color)] pb-3 mb-5 flex items-center justify-between text-[0.65rem] text-[var(--text-secondary)]">
              <div>
                <span className="text-[var(--accent-emerald)] font-bold">{"// RESEARCH_DOSSIER:"}</span>{" "}
                <span className="text-[var(--text-primary)]">{activeResearchModal.category}</span>
              </div>
              <button
                onClick={() => setActiveResearchModal(null)}
                className="b-tag cursor-pointer hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)]"
                aria-label="Close dossier"
              >
                [ CLOSE ✕ ]
              </button>
            </div>

            <h3 id="dossier-title" className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-2 leading-snug">
              {activeResearchModal.title}
            </h3>

            <div className="flex flex-wrap gap-2 mb-4 text-[0.62rem]">
              <span className="border border-[var(--border-color)] bg-[var(--bg-card)] px-2 py-0.5 font-bold text-[var(--text-primary)]">
                SCOPE: {activeResearchModal.scope}
              </span>
              {activeResearchModal.reportDetails && (
                <span
                  className={`px-2 py-0.5 border font-bold uppercase ${getSeverityBadgeClass(
                    activeResearchModal.reportDetails.severity
                  )}`}
                >
                  SEVERITY: {activeResearchModal.reportDetails.severity}
                </span>
              )}
            </div>

            <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-5">
              {activeResearchModal.summary}
            </p>

            {activeResearchModal.reportDetails && (
              <div className="border border-[var(--border-color)] bg-[var(--bg-card)] p-4 mb-5 space-y-3 text-xs">
                <div>
                  <span className="text-[var(--accent-emerald)] font-bold">VULNERABILITY CLASS: </span>
                  <span className="text-[var(--text-primary)]">
                    {activeResearchModal.reportDetails.vulnerabilityClass}
                  </span>
                </div>
                <div>
                  <span className="text-[var(--accent-emerald)] font-bold">TARGET ARCHITECTURE: </span>
                  <span className="text-[var(--text-primary)]">
                    {activeResearchModal.reportDetails.targetType}
                  </span>
                </div>
                <div>
                  <span className="text-[var(--accent-emerald)] font-bold">ATTACK VECTOR: </span>
                  <span className="text-[var(--text-secondary)]">
                    {activeResearchModal.reportDetails.attackVector}
                  </span>
                </div>
                <div>
                  <span className="text-[var(--accent-emerald)] font-bold">RECOMMENDED REMEDIATION: </span>
                  <span className="text-[var(--text-secondary)]">
                    {activeResearchModal.reportDetails.remediation}
                  </span>
                </div>
              </div>
            )}

            <div className="p-3 bg-[var(--bg-surface)] border border-[var(--border-color)] text-xs text-[var(--text-primary)] mb-6">
              <span className="font-bold text-[var(--accent-emerald)]">FINDINGS HIGHLIGHT: </span>
              {activeResearchModal.findingsHighlight}
            </div>

            <div className="flex justify-between items-center pt-3 border-t border-[var(--border-color)]">
              <span className="text-[0.6rem] text-[var(--text-secondary)]">
                RESEARCHER: Krish Sharma (0daykrish)
              </span>
              <button
                onClick={() => setActiveResearchModal(null)}
                className="btn-brutalist"
              >
                <span className="btn-tab">✓</span>
                <span className="btn-body text-[0.62rem]">CLOSE DOSSIER</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
