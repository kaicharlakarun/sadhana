import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { equipmentFleet } from "@/data/equipment";
import { siteConfig, getWhatsAppQuoteUrl } from "@/config/site";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";
import {
  ShieldCheck,
  CheckCircle2,
  Wrench,
  Clock,
  ArrowRight,
  ChevronRight,
  MapPin,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

interface Props {
  params: Promise<{ slug: string }>;
}

// Map alias slugs to specific equipment items
const slugAliases: Record<string, string> = {
  // 1. Mobile Cranes Search Aliases
  "best-crane-services-in-vizag": "crane-rental-services",
  "best-crane-services-in-india": "crane-rental-services",
  "crane-services-in-vizag": "crane-rental-services",
  "crane-services-near-me": "crane-rental-services",
  "crane-rental": "crane-rental-services",
  "heavy-crane-rental": "crane-rental-services",

  // 2. Boom Lifts Search Aliases
  "best-boomlift-services-in-vizag": "boom-lift-rental-services",
  "services-of-boomlift-in-india": "boom-lift-rental-services",
  "boom-lift-services-in-india": "boom-lift-rental-services",
  "boom-lift-rental-near-me": "boom-lift-rental-services",
  "boom-lift-rental": "boom-lift-rental-services",
  "articulated-telescopic-boom-lift-rental": "boom-lift-rental-services",

  // 3. Truck-Mounted Boom Lifts & Sky Lifts Aliases
  "truck-mounted-boom-lift-rental-india": "truck-mounted-boom-lift-rental",
  "services-of-truck-mounted-boom-lift-in-india": "truck-mounted-boom-lift-rental",
  "best-sky-lift-services-in-vizag": "truck-mounted-boom-lift-rental",
  "sky-lift-rental-vizag": "truck-mounted-boom-lift-rental",
  "truck-mounted-sky-lift-rental-vizag": "truck-mounted-boom-lift-rental",
  "sky-lift-hire-near-me": "truck-mounted-boom-lift-rental",

  // 4. Pick & Carry Hydra & Farana Cranes Aliases
  "pick-and-carry-crane-rental-india": "pick-and-carry-mobile-crane-rental",
  "hydra-crane-services-in-india": "pick-and-carry-mobile-crane-rental",
  "best-hydra-crane-services-in-vizag": "pick-and-carry-mobile-crane-rental",
  "farana-crane-rental-vizag": "pick-and-carry-mobile-crane-rental",
  "hydra-crane-rental-vizag": "pick-and-carry-mobile-crane-rental",
  "hydra-crane-near-me": "pick-and-carry-mobile-crane-rental",
  "mobile-crane-hydra-rental": "pick-and-carry-mobile-crane-rental",

  // 5. Scissor Lifts Aliases
  "best-scissor-lift-services-in-vizag": "scissor-lift-rental-services",
  "scissor-lift-rental-services-india": "scissor-lift-rental-services",
  "services-of-scissor-lift-in-india": "scissor-lift-rental-services",
  "electric-scissor-lift-rental": "scissor-lift-rental-services",
  "scissor-lift-rental-vizag": "scissor-lift-rental-services",
  "scissor-lift-near-me": "scissor-lift-rental-services",

  // 6. Heavy Trailers & Transport Aliases
  "low-bed-trailer-rental-india": "heavy-duty-trailer-rental",
  "heavy-trailer-rental-vizag": "heavy-duty-trailer-rental",
  "multi-axle-modular-trailer-rental-india": "heavy-duty-trailer-rental",
  "heavy-machinery-transport-near-me": "heavy-duty-trailer-rental",
  "road-machinery-rental": "heavy-duty-trailer-rental",

  // 7. Industrial Forklifts Aliases
  "best-forklift-services-in-vizag": "forklift-rental-services",
  "forklift-rental-services-india": "forklift-rental-services",
  "diesel-forklift-rental-vizag": "forklift-rental-services",
  "forklift-rental-near-me": "forklift-rental-services",

  // 8. Crawler Cranes Aliases
  "crawler-crane-rental-services-india": "crawler-crane-rental",
  "crawler-crane-rental-india": "crawler-crane-rental",
  "crawler-crane-hire-vizag": "crawler-crane-rental",
  "heavy-crawler-crane-rental": "crawler-crane-rental",
};

export async function generateStaticParams() {
  const directSlugs = equipmentFleet.map((item) => ({ slug: item.slug }));
  const aliasSlugs = Object.keys(slugAliases).map((slug) => ({ slug }));
  return [...directSlugs, ...aliasSlugs];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resolvedSlug = slugAliases[slug] || slug;
  const equipment = equipmentFleet.find((item) => item.slug === resolvedSlug);

  if (!equipment) {
    return {
      title: "Equipment Not Found | Sadhana RR Enterprises",
    };
  }

  // Tailored high-intent titles for search queries
  let pageTitle = `${equipment.name} Rental Services in India & Vizag | Sadhana RR Enterprises`;
  let pageDesc = equipment.shortDescription;

  // 1. Mobile Cranes
  if (slug === "best-crane-services-in-vizag") {
    pageTitle = "Best Crane Services in Vizag (Visakhapatnam) | 50T–300T Mobile Cranes | Sadhana RR";
    pageDesc = "Looking for the best crane services in Vizag? Sadhana RR Enterprises provides certified heavy mobile cranes (50T–300T), all-terrain telescopic cranes, and hydras with certified riggers and 24/7 site dispatch.";
  } else if (slug === "best-crane-services-in-india") {
    pageTitle = "Best Crane Services in India | Heavy Mobile & Crawler Crane Hire | Sadhana RR";
    pageDesc = "Ranked among the best crane services in India. Heavy telescopic cranes (50T–300T) and crawler cranes (50T–500T) for infrastructure, refineries, and mega power projects across India.";
  } else if (slug === "crane-services-near-me" || slug === "crane-services-in-vizag") {
    pageTitle = "Crane Services Near Me in Vizag & Andhra Pradesh | Rapid Site Dispatch | Sadhana RR";
    pageDesc = "Looking for crane services near me in Visakhapatnam? Immediate 1 to 2 hour dispatch across Gajuwaka, Parawada, Autonagar, Vepagunta, and all Vizag industrial corridors.";

  // 2. Boom Lifts
  } else if (slug === "best-boomlift-services-in-vizag") {
    pageTitle = "Best Boomlift Services in Vizag | 45ft–150ft Articulated & Telescopic Manlifts | Sadhana RR";
    pageDesc = "Top-rated best boomlift services in Vizag (Visakhapatnam). Self-propelled articulated knuckle boom lifts, straight telescopic manlifts, and sky lifts with trained operators.";
  } else if (slug === "services-of-boomlift-in-india" || slug === "boom-lift-services-in-india") {
    pageTitle = "Services of Boomlift in India | Premier Aerial Work Platform Rental | Sadhana RR";
    pageDesc = "Comprehensive services of boomlift in India. Rent certified articulated boom lifts (45ft–150ft), straight telescopic manlifts, truck-mounted sky lifts (18m–70m), and scissor lifts nationwide.";
  } else if (slug === "boom-lift-rental-near-me") {
    pageTitle = "Boom Lift Rental Near Me in Vizag & India | Immediate High-Reach Manlift Dispatch | Sadhana RR";
    pageDesc = "Find certified boom lift and sky lift rental near me. Same-day mobilization in Visakhapatnam, Andhra Pradesh, and nationwide with full safety certifications.";

  // 3. Truck-Mounted Boom Lifts & Sky Lifts
  } else if (slug === "truck-mounted-boom-lift-rental-india" || slug === "services-of-truck-mounted-boom-lift-in-india") {
    pageTitle = "Truck-Mounted Boom Lift Rental in India | 18m–70m Sky Lifts | Sadhana RR";
    pageDesc = "Premier truck-mounted boom lift rental across all Indian industrial zones. Road-legal sky lifts (18m to 70m) on Tata & BharatBenz chassis with 5-minute setup for power lines and facades.";
  } else if (slug === "best-sky-lift-services-in-vizag" || slug === "sky-lift-rental-vizag" || slug === "truck-mounted-sky-lift-rental-vizag") {
    pageTitle = "Best Sky Lift Services in Vizag | Truck Mounted Boom Lift Rental | Sadhana RR";
    pageDesc = "Rent certified truck-mounted sky lifts and boom lifts in Vizag. Reaching 18m to 70m heights for street lighting, building exterior maintenance, and refinery flare stacks.";
  } else if (slug === "sky-lift-hire-near-me") {
    pageTitle = "Sky Lift Hire Near Me in Vizag & India | Road-Legal Truck Boom Lifts | Sadhana RR";
    pageDesc = "Immediate sky lift hire near me in Visakhapatnam and nationwide. Reaching working heights up to 70m with licensed driver-operators.";

  // 4. Pick & Carry Hydra & Farana Cranes
  } else if (slug === "pick-and-carry-crane-rental-india" || slug === "hydra-crane-services-in-india") {
    pageTitle = "Pick and Carry Crane Rental in India | Farana & Hydra Cranes (12T–30T) | Sadhana RR";
    pageDesc = "All-India pick and carry crane rental services. Heavy Farana and Hydra mobile cranes (12T to 30T) for plant erection, yard material shifting, and PEB steel construction.";
  } else if (slug === "best-hydra-crane-services-in-vizag" || slug === "farana-crane-rental-vizag" || slug === "hydra-crane-rental-vizag") {
    pageTitle = "Best Hydra Crane Services in Vizag | Farana Pick & Carry Crane Hire | Sadhana RR";
    pageDesc = "Looking for hydra crane hire in Vizag? Sadhana RR Enterprises supplies 12T to 30T Next-Gen Farana cranes with certified operators and 1-hour dispatch in Gajuwaka and Autonagar.";
  } else if (slug === "hydra-crane-near-me") {
    pageTitle = "Hydra Crane Near Me in Vizag & Andhra Pradesh | 24/7 Mobile Farana Hire | Sadhana RR";
    pageDesc = "Need a hydra crane near me in Visakhapatnam? Fast 24/7 mobile crane dispatch across all Vizag fabrication yards, ports, and steel plant sectors.";

  // 5. Scissor Lifts
  } else if (slug === "scissor-lift-rental-services-india" || slug === "services-of-scissor-lift-in-india") {
    pageTitle = "Scissor Lift Rental in India | Electric & Diesel Rough Terrain Lifts | Sadhana RR";
    pageDesc = "All-India scissor lift rental services. Certified indoor electric and 4WD diesel rough-terrain scissor lifts (19ft to 60ft) for warehouses, airports, and industrial factories.";
  } else if (slug === "best-scissor-lift-services-in-vizag" || slug === "scissor-lift-rental-vizag") {
    pageTitle = "Best Scissor Lift Services in Vizag | 19ft–60ft Electric & Diesel Lifts | Sadhana RR";
    pageDesc = "Rent certified scissor lifts in Vizag. High-capacity platforms with slide-out extension decks for warehouse racking, ducting, and electrical maintenance across Visakhapatnam.";
  } else if (slug === "scissor-lift-near-me") {
    pageTitle = "Scissor Lift Near Me in Vizag & India | Warehouse & Construction Access | Sadhana RR";
    pageDesc = "Find certified scissor lifts near me for immediate daily, weekly, or monthly hire with on-site maintenance support across Indian industrial zones.";

  // 6. Heavy Trailers
  } else if (slug === "low-bed-trailer-rental-india" || slug === "multi-axle-modular-trailer-rental-india") {
    pageTitle = "Low Bed & Multi-Axle Trailer Rental in India | Heavy ODC Transport | Sadhana RR";
    pageDesc = "Nationwide heavy haulage trailer rental in India. Low bed, semi-low bed, and hydraulic multi-axle modular trailers (30T to 250T) for transporting heavy cranes and machinery.";
  } else if (slug === "heavy-trailer-rental-vizag" || slug === "heavy-machinery-transport-near-me") {
    pageTitle = "Heavy Trailer Rental in Vizag | Low Bed Machinery Transport Near Me | Sadhana RR";
    pageDesc = "Transport heavy cranes, excavators, and industrial cargo across Vizag and India. Turnkey trailer loading, lashing, and route clearance.";

  // 7. Industrial Forklifts
  } else if (slug === "forklift-rental-services-india") {
    pageTitle = "Industrial Forklift Rental in India | 3T–25T Diesel & Electric Forklifts | Sadhana RR";
    pageDesc = "Heavy industrial forklift hire across Indian ports, warehouses, and logistics parks. Counterbalance diesel and battery electric forklifts with container stuffing masts.";
  } else if (slug === "best-forklift-services-in-vizag" || slug === "diesel-forklift-rental-vizag" || slug === "forklift-rental-near-me") {
    pageTitle = "Best Forklift Services in Vizag | Forklift Rental Near Me (3T–25T) | Sadhana RR";
    pageDesc = "Rent industrial forklifts in Visakhapatnam. Certified 3 Ton to 25 Ton forklifts for container CFS, port cargo, and steel coil handling with trained drivers.";

  // 8. Crawler Cranes
  } else if (slug === "crawler-crane-rental-services-india" || slug === "crawler-crane-rental-india") {
    pageTitle = "Crawler Crane Rental Services in India | 50T–500T Lattice Boom Cranes | Sadhana RR";
    pageDesc = "Heavy lattice boom crawler crane rental across all Indian states. 50 Ton to 500 Ton pick-and-carry crawler cranes for ports, bridges, power plants, and marine jetties.";
  } else if (slug === "crawler-crane-hire-vizag") {
    pageTitle = "Crawler Crane Hire in Vizag | Heavy Port & Marine Lattice Cranes | Sadhana RR";
    pageDesc = "Certified crawler cranes for rent in Visakhapatnam. Low ground pressure lattice crawler cranes for Gangavaram Port, Visakhapatnam Steel Plant, and piling foundations.";
  }

  return {
    title: pageTitle,
    description: pageDesc,
    alternates: {
      canonical: `${siteConfig.url}/equipment/${slug}`,
    },
    openGraph: {
      title: pageTitle,
      description: pageDesc,
      url: `${siteConfig.url}/equipment/${slug}`,
      images: [
        {
          url: equipment.imageUrl,
          width: 1200,
          height: 630,
          alt: equipment.imageAlt,
        },
      ],
    },
  };
}

export default async function EquipmentDetailPage({ params }: Props) {
  const { slug } = await params;
  const resolvedSlug = slugAliases[slug] || slug;
  const equipment = equipmentFleet.find((item) => item.slug === resolvedSlug);

  if (!equipment) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Equipment Fleet", url: "/equipment" },
    { name: equipment.name, url: `/equipment/${slug}` },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);
  const serviceSchema = generateServiceSchema(
    `${equipment.name} Rental`,
    equipment.fullDescription,
    slug
  );

  return (
    <div className="pt-28 pb-20 bg-[#0A1322]">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-[#070E1A] border-b border-white/10 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link href="/equipment" className="hover:text-white transition-colors">
            Equipment Fleet
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-[#F48A4E] font-medium truncate max-w-xs sm:max-w-none">
            {equipment.name}
          </span>
        </div>
      </div>

      {/* Equipment Hero Overview */}
      <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: Image Box */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[16/11] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#12223B]">
              <Image
                src={equipment.imageUrl}
                alt={equipment.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1322]/80 via-transparent to-transparent" />

              <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-[#070E1A]/90 border border-[#EE6C25]/50 text-xs font-bold text-[#F48A4E] uppercase tracking-wider backdrop-blur-md">
                {equipment.categoryName}
              </div>
            </div>

            {/* Quick Assurance Strip */}
            <div className="p-4 rounded-xl bg-[#12223B] border border-white/10 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="flex flex-col items-center">
                <ShieldCheck className="w-4 h-4 text-[#EE6C25] mb-1" />
                <span className="text-slate-200 font-semibold">100% Inspected</span>
              </div>
              <div className="flex flex-col items-center border-x border-white/10">
                <Clock className="w-4 h-4 text-[#EE6C25] mb-1" />
                <span className="text-slate-200 font-semibold">Rapid Dispatch</span>
              </div>
              <div className="flex flex-col items-center">
                <Wrench className="w-4 h-4 text-[#EE6C25] mb-1" />
                <span className="text-slate-200 font-semibold">Operator Inc.</span>
              </div>
            </div>
          </div>

          {/* Right: Equipment Overview & Instant Action */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EE6C25]/15 text-[#F48A4E] text-xs font-bold uppercase tracking-wider mb-3">
                <MapPin className="w-3 h-3 text-[#EE6C25]" />
                Available in Visakhapatnam & Coastal AP
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                {equipment.name} Rental
              </h1>
            </div>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              {equipment.fullDescription}
            </p>

            {/* Popular Models Available */}
            <div className="p-4 rounded-xl bg-[#12223B] border border-white/10 space-y-2">
              <span className="text-xs font-bold text-[#F48A4E] uppercase tracking-wider block">
                Available Models & Capacity Options:
              </span>
              <div className="flex flex-wrap gap-2">
                {equipment.popularModels.map((mod) => (
                  <span
                    key={mod}
                    className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-slate-200"
                  >
                    {mod}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppQuoteUrl(equipment.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-xs sm:text-sm font-bold px-7 py-3.5"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Check Availability on WhatsApp</span>
              </a>

              <Link
                href="/#quote"
                className="btn-primary text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications & Applications Section */}
      <section className="py-12 bg-[#070E1A] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Technical Specifications Table */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <Wrench className="w-5 h-5 text-[#EE6C25]" />
                Technical Specifications & Performance
              </h2>
              <div className="rounded-xl overflow-hidden border border-white/10 bg-[#12223B]">
                <table className="w-full text-left text-xs sm:text-sm">
                  <tbody className="divide-y divide-white/10">
                    {equipment.specs.map((spec) => (
                      <tr key={spec.label} className="hover:bg-white/5 transition-colors">
                        <td className="py-3 px-4 font-medium text-slate-300 w-1/2">
                          {spec.label}
                        </td>
                        <td className="py-3 px-4 font-bold text-white w-1/2">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Applications & Features */}
            <div className="lg:col-span-5 space-y-6">
              {/* Applications */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-white tracking-tight">
                  Typical Project Applications
                </h2>
                <ul className="space-y-2">
                  {equipment.applications.map((app) => (
                    <li key={app} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#EE6C25] shrink-0 mt-0.5" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Rental Contract Terms */}
              {equipment.rentalTerms && (
                <div className="p-4 rounded-xl bg-[#12223B] border border-white/10 space-y-2">
                  <h3 className="text-xs font-bold text-[#F48A4E] uppercase tracking-wider">
                    Rental Terms & Delivery
                  </h3>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {equipment.rentalTerms.map((term) => (
                      <li key={term} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#EE6C25]" />
                        <span>{term}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Local Mobilization Note */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h3 className="text-2xl font-black text-white">
          Need {equipment.name} on site in Visakhapatnam?
        </h3>
        <p className="text-sm text-slate-300 max-w-xl mx-auto">
          Contact our dispatch team at <strong className="text-white">+91 93948 58999</strong> for immediate shift scheduling and contract terms.
        </p>
        <div className="pt-2">
          <Link href="/#quote" className="btn-primary text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-3.5">
            <span>Get Instant Rate Estimate</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
