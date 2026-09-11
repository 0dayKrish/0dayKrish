"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeader } from "./ui/SectionHeader";
import {
  Layers,
  ArrowRight,
  Crosshair,
  FileCode,
  Terminal,
} from "lucide-react";
import { useReducedMotion } from "framer-motion";

export function AttackSurface() {
  const { attackSurfaceDomains, featuredProjects, researchAndWriteups } = portfolioData;
  const [selectedDomainId, setSelectedDomainId] = useState<string>("web-security");
  const [hoveredDomainId, setHoveredDomainId] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const selectedDomain =
    attackSurfaceDomains.find((d) => d.id === selectedDomainId) || attackSurfaceDomains[0];

  // Helper to trigger the Project Case Study Drawer from attack surface
  const handleOpenProject = (projectId: string) => {
    window.dispatchEvent(
      new CustomEvent("open-project-drawer", { detail: { projectId } })
    );
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Coordinates for the 8 nodes in SVG viewBox 800 x 500
  // Center is at 400, 240
  const centerPoint = { x: 400, y: 240 };
  const radiusX = 290;
  const radiusY = 155;

  const nodePositions = attackSurfaceDomains.map((domain, index) => {
    // 8 nodes evenly distributed starting from top (-90 degrees)
    const angle = (index * 2 * Math.PI) / attackSurfaceDomains.length - Math.PI / 2;
    return {
      domain,
      x: centerPoint.x + radiusX * Math.cos(angle),
      y: centerPoint.y + radiusY * Math.sin(angle),
    };
  });

  return (
    <section
      id="attack-surface"
      className="py-16 sm:py-20 border-b border-[var(--border-color)] bg-[var(--bg-primary)]"
      aria-label="Attack Surface & Security Domains"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <SectionHeader label="ATTACK_SURFACE" number="003" id="attack-surface-heading" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
          <p className="font-mono text-xs sm:text-[0.8rem] text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            Relational attack-surface mapping illustrating active security specializations, testing boundaries, and operational domains. Select any node to inspect applied technologies and linked dossiers.
          </p>
          <div className="font-mono text-[0.62rem] text-[var(--text-secondary)] bg-[var(--bg-subtle)] border border-[var(--border-color)] px-2.5 py-1 tracking-wider uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-emerald)] animate-pulse" />
            <span>TOPOLOGY: 8 DOMAINS CONNECTED</span>
          </div>
        </div>

        {/* Desktop Interactive SVG Network Visualization */}
        <div className="hidden lg:block border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-[4px_4px_0px_var(--shadow-color)] relative overflow-hidden mb-6">
          {/* Window Header */}
          <div className="border-b border-[var(--border-color)] px-4 py-2.5 bg-[var(--bg-subtle)] flex items-center justify-between font-mono text-[0.62rem] tracking-wider text-[var(--text-secondary)]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-emerald)]" />
              <span className="text-[var(--text-primary)] font-bold">
                TOPOLOGY_VIEWER // RELATIONAL_GRAPH.MAP
              </span>
            </div>
            <span className="text-[var(--text-muted)]">INTERACTION: HOVER / CLICK NODE</span>
          </div>

          <div className="relative w-full h-[520px] bg-[var(--bg-primary)]/40 flex items-center justify-center select-none">
            {/* SVG Connecting Vectors */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 800 480"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="var(--accent-emerald)" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="var(--accent-emerald)" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Background Radar Range Rings */}
              <circle
                cx={centerPoint.x}
                cy={centerPoint.y}
                r={radiusX * 0.5}
                fill="none"
                stroke="var(--border-color)"
                strokeWidth="1"
                strokeDasharray="4 4"
                opacity="0.3"
              />
              <ellipse
                cx={centerPoint.x}
                cy={centerPoint.y}
                rx={radiusX}
                ry={radiusY}
                fill="none"
                stroke="var(--border-color)"
                strokeWidth="1"
                strokeDasharray="3 3"
                opacity="0.4"
              />

              {/* Connecting Lines from Center to Each Node */}
              {nodePositions.map(({ domain, x, y }) => {
                const isSelected = selectedDomainId === domain.id;
                const isHovered = hoveredDomainId === domain.id;
                const isActive = isSelected || isHovered;

                return (
                  <g key={domain.id}>
                    <line
                      x1={centerPoint.x}
                      y1={centerPoint.y}
                      x2={x}
                      y2={y}
                      stroke={isActive ? "var(--accent-emerald)" : "var(--border-color)"}
                      strokeWidth={isActive ? 2 : 1}
                      strokeDasharray={isActive ? "none" : "3 3"}
                      opacity={isActive ? 1 : 0.4}
                      className="transition-all duration-300"
                    />
                    {isActive && !shouldReduceMotion && (
                      <circle r="3" fill="var(--accent-emerald)">
                        <animateMotion
                          path={`M ${centerPoint.x} ${centerPoint.y} L ${x} ${y}`}
                          dur="1.8s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}
                  </g>
                );
              })}

              {/* Inter-Domain Relational Arcs */}
              <path
                d={`M ${nodePositions[0].x} ${nodePositions[0].y} Q ${nodePositions[1].x} ${nodePositions[1].y} ${nodePositions[2].x} ${nodePositions[2].y}`}
                fill="none"
                stroke="var(--border-color)"
                strokeWidth="0.8"
                strokeDasharray="2 4"
                opacity="0.25"
              />
              <path
                d={`M ${nodePositions[6].x} ${nodePositions[6].y} Q ${nodePositions[7].x} ${nodePositions[7].y} ${nodePositions[0].x} ${nodePositions[0].y}`}
                fill="none"
                stroke="var(--border-color)"
                strokeWidth="0.8"
                strokeDasharray="2 4"
                opacity="0.25"
              />
            </svg>

            {/* Central Node: 0DAYKRISH */}
            <div
              style={{
                left: `${(centerPoint.x / 800) * 100}%`,
                top: `${(centerPoint.y / 480) * 100}%`,
                transform: "translate(-50%, -50%)",
              }}
              className="absolute z-20"
            >
              <div className="px-5 py-3 border-2 border-[var(--accent-emerald)] bg-[var(--bg-subtle)] text-[var(--text-primary)] shadow-[0px_0px_20px_var(--accent-emerald-glow)] flex flex-col items-center justify-center font-mono">
                <div className="flex items-center gap-1.5 text-[0.58rem] tracking-widest text-[var(--accent-emerald)] font-bold">
                  <Crosshair className="w-3 h-3" />
                  <span>ROOT_NODE</span>
                </div>
                <div className="text-sm font-bold tracking-wider text-[var(--text-primary)] mt-0.5">
                  0DAYKRISH
                </div>
                <div className="text-[0.55rem] text-[var(--text-secondary)] tracking-widest">
                  OFFENSIVE RESEARCH
                </div>
              </div>
            </div>

            {/* 8 Perimeter Security Domain Nodes */}
            {nodePositions.map(({ domain, x, y }) => {
              const isSelected = selectedDomainId === domain.id;
              const isHovered = hoveredDomainId === domain.id;

              return (
                <div
                  key={domain.id}
                  style={{
                    left: `${(x / 800) * 100}%`,
                    top: `${(y / 480) * 100}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  className="absolute z-20"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedDomainId(domain.id)}
                    onMouseEnter={() => setHoveredDomainId(domain.id)}
                    onMouseLeave={() => setHoveredDomainId(null)}
                    aria-label={`Inspect ${domain.label} security domain`}
                    className={`group px-3 py-2 border font-mono transition-all duration-200 cursor-pointer text-left whitespace-nowrap active:scale-95 ${
                      isSelected
                        ? "bg-[var(--text-primary)] text-[var(--bg-primary)] border-[var(--text-primary)] shadow-[4px_4px_0px_var(--accent-emerald)] -translate-y-0.5"
                        : isHovered
                        ? "bg-[var(--bg-card-hover)] border-[var(--accent-emerald)] text-[var(--text-primary)] shadow-[3px_3px_0px_var(--shadow-color)] -translate-y-0.5"
                        : "bg-[var(--bg-surface)] border-[var(--border-color)] text-[var(--text-primary)] shadow-[2px_2px_0px_var(--shadow-color)]"
                    }`}
                  >
                    <div className="flex items-center gap-1.5 text-[0.55rem] tracking-wider uppercase">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          isSelected ? "bg-[var(--bg-primary)]" : "bg-[var(--accent-emerald)]"
                        }`}
                      />
                      <span className={isSelected ? "text-[var(--bg-primary)]" : "text-[var(--text-secondary)]"}>
                        {domain.category}
                      </span>
                    </div>
                    <div className="text-xs font-bold tracking-tight mt-0.5 flex items-center justify-between gap-2">
                      <span>{domain.label}</span>
                      <span className={`text-[0.65rem] ${isSelected ? "text-[var(--bg-primary)]" : "text-[var(--accent-emerald)]"}`}>
                        {isSelected ? "■" : "→"}
                      </span>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile-Friendly Attack Surface Selector (Under 1024px) */}
        <div className="lg:hidden mb-6">
          {/* Mobile Identity Header */}
          <div className="p-4 border border-[var(--border-color)] bg-[var(--bg-surface)] mb-4 font-mono flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-emerald)] animate-pulse" />
              <div>
                <div className="text-[0.62rem] text-[var(--text-secondary)] tracking-widest uppercase">
                  CENTRAL NODE // TOPOLOGY
                </div>
                <div className="text-sm font-bold text-[var(--text-primary)]">
                  0DAYKRISH // ATTACK_SURFACE
                </div>
              </div>
            </div>
            <span className="text-[0.6rem] text-[var(--accent-emerald)] font-bold border border-[var(--border-color)] px-2 py-1 bg-[var(--bg-subtle)]">
              8 DOMAINS
            </span>
          </div>

          {/* Horizontally Scrollable Domain Selector */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none font-mono">
            {attackSurfaceDomains.map((domain) => {
              const isSelected = selectedDomainId === domain.id;
              return (
                <button
                  key={domain.id}
                  type="button"
                  onClick={() => setSelectedDomainId(domain.id)}
                  className={`flex-shrink-0 px-3 py-2 border text-xs font-bold uppercase transition-colors ${
                    isSelected
                      ? "bg-[var(--text-primary)] text-[var(--bg-primary)] border-[var(--text-primary)] shadow-[2px_2px_0px_var(--accent-emerald)]"
                      : "bg-[var(--bg-surface)] text-[var(--text-primary)] border-[var(--border-color)]"
                  }`}
                >
                  {domain.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Domain Telemetry Dossier Panel (Both Desktop & Mobile) */}
        <div className="border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-[4px_4px_0px_var(--shadow-color)] font-mono">
          <div className="border-b border-[var(--border-color)] px-4 py-2.5 bg-[var(--bg-subtle)] flex flex-wrap items-center justify-between gap-2 text-[0.65rem] tracking-wider text-[var(--text-secondary)]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-emerald)]" />
              <span className="text-[var(--text-primary)] font-bold uppercase">
                DOMAIN_INSPECTION // {selectedDomain.id}.SEC
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[var(--accent-emerald)] font-bold">
                CATEGORY: {selectedDomain.category}
              </span>
              <a
                href={selectedDomain.sectionLink}
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center gap-1 hover:underline"
              >
                <span>JUMP TO SECTION</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="grid lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Description & Tools */}
              <div className="lg:col-span-6 space-y-4">
                <div>
                  <div className="text-[0.62rem] text-[var(--accent-emerald)] font-bold tracking-widest uppercase mb-1">
                    {"// SCOPE & METHODOLOGY"}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] tracking-tight mb-2">
                    {selectedDomain.label}
                  </h3>
                  <p className="text-xs sm:text-[0.82rem] text-[var(--text-secondary)] leading-relaxed">
                    {selectedDomain.shortDescription}
                  </p>
                </div>

                <div>
                  <div className="text-[0.62rem] text-[var(--text-secondary)] tracking-widest uppercase mb-2 flex items-center gap-1.5">
                    <Layers className="w-3 h-3 text-[var(--accent-emerald)]" />
                    <span>APPLIED TECHNOLOGIES &amp; METHODOLOGIES</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedDomain.technologies.map((tech) => (
                      <span key={tech} className="b-tag text-[0.65rem]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Related Projects & Research */}
              <div className="lg:col-span-6 space-y-4 lg:border-l lg:border-[var(--border-subtle)] lg:pl-6">
                {/* Related Projects */}
                <div>
                  <div className="text-[0.62rem] text-[var(--text-secondary)] tracking-widest uppercase mb-2 flex items-center gap-1.5">
                    <FileCode className="w-3 h-3 text-[var(--accent-emerald)]" />
                    <span>CONNECTED TECHNICAL BUILDS</span>
                  </div>

                  {selectedDomain.relatedProjectIds.length > 0 ? (
                    <div className="space-y-2">
                      {selectedDomain.relatedProjectIds.map((pId) => {
                        const project = featuredProjects.find((p) => p.id === pId);
                        if (!project) return null;

                        return (
                          <div
                            key={pId}
                            onClick={() => handleOpenProject(pId)}
                            className="p-3 border border-[var(--border-color)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] transition-all cursor-pointer flex items-center justify-between group"
                          >
                            <div className="min-w-0 pr-2">
                              <div className="text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-emerald)] transition-colors truncate">
                                {project.title}
                              </div>
                              <div className="text-[0.62rem] text-[var(--text-secondary)] truncate">
                                {project.summary}
                              </div>
                            </div>
                            <span className="btn-brutalist flex-shrink-0">
                              <span className="btn-tab">→</span>
                              <span className="btn-body text-[0.6rem]">OPEN CASE STUDY</span>
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="p-3 border border-dashed border-[var(--border-subtle)] text-[0.65rem] text-[var(--text-muted)] italic">
                      No standalone GitHub builds directly tagged under this domain node; integrated into core research methodology and community initiatives.
                    </div>
                  )}
                </div>

                {/* Related Research Dossiers */}
                {selectedDomain.relatedResearchIds.length > 0 && (
                  <div>
                    <div className="text-[0.62rem] text-[var(--text-secondary)] tracking-widest uppercase mb-2 flex items-center gap-1.5">
                      <Terminal className="w-3 h-3 text-[var(--accent-emerald)]" />
                      <span>CONNECTED RESEARCH DOSSIERS</span>
                    </div>

                    <div className="space-y-2">
                      {selectedDomain.relatedResearchIds.map((rId) => {
                        const research = researchAndWriteups.find((r) => r.id === rId);
                        if (!research) return null;

                        return (
                          <a
                            key={rId}
                            href="#research"
                            className="p-2.5 border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:border-[var(--accent-emerald)] transition-all flex items-center justify-between block no-underline group"
                          >
                            <span className="text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-emerald)] transition-colors truncate pr-2">
                              {research.title}
                            </span>
                            <span className="text-[0.62rem] text-[var(--accent-emerald)] font-bold flex-shrink-0">
                              VIEW DOSSIER ↓
                            </span>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
