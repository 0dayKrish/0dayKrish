"use client";

import React, { useEffect, useRef } from "react";
import { ProjectItem } from "@/types/portfolio";
import {
  X,
  ExternalLink,
  Shield,
  AlertTriangle,
  Compass,
  Layers,
  CheckCircle2,
  Lightbulb,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface ProjectDrawerProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectDrawer({ project, onClose }: ProjectDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Handle ESC key and URL hash
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Prevent body scrolling when drawer is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Set URL hash for deep-linking
    const originalHash = window.location.hash;
    window.history.replaceState(null, "", `#project-${project.id}`);

    // Focus close button inside drawer for accessibility
    const closeBtn = drawerRef.current?.querySelector<HTMLButtonElement>("[data-close-btn]");
    closeBtn?.focus();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
      if (window.location.hash === `#project-${project.id}`) {
        window.history.replaceState(null, "", originalHash.startsWith("#project-") ? " " : originalHash || " ");
      }
    };
  }, [project, onClose]);

  if (!project) return null;

  const caseStudy = project.caseStudy;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex justify-end"
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-project-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs cursor-pointer"
          aria-hidden="true"
        />

        {/* Drawer Panel */}
        <motion.div
          ref={drawerRef}
          initial={{ x: shouldReduceMotion ? 0 : "100%", opacity: shouldReduceMotion ? 0 : 1 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: shouldReduceMotion ? 0 : "100%", opacity: shouldReduceMotion ? 0 : 1 }}
          transition={{ type: "spring", damping: 28, stiffness: 280, mass: 0.8 }}
          className="relative w-full sm:max-w-xl lg:max-w-2xl h-full bg-[var(--bg-subtle)] text-[var(--text-primary)] border-l-2 border-[var(--border-color)] shadow-[-12px_0px_32px_rgba(0,0,0,0.5)] flex flex-col z-10 font-mono overflow-hidden"
        >
          {/* Header Bar */}
          <div className="flex-shrink-0 px-5 py-3.5 border-b border-[var(--border-color)] bg-[var(--bg-surface)] flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-emerald)] animate-pulse" />
              <div className="text-[0.65rem] tracking-wider text-[var(--text-secondary)] uppercase truncate">
                DOSSIER // <span className="text-[var(--text-primary)] font-bold">{project.id}</span>
              </div>
            </div>

            <button
              data-close-btn
              onClick={onClose}
              type="button"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[0.65rem] font-bold tracking-wider uppercase border border-[var(--border-color)] bg-[var(--bg-subtle)] text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-colors cursor-pointer"
              aria-label="Close case study drawer"
            >
              <span>CLOSE</span>
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Drawer Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-8 sm:py-8 space-y-6 sm:space-y-7">
            {/* Category & Title Section */}
            <div className="border-b border-[var(--border-color)] pb-5">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 border border-[var(--border-color)] bg-[var(--bg-surface)] text-[0.62rem] tracking-widest text-[var(--accent-emerald)] uppercase font-bold">
                  <Shield className="w-3 h-3" />
                  {project.category}
                </span>
                <span className="text-[0.62rem] text-[var(--text-muted)] tracking-wider">
                  TIMELINE: {project.year}
                </span>
              </div>

              <h2
                id="drawer-project-title"
                className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-[var(--text-primary)] leading-snug"
              >
                {project.title}
              </h2>

              <p className="mt-3 text-xs sm:text-[0.82rem] text-[var(--text-secondary)] leading-relaxed">
                {project.summary}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-[var(--border-subtle)]">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-brutalist"
                  >
                    <span className="btn-tab">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="btn-body text-[0.65rem]">VIEW ON GITHUB ↗</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-brutalist btn-brutalist-outline"
                  >
                    <span className="btn-tab">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                    <span className="btn-body text-[0.65rem]">LIVE DEMO ↗</span>
                  </a>
                )}
              </div>
            </div>

            {/* PROBLEM SECTION */}
            {caseStudy?.problem && (
              <div className="p-4 sm:p-5 border border-[var(--border-color)] bg-[var(--bg-card)] shadow-[3px_3px_0px_var(--shadow-color)]">
                <div className="flex items-center gap-2 mb-2 text-[0.65rem] font-bold text-[var(--accent-amber)] uppercase tracking-wider">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>{"// PROBLEM STATEMENT & THREAT VECTOR"}</span>
                </div>
                <p className="text-xs sm:text-[0.8rem] text-[var(--text-secondary)] leading-relaxed">
                  {caseStudy.problem}
                </p>
              </div>
            )}

            {/* APPROACH SECTION */}
            {caseStudy?.approach && (
              <div className="p-4 sm:p-5 border border-[var(--border-color)] bg-[var(--bg-card)] shadow-[3px_3px_0px_var(--shadow-color)]">
                <div className="flex items-center gap-2 mb-2 text-[0.65rem] font-bold text-[var(--accent-emerald)] uppercase tracking-wider">
                  <Compass className="w-3.5 h-3.5" />
                  <span>{"// METHODICAL APPROACH & ARCHITECTURE"}</span>
                </div>
                <p className="text-xs sm:text-[0.8rem] text-[var(--text-secondary)] leading-relaxed">
                  {caseStudy.approach}
                </p>
              </div>
            )}

            {/* OBJECTIVES */}
            {caseStudy?.objectives && caseStudy.objectives.length > 0 && (
              <div className="space-y-2">
                <div className="text-[0.65rem] tracking-wider text-[var(--text-secondary)] uppercase font-bold flex items-center gap-1.5">
                  <span className="text-[var(--accent-emerald)]">▶</span>
                  <span>CORE PROJECT OBJECTIVES</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-[0.78rem] text-[var(--text-secondary)]">
                  {caseStudy.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2.5 bg-[var(--bg-surface)] p-2.5 border border-[var(--border-subtle)]">
                      <span className="text-[var(--accent-emerald)] font-bold text-[0.65rem] flex-shrink-0 mt-0.5">
                        [{String(i + 1).padStart(2, "0")}]
                      </span>
                      <span className="leading-relaxed">{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* TECHNOLOGY */}
            <div>
              <div className="text-[0.65rem] tracking-wider text-[var(--text-secondary)] uppercase font-bold mb-2.5 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[var(--accent-emerald)]" />
                <span>TECHNOLOGIES &amp; TOOLCHAIN</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span key={tech} className="b-tag text-[0.65rem]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* SECURITY HIGHLIGHTS */}
            {caseStudy?.securityDetails && (
              <div className="p-4 sm:p-5 border-2 border-[var(--border-color)] bg-[var(--bg-surface)] shadow-[3px_3px_0px_var(--shadow-color)]">
                <div className="flex items-center gap-2 mb-2 text-[0.65rem] font-bold text-[var(--text-primary)] uppercase tracking-wider">
                  <Shield className="w-3.5 h-3.5 text-[var(--accent-emerald)]" />
                  <span>{"// SECURITY CONTROLS & PROTOCOLS"}</span>
                </div>
                <p className="text-xs sm:text-[0.8rem] text-[var(--text-secondary)] leading-relaxed">
                  {caseStudy.securityDetails}
                </p>
              </div>
            )}

            {/* TECHNICAL HIGHLIGHTS */}
            {caseStudy?.technicalHighlights && caseStudy.technicalHighlights.length > 0 && (
              <div className="space-y-2">
                <div className="text-[0.65rem] tracking-wider text-[var(--text-secondary)] uppercase font-bold flex items-center gap-1.5">
                  <span className="text-[var(--accent-emerald)]">■</span>
                  <span>ENGINEERING IMPLEMENTATION HIGHLIGHTS</span>
                </div>
                <div className="space-y-2 text-xs sm:text-[0.78rem] text-[var(--text-secondary)]">
                  {caseStudy.technicalHighlights.map((highlight, idx) => (
                    <div key={idx} className="p-3 border border-[var(--border-subtle)] bg-[var(--bg-card)] flex items-start gap-2.5">
                      <span className="text-[var(--accent-emerald)] font-bold text-[0.65rem] flex-shrink-0 mt-0.5">
                        →
                      </span>
                      <span className="leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* RESULT */}
            {caseStudy?.findingsOrResults && caseStudy.findingsOrResults.length > 0 && (
              <div className="p-4 sm:p-5 border border-[var(--border-color)] bg-[var(--bg-surface)]">
                <div className="flex items-center gap-2 mb-3 text-[0.65rem] font-bold text-[var(--accent-emerald)] uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{"// VERIFIED RESULTS & FINDINGS"}</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-[0.78rem] text-[var(--text-secondary)]">
                  {caseStudy.findingsOrResults.map((result, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[var(--accent-emerald)] font-bold flex-shrink-0">✓</span>
                      <span className="leading-relaxed">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* KEY TAKEAWAY */}
            {caseStudy?.keyTakeaway && (
              <div className="p-4 border-l-2 border-[var(--accent-emerald)] bg-[var(--bg-card)]/60 text-xs sm:text-[0.78rem] text-[var(--text-secondary)] italic leading-relaxed">
                <div className="flex items-center gap-1.5 not-italic font-bold text-[0.62rem] text-[var(--text-primary)] uppercase tracking-wider mb-1">
                  <Lightbulb className="w-3 h-3 text-[var(--accent-emerald)]" />
                  <span>PRACTITIONER TAKEAWAY</span>
                </div>
                &ldquo;{caseStudy.keyTakeaway}&rdquo;
              </div>
            )}
          </div>

          {/* Footer Bar */}
          <div className="flex-shrink-0 px-5 py-3 border-t border-[var(--border-color)] bg-[var(--bg-surface)] flex items-center justify-between text-[0.62rem] text-[var(--text-secondary)]">
            <span>PRESS [ESC] TO CLOSE</span>
            <span className="text-[var(--accent-emerald)] font-bold">0DAYKRISH // SEC_LABS</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
