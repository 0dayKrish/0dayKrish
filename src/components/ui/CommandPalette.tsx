"use client";

import React, { useState, useEffect, useRef } from "react";
import { portfolioData } from "@/data/portfolio";
import {
  X,
  Check,
  CornerDownLeft,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface CommandItem {
  id: string;
  category: "NAVIGATION" | "PROJECTS" | "SYSTEM" | "EXTERNAL";
  title: string;
  subtitle?: string;
  shortcut?: string;
  action: () => void;
  keywords?: string[];
}

const emptySubscribe = () => () => {};

function getIsMac() {
  if (typeof navigator === "undefined") return false;
  return /(Mac|iPhone|iPod|iPad)/i.test(navigator.userAgent);
}

function getServerIsMac() {
  return false;
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const isMac = React.useSyncExternalStore(emptySubscribe, getIsMac, getServerIsMac);

  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const openPalette = () => {
    setQuery("");
    setSelectedIndex(0);
    setIsOpen(true);
  };

  const closePalette = () => {
    setIsOpen(false);
  };

  // Global keydown listeners for ⌘K / Ctrl+K and custom event
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => {
          if (!prev) {
            setQuery("");
            setSelectedIndex(0);
          }
          return !prev;
        });
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-palette", openPalette);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-palette", openPalette);
    };
  }, []);

  // Handle body overflow and auto-focus when palette opens
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const timer = setTimeout(() => inputRef.current?.focus(), 40);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "";
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  // Helper actions
  const navigateTo = (href: string) => {
    closePalette();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openProject = (projectId: string) => {
    closePalette();
    window.dispatchEvent(
      new CustomEvent("open-project-drawer", { detail: { projectId } })
    );
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleTheme = () => {
    closePalette();
    const isDark = document.documentElement.classList.contains("dark");
    const nextTheme = isDark ? "light" : "dark";

    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
    }

    try {
      localStorage.setItem("theme", nextTheme);
    } catch {}

    window.dispatchEvent(
      new CustomEvent("portfolio-theme-change", { detail: { theme: nextTheme } })
    );
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => {
      setCopiedText(null);
      closePalette();
    }, 800);
  };

  // Build command list
  const commands: CommandItem[] = [
    // Navigation
    {
      id: "nav-home",
      category: "NAVIGATION",
      title: "Go to Home",
      subtitle: "Hero, Identity & Telemetry",
      shortcut: "00",
      action: () => navigateTo("#hero"),
      keywords: ["home", "hero", "krish", "top"],
    },
    {
      id: "nav-about",
      category: "NAVIGATION",
      title: "Go to About",
      subtitle: "Practitioner Manifest & Scope",
      shortcut: "01",
      action: () => navigateTo("#about"),
      keywords: ["about", "manifesto", "bio", "founder"],
    },
    {
      id: "nav-currently",
      category: "NAVIGATION",
      title: "Go to Currently / Now",
      subtitle: "Active research, builds & certifications",
      shortcut: "02",
      action: () => navigateTo("#currently"),
      keywords: ["now", "currently", "status", "focus", "active"],
    },
    {
      id: "nav-attack-surface",
      category: "NAVIGATION",
      title: "Go to Attack Surface",
      subtitle: "Interactive 8-domain topology network",
      shortcut: "03",
      action: () => navigateTo("#attack-surface"),
      keywords: ["attack", "surface", "network", "domains", "topology"],
    },
    {
      id: "nav-skills",
      category: "NAVIGATION",
      title: "Go to Skills Matrix",
      subtitle: "Categorized technical competencies",
      shortcut: "04",
      action: () => navigateTo("#skills"),
      keywords: ["skills", "tools", "languages", "matrix"],
    },
    {
      id: "nav-methodology",
      category: "NAVIGATION",
      title: "Go to Security Methodology",
      subtitle: "6-phase adversarial testing pipeline",
      shortcut: "05",
      action: () => navigateTo("#methodology"),
      keywords: ["methodology", "recon", "map", "test", "process"],
    },
    {
      id: "nav-projects",
      category: "NAVIGATION",
      title: "Go to Projects",
      subtitle: "Technical builds and toolchains",
      shortcut: "06",
      action: () => navigateTo("#projects"),
      keywords: ["projects", "builds", "wraith", "code"],
    },
    {
      id: "nav-research",
      category: "NAVIGATION",
      title: "Go to Research Dossiers",
      subtitle: "BOLA, LLM Prompt Injection & JWT Writeups",
      shortcut: "07",
      action: () => navigateTo("#research"),
      keywords: ["research", "writeups", "vulnerabilities", "dossiers", "cve"],
    },
    {
      id: "nav-bsides",
      category: "NAVIGATION",
      title: "Go to BSides Vadodara",
      subtitle: "Community leadership & conference direction",
      shortcut: "08",
      action: () => navigateTo("#bsides"),
      keywords: ["bsides", "vadodara", "community", "conference", "leadership"],
    },
    {
      id: "nav-credentials",
      category: "NAVIGATION",
      title: "Go to Credentials & Accreditations",
      subtitle: "MSec-CAIS, CCST, Credly badges & in-progress",
      shortcut: "09",
      action: () => navigateTo("#credentials"),
      keywords: ["certifications", "credentials", "credly", "pt1", "crtp"],
    },
    {
      id: "nav-experience",
      category: "NAVIGATION",
      title: "Go to Experience Timeline",
      subtitle: "Leadership and research operations",
      shortcut: "10",
      action: () => navigateTo("#experience"),
      keywords: ["experience", "timeline", "history", "career"],
    },
    {
      id: "nav-contact",
      category: "NAVIGATION",
      title: "Go to Contact",
      subtitle: "Encrypted dispatch & direct emails",
      shortcut: "11",
      action: () => navigateTo("#contact"),
      keywords: ["contact", "email", "dispatch", "talk"],
    },

    // Individual Projects (Deep-dive drawer)
    ...portfolioData.featuredProjects.map((p) => ({
      id: `proj-${p.id}`,
      category: "PROJECTS" as const,
      title: `View Case Study: ${p.title}`,
      subtitle: `${p.category} // ${p.technologies.slice(0, 3).join(", ")}`,
      action: () => openProject(p.id),
      keywords: ["project", p.title.toLowerCase(), p.category.toLowerCase(), ...p.technologies.map(t => t.toLowerCase())],
    })),

    // System Actions
    {
      id: "sys-theme",
      category: "SYSTEM",
      title: "Switch Theme (Dark / Light Mode)",
      subtitle: "Toggle between #07130F and Concrete Light",
      action: toggleTheme,
      keywords: ["theme", "dark", "light", "mode", "color"],
    },
    {
      id: "sys-copy-personal",
      category: "SYSTEM",
      title: "Copy Personal Email",
      subtitle: portfolioData.identity.social.emailPersonal,
      action: () => copyToClipboard(portfolioData.identity.social.emailPersonal, "personal"),
      keywords: ["email", "copy", "personal", "gmail"],
    },
    {
      id: "sys-copy-work",
      category: "SYSTEM",
      title: "Copy BSides Work Email",
      subtitle: portfolioData.identity.social.emailWork,
      action: () => copyToClipboard(portfolioData.identity.social.emailWork, "work"),
      keywords: ["email", "copy", "work", "bsides"],
    },

    // External Profiles
    {
      id: "ext-github",
      category: "EXTERNAL",
      title: "Open GitHub Profile",
      subtitle: "github.com/0daykrish",
      action: () => {
        closePalette();
        window.open(portfolioData.identity.social.github, "_blank", "noopener,noreferrer");
      },
      keywords: ["github", "git", "repo", "source", "external"],
    },
    {
      id: "ext-linkedin",
      category: "EXTERNAL",
      title: "Open LinkedIn Profile",
      subtitle: "linkedin.com/in/0daykrish",
      action: () => {
        closePalette();
        window.open(portfolioData.identity.social.linkedin, "_blank", "noopener,noreferrer");
      },
      keywords: ["linkedin", "social", "external"],
    },
    {
      id: "ext-bsides",
      category: "EXTERNAL",
      title: "Visit BSides Vadodara Official Site",
      subtitle: "bsidesvadodara.in",
      action: () => {
        closePalette();
        window.open(portfolioData.identity.social.bsidesUrl, "_blank", "noopener,noreferrer");
      },
      keywords: ["bsides", "vadodara", "official", "conference", "external"],
    },
  ];

  // Filter commands by query
  const filteredCommands = query.trim() === ""
    ? commands
    : commands.filter((cmd) => {
        const q = query.toLowerCase();
        return (
          cmd.title.toLowerCase().includes(q) ||
          cmd.subtitle?.toLowerCase().includes(q) ||
          cmd.category.toLowerCase().includes(q) ||
          cmd.keywords?.some((k) => k.includes(q))
        );
      });

  // Handle keyboard navigation inside the list
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (filteredCommands.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      filteredCommands[selectedIndex]?.action();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Command Palette"
          className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.15 }}
            onClick={closePalette}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs cursor-pointer"
            aria-hidden="true"
          />

          {/* Palette Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96, y: shouldReduceMotion ? 0 : -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96, y: shouldReduceMotion ? 0 : -10 }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
            className="relative w-full max-w-xl bg-[var(--bg-subtle)] text-[var(--text-primary)] border-2 border-[var(--border-color)] shadow-[8px_8px_0px_var(--shadow-color)] flex flex-col z-10 font-mono overflow-hidden"
          >
            {/* Top Terminal Status Header */}
            <div className="px-4 py-2 bg-[var(--bg-surface)] border-b border-[var(--border-color)] flex items-center justify-between text-[0.62rem] text-[var(--text-secondary)]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-emerald)] animate-pulse" />
                <span className="text-[var(--text-primary)] font-bold">
                  COMMAND_PALETTE // 0DAYKRISH.SEC
                </span>
              </div>
              <button
                type="button"
                onClick={closePalette}
                className="text-[var(--text-muted)] hover:text-[var(--text-primary)] p-0.5"
                aria-label="Close command palette"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Search Input Bar */}
            <div className="p-3 sm:p-4 border-b border-[var(--border-color)] bg-[var(--bg-card)] flex items-center gap-3">
              <span className="text-[var(--accent-emerald)] font-bold text-sm select-none">&gt;_</span>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleInputKeyDown}
                placeholder="Search portfolio, jump to sections, or open projects..."
                aria-label="Command search query"
                className="w-full bg-transparent text-xs sm:text-sm font-mono text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="text-[0.6rem] text-[var(--text-muted)] hover:text-[var(--text-primary)] uppercase"
                >
                  CLEAR
                </button>
              )}
            </div>

            {/* Command Results List */}
            <div
              ref={listRef}
              className="max-h-[360px] overflow-y-auto divide-y divide-[var(--border-subtle)]"
            >
              {filteredCommands.length > 0 ? (
                filteredCommands.map((cmd, idx) => {
                  const isSelected = selectedIndex === idx;

                  return (
                    <div
                      key={cmd.id}
                      onClick={() => cmd.action()}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`px-4 py-3 cursor-pointer flex items-center justify-between gap-3 transition-colors ${
                        isSelected
                          ? "bg-[var(--text-primary)] text-[var(--bg-primary)]"
                          : "bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)]"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span
                          className={`text-[0.62rem] font-bold px-1.5 py-0.5 border ${
                            isSelected
                              ? "border-[var(--bg-primary)] text-[var(--bg-primary)]"
                              : "border-[var(--border-color)] text-[var(--accent-emerald)] bg-[var(--bg-subtle)]"
                          }`}
                        >
                          {cmd.category}
                        </span>

                        <div className="truncate">
                          <div className="text-xs font-bold leading-tight truncate">
                            {cmd.title}
                          </div>
                          {cmd.subtitle && (
                            <div
                              className={`text-[0.62rem] truncate mt-0.5 ${
                                isSelected ? "text-[var(--bg-primary)]/80" : "text-[var(--text-secondary)]"
                              }`}
                            >
                              {cmd.subtitle}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0">
                        {copiedText && cmd.subtitle === portfolioData.identity.social.emailPersonal && (
                          <span className="text-[0.6rem] text-[var(--accent-emerald)] font-bold flex items-center gap-1">
                            <Check className="w-3 h-3" /> COPIED
                          </span>
                        )}
                        {cmd.shortcut && (
                          <span
                            className={`text-[0.6rem] font-bold px-1.5 py-0.5 ${
                              isSelected
                                ? "bg-[var(--bg-primary)] text-[var(--text-primary)]"
                                : "text-[var(--text-muted)] bg-[var(--bg-subtle)]"
                            }`}
                          >
                            #{cmd.shortcut}
                          </span>
                        )}
                        <CornerDownLeft
                          className={`w-3.5 h-3.5 ${
                            isSelected ? "text-[var(--bg-primary)]" : "text-[var(--text-muted)]"
                          }`}
                        />
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="p-8 text-center text-xs text-[var(--text-muted)]">
                  <div>{"// NO_MATCHING_COMMANDS"}</div>
                  <div className="text-[0.65rem] mt-1 text-[var(--text-secondary)]">
                    Try searching for &quot;wraith&quot;, &quot;bola&quot;, &quot;bsides&quot;, or &quot;theme&quot;
                  </div>
                </div>
              )}
            </div>

            {/* Footer Instruction Bar */}
            <div className="px-4 py-2 bg-[var(--bg-surface)] border-t border-[var(--border-color)] flex flex-wrap items-center justify-between text-[0.6rem] text-[var(--text-secondary)]">
              <div className="flex items-center gap-3">
                <span>[↑↓] NAVIGATE</span>
                <span>[↵] SELECT</span>
                <span>[ESC] CLOSE</span>
              </div>
              <div
                suppressHydrationWarning
                className="text-[var(--accent-emerald)] font-bold"
              >
                PRESS {isMac ? "⌘K" : "CTRL+K"} ANYTIME
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
