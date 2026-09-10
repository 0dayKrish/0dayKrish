"use client";

import React, { useRef, useState, useCallback } from "react";
import Image from "next/image";

interface Interactive3DCardProps {
  uptimeText?: string;
}

export function Interactive3DCard({ uptimeText }: Interactive3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to center of card (-1 to 1)
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    // Smooth tilt angles
    const rotateX = -mouseY * 24; // tilt up/down
    const rotateY = mouseX * 24;  // tilt left/right

    setRotate({ x: rotateX, y: rotateY });
    setGlare({
      x: (mouseX + 0.5) * 100,
      y: (mouseY + 0.5) * 100,
      opacity: 0.35,
    });
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  // Dynamic box shadow based on tilt
  const shadowX = isHovered ? 6 + rotate.y * 0.4 : 6;
  const shadowY = isHovered ? 6 - rotate.x * 0.4 : 6;

  return (
    <div className="relative flex flex-col items-center select-none w-full max-w-[340px] sm:max-w-[360px]">
      {/* Floating Status Pill */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0a0a0a] text-[#f4f3ef] font-mono text-[0.58rem] tracking-widest px-3 py-1 z-20 flex items-center gap-2 border border-[#0a0a0a] shadow-[2px_2px_0px_#059669] whitespace-nowrap">
        <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse-glow inline-block" />
        <span>OPEN TO OPPORTUNITIES &amp; RESEARCH</span>
      </div>

      {/* 3D Perspective Wrapper */}
      <div
        style={{ perspective: "1000px" }}
        className="w-full pt-2"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={cardRef}
          style={{
            transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
            transformStyle: "preserve-3d",
            boxShadow: `${shadowX}px ${shadowY}px 0px #0a0a0a`,
            transition: isHovered
              ? "transform 0.08s ease-out, box-shadow 0.08s ease-out"
              : "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          className="relative w-full aspect-[3/4] border-2 border-[#0a0a0a] bg-[#dedad1] overflow-hidden group cursor-crosshair"
        >
          {/* Main 3D Illustration Image */}
          <div
            style={{ transform: "translateZ(0px)" }}
            className="relative w-full h-full"
          >
            <Image
              src="/krish-3d-illustration.jpg"
              alt="Krish Sharma - 3D Cybersecurity Researcher Illustration"
              fill
              priority
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              sizes="(max-width: 768px) 320px, 360px"
            />
          </div>

          {/* Dynamic Holographic Glare Layer */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              opacity: glare.opacity,
              background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.45) 0%, rgba(5,150,105,0.2) 30%, transparent 65%)`,
              mixBlendMode: "overlay",
            }}
          />

          {/* Holographic Scanline Grid Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(10,10,10,0.1)_1px,transparent_1px)] [background-size:100%_4px]" />

          {/* Corner Cyber Reticles (Top Left & Top Right) */}
          <div
            style={{ transform: "translateZ(30px)" }}
            className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-[#059669] pointer-events-none z-10"
          />
          <div
            style={{ transform: "translateZ(30px)" }}
            className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#059669] pointer-events-none z-10"
          />

          {/* Floating 3D Badge 1: 0daykrish // OFFENSIVE */}
          <div
            style={{
              transform: isHovered
                ? `translateZ(45px) translateX(${rotate.y * 0.8}px) translateY(${rotate.x * -0.8}px)`
                : "translateZ(30px)",
              transition: isHovered ? "none" : "transform 0.4s ease-out",
            }}
            className="absolute top-4 right-4 bg-[#0a0a0a]/90 text-[#ffffff] font-mono text-[0.55rem] tracking-wider px-2 py-1 border border-[#059669] shadow-[2px_2px_0px_#059669] backdrop-blur-xs pointer-events-none z-20"
          >
            <span className="text-[#059669] mr-1">⚡</span>
            <span>0daykrish // OFFENSIVE</span>
          </div>

          {/* Floating 3D Badge 2: AI DEFENSE MATRIX */}
          <div
            style={{
              transform: isHovered
                ? `translateZ(40px) translateX(${rotate.y * -0.6}px) translateY(${rotate.x * 0.6}px)`
                : "translateZ(25px)",
              transition: isHovered ? "none" : "transform 0.4s ease-out",
            }}
            className="absolute bottom-14 left-4 bg-[#0a0a0a]/90 text-[#f4f3ef] font-mono text-[0.55rem] tracking-wider px-2 py-1 border border-[#0a0a0a] shadow-[2px_2px_0px_#0a0a0a] backdrop-blur-xs pointer-events-none z-20"
          >
            <span className="text-[#059669] mr-1">●</span>
            <span>AI DEFENSE MATRIX</span>
          </div>

          {/* Bottom Identity Label Strip */}
          <div
            style={{ transform: "translateZ(35px)" }}
            className="absolute bottom-0 inset-x-0 bg-[#0a0a0a]/92 backdrop-blur-xs border-t border-[#0a0a0a] p-2.5 font-mono text-[0.6rem] tracking-wider flex items-center justify-between text-[#ffffff] z-10"
          >
            <span className="font-bold">
              KRISH.SHARMA <span className="text-[#059669]">{"// RESEARCHER"}</span>
            </span>
            <span className="text-[0.55rem] text-[#a3a3a3]">[ 3D HOVER ]</span>
          </div>
        </div>
      </div>

      {/* Community Uptime Box Directly Underneath */}
      {uptimeText && (
        <div className="w-full mt-4 border-2 border-[#0a0a0a] bg-[#0a0a0a] text-[#f4f3ef] p-2.5 font-mono flex items-center justify-between gap-3 shadow-[4px_4px_0px_#059669]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse-glow" />
            <span className="text-[0.58rem] tracking-widest text-[#a3a3a3] font-semibold">
              COMMUNITY UPTIME
            </span>
          </div>
          <div className="text-[0.68rem] font-bold tracking-wider tabular-nums bg-[#171717] px-2 py-0.5 border border-[#262626]">
            <span className="text-[#059669] mr-1">▶</span>
            {uptimeText}
          </div>
        </div>
      )}
    </div>
  );
}
