"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { ProjectItem } from "@/types/portfolio";
import { SectionHeader } from "./ui/SectionHeader";

export function Projects() {
  const { featuredProjects } = portfolioData;
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-16 sm:py-20 border-b border-[#0a0a0a]" aria-label="Technical Projects">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <SectionHeader label="TECHNICAL_PROJECTS" number="004" id="projects-heading" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-8">
          <p className="font-mono text-xs sm:text-[0.8rem] text-[#575757] max-w-xl">
            Security toolchains, AI threat evaluation harnesses, and penetration testing testbeds built to analyze and fortify attack surfaces.
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project, idx) => (
            <article
              key={project.id}
              className="border border-[#0a0a0a] bg-[#eae7df] shadow-[4px_4px_0px_#0a0a0a] hover:shadow-[6px_6px_0px_#059669] hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Card Top Window Bar */}
                <div className="border-b border-[#0a0a0a] px-4 py-2.5 bg-[#dedad1] flex items-center justify-between font-mono text-[0.62rem] tracking-wider text-[#575757]">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#059669]" />
                      <span className="w-2 h-2 rounded-full bg-[#a8a29e]" />
                      <span className="w-2 h-2 rounded-full border border-[#78716c]" />
                    </div>
                    <span className="text-[#0a0a0a] font-bold uppercase">
                      PROJ_0{idx + 1}.MD
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#059669] font-bold">{project.category}</span>
                    <span className="text-[#a8a29e]">|</span>
                    <span>{project.year}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-mono font-bold text-base sm:text-lg text-[#0a0a0a] tracking-tight leading-snug mb-2.5">
                    {project.title}
                  </h3>

                  <p className="font-mono text-xs text-[#575757] leading-relaxed mb-4">
                    {project.summary}
                  </p>

                  {project.impact && (
                    <div className="font-mono text-[0.7rem] text-[#059669] bg-[#059669]/5 border-l-2 border-[#059669] pl-3 py-1.5 mb-4 leading-relaxed">
                      <span className="font-bold text-[#0a0a0a]">IMPACT //</span> {project.impact}
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
                {project.caseStudy && (
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="btn-brutalist flex-1 cursor-pointer"
                  >
                    <span className="btn-tab">→</span>
                    <span className="btn-body text-[0.62rem]">CASE STUDY</span>
                  </button>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#0a0a0a] bg-[#dedad1] hover:bg-[#0a0a0a] hover:text-white transition-colors p-2.5 flex items-center justify-center text-[#0a0a0a]"
                    aria-label={`View ${project.title} on GitHub`}
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

      {/* Case Study Modal */}
      {activeModalProject && activeModalProject.caseStudy && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="bg-[#dedad1] border-2 border-[#0a0a0a] shadow-[8px_8px_0px_#0a0a0a] max-w-2xl w-full max-h-[85vh] overflow-y-auto font-mono p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="border-b border-[#0a0a0a] pb-3 mb-5 flex items-center justify-between text-[0.65rem] text-[#575757]">
              <div>
                <span className="text-[#059669] font-bold">{"// CASE_STUDY_LOG:"}</span>{" "}
                <span className="text-[#0a0a0a]">{activeModalProject.category}</span>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="b-tag cursor-pointer hover:bg-[#0a0a0a] hover:text-white"
                aria-label="Close modal"
              >
                [ CLOSE ✕ ]
              </button>
            </div>

            <h3 id="modal-title" className="text-lg sm:text-xl font-bold text-[#0a0a0a] mb-2 leading-snug">
              {activeModalProject.title}
            </h3>

            <p className="text-xs text-[#575757] leading-relaxed mb-6">
              {activeModalProject.caseStudy.overview}
            </p>

            {/* Objectives */}
            <div className="mb-5">
              <div className="text-[0.65rem] text-[#059669] font-bold tracking-wider mb-2">
                01 // CORE_OBJECTIVES
              </div>
              <ul className="space-y-1.5 text-xs text-[#0a0a0a]">
                {activeModalProject.caseStudy.objectives.map((item, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <span className="text-[#059669] font-bold">&gt;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Highlights */}
            <div className="mb-5">
              <div className="text-[0.65rem] text-[#059669] font-bold tracking-wider mb-2">
                02 // TECHNICAL_IMPLEMENTATION
              </div>
              <ul className="space-y-1.5 text-xs text-[#0a0a0a]">
                {activeModalProject.caseStudy.technicalHighlights.map((item, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <span className="text-[#059669] font-bold">&gt;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Findings & Results */}
            <div className="mb-5">
              <div className="text-[0.65rem] text-[#059669] font-bold tracking-wider mb-2">
                03 // FINDINGS_&amp;_RESULTS
              </div>
              <ul className="space-y-1.5 text-xs text-[#0a0a0a]">
                {activeModalProject.caseStudy.findingsOrResults.map((item, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <span className="text-[#059669] font-bold">&gt;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Takeaway */}
            <div className="p-3 bg-[#eae7df] border border-[#0a0a0a] text-xs text-[#0a0a0a] mb-6">
              <span className="font-bold text-[#059669]">KEY TAKEAWAY: </span>
              {activeModalProject.caseStudy.keyTakeaway}
            </div>

            <div className="flex justify-between items-center pt-3 border-t border-[#0a0a0a]">
              <span className="text-[0.6rem] text-[#575757]">
                AUTHOR: Krish Sharma (@0daykrish)
              </span>
              <button
                onClick={() => setActiveModalProject(null)}
                className="btn-brutalist"
              >
                <span className="btn-tab">✓</span>
                <span className="btn-body text-[0.62rem]">DISMISS</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
