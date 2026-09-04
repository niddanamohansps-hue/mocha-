import { ProjectItem } from '../types/project';

export const projectsData: ProjectItem[] = [
  {
    id: 'recruitment-management-system',
    slug: 'recruitment-management-system',
    title: 'Recruitment Management System',
    category: 'Enterprise Management System',
    badge: 'Flagship Platform',
    shortDescription: 'A comprehensive recruitment operating platform designed to streamline and automate the complete hiring lifecycle.',
    fullDescription: 'An enterprise-grade talent acquisition and candidate evaluation platform built for high-volume staffing agencies and internal HR divisions. It centralizes requisition creation, multi-board candidate intake, automated interview scheduling, evaluation panel management, and multi-tier executive approval workflows into an auditable ecosystem.',
    industry: 'Staffing & Human Resources',
    timeline: '12 Weeks Engineering Timeline',
    deliverableType: 'Flagship Platform',
    featured: true,
    technologies: [
      'React',
      'TypeScript',
      'Django',
      'Django REST Framework',
      'PostgreSQL',
      'Redis',
      'Celery',
      'Tailwind CSS'
    ],
    challenge: 'Staffing agencies and growing companies frequently battle chaotic spreadsheets, missed candidate follow-ups, disjointed interviewer feedback notes, and delayed hiring approvals. The lack of a centralized role-based workflow leads to hiring bottlenecks, data leakage, and a poor candidate experience.',
    solution: 'We engineered a unified recruitment pipeline platform with granular role-based access control (RBAC). It automates interview scheduling with calendar sync, orchestrates panel reviews with objective scorecards, triggers background reminder tasks via Celery, and displays executive telemetry on real-time dashboards.',
    features: [
      {
        title: 'Granular Role Management',
        description: 'Multi-tiered access control separating Super Admins, Hiring Managers, Panel Interviewers, and Recruiters with strict data isolation.',
        iconName: 'ShieldCheck'
      },
      {
        title: 'Dynamic Job Postings',
        description: 'Publish, edit, and archive job requisitions with custom screening questionnaires, salary bands, and department categorization.',
        iconName: 'Briefcase'
      },
      {
        title: 'Candidate Application Hub',
        description: 'Single-view candidate dossiers containing resume parsers, stage transitions, evaluation scores, and chronological activity logs.',
        iconName: 'FileText'
      },
      {
        title: 'Automated Interview Scheduling',
        description: 'Self-service calendar slot booking for candidates, panel conflict detection, and automated calendar invitations.',
        iconName: 'Calendar'
      },
      {
        title: 'Evaluation Panel Management',
        description: 'Structured scorecard evaluations allowing interviewers to submit ratings and feedback without seeing other panel reviews prematurely.',
        iconName: 'Users'
      },
      {
        title: 'Multi-Tier Approval Workflows',
        description: 'Automated requisition and offer approval routes with email/app prompts for department heads and finance stakeholders.',
        iconName: 'CheckCircle'
      },
      {
        title: 'Executive Admin Dashboard',
        description: 'Consolidated view of all active openings, pending interview queues, stage distributions, and recruiter workloads.',
        iconName: 'LayoutDashboard'
      },
      {
        title: 'Recruitment Telemetry & Analytics',
        description: 'Time-to-hire tracking, pipeline conversion funnels, source channel yield, and interviewer response turnaround metrics.',
        iconName: 'TrendingUp'
      }
    ],
    architecture: {
      overview: 'Modern decoupled architecture utilizing a React SPA frontend communicating over authenticated REST endpoints to a Django REST Framework backend with Celery distributed workers.',
      flow: [
        {
          layer: 'Client Layer',
          name: 'React 18 + TypeScript Frontend',
          description: 'Type-safe component interface with state-driven UI, responsive dashboard tables, and optimistic updates.',
          technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite']
        },
        {
          layer: 'API Gateway & Protocol',
          name: 'Secure RESTful API Gateway',
          description: 'Stateless JWT authentication, permission checks, request throttling, and CORS security layers.',
          technologies: ['Django REST Framework', 'JWT', 'Nginx']
        },
        {
          layer: 'Core Application Service',
          name: 'Django Enterprise Business Engine',
          description: 'Domain logic, role validation, candidate state machine, approval routing, and event dispatchers.',
          technologies: ['Python 3.11', 'Django 5', 'Pydantic']
        },
        {
          layer: 'Persistence Store',
          name: 'PostgreSQL Relational Database',
          description: 'ACID-compliant relational store with foreign key integrity, indexed queries, and automated backups.',
          technologies: ['PostgreSQL 16', 'Django ORM']
        },
        {
          layer: 'Async Queue & Cache',
          name: 'Redis + Celery Background Workers',
          description: 'Offloads notification emails, calendar syncing, digest reports, and background heavy analytics.',
          technologies: ['Celery 5', 'Redis 7']
        }
      ]
    },
    capabilities: [
      'Complete end-to-end auditability across the entire candidate hiring journey',
      'Zero spreadsheet reliance with centralized real-time applicant data',
      'Automated background notification queues preventing interview drop-offs',
      'Rigid role-based permission boundaries securing sensitive compensation data',
      'Extensible REST API ready for integrations with job boards and HRIS platforms'
    ],
    interfaceHighlights: [
      {
        title: 'Recruitment Kanban Pipeline',
        description: 'Drag-and-drop applicant card transitions with real-time stage counters and rapid action triggers.',
        highlightTag: 'Pipeline UX'
      },
      {
        title: 'Panel Evaluation Matrix',
        description: 'Side-by-side scorecard comparison showing interviewer consensus and competency ratings.',
        highlightTag: 'Evaluation Engine'
      },
      {
        title: 'Requisition Audit Log',
        description: 'Chronological timeline recording every status change, note added, and approval stamped.',
        highlightTag: 'Compliance Log'
      }
    ]
  },
  {
    id: 'business-crm-platform',
    slug: 'business-crm-platform',
    title: 'Business CRM Platform',
    category: 'Sales & Client Operations',
    badge: 'Production System',
    shortDescription: 'A modular, high-velocity customer relationship management system tailored for growing B2B companies.',
    fullDescription: 'An intuitive sales execution and client retention platform built to replace cluttered generic CRMs. Engineered for sales teams and business owners to track deals, log omnichannel communications, automate follow-up reminders, and visualize pipeline forecasting in real time.',
    industry: 'B2B Services & Real Estate',
    timeline: '8 Weeks Engineering Timeline',
    deliverableType: 'Enterprise Solution',
    featured: true,
    technologies: [
      'React',
      'TypeScript',
      'Django REST Framework',
      'PostgreSQL',
      'Tailwind CSS',
      'Redis'
    ],
    challenge: 'Generic SaaS CRM platforms charge steep monthly per-seat fees while overwhelming teams with hundreds of unused features. Important prospects slip through cracks due to missed follow-ups and fragmented communication across phone, email, and WhatsApp.',
    solution: 'We engineered a focused, lightning-fast CRM centered around deal momentum. It automates next-step scheduling, provides a unified contact timeline, and surfaces actionable sales intelligence without administrative drag.',
    features: [
      {
        title: 'Lead Ingestion & Scoring',
        description: 'Automatic capture of leads from web forms and marketing campaigns with algorithmic prioritization.',
        iconName: 'UserCheck'
      },
      {
        title: 'Customer 360° Management',
        description: 'Comprehensive profile view showing company affiliations, deal history, recorded notes, and invoices.',
        iconName: 'Database'
      },
      {
        title: 'Automated Follow-up Tracking',
        description: 'Daily agenda triggers alerting account executives of upcoming calls, contract expirations, and overdue touches.',
        iconName: 'Clock'
      },
      {
        title: 'Visual Sales Pipeline',
        description: 'Customizable deal stages with weighted probability calculations and total pipeline value summaries.',
        iconName: 'Kanban'
      },
      {
        title: 'Interactive Business Dashboard',
        description: 'Real-time sales velocity, win/loss ratios, team activity metrics, and monthly revenue pacing graphs.',
        iconName: 'BarChart2'
      },
      {
        title: 'Omnichannel Activity History',
        description: 'Unified chronological stream of meetings, email exchanges, notes, and task completions.',
        iconName: 'ListOrdered'
      }
    ],
    architecture: {
      overview: 'Event-driven React and Django architecture ensuring sub-100ms response times for sales teams updating live records.',
      flow: [
        {
          layer: 'Client Experience',
          name: 'React SPA Dashboard',
          description: 'Optimistic UI updates, keyboard navigation shortcuts, and instant search over customer records.',
          technologies: ['React', 'TypeScript', 'Tailwind CSS']
        },
        {
          layer: 'API & Validation',
          name: 'REST Service Endpoints',
          description: 'Input sanitization, rate-limited public webhook receivers, and tokenized session security.',
          technologies: ['Django REST Framework', 'Python']
        },
        {
          layer: 'Data Storage',
          name: 'PostgreSQL Relational DB',
          description: 'Relational customer-to-deal schemas with full-text search indexing on contacts and activity logs.',
          technologies: ['PostgreSQL']
        },
        {
          layer: 'Caching & Sync',
          name: 'Redis Cache Layer',
          description: 'Instant dashboard aggregate calculations and session store.',
          technologies: ['Redis']
        }
      ]
    },
    capabilities: [
      'Eliminated monthly per-user licensing fees for the operating business',
      'Centralized all lead acquisition channels into a single reliable repository',
      'Streamlined daily sales tasks into an automated morning action agenda',
      'Real-time financial pipeline visibility for founders and sales directors'
    ],
    interfaceHighlights: [
      {
        title: 'Dynamic Deal Pipeline',
        description: 'Multi-stage visual pipeline with instant revenue summaries per stage.',
        highlightTag: 'Deal Flow'
      },
      {
        title: 'Daily Action Center',
        description: 'Prioritized queue of high-intent follow-ups required each business day.',
        highlightTag: 'Focus Mode'
      }
    ]
  },
  {
    id: 'ai-business-assistant',
    slug: 'ai-business-assistant',
    title: 'AI Business Assistant',
    category: 'Artificial Intelligence & Automation',
    badge: 'AI Solution',
    shortDescription: 'An intelligent enterprise copilot that unifies company knowledge search and autonomous task execution.',
    fullDescription: 'A secure, domain-adapted AI assistant designed for organizations that want to leverage LLMs safely. It connects to internal operational documents, standard operating procedures, and product catalogs to provide instant verified answers and execute routine business workflows.',
    industry: 'Enterprise Knowledge & Operations',
    timeline: '6 Weeks Engineering Timeline',
    deliverableType: 'AI Product',
    featured: true,
    technologies: [
      'React',
      'TypeScript',
      'Python',
      'OpenAI API / Claude API',
      'Vector Database (pgvector)',
      'FastAPI / Django',
      'Tailwind CSS'
    ],
    challenge: 'Employees spend up to 20% of their working hours searching for internal documentation, onboarding procedures, and technical specifications across scattered drives and emails, resulting in inconsistent customer support and operational lag.',
    solution: 'We engineered an intelligent internal copilot utilizing Retrieval-Augmented Generation (RAG). It vectorizes enterprise documents with strict permission segregation, delivers sourced citations, and automates common administrative tasks via natural language commands.',
    features: [
      {
        title: 'Conversational AI Interface',
        description: 'Streaming chat interface with markdown formatting, code highlights, and suggested contextual follow-up queries.',
        iconName: 'MessageSquare'
      },
      {
        title: 'Semantic Knowledge Search',
        description: 'Natural language search across internal SOPs, PDFs, and policy guidelines returning verified citations.',
        iconName: 'Search'
      },
      {
        title: 'Automated Task Triggers',
        description: 'Turn conversational prompts into structured actions like ticket creation, draft proposal generation, or email templates.',
        iconName: 'Cpu'
      },
      {
        title: 'Operational Analytics',
        description: 'Telemetry into most frequently asked company questions, knowledge gaps, and assistant utilization rates.',
        iconName: 'PieChart'
      },
      {
        title: 'Strict Data Isolation & Privacy',
        description: 'Enterprise API compliance ensuring internal company knowledge is never utilized for public LLM training.',
        iconName: 'Lock'
      }
    ],
    architecture: {
      overview: 'Hybrid RAG architecture combining semantic vector search with LLM reasoning and an asynchronous document ingestion pipeline.',
      flow: [
        {
          layer: 'Interactive UI',
          name: 'Streaming React Web App',
          description: 'Server-Sent Events (SSE) streaming tokens to the browser with microsecond rendering and citation popovers.',
          technologies: ['React', 'TypeScript', 'Tailwind CSS']
        },
        {
          layer: 'Orchestrator',
          name: 'Python RAG Service Engine',
          description: 'Prompt management, conversation memory, intent router, and safety guardrails.',
          technologies: ['Python', 'LangChain / LlamaIndex']
        },
        {
          layer: 'Vector & Relational Store',
          name: 'PostgreSQL with pgvector',
          description: 'Embeddings storage and cosine distance similarity indexing paired alongside metadata tables.',
          technologies: ['PostgreSQL', 'pgvector']
        },
        {
          layer: 'Inference Provider',
          name: 'Enterprise Foundation Model APIs',
          description: 'High-reasoning LLM inference executing with zero-retention privacy agreements.',
          technologies: ['OpenAI / Claude Foundation APIs']
        }
      ]
    },
    capabilities: [
      'Sub-second query resolution for complex operational manuals and SOPs',
      'Zero hallucination safeguards through strict grounding on verified internal source texts',
      'Automated repetitive drafting of customer responses and administrative summaries',
      'Complete audit trail of system prompts, responses, and token usage'
    ],
    interfaceHighlights: [
      {
        title: 'Streaming Knowledge Terminal',
        description: 'Interactive chat interface highlighting exact source file citations for every generated answer.',
        highlightTag: 'Grounded RAG'
      },
      {
        title: 'Document Ingestion Control',
        description: 'Upload portal parsing PDFs and docs into vectorized chunks with real-time indexing status.',
        highlightTag: 'Data Pipeline'
      }
    ]
  },
  {
    id: 'appointment-management-system',
    slug: 'appointment-management-system',
    title: 'Appointment Management System',
    category: 'Healthcare & Clinic Systems',
    badge: 'Operations Platform',
    shortDescription: 'A multi-staff booking, schedule orchestration, and automated patient notification platform.',
    fullDescription: 'A modern appointment scheduling and practice management application engineered for clinics, educational consultants, and professional service firms. It eliminates double-bookings, sends automated WhatsApp/SMS reminders, and gives administrators clear calendar oversight across multiple practitioners.',
    industry: 'Healthcare & Professional Services',
    timeline: '6 Weeks Engineering Timeline',
    deliverableType: 'Enterprise Solution',
    featured: true,
    technologies: [
      'React',
      'TypeScript',
      'Django',
      'PostgreSQL',
      'WhatsApp Cloud API',
      'Tailwind CSS'
    ],
    challenge: 'High patient/client no-show rates, manual phone tag scheduling, and calendar conflicts burn valuable billable hours and create front-desk friction for growing clinics and service providers.',
    solution: 'We engineered an automated scheduling portal offering real-time practitioner availability, instant self-service slot booking, automated WhatsApp reminders 24 hours prior, and a multi-practitioner calendar dashboard.',
    features: [
      {
        title: 'Self-Service Online Booking',
        description: 'Clean mobile-first booking interface allowing clients to pick service types, practitioners, and available time slots.',
        iconName: 'CalendarCheck'
      },
      {
        title: 'Multi-Staff Calendar Grid',
        description: 'Unified administrative view showing day, week, and month schedules across multiple team members or doctors.',
        iconName: 'CalendarDays'
      },
      {
        title: 'Customer Record Management',
        description: 'Patient/client histories including previous visits, preferences, notes, and attendance compliance.',
        iconName: 'UserCheck'
      },
      {
        title: 'Automated WhatsApp & SMS Alerts',
        description: 'Immediate booking confirmation and automated 24-hour reminder messages with one-click confirmation links.',
        iconName: 'MessageSquare'
      },
      {
        title: 'Administrative Control Center',
        description: 'Override availability, block vacation days, adjust buffer intervals between sessions, and track attendance trends.',
        iconName: 'Sliders'
      }
    ],
    architecture: {
      overview: 'Transactional booking engine built with ACID database guarantees to prevent concurrent slot collisions.',
      flow: [
        {
          layer: 'Client Portal',
          name: 'Responsive Booking Interface',
          description: 'Lightweight, rapid-loading booking wizard optimized for mobile browsers.',
          technologies: ['React', 'TypeScript', 'Tailwind CSS']
        },
        {
          layer: 'Booking Engine',
          name: 'Django Scheduling Service',
          description: 'Conflict detection algorithms, timezone adjustments, and slot reservation locking.',
          technologies: ['Django', 'REST API']
        },
        {
          layer: 'Database Layer',
          name: 'PostgreSQL Relational DB',
          description: 'Strict transactional constraints preventing double-booking race conditions.',
          technologies: ['PostgreSQL']
        },
        {
          layer: 'Notification Dispatcher',
          name: 'WhatsApp Cloud API Gateway',
          description: 'Asynchronous webhook delivery for instant transactional messages.',
          technologies: ['WhatsApp API', 'Celery']
        }
      ]
    },
    capabilities: [
      'Eliminated scheduling double-booking errors with transactional database locking',
      'Drastically curtailed no-shows via automated 24-hour WhatsApp appointment confirmations',
      'Freed front-desk staff from manual confirmation phone calls',
      'Comprehensive administrative calendar giving managers real-time capacity overview'
    ],
    interfaceHighlights: [
      {
        title: 'Multi-Practitioner Calendar',
        description: 'Color-coded schedule view with drag-and-drop rescheduling and slot blocking.',
        highlightTag: 'Staff Dispatch'
      },
      {
        title: 'Patient Booking Flow',
        description: '3-step frictionless booking interface with zero account creation required.',
        highlightTag: 'Frictionless UX'
      }
    ]
  }
];
