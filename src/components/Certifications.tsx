"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeader } from "./ui/SectionHeader";

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
            Verified professional accreditations, vendor certifications, and technical training across AI security, networking, and software engineering.
          </p>
          <span className="b-tag b-tag-emerald">
            VERIFIED CREDENTIALS LOG
          </span>
        </div>

        {/* Credentials Grid */}
        <div className="border border-[#0a0a0a] bg-[#eae7df] shadow-[4px_4px_0px_#0a0a0a]">
          {/* Box Header */}
          <div className="border-b border-[#0a0a0a] px-4 py-2.5 bg-[#dedad1] flex items-center justify-between font-mono text-[0.65rem] tracking-wider text-[#575757]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#059669]" />
              <span className="text-[#0a0a0a] font-bold">CREDENTIALS.REGISTRY</span>
            </div>
            <span>{certifications.length + 1} ENTRIES RECORDED</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x lg:divide-x border-b border-[#0a0a0a]">
            {certifications.slice(0, 3).map((cert, idx) => (
              <article
                key={cert.id}
                className="p-5 bg-[#f4f3ef] hover:bg-white transition-colors flex flex-col justify-between font-mono border-b md:border-b-0 border-[#0a0a0a]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2 text-[0.62rem]">
                    <span className="text-[#059669] font-bold">0{idx + 1} {"//"}</span>
                    <span className="b-tag text-[0.55rem] bg-[#dedad1]">
                      {cert.category}
                    </span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#0a0a0a] tracking-tight leading-snug mb-2">
                    {cert.name}
                  </h3>
                  <div className="text-[0.68rem] text-[#575757]">
                    ISSUER: <span className="font-semibold text-[#0a0a0a]">{cert.issuer}</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-[#0a0a0a]/15 flex items-center justify-between text-[0.6rem]">
                  <span className="text-[#059669] font-bold">● {cert.status}</span>
                  <span className="text-[#a8a29e]">[ RECORDED ]</span>
                </div>
              </article>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x lg:divide-x">
            {certifications.slice(3, 6).map((cert, idx) => (
              <article
                key={cert.id}
                className="p-5 bg-[#f4f3ef] hover:bg-white transition-colors flex flex-col justify-between font-mono border-b md:border-b-0 border-[#0a0a0a]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2 text-[0.62rem]">
                    <span className="text-[#059669] font-bold">0{idx + 4} {"//"}</span>
                    <span className="b-tag text-[0.55rem] bg-[#dedad1]">
                      {cert.category}
                    </span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#0a0a0a] tracking-tight leading-snug mb-2">
                    {cert.name}
                  </h3>
                  <div className="text-[0.68rem] text-[#575757]">
                    ISSUER: <span className="font-semibold text-[#0a0a0a]">{cert.issuer}</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-[#0a0a0a]/15 flex items-center justify-between text-[0.6rem]">
                  <span className="text-[#059669] font-bold">● {cert.status}</span>
                  <span className="text-[#a8a29e]">[ RECORDED ]</span>
                </div>
              </article>
            ))}

            {/* Continuing Research / Forthcoming slot */}
            <article className="p-5 bg-[#dedad1]/60 hover:bg-[#dedad1] transition-colors flex flex-col justify-between font-mono">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2 text-[0.62rem]">
                  <span className="text-[#059669] font-bold">07 {"//"}</span>
                  <span className="b-tag text-[0.55rem] b-tag-emerald">
                    IN PROGRESS
                  </span>
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-[#0a0a0a] tracking-tight leading-snug mb-2">
                  Advanced Offensive Security &amp; LLM Red Teaming Accreditations
                </h3>
                <div className="text-[0.68rem] text-[#575757]">
                  Ongoing vulnerability research and specialized offensive security certifications.
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#0a0a0a]/15 flex items-center justify-between text-[0.6rem]">
                <span className="text-[#059669] font-bold">⚡ IN PIPELINE</span>
                <span className="text-[#575757]">AND MANY MORE TO COME</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
