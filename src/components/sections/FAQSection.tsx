"use client";

import React, { useState } from "react";
import { siteFaqs } from "@/data/faqs";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ChevronDown, HelpCircle } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { siteConfig } from "@/config/site";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#070E1A] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          title="Equipment Rental & Service Details"
          subtitle="Everything you need to know about machine availability, rental agreements, operator provisions, and nationwide mobilization across India."
        />

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {siteFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="industrial-card rounded-xl overflow-hidden border border-white/10 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#EE6C25] shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#EE6C25] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#EE6C25]/20" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-white/5">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Prompt */}
        <div className="mt-12 p-6 rounded-xl bg-[#12223B] border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-base font-bold text-white">Have a specific machine requirement?</h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Speak directly with our equipment dispatch desk for immediate support.
            </p>
          </div>
          <a
            href={siteConfig.socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-xs sm:text-sm font-bold px-5 py-2.5 shrink-0"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
