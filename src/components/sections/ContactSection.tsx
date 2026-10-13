"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  User,
  Building2,
  Calendar,
  Wrench,
  MessageSquare,
  ChevronDown,
  Sparkles,
  Globe,
  ShieldCheck,
  Truck,
  Fuel,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

// Indian states and prominent industrial corridors
const indianStates = [
  {
    code: "AP",
    name: "Andhra Pradesh",
    hub: "Visakhapatnam / Kakinada / Sri City",
    placeholder: "e.g. Visakhapatnam (Gajuwaka / Parawada), Atchutapuram, Sri City, Kakinada, Vijayawada",
  },
  {
    code: "TG",
    name: "Telangana",
    hub: "Hyderabad / Pharma City / Warangal",
    placeholder: "e.g. Hyderabad, Genome Valley, Pashamylaram, Warangal, Ramagundam",
  },
  {
    code: "GJ",
    name: "Gujarat",
    hub: "Dahej / Hazira / Sanand / Mundra",
    placeholder: "e.g. Dahej PCPIR, Hazira Petrochemical SEZ, Sanand GIDC, Mundra Port, Vadodara",
  },
  {
    code: "MH",
    name: "Maharashtra",
    hub: "Pune / Mumbai / Nagpur / Chakan",
    placeholder: "e.g. Pune (Chakan / Talegaon), Taloja MIDC, JNPT Port, Nagpur, Aurangabad",
  },
  {
    code: "OD",
    name: "Odisha",
    hub: "Paradeep / Angul / Jharsuguda",
    placeholder: "e.g. Paradeep Port, Angul Industrial Area, Kalinganagar, Jharsuguda, Rourkela",
  },
  {
    code: "TN",
    name: "Tamil Nadu",
    hub: "Chennai / Sriperumbudur / Oragadam",
    placeholder: "e.g. Sriperumbudur SIPCOT, Oragadam Auto Belt, Ennore, Coimbatore, Tuticorin",
  },
  {
    code: "KA",
    name: "Karnataka",
    hub: "Bengaluru / Peenya / Mangalore / Bellary",
    placeholder: "e.g. Peenya, Electronic City, Mangalore SEZ, Bellary Jindal, Hubli",
  },
  {
    code: "CG",
    name: "Chhattisgarh",
    hub: "Bhilai / Raipur / Korba",
    placeholder: "e.g. Bhilai Steel Plant area, Raipur Urla Industrial Area, Korba Power Hub",
  },
  {
    code: "WB",
    name: "West Bengal",
    hub: "Kolkata / Haldia / Durgapur",
    placeholder: "e.g. Haldia Petrochemicals, Durgapur Steel Belt, Kharagpur, Howrah",
  },
  {
    code: "RJ",
    name: "Rajasthan",
    hub: "Jaipur / Bhiwadi / Jodhpur / Kota",
    placeholder: "e.g. Bhiwadi RIICO, Neemrana Japanese Zone, Kota, Jodhpur, Udaipur",
  },
  {
    code: "UP",
    name: "Uttar Pradesh",
    hub: "Noida / Greater Noida / Kanpur",
    placeholder: "e.g. Noida Sector 62/63, Greater Noida SEZ, Kanpur Industrial Area, Lucknow",
  },
  {
    code: "DL",
    name: "Delhi NCR",
    hub: "Delhi / Gurugram / Manesar / Faridabad",
    placeholder: "e.g. Manesar IMT, Gurugram Cyber City, Faridabad, Okhla Industrial Area",
  },
  {
    code: "HR",
    name: "Haryana",
    hub: "Gurugram / Panipat / Sonipat / Bawal",
    placeholder: "e.g. Panipat Refinery, IMT Manesar, Bawal GIDC, Sonipat Kundli",
  },
  {
    code: "MP",
    name: "Madhya Pradesh",
    hub: "Indore / Pithampur / Bhopal / Singrauli",
    placeholder: "e.g. Pithampur SEZ, Mandideep, Singrauli Thermal Corridor, Gwalior",
  },
  {
    code: "JH",
    name: "Jharkhand",
    hub: "Jamshedpur / Bokaro / Ranchi",
    placeholder: "e.g. Jamshedpur Adityapur, Bokaro Steel City, Dhanbad, Ranchi",
  },
  {
    code: "KL",
    name: "Kerala",
    hub: "Kochi / Vallarpadam / Trivandrum",
    placeholder: "e.g. Kochi Port, Vallarpadam ICTT, Ambalamugal Refinery, Palakkad",
  },
  {
    code: "OTHER",
    name: "Other State / Union Territory (Pan-India)",
    hub: "Interstate Transit Mobilization",
    placeholder: "e.g. Specify your project site name, state, and nearest highway or port",
  },
];

