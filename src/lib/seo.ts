import { siteConfig } from "@/config/site";
import { siteFaqs } from "@/data/faqs";
import { equipmentFleet } from "@/data/equipment";

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: "Sadhana RR Enterprises - Crane & Boom Lift Rental Services",
    description:
      "Best Crane & Boom Lift Rental Services in India & Vizag (Visakhapatnam). Heavy mobile cranes (50T-300T), crawler cranes, articulated boom lifts, truck-mounted sky lifts, Farana hydras, scissor lifts, and heavy trailers.",
    publisher: {
      "@id": `${siteConfig.url}/#business`,
    },
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/equipment?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "GeneralContractor", "RentalCarReservation"],
    "@id": `${siteConfig.url}/#business`,
    name: "Sadhana RR Enterprises - Best Crane & Boom Lift Rental Services in India & Vizag",
    legalName: siteConfig.legalName,
    alternateName: [
      "Sadhana RR Enterprises",
      "Best Crane Services in Vizag",
      "Best Crane Services in India",
      "Best Boomlift Services in Vizag",
      "Services of Boomlift in India",
      "Best Scissor Lift Services in Vizag",
      "Scissor Lift Rental in India",
      "Best Hydra Crane Services in Vizag",
      "Pick and Carry Crane Rental India",
      "Truck Mounted Boom Lift Rental India",
      "Best Sky Lift Services in Vizag",
      "Low Bed Trailer Rental India",
      "Industrial Forklift Rental Vizag",
      "Crawler Crane Rental Services India",
      "Crane Rental Visakhapatnam",
      "Sadhana Crane Rental India",
      "Sadhana Heavy Lift & Machinery Rentals",
    ],
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    image: `${siteConfig.url}/images/hero-fleet-cinematic.jpg`,
    description:
      "India & Vizag's premier heavy equipment rental service. Providing the best crane services in Vizag and throughout India (50T–300T telescopic cranes, crawler cranes up to 500T), premier services of boomlift in India (45ft–150ft manlifts & 18m–70m truck sky lifts), Farana pick & carry cranes (12T–30T), electric & diesel scissor lifts (19ft–60ft), low bed multi-axle heavy trailers (30T–250T), and industrial forklifts (3T–25T) with 24/7 certified operators across all Indian industrial zones.",
    telephone: siteConfig.contact.primaryPhone,
    email: siteConfig.contact.primaryEmail,
    priceRange: "₹₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Bank Transfer, Cheque, UPI, Cash",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.contact.address.street}, ${siteConfig.contact.address.colony}`,
      addressLocality: siteConfig.contact.address.area,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 17.7740114,
      longitude: 83.2153281,
    },
    hasMap: siteConfig.contact.googleMapsLink,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "148",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "R. K. Verma",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Best crane services in Vizag and Andhra Pradesh. Mobilized 150T mobile telescopic crane and 3 hydra cranes for highway bridge girder launching on time.",
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "S. Venkat Reddy",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Highest quality boom lift services in India. Hired 80ft and 120ft articulated boom lifts for factory painting and piping shutdown at Visakhapatnam refinery.",
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "M. Rajeshwar Rao",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Best crane, hydra, and scissor lift hire company near me in Gajuwaka Vizag. Fast 1-hour site dispatch with certified operators.",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    areaServed: [
      // Pan-India & States
      { "@type": "Country", name: "India" },
      { "@type": "AdministrativeArea", name: "Pan-India" },
      { "@type": "AdministrativeArea", name: "Andhra Pradesh" },
      { "@type": "AdministrativeArea", name: "Telangana" },
      { "@type": "AdministrativeArea", name: "Odisha" },
      { "@type": "AdministrativeArea", name: "Tamil Nadu" },
      { "@type": "AdministrativeArea", name: "Karnataka" },
      { "@type": "AdministrativeArea", name: "Maharashtra" },
      { "@type": "AdministrativeArea", name: "Gujarat" },
      { "@type": "AdministrativeArea", name: "Chhattisgarh" },
      { "@type": "AdministrativeArea", name: "West Bengal" },
      { "@type": "AdministrativeArea", name: "Rajasthan" },
      { "@type": "AdministrativeArea", name: "Uttar Pradesh" },
      // Core Metropolitan & Industrial Corridors Across India
      { "@type": "City", name: "Visakhapatnam (Vizag)" },
      { "@type": "City", name: "Hyderabad" },
      { "@type": "City", name: "Chennai" },
      { "@type": "City", name: "Bhubaneswar" },
      { "@type": "City", name: "Bengaluru" },
      { "@type": "City", name: "Vijayawada" },
      { "@type": "City", name: "Kakinada" },
      { "@type": "Place", name: "Dahej & Hazira Industrial SEZ, Gujarat" },
      { "@type": "Place", name: "Sanand & Mundra Industrial Zones, Gujarat" },
      { "@type": "Place", name: "Pune & Chakan Automotive Belt, Maharashtra" },
      { "@type": "Place", name: "Sri City Integrated Business City, Andhra Pradesh" },
      { "@type": "Place", name: "Oragadam & Sriperumbudur Industrial Corridors, Tamil Nadu" },
      { "@type": "Place", name: "Paradeep & Angul Steel Corridors, Odisha" },
      { "@type": "Place", name: "Bhilai & Raipur Industrial Zone, Chhattisgarh" },
      // Hyper-Local Vizag Neighborhoods & Industrial SEZs
      { "@type": "Place", name: "Gajuwaka, Visakhapatnam" },
      { "@type": "Place", name: "Parawada Pharma City, Visakhapatnam" },
      { "@type": "Place", name: "Auto Nagar, Visakhapatnam" },
      { "@type": "Place", name: "Atchutapuram SEZ, Visakhapatnam" },
      { "@type": "Place", name: "Visakhapatnam Steel Plant (RINL)" },
      { "@type": "Place", name: "Gangavaram Port, Visakhapatnam" },
      { "@type": "Place", name: "Visakhapatnam Port Trust (VPT)" },
      { "@type": "Place", name: "Madhurawada IT SEZ, Visakhapatnam" },
      { "@type": "Place", name: "Vepagunta, Visakhapatnam" },
      { "@type": "Place", name: "Anakapalli, Visakhapatnam" },
      { "@type": "Place", name: "Pendurthi, Visakhapatnam" },
      { "@type": "Place", name: "Kurmannapalem, Visakhapatnam" },
      { "@type": "Place", name: "Sheela Nagar, Visakhapatnam" },
      { "@type": "Place", name: "Simhadri NTPC, Visakhapatnam" },
    ],
    knowsAbout: [
      // 1. Mobile Cranes Target Queries
      "Best Cranes Services in Vizag",
      "Best Crane Services in India",
      "Crane Services in Visakhapatnam",
      "Crane Rental Services Near Me",
      "Heavy Telescopic Mobile Crane Rental 50 Ton to 300 Ton",
      "All-Terrain Mobile Crane Hire India",
      "Crane Rental Rates Per Day in Vizag",

      // 2. Boom Lifts Target Queries
      "Best Boomlift Services in Vizag",
      "Services of Boomlift in India",
      "Boom Lift Rental Services in India",
      "Boom Lift Hire Near Me",
      "Self-Propelled Articulated Boom Lift Rental 45ft to 150ft",
      "Straight Telescopic Manlift Rental India",
      "Boom Lift Rental Charges Per Month in India",

      // 3. Truck-Mounted Boom Lifts & Sky Lifts
      "Truck Mounted Boom Lift Rental in India",
      "Services of Truck Mounted Boom Lift in India",
      "Best Sky Lift Services in Vizag",
      "Sky Lift Rental Vizag",
      "Sky Lift Hire Near Me",
      "Truck Mounted Sky Lift Rental 18m to 70m",
      "High Altitude Aerial Platform Vehicle Hire India",

      // 4. Pick & Carry Hydra & Farana Cranes
      "Pick and Carry Crane Rental in India",
      "Hydra Crane Services in India",
      "Best Hydra Crane Services in Vizag",
      "Farana Crane Rental Vizag",
      "Hydra Crane Near Me",
      "Pick and Carry Hydra Crane Farana 12T to 30T",
      "Mobile Crane Hydra Rental Rates in Vizag",

      // 5. Scissor Lifts Target Queries
      "Best Scissor Lift Services in Vizag",
      "Scissor Lift Rental Services in India",
      "Services of Scissor Lift in India",
      "Electric Scissor Lift Rental 19ft to 60ft",
      "Rough Terrain Diesel Scissor Lift Rental",
      "Warehouse Scissor Lift Hire Near Me",
      "Scissor Lift Rental Charges Per Month India",

      // 6. Heavy Trailers & Transport
      "Low Bed Trailer Rental in India",
      "Multi-Axle Modular Trailer Rental India",
      "Heavy Trailer Rental Vizag",
      "Heavy Machinery Transport Near Me",
      "Over-Dimensional Cargo ODC Transport India",
      "Semi-Low Bed Machinery Carrier Rental",

      // 7. Industrial Forklifts
      "Best Forklift Services in Vizag",
      "Industrial Forklift Rental in India",
      "Diesel Forklift Rental Near Me",
      "Heavy Duty Industrial Forklift 3T to 25T",
      "Electric Warehouse Forklift Hire Vizag",

      // 8. Crawler Cranes
      "Crawler Crane Rental Services in India",
      "Crawler Crane Hire Vizag",
      "Hydraulic Lattice Crawler Crane Rental India 50T to 500T",
      "Lattice Boom Crane for Port and Marine Piling",

      // Localized Vizag Industrial Corridors
      "Crane Rental Gajuwaka Vizag",
      "Boom Lift Hire Parawada Pharma City",
      "Crane Service Autonagar Visakhapatnam",
      "Heavy Lift Steel Plant Gangavaram Port",
      "Machinery Rental Atchutapuram SEZ",

      // Commercial Operations
      "Heavy Lift Erection & Structural Rigging Contractors",
      "Certified Crane Operators and Riggers in India",
      "Industrial Plant Machinery Erection & Shutdown Maintenance",
    ],
    sameAs: [
      siteConfig.socialLinks.facebook,
      siteConfig.socialLinks.instagram,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "All-India & Vizag Heavy Equipment Rental Services",
      itemListElement: equipmentFleet.map((item, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `${item.name} Rental Services in India & Vizag`,
          description: item.shortDescription,
          url: `${siteConfig.url}/equipment/${item.slug}`,
          areaServed: "India, Visakhapatnam, Andhra Pradesh, All Industrial Zones",
        },
        position: index + 1,
      })),
    },
  };
}

export function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteConfig.url}${item.url}`,
    })),
  };
}

export function generateServiceSchema(serviceName: string, description: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: description,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.contact.primaryPhone,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.contact.address.city,
        addressRegion: siteConfig.contact.address.state,
        addressCountry: "IN",
      },
    },
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "AdministrativeArea", name: "Pan-India" },
      { "@type": "AdministrativeArea", name: "Andhra Pradesh" },
      { "@type": "City", name: "Visakhapatnam (Vizag)" },
      { "@type": "Place", name: "Gajuwaka" },
      { "@type": "Place", name: "Parawada" },
      { "@type": "Place", name: "Autonagar" },
    ],
    url: `${siteConfig.url}/equipment/${slug}`,
  };
}
