"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { AnimatedText } from "@/components/ui/AnimatedText";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  highlightWords?: string[];
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  highlightWords = ["Visakhapatnam", "Vizag", "Fleet", "Progress", "Rental", "Hire"],
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center mx-auto max-w-3xl",
        align === "left" && "text-left max-w-2xl",
        align === "right" && "text-right ml-auto max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EE6C25]/15 border border-[#EE6C25]/40 text-[#F48A4E] text-xs font-bold tracking-wider uppercase mb-3.5 backdrop-blur-md shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#EE6C25] animate-ping" />
          {eyebrow}
        </div>
      )}

      <div>
        <AnimatedText
          text={title}
          as="h2"
          highlightWords={highlightWords}
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight block"
        />
      </div>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal reveal-fade-up delay-200">
          {subtitle}
        </p>
      )}
    </div>
  );
}
