export interface Project {
    id: string;
    title: string;
    role: string;
    description: string;
    longDescription: string;
    techStack: string[];
    features: string[];
    image?: string;
    liveUrl?: string;
    githubUrl?: string;
    color: string;
    featured: boolean;
}

export const projects: Project[] = [
    {
        id: 'tarzify',
        title: 'Tarzify Storefront',
        role: 'Founder & Lead Engineer',
        description: 'Engineered a high-conversion storefront on Azure using React/Next.js and autonomous AI agents.',
        longDescription: 'Designed a premium UI/UX architecture on Microsoft Azure. Integrated autonomous AI agents for auto-order placement and inventory synchronization, reducing manual operational overhead by 70%. Optimized SEO and CTR by 25% through iterative A/B testing of landing page layouts.',
        techStack: ['React', 'Next.js', 'Microsoft Azure', 'AI Agents', 'SEO', 'A/B Testing'],
        features: [
            'Engineered high-conversion storefront on Microsoft Azure utilizing React and Next.js',
            'Integrated autonomous AI agents for auto-order placement and inventory synchronization',
            'Designed premium infographics and product imagery using Adobe Lightroom and Photoshop',
            'Optimized SEO and click-through rates (CTR) by 25% through iterative A/B testing of layouts'
        ],
        liveUrl: 'https://tarzify.com/',
        color: '#f59e0b',
        featured: true
    },
    {
        id: 'rideshare',
        title: 'Ride-Share Application',
        role: 'Full-Stack Developer',
        description: 'Developed a full-stack student ride-share application utilizing Flutter and Node.js/Express.',
        longDescription: 'Engineered a dynamic fare calculation engine and real-time navigation system. Integrated Google Maps API to track commuters and match riders with drivers, architecting a scalable backend to handle concurrent requests.',
        techStack: ['Flutter', 'Dart', 'Node.js', 'Express.js', 'Google Maps API', 'System Design'],
        features: [
            'Developed a full-stack ride-share application utilizing Flutter and Node.js with Express.js',
            'Integrated Google Maps API to facilitate real-time navigation and commuter tracking for students',
            'Engineered a dynamic fare calculation engine to provide real-time pricing updates during transit',
            'Architected a scalable system design to handle concurrent user requests and ride-matching logic'
        ],
        liveUrl: 'https://tarzify.com/', // fallback link
        color: '#06b6d4',
        featured: true
    },
    {
        id: 'property-automation',
        title: 'Property Automation & Digitization',
        role: 'Lead Automation Engineer',
        description: 'Led transition from manual maintenance operations to a Dockerized PHP/n8n automation environment.',
        longDescription: 'Digitized property systems for a UK-based platform. Architected 250+ automation workflows using self-hosted n8n to streamline maintenance dispatching. Deployed using Docker on Microsoft Azure Cloud with automated expert-verification modules.',
        techStack: ['PHP', 'n8n', 'Docker', 'Microsoft Azure', 'Python', 'Java', 'CI/CD'],
        features: [
            'Led the transition from manual operations to a PHP/n8n environment, digitizing UK maintenance systems',
            'Architected 250+ automation workflows using self-hosted n8n to streamline data processing',
            'Implemented Docker containerization for environments and deployed via Microsoft Azure Cloud',
            'Streamlined CI/CD pipelines using Python and Java to automate expert-verification modules'
        ],
        color: '#8b5cf6',
        featured: true
    },
    {
        id: 'london-hospitality',
        title: 'London Hospitality SaaS',
        role: 'Backend & Automation Engineer',
        description: 'Built React/Supabase platform with Twilio subaccount provisioning for restaurants and agencies.',
        longDescription: 'Developed a multi-tier SaaS platform featuring role-based access for Admins, Agencies, and Restaurants. Engineered Python backends for Twilio API isolation and webhooks for real-time campaign ROI analysis.',
        techStack: ['React', 'Supabase', 'Python', 'Twilio API', 'Webhooks', 'Role-Based Access'],
        features: [
            'Built a React/Supabase platform with role-based access for London Admins, Agencies, and Restaurants',
            'Engineered a Python backend to automate Twilio Subaccount provisioning and credential isolation',
            'Developed stateful Supabase workflows for automated SMS/WhatsApp marketing across restaurant tiers',
            'Integrated Python Webhooks to process real-time analytics and track campaign ROI'
        ],
        color: '#10b981',
        featured: true
    },
    {
        id: 'hospital-management',
        title: 'Hospital Management System',
        role: 'Desktop App Developer',
        description: 'Built cross-platform C++/Qt desktop app with DeepSeek REST API integration for real-time medical AI.',
        longDescription: 'Developed an event-driven Qt GUI with patient record scheduling modules. Integrated DeepSeek REST API for real-time diagnostic insights via asynchronous pipelines to prevent main-thread blocking.',
        techStack: ['C++', 'Qt Framework', 'DeepSeek API', 'SQLite', 'Asynchronous Pipelines'],
        features: [
            'Built cross-platform C++/Qt desktop app with 100% Linux/Windows compatibility',
            'Integrated DeepSeek REST API for real-time medical AI via asynchronous pipelines',
            'Developed CRUD modules for patient records and scheduling to streamline workflows',
            'Designed event-driven Qt GUI to optimize data rendering and user experience'
        ],
        githubUrl: 'https://github.com/malikabdullah1786',
        color: '#ef4444',
        featured: true
    },
    {
        id: 'collabify',
        title: 'Collabify SaaS Platform',
        role: 'Java Backend Developer',
        description: 'Led Java/Spring Boot backend development with JPA/Hibernate mapping and Maven configurations.',
        longDescription: 'Engineered RESTful APIs with strict CORS filters to securely serve decoupled frontends. Designed PostgreSQL database layer using JPA/Hibernate to map domain entities, deploying to AWS using Maven build environments.',
        techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'JPA', 'Hibernate', 'AWS', 'Maven'],
        features: [
            'Led Java/Spring Boot backend development using full UML architecture lifecycles',
            'Engineered RESTful APIs with strict CORS to securely serve decoupled frontends',
            'Architected PostgreSQL layer using JPA/Hibernate to map complex domain models',
            'Standardized Maven/Ubuntu build environments for deployment to AWS infrastructure'
        ],
        githubUrl: 'https://github.com/malikabdullah1786',
        color: '#14b8a6',
        featured: false
    },
    {
        id: 'aerosync',
        title: 'Aerosync: Distributed Airline System',
        role: 'Database & Backend Developer',
        description: 'Architected Azure SQL database and .NET C# RESTful backend for reservation logic.',
        longDescription: 'Prevented booking race conditions using SQL database triggers and ACID transactions. Engineered .NET RESTful backend deployed on Railway, connecting asynchronously to a decoupled Vercel frontend.',
        techStack: ['.NET (C#)', 'Azure SQL', 'ACID Transactions', 'Railway', 'Vercel', 'Asynchronous Comm'],
        features: [
            'Architected Azure SQL database with triggers and ACID transactions to prevent booking race conditions',
            'Engineered .NET (C#) RESTful backend on Railway for high-throughput reservation logic',
            'Deployed decoupled Vercel frontend with asynchronous backend communication for real-time ticketing'
        ],
        color: '#ec4899',
        featured: false
    },
    {
        id: 'fastscanattend',
        title: 'FastScanAttend',
        role: 'Systems Engineer',
        description: 'Architected Java biometric system with Python IPC bridge to connect underlying C drivers.',
        longDescription: 'Engineered hardware interoperability using Digital Persona binaries and C libraries. Developed a Python IPC bridge and optimized performance via multithreading for asynchronous scans without UI freezes.',
        techStack: ['Java', 'Python', 'IPC Bridge', 'C Libraries', 'Multithreading', 'Digital Persona SDK'],
        features: [
            'Architected Java biometric system with mock data layers for automated FLEX portal tracking',
            'Engineered hardware interoperability using Digital Persona binaries (Windows) and C libraries (Linux)',
            'Developed Python IPC bridge to connect Java application layers with underlying C hardware drivers',
            'Optimized performance via multithreading for asynchronous scanning without blocking the main thread'
        ],
        color: '#6366f1',
        featured: false
    },
    {
        id: 'atm-banking',
        title: 'ATM & Banking Management',
        role: 'Systems Developer',
        description: 'Created C++ terminal banking simulation with persistent storage and robust permission models.',
        longDescription: 'Designed persistent file-based storage for logs and balance retention. Programmed secure transaction validation logic and optimized reporting routines using 2D arrays for efficient data retrieval.',
        techStack: ['C++', 'File Storage', '2D Arrays', 'OOP', 'Transaction Logic'],
        features: [
            'Created C++ terminal banking simulation with admin and user permission models',
            'Designed persistent file-based storage for 100% data retention of logs and balances',
            'Optimized data retrieval using 2D arrays for efficient multi-dimensional reporting',
            'Programmed secure transaction logic with robust validation for all financial operations'
        ],
        color: '#3b82f6',
        featured: false
    }
];
