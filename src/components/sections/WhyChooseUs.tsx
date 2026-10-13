import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  ShieldCheck,
  Clock,
  Wrench,
  Users,
  FileCheck,
  Headphones,
  CheckCircle,
} from "lucide-react";

export function WhyChooseUs() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Verified Machine Health",
      description:
        "Every machine undergoes mandatory pre-dispatch hydraulic pressure, brake, and engine checks to eliminate job-site breakdown risks.",
    },
    {
      icon: Users,
      title: "Trained Machine Operators",
      description:
        "Our skilled operators have extensive experience across coastal terrain, deep trenches, rock-breaking, and heavy industrial lifts.",
    },
    {
      icon: Clock,
      title: "Rapid Site Mobilization",
      description:
        "Strategically located in Vepagunta, enabling fast dispatch to Gajuwaka, Madhurawada, Kurmannapalem, and Steel Plant corridor within hours.",
    },
    {
      icon: FileCheck,
      title: "Flexible Rental Agreements",
      description:
        "Transparent billing on standard 8/12-hour shifts, weekly packages, or long-term monthly project deployments with dry or wet hire terms.",
    },
    {
      icon: Wrench,
      title: "Active Mechanical Backup",
      description:
        "Dedicated mobile service mechanics on standby with critical spares, plus quick unit replacement support if a machine requires extensive maintenance.",
    },
    {
      icon: Headphones,
      title: "Direct Coordinator Support",
      description:
        "Single point of contact for fast quotations, dispatch tracking, operator coordination, and billing reconciliation without administrative friction.",
    },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#070E1A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="THE SADHANA RR ADVANTAGE"
          title="Why Leading Contractors Choose Us"
          subtitle="We combine robust industrial machinery with responsive local support, helping you maintain project timelines without costly delays."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="industrial-card p-8 rounded-xl relative overflow-hidden group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#EE6C25]/15 border border-[#EE6C25]/30 flex items-center justify-center text-[#EE6C25] mb-6 group-hover:bg-[#EE6C25] group-hover:text-white transition-all duration-300 shadow-md">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-[#F48A4E] transition-colors">
                  {pillar.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {pillar.description}
                </p>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-[#EE6C25]">
                  <CheckCircle className="w-4 h-4" />
                  <span>Guaranteed Standards</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
