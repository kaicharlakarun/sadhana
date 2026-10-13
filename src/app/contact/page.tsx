import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { ContactSection } from "@/components/sections/ContactSection";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact & Equipment Hire Enquiry | Sadhana RR Enterprises Visakhapatnam",
  description:
    "Contact Sadhana RR Enterprises for construction equipment rentals in Visakhapatnam. Phone: +91 93948 58999, WhatsApp, Email: hello@sadhanarr.com. Serving Visakhapatnam and Pan-India.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact & Equipment Enquiry", url: "/contact" },
  ]);

  return (
    <div className="pt-28 pb-10 bg-[#0A1322]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Hero Header */}
      <section className="py-12 lg:py-16 bg-[#0F1D33] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EE6C25]/15 border border-[#EE6C25]/40 text-[#F48A4E] text-xs font-bold tracking-wider uppercase mb-4">
              EQUIPMENT DISPATCH & SUPPORT
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Get in Touch with Our <br />
              <span className="text-gradient-orange">Fleet Coordination Team</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Have a question about machinery availability, shift pricing, or project requirements? Contact our Visakhapatnam dispatch desk directly.
            </p>
          </div>
        </div>
      </section>

      {/* Embedded Contact & Quotation Form */}
      <ContactSection />
    </div>
  );
}
