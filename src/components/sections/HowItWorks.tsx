import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  FileSpreadsheet,
  CheckCircle,
  Truck,
  Wrench,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: FileSpreadsheet,
      title: "Tell Us What You Need",
      description:
        "Share your equipment requirement, project location anywhere in India, expected duration, and shift preference via quote form or WhatsApp.",
    },
    {
      step: "02",
      icon: CheckCircle,
      title: "Receive Fleet Recommendation",
      description:
        "Our team confirms live machine availability, specifies suitable attachments (rock breakers, buckets), and provides a competitive commercial quote.",
    },
    {
      step: "03",
      icon: Truck,
      title: "Fast Site Mobilization",
      description:
        "Upon confirmation, the inspected machine and certified operator are dispatched promptly via heavy transit trailers directly to your project site.",
    },
    {
      step: "04",
      icon: Wrench,
      title: "Continuous On-Site Support",
      description:
        "Execute your project with maximum productivity, backed by our routine maintenance team and responsive single-point coordination.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#070E1A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="SEAMLESS RENTAL WORKFLOW"
          title="How Our Equipment Rental Process Works"
          subtitle="From initial enquiry to on-site machine commissioning, our streamlined 4-step workflow ensures zero delays for your construction schedule."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="industrial-card p-6 rounded-xl relative flex flex-col justify-between group"
              >
                {/* Step Number with Industrial Highlight */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black text-[#EE6C25]/40 group-hover:text-[#EE6C25] transition-colors font-mono">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#EE6C25]/15 border border-[#EE6C25]/30 flex items-center justify-center text-[#EE6C25] group-hover:bg-[#EE6C25] group-hover:text-white transition-all shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white tracking-tight group-hover:text-[#F48A4E] transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  <span>Step {item.step} Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Link */}
        <div className="mt-12 text-center">
          <Link
            href="/#quote"
            className="btn-primary text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-3.5"
          >
            <span>Start Your Equipment Request Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
