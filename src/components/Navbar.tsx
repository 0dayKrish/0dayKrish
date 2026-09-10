"use client";

import React, { useState, useEffect } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { label: "ABOUT", href: "#about" },
    { label: "SKILLS", href: "#skills" },
    { label: "BSIDES", href: "#bsides" },
    { label: "PROJECTS", href: "#projects" },
    { label: "RESEARCH", href: "#research" },
    { label: "CREDENTIALS", href: "#credentials" },
    { label: "CONTACT", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["hero", "about", "skills", "bsides", "projects", "research", "credentials", "contact"];
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

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
          isScrolled ? "py-1.5" : "py-2"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-2 sm:px-4">
          <nav className="bg-[#dedad1] border border-[#0a0a0a] shadow-[2px_2px_0px_#0a0a0a] px-3 sm:px-5 h-12 sm:h-13 flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              className="font-mono font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2 flex-shrink-0 group text-[#0a0a0a] no-underline"
            >
              <span className="border border-[#0a0a0a] bg-[#0a0a0a] text-[#ffffff] px-2 py-0.5 text-[0.65rem] tracking-widest group-hover:bg-[#059669] group-hover:border-[#059669] transition-colors">
                KS
              </span>
              <span className="tracking-tight">
                0daykrish <span className="text-[#059669]">{"// SEC"}</span>
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden xl:flex items-center gap-2 lg:gap-4 font-mono text-[0.62rem] tracking-wider uppercase">
              {navItems.map((item) => {
                const targetId = item.href.replace("#", "");
                const isActive = activeSection === targetId;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`transition-colors duration-150 py-1 px-1.5 no-underline whitespace-nowrap ${
                      isActive
                        ? "text-[#0a0a0a] font-bold border-b border-[#059669]"
                        : "text-[#575757] hover:text-[#0a0a0a]"
                    }`}
                  >
                    {item.label} <span className="text-[#a8a29e]">/</span>
                  </a>
                );
              })}
            </div>

            {/* Right Action */}
            <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
              <a href="#contact" className="btn-brutalist">
                <span className="btn-tab">→</span>
                <span className="btn-body text-[0.62rem]">TALK SECURITY</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden font-mono text-[0.65rem] tracking-wider text-[#0a0a0a] bg-[#eae7df] border border-[#0a0a0a] px-2.5 py-1 cursor-pointer active:translate-y-0.5"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              [{mobileMenuOpen ? "CLOSE ✕" : "MENU ☰"}]
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 xl:hidden backdrop-blur-xs flex flex-col justify-start pt-18 px-4">
          <div className="bg-[#dedad1] border-2 border-[#0a0a0a] shadow-[6px_6px_0px_#0a0a0a] p-5 font-mono max-w-sm w-full mx-auto animate-in fade-in zoom-in-95 duration-150">
            <div className="border-b border-[#0a0a0a] pb-2 mb-4 flex items-center justify-between text-[0.65rem] text-[#575757]">
              <span>NAVIGATION.LOG</span>
              <span className="text-[#059669]">{"// 0daykrish"}</span>
            </div>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 border border-[#0a0a0a] bg-[#eae7df] hover:bg-[#0a0a0a] hover:text-white transition-colors text-xs font-bold uppercase no-underline flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-[#059669] text-[0.65rem]">→</span>
                </a>
              ))}
              <div className="pt-2">
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
