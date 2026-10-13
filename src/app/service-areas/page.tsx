import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { serviceAreas } from "@/data/service-areas";
import { equipmentFleet } from "@/data/equipment";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  MapPin,
  ShieldCheck,
  Phone,
  ArrowRight,
  Truck,
  Globe,
  Award,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Services of Boomlift in India & Best Crane Services in India | Sadhana RR Enterprises",
  description:
    "Premier heavy equipment rental across all Indian states: Best crane services in India (50T–300T mobile cranes, 50T–500T crawler cranes), top-rated services of boomlift in India (45ft–150ft articulated & telescopic manlifts, 18m–70m sky lifts), Farana hydras, scissor lifts, and heavy trailers with nationwide 24/7 mobilization.",
  alternates: {
    canonical: `${siteConfig.url}/service-areas`,
  },
  keywords: [
    "Services of Boomlift in India",
    "Best Crane Services in India",
    "Boom Lift Services in India",
    "Best Boomlifts Services in India",
    "Crane Rental India",
    "Heavy Crane Rental India",
    "Crawler Crane Rental India",
    "Articulated Boom Lift Rental India",
    "Telescopic Manlift Hire India",
    "Truck Mounted Boom Lift Rental India",
    "Sky Lift Rental India",
    "Crane Hire Near Me",
    "Boom Lift Rental Near Me",
    "Hydraulic Crane Rental Hyderabad Telangana",
    "Crane Hire Chennai Tamil Nadu",
    "Crawler Crane Rental Odisha Paradeep",
    "Heavy Crane Hire Gujarat Maharashtra",
    "Pan India Construction Machinery Hire",
    "Sadhana RR Enterprises India",
  ],
};

