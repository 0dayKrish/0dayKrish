"use client";

import React, { useState, useEffect } from "react";
import { ThemeToggle } from "./ui/ThemeToggle";
import { Search } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMac] = useState(() => {
    if (typeof navigator !== "undefined") {
      return /(Mac|iPhone|iPod|iPad)/i.test(navigator.userAgent);
    }
    return true;
  });

  const navItems = [
    { label: "ABOUT", href: "#about" },
    { label: "NOW", href: "#currently" },
    { label: "SURFACE", href: "#attack-surface" },
    { label: "SKILLS", href: "#skills" },
    { label: "PROCESS", href: "#methodology" },
    { label: "PROJECTS", href: "#projects" },
    { label: "RESEARCH", href: "#research" },
    { label: "BSIDES", href: "#bsides" },
    { label: "CREDS", href: "#credentials" },
    { label: "CONTACT", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        "hero",
        "about",
        "currently",
        "attack-surface",
        "skills",
        "methodology",
        "projects",
        "research",
        "bsides",
        "credentials",
        "contact",
      ];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openCommandPalette = () => {
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-200 ${
          isScrolled ? "py-1.5" : "py-2"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-2 sm:px-4">
          <nav className="bg-[var(--bg-subtle)] border border-[var(--border-color)] shadow-[2px_2px_0px_var(--shadow-color)] px-3 sm:px-4 h-12 sm:h-13 flex items-center justify-between transition-colors duration-200">
            {/* Logo */}
            <a
              href="#hero"
              className="font-mono font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2 flex-shrink-0 group text-[var(--text-primary)] no-underline"
            >
              <span className="border border-[var(--border-color)] bg-[var(--text-primary)] text-[var(--bg-primary)] px-2 py-0.5 text-[0.65rem] tracking-widest group-hover:bg-[var(--accent-emerald)] group-hover:border-[var(--accent-emerald)] group-hover:text-white transition-colors">
                KS
              </span>
              <span className="tracking-tight">
                0daykrish <span className="text-[var(--accent-emerald)]">{"// SEC"}</span>
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden 2xl:flex items-center gap-1.5 font-mono text-[0.6rem] tracking-wider uppercase">
              {navItems.map((item) => {
                const targetId = item.href.replace("#", "");
                const isActive = activeSection === targetId;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`transition-colors duration-150 py-1 px-1.5 no-underline whitespace-nowrap ${
                      isActive
                        ? "text-[var(--text-primary)] font-bold border-b border-[var(--accent-emerald)]"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    {item.label} <span className="text-[var(--text-muted)]">/</span>
                  </a>
                );
              })}
            </div>

            {/* Right Action Cluster: ⌘K + ThemeToggle + Contact */}
            <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
              {/* Command Palette Trigger */}
              <button
                type="button"
                onClick={openCommandPalette}
                aria-label={`Open command palette (${isMac ? "⌘K" : "Ctrl+K"})`}
                title={`Open command palette (${isMac ? "⌘K" : "Ctrl+K"})`}
                className="inline-flex items-center gap-1.5 px-2 py-1.5 border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] font-mono text-[0.62rem] font-bold tracking-wider uppercase transition-colors cursor-pointer select-none active:translate-y-0.5"
              >
                <Search className="w-3 h-3 text-[var(--accent-emerald)]" />
                <span className="text-[var(--text-secondary)]">SEARCH</span>
                <span className="px-1 py-0.2 border border-[var(--border-subtle)] bg-[var(--bg-subtle)] text-[0.55rem] text-[var(--accent-emerald)]">
                  {isMac ? "⌘K" : "CTRL+K"}
                </span>
              </button>

              <ThemeToggle />

              <a href="#contact" className="btn-brutalist">
                <span className="btn-tab">→</span>
                <span className="btn-body text-[0.62rem]">TALK SECURITY</span>
              </a>
            </div>

            {/* Mobile Actions: ⌘K + Theme Toggle + Menu Button */}
            <div className="flex sm:hidden items-center gap-1.5">
              <button
                type="button"
                onClick={openCommandPalette}
                aria-label="Open command palette"
                className="p-1.5 border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-primary)] active:translate-y-0.5"
              >
                <Search className="w-3.5 h-3.5 text-[var(--accent-emerald)]" />
              </button>
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="font-mono text-[0.65rem] tracking-wider text-[var(--text-primary)] bg-[var(--bg-surface)] border border-[var(--border-color)] px-2 py-1 cursor-pointer active:translate-y-0.5"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                [{mobileMenuOpen ? "✕" : "☰"}]
              </button>
            </div>

            {/* Tablet/Mid-screen Menu Button (when sm is visible but 2xl is hidden) */}
            <div className="hidden sm:flex 2xl:hidden items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="font-mono text-[0.65rem] tracking-wider text-[var(--text-primary)] bg-[var(--bg-surface)] border border-[var(--border-color)] px-2.5 py-1 cursor-pointer active:translate-y-0.5"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                [{mobileMenuOpen ? "CLOSE ✕" : "MENU ☰"}]
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile / Tablet Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 2xl:hidden backdrop-blur-xs flex flex-col justify-start pt-16 px-4">
          <div className="bg-[var(--bg-subtle)] border-2 border-[var(--border-color)] shadow-[6px_6px_0px_var(--shadow-color)] p-5 font-mono max-w-sm w-full mx-auto max-h-[85vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-150">
            <div className="border-b border-[var(--border-color)] pb-2 mb-3 flex items-center justify-between text-[0.65rem] text-[var(--text-secondary)]">
              <span>NAVIGATION.LOG</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-[var(--text-primary)] font-bold text-xs"
              >
                ✕
              </button>
            </div>

            {/* Command Palette Trigger inside Drawer */}
            <div className="mb-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openCommandPalette();
                }}
                className="w-full flex items-center justify-between px-3 py-2 border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-primary)] font-mono text-xs font-bold uppercase cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Search className="w-3.5 h-3.5 text-[var(--accent-emerald)]" />
                  <span>COMMAND PALETTE</span>
                </span>
                <span className="text-[0.6rem] text-[var(--accent-emerald)]">
                  {isMac ? "⌘K" : "CTRL+K"}
                </span>
              </button>
            </div>

            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-1.5 border border-[var(--border-color)] bg-[var(--bg-surface)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] text-[var(--text-primary)] transition-colors text-[0.7rem] font-bold uppercase no-underline flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-[var(--accent-emerald)] text-[0.65rem]">→</span>
                </a>
              ))}

              <div className="pt-2 pb-1 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <span className="text-[0.62rem] text-[var(--text-secondary)] uppercase tracking-wider">APPEARANCE</span>
                <ThemeToggle showLabel={true} />
              </div>

              <div className="pt-1">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-brutalist w-full justify-center text-center"
                >
                  <span className="btn-tab">→</span>
                  <span className="btn-body w-full justify-center">GET IN TOUCH</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
