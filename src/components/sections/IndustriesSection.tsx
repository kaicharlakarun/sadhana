import React from "react";
import Image from "next/image";
import Link from "next/link";
import { industryApplications } from "@/data/industries";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function IndustriesSection() {
  return (
    <section id="industries" className="py-20 lg:py-28 bg-[#0A1322] relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="SECTORS WE EMPOWER"
          title="Industries & Project Applications"
          subtitle="From major highway corridors and steel plant maintenance to high-rise building foundations, our equipment delivers performance across diverse sectors in Coastal AP."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {industryApplications.map((industry, index) => (
            <div
              key={industry.id}
              className={`industrial-card rounded-xl overflow-hidden flex flex-col group ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              {/* Card Image */}
              <div className="relative aspect-[16/9] lg:aspect-[16/8] overflow-hidden bg-[#12223B]">
                <Image
                  src={industry.imageUrl}
                  alt={industry.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1D33] via-transparent to-transparent opacity-90" />

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    {industry.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                  {industry.description}
                </p>

                {/* Recommended Machinery */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-[#F48A4E] uppercase tracking-wider block">
                    Recommended Machinery:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {industry.suitableEquipment.map((equip) => (
                      <span
                        key={equip}
                        className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs font-medium text-slate-200"
                      >
                        {equip}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Sector Benefits */}
                <ul className="space-y-1.5 pt-2 border-t border-white/5">
                  {industry.keyBenefits.map((ben) => (
                    <li key={ben} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#EE6C25] shrink-0 mt-0.5" />
                      <span>{ben}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Action Link */}
        <div className="mt-12 text-center">
          <Link
            href="/#quote"
            className="btn-primary text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-3.5"
          >
            <span>Consult Us For Your Project Requirements</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
