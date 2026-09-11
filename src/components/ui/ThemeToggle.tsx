"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

function subscribe(callback: () => void) {
  window.addEventListener("portfolio-theme-change", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("portfolio-theme-change", callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): "dark" | "light" {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getServerSnapshot(): "dark" | "light" {
  return "dark";
}

export function ThemeToggle({ className = "", showLabel = false }: ThemeToggleProps) {
  const theme = React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = () => {
    const isCurrentlyDark = document.documentElement.classList.contains("dark");
    const nextTheme: "dark" | "light" = isCurrentlyDark ? "light" : "dark";

    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
    }

    try {
      localStorage.setItem("theme", nextTheme);
    } catch {
      // localStorage may be disabled or quota exceeded
    }

    // Broadcast change to all mounted toggles and components
    window.dispatchEvent(
      new CustomEvent("portfolio-theme-change", { detail: { theme: nextTheme } })
    );
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className={`inline-flex items-center gap-2 px-2.5 py-1.5 border border-[var(--border-color)] bg-[var(--bg-subtle)] text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] font-mono text-[0.62rem] font-bold tracking-wider uppercase transition-colors cursor-pointer select-none active:translate-y-0.5 ${className}`}
    >
      {/* Icon */}
      {isDark ? (
        <Sun className="w-3.5 h-3.5 text-[#f59e0b] flex-shrink-0 transition-transform duration-200" />
      ) : (
        <Moon className="w-3.5 h-3.5 text-[#059669] flex-shrink-0 transition-transform duration-200" />
      )}

      {/* Text Indicator */}
      {(showLabel || true) && (
        <span className="flex items-center gap-1 font-mono tracking-widest text-[0.58rem]">
          <span className="text-[var(--text-secondary)]">MODE:</span>
          <span className={isDark ? "text-[var(--text-primary)]" : "text-[#059669]"}>
            {isDark ? "DARK" : "LIGHT"}
          </span>
        </span>
      )}
    </button>
  );
}
