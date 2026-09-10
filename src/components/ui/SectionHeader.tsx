"use client";

import React from "react";

interface SectionHeaderProps {
  label: string;
  number: string;
  id?: string;
}

export function SectionHeader({ label, number, id }: SectionHeaderProps) {
  return (
    <header className="section-divider" id={id}>
      <span className="label font-mono">
        <span className="text-[#059669] mr-1.5">{"//"}</span>
        {label}
      </span>
      <span className="line" />
      <span className="num font-mono">{number}</span>
    </header>
  );
}
