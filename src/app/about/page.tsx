import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  ShieldCheck,
  CheckCircle2,
  Users,
  Clock,
  ArrowRight,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Sadhana RR Enterprises | Construction Equipment Rental",
  description:
    "Learn about Sadhana RR Enterprises, our construction equipment rental fleet, leadership under Mr. K. Vijay Raj Kumar, safety protocols, and operations in Visakhapatnam. Lifting Power, Moving Progress.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 bg-[#0A1322]">
      {/* Hero Banner */}
      <section className="relative py-16 lg:py-24 overflow-hidden border-b border-white/10 bg-[#070E1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EE6C25]/15 border border-[#EE6C25]/40 text-[#F48A4E] text-xs font-bold tracking-wider uppercase mb-4">
              ABOUT OUR COMPANY
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-6">
              Engineering Reliability in <br />
              <span className="text-gradient-orange">Construction Equipment Rentals</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Sadhana RR Enterprises is an established construction machinery rental enterprise based in Visakhapatnam, Andhra Pradesh. Lifting Power, Moving Progress — empowering contractors, builders, and industrial developers to complete projects safely on schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Main Profile Story */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#101E35]">
              <Image
                src="/images/about-depot-yard.jpg"
                alt="Sadhana RR Enterprises construction machinery fleet in Visakhapatnam"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover filter brightness-95"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Our Vision & Practical Philosophy
            </h2>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              In heavy construction and industrial infrastructure, project profitability hinges on machinery uptime. When an excavator, crane, or mixer breaks down, work stops and overheads mount.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              At <strong className="text-white font-semibold">Sadhana RR Enterprises</strong>, we eliminate that risk by combining thoroughly safety-inspected machines, experienced operators, and on-site mechanical backup. We act as a reliable machinery extension of your site engineering team.
            </p>

            <div className="p-5 rounded-xl bg-[#12223B] border border-white/10 space-y-3">
              <h3 className="text-sm font-bold text-[#F48A4E] uppercase tracking-wider">
                Leadership & Operations
              </h3>
              <p className="text-xs sm:text-sm text-slate-200">
                Led by <strong className="text-white font-semibold">{siteConfig.leadership.name}</strong> ({siteConfig.leadership.title}), our operations team brings focused expertise in machine matching, site logistics, and prompt customer coordination across Visakhapatnam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Commitments */}
      <section className="py-16 bg-[#070E1A] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="OUR OPERATIONAL STANDARDS"
            title="The 3 Pillars of Our Service"
            subtitle="How we ensure seamless equipment hire for contractors across Andhra Pradesh."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="industrial-card p-8 rounded-xl space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#EE6C25]/15 border border-[#EE6C25]/30 flex items-center justify-center text-[#EE6C25]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">1. Machinery Health</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Every unit in our fleet undergoes preventative servicing, oil filter replacement, and hydraulic integrity checks prior to site mobilization.
              </p>
            </div>

            <div className="industrial-card p-8 rounded-xl space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#EE6C25]/15 border border-[#EE6C25]/30 flex items-center justify-center text-[#EE6C25]">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">2. Rapid Dispatch</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Our operational hub in Visakhapatnam provides immediate connectivity to NH-16, ensuring fast mobilization to any site across Vizag and Andhra Pradesh.
              </p>
            </div>

            <div className="industrial-card p-8 rounded-xl space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#EE6C25]/15 border border-[#EE6C25]/30 flex items-center justify-center text-[#EE6C25]">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">3. Skilled Workforce</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We supply certified, safety-trained drivers and operators who understand complex site constraints and safety protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-10 sm:p-14 rounded-2xl bg-gradient-to-r from-[#0F1D33] to-[#162846] border border-[#EE6C25]/40 shadow-2xl max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Ready to Partner With Sadhana RR Enterprises?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Contact us today for machinery availability, project rates, and site inspection support in Visakhapatnam.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link href="/#quote" className="btn-primary px-8 py-3.5 text-sm font-bold uppercase tracking-wider">
              <span>Request Quotation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${siteConfig.contact.primaryPhone}`}
              className="btn-secondary px-6 py-3.5 text-sm font-semibold"
            >
              <Phone className="w-4 h-4 text-[#EE6C25]" />
              <span>Call +91 93948 58999</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
