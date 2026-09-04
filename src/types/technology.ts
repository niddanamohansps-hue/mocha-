export interface TechnologyItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Infrastructure' | 'Tools & DevOps' | 'AI & Automation';
  description: string;
  roleInStack: string;
  tags: string[];
  featured?: boolean;
}

export interface TechnologyCategory {
  title: string;
  description: string;
  iconName: string;
  technologies: TechnologyItem[];
}
