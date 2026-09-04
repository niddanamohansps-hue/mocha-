import { ServiceItem } from '../types/service';

export const servicesData: ServiceItem[] = [
  {
    id: 'web-development',
    title: 'Website Development',
    shortDescription: 'Professional, high-performance, and responsive websites engineered for modern businesses.',
    detailedDescription: 'We design and construct fast, accessible, and search-optimized web platforms that represent your brand with authority. Every website is built with clean semantics, swift load times, and seamless mobile responsiveness.',
    iconName: 'Globe',
    category: 'web',
    benefits: [
      {
        title: 'Ultra-Fast Load Speeds',
        description: 'Sub-second page rendering and optimized Core Web Vitals to elevate user retention and search rankings.'
      },
      {
        title: 'Conversion-Focused UX',
        description: 'Intuitive layouts and clear call-to-actions specifically mapped to turn visitors into qualified inquiries.'
      },
      {
        title: 'Responsive & Accessible',
        description: 'Flawless presentation across phones, tablets, laptops, and ultra-wide screens following WCAG standards.'
      }
    ],
    deliverables: [
      'Corporate & Brand Websites',
      'High-Conversion Landing Pages',
      'Educational Institution Portals',
      'CMS Integration (Headless / Self-hosted)',
      'Technical SEO & Performance Hardening'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Next.js']
  },
  {
    id: 'custom-web-applications',
    title: 'Custom Web Applications',
    shortDescription: 'Tailored software platforms built precisely around your operational workflows.',
    detailedDescription: 'Off-the-shelf software often forces businesses to compromise. We engineer bespoke, scalable web applications with modular frontends and resilient backends designed for your specific operational logic.',
    iconName: 'Code2',
    category: 'web',
    benefits: [
      {
        title: '100% Tailored Workflows',
        description: 'Software molded to match how your team actually works, eliminating cumbersome workarounds.'
      },
      {
        title: 'Enterprise Role Security',
        description: 'Granular permissions, multi-tenant structures, and audit logs keeping sensitive data strictly governed.'
      },
      {
        title: 'Scalable Architecture',
        description: 'Built with microservices or modular monolith patterns ready to handle exponential data growth.'
      }
    ],
    deliverables: [
      'Customer Portals & Client Dashboards',
      'Multi-Role SaaS Platforms',
      'B2B Vendor Management Systems',
      'Document & Approval Workflows',
      'Real-Time Collaborative Tools'
    ],
    techStack: ['React', 'TypeScript', 'Django', 'REST Framework', 'PostgreSQL']
  },
  {
    id: 'business-management-systems',
    title: 'Business Management Systems',
    shortDescription: 'Centralized dashboards and operational software that bring order to complex businesses.',
    detailedDescription: 'Unify sales, staff, clients, inventory, and operations into a single cohesive control center. Eliminate spreadsheet chaos with real-time operational reporting and administrative clarity.',
    iconName: 'BarChart3',
    category: 'systems',
    benefits: [
      {
        title: 'Operational Visibility',
        description: 'Real-time telemetry and metrics giving owners and managers immediate insight into bottlenecks.'
      },
      {
        title: 'Eliminate Fragmented Spreadsheets',
        description: 'A single source of truth that keeps every department aligned on accurate, timely information.'
      },
      {
        title: 'Automated Audit Trails',
        description: 'Track every transaction, status modification, and system update with complete transparency.'
      }
    ],
    deliverables: [
      'Internal Operations Hubs',
      'Inventory & Asset Tracking',
      'Custom ERP Modules',
      'Staff Scheduling & Panel Tracking',
      'Executive Analytics Dashboards'
    ],
    techStack: ['React', 'Django REST Framework', 'PostgreSQL', 'Redis', 'Docker']
  },
  {
    id: 'crm-development',
    title: 'CRM Development',
    shortDescription: 'Custom customer relationship platforms built to track leads, pipelines, and client lifecycles.',
    detailedDescription: 'Capture inbound leads automatically, monitor deal stages, schedule client touchpoints, and forecast pipeline health without paying expensive per-seat recurring fees for bloated tools.',
    iconName: 'Users',
    category: 'systems',
    benefits: [
      {
        title: 'Zero Per-Seat SaaS Penalties',
        description: 'Own your software assets outright with unlimited team seats and customized data models.'
      },
      {
        title: 'Accelerated Sales Velocity',
        description: 'Automated lead assignment and instant notification alerts ensure hot prospects never go cold.'
      },
      {
        title: 'Complete Customer Timeline',
        description: 'Consolidated history of calls, emails, quotes, and support tickets in one searchable view.'
      }
    ],
    deliverables: [
      'Lead Capture & Routing Engines',
      'Visual Kanban Deal Pipelines',
      'Automated Follow-up Schedulers',
      'Customer Lifecycle Analytics',
      'Multi-Channel Communication Logs'
    ],
    techStack: ['React', 'TypeScript', 'Django', 'PostgreSQL', 'Tailwind CSS']
  },
  {
    id: 'ai-integration',
    title: 'AI Integration',
    shortDescription: 'Empower your software with intelligent LLMs, document search, and smart decision models.',
    detailedDescription: 'Bring the transformative power of modern Large Language Models and AI into your day-to-day operations. From querying proprietary company knowledge bases to automated classification and smart drafting.',
    iconName: 'Bot',
    category: 'ai',
    benefits: [
      {
        title: 'Instant Institutional Knowledge',
        description: 'Retrieval-Augmented Generation (RAG) lets employees query company SOPs, manuals, and records in plain English.'
      },
      {
        title: 'Intelligent Automation',
        description: 'Classify documents, summarize incoming requests, and route tasks using high-accuracy AI reasoning.'
      },
      {
        title: 'Data Privacy & Control',
        description: 'Secure API integrations ensuring your proprietary enterprise data is never leaked or used for public training.'
      }
    ],
    deliverables: [
      'AI-Powered Internal Assistants',
      'Document Parsing & Synthesis Engines',
      'Automated Inquiry Categorization',
      'Context-Aware Customer Copilots',
      'Custom LLM Prompt Pipelines'
    ],
    techStack: ['OpenAI / Anthropic APIs', 'LangChain', 'Python', 'Vector DBs', 'React']
  },
  {
    id: 'business-automation',
    title: 'Business Automation',
    shortDescription: 'Automate repetitive workflows, background data syncs, and manual operational friction.',
    detailedDescription: 'Free your high-value employees from tedious manual data re-entry. We build resilient asynchronous task engines and automated connectors that link your disparate tools into a smooth, autonomous pipeline.',
    iconName: 'Zap',
    category: 'automation',
    benefits: [
      {
        title: 'Drastic Human Error Reduction',
        description: 'Eliminate typographical slips and missed steps with programmatic validation and execution.'
      },
      {
        title: '24/7 Unattended Processing',
        description: 'Background tasks, nightly reconciliations, and instant trigger actions execute without pause.'
      },
      {
        title: 'Substantial Hours Saved',
        description: 'Reclaim dozens of weekly administrative hours to redirect team focus toward high-value growth.'
      }
    ],
    deliverables: [
      'Automated Invoicing & Reconciliations',
      'Cross-Platform Webhook Pipelines',
      'Asynchronous Background Queues (Celery/Redis)',
      'Scheduled Status Health Checks',
      'Custom Workflow Triggers'
    ],
    techStack: ['Celery', 'Redis', 'Python', 'Webhooks', 'REST APIs']
  },
  {
    id: 'whatsapp-automation',
    title: 'WhatsApp Automation',
    shortDescription: 'Automate customer communications, appointment confirmations, and notifications via WhatsApp.',
    detailedDescription: 'Meet your customers where they already are. Build automated transactional notifications, interactive menu bots, appointment reminders, and support routing using official WhatsApp Business API integrations.',
    iconName: 'MessageSquare',
    category: 'automation',
    benefits: [
      {
        title: '98%+ Open Rates',
        description: 'Deliver critical confirmations and updates where clients actually read them instantly.'
      },
      {
        title: 'Instant Frictionless Self-Service',
        description: 'Allow clients to check order status, confirm appointments, or get answers 24/7 without agent overhead.'
      },
      {
        title: 'Official Enterprise Compliance',
        description: 'Built strictly on Meta WhatsApp Cloud API with template approvals to prevent number bans.'
      }
    ],
    deliverables: [
      'Automated Booking & Appointment Confirmations',
      'Two-Way Interactive Query Bots',
      'Transactional Status Alerts & Invoices',
      'Live Chat Handoff to Human Agents',
      'Broadcast Management Tools'
    ],
    techStack: ['Meta Cloud API', 'Webhooks', 'Node.js / Django', 'Redis']
  },
  {
    id: 'cloud-deployment-apis',
    title: 'Cloud Deployment & APIs',
    shortDescription: 'Secure, scalable REST APIs and resilient cloud architecture ready for real-world traffic.',
    detailedDescription: 'A modern frontend requires an unflinching backend. We construct high-throughput REST APIs, implement robust database indexing, and configure hardened cloud environments with automated CI/CD pipelines.',
    iconName: 'Cloud',
    category: 'cloud',
    benefits: [
      {
        title: 'High Availability & Uptime',
        description: 'Hardened Linux servers, Nginx reverse proxies, and process supervisors safeguarding uptime.'
      },
      {
        title: 'Strict API Security',
        description: 'JWT/OAuth authentication, strict rate limiting, CORS configuration, and SSL/TLS encryption.'
      },
      {
        title: 'Automated CI/CD Deployments',
        description: 'Push-to-deploy workflows with automated staging checks, eliminating hazardous manual server tampering.'
      }
    ],
    deliverables: [
      'High-Throughput RESTful APIs',
      'Linux Server Hardening & Nginx Tuning',
      'Docker Containerization',
      'PostgreSQL Database Architecture & Backup Systems',
      'GitHub Actions CI/CD Deployment Pipelines'
    ],
    techStack: ['Linux', 'Nginx', 'Docker', 'PostgreSQL', 'GitHub Actions']
  }
];
