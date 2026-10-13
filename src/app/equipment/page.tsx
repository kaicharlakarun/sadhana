import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { EquipmentShowcase } from "@/components/sections/EquipmentShowcase";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Clock,
  Wrench,
  CheckCircle2,
  ChevronRight,
  Truck,
  Layers,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Best Cranes, Boom Lifts, Crawlers, Trailers & Forklift Rentals in India & Vizag | Sadhana RR",
  description:
    "Explore India's premier heavy lifting and aerial fleet: Heavy mobile cranes (50T–300T), hydraulic crawler cranes, best boomlifts services in India & Vizag (Visakhapatnam), truck-mounted sky lifts (18m–70m), Farana hydras, scissor lifts, heavy haulage low bed trailers, and industrial forklifts with 24/7 operators.",
  alternates: {
    canonical: `${siteConfig.url}/equipment`,
  },
};

export default function EquipmentPage() {
  const fleetKeyMetrics = [
    { label: "Heavy Lifting Range", value: "50T – 500T", sub: "Telescopic & Crawler Cranes", icon: Truck },
    { label: "Aerial Working Height", value: "14m – 70m", sub: "Boom Lifts & Sky Lifts", icon: Layers },
    { label: "Fleet Health & Safety", value: "100% Certified", sub: "Third-Party TPI & Load Tested", icon: ShieldCheck },
    { label: "Nationwide Mobilization", value: "24/7 Pan-India", sub: "Immediate Site Dispatch", icon: Clock },
  ];

  const safetyAssurances = [
    {
      title: "Pre-Dispatch Mechanical Overhaul",
      description: "Every machine undergoes a strict 40-point safety checklist, hydraulic pressure validation, and load limiter calibration prior to project dispatch.",
      icon: ShieldCheck,
    },
    {
      title: "Certified Heavy Machine Operators",
      description: "Supplied with certified, licensed operators and safety riggers trained for high-risk industrial plant shutdowns, coastal terrain, and heavy lifts.",
      icon: Wrench,
    },
    {
      title: "Comprehensive Third-Party Certification (TPI)",
      description: "Supplied with current fitness certifications, valid wire rope testing reports, safe working load (SWL) charts, and insurance documentation.",
      icon: CheckCircle2,
    },
    {
      title: "Turnkey Low Bed Trailer Mobilization",
      description: "Our in-house heavy transport fleet of low bed and hydraulic multi-axle trailers guarantees on-time site arrival anywhere in India.",
      icon: Zap,
    },
  ];

  return (
    <div className="pt-24 lg:pt-28 pb-20 bg-[#070E1A]">
      {/* 1. Cinematic Hero Header */}
      <section className="relative py-16 lg:py-22 bg-[#070E1A] border-b border-white/10 overflow-hidden">
        {/* Background ambient lighting aura */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[#EE6C25]/10 rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute inset-0 industrial-grid opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6 uppercase tracking-wider">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#EE6C25]" />
            <span className="text-[#F48A4E]">Equipment Fleet Catalog</span>
          </nav>

          <div className="max-w-4xl space-y-5">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0F1D33]/90 border border-[#EE6C25]/40 text-[#F48A4E] text-xs font-black tracking-widest uppercase shadow-lg shadow-[#EE6C25]/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#EE6C25] animate-ping" />
              <span>ALL-INDIA & VIZAG CERTIFIED HEAVY MACHINERY FLEET</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
              Heavy Cranes, Boom Lifts, <br />
              <span className="text-gradient-orange">Crawlers & Fleet Rentals</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal max-w-3xl">
              India’s premier certified machinery rental partner and the best boomlifts & crane services in Vizag (Visakhapatnam) and nationwide. Engineered for maximum safety, unmatched load capacity, and 24/7 site mobilization.
            </p>
          </div>

          {/* Key Fleet Metrics Stats Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 pt-10 border-t border-white/10">
            {fleetKeyMetrics.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-gradient-to-b from-[#0F1D33] to-[#0A1424] border border-white/10 hover:border-[#EE6C25]/50 shadow-xl hover:shadow-[#EE6C25]/10 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#152744] border border-[#EE6C25]/30 flex items-center justify-center text-[#EE6C25] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#F48A4E] transition-colors tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-300 mt-1 font-medium">
                    {stat.sub}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Interactive Equipment Fleet Showcase (No duplicate header, catalog mode) */}
      <EquipmentShowcase showHeader={false} isCatalogPage={true} />

      {/* 3. Safety, TPI & Engineering Assurance Grid */}
      <section className="py-16 lg:py-24 bg-[#070E1A] border-t border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EE6C25]/15 border border-[#EE6C25]/30 text-[#F48A4E] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              OPERATIONAL EXCELLENCE & RIGGING SAFETY
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Why Tier-1 EPC Contractors Trust Our Fleet
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Every equipment mobilization is executed under rigorous quality protocols, ensuring zero workplace incidents and uninterrupted site operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyAssurances.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-gradient-to-b from-[#0F1D33] to-[#0A1424] border border-white/10 hover:border-[#EE6C25]/50 transition-all duration-300 space-y-3 shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#EE6C25]/15 border border-[#EE6C25]/40 flex items-center justify-center text-[#EE6C25]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Instant Technical Consultation & Custom Package CTA */}
      <section className="py-16 bg-[#0B1526] border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#EE6C25]/20 border border-[#EE6C25]/40 text-[#EE6C25] shadow-lg shadow-[#EE6C25]/20">
            <Wrench className="w-7 h-7" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Planning a Heavy Lifting or High-Altitude Access Job?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Our certified crane engineers and heavy machinery coordinators assist with lift planning, load charts, boom angle calculations, and turnkey mobilization.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
            <Link
              href="/#quote"
              className="btn-primary text-xs sm:text-sm font-extrabold uppercase tracking-wider px-8 py-4 shadow-xl shadow-[#EE6C25]/30 hover:shadow-[#EE6C25]/50"
            >
              <span>Request Instant Quotation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={siteConfig.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-xs sm:text-sm font-bold px-7 py-4"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp Dispatch Desk</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
