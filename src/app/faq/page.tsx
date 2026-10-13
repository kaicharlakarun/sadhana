import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { siteFaqs } from "@/data/faqs";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  HelpCircle,
  Phone,
  ArrowRight,
  ShieldCheck,
  FileText,
  Clock,
  Truck,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | Crane & Construction Equipment Rental",
  description:
    "Comprehensive guide and answers about renting heavy mobile cranes, crawler cranes, Farana hydras, JCBs, excavators, and boom lifts from Sadhana RR Enterprises across India.",
  alternates: {
    canonical: `${siteConfig.url}/faq`,
  },
  keywords: [
    "Crane Rental FAQ",
    "Construction Equipment Rental Questions",
    "Heavy Machinery Rental Process India",
    "JCB Rental Terms",
    "Crane Operator Licences India",
    "Mobilization Rates Crane Hire",
    "Sadhana RR Enterprises FAQ",
  ],
};

export default function FAQPage() {
  const faqSchema = generateFAQSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "FAQ", url: "/faq" },
  ]);

  const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    equipment: Truck,
    coverage: Clock,
    rental: ShieldCheck,
    pricing: FileText,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="pt-28 pb-20 bg-[#0A1322]">
        {/* Hero Header */}
        <section className="relative py-16 lg:py-24 bg-[#0F1D33] border-b border-white/10 overflow-hidden">
          <div className="absolute inset-0 industrial-grid opacity-20 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EE6C25]/15 border border-[#EE6C25]/40 text-[#F48A4E] text-xs font-bold tracking-wider uppercase mb-4 shadow-lg">
                <HelpCircle className="w-3.5 h-3.5 text-[#EE6C25]" />
                KNOWLEDGE BASE & RENTAL GUIDANCE
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
                Frequently Asked <span className="text-gradient-orange">Questions</span>
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Everything you need to know regarding crane capacities, machinery availability, operator certifications, wet/dry diesel contracts, and nationwide mobilization across India.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Grid Cards */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="CLEAR, TRANSPARENT ANSWERS"
            title="Crane & Machinery Rental FAQs"
            subtitle="Explore detailed answers to common inquiries from civil contractors, project engineers, and plant managers."
          />

          <div className="space-y-6">
            {siteFaqs.map((faq, idx) => {
              const IconComponent =
                (faq.category && categoryIcons[faq.category]) || HelpCircle;

              return (
                <div
                  key={idx}
                  className="industrial-card p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4 hover:border-[#EE6C25]/50 transition-all duration-300 shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#EE6C25]/15 border border-[#EE6C25]/30 flex items-center justify-center text-[#EE6C25] shrink-0 mt-1 shadow-md">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div className="space-y-3 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                          {faq.question}
                        </h2>
                        {faq.category && (
                          <span className="text-[10px] uppercase font-mono font-extrabold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#F48A4E]">
                            {faq.category}
                          </span>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Need Immediate Support Banner */}
          <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#0F1D33] to-[#152744] border border-[#EE6C25]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Have a Unique or Project-Specific Requirement?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Our heavy equipment dispatch team is available 24/7 to provide technical advice, load chart consultations, and customized commercial quotations.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href={siteConfig.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-xs sm:text-sm font-bold px-6 py-3 rounded-xl"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>

              <Link
                href="/#quote"
                className="btn-primary text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3 rounded-xl"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
