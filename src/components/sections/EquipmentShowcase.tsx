"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { equipmentFleet, equipmentCategories } from "@/data/equipment";
import { getWhatsAppQuoteUrl } from "@/config/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowRight, Send, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

interface EquipmentShowcaseProps {
  showHeader?: boolean;
  isCatalogPage?: boolean;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

export function EquipmentShowcase({
  showHeader = true,
  isCatalogPage = false,
  eyebrow = "CERTIFIED INDUSTRIAL & AERIAL FLEET",
  title = "Heavy Cranes, Boom Lifts, Crawlers & Fleet Rentals",
  subtitle = "Explore our certified heavy telescopic cranes (50T–300T), hydraulic crawler cranes, high-altitude boom lifts (14m–70m), Farana pick & carry hydras, scissor lifts, heavy low bed trailers, and industrial forklifts with certified operators across India & Visakhapatnam (Vizag).",
}: EquipmentShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredFleet =
    activeCategory === "all"
      ? equipmentFleet
      : equipmentFleet.filter((item) => item.category === activeCategory);

  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const hasDragged = useRef(false);

  const checkScrollability = () => {
    if (!tabsContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = tabsContainerRef.current;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);
    return () => window.removeEventListener("resize", checkScrollability);
  }, []);

  const handleScroll = () => {
    checkScrollability();
  };

