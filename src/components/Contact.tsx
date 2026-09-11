"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeader } from "./ui/SectionHeader";

export function Contact() {
  const { identity } = portfolioData;
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string>("Security Assessment / Pentesting");
  const [userSubject, setUserSubject] = useState<string>("");
  const [userMessage, setUserMessage] = useState<string>("");

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const topics = [
    "Security Assessment / Pentesting",
    "AI Red Teaming & Vulnerability Research",
    "BSides Vadodara (Sponsorship / Speaking)",
    "General Cybersecurity Discussion",
  ];

  const targetEmail =
    selectedTopic.includes("BSides") || selectedTopic.includes("Assessment")
      ? identity.social.emailWork
      : identity.social.emailPersonal;

  const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(
    `[${selectedTopic}] ${userSubject || "Security Inquiry"}`
  )}&body=${encodeURIComponent(userMessage || "Hello Krish,\n\nI would like to discuss...")}`;

  return (
    <section id="contact" className="py-16 sm:py-24 border-b border-[var(--border-color)]" aria-label="Contact Krish Sharma">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <SectionHeader label="SECURE_TRANSMISSION" number="008" id="contact-heading" />

        <div className="border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-[5px_5px_0px_var(--shadow-color)]">
          {/* Header */}
          <div className="border-b border-[var(--border-color)] px-4 py-2.5 bg-[var(--bg-subtle)] flex items-center justify-between font-mono text-[0.65rem] tracking-wider text-[var(--text-secondary)]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-emerald)] animate-pulse-glow" />
              <span className="text-[var(--text-primary)] font-bold">TRANSMISSION_ENDPOINT.SH</span>
            </div>
            <span>PORT: 443 // ENCRYPTED</span>
          </div>

          <div className="p-6 sm:p-10">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Direct Invites */}
              <div className="lg:col-span-6 font-mono">
                <div className="inline-flex items-center gap-2 mb-3 border border-[var(--border-color)] bg-[var(--bg-subtle)] px-2.5 py-0.5 text-[0.62rem] tracking-widest text-[var(--text-primary)]">
                  <span className="text-[var(--accent-emerald)] font-bold">COMMUNICATION // DIRECT</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] tracking-tight leading-none mb-4">
                  LET&apos;S TALK SECURITY.
                </h2>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-8">
                  Whether you have an inquiry regarding offensive security assessments, AI red teaming, BSides Vadodara sponsorship and speaking, or technical security research collaboration—my inbox is open.
                </p>

                {/* Email Direct Contact Cards */}
                <div className="space-y-3 mb-8">
                  {/* Work Email Card */}
                  <div className="border border-[var(--border-color)] bg-[var(--bg-card)] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-[2px_2px_0px_var(--shadow-color)]">
                    <div>
                      <div className="text-[0.6rem] text-[var(--accent-emerald)] font-bold tracking-widest uppercase">
                        WORK &amp; COMMUNITY INQUIRIES
                      </div>
                      <a
                        href={`mailto:${identity.social.emailWork}`}
                        className="text-xs sm:text-sm font-bold text-[var(--text-primary)] hover:underline"
                      >
                        {identity.social.emailWork}
                      </a>
                    </div>
                    <button
                      onClick={() => copyToClipboard(identity.social.emailWork, "work")}
                      className="b-tag cursor-pointer self-start sm:self-auto hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)]"
                      aria-label="Copy work email to clipboard"
                    >
                      {copiedKey === "work" ? "✓ COPIED" : "COPY EMAIL"}
                    </button>
                  </div>

                  {/* Personal Email Card */}
                  <div className="border border-[var(--border-color)] bg-[var(--bg-card)] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-[2px_2px_0px_var(--shadow-color)]">
                    <div>
                      <div className="text-[0.6rem] text-[var(--text-secondary)] font-bold tracking-widest uppercase">
                        PERSONAL &amp; RESEARCH INQUIRIES
                      </div>
                      <a
                        href={`mailto:${identity.social.emailPersonal}`}
                        className="text-xs sm:text-sm font-bold text-[var(--text-primary)] hover:underline"
                      >
                        {identity.social.emailPersonal}
                      </a>
                    </div>
                    <button
                      onClick={() => copyToClipboard(identity.social.emailPersonal, "personal")}
                      className="b-tag cursor-pointer self-start sm:self-auto hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)]"
                      aria-label="Copy personal email to clipboard"
                    >
                      {copiedKey === "personal" ? "✓ COPIED" : "COPY EMAIL"}
                    </button>
                  </div>
                </div>

                {/* Professional Links */}
                <div className="flex flex-wrap gap-2 text-[0.65rem]">
                  <a
                    href={identity.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="b-tag"
                  >
                    LINKEDIN: 0daykrish ↗
                  </a>
                  <a
                    href={identity.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="b-tag"
                  >
                    GITHUB: 0daykrish ↗
                  </a>
                  <a
                    href={identity.social.bsidesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="b-tag b-tag-emerald"
                  >
                    BSIDES: bsidesvadodara.in ↗
                  </a>
                </div>
              </div>

              {/* Right Column: Direct Mail Composer */}
              <div className="lg:col-span-6 font-mono border border-[var(--border-color)] bg-[var(--bg-subtle)] p-5 sm:p-6 shadow-[3px_3px_0px_var(--shadow-color)]">
                <div className="border-b border-[var(--border-color)] pb-2 mb-4 flex items-center justify-between text-[0.62rem] text-[var(--text-secondary)]">
                  <span>DISPATCH_COMPOSER</span>
                  <span className="text-[var(--accent-emerald)] font-bold">ROUTE: {targetEmail}</span>
                </div>

                {/* Topic Selector */}
                <div className="mb-4">
                  <label className="block text-[0.62rem] font-bold text-[var(--text-primary)] uppercase tracking-wider mb-2">
                    SELECT TRANSMISSION TOPIC:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {topics.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setSelectedTopic(t)}
                        className={`text-left p-2 border text-[0.62rem] cursor-pointer transition-colors ${
                          selectedTopic === t
                            ? "border-[var(--border-color)] bg-[var(--text-primary)] text-[var(--bg-primary)] font-bold"
                            : "border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)]"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Subject Input */}
                <div className="mb-4">
                  <label htmlFor="contact-subject" className="block text-[0.62rem] font-bold text-[var(--text-primary)] uppercase tracking-wider mb-1.5">
                    SUBJECT / REFERENCE:
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={userSubject}
                    onChange={(e) => setUserSubject(e.target.value)}
                    placeholder="e.g. Red Team Scope / BSides Vadodara CFP"
                    className="w-full px-3 py-2 bg-[var(--bg-card)] border border-[var(--border-color)] text-xs text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-emerald)]"
                  />
                </div>

                {/* Message Input */}
                <div className="mb-5">
                  <label htmlFor="contact-message" className="block text-[0.62rem] font-bold text-[var(--text-primary)] uppercase tracking-wider mb-1.5">
                    TRANSMISSION BODY:
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    placeholder="Briefly describe your objectives, scope, or questions..."
                    className="w-full px-3 py-2 bg-[var(--bg-card)] border border-[var(--border-color)] text-xs text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-emerald)]"
                  />
                </div>

                {/* Submit Mailto Button */}
                <a
                  href={mailtoUrl}
                  className="btn-brutalist w-full justify-center text-center"
                >
                  <span className="btn-tab">→</span>
                  <span className="btn-body w-full justify-center">LAUNCH MAIL CLIENT &amp; TRANSMIT</span>
                </a>

                <div className="mt-3 text-center text-[0.58rem] text-[var(--text-secondary)]">
                  Launches your default mail client with routing pre-filled to <span className="text-[var(--text-primary)] font-bold">{targetEmail}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
