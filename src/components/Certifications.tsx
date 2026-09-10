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
      className="py-16 sm:py-20 border-b border-[#0a0a0a]"
      aria-label="Certifications and Training"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <SectionHeader label="CREDENTIALS_&_TRAINING" number="006" id="credentials-heading" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
          <p className="font-mono text-xs sm:text-[0.8rem] text-[#575757] max-w-xl">
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
                ? "bg-[#0a0a0a] text-white border-[#0a0a0a]"
                : "bg-[#dedad1]/60 hover:bg-[#dedad1] text-[#0a0a0a]"
            }`}
          >
            [ ALL_REGISTRY ({certifications.length}) ]
          </button>
          <button
            onClick={() => setActiveFilter("completed")}
            className={`b-tag cursor-pointer transition-all duration-150 ${
              activeFilter === "completed"
                ? "bg-[#0a0a0a] text-white border-[#0a0a0a]"
                : "bg-[#dedad1]/60 hover:bg-[#dedad1] text-[#0a0a0a]"
            }`}
          >
            [ COMPLETED ({completedCount}) ]
          </button>
          <button
            onClick={() => setActiveFilter("in-progress")}
            className={`b-tag cursor-pointer transition-all duration-150 ${
              activeFilter === "in-progress"
                ? "bg-[#0a0a0a] text-white border-[#0a0a0a]"
                : "bg-[#dedad1]/60 hover:bg-[#dedad1] text-[#0a0a0a]"
            }`}
          >
            ⚡ [ IN_PROGRESS ({inProgressCount}) ]
          </button>
          <button
            onClick={() => setActiveFilter("credly")}
            className={`b-tag cursor-pointer transition-all duration-150 ${
              activeFilter === "credly"
                ? "bg-[#0a0a0a] text-white border-[#0a0a0a]"
                : "bg-[#dedad1]/60 hover:bg-[#dedad1] text-[#0a0a0a]"
            }`}
          >
            [ CREDLY_VERIFIED ({verifiedCount}) ]
          </button>
        </div>

        {/* Credentials Master Registry */}
        <div className="border border-[#0a0a0a] bg-[#0a0a0a] shadow-[4px_4px_0px_#0a0a0a]">
          {/* Box Header */}
          <div className="px-4 py-2.5 bg-[#dedad1] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 font-mono text-[0.65rem] tracking-wider text-[#575757]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
              <span className="text-[#0a0a0a] font-bold">CREDENTIALS.REGISTRY</span>
            </div>
            <span>
              {verifiedCount} VERIFIED ON CREDLY // {completedCount} COMPLETED // {inProgressCount} IN PROGRESS
            </span>
          </div>

          {/* 3-Column Responsive Grid (blocks of 3) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#0a0a0a]">
            {filteredCerts.map((cert, idx) => {
              const isInProgress = cert.status === "In Progress";

              // Distinct styling for In-Progress (Dark Tactical) vs Completed (Architectural Light)
              if (isInProgress) {
                return (
                  <article
                    key={cert.id}
                    className="p-5 bg-[#141414] hover:bg-[#1a1a1a] transition-all duration-150 flex flex-col justify-between font-mono group border-b-2 border-b-[#f59e0b]/40 relative overflow-hidden"
                  >
                    {/* Subtle top indicator bar */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#f59e0b]" />

                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2 text-[0.62rem]">
                        <span className="text-[#f59e0b] font-bold">
                          {String(idx + 1).padStart(2, "0")} {"//"}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <span className="b-tag text-[0.55rem] bg-[#262626] text-[#e4e4e7] border-[#3f3f46]">
                            {cert.category}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-[0.52rem] font-bold text-[#f59e0b] bg-[#f59e0b]/15 px-1.5 py-0.5 border border-[#f59e0b]/40">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-ping" />
                            TARGET IN PROGRESS
                          </span>
                        </div>
                      </div>

                      <h3 className="text-xs sm:text-sm font-bold text-white tracking-tight leading-snug mb-2 group-hover:text-[#f59e0b] transition-colors">
                        {cert.name}
                      </h3>

                      <div className="text-[0.68rem] text-[#a1a1aa]">
                        ISSUER: <span className="font-semibold text-white">{cert.issuer}</span>
                      </div>

                      {cert.focus && (
                        <p className="mt-2.5 text-[0.65rem] text-[#a1a1aa] leading-relaxed font-mono border-l-2 border-[#f59e0b]/40 pl-2">
                          {cert.focus}
                        </p>
                      )}
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#27272a] flex flex-col gap-2">
                      <div className="flex items-center justify-between text-[0.6rem]">
                        <span className="text-[#f59e0b] font-bold flex items-center gap-1.5">
                          <Clock className="w-3 h-3 text-[#f59e0b] animate-spin" style={{ animationDuration: "6s" }} />
                          ⚡ IN PROGRESS
                        </span>
                        <span className="text-[#a1a1aa] text-[0.55rem]">
                          [ ACTIVE LAB STUDY ]
                        </span>
                      </div>

                      <div className="inline-flex items-center justify-between w-full px-2.5 py-1.5 bg-[#262626] hover:bg-[#2e2e2e] border border-[#f59e0b]/40 text-[#f59e0b] font-mono text-[0.6rem] font-bold tracking-wider transition-colors shadow-[2px_2px_0px_#000000]">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse" />
                          <span>ACTIVE LABS &amp; EXAM PREP</span>
                        </span>
                        <span className="text-[0.55rem] text-[#e4e4e7]">[ CANDIDATE ]</span>
                      </div>
                    </div>
                  </article>
                );
              }

              // Completed & Certified card (Architectural Light theme)
              return (
                <article
                  key={cert.id}
                  className="p-5 bg-[#f4f3ef] hover:bg-white transition-colors flex flex-col justify-between font-mono group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2 text-[0.62rem]">
                      <span className="text-[#059669] font-bold">
                        {String(idx + 1).padStart(2, "0")} {"//"}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="b-tag text-[0.55rem] bg-[#dedad1]">
                          {cert.category}
                        </span>
                        {cert.verificationUrl && (
                          <span className="inline-flex items-center gap-1 text-[0.52rem] font-bold text-[#059669] bg-[#059669]/10 px-1 py-0.5 border border-[#059669]/30">
                            <ShieldCheck className="w-2.5 h-2.5 text-[#059669]" />
                            VERIFIED
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 className="text-xs sm:text-sm font-bold text-[#0a0a0a] tracking-tight leading-snug mb-2 group-hover:text-[#059669] transition-colors">
                      {cert.name}
                    </h3>

                    <div className="text-[0.68rem] text-[#575757]">
                      ISSUER: <span className="font-semibold text-[#0a0a0a]">{cert.issuer}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#0a0a0a]/15 flex flex-col gap-2">
                    <div className="flex items-center justify-between text-[0.6rem]">
                      <span className="text-[#059669] font-bold flex items-center gap-1">
                        ● {cert.status.toUpperCase()}
                      </span>
                      <span className="text-[#78716c] text-[0.55rem]">
                        [ RECORDED ]
                      </span>
                    </div>

                    {cert.verificationUrl ? (
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-between w-full px-2.5 py-1.5 bg-[#0a0a0a] hover:bg-[#059669] text-[#f4f3ef] hover:text-white border border-[#0a0a0a] font-mono text-[0.62rem] font-bold tracking-wider transition-all duration-150 group/btn shadow-[2px_2px_0px_#059669] cursor-pointer"
                      >
                        <span className="flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#059669] group-hover/btn:text-white transition-colors" />
                          <span>
                            {cert.verificationUrl.includes("credly.com")
                              ? "VERIFY ON CREDLY"
                              : "VERIFY CREDENTIAL"}
                          </span>
                        </span>
                        <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    ) : (
                      <div className="inline-flex items-center justify-between w-full px-2.5 py-1.5 bg-[#dedad1]/60 border border-[#0a0a0a]/15 text-[#575757] font-mono text-[0.6rem]">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                          <span>ACCREDITED</span>
                        </span>
                        <span className="text-[0.55rem] text-[#78716c]">[ ID RECORDED ]</span>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}

            {/* THE EMPTY PART: Intentional Architectural Blueprint Placeholder */}
            {emptySlots === 2 && (
              <article
                className="col-span-1 md:col-span-2 p-5 bg-[#eae7df] hover:bg-[#e4e0d6] transition-colors flex flex-col justify-between font-mono relative overflow-hidden"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, rgba(10,10,10,0.035) 0, rgba(10,10,10,0.035) 10px, transparent 10px, transparent 20px)",
                }}
              >
                <div className="border-2 border-dashed border-[#0a0a0a]/25 p-4 bg-[#eae7df]/80 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2 text-[0.62rem]">
                      <div className="flex items-center gap-2">
                        <span className="text-[#059669] font-bold">11 - 12 //</span>
                        <span className="b-tag text-[0.55rem] bg-[#dedad1] text-[#0a0a0a] border-[#0a0a0a]/30">
                          PIPELINE BUFFER
                        </span>
                      </div>
                      <span className="b-tag text-[0.55rem] bg-[#dedad1] text-[#059669] border-[#059669]/40 font-bold">
                        [ 02 SLOTS RESERVED ]
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-1.5 mt-2">
                      <Layers className="w-4 h-4 text-[#059669]" />
                      <h3 className="text-xs sm:text-sm font-bold text-[#0a0a0a] tracking-tight uppercase">
                        Continuous Security Accreditation Roadmap
                      </h3>
                    </div>

                    <p className="text-[0.68rem] text-[#575757] leading-relaxed max-w-xl">
                      Dedicated pipeline capacity allocated for senior offensive security benchmarks, advanced adversary emulation certifications, and published vulnerability research achievements.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 text-[0.6rem]">
                      <div className="p-2 bg-[#dedad1]/90 border border-[#0a0a0a]/15 flex items-center justify-between">
                        <div>
                          <span className="text-[#059669] font-bold">SLOT_11:</span> ADVANCED EXPLOITATION
                        </div>
                        <span className="text-[0.55rem] text-[#78716c]">[ IN EVALUATION ]</span>
                      </div>
                      <div className="p-2 bg-[#dedad1]/90 border border-[#0a0a0a]/15 flex items-center justify-between">
                        <div>
                          <span className="text-[#059669] font-bold">SLOT_12:</span> CLOUD &amp; RED TEAM
                        </div>
                        <span className="text-[0.55rem] text-[#78716c]">[ ROADMAP 2026 ]</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#0a0a0a]/15 flex items-center justify-between text-[0.6rem]">
                    <span className="text-[#059669] font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                      ⚡ AND MANY MORE TO COME
                    </span>
                    <span className="text-[#78716c] text-[0.55rem] font-mono">
                      [ STANDBY FOR NEXT ACCREDITATIONS ↗ ]
                    </span>
                  </div>
                </div>
              </article>
            )}

            {emptySlots === 1 && (
              <article
                className="p-5 bg-[#eae7df] hover:bg-[#e4e0d6] transition-colors flex flex-col justify-between font-mono relative overflow-hidden"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, rgba(10,10,10,0.035) 0, rgba(10,10,10,0.035) 10px, transparent 10px, transparent 20px)",
                }}
              >
                <div className="border-2 border-dashed border-[#0a0a0a]/25 p-4 bg-[#eae7df]/80 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2 text-[0.62rem]">
                      <span className="text-[#059669] font-bold">NEXT //</span>
                      <span className="b-tag text-[0.55rem] bg-[#dedad1] text-[#059669] border-[#059669]/40 font-bold">
                        [ RESERVED ]
                      </span>
                    </div>

                    <h3 className="text-xs sm:text-sm font-bold text-[#0a0a0a] tracking-tight mb-2">
                      Upcoming Accreditation Target
                    </h3>
                    <p className="text-[0.68rem] text-[#575757] leading-relaxed">
                      Continuous evaluation of next-generation offensive testing credentials and adversary emulation tracks.
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#0a0a0a]/15 flex items-center justify-between text-[0.6rem]">
                    <span className="text-[#059669] font-bold">⚡ IN PIPELINE</span>
                    <span className="text-[#78716c] text-[0.55rem]">[ STANDBY ]</span>
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
