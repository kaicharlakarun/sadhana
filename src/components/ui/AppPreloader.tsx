"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ShieldCheck, Activity } from "lucide-react";

export function AppPreloader() {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("CALIBRATING FLEET TELEMETRY");
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      // Smooth non-linear progress
      const increment = Math.floor(Math.random() * 12) + 6;
      current += increment;

      if (current >= 100) {
        current = 100;
        setProgress(100);
        setStatusText("SYSTEM READY • PAN-INDIA DISPATCH ACTIVE");
        clearInterval(interval);

        // Smooth curtain fade reveal
        setTimeout(() => {
          setIsLoaded(true);
          setTimeout(() => {
            setShouldRender(false);
          }, 800);
        }, 350);
      } else {
        setProgress(current);
        if (current > 75) {
          setStatusText("PREPARING CRANE & HEAVY FLEET ASSETS");
        } else if (current > 40) {
          setStatusText("ESTABLISHING PAN-INDIA DISPATCH NETWORK");
        } else if (current > 15) {
          setStatusText("INITIALIZING HEAVY LIFT TELEMETRY");
        }
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#070E1A] transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] select-none overflow-hidden ${
        isLoaded ? "opacity-0 pointer-events-none scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Background industrial grid & ambient luxury radial aura */}
      <div className="absolute inset-0 industrial-grid opacity-15 pointer-events-none" />
      <div className="absolute w-[600px] h-[600px] rounded-full bg-radial from-[#EE6C25]/20 via-[#152744]/15 to-transparent blur-[140px] pointer-events-none animate-pulse-glow" />

      {/* Pure Center Minimal Luxury Loading Card */}
      <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6 text-center space-y-7">
        {/* Animated Brand Emblem with Rotating Energy Rings */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
          {/* Outer Orbital Tech Ring */}
          <div className="absolute inset-0 rounded-full border border-dashed border-[#EE6C25]/50 animate-spin [animation-duration:10s]" />

          {/* Glowing Arc Laser Ring */}
          <div className="absolute inset-1.5 rounded-full border-2 border-transparent border-t-[#EE6C25] border-r-[#F48A4E] animate-spin [animation-duration:4s] [animation-direction:reverse]" />

          {/* Ambient Inner Glow Aura */}
          <div className="absolute inset-3 rounded-full bg-gradient-to-tr from-[#EE6C25]/40 to-[#1C3358]/50 blur-lg" />

          {/* Official Emblem Logo */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-[#0A1322] border-2 border-[#EE6C25] shadow-[0_0_40px_rgba(238,108,37,0.55)]">
            <Image
              src="/images/logo.png"
              alt="Sadhana RR Enterprises"
              width={96}
              height={96}
              className="w-full h-full object-contain rounded-full"
              priority
            />
          </div>
        </div>

        {/* Clean Luxury Title & Slogan */}
        <div className="space-y-1.5">
          <span className="text-xs font-mono font-extrabold text-[#F48A4E] uppercase tracking-[0.25em] flex items-center justify-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#EE6C25]" />
            SADHANA RR ENTERPRISES
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Lifting Power • Moving Progress
          </h2>
        </div>

        {/* High-Precision Progress Bar */}
        <div className="w-full space-y-2.5 max-w-xs">
          <div className="w-full h-1.5 bg-[#101E35] rounded-full overflow-hidden border border-white/10 p-[1px]">
            <div
              className="h-full bg-gradient-to-r from-[#EE6C25] via-[#F48A4E] to-[#EE6C25] rounded-full transition-all duration-100 ease-out shadow-[0_0_14px_#EE6C25]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Status Line & Percentage */}
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400 flex items-center gap-1.5 text-left text-[11px]">
              <Activity className="w-3 h-3 text-[#EE6C25] animate-pulse shrink-0" />
              {statusText}
            </span>
            <span className="font-bold text-[#EE6C25] text-xs shrink-0 ml-2">
              {progress}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
