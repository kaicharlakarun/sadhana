export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  url: string;
  primaryMarket: string;
  state: string;
  country: string;
  businessHours: string;
  leadership: {
    name: string;
    title: string;
  };
  contact: {
    primaryPhone: string;
    primaryPhoneFormatted: string;
    secondaryPhone: string;
    secondaryPhoneFormatted: string;
    whatsappNumber: string;
    whatsappFormatted: string;
    primaryEmail: string;
    secondaryEmail: string;
    address: {
      street: string;
      colony: string;
      area: string;
      city: string;
      state: string;
      postalCode: string;
      country: string;
      full: string;
    };
    googleMapsEmbedUrl: string;
    googleMapsLink: string;
  };
  socialLinks: {
    facebook: string;
    instagram: string;
    whatsapp: string;
  };
  trustMetrics: {
    label: string;
    value: string;
    sublabel: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Sadhana RR Enterprises",
  legalName: "Sadhana RR Enterprises",
  tagline: "Lifting Power, Moving Progress | All-India Crane & Heavy Construction Equipment Rentals",
  description:
    "Leading All-India heavy crane rental and construction machinery hire service. Lifting Power, Moving Progress — Certified mobile cranes, hydraulic telescopic cranes, crawler cranes, Farana hydras, JCB backhoes, excavators with rock breakers, and boom lifts for infrastructure, industrial plants, energy sectors, and construction projects across India.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://sadhanarr.com",
  primaryMarket: "India (Pan-India)",
  state: "Andhra Pradesh",
  country: "India",
  businessHours: "24/7 Pan-India Site Dispatch & Emergency Heavy Lift Support",
  leadership: {
    name: "Mr. K. Vijay Raj Kumar",
    title: "Business Head",
  },
  contact: {
    primaryPhone: "+919394858999",
    primaryPhoneFormatted: "+91 93948 58999",
    secondaryPhone: "+919556205398",
    secondaryPhoneFormatted: "+91 95562 05398",
    whatsappNumber: "919394858999",
    whatsappFormatted: "+91 93948 58999",
    primaryEmail: "hello@sadhanarr.com",
    secondaryEmail: "sadhanarrenterprises@gmail.com",
    address: {
      street: "Door No: 4-228",
      colony: "B.C. Colony",
      area: "Vepagunta",
      city: "Visakhapatnam",
      state: "Andhra Pradesh",
      postalCode: "530047",
      country: "India",
      full: "Door No: 4-228, B.C. Colony, Vepagunta, Visakhapatnam, Andhra Pradesh – 530047, India",
    },
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.376129132146!2d83.2153281!3d17.774011400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a396700647a5ac9%3A0xf64976367f2f6c72!2sSadhana%20RR%20Enterprises%20%7C%20Construction%20Equipment%20Rentals%20in%20Visakhapatnam!5e0!3m2!1sen!2sin!4v1780723828798!5m2!1sen!2sin",
    googleMapsLink:
      "https://maps.google.com/?q=Sadhana+RR+Enterprises+Vepagunta+Visakhapatnam",
  },
  socialLinks: {
    facebook: "https://www.facebook.com/sadhanarrenterprises",
    instagram: "https://www.instagram.com/sadhanarrenterprises",
    whatsapp: "https://wa.me/919394858999",
  },
  trustMetrics: [
    {
      label: "Fleet Availability",
      value: "100%",
      sublabel: "Safety-inspected & certified fleet",
    },
    {
      label: "Nationwide Dispatch",
      value: "24/7",
      sublabel: "Rapid mobilization across India",
    },
    {
      label: "Projects Powered",
      value: "500+",
      sublabel: "Pan-India infrastructure & plants",
    },
    {
      label: "Service Coverage",
      value: "All India",
      sublabel: "HQ Hub in Visakhapatnam",
    },
  ],
};

export function getWhatsAppQuoteUrl(equipmentName?: string, customMessage?: string): string {
  const number = siteConfig.contact.whatsappNumber;
  let text = `Hello Sadhana RR Enterprises, I am enquiring about crane and heavy construction equipment rental.`;
  if (equipmentName) {
    text = `Hello Sadhana RR Enterprises, I am looking to rent: *${equipmentName}* for our project. Please share availability, rates, and nationwide mobilization details.`;
  }
  if (customMessage) {
    text = customMessage;
  }
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
