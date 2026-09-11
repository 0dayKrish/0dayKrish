"use client";

import React, { useState } from "react";

export function CyberRadar() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const leftNodes = [
    { id: "recon", label: "RECON", sub: "TARGET_SURFACE" },
    { id: "audit", label: "EXPLOIT", sub: "VECTOR_TESTING" },
    { id: "analyze", label: "RESEARCH", sub: "LOGIC_BYPASS" },
  ];

  const rightNodes = [
    { id: "llm", label: "AI_DEFENSE", sub: "PROMPT_SHIELD" },
    { id: "remediate", label: "REMEDIATE", sub: "PATCH_VERIFY" },
    { id: "community", label: "BSIDES", sub: "ECOSYSTEM" },
  ];

  return (
    <div className="w-full max-w-[560px] border border-[var(--border-color)] bg-[var(--bg-subtle)] p-4 sm:p-5 shadow-[4px_4px_0px_var(--shadow-color)] select-none">
      {/* Top telemetry bar */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-[var(--border-color)] text-[0.62rem] font-mono tracking-wider text-[var(--text-secondary)]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--accent-emerald)] animate-pulse-glow inline-block" />
          <span className="text-[var(--text-primary)] font-bold">TELEMETRY // SYS.ACTIVE</span>
        </div>
        <div className="hidden sm:block text-right tabular-nums">
          LOC: 22.3072°N 73.1812°E [VADODARA]
        </div>
      </div>

      {/* Main Diagram Area */}
      <div className="relative flex items-center justify-between gap-2 py-2">
        {/* Left Stack */}
        <div className="flex flex-col gap-2.5 z-10">
          {leftNodes.map((node) => (
            <button
              key={node.id}
              onClick={() => setActiveNode(node.id === activeNode ? null : node.id)}
              onMouseEnter={() => setActiveNode(node.id)}
              className={`text-left b-tag cursor-pointer transition-all duration-150 ${
                activeNode === node.id
                  ? "bg-[var(--text-primary)] text-[var(--bg-primary)] border-[var(--text-primary)]"
                  : "hover:bg-[var(--bg-surface)]"
              }`}
            >
              <span className="text-[0.6rem] tracking-wider">{node.label}</span>
            </button>
          ))}
        </div>

        {/* Center SVG Vector Reticle */}
        <div className="relative flex-1 flex items-center justify-center">
          <svg
            className="w-full max-w-[200px] h-[120px]"
            viewBox="0 0 200 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Left Connecting Lines */}
            <path d="M 0 22 L 65 60" stroke="var(--border-color)" strokeWidth="1" strokeDasharray="2 2" />
            <path d="M 0 60 L 65 60" stroke="var(--border-color)" strokeWidth="1" />
            <path d="M 0 98 L 65 60" stroke="var(--border-color)" strokeWidth="1" strokeDasharray="2 2" />

            {/* Right Connecting Lines */}
            <path d="M 135 60 L 200 22" stroke="var(--border-color)" strokeWidth="1" strokeDasharray="2 2" />
            <path d="M 135 60 L 200 60" stroke="var(--border-color)" strokeWidth="1" />
            <path d="M 135 60 L 200 98" stroke="var(--border-color)" strokeWidth="1" strokeDasharray="2 2" />

            {/* Outer Concentric Security Rings */}
            <circle cx="100" cy="60" r="42" stroke="var(--border-color)" strokeWidth="0.8" opacity="0.4" />
            <circle cx="100" cy="60" r="28" stroke="var(--border-color)" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="100" cy="60" r="14" stroke="var(--accent-emerald)" strokeWidth="1.5" />

            {/* Crosshairs */}
            <line x1="100" y1="12" x2="100" y2="108" stroke="var(--border-color)" strokeWidth="1" opacity="0.6" />
            <line x1="52" y1="60" x2="148" y2="60" stroke="var(--border-color)" strokeWidth="1" opacity="0.6" />

            {/* Corner Bracket Reticles */}
            <path d="M 72 32 L 68 32 L 68 36" stroke="var(--border-color)" strokeWidth="1.2" />
            <path d="M 128 32 L 132 32 L 132 36" stroke="var(--border-color)" strokeWidth="1.2" />
            <path d="M 72 88 L 68 88 L 68 84" stroke="var(--border-color)" strokeWidth="1.2" />
            <path d="M 128 88 L 132 88 L 132 84" stroke="var(--border-color)" strokeWidth="1.2" />

            {/* Center Blip */}
            <circle cx="100" cy="60" r="3.5" fill="var(--accent-emerald)" />
          </svg>
        </div>

        {/* Right Stack */}
        <div className="flex flex-col gap-2.5 z-10 items-end">
          {rightNodes.map((node) => (
            <button
              key={node.id}
              onClick={() => setActiveNode(node.id === activeNode ? null : node.id)}
              onMouseEnter={() => setActiveNode(node.id)}
              className={`text-right b-tag cursor-pointer transition-all duration-150 ${
                activeNode === node.id
                  ? "bg-[var(--text-primary)] text-[var(--bg-primary)] border-[var(--text-primary)]"
                  : "hover:bg-[var(--bg-surface)]"
              }`}
            >
              <span className="text-[0.6rem] tracking-wider">{node.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom status readout */}
      <div className="mt-3 pt-2.5 border-t border-[var(--border-color)] flex items-center justify-between text-[0.58rem] font-mono tracking-widest text-[var(--text-secondary)]">
        <span className="text-[var(--accent-emerald)] font-bold">
          {activeNode ? `// INSPECTING: ${activeNode.toUpperCase()}` : "// MODE: ADVERSARIAL_SIMULATION"}
        </span>
        <span className="tabular-nums">OWASP_LLM // MITRE_ATT&CK</span>
      </div>
    </div>
  );
}
