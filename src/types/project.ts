export interface ArchitectureNode {
  layer: string;
  name: string;
  description: string;
  technologies: string[];
}

export interface ProjectFeature {
  title: string;
  description: string;
  iconName?: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  badge: string;
  shortDescription: string;
  fullDescription: string;
  industry: string;
  timeline: string;
  deliverableType: 'Flagship Platform' | 'Enterprise Solution' | 'AI Product' | 'SaaS Blueprint';
  featured: boolean;
  technologies: string[];
  challenge: string;
  solution: string;
  features: ProjectFeature[];
  architecture: {
    overview: string;
    flow: ArchitectureNode[];
  };
  capabilities: string[];
  interfaceHighlights: {
    title: string;
    description: string;
    highlightTag: string;
  }[];
}
