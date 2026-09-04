export type BudgetOption =
  | 'Under ₹25,000'
  | '₹25,000–₹50,000'
  | '₹50,000–₹1,00,000'
  | '₹1,00,000+'
  | "Let's Discuss";

export type BusinessTypeOption =
  | 'Startup'
  | 'Small / Medium Business (SME)'
  | 'School / Educational Institution'
  | 'Recruitment Firm'
  | 'Clinic / Healthcare'
  | 'Real Estate'
  | 'Local Business'
  | 'Enterprise / Growing Company';

export type ProjectTypeOption =
  | 'Custom Web Application'
  | 'Business Management System / ERP'
  | 'CRM Platform'
  | 'Professional Website'
  | 'AI Integration & LLM Systems'
  | 'Business Workflow Automation'
  | 'WhatsApp Business Automation'
  | 'API & Cloud Infrastructure';

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  businessType: BusinessTypeOption | '';
  projectType: ProjectTypeOption | '';
  estimatedBudget: BudgetOption | '';
  projectDescription: string;
  honeypot?: string; // Anti-spam bot field
}

export interface ContactFormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  companyName?: string;
  businessType?: string;
  projectType?: string;
  estimatedBudget?: string;
  projectDescription?: string;
}
