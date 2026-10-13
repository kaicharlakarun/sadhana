import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomBar } from "@/components/layout/MobileBottomBar";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollAnimationObserver } from "@/components/ui/ScrollAnimationObserver";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { siteConfig } from "@/config/site";
import { generateLocalBusinessSchema, generateWebSiteSchema } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A1322",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Best Crane & Boom Lift Rental Services in Vizag & India | Sadhana RR Enterprises",
    template: "%s | Sadhana RR Enterprises",
  },
  description:
    "Top-rated heavy equipment rental in Vizag & India. Best crane services in Vizag & India (50T–300T mobile cranes, crawler cranes to 500T), services of boomlift in India (45ft–150ft manlifts & 18m–70m sky lifts), Farana hydra cranes (12T–30T), electric & diesel scissor lifts (19ft–60ft), low bed heavy trailers, and industrial forklifts across Indian industrial zones.",
  keywords: [
    // Mobile Cranes & Crawlers
    "Best Cranes Services in Vizag",
    "Best Crane Services in India",
    "Crane Services in Vizag",
    "Crane Rental Near Me",
    "Mobile Crane Hire Visakhapatnam",
    "Crawler Crane Rental India",
    "Crawler Crane Hire Vizag",

    // Boom Lifts & High-Reach Manlifts
    "Best Boomlift Services in Vizag",
    "Services of Boomlift in India",
    "Boom Lift Services in India",
    "Boom Lift Rental Visakhapatnam",
    "Boom Lift Rental Near Me",
    "Articulated Boom Lift Rental",

    // Truck-Mounted Sky Lifts
    "Truck Mounted Boom Lift Rental India",
    "Best Sky Lift Services in Vizag",
    "Sky Lift Rental Vizag",
    "Sky Lift Hire Near Me",

    // Pick & Carry Hydra & Farana Cranes
    "Pick and Carry Crane Rental India",
    "Hydra Crane Services in India",
    "Best Hydra Crane Services in Vizag",
    "Farana Hydra Crane Rental Vizag",
    "Hydra Crane Near Me",

    // Scissor Lifts
    "Best Scissor Lift Services in Vizag",
    "Scissor Lift Rental Services India",
    "Services of Scissor Lift in India",
    "Scissor Lift Rental Vizag",
    "Electric Scissor Lift Rental",
    "Scissor Lift Near Me",

    // Heavy Haulage Trailers
    "Low Bed Trailer Rental India",
    "Multi-Axle Modular Trailer Rental India",
    "Heavy Trailer Rental Vizag",
    "Heavy Machinery Transport Near Me",

    // Industrial Forklifts
    "Best Forklift Services in Vizag",
    "Forklift Rental Services India",
    "Diesel Forklift Rental Near Me",
    "Forklift Rental Visakhapatnam",

    // Industrial Hubs & Branding
    "Crane Rental Gajuwaka Vizag",
    "Boom Lift Hire Parawada",
    "Crane Service Autonagar Visakhapatnam",
    "Heavy Equipment Rental Andhra Pradesh",
    "Sadhana RR Enterprises",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: "Best Crane & Boom Lift Rental Services in Vizag & India | Sadhana RR",
    description:
      "Premier heavy lifting & access equipment rental. Certified mobile cranes (50T–300T), crawler cranes, articulated boom lifts, truck-mounted sky lifts, and Farana cranes across Vizag and Pan-India.",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/hero-fleet-cinematic.jpg",
        width: 1200,
        height: 630,
        alt: "Sadhana RR Enterprises - Best Crane and Boom Lift Rental Services in Vizag and India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Crane & Boom Lift Rental Services in Vizag & India",
    description:
      "24/7 heavy crane, boom lift, crawler, and hydra rental services serving Vizag, Andhra Pradesh, and Pan-India with certified operators.",
    images: ["/images/hero-fleet-cinematic.jpg"],
  },
  icons: {
    icon: [
      { url: "/images/logo.png", type: "image/png" },
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = generateLocalBusinessSchema();
  const webSiteSchema = generateWebSiteSchema();

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#0A1322] text-slate-100 antialiased flex flex-col justify-between selection:bg-[#EE6C25] selection:text-white"
      >
        <CustomCursor />
        <ScrollAnimationObserver />
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
