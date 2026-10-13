"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { AnimatedText } from "@/components/ui/AnimatedText";
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const ROTATING_FLEET_LINES = [
  "Best Crane Services in Vizag & India (50T – 300T)",
  "Services of Boomlift in India (45ft – 150ft Manlifts)",
  "Heavy Hydraulic Lattice Crawler Cranes (50T – 500T)",
  "Road-Legal Truck-Mounted Sky Lifts (18m – 70m)",
  "Pick & Carry Farana Hydra Cranes (12T – 30T)",
  "Electric & Diesel Rough-Terrain Scissor Lifts",
  "Heavy Haulage Multi-Axle & Low Bed Trailers",
  "Nearby Rapid Crane Hire in Visakhapatnam & Pan-India",
];

export function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  // Typewriter Letter Animation Effect for the Sub-Headline
  useEffect(() => {
    const currentPhrase = ROTATING_FLEET_LINES[phraseIndex];
    const typingSpeed = isDeleting ? 30 : 65;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentPhrase.length) {
          setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2400);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentPhrase.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % ROTATING_FLEET_LINES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, phraseIndex]);

  // Subtle Mouse Parallax Depth Effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseOffset({ x: x * 15, y: y * 15 });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-hidden bg-[#070E1A] scroll-mt-24"
    >
      {/* 1. Full-Screen Cinematic Real Fleet Backdrop */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            transform: `scale(1.05) translate3d(${mouseOffset.x * 0.3}px, ${mouseOffset.y * 0.3}px, 0)`,
            transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <Image
            src="/images/hero-fleet-cinematic.jpg"
            alt="Sadhana RR Enterprises Official All-India Heavy Crane and Construction Equipment Fleet"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.85] contrast-[1.08]"
          />
        </div>

        {/* Studio-Grade Contrast Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070E1A]/95 via-[#070E1A]/75 to-[#070E1A]/25 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070E1A] via-transparent to-[#070E1A]/70 z-10" />
        <div className="absolute inset-0 industrial-grid opacity-10 pointer-events-none z-10" />
      </div>

      {/* 2. Main Center Hero Content (Clean, Spacious, Majestic) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-3xl space-y-5">
          {/* Official Location & Dispatch Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0F1D33]/95 border border-[#EE6C25]/40 text-[#F48A4E] text-[11px] sm:text-xs font-bold tracking-wider uppercase backdrop-blur-xl shadow-lg shadow-black/50 max-w-full">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#EE6C25] shrink-0" />
            <span className="truncate">PAN-INDIA CRANE & HEAVY FLEET DISPATCH • 24/7</span>
          </div>

          {/* Letter Animated H1 Title */}
          <div className="space-y-1">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              <AnimatedText
                text="Lifting Power."
                as="span"
                className="text-white block"
              />
              <span className="text-gradient-orange block">
                Moving Progress.
              </span>
            </h1>

            {/* Letter Animated Sub-Rotator */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-base lg:text-lg text-slate-200 font-semibold pt-1">
              <span className="text-[#F48A4E] font-bold">Lineup:</span>
              <span className="shimmer-text min-h-[1.4em] block">{displayedText}</span>
            </div>
          </div>

          {/* Supporting Copy */}
          <p className="text-xs sm:text-sm lg:text-base text-slate-200 leading-relaxed max-w-2xl font-normal drop-shadow">
            India’s premier heavy equipment rental partner offering the <strong className="text-white font-bold">best crane services in Vizag</strong> and throughout India, alongside top-rated <strong className="text-white font-bold">services of boomlift in India</strong>. Supplying certified heavy mobile cranes (50T–300T), crawler cranes (50T–500T), truck-mounted sky lifts, Farana pick & carry cranes, scissor lifts, and low bed trailers with 24/7 nationwide dispatch.
          </p>

          {/* Primary Action Button Cluster */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 pt-1">
            <Link
              href="/#quote"
              className="btn-primary text-xs sm:text-sm font-extrabold uppercase tracking-wider px-6 py-3 sm:py-3.5 rounded-xl shadow-xl shadow-[#EE6C25]/35 hover:shadow-[#EE6C25]/55 text-center justify-center flex items-center gap-2"
            >
              <span>GET INSTANT QUOTATION</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={siteConfig.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-xs sm:text-sm font-bold px-5 py-3 sm:py-3.5 rounded-xl text-center justify-center flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp Dispatch</span>
            </a>

            <a
              href={`tel:${siteConfig.contact.primaryPhone}`}
              className="btn-secondary text-xs sm:text-sm font-semibold px-4 py-3 sm:py-3.5 rounded-xl backdrop-blur-md text-center justify-center hidden sm:flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#EE6C25]" />
              <span>{siteConfig.contact.primaryPhoneFormatted}</span>
            </a>
          </div>

          {/* Trust Assurances Bar */}
          <div className="pt-3 flex flex-wrap items-center gap-5 text-xs sm:text-sm text-slate-300 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#EE6C25] shrink-0" />
              <span>Pan-India Project Mobilization</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#EE6C25] shrink-0" />
              <span>Certified Riggers & Operators</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#EE6C25] shrink-0" />
              <span>100% Inspected & Tested Fleet</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
