"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { clientLogos, type ClientLogo } from "@/data/clients";
import { Building2 } from "lucide-react";

function ClientLogoCard({ client }: { client: ClientLogo }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="shrink-0 select-none">
      {client.logo && !imageError ? (
        <div className="group relative w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 rounded-2xl bg-white p-5 sm:p-6 shadow-lg hover:shadow-2xl hover:shadow-[#EE6C25]/25 border border-white/20 hover:border-[#EE6C25] transition-all duration-300 flex items-center justify-center overflow-hidden pointer-events-none">
          <Image
            src={client.logo}
            alt={client.alt || "Client Logo"}
            fill
            sizes="(max-width: 768px) 176px, 224px"
            className="object-contain p-4 sm:p-5 transition-transform duration-300 group-hover:scale-105 pointer-events-none"
            onError={() => setImageError(true)}
            priority={false}
            unoptimized
            draggable={false}
          />
        </div>
      ) : (
        <div className="group w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 rounded-2xl bg-[#0F1D33]/80 hover:bg-[#152744] border border-dashed border-white/15 hover:border-[#EE6C25]/50 transition-all duration-300 flex flex-col items-center justify-center p-4 gap-2 text-slate-500 shadow-md pointer-events-none">
          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-[#EE6C25] group-hover:bg-[#EE6C25]/10 transition-colors">
            <Building2 className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 text-center px-2">
            {client.alt || "Client Logo"}
          </span>
        </div>
      )}
    </div>
  );
}

export function ClientsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInteractingRef = useRef<boolean>(false);
  const isDraggingRef = useRef<boolean>(false);
  const startXRef = useRef<number>(0);
  const startScrollLeftRef = useRef<number>(0);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const oneSetWidthRef = useRef<number>(0);
  const [isGrabbed, setIsGrabbed] = useState(false);

  // Duplicate the items for continuous seamless loop
  const repeatedLogos = [...clientLogos, ...clientLogos];

  // Pause and resume helpers
  const pauseAutoScroll = useCallback(() => {
    isInteractingRef.current = true;
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  }, []);

  const scheduleResume = useCallback((delay = 1800) => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      isInteractingRef.current = false;
    }, delay);
  }, []);

  // Measure oneSetWidth once and on window resize to avoid forced layout reflows on RAF
  useEffect(() => {
    const measureWidth = () => {
      if (containerRef.current) {
        oneSetWidthRef.current = containerRef.current.scrollWidth / 2;
      }
    };
    measureWidth();
    window.addEventListener("resize", measureWidth, { passive: true });
    return () => window.removeEventListener("resize", measureWidth);
  }, []);

  // Ultra-lightweight 60fps auto-scroll loop (zero layout thrashing)
  useEffect(() => {
    let animationFrameId: number;

    const tick = () => {
      const el = containerRef.current;
      if (el && !isInteractingRef.current) {
        const oneSet = oneSetWidthRef.current || (el.scrollWidth / 2);
        el.scrollLeft += 2.0; // Fast and smooth

        if (el.scrollLeft >= oneSet) {
          el.scrollLeft -= oneSet;
        } else if (el.scrollLeft <= 0) {
          el.scrollLeft += oneSet;
        }
      }
      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  // Hand / Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    pauseAutoScroll();
    isDraggingRef.current = true;
    setIsGrabbed(true);
    startXRef.current = e.pageX - containerRef.current.offsetLeft;
    startScrollLeftRef.current = containerRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.4;
    const el = containerRef.current;
    const oneSet = oneSetWidthRef.current || (el.scrollWidth / 2);

    let targetScroll = startScrollLeftRef.current - walk;
    if (targetScroll >= oneSet) {
      targetScroll -= oneSet;
      startXRef.current = x;
      startScrollLeftRef.current = targetScroll;
    } else if (targetScroll <= 0) {
      targetScroll += oneSet;
      startXRef.current = x;
      startScrollLeftRef.current = targetScroll;
    }

    el.scrollLeft = targetScroll;
  };

  const handleMouseUpOrLeave = () => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      setIsGrabbed(false);
      scheduleResume(1800);
    }
  };

  // Touch Handlers for mobile & tablet swipe
  const handleTouchStart = () => {
    pauseAutoScroll();
  };

  const handleTouchEnd = () => {
    scheduleResume(1800);
  };

  // Wheel / Trackpad scroll listener
  const handleWheel = () => {
    pauseAutoScroll();
    scheduleResume(1200);
  };

  return (
    <section id="clients" className="py-16 sm:py-20 bg-[#070E1A] relative overflow-hidden border-t border-white/10 scroll-mt-20">
      {/* Background ambient lighting aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#EE6C25]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 industrial-grid opacity-15 pointer-events-none" />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 text-[#EE6C25] text-xs font-black uppercase tracking-widest mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#EE6C25] animate-pulse" />
            Trusted Partnerships
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Our Clients
          </h2>
          <div className="w-14 h-1 bg-[#EE6C25] rounded-full mt-2" />
        </div>
      </div>

      {/* Infinite Scrolling & Draggable Marquee Container with Edge Blend Masks */}
      <div className="relative overflow-hidden select-none py-3">
        {/* Left & Right Subtle Ambient Blend Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#070E1A] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#070E1A] to-transparent z-20 pointer-events-none" />

        {/* Scrollable / Draggable Track */}
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onWheel={handleWheel}
          onMouseEnter={pauseAutoScroll}
          className={`flex items-center gap-5 sm:gap-6 overflow-x-auto py-2 px-6 scrollbar-none select-none ${isGrabbed ? "cursor-grabbing" : "cursor-grab"
            }`}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {repeatedLogos.map((client, index) => (
            <div key={`${client.id}-${index}`} className="shrink-0">
              <ClientLogoCard client={client} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