export default function ServiceAreasMasterPage() {
  return (
    <div className="pt-28 pb-20 bg-[#0A1322]">
      {/* Hero Header */}
      <section className="relative py-16 lg:py-24 bg-[#0F1D33] border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 industrial-grid opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EE6C25]/15 border border-[#EE6C25]/40 text-[#F48A4E] text-xs font-bold tracking-wider uppercase mb-4 shadow-lg">
              <Globe className="w-3.5 h-3.5 text-[#EE6C25]" />
              PAN-INDIA NATIONWIDE CRANE & MACHINERY SERVICE
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
              All-India Heavy Crane &{" "}
              <span className="text-gradient-orange">Equipment Mobilization</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Sadhana RR Enterprises provides certified heavy lifting solutions, hydraulic cranes, crawler cranes, excavators, and aerial work platforms to infrastructure, energy, refinery, port, and industrial projects across Northern, Western, Southern, and Eastern states throughout India.
            </p>
          </div>
        </div>
      </section>

      {/* 4 National Zones + Highway Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="PAN-INDIA OPERATIONAL HUBS"
          title="Regional Zones & Nationwide Deployment"
          subtitle="Explore our nationwide equipment delivery, rapid dispatch response, and project specializations across all Indian states."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {serviceAreas.map((area) => (
            <div
              key={area.name}
              className="industrial-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between space-y-5 border border-white/10 hover:border-[#EE6C25]/50 transition-all duration-300 shadow-xl"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-[#F48A4E] flex items-center gap-2 uppercase tracking-wider">
                    <MapPin className="w-4 h-4 text-[#EE6C25]" />
                    {area.name}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#EE6C25]/15 text-[#F48A4E] text-[11px] font-bold border border-[#EE6C25]/30">
                    {area.responseTime}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {area.description}
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-white/5">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Major Project Applications in This Zone:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {area.commonProjects.map((proj) => (
                    <div
                      key={proj}
                      className="text-xs p-2 rounded-lg bg-[#0A1527] border border-white/5 text-slate-200 flex items-start gap-1.5"
                    >
                      <span className="text-[#EE6C25] font-bold mt-0.5">•</span>
                      <span>{proj}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1.5">
                  Target Search Queries Covered:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {area.coverageKeywords.map((kw) => (
                    <span
                      key={kw}
                      className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pan-India High-Intent Services Quick Directory */}
        <div className="mb-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#0F1D33] to-[#0A1527] border border-white/10 shadow-2xl space-y-5">
          <div>
            <span className="text-[11px] font-mono font-bold text-[#F48A4E] uppercase tracking-wider block mb-1">
              PAN-INDIA INDUSTRIAL SERVICE DIRECTORY
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              All-India Heavy Equipment Rental Solutions
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/equipment/best-crane-services-in-india"
              className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-white hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-semibold transition-all"
            >
              Best Crane Services in India
            </Link>
            <Link
              href="/equipment/services-of-boomlift-in-india"
              className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-white hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-semibold transition-all"
            >
              Services of Boomlift in India
            </Link>
            <Link
              href="/equipment/scissor-lift-rental-services-india"
              className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-white hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-semibold transition-all"
            >
              Scissor Lift Rental in India
            </Link>
            <Link
              href="/equipment/pick-and-carry-crane-rental-india"
              className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-white hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-semibold transition-all"
            >
              Pick and Carry Crane Rental India
            </Link>
            <Link
              href="/equipment/truck-mounted-boom-lift-rental-india"
              className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-white hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-semibold transition-all"
            >
              Truck-Mounted Boom Lift Rental India
            </Link>
            <Link
              href="/equipment/crawler-crane-rental-services-india"
              className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-slate-200 hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-semibold transition-all"
            >
              Crawler Crane Rental Services India
            </Link>
            <Link
              href="/equipment/low-bed-trailer-rental-india"
              className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-slate-200 hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-semibold transition-all"
            >
              Low Bed Heavy Trailer Rental India
            </Link>
            <Link
              href="/equipment/multi-axle-modular-trailer-rental-india"
              className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-slate-200 hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-semibold transition-all"
            >
              Multi-Axle Modular Trailer Transport
            </Link>
            <Link
              href="/equipment/forklift-rental-services-india"
              className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-slate-200 hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-semibold transition-all"
            >
              Industrial Forklift Rental India
            </Link>
            <Link
              href="/equipment/heavy-machinery-transport-near-me"
              className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-slate-200 hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-semibold transition-all"
            >
              Heavy Machinery Transport Near Me
            </Link>
          </div>
        </div>

        {/* Central Operations Depot Details */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#0F1D33] border border-white/10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EE6C25]/15 text-[#F48A4E] text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              CENTRAL FLEET OPERATIONS BASE
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Headquartered with Nationwide Transit Capabilities
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Operating out of our central equipment operations base in Visakhapatnam, Andhra Pradesh with direct connectivity to National Highway 16, railway transit, and multi-axle heavy trailers for rapid mobilization to any state in India.
            </p>
            <div className="text-xs text-slate-400 pt-1">
              📍 <strong className="text-slate-200">Registered Address:</strong> {siteConfig.contact.address.full}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
            <Link
              href="/#quote"
              className="btn-primary text-xs sm:text-sm font-extrabold uppercase tracking-wider px-6 py-3.5 text-center justify-center rounded-xl"
            >
              <span>Book Fleet For Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={siteConfig.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-xs sm:text-sm font-bold px-6 py-3.5 text-center justify-center rounded-xl"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp Dispatch</span>
            </a>
          </div>
        </div>
      </section>

      {/* Equipment Available All India */}
      <section className="py-16 bg-[#0F1D33] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Certified Fleet Available for Pan-India Deployment
            </h2>
            <p className="mt-3 text-sm text-slate-400">
              Every unit undergoes third-party safety certification, load chart compliance, and is accompanied by skilled certified operators.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipmentFleet.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-xl bg-[#152744] border border-white/10 flex flex-col justify-between space-y-4 hover:border-[#EE6C25]/50 transition-all shadow-md"
              >
                <div>
                  <span className="text-[10px] font-bold text-[#F48A4E] uppercase tracking-wider">
                    {item.categoryName}
                  </span>
                  <h3 className="text-base font-bold text-white mt-1">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 line-clamp-2">
                    {item.shortDescription}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-white/5">
                  <Link
                    href={`/equipment/${item.slug}`}
                    className="text-xs text-[#F48A4E] hover:text-white font-bold inline-flex items-center gap-1 transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href={`tel:${siteConfig.contact.primaryPhone}`}
                    className="text-xs text-slate-300 hover:text-white inline-flex items-center gap-1 transition-colors"
                  >
                    <Phone className="w-3 h-3 text-[#EE6C25]" />
                    <span>Enquire</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Immediate Nationwide Action Banner */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Need Cranes or Heavy Machinery on Site Anywhere in India?
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Contact Sadhana RR Enterprises directly for competitive quotes, machinery transit logistics, and certified operator allocation.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link href="/#quote" className="btn-primary text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-3.5 rounded-xl">
              <span>Request Quotation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${siteConfig.contact.primaryPhone}`}
              className="btn-secondary text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl"
            >
              <Phone className="w-4 h-4 text-[#EE6C25]" />
              <span>Call Helpline: {siteConfig.contact.primaryPhoneFormatted}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
