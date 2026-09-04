export interface NavItem {
  title: string;
  href: string;
  description?: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  subTagline: string;
  valueProposition: string;
  description: string;
  url: string;
  ogImage: string;
  contact: {
    email: string;
    phone: string;
    displayPhone: string;
    location: string;
    workingHours: string;
  };
  links: {
    github: string;
    linkedin: string;
    twitter: string;
  };
  webhookUrl?: string;
  mainNav: NavItem[];
  footerNav: {
    solutions: NavItem[];
    company: NavItem[];
    resources: NavItem[];
    legal: NavItem[];
  };
  cta: {
    primary: string;
    secondary: string;
    navbar: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Nexora Technologies",
  shortName: "Nexora",
  tagline: "We Build Digital Solutions That Help Businesses Grow.",
  subTagline: "You focus on your business. We build the technology.",
  valueProposition: "From professional websites to powerful business management systems and AI-powered automation, we engineer software designed to help ambitious businesses scale.",
  description: "Enterprise-grade digital agency specializing in custom web applications, business automation, CRM systems, and AI integration for growing companies.",
  url: "https://nexoratech.com",
  ogImage: "/og-preview.png",
  contact: {
    email: "contact@nexoratech.com",
    phone: "+919876543210",
    displayPhone: "+91 98765 43210",
    location: "India (Serving Clients Worldwide)",
    workingHours: "Mon - Sat: 9:00 AM - 7:00 PM IST",
  },
  links: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  cta: {
    primary: "Let's Build Your Project",
    secondary: "View Our Work",
    navbar: "Start a Project",
  },
  mainNav: [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "Projects", href: "/projects" },
    { title: "Estimator", href: "/estimator" },
    { title: "About", href: "/about" },
    { title: "Technologies", href: "/technologies" },
    { title: "Process", href: "/process" },
    { title: "Contact", href: "/contact" },
  ],
  footerNav: {
    solutions: [
      { title: "Web Applications", href: "/services#custom-web-apps" },
      { title: "Business Systems & CRM", href: "/services#business-systems" },
      { title: "AI Integration", href: "/services#ai-integration" },
      { title: "Workflow Automation", href: "/services#automation" },
      { title: "WhatsApp Business Automation", href: "/services#whatsapp-automation" },
      { title: "Cloud Architecture & APIs", href: "/services#cloud-apis" },
    ],
    company: [
      { title: "About Our Agency", href: "/about" },
      { title: "Flagship Projects", href: "/projects" },
      { title: "Engineering Process", href: "/process" },
      { title: "Tech Stack", href: "/technologies" },
      { title: "Contact & Scoping", href: "/contact" },
    ],
    resources: [
      { title: "Client Discovery Guide", href: "/process" },
      { title: "System Architecture Blueprints", href: "/projects" },
      { title: "Technology Standards", href: "/technologies" },
    ],
    legal: [
      { title: "Privacy Policy", href: "/privacy-policy" },
      { title: "Terms & Conditions", href: "/terms-and-conditions" },
    ],
  },
};
