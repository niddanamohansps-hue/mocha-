import { TechnologyCategory } from '../types/technology';

export const technologyCategories: TechnologyCategory[] = [
  {
    title: 'Frontend Engineering',
    description: 'We construct snappy, resilient, and accessible user interfaces utilizing modern component architectures and strict type guarantees.',
    iconName: 'Layout',
    technologies: [
      {
        name: 'React 18 / 19',
        category: 'Frontend',
        description: 'Industry-standard declarative UI library for building reactive, component-driven client applications.',
        roleInStack: 'Core frontend view architecture & state orchestration',
        tags: ['Declarative', 'Component Ecosystem', 'Virtual DOM'],
        featured: true
      },
      {
        name: 'TypeScript',
        category: 'Frontend',
        description: 'Strongly typed JavaScript providing compile-time safety, self-documenting code, and zero runtime surprises.',
        roleInStack: 'End-to-end type safety across components and API contracts',
        tags: ['Type Safety', 'Refactoring Confidence', 'Static Analysis'],
        featured: true
      },
      {
        name: 'Tailwind CSS',
        category: 'Frontend',
        description: 'Utility-first CSS framework delivering ultra-consistent design tokens, rapid iteration, and minimal production bundle size.',
        roleInStack: 'Design system, responsive layouts, and dark/light theme tokens',
        tags: ['Design System', 'Zero Runtime CSS', 'Responsive Grid'],
        featured: true
      },
      {
        name: 'Vite',
        category: 'Frontend',
        description: 'Next-generation frontend tooling offering lightning-fast HMR and optimized Rollup-driven production builds.',
        roleInStack: 'Build toolchain, asset bundling, and dev server',
        tags: ['ES Modules', 'Sub-second HMR', 'Optimized Chunks'],
        featured: false
      }
    ]
  },
  {
    title: 'Backend & API Engineering',
    description: 'Rock-solid backend foundations engineered for security, high throughput, data integrity, and maintainable business logic.',
    iconName: 'Server',
    technologies: [
      {
        name: 'Django',
        category: 'Backend',
        description: 'Battle-tested high-level Python framework designed for rapid development, built-in security, and pragmatic architecture.',
        roleInStack: 'Core domain modeling, ORM persistence, and administrative controls',
        tags: ['Python', 'Batteries Included', 'Built-in Security'],
        featured: true
      },
      {
        name: 'Django REST Framework (DRF)',
        category: 'Backend',
        description: 'Powerful, flexible toolkit for building production-grade Web APIs with serializers, authentication, and throttling.',
        roleInStack: 'RESTful API contracts, validation pipelines, and permissions',
        tags: ['REST APIs', 'Serializers', 'Token Auth'],
        featured: true
      },
      {
        name: 'Python 3.11+',
        category: 'Backend',
        description: 'High-performance interpreted language with rich mathematical, AI, and asynchronous library ecosystems.',
        roleInStack: 'Business computation, data pipelines, and scripting',
        tags: ['Clean Syntax', 'Rich Ecosystem', 'Rapid Evolution'],
        featured: false
      }
    ]
  },
  {
    title: 'Database & Caching Systems',
    description: 'Relational data integrity paired with ultra-fast memory stores to support high-concurrency read and write operations.',
    iconName: 'Database',
    technologies: [
      {
        name: 'PostgreSQL',
        category: 'Database',
        description: 'The world’s most advanced open-source relational database, renowned for ACID compliance, reliability, and extensibility.',
        roleInStack: 'Primary relational data store, transactional integrity, and JSONB queries',
        tags: ['ACID Compliant', 'Complex Queries', 'pgvector Ready'],
        featured: true
      },
      {
        name: 'Redis',
        category: 'Database',
        description: 'In-memory key-value data structure store utilized as a cache, session manager, and message broker.',
        roleInStack: 'High-speed caching, rate-limit counters, and Celery task broker',
        tags: ['Sub-millisecond Latency', 'Pub/Sub', 'Task Broker'],
        featured: true
      }
    ]
  },
  {
    title: 'Infrastructure & Cloud Architecture',
    description: 'Production-ready server configurations, hardened Linux baselines, reverse proxies, and automated deployment pipelines.',
    iconName: 'Cloud',
    technologies: [
      {
        name: 'Linux (Ubuntu / Debian)',
        category: 'Infrastructure',
        description: 'Hardened server environments configured with secure SSH, firewall policies (UFW), and automated security patches.',
        roleInStack: 'Host operating system for all production and staging workloads',
        tags: ['Hardened OS', 'Stability', 'Systemd Services'],
        featured: true
      },
      {
        name: 'Nginx',
        category: 'Infrastructure',
        description: 'High-performance HTTP server, reverse proxy, SSL/TLS termination, and static asset caching layer.',
        roleInStack: 'Edge reverse proxy, SSL termination, and request routing',
        tags: ['Reverse Proxy', 'SSL/TLS Offload', 'Gzip/Brotli Compression'],
        featured: true
      },
      {
        name: 'Docker & Compose',
        category: 'Infrastructure',
        description: 'Container virtualization ensuring identical runtime environments from developer laptop to cloud servers.',
        roleInStack: 'Service encapsulation, multi-container orchestration, and staging parity',
        tags: ['Containerization', 'Environment Parity', 'Reproducibility'],
        featured: true
      },
      {
        name: 'Cloud Providers (AWS / Hetzner / DigitalOcean)',
        category: 'Infrastructure',
        description: 'Cost-optimized cloud compute, VPC networks, managed backups, and object storage configurations.',
        roleInStack: 'Compute instances, block storage, and DNS management',
        tags: ['Cost Efficient', 'High Uptime', 'Scalable Virtual Machines'],
        featured: false
      }
    ]
  },
  {
    title: 'DevOps, CI/CD & Tooling',
    description: 'Automated continuous integration and deployment pipelines to keep code quality verified and releases zero-downtime.',
    iconName: 'GitBranch',
    technologies: [
      {
        name: 'Git & GitHub',
        category: 'Tools & DevOps',
        description: 'Distributed version control, pull request review workflows, branch protection rules, and collaboration.',
        roleInStack: 'Source code management, code reviews, and issue tracking',
        tags: ['Version Control', 'Pull Requests', 'Branch Protection'],
        featured: true
      },
      {
        name: 'GitHub Actions',
        category: 'Tools & DevOps',
        description: 'Automated CI/CD pipelines executing linting, unit test suites, security scans, and zero-downtime server deployments.',
        roleInStack: 'Automated testing and continuous delivery pipeline',
        tags: ['Continuous Integration', 'Automated Testing', 'Push-to-Deploy'],
        featured: true
      }
    ]
  },
  {
    title: 'AI, LLMs & Automation',
    description: 'Cutting-edge artificial intelligence APIs and distributed background job schedulers powering next-gen workflows.',
    iconName: 'Bot',
    technologies: [
      {
        name: 'Enterprise LLM APIs (OpenAI & Anthropic)',
        category: 'AI & Automation',
        description: 'State-of-the-art foundation models used for conversational intelligence, document synthesis, and classification.',
        roleInStack: 'Inference engine for internal assistants and business copilots',
        tags: ['GPT-4o', 'Claude 3.5 Sonnet', 'Zero Data Retention'],
        featured: true
      },
      {
        name: 'Celery Distributed Task Queue',
        category: 'AI & Automation',
        description: 'Asynchronous task processing framework for running background jobs, batch emails, and cron schedules.',
        roleInStack: 'Non-blocking background worker processes and scheduled jobs',
        tags: ['Async Queues', 'Scheduled Jobs', 'Fault Tolerant'],
        featured: true
      },
      {
        name: 'WhatsApp Cloud API',
        category: 'AI & Automation',
        description: 'Official Meta WhatsApp Business platform for reliable transactional messaging and automated customer dialogues.',
        roleInStack: 'Direct customer communication channel & automated alerts',
        tags: ['Official Meta API', 'Interactive Templates', 'High Delivery Rate'],
        featured: true
      }
    ]
  }
];
