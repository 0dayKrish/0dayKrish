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
    <section id="research" className="py-16 sm:py-20 border-b border-[#0a0a0a]" aria-label="Security Research">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <SectionHeader label="SECURITY_RESEARCH" number="005" id="research-heading" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
          <p className="font-mono text-xs sm:text-[0.8rem] text-[#575757] max-w-xl">
            Vulnerability research, access-control logic flaws, adversarial AI testing, and practical penetration testing methodologies.
          </p>
          <span className="b-tag b-tag-emerald">
            STATUS: ACTIVE ADVERSARIAL RESEARCH
          </span>
        </div>

        {/* Master Research Log Box */}
        <div className="border border-[#0a0a0a] bg-[#eae7df] shadow-[4px_4px_0px_#0a0a0a]">
          {/* Header */}
          <div className="border-b border-[#0a0a0a] px-4 py-2.5 bg-[#dedad1] flex items-center justify-between font-mono text-[0.65rem] tracking-wider text-[#575757]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#059669]" />
              <span className="text-[#0a0a0a] font-bold">RESEARCH_LOG.TXT</span>
            </div>
            <span>{researchAndWriteups.length} DOSSIERS ARCHIVED</span>
          </div>

          {/* Research Articles List */}
          <div className="divide-y divide-[#0a0a0a]">
            {researchAndWriteups.map((item, idx) => (
              <article
                key={item.id}
                className="p-5 sm:p-6 bg-[#f4f3ef] hover:bg-white transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Left Column: Scope, Title, Summary */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-[0.62rem]">
                      <span className="text-[#059669] font-bold">0{idx + 1} {"//"}</span>
                      <span className="border border-[#0a0a0a] bg-[#dedad1] px-2 py-0.5 font-semibold text-[#0a0a0a]">
                        {item.category}
                      </span>
                      <span className="text-[#575757]">SCOPE: {item.scope}</span>
                      <span className="text-[#a8a29e]">|</span>
                      <span className="text-[#575757]">{item.date}</span>

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

                    <h3 className="font-mono font-bold text-sm sm:text-base text-[#0a0a0a] tracking-tight leading-snug mb-2">
                      {item.title}
                    </h3>

                    <p className="font-mono text-xs text-[#575757] leading-relaxed mb-3 max-w-3xl">
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
            className="bg-[#dedad1] border-2 border-[#0a0a0a] shadow-[8px_8px_0px_#0a0a0a] max-w-2xl w-full max-h-[85vh] overflow-y-auto font-mono p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="border-b border-[#0a0a0a] pb-3 mb-5 flex items-center justify-between text-[0.65rem] text-[#575757]">
              <div>
                <span className="text-[#059669] font-bold">{"// RESEARCH_DOSSIER:"}</span>{" "}
                <span className="text-[#0a0a0a]">{activeResearchModal.category}</span>
              </div>
              <button
                onClick={() => setActiveResearchModal(null)}
                className="b-tag cursor-pointer hover:bg-[#0a0a0a] hover:text-white"
                aria-label="Close dossier"
              >
                [ CLOSE ✕ ]
              </button>
            </div>

            <h3 id="dossier-title" className="text-lg sm:text-xl font-bold text-[#0a0a0a] mb-2 leading-snug">
              {activeResearchModal.title}
            </h3>

            <div className="flex flex-wrap gap-2 mb-4 text-[0.62rem]">
              <span className="border border-[#0a0a0a] bg-[#f4f3ef] px-2 py-0.5 font-bold">
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

            <p className="text-xs text-[#575757] leading-relaxed mb-5">
              {activeResearchModal.summary}
            </p>

            {activeResearchModal.reportDetails && (
              <div className="border border-[#0a0a0a] bg-[#f4f3ef] p-4 mb-5 space-y-3 text-xs">
                <div>
                  <span className="text-[#059669] font-bold">VULNERABILITY CLASS: </span>
                  <span className="text-[#0a0a0a]">
                    {activeResearchModal.reportDetails.vulnerabilityClass}
                  </span>
                </div>
                <div>
                  <span className="text-[#059669] font-bold">TARGET ARCHITECTURE: </span>
                  <span className="text-[#0a0a0a]">
                    {activeResearchModal.reportDetails.targetType}
                  </span>
                </div>
                <div>
                  <span className="text-[#059669] font-bold">ATTACK VECTOR: </span>
                  <span className="text-[#575757]">
                    {activeResearchModal.reportDetails.attackVector}
                  </span>
                </div>
                <div>
                  <span className="text-[#059669] font-bold">RECOMMENDED REMEDIATION: </span>
                  <span className="text-[#575757]">
                    {activeResearchModal.reportDetails.remediation}
                  </span>
                </div>
              </div>
            )}

            <div className="p-3 bg-[#eae7df] border border-[#0a0a0a] text-xs text-[#0a0a0a] mb-6">
              <span className="font-bold text-[#059669]">FINDINGS HIGHLIGHT: </span>
              {activeResearchModal.findingsHighlight}
            </div>

            <div className="flex justify-between items-center pt-3 border-t border-[#0a0a0a]">
              <span className="text-[0.6rem] text-[#575757]">
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
