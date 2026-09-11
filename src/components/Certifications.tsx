"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeader } from "./ui/SectionHeader";
import { ExternalLink, ShieldCheck, Clock, Layers } from "lucide-react";

export function Certifications() {
  const { certifications } = portfolioData;
  const [activeFilter, setActiveFilter] = useState<"all" | "completed" | "in-progress" | "credly">("all");

  const filteredCerts = certifications.filter((cert) => {
    if (activeFilter === "completed") return cert.status === "Certified" || cert.status === "Completed";
    if (activeFilter === "in-progress") return cert.status === "In Progress";
    if (activeFilter === "credly") return Boolean(cert.verificationUrl);
    return true;
  });

  const verifiedCount = certifications.filter((c) => c.verificationUrl).length;
  const inProgressCount = certifications.filter((c) => c.status === "In Progress").length;
  const completedCount = certifications.filter((c) => c.status === "Certified" || c.status === "Completed").length;

  // Calculate missing columns to complete the 3-column row cleanly
  const remainder = filteredCerts.length % 3;
  const emptySlots = remainder === 0 ? 0 : 3 - remainder;

  return (
    <section
      id="credentials"
      className="py-16 sm:py-20 border-b border-[var(--border-color)]"
      aria-label="Certifications and Training"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <SectionHeader label="CREDENTIALS_&_TRAINING" number="009" id="credentials-heading" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
          <p className="font-mono text-xs sm:text-[0.8rem] text-[var(--text-secondary)] max-w-xl">
            Verified vendor accreditations, active offensive security targets, and technical qualifications across AI security, networking, and red teaming.
          </p>
          <span className="b-tag b-tag-emerald">
            VERIFIED CREDENTIALS LOG
          </span>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-4 font-mono text-[0.62rem]">
          <button
            onClick={() => setActiveFilter("all")}
            className={`b-tag cursor-pointer transition-all duration-150 ${
              activeFilter === "all"
                ? "bg-[var(--text-primary)] text-[var(--bg-primary)] border-[var(--text-primary)]"
                : "bg-[var(--bg-subtle)]/60 hover:bg-[var(--bg-subtle)] text-[var(--text-primary)]"
            }`}
          >
            [ ALL_REGISTRY ({certifications.length}) ]
          </button>
          <button
            onClick={() => setActiveFilter("completed")}
            className={`b-tag cursor-pointer transition-all duration-150 ${
              activeFilter === "completed"
                ? "bg-[var(--text-primary)] text-[var(--bg-primary)] border-[var(--text-primary)]"
                : "bg-[var(--bg-subtle)]/60 hover:bg-[var(--bg-subtle)] text-[var(--text-primary)]"
            }`}
          >
            [ COMPLETED ({completedCount}) ]
          </button>
          <button
            onClick={() => setActiveFilter("in-progress")}
            className={`b-tag cursor-pointer transition-all duration-150 ${
              activeFilter === "in-progress"
                ? "bg-[var(--text-primary)] text-[var(--bg-primary)] border-[var(--text-primary)]"
                : "bg-[var(--bg-subtle)]/60 hover:bg-[var(--bg-subtle)] text-[var(--text-primary)]"
            }`}
          >
            ⚡ [ IN_PROGRESS ({inProgressCount}) ]
          </button>
          <button
            onClick={() => setActiveFilter("credly")}
            className={`b-tag cursor-pointer transition-all duration-150 ${
              activeFilter === "credly"
                ? "bg-[var(--text-primary)] text-[var(--bg-primary)] border-[var(--text-primary)]"
                : "bg-[var(--bg-subtle)]/60 hover:bg-[var(--bg-subtle)] text-[var(--text-primary)]"
            }`}
          >
            [ CREDLY_VERIFIED ({verifiedCount}) ]
          </button>
        </div>

        {/* Credentials Master Registry */}
        <div className="border border-[var(--border-color)] bg-[var(--border-color)] shadow-[4px_4px_0px_var(--shadow-color)]">
          {/* Box Header */}
          <div className="px-4 py-2.5 bg-[var(--bg-subtle)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 font-mono text-[0.65rem] tracking-wider text-[var(--text-secondary)]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-emerald)] animate-pulse" />
              <span className="text-[var(--text-primary)] font-bold">CREDENTIALS.REGISTRY</span>
            </div>
            <span>
              {verifiedCount} VERIFIED ON CREDLY // {completedCount} COMPLETED // {inProgressCount} IN PROGRESS
            </span>
          </div>

          {/* 3-Column Responsive Grid (blocks of 3) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border-color)]">
            {filteredCerts.map((cert, idx) => {
              const isInProgress = cert.status === "In Progress";

              // Distinct styling for In-Progress (Blueprint hatch & dashed border matching box 11-12)
              if (isInProgress) {
                return (
                  <article
                    key={cert.id}
                    className="p-5 bg-[var(--bg-surface)] hover:bg-[var(--bg-card-hover)] transition-colors flex flex-col justify-between font-mono relative overflow-hidden group"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(45deg, var(--border-subtle) 0, var(--border-subtle) 1px, transparent 1px, transparent 14px)",
                    }}
                  >
                    <div className="border-2 border-dashed border-[var(--border-color)]/40 p-4 bg-[var(--bg-surface)]/80 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2 text-[0.62rem]">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[var(--accent-emerald)] font-bold">
                              {String(idx + 1).padStart(2, "0")} {"//"}
                            </span>
                            <span className="b-tag text-[0.55rem] bg-[var(--bg-subtle)] text-[var(--text-primary)] border-[var(--border-subtle)]">
                              {cert.category}
                            </span>
                          </div>
                          <span className="b-tag text-[0.55rem] bg-[var(--bg-subtle)] text-[var(--accent-amber)] border-[var(--accent-amber)]/40 font-bold flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-amber)] animate-ping" />
                            TARGET
                          </span>
                        </div>

                        <h3 className="text-xs sm:text-sm font-bold text-[var(--text-primary)] tracking-tight leading-snug mb-2 group-hover:text-[var(--accent-emerald)] transition-colors">
                          {cert.name}
                        </h3>

                        <div className="text-[0.68rem] text-[var(--text-secondary)]">
                          ISSUER: <span className="font-semibold text-[var(--text-primary)]">{cert.issuer}</span>
                        </div>

                        {cert.focus && (
                          <p className="mt-2.5 text-[0.65rem] text-[var(--text-secondary)] leading-relaxed font-mono border-l-2 border-[var(--accent-amber)]/60 pl-2 bg-[var(--bg-subtle)]/60 p-1.5">
                            {cert.focus}
                          </p>
                        )}
                      </div>

                      <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex flex-col gap-2">
                        <div className="flex items-center justify-between text-[0.6rem]">
                          <span className="text-[var(--accent-amber)] font-bold flex items-center gap-1.5">
                            <Clock className="w-3 h-3 text-[var(--accent-amber)] animate-spin" style={{ animationDuration: "6s" }} />
                            ⚡ IN PROGRESS
                          </span>
                          <span className="text-[var(--text-muted)] text-[0.55rem]">
                            [ ACTIVE STUDY ]
                          </span>
                        </div>

                        <div className="inline-flex items-center justify-between w-full px-2.5 py-1.5 bg-[var(--bg-subtle)] border border-[var(--border-subtle)] text-[var(--text-primary)] font-mono text-[0.6rem] font-bold tracking-wider">
                          <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-amber)] animate-pulse" />
                            <span>ACTIVE LABS &amp; EXAM PREP</span>
                          </span>
                          <span className="text-[0.55rem] text-[var(--text-secondary)]">[ CANDIDATE ]</span>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              }

              // Completed & Certified card
              return (
                <article
                  key={cert.id}
                  className="p-5 bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] transition-colors flex flex-col justify-between font-mono group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2 text-[0.62rem]">
                      <span className="text-[var(--accent-emerald)] font-bold">
                        {String(idx + 1).padStart(2, "0")} {"//"}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="b-tag text-[0.55rem] bg-[var(--bg-subtle)]">
                          {cert.category}
                        </span>
                        {cert.verificationUrl && (
                          <span className="inline-flex items-center gap-1 text-[0.52rem] font-bold text-[var(--accent-emerald)] bg-[var(--accent-emerald)]/10 px-1 py-0.5 border border-[var(--accent-emerald)]/30">
                            <ShieldCheck className="w-2.5 h-2.5 text-[var(--accent-emerald)]" />
                            VERIFIED
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 className="text-xs sm:text-sm font-bold text-[var(--text-primary)] tracking-tight leading-snug mb-2 group-hover:text-[var(--accent-emerald)] transition-colors">
                      {cert.name}
                    </h3>

                    <div className="text-[0.68rem] text-[var(--text-secondary)]">
                      ISSUER: <span className="font-semibold text-[var(--text-primary)]">{cert.issuer}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex flex-col gap-2">
                    <div className="flex items-center justify-between text-[0.6rem]">
                      <span className="text-[var(--accent-emerald)] font-bold flex items-center gap-1">
                        ● {cert.status.toUpperCase()}
                      </span>
                      <span className="text-[var(--text-muted)] text-[0.55rem]">
                        [ RECORDED ]
                      </span>
                    </div>

                    {cert.verificationUrl ? (
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-between w-full px-2.5 py-1.5 bg-[var(--btn-primary-bg)] hover:bg-[var(--accent-emerald)] text-[var(--btn-primary-text)] hover:text-white border border-[var(--border-color)] font-mono text-[0.62rem] font-bold tracking-wider transition-all duration-150 group/btn shadow-[2px_2px_0px_var(--accent-emerald)] cursor-pointer"
                      >
                        <span className="flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent-emerald)] group-hover/btn:text-white transition-colors" />
                          <span>
                            {cert.verificationUrl.includes("credly.com")
                              ? "VERIFY ON CREDLY"
                              : "VERIFY CREDENTIAL"}
                          </span>
                        </span>
                        <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    ) : (
                      <div className="inline-flex items-center justify-between w-full px-2.5 py-1.5 bg-[var(--bg-subtle)]/60 border border-[var(--border-subtle)] text-[var(--text-secondary)] font-mono text-[0.6rem]">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-emerald)]" />
                          <span>ACCREDITED</span>
                        </span>
                        <span className="text-[0.55rem] text-[var(--text-muted)]">[ ID RECORDED ]</span>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}

            {/* THE EMPTY PART: Intentional Architectural Blueprint Placeholder */}
            {emptySlots === 2 && (
              <article
                className="col-span-1 md:col-span-2 p-5 bg-[var(--bg-surface)] hover:bg-[var(--bg-card-hover)] transition-colors flex flex-col justify-between font-mono relative overflow-hidden"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, var(--border-subtle) 0, var(--border-subtle) 1px, transparent 1px, transparent 14px)",
                }}
              >
                <div className="border-2 border-dashed border-[var(--border-color)]/40 p-4 bg-[var(--bg-surface)]/80 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2 text-[0.62rem]">
                      <div className="flex items-center gap-2">
                        <span className="text-[var(--accent-emerald)] font-bold">11 - 12 //</span>
                        <span className="b-tag text-[0.55rem] bg-[var(--bg-subtle)] text-[var(--text-primary)] border-[var(--border-subtle)]">
                          PIPELINE BUFFER
                        </span>
                      </div>
                      <span className="b-tag text-[0.55rem] bg-[var(--bg-subtle)] text-[var(--accent-emerald)] border-[var(--accent-emerald)]/40 font-bold">
                        [ 02 SLOTS RESERVED ]
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-1.5 mt-2">
                      <Layers className="w-4 h-4 text-[var(--accent-emerald)]" />
                      <h3 className="text-xs sm:text-sm font-bold text-[var(--text-primary)] tracking-tight uppercase">
                        Continuous Security Accreditation Roadmap
                      </h3>
                    </div>

                    <p className="text-[0.68rem] text-[var(--text-secondary)] leading-relaxed max-w-xl">
                      Dedicated pipeline capacity allocated for senior offensive security benchmarks, advanced adversary emulation certifications, and published vulnerability research achievements.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 text-[0.6rem]">
                      <div className="p-2 bg-[var(--bg-subtle)]/90 border border-[var(--border-subtle)] flex items-center justify-between">
                        <div>
                          <span className="text-[var(--accent-emerald)] font-bold">SLOT_11:</span> ADVANCED EXPLOITATION
                        </div>
                        <span className="text-[0.55rem] text-[var(--text-muted)]">[ IN EVALUATION ]</span>
                      </div>
                      <div className="p-2 bg-[var(--bg-subtle)]/90 border border-[var(--border-subtle)] flex items-center justify-between">
                        <div>
                          <span className="text-[var(--accent-emerald)] font-bold">SLOT_12:</span> CLOUD &amp; RED TEAM
                        </div>
                        <span className="text-[0.55rem] text-[var(--text-muted)]">[ ROADMAP 2026 ]</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-[0.6rem]">
                    <span className="text-[var(--accent-emerald)] font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-emerald)]" />
                      ⚡ AND MANY MORE TO COME
                    </span>
                    <span className="text-[var(--text-muted)] text-[0.55rem] font-mono">
                      [ STANDBY FOR NEXT ACCREDITATIONS ↗ ]
                    </span>
                  </div>
                </div>
              </article>
            )}

            {emptySlots === 1 && (
              <article
                className="p-5 bg-[var(--bg-surface)] hover:bg-[var(--bg-card-hover)] transition-colors flex flex-col justify-between font-mono relative overflow-hidden"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, var(--border-subtle) 0, var(--border-subtle) 1px, transparent 1px, transparent 14px)",
                }}
              >
                <div className="border-2 border-dashed border-[var(--border-color)]/40 p-4 bg-[var(--bg-surface)]/80 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2 text-[0.62rem]">
                      <span className="text-[var(--accent-emerald)] font-bold">NEXT //</span>
                      <span className="b-tag text-[0.55rem] bg-[var(--bg-subtle)] text-[var(--accent-emerald)] border-[var(--accent-emerald)]/40 font-bold">
                        [ RESERVED ]
                      </span>
                    </div>

                    <h3 className="text-xs sm:text-sm font-bold text-[var(--text-primary)] tracking-tight mb-2">
                      Upcoming Accreditation Target
                    </h3>
                    <p className="text-[0.68rem] text-[var(--text-secondary)] leading-relaxed">
                      Continuous evaluation of next-generation offensive testing credentials and adversary emulation tracks.
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-[0.6rem]">
                    <span className="text-[var(--accent-emerald)] font-bold">⚡ IN PIPELINE</span>
                    <span className="text-[var(--text-muted)] text-[0.55rem]">[ STANDBY ]</span>
                  </div>
                </div>
              </article>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
