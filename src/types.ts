export interface ServicePillar {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  bullets: string[];
  visualFocusDesc: string;
  imageSrc: string;
  accentColor: string;
  badgeText: string;
  highlights: {
    label: string;
    value: string;
  }[];
  deliverables: string[];
}

export interface AdCopySectionData {
  section: string;
  content: string;
  visualFocus: string;
  details: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  displayPhone: string;
  companyName: string;
  tagline: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  serviceCategory: string;
  projectBrief: string;
  budgetRange?: string;
  timeline?: string;
}
