"use client";

import React from "react";
import {
  Construction,
  ShieldCheck,
  Truck,
  Wrench,
  Sparkles,
  Zap,
  MapPin,
  Clock,
} from "lucide-react";

interface ScrollingMarqueeProps {
  speed?: "slow" | "normal" | "fast";
  direction?: "left" | "right";
  className?: string;
}

const MARQUEE_ITEMS = [
  { text: "BEST BOOMLIFTS SERVICES IN INDIA & VIZAG", icon: Sparkles },
  { text: "HEAVY TELESCOPIC & ALL-TERRAIN CRANES (50T – 300T)", icon: Truck },
  { text: "HYDRAULIC LATTICE CRAWLER CRANES (50T – 500T)", icon: Zap },
  { text: "TRUCK-MOUNTED BOOM LIFTS & SKY LIFTS (18M – 70M)", icon: Construction },
  { text: "PICK & CARRY HYDRA / FARANA CRANES (12T – 30T)", icon: Wrench },
  { text: "ELECTRIC & ROUGH-TERRAIN SCISSOR LIFTS (19FT – 60FT)", icon: Sparkles },
  { text: "LOW BED & MULTI-AXLE HEAVY HAULAGE TRAILERS", icon: Truck },
  { text: "HEAVY-DUTY INDUSTRIAL DIESEL & ELECTRIC FORKLIFTS", icon: ShieldCheck },
  { text: "24/7 NATIONWIDE DISPATCH & CERTIFIED OPERATORS", icon: Clock },
  { text: "PAN-INDIA COVERAGE • VISAKHAPATNAM OPERATIONS", icon: MapPin },
];

export function ScrollingMarquee({
  speed = "normal",
  direction = "left",
  className = "",
}: ScrollingMarqueeProps) {
  return (
    <div className={`relative overflow-hidden py-4 bg-[#070E1A] border-y border-[#EE6C25]/25 select-none ${className}`}>
      {/* Edge gradient fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#070E1A] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#070E1A] to-transparent z-10 pointer-events-none" />

      <div
        className={`flex items-center gap-8 whitespace-nowrap ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
      >
        {/* Render duplicate items for seamless infinite scroll */}
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="inline-flex items-center gap-3 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-slate-200"
            >
              <span className="w-7 h-7 rounded-lg bg-[#152744] border border-[#EE6C25]/40 flex items-center justify-center text-[#EE6C25] shadow-sm">
                <Icon className="w-3.5 h-3.5" />
              </span>
              <span className="hover:text-[#F48A4E] transition-colors">{item.text}</span>
              <span className="text-[#EE6C25] font-black text-base opacity-70">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
