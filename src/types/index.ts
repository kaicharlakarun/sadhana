export type EquipmentCategorySlug =
  | "cranes"
  | "crawlers"
  | "boomlifts"
  | "truckmounted-boomlift"
  | "pick-and-carry"
  | "scissor-lifts"
  | "trailers"
  | "forklifts";

export interface EquipmentSpec {
  label: string;
  value: string;
}

export interface EquipmentItem {
  id: string;
  slug: string;
  name: string;
  category: EquipmentCategorySlug;
  categoryName: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  imageAlt: string;
  popularModels: string[];
  specs: EquipmentSpec[];
  applications: string[];
  keyFeatures: string[];
  rentalTerms?: string[];
  featured?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: "rental" | "equipment" | "pricing" | "coverage";
}

export interface IndustryApplication {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  suitableEquipment: string[];
  keyBenefits: string[];
}

export interface ServiceAreaInfo {
  name: string;
  slug: string;
  description: string;
  responseTime: string;
  commonProjects: string[];
  coverageKeywords: string[];
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email?: string;
  company?: string;
  projectLocation: string;
  equipmentRequired: string;
  rentalDuration: string;
  message?: string;
}
