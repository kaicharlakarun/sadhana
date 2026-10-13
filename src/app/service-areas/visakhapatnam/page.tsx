import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { equipmentFleet } from "@/data/equipment";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Phone,
  ArrowRight,
  Truck,
  Award,
  Zap,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Best Crane Services in Vizag & Best Boomlift Services in Vizag | Sadhana RR Enterprises",
  description:
    "Top-rated best crane services in Vizag and best boomlift services in Vizag (Visakhapatnam). Certified heavy telescopic mobile cranes (50T–300T), crawler cranes, truck-mounted sky lifts, Farana hydras, scissor lifts, and low bed trailers with 1–2 hour rapid dispatch across Gajuwaka, Parawada, Autonagar, Steel Plant, and all Vizag corridors.",
  alternates: {
    canonical: `${siteConfig.url}/service-areas/visakhapatnam`,
  },
  keywords: [
    "Best Cranes Services in Vizag",
    "Best Crane Services in Vizag",
    "Best Boomlift Services in Vizag",
    "Best Boomlifts Service in Vizag",
    "Services of Boomlift in Vizag",
    "Boom Lift Rental Visakhapatnam",
    "Crane Services in Vizag",
    "Crane Rental in Visakhapatnam",
    "Crane Rental Near Me Vizag",
    "Boom Lift Hire Near Me Visakhapatnam",
    "Hydra Crane Near Me Vizag",
    "Mobile Crane Hire Vizag 50T 100T 150T",
    "Crawler Crane Rental Visakhapatnam",
    "Truck Mounted Boom Lift Vizag",
    "Hydra Crane Rental Gajuwaka",
    "Farana Crane Hire Visakhapatnam",
    "Boom Lift Rental Parawada Pharma City",
    "Crane Service Autonagar Visakhapatnam",
    "Crane Hire Steel Plant Gangavaram Port",
    "Scissor Lift Rental Vizag",
    "Trailer Rental Visakhapatnam",
    "Forklift Rental Vizag",
    "Sadhana RR Enterprises Visakhapatnam",
  ],
};

const vizagCorridors = [
  {
    name: "Gajuwaka Industrial & Fabrication Corridor",
    locality: "Gajuwaka, Visakhapatnam",
    responseTime: "Under 1 Hour Dispatch",
    description:
      "Rapid deployment of heavy telescopic mobile cranes (50T to 300T) and Farana hydra cranes for heavy structural steel fabrication, industrial workshops, and transport logistics.",
    popularFleet: ["50T–150T Mobile Cranes", "Pick & Carry Hydra 14T–25T", "Diesel Forklifts 5T–10T"],
  },
  {
    name: "Parawada Pharma City & Simhadri NTPC Hub",
    locality: "Parawada, Visakhapatnam",
    responseTime: "1 to 2 Hours Transit",
    description:
      "Supplying the best boomlift services in Vizag with self-propelled knuckle boom lifts (45ft–150ft) and truck-mounted sky lifts for chemical plant turnaround maintenance, pipe racking, and boiler installations.",
    popularFleet: ["Articulated Boom Lifts 45ft–80ft", "Telescopic Manlifts 120ft", "Crawler Cranes 75T–150T"],
  },
  {
    name: "Visakhapatnam Steel Plant (RINL) & Gangavaram Port",
    locality: "Steel Plant / Gangavaram",
    responseTime: "Immediate Priority Mobilization",
    description:
      "Certified heavy crawler cranes (50T to 500T) and heavy-duty multi-axle trailers for port breakwaters, coal handling systems, blast furnace repairs, and maritime container rigging.",
    popularFleet: ["Crawler Cranes 100T–500T", "Hydraulic Multi-Axle Trailers", "All-Terrain Cranes 200T"],
  },
  {
    name: "Auto Nagar & Sheela Nagar Engineering SEZ",
    locality: "Auto Nagar / Sheela Nagar",
    responseTime: "Under 45 Minutes Transit",
    description:
      "Local dispatch of hydra pick & carry cranes, rough-terrain electric and diesel scissor lifts, and industrial forklifts for equipment offloading, machine positioning, and warehouse construction.",
    popularFleet: ["Farana Hydra Cranes 12T–30T", "Scissor Lifts 19ft–45ft", "Industrial Forklifts 3T–15T"],
  },
  {
    name: "Madhurawada IT SEZ & Highway Infrastructure Corridor",
    locality: "Madhurawada, Visakhapatnam",
    responseTime: "1 to 1.5 Hours Transit",
    description:
      "Fast truck-mounted boom lifts (18m to 70m) and articulated boom lifts for commercial high-rise glass facade cleaning, exterior architectural cladding, and highway flyover lighting maintenance.",
    popularFleet: ["Truck-Mounted Sky Lifts 28m–70m", "Electric Boom Lifts", "Low Bed Trailers"],
  },
  {
    name: "Atchutapuram SEZ & Anakapalli Heavy Industrial Zone",
    locality: "Atchutapuram / Anakapalli",
    responseTime: "1 to 2 Hours Transit",
    description:
      "Turnkey long-term monthly equipment hire for greenfield manufacturing plants, food processing units, transmission towers, and bridge girder installations.",
    popularFleet: ["Telescopic Cranes 80T–250T", "Knuckle Boom Lifts", "Heavy Low Bed Trailers"],
  },
];

