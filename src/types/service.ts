export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  iconName: string;
  category: 'web' | 'systems' | 'ai' | 'automation' | 'cloud';
  benefits: ServiceBenefit[];
  deliverables: string[];
  techStack: string[];
}
