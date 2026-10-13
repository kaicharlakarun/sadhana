export interface ClientLogo {
  id: string;
  logo: string; // Place your image files in /public/images/clients/ (e.g. "/images/clients/client-1.png")
  alt?: string;
}

/**
 * CLIENT LOGOS DIRECTORY
 * Place your client logo image files in `public/images/clients/`
 * Add new entries as you add more logos (client-4.png, client-5.png, etc.)
 */
export const clientLogos: ClientLogo[] = [
  { id: "1", logo: "/images/clients/client-1.png", alt: "Aditya Birla Hindalco" },
  { id: "2", logo: "/images/clients/client-2.png", alt: "Tata" },
  { id: "3", logo: "/images/clients/client-3.png", alt: "Amara Raja" },
  { id: "4", logo: "/images/clients/client-4.png", alt: "UltraTech Cement" },
  { id: "5", logo: "/images/clients/client-5.png", alt: "MEIL" },
  { id: "6", logo: "/images/clients/client-6.png", alt: "Client Logo 6" },
  { id: "7", logo: "/images/clients/client-7.png", alt: "Client Logo 7" },
  { id: "8", logo: "/images/clients/client-8.png", alt: "Client Logo 8" },
  { id: "9", logo: "/images/clients/client-9.png", alt: "Client Logo 9" },
  { id: "10", logo: "/images/clients/client-10.png", alt: "Client Logo 10" },
  { id: "11", logo: "/images/clients/client-11.png", alt: "Client Logo 11" },
  { id: "12", logo: "/images/clients/client-12.png", alt: "Client Logo 12" },
  { id: "13", logo: "/images/clients/client-13.png", alt: "Client Logo 13" },
  { id: "14", logo: "/images/clients/client-14.png", alt: "Client Logo 14" },
  { id: "15", logo: "/images/clients/client-15.png", alt: "Client Logo 15" },
  { id: "16", logo: "/images/clients/client-16.png", alt: "Client Logo 16" },
];

export const clientLogosRow1 = clientLogos;
export const clientLogosRow2 = clientLogos;
