"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          const scrollHeight =
            document.documentElement.scrollHeight - document.documentElement.clientHeight;

          if (scrollHeight > 0) {
            const progress = Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100));
            setScrollProgress(progress);
          }

          setIsVisible(scrollTop > 280);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // SVG Circle Parameters
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-20 sm:bottom-8 right-5 sm:right-8 z-40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-6 scale-90 pointer-events-none"
      }`}
    >
      <div className="relative group flex items-center justify-center">
        {/* Luxury Floating Tooltip */}
        <div
          className={`absolute bottom-full mb-3 px-3 py-1.5 rounded-xl bg-[#0F1D33]/95 border border-[#EE6C25]/40 text-[#F48A4E] text-[11px] font-mono font-bold tracking-wider uppercase backdrop-blur-xl shadow-2xl transition-all duration-300 pointer-events-none whitespace-nowrap flex items-center gap-1.5 ${
            isHovered
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-2 scale-95"
          }`}
        >
          <span>TOP</span>
          <span className="text-white">•</span>
          <span className="text-white font-bold">{Math.round(scrollProgress)}%</span>
        </div>

        {/* Ambient Radial Glowing Aura */}
        <div
          className={`absolute inset-0 rounded-full bg-[#EE6C25]/25 blur-lg transition-all duration-500 ${
            isHovered ? "scale-125 opacity-100 bg-[#EE6C25]/40" : "scale-100 opacity-40"
          }`}
        />

        {/* Interactive Main Button */}
        <button
          onClick={scrollToTop}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0A1322]/90 backdrop-blur-2xl border border-white/10 flex items-center justify-center text-white shadow-[0_8px_30px_rgba(0,0,0,0.6)] group hover:border-[#EE6C25]/70 transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#EE6C25]/50"
          aria-label="Scroll to top of page"
        >
          {/* Circular SVG Scroll Progress Track */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 transform p-0.5" viewBox="0 0 52 52">
            {/* Background Circle Track */}
            <circle
              cx="26"
              cy="26"
              r={radius}
              className="text-white/10"
              strokeWidth="2.5"
              stroke="currentColor"
              fill="transparent"
            />
            {/* Animated Dynamic Progress Arc */}
            <circle
              cx="26"
              cy="26"
              r={radius}
              stroke="url(#orange-glow-gradient)"
              strokeWidth="2.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="transparent"
              className="transition-all duration-150 ease-out"
            />
            {/* Gradient definition */}
            <defs>
              <linearGradient id="orange-glow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#EE6C25" />
                <stop offset="100%" stopColor="#F48A4E" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center Up Arrow Icon with Micro Kinetic Elevation */}
          <div className="relative z-10 flex items-center justify-center text-[#F48A4E] group-hover:text-white transition-colors">
            <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1 group-active:-translate-y-1.5" />
          </div>
        </button>
      </div>
    </div>
  );
}
