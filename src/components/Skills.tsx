"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeader } from "./ui/SectionHeader";

export function Skills() {
  const { skillCategories } = portfolioData;
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredCategories = skillCategories.filter((cat) => {
    if (selectedFilter !== "all" && cat.id !== selectedFilter) {
      return false;
    }
    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase();
    const matchesTitle = cat.title.toLowerCase().includes(query);
    const matchesSkills = cat.skills.some((s) => s.toLowerCase().includes(query));
    return matchesTitle || matchesSkills;
  });

  return (
    <section id="skills" className="py-16 sm:py-20 border-b border-[#0a0a0a]" aria-label="Technical Skills">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <SectionHeader label="SECURITY_CAPABILITIES" number="002" id="skills-heading" />

        {/* Section Lead & Filter Controls */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
          <p className="font-mono text-xs sm:text-[0.8rem] text-[#575757] max-w-xl">
            Technical competencies structured across offensive methodologies, AI vulnerability research, security tooling, and defensive infrastructure. Zero arbitrary percentages.
          </p>

          {/* Search / Filter input */}
          <div className="w-full md:w-auto flex items-center gap-2">
            <div className="relative w-full md:w-64">
              <span className="absolute left-2.5 top-1/2 -translate-y-1/2 font-mono text-[0.62rem] text-[#059669]">
                {"//"}
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="FILTER_CAPABILITY..."
                aria-label="Filter skills"
                className="w-full pl-7 pr-3 py-1.5 bg-[#dedad1] border border-[#0a0a0a] font-mono text-xs text-[#0a0a0a] placeholder:text-[#78716c] focus:outline-none focus:ring-1 focus:ring-[#059669]"
              />
            </div>
          </div>
        </div>

        {/* Quick Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-6 font-mono text-[0.6rem]">
          <button
            onClick={() => setSelectedFilter("all")}
            className={`b-tag cursor-pointer ${
              selectedFilter === "all" ? "bg-[#0a0a0a] text-white border-[#0a0a0a]" : ""
            }`}
          >
            [ ALL_CATEGORIES ]
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedFilter(cat.id === selectedFilter ? "all" : cat.id)}
              className={`b-tag cursor-pointer ${
                selectedFilter === cat.id ? "bg-[#0a0a0a] text-white border-[#0a0a0a]" : ""
              }`}
            >
              {cat.title.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* Master Skills Matrix Box */}
        <div className="border border-[#0a0a0a] bg-[#eae7df] shadow-[4px_4px_0px_#0a0a0a]">
          {/* Header */}
          <div className="border-b border-[#0a0a0a] px-4 py-2.5 bg-[#dedad1] flex items-center justify-between font-mono text-[0.65rem] tracking-wider text-[#575757]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#059669]" />
              <span className="text-[#0a0a0a] font-bold">SKILLS.MANIFEST</span>
            </div>
            <span>{filteredCategories.length} / 6 MODULES DISPLAYED</span>
          </div>

          {/* Rows */}
          <div className="divide-y divide-[#0a0a0a]">
            {filteredCategories.map((cat, idx) => (
              <article
                key={cat.id}
                className="grid grid-cols-1 md:grid-cols-12 hover:bg-[#f4f3ef] transition-colors"
              >
                {/* Category Column */}
                <div className="md:col-span-4 p-4 sm:p-5 md:border-r border-b md:border-b-0 border-[#0a0a0a] bg-[#dedad1]/60 flex flex-col justify-start">
                  <div className="flex items-baseline gap-2 mb-1.5">
                    <span className="font-mono text-[0.62rem] font-bold text-[#059669]">
                      0{idx + 1}
                    </span>
                    <h3 className="font-mono text-xs sm:text-sm font-bold text-[#0a0a0a] tracking-tight">
                      {cat.title}
                    </h3>
                  </div>
                  {cat.description && (
                    <p className="font-mono text-[0.65rem] text-[#575757] leading-relaxed">
                      {cat.description}
                    </p>
                  )}
                </div>

                {/* Tags Column */}
                <div className="md:col-span-8 p-4 sm:p-5 flex flex-wrap gap-2 items-center content-center bg-[#f4f3ef]/40">
                  {cat.skills.map((skill) => {
                    const isMatched =
                      searchQuery.trim() &&
                      skill.toLowerCase().includes(searchQuery.toLowerCase());
                    return (
                      <span
                        key={skill}
                        className={`b-tag text-[0.65rem] ${
                          isMatched
                            ? "bg-[#059669] text-white border-[#059669] font-bold"
                            : "hover:border-[#059669]"
                        }`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </article>
            ))}

            {filteredCategories.length === 0 && (
              <div className="p-8 text-center font-mono text-xs text-[#575757]">
                {"// NO CAPABILITY MATCHING "} &quot;{searchQuery}&quot;. TRY ANOTHER SEARCH TERM.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
