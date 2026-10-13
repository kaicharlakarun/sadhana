"use client";

import React, { useEffect, useRef, useState } from "react";

type HoverType =
  | "none"
  | "button-primary"
  | "button"
  | "whatsapp"
  | "card"
  | "link"
  | "input";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hoverType, setHoverType] = useState<HoverType>("none");
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [shockwaveKey, setShockwaveKey] = useState<number | null>(null);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    let targetX = -100;
    let targetY = -100;
    let ringX = -100;
    let ringY = -100;
    let animFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setIsVisible(true);

      // 1. Instant zero-latency hardware translation for the precision center dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }

      // Context-aware interactive element detection
      const target = e.target as HTMLElement | null;
      if (!target) {
        setHoverType("none");
        return;
      }

      // A. Text Inputs / Textareas / Form elements -> smoothly hide custom cursor to keep native caret
      if (target.closest('input, textarea, select, [contenteditable="true"]')) {
        setHoverType("input");
        return;
      }

      // B. WhatsApp Direct Actions -> Emerald luxury aura
      if (target.closest('.btn-whatsapp, [href*="wa.me"], [href*="whatsapp"]')) {
        setHoverType("whatsapp");
        return;
      }

      // C. Primary CTA / Quote Actions -> Intense brand orange flame halo
      if (
        target.closest(
          '.btn-primary, [href*="#quote"], [href*="contact"], [href*="tel:"]'
        )
      ) {
        setHoverType("button-primary");
        return;
      }

      // D. Secondary Buttons / General Clickables
      if (target.closest('button, .btn-secondary, [role="button"]')) {
        setHoverType("button");
        return;
      }

      // E. Fleet Equipment Cards / Machinery Showcase -> Telemetry Viewfinder
      if (
        target.closest(
          '.industrial-card, [href*="/equipment/"], [data-cursor="view"]'
        )
      ) {
        setHoverType("card");
        return;
      }

      // F. Navigation & General Links -> Elegant magnetic halo (no awkward offset pills)
      if (target.closest('a, [data-cursor="hover"]')) {
        setHoverType("link");
        return;
      }

      // Default idle state
      setHoverType("none");
    };

    const handleMouseDown = () => {
      setIsClicked(true);
      setShockwaveKey(Date.now());
    };

    const handleMouseUp = () => {
      setIsClicked(false);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth physics lerp interpolation for the outer fluid halo
    const render = () => {
      const lerpSpeed = 0.16; // Silky smooth fluid inertia
      ringX += (targetX - ringX) * lerpSpeed;
      ringY += (targetY - ringY) * lerpSpeed;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }

      animFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    animFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  const isInteractive = hoverType !== "none" && hoverType !== "input";
  const isButtonState = hoverType === "button-primary" || hoverType === "button";

  return (
    <>
      {/* 1. Trailing Smooth Fluid Halo (Outer Orbit) */}
      <div
        ref={ringRef}
        className={`pointer-events-none fixed top-0 left-0 z-[999998] hidden md:flex items-center justify-center will-change-transform transition-[width,height,opacity,background-color,border-color,box-shadow,border-radius] duration-250 ease-out select-none ${
          isVisible && hoverType !== "input" ? "opacity-100" : "opacity-0"
        } ${
          hoverType === "whatsapp"
            ? "w-14 h-14 rounded-full bg-emerald-500/[0.14] border-2 border-emerald-400 shadow-[0_0_28px_rgba(16,185,129,0.55)] backdrop-blur-[2px]"
            : isButtonState
            ? "w-14 h-14 rounded-full bg-[#EE6C25]/[0.16] border-2 border-[#F48A4E] shadow-[0_0_32px_rgba(238,108,37,0.55)] backdrop-blur-[2px]"
            : hoverType === "card"
            ? "w-20 h-20 rounded-2xl bg-[#0F1D33]/65 border border-[#EE6C25]/80 shadow-[0_0_36px_rgba(238,108,37,0.4)] backdrop-blur-[3px]"
            : hoverType === "link"
            ? "w-11 h-11 rounded-full bg-[#EE6C25]/[0.10] border border-[#F48A4E]/80 shadow-[0_0_20px_rgba(238,108,37,0.3)] backdrop-blur-[1px]"
            : "w-8 h-8 rounded-full bg-[#EE6C25]/[0.04] border border-[#EE6C25]/50 shadow-[0_0_14px_rgba(238,108,37,0.2)]"
        } ${isClicked ? "scale-75" : "scale-100"}`}
        style={{ transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)" }}
      >
        {/* Tactile Click Shockwave Ring */}
        {shockwaveKey && (
          <div
            key={shockwaveKey}
            className={`pointer-events-none absolute inset-0 rounded-full border-2 animate-cursor-ripple ${
              hoverType === "whatsapp" ? "border-emerald-400" : "border-[#EE6C25]"
            }`}
          />
        )}

        {/* --- IDLE & LINK STATE: Micro Precision Engineering Calipers --- */}
        {(hoverType === "none" || hoverType === "link") && (
          <>
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-0.5 h-1.5 bg-[#F48A4E] rounded-full opacity-85" />
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0.5 h-1.5 bg-[#F48A4E] rounded-full opacity-85" />
            <span className="absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-0.5 bg-[#F48A4E] rounded-full opacity-85" />
            <span className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-0.5 bg-[#F48A4E] rounded-full opacity-85" />
          </>
        )}

        {/* --- BUTTON HOVER: Rotating Kinetic Energy Orbit Rings --- */}
        {isButtonState && (
          <>
            {/* Outer dashed kinetic orbit */}
            <div className="absolute -inset-1 rounded-full border border-dashed border-[#EE6C25]/70 animate-spin [animation-duration:10s]" />
            {/* Glowing top arc */}
            <div className="absolute -inset-0.5 rounded-full border-t-2 border-r-2 border-transparent border-t-white border-r-[#F48A4E] animate-spin [animation-duration:3.5s] [animation-direction:reverse]" />
          </>
        )}

        {/* --- WHATSAPP HOVER: Rotating Emerald Kinetic Orbit --- */}
        {hoverType === "whatsapp" && (
          <>
            <div className="absolute -inset-1 rounded-full border border-dashed border-emerald-400/70 animate-spin [animation-duration:8s]" />
            <div className="absolute -inset-0.5 rounded-full border-t-2 border-transparent border-t-emerald-300 animate-spin [animation-duration:3s] [animation-direction:reverse]" />
          </>
        )}

        {/* --- CARD HOVER: High-Tech Industrial Telemetry Viewfinder --- */}
        {hoverType === "card" && (
          <>
            {/* Top Left Bracket */}
            <span className="absolute top-1 left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-[#EE6C25]" />
            {/* Top Right Bracket */}
            <span className="absolute top-1 right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-[#EE6C25]" />
            {/* Bottom Left Bracket */}
            <span className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-[#EE6C25]" />
            {/* Bottom Right Bracket */}
            <span className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-[#EE6C25]" />

            {/* Clean, centered Viewfinder badge right inside the reticle */}
            <span className="text-[9px] font-mono font-black tracking-widest text-[#F48A4E] uppercase drop-shadow">
              VIEW
            </span>
          </>
        )}
      </div>

      {/* 2. Precision Laser Core Dot (Zero latency, exact hardware click point) */}
      <div
        ref={dotRef}
        className={`pointer-events-none fixed top-0 left-0 z-[999999] hidden md:block will-change-transform transition-opacity duration-200 select-none ${
          isVisible && hoverType !== "input" ? "opacity-100" : "opacity-0"
        }`}
        style={{ transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)" }}
      >
        <div
          className={`relative flex items-center justify-center transition-transform duration-150 ease-out ${
            isClicked ? "scale-75" : isInteractive ? "scale-125" : "scale-100"
          }`}
        >
          {/* Luminous Precision Core Dot */}
          <span
            className={`rounded-full transition-all duration-200 ${
              hoverType === "whatsapp"
                ? "w-2.5 h-2.5 bg-emerald-400 shadow-[0_0_12px_#10B981] border border-white"
                : isButtonState
                ? "w-2.5 h-2.5 bg-white shadow-[0_0_14px_#EE6C25] border-2 border-[#EE6C25]"
                : hoverType === "card"
                ? "w-1.5 h-1.5 bg-[#EE6C25] shadow-[0_0_8px_#EE6C25]"
                : hoverType === "link"
                ? "w-2 h-2 bg-white shadow-[0_0_10px_#EE6C25] border border-[#EE6C25]"
                : "w-2 h-2 bg-white shadow-[0_0_10px_#EE6C25] border border-[#EE6C25]/90"
            }`}
          />
        </div>
      </div>
    </>
  );
}