const vizagFaqs = [
  {
    q: "Why is Sadhana RR Enterprises rated as the best crane services in Vizag?",
    a: "We maintain Visakhapatnam's most reliable and certified heavy crane fleet ranging from 50 Ton to 300 Ton telescopic mobile cranes and up to 500 Ton crawler cranes. Centrally based in Vepagunta with direct NH-16 connectivity, our cranes arrive on site in 1 to 2 hours with third-party load test fitness certificates and licensed heavy lift operators.",
  },
  {
    q: "Where can I find the best boomlift services in Vizag for factory or construction work?",
    a: "Sadhana RR Enterprises provides the best boomlift services in Vizag, offering self-propelled articulated boom lifts, straight telescopic manlifts (45ft to 150ft working height), and truck-mounted sky lifts (18m to 70m). Every machine includes dual ground/platform controls, auto-leveling, safety harnesses, and experienced platform operators.",
  },
  {
    q: "Can I get crane or boom lift rental services near me in Gajuwaka, Parawada, or Auto Nagar?",
    a: "Yes. Our depot provides same-day rapid mobilization across all Vizag neighborhoods including Gajuwaka, Parawada Pharma City, Auto Nagar, Visakhapatnam Steel Plant, Gangavaram Port, Madhurawada, Pendurthi, and Anakapalli. Call +91 93948 58999 for instant machinery dispatch.",
  },
  {
    q: "What are the crane and boom lift rental rates in Visakhapatnam?",
    a: "We offer highly competitive single-shift daily rates (8 or 12 hours), weekly plant shutdown hire, and discounted monthly contracts. Contact our dispatch team for a customized load chart calculation and instant written quote.",
  },
];

export default function VisakhapatnamServiceAreaPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Sadhana RR Enterprises - Best Crane & Boom Lift Services in Vizag",
    url: `${siteConfig.url}/service-areas/visakhapatnam`,
    telephone: siteConfig.contact.primaryPhone,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.contact.address.street}, ${siteConfig.contact.address.colony}`,
      addressLocality: siteConfig.contact.address.area,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 17.7740114,
      longitude: 83.2153281,
    },
    areaServed: [
      "Visakhapatnam",
      "Vizag",
      "Gajuwaka",
      "Parawada",
      "Auto Nagar",
      "Atchutapuram",
      "Visakhapatnam Steel Plant",
      "Gangavaram Port",
      "Madhurawada",
      "Vepagunta",
      "Anakapalli",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: vizagFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="pt-28 pb-20 bg-[#0A1322]">
        {/* Hero Header */}
        <section className="relative py-16 lg:py-24 bg-[#0F1D33] border-b border-white/10 overflow-hidden">
          <div className="absolute inset-0 industrial-grid opacity-25 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EE6C25]/15 border border-[#EE6C25]/40 text-[#F48A4E] text-xs font-bold tracking-wider uppercase">
                <MapPin className="w-3.5 h-3.5" />
                CENTRAL HEADQUARTERS & LOCAL DISPATCH: VISAKHAPATNAM (VIZAG)
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                Best Crane & Boom Lift Services in{" "}
                <span className="text-gradient-orange">Vizag (Visakhapatnam)</span>
              </h1>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
                Sadhana RR Enterprises is Visakhapatnam’s #1 heavy machinery partner. Supplying certified heavy mobile cranes (50T–300T), crawler cranes (50T–500T), premier boomlift services in Vizag (45ft–150ft manlifts & 18m–70m sky lifts), Farana hydras, scissor lifts, and low bed trailers with 1 to 2 hour rapid dispatch across all Vizag corridors.
              </p>

              {/* Fast Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <Link
                  href="/#quote"
                  className="btn-primary text-xs sm:text-sm font-extrabold uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg shadow-[#EE6C25]/30"
                >
                  <span>Request Instant Vizag Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${siteConfig.contact.primaryPhone}`}
                  className="btn-secondary text-xs sm:text-sm font-bold px-5 py-3.5 rounded-xl flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#EE6C25]" />
                  <span>Call Dispatch: {siteConfig.contact.primaryPhoneFormatted}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Local Corridor Breakdown Grid */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="NEARBY INDUSTRIAL ZONES & DISPATCH"
            title="Local Crane & Boom Lift Coverage Across Vizag"
            subtitle="Search for machinery hire near you in Visakhapatnam. Our strategic Vepagunta depot guarantees immediate 1 to 2 hour delivery to all major industrial and residential corridors."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {vizagCorridors.map((corridor) => (
              <div
                key={corridor.name}
                className="industrial-card p-6 rounded-2xl flex flex-col justify-between space-y-4 border border-white/10 hover:border-[#EE6C25]/60 transition-all shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[11px] font-mono font-bold text-[#F48A4E] uppercase tracking-wider flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#EE6C25]" />
                      {corridor.locality}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
                      {corridor.responseTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-white group-hover:text-[#F48A4E] transition-colors tracking-tight">
                    {corridor.name}
                  </h3>

                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    {corridor.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 space-y-2">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    Fast Mobilization Fleet:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {corridor.popularFleet.map((fleet) => (
                      <span
                        key={fleet}
                        className="text-[10px] px-2.5 py-1 rounded-md bg-[#0F1D33] border border-white/10 text-slate-200 font-medium"
                      >
                        {fleet}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Vizag High-Intent Services Quick Directory */}
          <div className="mb-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#0F1D33] to-[#0A1527] border border-white/10 shadow-2xl space-y-5">
            <div>
              <span className="text-[11px] font-mono font-bold text-[#F48A4E] uppercase tracking-wider block mb-1">
                VIZAG INDUSTRIAL CORRIDOR SERVICE DIRECTORY
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Hire Equipment Across Vizag Corridors
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/equipment/best-crane-services-in-vizag"
                className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-white hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-semibold transition-all"
              >
                Best Crane Services in Vizag
              </Link>
              <Link
                href="/equipment/best-boomlift-services-in-vizag"
                className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-white hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-semibold transition-all"
              >
                Best Boomlift Services in Vizag
              </Link>
              <Link
                href="/equipment/best-scissor-lift-services-in-vizag"
                className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-white hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-semibold transition-all"
              >
                Best Scissor Lift Services in Vizag
              </Link>
              <Link
                href="/equipment/best-hydra-crane-services-in-vizag"
                className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-white hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-semibold transition-all"
              >
                Best Hydra Crane Services in Vizag
              </Link>
              <Link
                href="/equipment/best-sky-lift-services-in-vizag"
                className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-white hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-semibold transition-all"
              >
                Best Sky Lift Services in Vizag
              </Link>
              <Link
                href="/equipment/best-forklift-services-in-vizag"
                className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-white hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-semibold transition-all"
              >
                Best Forklift Services in Vizag
              </Link>
              <Link
                href="/equipment/heavy-trailer-rental-vizag"
                className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-slate-200 hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-semibold transition-all"
              >
                Heavy Trailer Rental Vizag
              </Link>
              <Link
                href="/equipment/crawler-crane-hire-vizag"
                className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-slate-200 hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-semibold transition-all"
              >
                Crawler Crane Hire Vizag
              </Link>
              <Link
                href="/equipment/crane-services-near-me"
                className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-slate-200 hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-semibold transition-all"
              >
                Crane Services Near Me
              </Link>
              <Link
                href="/equipment/hydra-crane-near-me"
                className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-slate-200 hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-semibold transition-all"
              >
                Hydra Crane Near Me
              </Link>
              <Link
                href="/equipment/boom-lift-rental-near-me"
                className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-slate-200 hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-semibold transition-all"
              >
                Boom Lift Rental Near Me
              </Link>
              <Link
                href="/equipment/scissor-lift-near-me"
                className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-slate-200 hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-semibold transition-all"
              >
                Scissor Lift Near Me
              </Link>
              <Link
                href="/equipment/forklift-rental-near-me"
                className="px-3 py-1.5 rounded-lg bg-[#152744] hover:bg-[#EE6C25] text-slate-200 hover:text-white border border-white/10 hover:border-[#EE6C25] text-xs font-semibold transition-all"
              >
                Forklift Rental Near Me
              </Link>
            </div>
          </div>

          {/* Depot Location & Verified Google Map */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#0F1D33] border border-white/10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EE6C25]/15 text-[#F48A4E] text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                OFFICIAL OPERATIONS DEPOT & WORKSHOP
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Visakhapatnam Operations Headquarters
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Operating directly out of <strong className="text-white">Door No: 4-228, B.C. Colony, Vepagunta, Visakhapatnam (PIN 530047)</strong>, our depot houses heavy mobile cranes, knuckle boom lifts, straight telescopic manlifts, trailers, and a full engineering maintenance workshop.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-[#152744] border border-white/10">
                  <span className="text-[11px] font-bold text-[#F48A4E] uppercase tracking-wider block">
                    Strategic Access
                  </span>
                  <p className="text-xs text-slate-200 mt-0.5">
                    Direct NH-16 highway connectivity across Visakhapatnam & AP
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#152744] border border-white/10">
                  <span className="text-[11px] font-bold text-[#F48A4E] uppercase tracking-wider block">
                    Response Speed
                  </span>
                  <p className="text-xs text-slate-200 mt-0.5">
                    Under 1 to 2 hours within Visakhapatnam municipal limits
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={siteConfig.contact.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs font-bold px-5 py-2.5 rounded-lg inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                </a>
                <a
                  href={`tel:${siteConfig.contact.primaryPhone}`}
                  className="btn-secondary text-xs font-bold px-5 py-2.5 rounded-lg inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#EE6C25]" />
                  <span>Call Helpline</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 shadow-inner">
              <iframe
                src={siteConfig.contact.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sadhana RR Enterprises Visakhapatnam Location"
                className="w-full h-full filter contrast-105"
              />
            </div>
          </div>
        </section>

        {/* Certified Equipment Available in Vizag */}
        <section className="py-16 bg-[#0F1D33] border-y border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Equipment Fleet Available for Hire in Visakhapatnam
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-slate-300">
                Supplying the best boomlift services in Vizag and heavy cranes with verified load charts and certified operators.
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
                      <span>Specs & Load Chart</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <a
                      href={`tel:${siteConfig.contact.primaryPhone}`}
                      className="text-xs text-slate-300 hover:text-white inline-flex items-center gap-1 transition-colors"
                    >
                      <Phone className="w-3 h-3 text-[#EE6C25]" />
                      <span>Book</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Frequently Asked Questions */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="LOCAL FAQ & HIRING ADVICE"
            title="Visakhapatnam Crane & Boom Lift Rental FAQs"
            subtitle="Quick answers regarding local dispatch, mobilization timelines, and pricing in Vizag."
          />

          <div className="space-y-4">
            {vizagFaqs.map((faq) => (
              <div
                key={faq.q}
                className="p-6 rounded-xl bg-[#0F1D33] border border-white/10 space-y-2.5 shadow-md"
              >
                <h3 className="text-base font-bold text-white tracking-tight flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#EE6C25] shrink-0 mt-1" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-6.5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Immediate Local Action Banner */}
        <section className="py-16 bg-[#0F1D33] border-t border-white/10 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              Need the Best Crane or Boomlift Services in Vizag Today?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              Contact our 24/7 Visakhapatnam dispatch desk directly for immediate load charts, rate sheets, and rapid site mobilization.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/#quote"
                className="btn-primary text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-3.5 rounded-xl"
              >
                <span>Request Equipment Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={siteConfig.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Us Direct</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
