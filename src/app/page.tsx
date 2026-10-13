import React from "react";
import { Hero } from "@/components/hero/Hero";
import { ScrollingMarquee } from "@/components/ui/ScrollingMarquee";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { AboutSection } from "@/components/sections/AboutSection";
import { EquipmentShowcase } from "@/components/sections/EquipmentShowcase";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ServiceAreasSection } from "@/components/sections/ServiceAreasSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { generateFAQSchema } from "@/lib/seo";

export default function HomePage() {
  const faqSchema = generateFAQSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* 1. Full-Screen Cinematic Fleet Hero */}
      <Hero />

      {/* 2. Infinite Industrial Ticker Marquee */}
      <ScrollingMarquee direction="left" />

      {/* 3. Trust Metrics Strip */}
      <TrustStrip />

      {/* 4. About Company & Depot */}
      <AboutSection />

      {/* 5. Equipment Showcase Fleet Catalog */}
      <EquipmentShowcase />

      {/* 6. Why Choose Us / Strengths */}
      <WhyChooseUs />

      {/* 7. Clients & Infrastructure Partners Marquee */}
      <ClientsSection />

      {/* 10. How Rental Process Works */}
      <HowItWorks />

      {/* 11. Pan-India Service Areas Hub */}
      <ServiceAreasSection />

      {/* 12. Contact & Instant Quotation Generator */}
      <ContactSection />
    </>
  );
}
