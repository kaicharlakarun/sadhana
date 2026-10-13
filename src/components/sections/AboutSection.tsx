import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  CheckCircle2,
  ArrowRight,
  MapPin,
  ShieldCheck,
  Phone,
} from "lucide-react";

export function AboutSection() {
  const highlights = [
    "Comprehensive heavy equipment fleet (Cranes, Crawlers, Boom Lifts, Sky Lifts, Hydra, Scissor Lifts, Trailers, Forklifts)",
    "Rigorous pre-dispatch mechanical inspections ensuring maximum job site uptime",
    "Flexible hire terms: Daily shift, weekly, and monthly project agreements",
    "Certified, safety-oriented machine operators with rich terrain experience",
    "Prompt mobilization & dedicated technical support across Vizag & India",
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#070E1A] relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase & Brand Logo Emblem */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group bg-[#101E35]">
              <div className="aspect-[4/3] sm:aspect-[16/11] relative">
                <Image
                  src="/images/about-depot-yard.jpg"
                  alt="Sadhana RR Enterprises official machinery fleet in Visakhapatnam"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070E1A] via-transparent to-transparent opacity-85" />
              </div>

              {/* Floating Quality Assurance Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm p-3.5 rounded-xl bg-[#0F1D33]/95 border border-[#EE6C25]/40 backdrop-blur-md shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 shrink-0 rounded-full bg-white/10 p-1 border border-[#EE6C25]/60">
                    <Image
                      src="/images/logo.png"
                      alt="Sadhana RR Enterprises Official Emblem"
                      width={40}
                      height={40}
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white uppercase tracking-wider block">
                      Sadhana RR Enterprises
                    </span>
                    <p className="text-[11px] text-[#F48A4E] font-medium leading-snug">
                      Certified Heavy Equipment Fleet • Pan-India & Vizag
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle background navy/orange glow */}
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#EE6C25]/10 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Right Column: Company Story & Value */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EE6C25]/15 border border-[#EE6C25]/40 text-[#F48A4E] text-xs font-bold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EE6C25]" />
              ABOUT SADHANA RR ENTERPRISES
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Lifting Power. <br />
              <span className="text-gradient-orange">Moving Progress.</span>
            </h2>

            <p className="text-base text-slate-200 leading-relaxed">
              <strong className="text-white font-semibold">Sadhana RR Enterprises</strong> is an established construction equipment rental enterprise helping civil contractors, builders, industrial facilities, and infrastructure project developers complete projects on time with dependable machinery.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Under the active leadership of <strong className="text-white font-semibold">{siteConfig.leadership.name}</strong> ({siteConfig.leadership.title}), we focus on equipment health, strict safety standards, on-time site dispatch, and transparent rental coordination across Visakhapatnam and surrounding industrial corridors.
            </p>

            {/* Feature Checklist */}
            <ul className="space-y-3 pt-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#EE6C25] shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200">{item}</span>
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link href="/about" className="btn-primary text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5">
                <span>Company Profile</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${siteConfig.contact.primaryPhone}`}
                className="btn-secondary text-xs sm:text-sm font-semibold px-5 py-3.5"
              >
                <Phone className="w-4 h-4 text-[#EE6C25]" />
                <span>Speak to Team</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
