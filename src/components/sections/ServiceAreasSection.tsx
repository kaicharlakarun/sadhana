import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { serviceAreas } from "@/data/service-areas";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  MapPin,
  ArrowRight,
  ExternalLink,
  Phone,
} from "lucide-react";

export function ServiceAreasSection() {
  return (
    <section id="service-areas" className="py-20 lg:py-28 bg-[#0A1322] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="ALL-INDIA OPERATIONAL NETWORK"
          title="Pan-India Crane & Heavy Machinery Mobilization"
          subtitle="Deploying heavy telescopic mobile cranes, hydraulic crawler cranes, boom lifts, and earthmoving machinery across Northern, Western, Southern, and Eastern industrial corridors all over India."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Grid: Key National Area Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {serviceAreas.map((area) => (
              <div
                key={area.name}
                className="industrial-card p-5 rounded-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#F48A4E] flex items-center gap-1.5 uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5 text-[#EE6C25]" />
                      {area.name}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-semibold text-slate-300">
                      {area.responseTime}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-1">
                  {area.commonProjects.slice(0, 2).map((proj) => (
                    <span
                      key={proj}
                      className="text-[10px] px-2 py-0.5 rounded bg-[#EE6C25]/15 text-[#F48A4E] font-medium"
                    >
                      {proj}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Google Maps & Base Office Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="industrial-card p-6 rounded-xl space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#EE6C25]/15 border border-[#EE6C25]/30 flex items-center justify-center text-[#EE6C25] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    Operations Office & Headquarters
                  </h3>
                  <p className="text-xs text-slate-300">
                    {siteConfig.contact.address.full}
                  </p>
                </div>
              </div>

              {/* Verified Google Maps Iframe */}
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 shadow-inner">
                <iframe
                  src={siteConfig.contact.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sadhana RR Enterprises Google Maps Location"
                  className="w-full h-full filter contrast-105"
                />
              </div>

              <div className="flex items-center justify-between pt-2 text-xs">
                <a
                  href={siteConfig.contact.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F48A4E] hover:text-[#EE6C25] font-bold inline-flex items-center gap-1.5"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`tel:${siteConfig.contact.primaryPhone}`}
                  className="text-slate-200 hover:text-white font-semibold inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#EE6C25]" />
                  <span>Call Dispatch Desk</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* High-Intent SEO Keyword Directory & Regional Navigation Matrix */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#0F1D33] to-[#0A1527] border border-white/10 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <span className="text-[11px] font-mono font-bold text-[#F48A4E] uppercase tracking-wider block mb-1">
                TOP-RANKED SEARCH DIRECTORY • VIZAG & ALL-INDIA
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Quick Equipment Hire Finder
              </h3>
            </div>
            <Link
              href="/service-areas/visakhapatnam"
              className="px-4 py-2 rounded-xl bg-[#EE6C25]/15 border border-[#EE6C25]/40 text-[#F48A4E] hover:bg-[#EE6C25] hover:text-white text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-1.5"
            >
              <span>Vizag Operations Hub</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Group 1: Vizag & Nearby Keywords */}
          <div className="space-y-2.5">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#EE6C25]" />
              Vizag & Nearby Industrial Corridors (Under 1–2 Hour Dispatch):
            </span>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/equipment/best-crane-services-in-vizag"
                className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-white hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-medium transition-all"
              >
                Best Crane Services in Vizag
              </Link>
              <Link
                href="/equipment/best-boomlift-services-in-vizag"
                className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-white hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-medium transition-all"
              >
                Best Boomlift Services in Vizag
              </Link>
              <Link
                href="/equipment/best-scissor-lift-services-in-vizag"
                className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-white hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-medium transition-all"
              >
                Best Scissor Lift Services in Vizag
              </Link>
              <Link
                href="/equipment/best-hydra-crane-services-in-vizag"
                className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-white hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-medium transition-all"
              >
                Best Hydra Crane Services in Vizag
              </Link>
              <Link
                href="/equipment/best-sky-lift-services-in-vizag"
                className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-white hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-medium transition-all"
              >
                Best Sky Lift Services in Vizag
              </Link>
              <Link
                href="/equipment/best-forklift-services-in-vizag"
                className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-white hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-medium transition-all"
              >
                Best Forklift Services in Vizag
              </Link>
              <Link
                href="/equipment/heavy-trailer-rental-vizag"
                className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-slate-200 hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-medium transition-all"
              >
                Heavy Trailer Rental Vizag
              </Link>
              <Link
                href="/equipment/crawler-crane-hire-vizag"
                className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-slate-200 hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-medium transition-all"
              >
                Crawler Crane Hire Vizag
              </Link>
              <Link
                href="/equipment/crane-services-near-me"
                className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-slate-200 hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-medium transition-all"
              >
                Crane Services Near Me
              </Link>
              <Link
                href="/equipment/hydra-crane-near-me"
                className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-slate-200 hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-medium transition-all"
              >
                Hydra Crane Near Me
              </Link>
              <Link
                href="/equipment/boom-lift-rental-near-me"
                className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-slate-200 hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-medium transition-all"
              >
                Boom Lift Rental Near Me
              </Link>
              <Link
                href="/equipment/scissor-lift-near-me"
                className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-slate-200 hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-medium transition-all"
              >
                Scissor Lift Near Me
              </Link>
              <Link
                href="/service-areas/visakhapatnam"
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#1C3358] text-slate-300 hover:text-white border border-white/10 text-xs font-medium transition-all"
              >
                Gajuwaka Industrial Crane Hire
              </Link>
              <Link
                href="/service-areas/visakhapatnam"
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#1C3358] text-slate-300 hover:text-white border border-white/10 text-xs font-medium transition-all"
              >
                Parawada Pharma City Boom Lift
              </Link>
              <Link
                href="/service-areas/visakhapatnam"
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#1C3358] text-slate-300 hover:text-white border border-white/10 text-xs font-medium transition-all"
              >
                Auto Nagar Farana Hydra Crane
              </Link>
              <Link
                href="/service-areas/visakhapatnam"
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#1C3358] text-slate-300 hover:text-white border border-white/10 text-xs font-medium transition-all"
              >
                Steel Plant & Gangavaram Heavy Lift
              </Link>
            </div>
          </div>

          {/* Group 2: All-India National Keywords */}
          <div className="space-y-2.5 pt-2 border-t border-white/5">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#EE6C25]" />
              Pan-India Machinery Hire & Specialized Industrial Fleet:
            </span>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/equipment/best-crane-services-in-india"
                className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-white hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-medium transition-all"
              >
                Best Crane Services in India
              </Link>
              <Link
                href="/equipment/services-of-boomlift-in-india"
                className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-white hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-medium transition-all"
              >
                Services of Boomlift in India
              </Link>
              <Link
                href="/equipment/scissor-lift-rental-services-india"
                className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-white hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-medium transition-all"
              >
                Scissor Lift Rental in India
              </Link>
              <Link
                href="/equipment/pick-and-carry-crane-rental-india"
                className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-white hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-medium transition-all"
              >
                Pick and Carry Crane Rental India
              </Link>
              <Link
                href="/equipment/truck-mounted-boom-lift-rental-india"
                className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-white hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-medium transition-all"
              >
                Truck-Mounted Boom Lift Rental India
              </Link>
              <Link
                href="/equipment/crawler-crane-rental-services-india"
                className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-slate-200 hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-medium transition-all"
              >
                Heavy Crawler Crane Rental (50T–500T)
              </Link>
              <Link
                href="/equipment/low-bed-trailer-rental-india"
                className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-slate-200 hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-medium transition-all"
              >
                Low Bed Heavy Trailer Rental India
              </Link>
              <Link
                href="/equipment/multi-axle-modular-trailer-rental-india"
                className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-slate-200 hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-medium transition-all"
              >
                Multi-Axle Modular Trailer Transport
              </Link>
              <Link
                href="/equipment/forklift-rental-services-india"
                className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-slate-200 hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-medium transition-all"
              >
                Industrial Forklift Rental India
              </Link>
              <Link
                href="/equipment/heavy-machinery-transport-near-me"
                className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-slate-200 hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-medium transition-all"
              >
                Heavy Machinery Transport Near Me
              </Link>
            </div>
          </div>
        </div>

        {/* Pan-India SEO Hub Page Link */}
        <div className="text-center">
          <Link
            href="/service-areas"
            className="btn-secondary text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-3.5"
          >
            <span>Explore Complete All-India Crane & Equipment Mobilization Guide</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
