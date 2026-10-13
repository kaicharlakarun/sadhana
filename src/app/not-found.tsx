import React from "react";
import Link from "next/link";
import { ArrowLeft, Phone, Home, ShieldAlert } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-[#0A1322]">
      <div className="max-w-lg w-full text-center space-y-6 industrial-card p-8 sm:p-12 rounded-2xl border border-white/10 shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-[#EE6C25]/15 border border-[#EE6C25]/40 flex items-center justify-center text-[#EE6C25] mx-auto shadow-md">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-4xl sm:text-5xl font-mono font-black text-[#EE6C25] tracking-wider">
            404
          </span>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            The page or equipment category you are looking for has been moved or does not exist.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="btn-primary w-full sm:w-auto text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <a
            href={`tel:${siteConfig.contact.primaryPhone}`}
            className="btn-secondary w-full sm:w-auto text-xs sm:text-sm font-semibold px-5 py-3"
          >
            <Phone className="w-4 h-4 text-[#EE6C25]" />
            <span>Call Helpline</span>
          </a>
        </div>
      </div>
    </div>
  );
}
