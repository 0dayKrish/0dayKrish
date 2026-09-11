"use client";

import React, { useState, useEffect, useRef } from "react";
import { portfolioData } from "@/data/portfolio";
import {
  X,
  FileText,
  Shield,
  Terminal,
  Users,
  Award,
  Send,
  ExternalLink,
  ChevronRight,
  Copy,
  Check,
  FolderGit2,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export function openSecurityDossier() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-security-dossier"));
  }
}

type DossierTab =
  | "overview"
  | "arsenal"
  | "projects"
  | "research"
  | "community"
  | "credentials"
  | "transmission";

export function SecurityDossier() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<DossierTab>("overview");
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const dossierRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Listen for custom event and hash changes
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    const handleHash = () => {
      if (window.location.hash === "#dossier") {
        setIsOpen(true);
      }
    };

    window.addEventListener("open-security-dossier", handleOpen);
    window.addEventListener("hashchange", handleHash);

    const timer = setTimeout(() => {
      if (window.location.hash === "#dossier") {
        setIsOpen(true);
      }
    }, 0);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("open-security-dossier", handleOpen);
      window.removeEventListener("hashchange", handleHash);
    };
  }, []);

  // Keyboard and body scroll management
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
      if (window.location.hash === "#dossier") {
        window.history.replaceState(null, "", " ");
      }
    };
  }, [isOpen]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(text);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const launchCaseStudy = (projectId: string) => {
    setIsOpen(false);
    setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent("open-project-drawer", { detail: { projectId } })
      );
    }, 150);
  };

  const tabs: { id: DossierTab; label: string; icon: React.ReactNode; num: string }[] = [
    { id: "overview", label: "SUBJECT BRIEF", icon: <FileText className="w-3.5 h-3.5" />, num: "01" },
    { id: "arsenal", label: "ARSENAL & SKILLS", icon: <Terminal className="w-3.5 h-3.5" />, num: "02" },
    { id: "projects", label: "FIELD BUILDS", icon: <FolderGit2 className="w-3.5 h-3.5" />, num: "03" },
    { id: "research", label: "THREAT RESEARCH", icon: <Shield className="w-3.5 h-3.5" />, num: "04" },
    { id: "community", label: "BSIDES VADODARA", icon: <Users className="w-3.5 h-3.5" />, num: "05" },
    { id: "credentials", label: "ACCREDITATIONS", icon: <Award className="w-3.5 h-3.5" />, num: "06" },
    { id: "transmission", label: "TRANSMISSION", icon: <Send className="w-3.5 h-3.5" />, num: "07" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="dossier-subject-heading"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/75 backdrop-blur-xs cursor-pointer"
            aria-hidden="true"
          />

          {/* Dossier Workstation Window */}
          <motion.div
            ref={dossierRef}
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96, y: shouldReduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96, y: 12 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: "easeOut" }}
            className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-[var(--bg-surface)] border-2 border-[var(--border-color)] shadow-[8px_8px_0px_var(--shadow-color)] z-10 overflow-hidden font-mono"
          >
            {/* Top Operational Bar */}
            <div className="flex items-center justify-between px-3 sm:px-5 py-2.5 bg-[var(--bg-subtle)] border-b border-[var(--border-color)] text-[0.62rem] tracking-wider text-[var(--text-secondary)] select-none">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-emerald)] animate-pulse inline-block" />
                <span className="font-bold text-[var(--text-primary)]">SECURITY DOSSIER {"//"} DECLASSIFIED PRACTITIONER RECORD</span>
                <span className="hidden md:inline text-[var(--text-muted)]">|</span>
                <span className="hidden md:inline text-[var(--accent-emerald)]">DOC_ID: DOSSIER-0DAYKRISH-2026.SEC</span>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close security dossier"
                className="inline-flex items-center gap-1.5 px-2 py-1 bg-[var(--bg-surface)] border border-[var(--border-color)] hover:bg-[var(--accent-emerald)] hover:text-white transition-colors text-[0.6rem] font-bold uppercase text-[var(--text-primary)] cursor-pointer"
              >
                <span>[ESC] CLOSE</span>
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Subject Dossier Identification Header */}
            <div className="p-4 sm:p-6 bg-[var(--bg-card)] border-b border-[var(--border-color)]">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                  <div className="text-[0.58rem] tracking-widest text-[var(--accent-emerald)] uppercase font-bold mb-1">
                    {"// SUBJECT IDENTIFICATION ARCHIVE"}
                  </div>
                  <h2
                    id="dossier-subject-heading"
                    className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[var(--text-primary)] uppercase leading-none"
                  >
                    KRISH SHARMA
                  </h2>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2 text-[0.65rem] text-[var(--text-secondary)]">
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-[var(--bg-subtle)] border border-[var(--border-subtle)] font-bold text-[var(--text-primary)]">
                      ALIAS: <span className="text-[var(--accent-emerald)]">0DAYKRISH</span>
                    </span>
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-[var(--bg-subtle)] border border-[var(--border-subtle)]">
                      STATUS: <span className="text-[var(--accent-emerald)] font-bold">ACTIVE PRACTITIONER</span>
                    </span>
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-[var(--bg-subtle)] border border-[var(--border-subtle)]">
                      HQ: <span>VADODARA, GUJARAT, INDIA</span>
                    </span>
                  </div>
                </div>

                {/* Structured Dossier Specification Matrix */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[0.6rem] max-w-lg w-full bg-[var(--bg-surface)] p-2.5 border border-[var(--border-color)]">
                  <div>
                    <div className="text-[var(--text-muted)] text-[0.52rem] uppercase">PRIMARY FOCUS</div>
                    <div className="font-bold text-[var(--text-primary)] truncate">OFFENSIVE SECURITY</div>
                  </div>
                  <div>
                    <div className="text-[var(--text-muted)] text-[0.52rem] uppercase">SPECIALIZATION</div>
                    <div className="font-bold text-[var(--accent-emerald)] truncate">WEB &amp; API SECURITY</div>
                  </div>
                  <div>
                    <div className="text-[var(--text-muted)] text-[0.52rem] uppercase">COMMUNITY</div>
                    <div className="font-bold text-[var(--text-primary)] truncate">FOUNDER, BSIDES VADODARA</div>
                  </div>
                  <div>
                    <div className="text-[var(--text-muted)] text-[0.52rem] uppercase">AI SECURITY</div>
                    <div className="font-bold text-[var(--text-primary)] truncate">MSec-CAIS CERTIFIED</div>
                  </div>
                  <div>
                    <div className="text-[var(--text-muted)] text-[0.52rem] uppercase">VULNERABILITY</div>
                    <div className="font-bold text-[var(--text-primary)] truncate">IDOR / BOLA / LOGIC</div>
                  </div>
                  <div>
                    <div className="text-[var(--text-muted)] text-[0.52rem] uppercase">TELEMETRY</div>
                    <div className="font-bold text-[var(--accent-emerald)] truncate">100% VERIFIED DATA</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dossier Navigation Tab Bar */}
            <div className="flex items-center overflow-x-auto no-scrollbar border-b border-[var(--border-color)] bg-[var(--bg-subtle)] text-[0.62rem]">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1.5 px-3.5 py-2.5 border-r border-[var(--border-color)] whitespace-nowrap transition-colors cursor-pointer select-none font-bold uppercase ${
                      isActive
                        ? "bg-[var(--bg-surface)] text-[var(--text-primary)] border-b-2 border-b-[var(--accent-emerald)]"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)]"
                    }`}
                  >
                    <span className="text-[var(--accent-emerald)] text-[0.55rem]">{tab.num}</span>
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Dossier Content Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
              {/* TAB 1: OVERVIEW BRIEF */}
              {activeTab === "overview" && (
                <div className="space-y-6">
                  <div>
                    <div className="text-[0.6rem] text-[var(--accent-emerald)] font-bold tracking-wider uppercase mb-1">
                      {"SECTION 01.1 // PRACTITIONER MISSION"}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] uppercase tracking-tight mb-3">
                      {portfolioData.about.headline}
                    </h3>
                    <div className="space-y-3 text-xs sm:text-[0.8rem] text-[var(--text-secondary)] leading-relaxed">
                      {portfolioData.about.manifestoParagraphs.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  </div>

                  {/* Operational Metrics */}
                  <div className="pt-4 border-t border-[var(--border-subtle)]">
                    <div className="text-[0.6rem] text-[var(--text-muted)] font-bold tracking-wider uppercase mb-3">
                      {"SECTION 01.2 // VERIFIED ATTRIBUTES"}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {portfolioData.about.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="p-3 border border-[var(--border-color)] bg-[var(--bg-card)]"
                        >
                          <div className="text-[0.55rem] text-[var(--text-muted)] uppercase tracking-widest">
                            {stat.label}
                          </div>
                          <div className="text-sm font-bold text-[var(--text-primary)] mt-1">
                            {stat.value}
                          </div>
                          <div className="text-[0.6rem] text-[var(--accent-emerald)] mt-0.5">
                            {stat.subtext}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ethics Charter */}
                  <div className="p-3.5 border border-[var(--border-color)] bg-[var(--bg-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div>
                      <div className="text-[0.58rem] text-[var(--accent-emerald)] font-bold uppercase tracking-widest">
                        {"// ETHICS CHARTER"}
                      </div>
                      <div className="text-[var(--text-primary)] font-bold mt-0.5">
                        Responsible Disclosure &amp; Non-Destructive Adversarial Rigor
                      </div>
                      <div className="text-[0.65rem] text-[var(--text-secondary)] mt-0.5">
                        Strict adherence to coordinated vulnerability disclosure timelines and legal scope boundaries.
                      </div>
                    </div>
                    <div className="px-2.5 py-1 bg-[var(--bg-surface)] border border-[var(--border-color)] text-[0.6rem] font-bold text-[var(--accent-emerald)] whitespace-nowrap self-start sm:self-auto">
                      [ ADVERSARIAL RIGOR ]
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: TECHNICAL ARSENAL */}
              {activeTab === "arsenal" && (
                <div className="space-y-6">
                  <div>
                    <div className="text-[0.6rem] text-[var(--accent-emerald)] font-bold tracking-wider uppercase mb-1">
                      {"SECTION 02 // TECHNICAL ARSENAL & CAPABILITIES"}
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      Structured offensive tooling, web application testing methodologies, and defensive auditing frameworks actively deployed in technical operations.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {portfolioData.skillCategories.map((cat, idx) => (
                      <div
                        key={cat.id}
                        className="p-4 border border-[var(--border-color)] bg-[var(--bg-card)] flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between text-[0.6rem] text-[var(--text-muted)] pb-2 border-b border-[var(--border-subtle)] mb-2.5">
                            <span className="font-bold text-[var(--accent-emerald)]">DOMAIN 02.{idx + 1}</span>
                            <span>{cat.skills.length} VECTORS</span>
                          </div>
                          <h4 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-tight mb-1.5">
                            {cat.title}
                          </h4>
                          {cat.description && (
                            <p className="text-[0.65rem] text-[var(--text-secondary)] mb-3">
                              {cat.description}
                            </p>
                          )}
                          <div className="flex flex-wrap gap-1.5">
                            {cat.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-2 py-0.5 bg-[var(--bg-subtle)] border border-[var(--border-subtle)] text-[0.6rem] text-[var(--text-primary)]"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: FIELD PROJECTS */}
              {activeTab === "projects" && (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <div className="text-[0.6rem] text-[var(--accent-emerald)] font-bold tracking-wider uppercase mb-1">
                        {"SECTION 03 // FIELD PROJECTS & SECURITY BUILDS"}
                      </div>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        Production software builds and offensive automation tools. Select any project to open its deep-dive case study drawer.
                      </p>
                    </div>
                    <span className="text-[0.6rem] text-[var(--text-muted)] font-bold self-start sm:self-auto">
                      {portfolioData.featuredProjects.length} REPOSITORIES
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {portfolioData.featuredProjects.map((proj) => (
                      <div
                        key={proj.id}
                        className="p-4 border border-[var(--border-color)] bg-[var(--bg-card)] flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between text-[0.6rem] text-[var(--text-muted)] pb-2 border-b border-[var(--border-subtle)] mb-2">
                            <span className="text-[var(--accent-emerald)] font-bold">{proj.category}</span>
                            <span>{proj.year}</span>
                          </div>
                          <h4 className="text-base font-bold text-[var(--text-primary)] mb-1">
                            {proj.title}
                          </h4>
                          <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
                            {proj.summary}
                          </p>
                          <div className="flex flex-wrap gap-1 mb-4">
                            {proj.technologies.slice(0, 5).map((tech) => (
                              <span
                                key={tech}
                                className="px-1.5 py-0.5 bg-[var(--bg-subtle)] border border-[var(--border-subtle)] text-[0.55rem] text-[var(--text-primary)]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between gap-2">
                          <button
                            type="button"
                            onClick={() => launchCaseStudy(proj.id)}
                            className="inline-flex items-center gap-1.5 text-[0.65rem] font-bold text-[var(--accent-emerald)] hover:underline uppercase cursor-pointer"
                          >
                            <span>OPEN CASE STUDY</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                          {proj.githubUrl && (
                            <a
                              href={proj.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[0.6rem] text-[var(--text-secondary)] hover:text-[var(--text-primary)] inline-flex items-center gap-1"
                            >
                              <span>GITHUB</span>
                              <ExternalLink className="w-2.5 h-2.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: THREAT RESEARCH */}
              {activeTab === "research" && (
                <div className="space-y-6">
                  <div>
                    <div className="text-[0.6rem] text-[var(--accent-emerald)] font-bold tracking-wider uppercase mb-1">
                      {"SECTION 04 // VULNERABILITY RESEARCH DOSSIERS"}
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      Technical writeups, threat modeling analyses, and proof-of-concept validations across modern application architectures.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {portfolioData.researchAndWriteups.map((res) => (
                      <div
                        key={res.id}
                        className="p-4 border border-[var(--border-color)] bg-[var(--bg-card)]"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-[var(--border-subtle)] mb-2 text-[0.6rem]">
                          <span className="text-[var(--accent-emerald)] font-bold">{res.category}</span>
                          <span className="text-[var(--text-muted)]">{res.scope}</span>
                        </div>
                        <h4 className="text-sm font-bold text-[var(--text-primary)] mb-1">
                          {res.title}
                        </h4>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
                          {res.summary}
                        </p>
                        {res.reportDetails && (
                          <div className="p-2.5 bg-[var(--bg-subtle)] border border-[var(--border-subtle)] text-[0.6rem] space-y-1 mb-3">
                            <div>
                              <span className="text-[var(--text-muted)] uppercase">VULN CLASS: </span>
                              <span className="font-bold text-[var(--text-primary)]">
                                {res.reportDetails.vulnerabilityClass}
                              </span>
                            </div>
                            <div>
                              <span className="text-[var(--text-muted)] uppercase">REMEDIATION: </span>
                              <span className="text-[var(--accent-emerald)]">
                                {res.reportDetails.remediation}
                              </span>
                            </div>
                          </div>
                        )}
                        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[var(--border-subtle)] text-[0.6rem]">
                          <div className="flex flex-wrap gap-1">
                            {res.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-1.5 py-0.5 bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[0.55rem]"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                          <span className="text-[var(--text-muted)]">{res.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 5: BSIDES VADODARA COMMUNITY */}
              {activeTab === "community" && (
                <div className="space-y-6">
                  <div>
                    <div className="text-[0.6rem] text-[var(--accent-emerald)] font-bold tracking-wider uppercase mb-1">
                      {"SECTION 05 // COMMUNITY ARCHITECTURE: BSIDES VADODARA"}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] uppercase tracking-tight mb-2">
                      {portfolioData.bsidesVadodara.title}
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {portfolioData.bsidesVadodara.overview}
                    </p>
                  </div>

                  {/* Core Pillars */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {portfolioData.bsidesVadodara.pillars.map((pillar) => (
                      <div
                        key={pillar.number}
                        className="p-3.5 border border-[var(--border-color)] bg-[var(--bg-card)]"
                      >
                        <div className="text-[var(--accent-emerald)] font-bold text-xs mb-1">
                          {pillar.number} {"//"} PILLAR
                        </div>
                        <div className="text-xs font-bold text-[var(--text-primary)] uppercase mb-1.5">
                          {pillar.title}
                        </div>
                        <p className="text-[0.65rem] text-[var(--text-secondary)] leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Community Action Card */}
                  <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div>
                      <div className="text-[0.6rem] text-[var(--accent-emerald)] font-bold uppercase">
                        {"// INDEPENDENT SECURITY INITIATIVE"}
                      </div>
                      <div className="font-bold text-[var(--text-primary)] mt-0.5">
                        BSides Vadodara Official Ecosystem Portal
                      </div>
                      <div className="text-[0.65rem] text-[var(--text-secondary)] mt-0.5">
                        Operating under international Security BSides community charter.
                      </div>
                    </div>
                    <a
                      href={portfolioData.bsidesVadodara.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-[var(--accent-emerald)] text-white text-[0.65rem] font-bold uppercase no-underline inline-flex items-center gap-1.5 hover:opacity-90 transition-opacity self-start sm:self-auto"
                    >
                      <span>VISIT BSIDES VADODARA</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              )}

              {/* TAB 6: ACCREDITATIONS & CREDLY BADGES */}
              {activeTab === "credentials" && (
                <div className="space-y-6">
                  <div>
                    <div className="text-[0.6rem] text-[var(--accent-emerald)] font-bold tracking-wider uppercase mb-1">
                      {"SECTION 06 // VERIFIED ACCREDITATIONS & PIPELINE"}
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      Industry credentials with third-party Credly verification links, alongside active practical offensive lab preparations.
                    </p>
                  </div>

                  {/* Completed Badges */}
                  <div>
                    <div className="text-[0.6rem] text-[var(--text-muted)] font-bold uppercase tracking-wider mb-2.5">
                      {"// COMPLETED & VERIFIED CREDENTIALS"}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {portfolioData.certifications
                        .filter((c) => c.status !== "In Progress")
                        .map((cert) => (
                          <div
                            key={cert.id}
                            className="p-3 border border-[var(--border-color)] bg-[var(--bg-card)] flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-center justify-between text-[0.55rem] text-[var(--text-muted)] pb-1.5 border-b border-[var(--border-subtle)] mb-2">
                                <span className="text-[var(--accent-emerald)] font-bold">VERIFIED</span>
                                <span>{cert.category}</span>
                              </div>
                              <div className="text-xs font-bold text-[var(--text-primary)] uppercase leading-snug mb-1">
                                {cert.name}
                              </div>
                              <div className="text-[0.62rem] text-[var(--text-secondary)]">
                                {cert.issuer}
                              </div>
                            </div>
                            {cert.verificationUrl && (
                              <div className="mt-3 pt-2 border-t border-[var(--border-subtle)]">
                                <a
                                  href={cert.verificationUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[0.58rem] text-[var(--accent-emerald)] hover:underline inline-flex items-center gap-1 font-bold uppercase"
                                >
                                  <span>CREDLY BADGE</span>
                                  <ExternalLink className="w-2.5 h-2.5" />
                                </a>
                              </div>
                            )}
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Active Pipeline */}
                  <div>
                    <div className="text-[0.6rem] text-[var(--accent-amber)] font-bold uppercase tracking-wider mb-2.5">
                      {"// ACTIVE LAB PIPELINE & CERTIFICATION TARGETS"}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {portfolioData.certifications
                        .filter((c) => c.status === "In Progress")
                        .map((cert) => (
                          <div
                            key={cert.id}
                            className="p-3 border border-dashed border-[var(--accent-amber)]/60 bg-[var(--bg-subtle)]"
                          >
                            <div className="flex items-center justify-between text-[0.55rem] text-[var(--accent-amber)] pb-1.5 border-b border-[var(--border-subtle)] mb-2 font-bold">
                              <span>IN PROGRESS</span>
                              <span>{cert.category}</span>
                            </div>
                            <div className="text-xs font-bold text-[var(--text-primary)] uppercase leading-snug mb-1">
                              {cert.name}
                            </div>
                            <div className="text-[0.62rem] text-[var(--text-secondary)] mb-1.5">
                              {cert.issuer}
                            </div>
                            {cert.focus && (
                              <div className="text-[0.58rem] text-[var(--text-muted)] italic">
                                Focus: {cert.focus}
                              </div>
                            )}
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 7: TRANSMISSION & CHANNELS */}
              {activeTab === "transmission" && (
                <div className="space-y-6">
                  <div>
                    <div className="text-[0.6rem] text-[var(--accent-emerald)] font-bold tracking-wider uppercase mb-1">
                      {"SECTION 07 // SECURE COMMUNICATION CHANNELS"}
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      Official contact endpoints for vulnerability disclosure coordination, security consultation, technical research, and BSides Vadodara inquiries.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Work Transmission */}
                    <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-card)] flex flex-col justify-between">
                      <div>
                        <div className="text-[0.55rem] text-[var(--text-muted)] uppercase tracking-widest mb-1">
                          COMMUNITY &amp; OPERATIONS EMAIL
                        </div>
                        <div className="text-sm font-bold text-[var(--text-primary)] break-all mb-2">
                          {portfolioData.identity.social.emailWork}
                        </div>
                        <p className="text-[0.65rem] text-[var(--text-secondary)] mb-4">
                          Direct channel for BSides Vadodara operational inquiries, CFP correspondence, and partnerships.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => copyToClipboard(portfolioData.identity.social.emailWork)}
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-[var(--bg-subtle)] border border-[var(--border-color)] hover:bg-[var(--accent-emerald)] hover:text-white transition-colors text-[0.65rem] font-bold uppercase cursor-pointer"
                      >
                        {copiedEmail === portfolioData.identity.social.emailWork ? (
                          <>
                            <Check className="w-3 h-3 text-[var(--accent-emerald)]" />
                            <span>COPIED TO CLIPBOARD</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>COPY WORK EMAIL</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Personal Transmission */}
                    <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-card)] flex flex-col justify-between">
                      <div>
                        <div className="text-[0.55rem] text-[var(--text-muted)] uppercase tracking-widest mb-1">
                          RESEARCH &amp; PERSONAL EMAIL
                        </div>
                        <div className="text-sm font-bold text-[var(--text-primary)] break-all mb-2">
                          {portfolioData.identity.social.emailPersonal}
                        </div>
                        <p className="text-[0.65rem] text-[var(--text-secondary)] mb-4">
                          Direct channel for technical research collaboration, offensive security queries, and penetration testing.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => copyToClipboard(portfolioData.identity.social.emailPersonal)}
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-[var(--bg-subtle)] border border-[var(--border-color)] hover:bg-[var(--accent-emerald)] hover:text-white transition-colors text-[0.65rem] font-bold uppercase cursor-pointer"
                      >
                        {copiedEmail === portfolioData.identity.social.emailPersonal ? (
                          <>
                            <Check className="w-3 h-3 text-[var(--accent-emerald)]" />
                            <span>COPIED TO CLIPBOARD</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>COPY PERSONAL EMAIL</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* External Network Profiles */}
                  <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-subtle)]">
                    <div className="text-[0.6rem] text-[var(--text-muted)] font-bold uppercase tracking-wider mb-2.5">
                      {"// EXTERNAL PRACTITIONER PROFILES"}
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                      <a
                        href={portfolioData.identity.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--accent-emerald)] text-[0.65rem] font-bold text-[var(--text-primary)] inline-flex items-center gap-1.5 no-underline transition-colors"
                      >
                        <span>LINKEDIN {"//"} @0DAYKRISH</span>
                        <ExternalLink className="w-3 h-3 text-[var(--accent-emerald)]" />
                      </a>
                      <a
                        href={portfolioData.identity.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--accent-emerald)] text-[0.65rem] font-bold text-[var(--text-primary)] inline-flex items-center gap-1.5 no-underline transition-colors"
                      >
                        <span>GITHUB {"//"} @0DAYKRISH</span>
                        <ExternalLink className="w-3 h-3 text-[var(--accent-emerald)]" />
                      </a>
                      <a
                        href={portfolioData.identity.social.bsidesUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--accent-emerald)] text-[0.65rem] font-bold text-[var(--accent-emerald)] inline-flex items-center gap-1.5 no-underline transition-colors"
                      >
                        <span>BSIDES VADODARA {"//"} BSIDESVADODARA.IN</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Dossier Workstation Footer */}
            <div className="px-4 py-2 bg-[var(--bg-subtle)] border-t border-[var(--border-color)] flex flex-wrap items-center justify-between text-[0.58rem] text-[var(--text-muted)] select-none">
              <div className="flex items-center gap-2">
                <span className="text-[var(--accent-emerald)] font-bold">VERIFIED PROFILE</span>
                <span>{"//"}</span>
                <span>NO CLASSIFIED OR FABRICATED DATA</span>
              </div>
              <div className="text-[var(--text-secondary)]">
                PRESS <kbd className="px-1 border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)]">ESC</kbd> TO RETURN
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