export function ContactSection() {
  // Operational scope toggle: 'pan-india' or 'vizag'
  const [scope, setScope] = useState<"pan-india" | "vizag">("pan-india");
  const [selectedState, setSelectedState] = useState<string>("Andhra Pradesh");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    location: "",
    equipment: "Heavy Telescopic Mobile Cranes (50T – 300T)",
    duration: "Daily Shift (8 or 12 Hours)",
    hireTerms: "Wet Hire (Fuel & Certified Operator Included)",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submissionType, setSubmissionType] = useState<"whatsapp" | "email">("whatsapp");

  // Get active state metadata for placeholder
  const activeStateMeta =
    indianStates.find((s) => s.name === selectedState) || indianStates[0];

  const handleScopeChange = (newScope: "pan-india" | "vizag") => {
    setScope(newScope);
    if (newScope === "vizag") {
      setSelectedState("Andhra Pradesh");
      if (!formData.location || formData.location.length < 5) {
        setFormData((prev) => ({
          ...prev,
          location: "Visakhapatnam (Gajuwaka / Parawada / Autonagar)",
        }));
      }
    } else {
      if (formData.location === "Visakhapatnam (Gajuwaka / Parawada / Autonagar)") {
        setFormData((prev) => ({ ...prev, location: "" }));
      }
    }
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newState = e.target.value;
    setSelectedState(newState);
    if (newState === "Andhra Pradesh") {
      // Keep scope aligned
    } else if (scope === "vizag") {
      setScope("pan-india");
    }
  };

  const handleSubmit = (e: React.FormEvent, type: "whatsapp" | "email" = "whatsapp") => {
    e.preventDefault();
    setSubmissionType(type);

    const formattedScopeLabel =
      scope === "vizag"
        ? "Visakhapatnam (Vizag) Local Rapid Dispatch (1–2 Hours)"
        : `Pan-India Industrial Mobilization (${selectedState})`;

    const text =
      `*New Equipment Rental Quotation Request*\n` +
      `*Sadhana RR Enterprises - Fleet Coordination*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
      `👤 *CLIENT DETAILS*\n` +
      `• *Name:* ${formData.name}\n` +
      `• *Phone:* ${formData.phone}\n` +
      (formData.email ? `• *Email:* ${formData.email}\n` : "") +
      (formData.company ? `• *Company / Firm:* ${formData.company}\n` : "") +
      `\n📍 *PROJECT SITE LOCATION*\n` +
      `• *Deployment Scope:* ${formattedScopeLabel}\n` +
      `• *State / Territory:* ${selectedState}\n` +
      `• *Project Site / Zone:* ${formData.location || "Not specified"}\n` +
      `\n🚜 *EQUIPMENT SPECIFICATIONS*\n` +
      `• *Equipment Needed:* ${formData.equipment}\n` +
      `• *Rental Duration:* ${formData.duration}\n` +
      `• *Operating Terms:* ${formData.hireTerms}\n` +
      (formData.message ? `\n📝 *SCOPE & SPECIAL REQUIREMENTS*\n${formData.message}\n` : "") +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `_Submitted via sadhanarr.com requisition portal_`;

    if (type === "whatsapp") {
      const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
      window.open(whatsappUrl, "_blank");
    } else {
      // Email direct mailto fallback
      const mailtoUrl = `mailto:${siteConfig.contact.primaryEmail}?subject=${encodeURIComponent(
        `Equipment Quotation Request: ${formData.equipment} - ${selectedState}`
      )}&body=${encodeURIComponent(text)}`;
      window.open(mailtoUrl, "_blank");
    }

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#070E1A] relative overflow-hidden scroll-mt-20">
      {/* Top Animated Laser Border Beam */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent">
        <div className="w-48 h-[2px] bg-gradient-to-r from-transparent via-[#EE6C25] to-transparent animate-laser shadow-[0_0_15px_#EE6C25]" />
      </div>

      {/* Bottom Subtle Glowing Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#EE6C25]/30 to-transparent" />

      {/* Dynamic Background Ambient Light Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#EE6C25]/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/3 translate-y-1/3 w-[500px] h-[300px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 industrial-grid opacity-15 pointer-events-none" />
      <div id="quote" className="absolute -top-24 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="PAN-INDIA & VIZAG MACHINERY HIRE"
          title="Request Equipment Availability & Pricing"
          subtitle="Submit your project requirements for mobile cranes, crawler cranes, boom lifts, sky lifts, hydras, scissor lifts, trailers, or forklifts. Fast response across all 28 Indian states."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Direct Helpline & Pan-India Mobilization Base */}
          <div className="lg:col-span-5 flex flex-col group">
            <div className="relative flex-1 p-[1.5px] rounded-3xl bg-gradient-to-b from-[#EE6C25]/50 via-white/15 to-[#EE6C25]/20 shadow-2xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(238,108,37,0.25)] hover:from-[#EE6C25] hover:via-white/30">
              <div className="relative h-full rounded-[22px] bg-gradient-to-b from-[#0F1D33] via-[#0D182A] to-[#08101C] p-6 sm:p-8 flex flex-col justify-between overflow-hidden space-y-6">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#EE6C25] to-transparent opacity-80" />

                <div>
                  {/* Helpline Header */}
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EE6C25]/15 border border-[#EE6C25]/40 text-[#EE6C25] text-xs font-bold uppercase tracking-widest mb-3 backdrop-blur-md shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-[#EE6C25] animate-ping" />
                      24/7 Fleet Coordination Desk
                    </div>
                    <h3 className="text-2xl font-black text-white tracking-tight">
                      Direct Dispatch Helpline
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
                      Connect directly with our fleet dispatch desk for immediate site mobilization, load chart advice, and corporate pricing.
                    </p>
                  </div>

                  {/* Contact List Items */}
                  <div className="space-y-3">
                    {/* Phone Numbers */}
                    <div className="group/item p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#EE6C25]/40 hover:bg-[#EE6C25]/5 transition-all duration-300 flex items-start gap-3.5 hover:translate-x-1">
                      <div className="w-10 h-10 rounded-lg bg-[#EE6C25]/15 border border-[#EE6C25]/30 group-hover/item:border-[#EE6C25] group-hover/item:bg-[#EE6C25] flex items-center justify-center text-[#EE6C25] group-hover/item:text-white transition-all shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                          Phone Helpline (24/7 Dispatch)
                        </span>
                        <a
                          href={`tel:${siteConfig.contact.primaryPhone}`}
                          className="text-sm font-bold text-white group-hover/item:text-[#EE6C25] transition-colors block mt-0.5"
                        >
                          {siteConfig.contact.primaryPhoneFormatted}
                        </a>
                        <a
                          href={`tel:${siteConfig.contact.secondaryPhone}`}
                          className="text-xs text-slate-300 group-hover/item:text-[#EE6C25] transition-colors block mt-0.5"
                        >
                          {siteConfig.contact.secondaryPhoneFormatted}
                        </a>
                      </div>
                    </div>

                    {/* WhatsApp Dispatch */}
                    <div className="group/item p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 hover:border-emerald-500/50 hover:bg-emerald-950/40 transition-all duration-300 flex items-start gap-3.5 hover:translate-x-1 shadow-sm">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/15 border border-emerald-500/30 group-hover/item:border-emerald-500 group-hover/item:bg-emerald-500 flex items-center justify-center text-emerald-400 group-hover/item:text-white transition-all shrink-0">
                        <WhatsAppIcon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                            WhatsApp Fleet Dispatch
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                            Instant Active
                          </span>
                        </div>
                        <a
                          href={siteConfig.socialLinks.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-bold text-white group-hover/item:text-emerald-400 transition-colors block mt-0.5"
                        >
                          +91 93948 58999 (Click to Chat)
                        </a>
                      </div>
                    </div>

                    {/* Official Emails */}
                    <div className="group/item p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#EE6C25]/40 hover:bg-[#EE6C25]/5 transition-all duration-300 flex items-start gap-3.5 hover:translate-x-1">
                      <div className="w-10 h-10 rounded-lg bg-[#EE6C25]/15 border border-[#EE6C25]/30 group-hover/item:border-[#EE6C25] group-hover/item:bg-[#EE6C25] flex items-center justify-center text-[#EE6C25] group-hover/item:text-white transition-all shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                          Official Corporate Email
                        </span>
                        <a
                          href={`mailto:${siteConfig.contact.primaryEmail}`}
                          className="text-xs text-slate-200 group-hover/item:text-[#EE6C25] transition-colors block mt-0.5 truncate font-medium"
                        >
                          {siteConfig.contact.primaryEmail}
                        </a>
                        <a
                          href={`mailto:${siteConfig.contact.secondaryEmail}`}
                          className="text-xs text-slate-400 group-hover/item:text-[#EE6C25] transition-colors block mt-0.5 truncate"
                        >
                          {siteConfig.contact.secondaryEmail}
                        </a>
                      </div>
                    </div>

                    {/* Operational Depot & Headquarters */}
                    <div className="group/item p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#EE6C25]/40 hover:bg-[#EE6C25]/5 transition-all duration-300 flex items-start gap-3.5 hover:translate-x-1">
                      <div className="w-10 h-10 rounded-lg bg-[#EE6C25]/15 border border-[#EE6C25]/30 group-hover/item:border-[#EE6C25] group-hover/item:bg-[#EE6C25] flex items-center justify-center text-[#EE6C25] group-hover/item:text-white transition-all shrink-0">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                          Headquarters & Operations Depot
                        </span>
                        <p className="text-xs text-slate-200 leading-relaxed font-normal mt-0.5">
                          {siteConfig.contact.address.full}
                        </p>
                        <span className="inline-block mt-1 text-[10px] text-[#F48A4E] font-medium">
                          Direct NH-16 Access • Low Bed Trailer Transit to All States
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pan-India Trust Assurance Pills */}
                <div className="pt-4 border-t border-white/10 space-y-2.5">
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                    FLEET ASSURANCES & COMPLIANCE:
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.03] border border-white/5 text-slate-300">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>TPI Load Certified</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.03] border border-white/5 text-slate-300">
                      <Truck className="w-3.5 h-3.5 text-[#EE6C25] shrink-0" />
                      <span>Pan-India Transit</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.03] border border-white/5 text-slate-300">
                      <User className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>Certified Operators</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.03] border border-white/5 text-slate-300">
                      <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>24/7 Site Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Enterprise Quotation Requisition Form */}
          <div className="lg:col-span-7 flex flex-col group">
            <div className="relative flex-1 p-[1.5px] rounded-3xl bg-gradient-to-b from-[#EE6C25]/60 via-white/20 to-[#EE6C25]/30 shadow-2xl transition-all duration-500 hover:shadow-[0_0_50px_rgba(238,108,37,0.3)] hover:from-[#EE6C25] hover:via-white/35">
              <div className="relative h-full rounded-[22px] bg-gradient-to-b from-[#0F1D33] via-[#0D182A] to-[#08101C] p-6 sm:p-8 lg:p-9 flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#EE6C25] to-transparent opacity-80" />

                <div>
                  {/* Form Header with Scope Segmented Switch */}
                  <div className="mb-6 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EE6C25]/15 border border-[#EE6C25]/40 text-[#EE6C25] text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-sm">
                        <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "6s" }} />
                        Official Requisition Form
                      </div>
                      <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Live Dispatch Routing Active
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-black text-white tracking-tight">
                        Machinery Hire Requisition Form
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-1">
                        Select your project deployment scope and machinery specifications. Instant quote dispatched to our senior fleet coordinators.
                      </p>
                    </div>

                    {/* Operational Scope Segmented Toggle */}
                    <div className="p-1 rounded-xl bg-[#070E1A] border border-white/10 grid grid-cols-2 gap-1 shadow-inner">
                      <button
                        type="button"
                        onClick={() => handleScopeChange("pan-india")}
                        className={`py-2.5 px-3 rounded-lg text-xs font-bold tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                          scope === "pan-india"
                            ? "bg-gradient-to-r from-[#EE6C25] to-[#F97316] text-white shadow-md shadow-[#EE6C25]/30 border border-white/20"
                            : "text-slate-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <Globe className="w-3.5 h-3.5" />
                        <span>🇮🇳 Pan-India Industrial (All States)</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleScopeChange("vizag")}
                        className={`py-2.5 px-3 rounded-lg text-xs font-bold tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                          scope === "vizag"
                            ? "bg-gradient-to-r from-[#EE6C25] to-[#F97316] text-white shadow-md shadow-[#EE6C25]/30 border border-white/20"
                            : "text-slate-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <MapPin className="w-3.5 h-3.5" />
                        <span>⚡ Vizag & AP Local Hub (1–2h)</span>
                      </button>
                    </div>
                  </div>

                  {submitted && (
                    <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm flex items-start gap-3 mb-6 shadow-lg animate-fade-in">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-bold block text-white mb-0.5">
                          Enquiry Ready for Instant Routing!
                        </strong>
                        Your requisition has been generated. If WhatsApp did not open automatically, click the button again or contact our 24/7 hotline at{" "}
                        <a href="tel:+919394858999" className="text-white font-bold underline">
                          +91 93948 58999
                        </a>.
                      </div>
                    </div>
                  )}

                  <form onSubmit={(e) => handleSubmit(e, "whatsapp")} className="space-y-4 sm:space-y-5">
                    {/* Row 1: State Selection & Project City / Industrial Zone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      {/* State / Territory Dropdown */}
                      <div>
                        <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center justify-between mb-2">
                          <span className="flex items-center gap-1.5">
                            <Globe className="w-3.5 h-3.5 text-[#EE6C25]" />
                            Project State / Territory <span className="text-[#EE6C25]">*</span>
                          </span>
                        </label>
                        <div className="relative group/input">
                          <select
                            value={selectedState}
                            onChange={handleStateChange}
                            required
                            className="w-full h-12 pl-4 pr-10 rounded-xl bg-[#070E1A]/90 border border-white/15 text-white text-sm hover:border-white/30 focus:border-[#EE6C25] focus:bg-[#0A1424] focus:outline-none focus:ring-2 focus:ring-[#EE6C25]/25 transition-all appearance-none cursor-pointer shadow-inner"
                          >
                            {indianStates.map((state) => (
                              <option key={state.code} value={state.name} className="bg-[#0A1424] text-white">
                                {state.name} {state.code === "AP" ? "(Visakhapatnam Hub)" : ""}
                              </option>
                            ))}
                          </select>
                          <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within/input:text-[#EE6C25] transition-colors">
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </div>
                      </div>

                      {/* Project City / Industrial Area */}
                      <div>
                        <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center justify-between mb-2">
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-[#EE6C25]" />
                            Site City / Industrial Zone <span className="text-[#EE6C25]">*</span>
                          </span>
                        </label>
                        <div className="relative group/input">
                          <input
                            type="text"
                            required
                            placeholder={activeStateMeta.placeholder}
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            className="w-full h-12 px-4 rounded-xl bg-[#070E1A]/90 border border-white/15 text-white text-sm placeholder:text-slate-500 hover:border-white/30 focus:border-[#EE6C25] focus:bg-[#0A1424] focus:outline-none focus:ring-2 focus:ring-[#EE6C25]/25 transition-all shadow-inner"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 2: Name & Phone Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      {/* Full Name */}
                      <div>
                        <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center justify-between mb-2">
                          <span>Your Name / In-Charge <span className="text-[#EE6C25]">*</span></span>
                        </label>
                        <div className="relative group/input">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within/input:text-[#EE6C25] transition-colors">
                            <User className="w-4 h-4" />
                          </div>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Rajesh Sharma"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full h-12 pl-10 pr-4 rounded-xl bg-[#070E1A]/90 border border-white/15 text-white text-sm placeholder:text-slate-500 hover:border-white/30 focus:border-[#EE6C25] focus:bg-[#0A1424] focus:outline-none focus:ring-2 focus:ring-[#EE6C25]/25 transition-all shadow-inner"
                          />
                        </div>
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center justify-between mb-2">
                          <span>Phone Number (WhatsApp Active) <span className="text-[#EE6C25]">*</span></span>
                        </label>
                        <div className="relative group/input">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within/input:text-[#EE6C25] transition-colors">
                            <Phone className="w-4 h-4" />
                          </div>
                          <input
                            type="tel"
                            required
                            placeholder="e.g. +91 98765 43210"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full h-12 pl-10 pr-4 rounded-xl bg-[#070E1A]/90 border border-white/15 text-white text-sm placeholder:text-slate-500 hover:border-white/30 focus:border-[#EE6C25] focus:bg-[#0A1424] focus:outline-none focus:ring-2 focus:ring-[#EE6C25]/25 transition-all shadow-inner"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 3: Company & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      {/* Company / Contracting Firm */}
                      <div>
                        <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center justify-between mb-2">
                          <span>Company / Contracting Firm</span>
                          <span className="text-[10px] text-slate-400 font-normal lowercase tracking-normal">(optional)</span>
                        </label>
                        <div className="relative group/input">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within/input:text-[#EE6C25] transition-colors">
                            <Building2 className="w-4 h-4" />
                          </div>
                          <input
                            type="text"
                            placeholder="e.g. L&T / Tata Projects / EPC Contractor"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full h-12 pl-10 pr-4 rounded-xl bg-[#070E1A]/90 border border-white/15 text-white text-sm placeholder:text-slate-500 hover:border-white/30 focus:border-[#EE6C25] focus:bg-[#0A1424] focus:outline-none focus:ring-2 focus:ring-[#EE6C25]/25 transition-all shadow-inner"
                          />
                        </div>
                      </div>

                      {/* Email Address */}
                      <div>
                        <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center justify-between mb-2">
                          <span>Email for Written Quotation</span>
                          <span className="text-[10px] text-slate-400 font-normal lowercase tracking-normal">(optional)</span>
                        </label>
                        <div className="relative group/input">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within/input:text-[#EE6C25] transition-colors">
                            <Mail className="w-4 h-4" />
                          </div>
                          <input
                            type="email"
                            placeholder="e.g. procurement@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full h-12 pl-10 pr-4 rounded-xl bg-[#070E1A]/90 border border-white/15 text-white text-sm placeholder:text-slate-500 hover:border-white/30 focus:border-[#EE6C25] focus:bg-[#0A1424] focus:outline-none focus:ring-2 focus:ring-[#EE6C25]/25 transition-all shadow-inner"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 4: Machinery Selection & Operating Terms */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      {/* Equipment Required */}
                      <div>
                        <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center justify-between mb-2">
                          <span>Equipment Required <span className="text-[#EE6C25]">*</span></span>
                        </label>
                        <div className="relative group/input">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within/input:text-[#EE6C25] transition-colors">
                            <Wrench className="w-4 h-4" />
                          </div>
                          <select
                            value={formData.equipment}
                            onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
                            className="w-full h-12 pl-10 pr-10 rounded-xl bg-[#070E1A]/90 border border-white/15 text-white text-sm hover:border-white/30 focus:border-[#EE6C25] focus:bg-[#0A1424] focus:outline-none focus:ring-2 focus:ring-[#EE6C25]/25 transition-all appearance-none cursor-pointer shadow-inner"
                          >
                            <optgroup label="Heavy Cranes" className="bg-[#0A1424] font-bold text-[#F48A4E]">
                              <option value="Heavy Telescopic Mobile Cranes (50T – 300T)">Heavy Telescopic Mobile Cranes (50T–300T)</option>
                              <option value="Heavy Hydraulic Lattice Crawler Cranes (50T – 500T)">Heavy Lattice Crawler Cranes (50T–500T)</option>
                              <option value="Pick & Carry Mobile Cranes (Farana & Hydra 12T – 30T)">Pick & Carry Hydra / Farana Cranes (12T–30T)</option>
                            </optgroup>
                            <optgroup label="Aerial High-Reach Platforms" className="bg-[#0A1424] font-bold text-[#F48A4E]">
                              <option value="Self-Propelled Articulated & Telescopic Boom Lifts (45ft – 150ft)">Articulated & Telescopic Boom Lifts (45ft–150ft)</option>
                              <option value="Truck-Mounted Boom Lifts & Sky Lifts (18m – 70m)">Truck-Mounted Boom Lifts & Sky Lifts (18m–70m)</option>
                              <option value="Electric & Diesel Rough-Terrain Scissor Lifts (19ft – 60ft)">Scissor Lifts (Electric & Diesel 19ft–60ft)</option>
                            </optgroup>
                            <optgroup label="Haulage & Material Handling" className="bg-[#0A1424] font-bold text-[#F48A4E]">
                              <option value="Low Bed, Semi-Low Bed & Multi-Axle Heavy Trailers (30T – 250T)">Low Bed & Multi-Axle Heavy Trailers (30T–250T ODC)</option>
                              <option value="Heavy Industrial Diesel & Electric Forklifts (3T – 25T)">Industrial Forklifts (3T–25T Counterbalance)</option>
                              <option value="Complete Fleet Turnkey Package (Multiple Equipment)">Complete Multi-Machine Fleet Package</option>
                            </optgroup>
                          </select>
                          <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within/input:text-[#EE6C25] transition-colors">
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </div>
                      </div>

                      {/* Rental Duration */}
                      <div>
                        <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center justify-between mb-2">
                          <span>Rental Duration <span className="text-[#EE6C25]">*</span></span>
                        </label>
                        <div className="relative group/input">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within/input:text-[#EE6C25] transition-colors">
                            <Calendar className="w-4 h-4" />
                          </div>
                          <select
                            value={formData.duration}
                            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                            className="w-full h-12 pl-10 pr-10 rounded-xl bg-[#070E1A]/90 border border-white/15 text-white text-sm hover:border-white/30 focus:border-[#EE6C25] focus:bg-[#0A1424] focus:outline-none focus:ring-2 focus:ring-[#EE6C25]/25 transition-all appearance-none cursor-pointer shadow-inner"
                          >
                            <option value="Daily Shift (8 or 12 Hours)">Single / Daily Shift (8 or 12 Hours)</option>
                            <option value="Short Term Plant Shutdown (3 to 7 Days)">Short-Term Plant Shutdown (3 to 7 Days)</option>
                            <option value="Monthly Contract (1 to 3 Months)">Monthly Lease (1 to 3 Months)</option>
                            <option value="Long Term EPC Project Deployment (3 to 12+ Months)">Long Term EPC Contract (3 to 12+ Months)</option>
                            <option value="Annual Master Service Agreement (MSA)">Annual Master Service Agreement (MSA)</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within/input:text-[#EE6C25] transition-colors">
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Row 5: Fuel & Operator Agreement Terms */}
                    <div>
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center justify-between mb-2">
                        <span className="flex items-center gap-1.5">
                          <Fuel className="w-3.5 h-3.5 text-[#EE6C25]" />
                          Preferred Hire Commercial Terms
                        </span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        {[
                          { id: "Wet Hire (Fuel & Certified Operator Included)", label: "Wet Hire", sub: "Fuel + Operator + Maintenance" },
                          { id: "Dry Hire (Certified Operator, Fuel by Client)", label: "Dry Hire", sub: "Operator Provided, Client Fuel" },
                          { id: "Bare Hire (Equipment Only, Client Managed)", label: "Bare Hire", sub: "Machinery Only (Corporate EPC)" },
                        ].map((term) => (
                          <button
                            type="button"
                            key={term.id}
                            onClick={() => setFormData({ ...formData, hireTerms: term.id })}
                            className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                              formData.hireTerms === term.id
                                ? "bg-[#EE6C25]/15 border-[#EE6C25] text-white shadow-sm"
                                : "bg-[#070E1A]/80 border-white/10 text-slate-400 hover:border-white/20 hover:text-slate-200"
                            }`}
                          >
                            <span className="text-xs font-bold block text-white">{term.label}</span>
                            <span className="text-[10px] text-slate-400 block mt-0.5">{term.sub}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Row 6: Project Scope / Attachments / Jib Radius */}
                    <div>
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center justify-between mb-2">
                        <span>Project Scope / Technical Notes / Required Attachments</span>
                        <span className="text-[10px] text-slate-400 font-normal lowercase tracking-normal">(optional)</span>
                      </label>
                      <div className="relative">
                        <textarea
                          rows={3}
                          placeholder="Provide details such as load tonnage, required hook height/working radius, site ground conditions, route clearance, or specific crane boom attachments..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full p-4 rounded-xl bg-[#070E1A]/90 border border-white/15 text-white text-sm placeholder:text-slate-500 hover:border-white/30 focus:border-[#EE6C25] focus:bg-[#0A1424] focus:outline-none focus:ring-2 focus:ring-[#EE6C25]/25 transition-all resize-none leading-relaxed shadow-inner"
                        />
                      </div>
                    </div>

                    {/* Dual Action Buttons: WhatsApp Instant Quote & Official Email Quotation */}
                    <div className="pt-2 space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {/* Primary WhatsApp Dispatch */}
                        <button
                          type="submit"
                          className="relative overflow-hidden h-14 rounded-xl bg-gradient-to-r from-[#F97316] via-[#EE6C25] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#EE6C25]/30 hover:shadow-2xl hover:shadow-[#EE6C25]/50 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 cursor-pointer border border-white/30 group/btn"
                        >
                          <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none animate-gleam" />
                          <WhatsAppIcon className="w-4 h-4 relative z-10 shrink-0" />
                          <span className="relative z-10">Instant Quote via WhatsApp</span>
                          <Send className="w-3.5 h-3.5 relative z-10 transition-transform duration-200 group-hover/btn:translate-x-1 shrink-0" />
                        </button>

                        {/* Secondary Email Quotation Request */}
                        <button
                          type="button"
                          onClick={(e) => handleSubmit(e, "email")}
                          className="h-14 rounded-xl bg-[#152744] hover:bg-[#1C3358] text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 border border-white/15 hover:border-white/30 shadow-md transition-all cursor-pointer group/mail"
                        >
                          <Mail className="w-4 h-4 text-[#EE6C25] shrink-0" />
                          <span>Request Email Proposal</span>
                        </button>
                      </div>

                      <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 pt-1 gap-1">
                        <span className="flex items-center gap-1.5">
                          ⚡ Average response SLA: <strong className="text-emerald-400 font-bold">Under 10 minutes</strong>
                        </span>
                        <span>
                          Need urgent heavy lift right now?{" "}
                          <a
                            href={`tel:${siteConfig.contact.primaryPhone}`}
                            className="text-[#F48A4E] hover:underline font-bold inline-flex items-center gap-1"
                          >
                            Call +91 93948 58999
                          </a>
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
