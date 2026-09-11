"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import { ProjectItem } from "@/types/portfolio";
import { SectionHeader } from "./ui/SectionHeader";
import { ProjectDrawer } from "./ui/ProjectDrawer";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  const { featuredProjects } = portfolioData;
  const [selectedDrawerProject, setSelectedDrawerProject] = useState<ProjectItem | null>(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash.startsWith("#project-")) {
        const projId = hash.replace("#project-", "");
        return featuredProjects.find((p) => p.id === projId) || null;
      }
    }
    return null;
  });
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const categories = [
    "ALL",
    "Offensive Security",
    "Cloud & Infrastructure",
    "Web Security",
    "AI & LLM Security",
    "Tooling & Automation",
    "Network Security",
  ];

  const filteredProjects =
    selectedCategory === "ALL"
      ? featuredProjects
      : featuredProjects.filter((p) => p.category === selectedCategory);

  // Cross-feature listener: allows Attack Surface, Command Palette, or Currently section to open drawer
  useEffect(() => {
    const handleOpenDrawer = (e: Event) => {
      const customEvent = e as CustomEvent<{ projectId: string }>;
      if (customEvent.detail?.projectId) {
        const proj = featuredProjects.find((p) => p.id === customEvent.detail.projectId);
        if (proj) {
          setSelectedDrawerProject(proj);
        }
      }
    };

    window.addEventListener("open-project-drawer", handleOpenDrawer);
    return () => window.removeEventListener("open-project-drawer", handleOpenDrawer);
  }, [featuredProjects]);

  return (
    <section id="projects" className="py-16 sm:py-20 border-b border-[var(--border-color)]" aria-label="Technical Projects">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <SectionHeader label="TECHNICAL_PROJECTS" number="006" id="projects-heading" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
          <p className="font-mono text-xs sm:text-[0.8rem] text-[var(--text-secondary)] max-w-xl">
            Reconnaissance frameworks, self-hosted Zero Trust infrastructure, automated cloud backups, email forensics telemetry, and AI security testbeds.
          </p>
          <a
            href="https://github.com/0daykrish"
            target="_blank"
            rel="noopener noreferrer"
            className="b-tag b-tag-emerald"
          >
            GITHUB: @0daykrish ↗
          </a>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8 font-mono text-[0.6rem]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`b-tag cursor-pointer ${
                selectedCategory === cat ? "bg-[var(--text-primary)] text-[var(--bg-primary)] border-[var(--text-primary)]" : ""
              }`}
            >
              {cat === "ALL" ? `[ ALL_PROJECTS (${featuredProjects.length}) ]` : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              className="border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-[4px_4px_0px_var(--shadow-color)] hover:shadow-[6px_6px_0px_var(--accent-emerald)] hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Card Top Window Bar */}
                <div className="border-b border-[var(--border-color)] px-4 py-2.5 bg-[var(--bg-subtle)] flex items-center justify-between font-mono text-[0.62rem] tracking-wider text-[var(--text-secondary)]">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[var(--accent-emerald)]" />
                      <span className="w-2 h-2 rounded-full bg-[#a8a29e]" />
                      <span className="w-2 h-2 rounded-full border border-[#78716c]" />
                    </div>
                    <span className="text-[var(--text-primary)] font-bold uppercase">
                      PROJ_{(idx + 1).toString().padStart(2, "0")}.MD
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[var(--accent-emerald)] font-bold">{project.category}</span>
                    <span className="text-[var(--text-muted)]">|</span>
                    <span>{project.year}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <h3
                      onClick={() => setSelectedDrawerProject(project)}
                      className="font-mono font-bold text-base sm:text-lg text-[var(--text-primary)] tracking-tight leading-snug hover:text-[var(--accent-emerald)] transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>
                    <button
                      onClick={() => setSelectedDrawerProject(project)}
                      className="text-[var(--text-muted)] hover:text-[var(--accent-emerald)] transition-colors p-1"
                      title="Open Case Study Dossier"
                      aria-label={`Open Case Study for ${project.title}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="font-mono text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                    {project.summary}
                  </p>

                  {project.impact && (
                    <div className="font-mono text-[0.7rem] text-[var(--accent-emerald)] bg-[var(--accent-emerald)]/10 border-l-2 border-[var(--accent-emerald)] pl-3 py-1.5 mb-4 leading-relaxed">
                      <span className="font-bold text-[var(--text-primary)]">IMPACT //</span> {project.impact}
                    </div>
                  )}

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="b-tag text-[0.58rem]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedDrawerProject(project)}
                  className="btn-brutalist flex-1 cursor-pointer"
                  aria-label={`View full case study for ${project.title}`}
                >
                  <span className="btn-tab">→</span>
                  <span className="btn-body text-[0.62rem]">VIEW CASE STUDY</span>
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[var(--border-color)] bg-[var(--bg-subtle)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-colors p-2.5 flex items-center justify-center text-[var(--text-primary)]"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Case Study Slide-out Drawer */}
      <ProjectDrawer
        project={selectedDrawerProject}
        onClose={() => setSelectedDrawerProject(null)}
      />
    </section>
  );
}
