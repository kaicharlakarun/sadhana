import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const equipmentLinks = [
    { name: "Heavy Telescopic Cranes (50T – 300T)", href: "/equipment/crane-rental-services" },
    { name: "Lattice Crawler Cranes (50T – 500T)", href: "/equipment/crawler-crane-rental" },
    { name: "Articulated & Telescopic Boom Lifts", href: "/equipment/boom-lift-rental-services" },
    { name: "Truck-Mounted Boom Lifts & Sky Lifts", href: "/equipment/truck-mounted-boom-lift-rental" },
    { name: "Pick & Carry Hydra / Farana Cranes", href: "/equipment/pick-and-carry-mobile-crane-rental" },
    { name: "Electric & Diesel Scissor Lifts", href: "/equipment/scissor-lift-rental-services" },
    { name: "Low Bed & Multi-Axle Heavy Trailers", href: "/equipment/heavy-duty-trailer-rental" },
    { name: "Industrial Forklifts (3T – 25T)", href: "/equipment/forklift-rental-services" },
  ];

  const quickLinks = [
    { name: "About Sadhana RR Enterprises", href: "/about" },
    { name: "Our Machinery Fleet", href: "/equipment" },
    { name: "Why Choose Our Service", href: "/#why-us" },
    { name: "Pan-India Coverage Guide", href: "/service-areas" },
    { name: "Frequently Asked Questions (FAQ)", href: "/faq" },
    { name: "Contact & Equipment Enquiry", href: "/contact" },
  ];

  const localAreas = [
    "Pan-India Project Mobilization",
    "Visakhapatnam & Andhra Pradesh",
    "Hyderabad & Telangana Corridors",
    "Odisha (Bhubaneswar, Paradeep)",
    "Tamil Nadu & Chennai Belt",
    "Karnataka (Bengaluru Tech-Parks)",
    "National Highway (NHAI) Projects",
    "Ports, Refineries & Steel Plants",
  ];

  return (
    <footer className="bg-[#060D17] border-t border-white/10 text-slate-300 pt-16 pb-24 sm:pb-16 relative overflow-hidden">
      {/* Background industrial grid accent */}
      <div className="absolute inset-0 industrial-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Pre-Footer Callout */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#0F1D33] to-[#152744] border border-[#EE6C25]/30 mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[#EE6C25]/10 blur-3xl pointer-events-none" />
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EE6C25]/15 text-[#F48A4E] text-xs font-bold tracking-wider uppercase mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                Lifting Power • Moving Progress
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Need Cranes or Heavy Machinery on Site Anywhere in India?
              </h3>
              <p className="mt-2 text-slate-300 text-sm sm:text-base">
                Contact our nationwide dispatch team for instant crane availability, certified riggers, tested machinery, and rapid project deployment.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/#quote"
                className="btn-primary uppercase text-xs sm:text-sm font-bold tracking-wider px-6 py-3.5"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={siteConfig.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-xs sm:text-sm font-bold px-6 py-3.5"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Company Profile with Real Logo Image */}
          <div className="space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="relative w-12 h-12 shrink-0 rounded-full bg-white/10 p-0.5 border border-[#EE6C25]/60 shadow-lg">
                <Image
                  src="/images/logo.png"
                  alt="Sadhana RR Enterprises Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-white text-base tracking-tight leading-tight">
                  SADHANA RR
                </span>
                <span className="text-[10px] font-bold tracking-widest text-[#EE6C25] uppercase leading-tight">
                  ENTERPRISES
                </span>
                <span className="text-[9px] text-slate-400 tracking-wider uppercase font-medium leading-none mt-0.5">
                  Lifting Power • Moving Progress
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              All-India crane rental and heavy construction machinery hire service. Deploying certified telescopic mobile cranes, crawler cranes, pick & carry hydras, excavators, and aerial boom lifts with nationwide mobilization and zero downtime.
            </p>

            <div className="pt-2">
              <span className="text-xs font-bold text-slate-200 uppercase tracking-wider block mb-3">
                Follow Us
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#EE6C25] hover:text-white border border-white/10 flex items-center justify-center text-slate-300 transition-all"
                  aria-label="Facebook Profile"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href={siteConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#EE6C25] hover:text-white border border-white/10 flex items-center justify-center text-slate-300 transition-all"
                  aria-label="Instagram Profile"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href={siteConfig.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-emerald-500 hover:text-white border border-white/10 flex items-center justify-center text-slate-300 transition-all"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Equipment Fleet */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-3 rounded-full bg-[#EE6C25]" />
              Equipment For Rent
            </h4>
            <ul className="space-y-2.5 text-sm">
              {equipmentLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-[#F48A4E] transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="w-3 h-3 text-[#EE6C25]" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links & Coverage */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-3 rounded-full bg-[#EE6C25]" />
              Key Service Hubs
            </h4>
            <ul className="grid grid-cols-1 gap-2 text-xs text-slate-300 mb-6">
              {localAreas.map((area) => (
                <li key={area} className="flex items-center gap-2">
                  <MapPin className="w-3 h-3 text-[#EE6C25] shrink-0" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/service-areas"
              className="text-xs text-[#F48A4E] hover:text-[#EE6C25] font-semibold inline-flex items-center gap-1"
            >
              <span>View full Pan-India coverage map</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Column 4: Contact & Office Info */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-3 rounded-full bg-[#EE6C25]" />
              Contact & Office
            </h4>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#EE6C25] shrink-0 mt-1" />
                <span className="text-slate-300 text-xs leading-relaxed">
                  {siteConfig.contact.address.full}
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#EE6C25] shrink-0 mt-0.5" />
                <div className="flex flex-col text-xs text-slate-200">
                  <a
                    href={`tel:${siteConfig.contact.primaryPhone}`}
                    className="hover:text-[#F48A4E] transition-colors font-medium"
                  >
                    {siteConfig.contact.primaryPhoneFormatted}
                  </a>
                  <a
                    href={`tel:${siteConfig.contact.secondaryPhone}`}
                    className="hover:text-[#F48A4E] transition-colors font-medium mt-0.5"
                  >
                    {siteConfig.contact.secondaryPhoneFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#EE6C25] shrink-0 mt-0.5" />
                <div className="flex flex-col text-xs text-slate-200">
                  <a
                    href={`mailto:${siteConfig.contact.primaryEmail}`}
                    className="hover:text-[#F48A4E] transition-colors"
                  >
                    {siteConfig.contact.primaryEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#EE6C25] shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300 leading-relaxed">
                  {siteConfig.businessHours}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {currentYear} {siteConfig.legalName}. All rights reserved. Registered in Visakhapatnam, Andhra Pradesh.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="/equipment" className="hover:text-white transition-colors">
              Fleet
            </Link>
            <Link href="/service-areas" className="hover:text-white transition-colors">
              Pan-India Coverage
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
