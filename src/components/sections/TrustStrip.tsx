"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { Wrench, Clock, Users, ShieldCheck } from "lucide-react";

export function TrustStrip() {
  const trustItems = [
    {
      icon: ShieldCheck,
      title: "100% Certified Fleet",
      description: "Third-party load test certifications, safety checks & preventive maintenance",
    },
    {
      icon: Clock,
      title: "Pan-India Rapid Dispatch",
      description: "Nationwide machinery mobilization to infrastructure & industrial sites 24/7",
    },
    {
      icon: Users,
      title: "Certified Riggers & Operators",
      description: "Experienced heavy crane drivers, licensed operators, and lifting specialists",
    },
    {
      icon: Wrench,
      title: "Zero-Downtime Guarantee",
      description: "24/7 technical field maintenance backup & rapid unit replacement support",
    },
  ];

  return (
    <section className="relative z-10 py-10 lg:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#0F1D33]/90 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`flex items-start gap-4 ${
                  index > 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#EE6C25]/15 border border-[#EE6C25]/35 flex items-center justify-center shrink-0 text-[#EE6C25] shadow-md">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
