import type { ServicePillar, ContactInfo, AdCopySectionData } from '../types';
import logoImg from '../assets/images/corporate_tech_logo_1789662395910.jpg';
import iotImg from '../assets/images/iot_robotics_arm_1789662412250.jpg';
import webImg from '../assets/images/web_uiux_mockups_1789662424564.jpg';
import designImg from '../assets/images/design_ads_growth_1789662437784.jpg';

export const COMPANY_CONTACT: ContactInfo = {
  companyName: 'B.E Solutions & Technologies',
  tagline: 'Engineering Innovation. Building Digital Growth.',
  email: 'eshvel2006@gmail.com',
  phone: '+917305813506',
  displayPhone: '+91 7305813506',
};

export const LOGO_ASSET = logoImg;

export const AD_COPY_TABLE: AdCopySectionData[] = [
  {
    section: 'Header',
    content: 'B.E Solutions & Technologies — Engineering Innovation. Building Digital Growth.',
    visualFocus: 'Minimalist corporate logo combining hardware circuits and digital signal waves',
    details: [
      'Corporate Identity & Vision Statement',
      'Dual-domain excellence: Hardware Engineering & Digital Growth',
      'Integrated end-to-end technology solutions',
    ],
  },
  {
    section: 'IoT & Robotics',
    content: 'Hardware & Embedded Solutions',
    visualFocus: 'Modern robotic arm assembling smart microcontrollers and circuit boards',
    details: [
      'Custom IoT & Embedded System Design',
      'Hardware Prototype Building',
      'Academic & Enterprise Tech Projects',
    ],
  },
  {
    section: 'Web & UI/UX',
    content: 'Digital Web Experiences',
    visualFocus: 'Modern laptop and mobile mockups demonstrating sleek interface layouts',
    details: [
      'Full-Stack Website Building & Maintenance',
      'Custom UI/UX Page Design',
      'Fully Responsive Web Applications',
    ],
  },
  {
    section: 'Design & Ads',
    content: 'Branding & Marketing Studio',
    visualFocus: 'Design canvas tools merged with dynamic growth analytics charts',
    details: [
      'Logo & Complete Brand Identity Design',
      'High-Impact Posters & Creatives',
      'Targeted Social Media Ad Campaigns',
    ],
  },
  {
    section: 'Contact / CTA',
    content: 'Ready to build your next hardware project or digital campaign?',
    visualFocus: 'Direct actionable contact gateway with email & phone channels',
    details: [
      'Email: eshvel2006@gmail.com',
      'Phone: +91 7305813506',
      'Rapid Turnaround & Consultations',
    ],
  },
];

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'iot-robotics',
    category: 'IoT & Robotics',
    title: 'Hardware & Embedded Solutions',
    subtitle: 'Precision engineering from schematic blueprints to functional physical prototypes and intelligent embedded firmware.',
    bullets: [
      'Custom IoT & Embedded System Design',
      'Hardware Prototype Building',
      'Academic & Enterprise Tech Projects',
    ],
    visualFocusDesc: 'Modern robotic arm assembling smart microcontrollers and circuit boards',
    imageSrc: iotImg,
    accentColor: 'cyan',
    badgeText: 'Hardware Engineering',
    highlights: [
      { label: 'Prototypes Built', value: '50+ Lab Tested' },
      { label: 'Microcontrollers', value: 'ESP32 / ARM / STM32' },
      { label: 'Domain Scope', value: 'Industrial & Academic' },
    ],
    deliverables: [
      'Schematic & PCB Layouts (Gerber Files)',
      'Firmware Architecture & Sensor Integration',
      'Enclosure Modeling & Physical Assembly Testing',
      'Complete Technical Documentation & Walkthroughs',
    ],
  },
  {
    id: 'web-uiux',
    category: 'Web & UI/UX',
    title: 'Digital Web Experiences',
    subtitle: 'High-performance digital products engineered with modern frameworks, pixel-perfect design systems, and responsive architectures.',
    bullets: [
      'Full-Stack Website Building & Maintenance',
      'Custom UI/UX Page Design',
      'Fully Responsive Web Applications',
    ],
    visualFocusDesc: 'Modern laptop and mobile mockups demonstrating sleek interface layouts',
    imageSrc: webImg,
    accentColor: 'blue',
    badgeText: 'Software & Interfaces',
    highlights: [
      { label: 'Performance', value: '98+ Lighthouse Score' },
      { label: 'Responsive', value: 'Mobile / Tablet / Desktop' },
      { label: 'Tech Stack', value: 'React / Next / Node / TS' },
    ],
    deliverables: [
      'Custom Figma / Wireframe Design Systems',
      'Full-Stack Modern Web Applications & Portals',
      'SEO Optimization & Lightning Fast Cloud Deployments',
      'Ongoing Security Maintenance & Version Updates',
    ],
  },
  {
    id: 'design-ads',
    category: 'Design & Ads',
    title: 'Branding & Marketing Studio',
    subtitle: 'Memorable brand identity design coupled with data-driven social ad campaigns that convert curiosity into loyal customers.',
    bullets: [
      'Logo & Complete Brand Identity Design',
      'High-Impact Posters & Creatives',
      'Targeted Social Media Ad Campaigns',
    ],
    visualFocusDesc: 'Design canvas tools merged with dynamic growth analytics charts',
    imageSrc: designImg,
    accentColor: 'emerald',
    badgeText: 'Creative & Growth',
    highlights: [
      { label: 'Ad Creatives', value: 'Multi-Format Vector Assets' },
      { label: 'Targeting', value: 'Conversion-Focused Ad Copy' },
      { label: 'Identity', value: 'Comprehensive Brand Kit' },
    ],
    deliverables: [
      'Vector Logo Suite & Typography / Palette Standards',
      'Print & Digital Ready Promotional Graphics / Posters',
      'A/B Tested Ad Creatives & Video / Carousel Templates',
      'Audience Funneling & Social Campaign Strategy',
    ],
  },
];