  const scrollTabs = (offset: number) => {
    if (!tabsContainerRef.current) return;
    tabsContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!tabsContainerRef.current) return;
    isDragging.current = true;
    hasDragged.current = false;
    startX.current = e.pageX - tabsContainerRef.current.offsetLeft;
    scrollLeftStart.current = tabsContainerRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !tabsContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - tabsContainerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    if (Math.abs(walk) > 4) {
      hasDragged.current = true;
    }
    tabsContainerRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleTabClick = (catId: string, e: React.MouseEvent<HTMLButtonElement>) => {
    if (hasDragged.current) {
      e.preventDefault();
      return;
    }
    setActiveCategory(catId);
    // Smoothly center the clicked tab
    e.currentTarget.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return (
    <section id="equipment" className={`${isCatalogPage ? "py-8 lg:py-12" : "py-20 lg:py-28"} bg-[#070E1A] relative overflow-hidden scroll-mt-20`}>
      {/* Background ambient lighting aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-[#EE6C25]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 industrial-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {showHeader && (
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            subtitle={subtitle}
          />
        )}

        {/* Enhanced Category Filter Tabs with Drag-to-Scroll & Navigation Arrows */}
        <div className="relative mb-12 max-w-5xl mx-auto group/tabbar">
          {/* Left Scroll Arrow */}
          <button
            onClick={() => scrollTabs(-240)}
            aria-label="Scroll categories left"
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-30 w-9 h-9 rounded-full bg-[#0F1D33]/95 border border-[#EE6C25]/50 text-white shadow-xl backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:bg-[#EE6C25] hover:scale-110 active:scale-95 ${
              canScrollLeft ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Left Fade Gradient Mask */}
          <div
            className={`absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#070E1A] to-transparent z-20 pointer-events-none transition-opacity duration-300 ${
              canScrollLeft ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Right Scroll Arrow */}
          <button
            onClick={() => scrollTabs(240)}
            aria-label="Scroll categories right"
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-30 w-9 h-9 rounded-full bg-[#0F1D33]/95 border border-[#EE6C25]/50 text-white shadow-xl backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:bg-[#EE6C25] hover:scale-110 active:scale-95 ${
              canScrollRight ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Right Fade Gradient Mask */}
          <div
            className={`absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#070E1A] to-transparent z-20 pointer-events-none transition-opacity duration-300 ${
              canScrollRight ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Scrollable / Draggable Track */}
          <div
            ref={tabsContainerRef}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto py-2 px-3 scrollbar-none select-none cursor-grab active:cursor-grabbing touch-pan-x"
            style={{ WebkitOverflowScrolling: "touch", scrollBehavior: "smooth" }}
          >
            {equipmentCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={(e) => handleTabClick(cat.id, e)}
                  className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-[#F97316] via-[#EE6C25] to-[#EA580C] text-white shadow-lg shadow-[#EE6C25]/30 border border-[#F48A4E] scale-105"
                      : "bg-[#0F1D33]/90 text-slate-300 hover:text-white hover:bg-[#152744] border border-white/10 hover:border-white/20"
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Equipment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredFleet.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col rounded-2xl bg-gradient-to-b from-[#0E1C33] via-[#0A1527] to-[#070E1A] border border-white/10 hover:border-[#EE6C25]/70 shadow-xl hover:shadow-[0_20px_45px_-10px_rgba(238,108,37,0.35)] transition-all duration-400 ease-out hover:-translate-y-2 overflow-hidden"
            >
              {/* Top Orange Laser Rim Glow */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#EE6C25] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-20" />

              {/* Compact Image Header */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0A1322]">
                <Image
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out filter brightness-95 group-hover:brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1527] via-transparent to-black/30 opacity-90" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#070E1A]/90 border border-[#EE6C25]/40 text-[10px] font-mono font-bold text-[#F48A4E] uppercase tracking-wider backdrop-blur-md shadow-md">
                  {item.categoryName}
                </div>

                {/* Ready for Dispatch Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#070E1A]/90 border border-emerald-500/30 text-[10px] font-bold text-emerald-300 backdrop-blur-md flex items-center gap-1.5 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available
                </div>

                {/* Primary Metric Tag Pill on Image */}
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-bold text-white bg-[#070E1A]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 shadow-md">
                  <span className="text-[#F48A4E]">{item.specs[0]?.label || "Capacity"}:</span>
                  <span className="truncate ml-1.5 text-slate-100">{item.specs[0]?.value}</span>
                </div>
              </div>

              {/* Compact Card Body (Rest State) */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base sm:text-lg font-black text-white group-hover:text-[#F48A4E] transition-colors tracking-tight line-clamp-1">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-xs text-slate-300 leading-relaxed line-clamp-2 font-normal">
                    {item.shortDescription}
                  </p>

                  {/* Compact Quick Specs Badges */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.specs.slice(1, 3).map((spec) => (
                      <span
                        key={spec.label}
                        className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[10px] font-medium text-slate-300"
                      >
                        <strong className="text-slate-400 font-semibold">{spec.label}:</strong> {spec.value}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons Bar */}
                <div className="pt-2 flex items-center gap-2">
                  <a
                    href={getWhatsAppQuoteUrl(item.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 h-10 rounded-xl bg-gradient-to-r from-[#F97316] via-[#EE6C25] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-[#EE6C25]/20 hover:shadow-lg hover:shadow-[#EE6C25]/40 active:scale-[0.99] transition-all duration-200 border border-white/20"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>Request Quote</span>
                  </a>

                  <Link
                    href={`/equipment/${item.slug}`}
                    className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#EE6C25] hover:text-white border border-white/10 hover:border-[#EE6C25] text-slate-300 flex items-center justify-center transition-all duration-200 shadow-md group/btn shrink-0"
                    title="View Technical Specifications"
                  >
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                  </Link>
                </div>
              </div>

              {/* Luxury Interactive Hover Specs Drawer (Slides up smoothly on hover) */}
              <div className="absolute inset-0 bg-[#070E1A]/97 backdrop-blur-2xl p-5 flex flex-col justify-between border-2 border-[#EE6C25]/60 rounded-2xl opacity-0 translate-y-3 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-350 ease-out z-30 shadow-2xl">
                <div>
                  {/* Drawer Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#EE6C25]/15 border border-[#EE6C25]/40 text-[10px] font-mono font-bold text-[#F48A4E] uppercase tracking-wider">
                      {item.categoryName}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Ready for Dispatch
                    </span>
                  </div>

                  <h4 className="mt-2.5 text-base font-black text-white tracking-tight line-clamp-1">
                    {item.name}
                  </h4>

                  {/* Full Key Specifications List */}
                  <div className="mt-3 space-y-1.5 bg-[#0A1527] p-3 rounded-xl border border-white/10 text-xs">
                    {item.specs.slice(0, 3).map((spec) => (
                      <div key={spec.label} className="flex items-center justify-between text-[11px] pt-1 first:pt-0">
                        <span className="text-slate-400 font-medium">{spec.label}</span>
                        <span className="text-white font-bold text-right ml-2 truncate max-w-[55%]">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Popular Variants / Models */}
                  <div className="mt-3">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                      Popular Models & Variants:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {item.popularModels.slice(0, 3).map((mod) => (
                        <span
                          key={mod}
                          className="px-2 py-0.5 rounded-md bg-white/[0.06] border border-white/10 text-[10px] font-medium text-slate-200"
                        >
                          {mod}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Drawer Quick Action Buttons */}
                <div className="pt-3 flex items-center gap-2 border-t border-white/10">
                  <a
                    href={getWhatsAppQuoteUrl(item.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 h-10 rounded-xl bg-gradient-to-r from-[#F97316] via-[#EE6C25] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-[#EE6C25]/30 active:scale-[0.99] transition-all"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>Instant Quote</span>
                  </a>

                  <Link
                    href={`/equipment/${item.slug}`}
                    className="px-3.5 h-10 rounded-xl bg-[#152744] hover:bg-[#EE6C25] hover:text-white border border-white/15 hover:border-[#EE6C25] text-slate-200 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-md"
                  >
                    <span>Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Logic */}
        {!isCatalogPage ? (
          <div className="mt-14 text-center">
            <Link
              href="/equipment"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#0F1D33] to-[#152744] hover:from-[#152744] hover:to-[#1C3358] border border-white/15 hover:border-[#EE6C25] text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-xl hover:shadow-[#EE6C25]/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              <span>View Full Machinery Fleet Catalog</span>
              <ArrowRight className="w-4 h-4 text-[#EE6C25]" />
            </Link>
          </div>
        ) : (
          <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#0F1D33] via-[#11223B] to-[#0A1628] border border-[#EE6C25]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold text-[#F48A4E] uppercase tracking-wider inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#EE6C25]" />
                Fast Pan-India Mobilization & Certified Riggers
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Need a Custom Lift Plan or Long-Term Lease Rate?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Our heavy equipment dispatch team provides same-day technical load charts, site survey assistance, and competitive commercial rental quotes.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3.5 shrink-0">
              <Link
                href="/#quote"
                className="btn-primary text-xs sm:text-sm font-black uppercase tracking-wider px-7 py-3.5 shadow-lg shadow-[#EE6C25]/30"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={getWhatsAppQuoteUrl("Full Fleet Rental Inquiry")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-xs sm:text-sm font-bold px-6 py-3.5"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Dispatch</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
