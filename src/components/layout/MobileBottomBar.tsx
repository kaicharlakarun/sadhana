"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Phone, FileText } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function MobileBottomBar() {
  return (
    <div className="fixed bottom-2.5 left-3 right-3 z-40 bg-[#070E1A]/95 backdrop-blur-2xl border border-white/15 p-1.5 sm:hidden rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.85)] ring-1 ring-white/10">
      <div className="grid grid-cols-3 gap-1.5">
        <a
          href={`tel:${siteConfig.contact.primaryPhone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-white/[0.04] border border-white/10 text-slate-200 active:scale-95 transition-all shadow-sm"
        >
          <Phone className="w-4 h-4 text-[#EE6C25] mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight">Call Dispatch</span>
        </a>

        <a
          href={siteConfig.socialLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600/90 text-white font-bold active:scale-95 transition-all shadow-md shadow-emerald-600/30 border border-emerald-400/40"
        >
          <WhatsAppIcon className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight">WhatsApp</span>
        </a>

        <Link
          href="/#quote"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-[#F97316] to-[#EE6C25] text-white font-black active:scale-95 transition-all shadow-md shadow-[#EE6C25]/40 border border-[#F48A4E]"
        >
          <FileText className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] font-black tracking-tight uppercase">Get Quote</span>
        </Link>
      </div>
    </div>
  );
}
