"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import {
  Phone,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Truck,
  Wrench,
  Construction,
  Layers,
  Sparkles,
  Home,
  Info,
  Users2,
  HelpCircle,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Zap,
  ArrowUpRight,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileEquipmentOpen, setMobileEquipmentOpen] = useState(false);
  const [equipmentDropdownOpen, setEquipmentDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  const lastScrollY = useRef(0);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setEquipmentDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Ultra-Smooth 60fps Scroll Tracking & Scroll Progress Calculation (Navbar stays persistently visible)
  useEffect(() => {
    let ticking = false;

    const sections = [
      { id: "home" },
      { id: "about" },
      { id: "equipment" },
      { id: "clients" },
      { id: "contact" },
    ];

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // State 1: Is user scrolled away from the very top?
          setIsScrolled(currentScrollY > 20);

          // State 2: Calculate precise reading progress telemetry
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (docHeight > 0) {
            setScrollProgress(Math.min(100, Math.max(0, (currentScrollY / docHeight) * 100)));
          }

          lastScrollY.current = currentScrollY;

          // State 4: Active section spy on homepage
          if (pathname === "/") {
            const scrollPosition = currentScrollY + 200;

            if (
              window.innerHeight + currentScrollY >=
              document.documentElement.scrollHeight - 80
            ) {
              setActiveSection("contact");
            } else {
              let current = "home";
              for (const section of sections) {
                const el = document.getElementById(section.id);
                if (el && scrollPosition >= el.offsetTop) {
                  current = section.id;
                }
              }
              setActiveSection(current);
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname, mobileMenuOpen]);

  // Dropdown safe hover handlers with debounce
  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setEquipmentDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setEquipmentDropdownOpen(false);
    }, 150);
  };

  const navLinks = [
    { name: "Home", href: isHome ? "/#home" : "/", sectionId: "home", icon: Home },
    { name: "About", href: isHome ? "/#about" : "/about", sectionId: "about", icon: Info },
    {
      name: "Equipment Fleet",
      href: isHome ? "/#equipment" : "/equipment",
      sectionId: "equipment",
      icon: Construction,
      hasDropdown: true,
    },
    { name: "Clients", href: "/#clients", sectionId: "clients", icon: Users2 },
    { name: "FAQ", href: "/faq", sectionId: "faq", icon: HelpCircle },
    { name: "Contact", href: isHome ? "/#contact" : "/contact", sectionId: "contact", icon: MessageSquare },
  ];

  // Equipment Mega-Menu Categories (All 8 services)
  const equipmentMegaMenu = {
    heavyLifting: [
      {
        name: "Mobile Telescopic Cranes",
        specs: "50T – 300T • Telescopic & All-Terrain",
        href: "/equipment/crane-rental-services",
        icon: Construction,
        badge: "Heavy Lift",
      },
      {
        name: "Lattice Crawler Cranes",
        specs: "50T – 500T • Marine Piling & Foundations",
        href: "/equipment/crawler-crane-rental",
        icon: Construction,
        badge: "Deep Piling",
      },
      {
        name: "Pick & Carry Hydra / Farana",
        specs: "12T – 30T • Rapid Yard & PEB Shifting",
        href: "/equipment/pick-and-carry-mobile-crane-rental",
        icon: Wrench,
        badge: "Agile 360°",
      },
      {
        name: "Low Bed Heavy Trailers",
        specs: "30T – 250T • Multi-Axle Modular ODC",
        href: "/equipment/heavy-duty-trailer-rental",
        icon: Truck,
        badge: "ODC Transit",
      },
    ],
    aerialAccess: [
      {
        name: "Articulated & Telescopic Boom Lifts",
        specs: "45ft – 150ft (14m – 46m) • High Reach",
        href: "/equipment/boom-lift-rental-services",
        icon: Layers,
        badge: "Factory Access",
      },
      {
        name: "Truck-Mounted Boom Lifts (Sky Lifts)",
        specs: "18m – 70m • Fast Road-Legal Setup",
        href: "/equipment/truck-mounted-boom-lift-rental",
        icon: Layers,
        badge: "Utility / Facade",
      },
      {
        name: "Electric & Diesel Scissor Lifts",
        specs: "19ft – 60ft • Slide-out Deck Platforms",
        href: "/equipment/scissor-lift-rental-services",
        icon: Layers,
        badge: "Indoor / 4WD",
      },
      {
        name: "Industrial Heavy Forklifts",
        specs: "3T – 25T • Container CFS & Pallets",
        href: "/equipment/forklift-rental-services",
        icon: Truck,
        badge: "Port / Logistics",
      },
    ],
  };

  const isLinkActive = (link: { href: string; sectionId?: string }) => {
    if (isHome) {
      if (link.sectionId) {
        return activeSection === link.sectionId;
      }
      return link.href === "/" || link.href === "/#home";
    }

    if (link.href === "/" && pathname === "/") return true;
    if (link.href !== "/" && !link.href.startsWith("/#") && pathname.startsWith(link.href)) {
      return true;
    }
    return false;
  };

  return (
    <>
      {/* Fixed Header Root Container */}
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none select-none">
        {/* Persistent Top Wrapper */}
        <div className="pointer-events-auto">
          {/* Top Micro-Bar (Collapses smoothly on scroll) */}
          <div
            className={`transition-all duration-500 ease-out hidden md:block overflow-hidden ${
              isScrolled
                ? "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
                : "max-h-11 opacity-100 translate-y-0"
            }`}
          >
            <div className="bg-[#050B14]/90 backdrop-blur-md border-b border-white/[0.06] text-[11px] text-slate-300 py-1.5 px-4 sm:px-8">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-slate-300 font-medium tracking-wide">
                    Certified Heavy Crane & Boom Lift Rental Services •{" "}
                    <span className="text-[#F48A4E] font-semibold">24/7 Pan-India & Vizag Dispatch</span>
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs font-semibold">
                  <a
                    href={`tel:${siteConfig.contact.primaryPhone}`}
                    className="flex items-center gap-1.5 text-slate-200 hover:text-[#EE6C25] transition-colors"
                  >
                    <Phone className="w-3 h-3 text-[#EE6C25]" />
                    <span>{siteConfig.contact.primaryPhoneFormatted}</span>
                  </a>
                  <span className="text-slate-700">|</span>
                  <a
                    href={siteConfig.socialLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <WhatsAppIcon className="w-3 h-3" />
                    <span>WhatsApp Desk</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Floating Glass Island Navbar */}
          <div className="w-full px-3 sm:px-6 lg:px-8 pt-2 sm:pt-3">
            <div className="max-w-7xl mx-auto">
              <div
                className={`relative rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isScrolled
                    ? "bg-[#070E1A]/85 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] py-2 sm:py-2.5 px-3 sm:px-5 ring-1 ring-[#EE6C25]/20"
                    : "bg-[#0A1322]/70 backdrop-blur-xl border border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.4)] py-2.5 sm:py-3 px-3 sm:px-6"
                }`}
              >
                {/* Scroll Telemetry Progress Beam (Etched on bottom edge) */}
                <div className="absolute bottom-0 left-3 right-3 h-[2px] bg-white/[0.04] overflow-hidden rounded-full">
                  <div
                    className="h-full bg-gradient-to-r from-[#EE6C25] via-[#F97316] to-[#EE6C25] shadow-[0_0_8px_#EE6C25] transition-all duration-150 ease-out rounded-full"
                    style={{ width: `${scrollProgress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between gap-3 sm:gap-6">
                  {/* Left: Brand Logo & Emblem with Radial Aura */}
                  <Link
                    href="/"
                    className="flex items-center gap-2.5 sm:gap-3 shrink-0 group relative focus:outline-none"
                    aria-label="Sadhana RR Enterprises Home"
                  >
                    <div className="relative w-8 h-8 sm:w-10 sm:h-10 shrink-0 transition-transform duration-300 group-hover:scale-105">
                      <div className="absolute inset-0 rounded-full bg-[#EE6C25]/25 blur-md group-hover:blur-lg group-hover:bg-[#EE6C25]/40 transition-all" />
                      <Image
                        src="/images/logo.png"
                        alt="Sadhana RR Enterprises"
                        width={40}
                        height={40}
                        className="w-full h-full object-contain relative z-10 drop-shadow-[0_4px_12px_rgba(238,108,37,0.45)]"
                        priority
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs sm:text-sm font-black text-white tracking-tight uppercase leading-none group-hover:text-[#F48A4E] transition-colors">
                        Sadhana RR
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-bold text-[#F48A4E] tracking-wider uppercase leading-tight mt-0.5">
                        Heavy Fleet Rentals
                      </span>
                    </div>
                  </Link>

                  {/* Center: Desktop Floating Fluid Capsule Navigation */}
                  <nav className="hidden lg:flex items-center gap-1 bg-[#050C17]/80 backdrop-blur-2xl px-2 py-1.5 rounded-full border border-white/[0.08] shadow-inner relative">
                    {navLinks.map((link) => {
                      const active = isLinkActive(link);
                      const isHovered = hoveredNav === link.name;

                      if (link.hasDropdown) {
                        return (
                          <div
                            key={link.name}
                            ref={dropdownRef}
                            className="relative"
                            onMouseEnter={handleDropdownEnter}
                            onMouseLeave={handleDropdownLeave}
                          >
                            <button
                              type="button"
                              onClick={() => setEquipmentDropdownOpen((prev) => !prev)}
                              onMouseEnter={() => setHoveredNav(link.name)}
                              onMouseLeave={() => setHoveredNav(null)}
                              className={`relative z-10 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                                active || equipmentDropdownOpen
                                  ? "text-white bg-white/10 border border-[#EE6C25]/50 shadow-[0_0_15px_rgba(238,108,37,0.2)]"
                                  : isHovered
                                  ? "text-white bg-white/8 border border-white/15"
                                  : "text-slate-300 hover:text-white border border-transparent"
                              }`}
                            >
                              {active && (
                                <span className="w-1.5 h-1.5 rounded-full bg-[#EE6C25] shadow-[0_0_8px_#EE6C25] animate-pulse" />
                              )}
                              <span>{link.name}</span>
                              <ChevronDown
                                className={`w-3.5 h-3.5 transition-transform duration-300 ${
                                  equipmentDropdownOpen ? "rotate-180 text-[#F48A4E]" : "text-slate-400"
                                }`}
                              />
                            </button>

                            {/* Luxury 2-Column Mega-Menu Glass Dropdown */}
                            <div
                              className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                                equipmentDropdownOpen
                                  ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                                  : "opacity-0 translate-y-3 scale-95 pointer-events-none"
                              }`}
                              style={{ width: "640px" }}
                            >
                              <div className="bg-[#070E1A]/95 backdrop-blur-3xl border border-white/15 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.85)] p-5 overflow-hidden ring-1 ring-[#EE6C25]/25">
                                {/* Top Header in Dropdown */}
                                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                                  <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-[#EE6C25] animate-ping" />
                                    <span className="text-[11px] font-mono font-bold text-[#F48A4E] uppercase tracking-wider">
                                      Fleet Categories • Pan-India & Vizag
                                    </span>
                                  </div>
                                  <Link
                                    href="/equipment"
                                    onClick={() => setEquipmentDropdownOpen(false)}
                                    className="text-[11px] text-slate-300 hover:text-[#EE6C25] font-semibold flex items-center gap-1 transition-colors"
                                  >
                                    <span>Complete Fleet Catalog</span>
                                    <ArrowUpRight className="w-3.5 h-3.5" />
                                  </Link>
                                </div>

                                {/* 2-Column Grid of Fleet Services */}
                                <div className="grid grid-cols-2 gap-4">
                                  {/* Col 1: Heavy Cranes & Transport */}
                                  <div className="space-y-1.5">
                                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block px-2 mb-1">
                                      Heavy Cranes & Haulage
                                    </span>
                                    {equipmentMegaMenu.heavyLifting.map((item) => {
                                      const Icon = item.icon;
                                      return (
                                        <Link
                                          key={item.name}
                                          href={item.href}
                                          onClick={() => setEquipmentDropdownOpen(false)}
                                          className="p-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 flex items-start gap-3 transition-all group/item"
                                        >
                                          <div className="w-8 h-8 rounded-lg bg-[#152744] group-hover/item:bg-[#EE6C25] flex items-center justify-center text-[#EE6C25] group-hover/item:text-white transition-all shrink-0 mt-0.5">
                                            <Icon className="w-4 h-4" />
                                          </div>
                                          <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between gap-1">
                                              <span className="text-xs font-bold text-white group-hover/item:text-[#F48A4E] transition-colors truncate">
                                                {item.name}
                                              </span>
                                              <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-slate-300 shrink-0 font-medium">
                                                {item.badge}
                                              </span>
                                            </div>
                                            <span className="text-[10px] text-slate-400 block truncate mt-0.5">
                                              {item.specs}
                                            </span>
                                          </div>
                                        </Link>
                                      );
                                    })}
                                  </div>

                                  {/* Col 2: Aerial High-Reach & Warehousing */}
                                  <div className="space-y-1.5">
                                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block px-2 mb-1">
                                      Aerial Access & Material Handling
                                    </span>
                                    {equipmentMegaMenu.aerialAccess.map((item) => {
                                      const Icon = item.icon;
                                      return (
                                        <Link
                                          key={item.name}
                                          href={item.href}
                                          onClick={() => setEquipmentDropdownOpen(false)}
                                          className="p-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 flex items-start gap-3 transition-all group/item"
                                        >
                                          <div className="w-8 h-8 rounded-lg bg-[#152744] group-hover/item:bg-[#EE6C25] flex items-center justify-center text-[#EE6C25] group-hover/item:text-white transition-all shrink-0 mt-0.5">
                                            <Icon className="w-4 h-4" />
                                          </div>
                                          <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between gap-1">
                                              <span className="text-xs font-bold text-white group-hover/item:text-[#F48A4E] transition-colors truncate">
                                                {item.name}
                                              </span>
                                              <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-slate-300 shrink-0 font-medium">
                                                {item.badge}
                                              </span>
                                            </div>
                                            <span className="text-[10px] text-slate-400 block truncate mt-0.5">
                                              {item.specs}
                                            </span>
                                          </div>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </div>

                                {/* Mega Menu Footer Bar */}
                                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between bg-white/[0.02] -mx-5 -mb-5 px-5 py-3">
                                  <div className="flex items-center gap-2 text-[11px] text-slate-300">
                                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                                    <span>All units certified with Third-Party Load Test Fitness (TPI)</span>
                                  </div>
                                  <Link
                                    href="/#quote"
                                    onClick={() => setEquipmentDropdownOpen(false)}
                                    className="text-xs font-bold text-[#F48A4E] hover:text-white inline-flex items-center gap-1 transition-colors"
                                  >
                                    <span>Instant Machinery Rate Quote</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      }

                      return (
                        <Link
                          key={link.name}
                          href={link.href}
                          onMouseEnter={() => setHoveredNav(link.name)}
                          onMouseLeave={() => setHoveredNav(null)}
                          className={`relative z-10 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                            active
                              ? "text-white bg-white/10 border border-[#EE6C25]/50 shadow-[0_0_15px_rgba(238,108,37,0.2)]"
                              : isHovered
                              ? "text-white bg-white/8 border border-white/15"
                              : "text-slate-300 hover:text-white border border-transparent"
                          }`}
                        >
                          {active && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#EE6C25] shadow-[0_0_8px_#EE6C25] animate-pulse" />
                          )}
                          <span>{link.name}</span>
                        </Link>
                      );
                    })}
                  </nav>

                  {/* Right: Quick Action Hub & CTA Buttons */}
                  <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
                    {/* Call Dispatch Button */}
                    <a
                      href={`tel:${siteConfig.contact.primaryPhone}`}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 hover:bg-[#EE6C25] text-slate-300 hover:text-white border border-white/10 hover:border-[#EE6C25] hover:shadow-lg hover:shadow-[#EE6C25]/30 hover:scale-105 active:scale-95 transition-all duration-300 hidden md:flex items-center justify-center shrink-0 group/phone cursor-pointer"
                      title="Call Fleet Coordination Desk"
                      aria-label="Call Dispatch Helpline"
                    >
                      <Phone className="w-4 h-4 transition-transform duration-300 group-hover/phone:scale-110" />
                    </a>

                    {/* WhatsApp Quick Dispatch Button */}
                    <a
                      href={siteConfig.socialLinks.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-white border border-emerald-500/30 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/35 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center shrink-0 group/wa cursor-pointer"
                      title="WhatsApp Fleet Dispatch"
                      aria-label="WhatsApp Fleet Dispatch"
                    >
                      <WhatsAppIcon className="w-4 h-4 transition-transform duration-300 group-hover/wa:scale-110" />
                    </a>

                    {/* Desktop "Get Instant Quote" Button */}
                    <div className="hidden lg:block">
                      <Link
                        href="/#quote"
                        className="relative overflow-hidden h-10 px-5 rounded-full bg-gradient-to-r from-[#F97316] via-[#EE6C25] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white font-extrabold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg shadow-[#EE6C25]/35 hover:shadow-xl hover:shadow-[#EE6C25]/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-white/25 cursor-pointer group/cta"
                      >
                        <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none animate-gleam" />
                        <span className="relative z-10">Get Instant Quote</span>
                        <ArrowRight className="w-3.5 h-3.5 relative z-10 transition-transform duration-200 group-hover/cta:translate-x-1" />
                      </Link>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                      className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#F97316] via-[#EE6C25] to-[#EA580C] text-white shadow-lg shadow-[#EE6C25]/40 active:scale-95 transition-all border border-[#F48A4E] shrink-0 cursor-pointer"
                      aria-label="Toggle navigation menu"
                    >
                      {mobileMenuOpen ? (
                        <X className="w-5 h-5 text-white" />
                      ) : (
                        <Menu className="w-5 h-5 text-white" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Ultra-Luxury Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[99999] w-screen h-[100dvh] flex flex-col bg-[#070E1A] text-white overflow-hidden animate-in fade-in duration-200">
          {/* Mobile Drawer Header */}
          <div className="flex items-center justify-between px-4 py-3.5 border-b border-white/10 bg-[#0A1322] shrink-0">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5"
            >
              <div className="relative w-9 h-9 rounded-full bg-white/10 p-1 border border-[#EE6C25]/50 shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Sadhana RR Enterprises"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-black text-white uppercase tracking-wider leading-none">
                  Sadhana RR Enterprises
                </span>
                <span className="text-[10px] text-[#F48A4E] font-semibold tracking-wide mt-0.5">
                  Heavy Crane & Fleet Rentals
                </span>
              </div>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-9 h-9 rounded-xl bg-[#152744] hover:bg-[#1E3760] border border-white/15 text-white flex items-center justify-center active:scale-90 transition-all cursor-pointer"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5 text-[#F48A4E]" />
            </button>
          </div>

          {/* Mobile Drawer Body Links */}
          <div className="flex-1 overflow-y-auto px-4 py-5 space-y-2.5 overscroll-contain">
            {navLinks.map((link) => {
              const active = isLinkActive(link);
              const IconComp = link.icon;

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="rounded-2xl bg-[#0F1D33]/90 border border-white/10 overflow-hidden transition-all shadow-md"
                  >
                    <button
                      onClick={() => setMobileEquipmentOpen(!mobileEquipmentOpen)}
                      className="w-full flex items-center justify-between p-3.5 text-left font-bold text-sm text-white hover:bg-white/5 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#1C3358] border border-[#EE6C25]/30 flex items-center justify-center text-[#EE6C25]">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <span className="font-extrabold tracking-wide">{link.name}</span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-[#F48A4E] transition-transform duration-300 ${
                          mobileEquipmentOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {mobileEquipmentOpen && (
                      <div className="px-3 pb-3 space-y-1 border-t border-white/5 pt-2 bg-[#0A1424]/60">
                        <Link
                          href="/equipment"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between p-2.5 rounded-xl bg-[#EE6C25]/15 border border-[#EE6C25]/30 text-xs font-bold text-[#F48A4E] mb-2"
                        >
                          <span>Explore All 8 Fleet Categories</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>

                        {[...equipmentMegaMenu.heavyLifting, ...equipmentMegaMenu.aerialAccess].map((sub) => {
                          const SubIcon = sub.icon;
                          return (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/10 active:bg-white/15 transition-all text-xs text-slate-200"
                            >
                              <div className="w-7 h-7 rounded-md bg-[#152744] flex items-center justify-center text-[#EE6C25] shrink-0">
                                <SubIcon className="w-3.5 h-3.5" />
                              </div>
                              <div className="flex flex-col min-w-0">
                                <span className="font-bold text-white truncate">{sub.name}</span>
                                <span className="text-[10px] text-slate-400 truncate">{sub.specs}</span>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all shadow-md ${
                    active
                      ? "bg-gradient-to-r from-[#F97316] via-[#EE6C25] to-[#EA580C] text-white border-[#F48A4E] shadow-[#EE6C25]/25 font-black"
                      : "bg-[#0F1D33]/80 text-slate-200 border-white/10 hover:border-white/25 active:bg-[#152744]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        active ? "bg-white/20 text-white" : "bg-[#1C3358] text-[#EE6C25]"
                      }`}
                    >
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-extrabold tracking-wide">{link.name}</span>
                  </div>
                  <ArrowRight className={`w-4 h-4 ${active ? "text-white" : "text-slate-500"}`} />
                </Link>
              );
            })}

            {/* Mobile Pan-India Trust Assurance Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[#0F1D33] to-[#142644] border border-[#EE6C25]/30 space-y-2 mt-4 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-bold text-[#F48A4E]">
                <ShieldCheck className="w-4 h-4 text-[#EE6C25] shrink-0" />
                <span>Pan-India 24/7 Heavy Equipment Mobilization</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Heavy telescopic cranes (50T–300T), lattice crawlers, 14m–70m boom lifts, hydra/farana, low bed trailers & heavy forklifts with certified riggers.
              </p>
            </div>
          </div>

          {/* Mobile Bottom Pinned Action Bar */}
          <div className="p-4 border-t border-white/10 bg-[#0A1322] space-y-2.5 shrink-0">
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${siteConfig.contact.primaryPhone}`}
                className="h-11 rounded-xl bg-[#152744] hover:bg-[#1E3760] active:scale-95 border border-white/15 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <Phone className="w-4 h-4 text-[#EE6C25]" />
                <span>Call Dispatch</span>
              </a>

              <a
                href={siteConfig.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 border border-emerald-400/30 transition-all"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            <Link
              href="/#quote"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary w-full h-11 text-center justify-center text-xs uppercase font-black tracking-wider rounded-xl shadow-xl shadow-[#EE6C25]/40 flex items-center gap-2 active:scale-98"
            >
              <span>Get Instant Quotation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
