export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  duration: string;
  iconName: string;
}

export const developmentProcess: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Business Scoping',
    tagline: 'Understand the business, workflows, and core objectives.',
    description: 'Every successful software project starts with a deep dive into your operational reality. We interview key stakeholders, analyze existing workflows, identify friction points, and specify functional requirements with zero ambiguity.',
    deliverables: [
      'Comprehensive Scope of Work (SOW)',
      'Operational Flowchart & Use-Case Mapping',
      'Technical Feasibility Assessment',
      'Project Milestone Schedule'
    ],
    duration: 'Week 1',
    iconName: 'SearchCheck'
  },
  {
    number: '02',
    title: 'Architecture & System Planning',
    tagline: 'Define database schemas, API contracts, and implementation strategy.',
    description: 'Before writing a single line of application code, we blueprint the system architecture. We model relational database entities, specify REST endpoints, choose secure authentication mechanisms, and outline asynchronous worker queues.',
    deliverables: [
      'Entity-Relationship Diagram (ERD)',
      'API Contract Specification',
      'Cloud & Infrastructure Architecture Blueprint',
      'Sprint & Delivery Roadmap'
    ],
    duration: 'Week 2',
    iconName: 'Boxes'
  },
  {
    number: '03',
    title: 'UI/UX Design & Prototyping',
    tagline: 'Create an intuitive, modern, conversion-focused user experience.',
    description: 'We translate operational requirements into elegant, high-contrast, accessible interfaces. We focus on ergonomic data entry, uncluttered visual hierarchy, clear call-to-actions, and effortless mobile usability.',
    deliverables: [
      'Wireframes & Interactive Flow Prototypes',
      'Tailwind Design Tokens & Component Specs',
      'Responsive Mobile & Desktop Mockups',
      'Client Review & Design Sign-off'
    ],
    duration: 'Weeks 2–3',
    iconName: 'Palette'
  },
  {
    number: '04',
    title: 'Agile Engineering & Development',
    tagline: 'Build the application using scalable, modern, type-safe technologies.',
    description: 'Our engineering team executes in focused weekly iterations. We write clean, modular TypeScript on the frontend and hardened Python/Django services on the backend, conducting peer code reviews on every merge.',
    deliverables: [
      'Modular React Frontend Architecture',
      'Hardened Django REST API Endpoints',
      'PostgreSQL Relational Storage & Indexing',
      'Weekly Staging Environment Demo Builds'
    ],
    duration: 'Weeks 4–8',
    iconName: 'Terminal'
  },
  {
    number: '05',
    title: 'Rigorous Testing & Security Hardening',
    tagline: 'Test functionality, role security, performance, and cross-browser responsiveness.',
    description: 'We treat quality assurance as an engineering discipline. We test role boundaries, sanitize API inputs against vulnerabilities, audit database query efficiency, and benchmark page performance across modern devices.',
    deliverables: [
      'Automated API & Unit Test Verification',
      'Role-Based Permission Security Audit',
      'Cross-Browser & Device Responsiveness Check',
      'Lighthouse & Core Web Vitals Optimization'
    ],
    duration: 'Weeks 8–9',
    iconName: 'ShieldAlert'
  },
  {
    number: '06',
    title: 'Production Launch & Continuous Support',
    tagline: 'Deploy to high-uptime cloud infrastructure and provide long-term care.',
    description: 'We manage the entire production rollout: configuring Linux virtual servers, SSL certificates, Nginx reverse proxies, and automated database backup schedules. Following launch, we partner for maintenance, monitoring, and feature expansion.',
    deliverables: [
      'Production Cloud Infrastructure Setup',
      'Automated CI/CD Push-to-Deploy Pipelines',
      'Daily Automated Off-Site Backups',
      'Dedicated SLA Maintenance & Warranty Period'
    ],
    duration: 'Week 10 & Ongoing',
    iconName: 'Rocket'
  }
];
