"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeader } from "./ui/SectionHeader";
import { ExternalLink, ShieldCheck } from "lucide-react";

export function Certifications() {
  const { certifications } = portfolioData;

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
            Verified professional accreditations, vendor credentials, and technical training across cloud infrastructure, AI security, networking, and software engineering.
          </p>
          <span className="b-tag b-tag-emerald">
            VERIFIED CREDENTIALS LOG
          </span>
        </div>

        {/* Credentials Master Registry */}
        <div className="border border-[#0a0a0a] bg-[#0a0a0a] shadow-[4px_4px_0px_#0a0a0a]">
          {/* Box Header */}
          <div className="px-4 py-2.5 bg-[#dedad1] flex items-center justify-between font-mono text-[0.65rem] tracking-wider text-[#575757]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
              <span className="text-[#0a0a0a] font-bold">CREDENTIALS.REGISTRY</span>
            </div>
            <span>{certifications.length + 1} ENTRIES RECORDED // 1 ACTIVE PIPELINE</span>
          </div>

          {/* 8-Card Responsive Grid with 1px border gap */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#0a0a0a]">
            {certifications.map((cert, idx) => (
              <article
                key={cert.id}
                className="p-5 bg-[#f4f3ef] hover:bg-white transition-colors flex flex-col justify-between font-mono group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2 text-[0.62rem]">
                    <span className="text-[#059669] font-bold">0{idx + 1} {"//"}</span>
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
                        <span>VERIFY ON CREDLY</span>
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
            ))}

            {/* 8th Entry: Ongoing / Forthcoming slot */}
            <article className="p-5 bg-[#dedad1]/60 hover:bg-[#dedad1] transition-colors flex flex-col justify-between font-mono">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2 text-[0.62rem]">
                  <span className="text-[#059669] font-bold">08 {"//"}</span>
                  <span className="b-tag text-[0.55rem] b-tag-emerald font-bold">
                    IN PIPELINE
                  </span>
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-[#0a0a0a] tracking-tight leading-snug mb-2">
                  Advanced Offensive Security &amp; LLM Red Teaming
                </h3>
                <div className="text-[0.68rem] text-[#575757] leading-relaxed">
                  Active vulnerability research and continuing accreditations targeting advanced penetration testing and adversarial AI attack surfaces.
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#0a0a0a]/15 flex flex-col gap-2">
                <div className="flex items-center justify-between text-[0.6rem]">
                  <span className="text-[#059669] font-bold">⚡ IN PIPELINE</span>
                  <span className="text-[#78716c] text-[0.55rem]">[ CONTINUOUS ]</span>
                </div>
                <div className="inline-flex items-center justify-center w-full px-2.5 py-1.5 bg-[#eae7df] border border-[#0a0a0a]/20 text-[#0a0a0a] font-mono text-[0.6rem] font-bold">
                  AND MANY MORE TO COME
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
