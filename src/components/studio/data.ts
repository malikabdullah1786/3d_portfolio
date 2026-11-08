// Every fact on the page lives here, so a resume update is a one-file change.

export const profile = {
  first: "Muhammad",
  name: "Muhammad Abdullah",
  role: "Software Engineer, Full-Stack Developer & Founder",
  org: "FAST-NUCES & Zenolve",
  place: "Lahore, Pakistan",
  timeZone: "Asia/Karachi",
  email: "malikabdullah1786@gmail.com",
  resume: "/resume.pdf",
  links: [
    { label: "GitHub", href: "https://github.com/malikabdullah1786" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/malikabdullah1786/" },
    { label: "Email", href: "mailto:malikabdullah1786@gmail.com" },
  ],
};

// Words on the flip calendar in the hero: "I build ___"
export const flipWords = [
  "Full Stack Apps",
  "DevOps Pipelines",
  "Mobile Apps",
  "C++ Systems",
  "AI Workflows",
];

export type Project = {
  title: string;
  kicker: string;
  body: string;
  points?: string[];
  impact?: { metric: string; label: string }[];
  tech: string[];
  live?: string;
  code?: string;
  shot?: string; // a full-page screenshot of the live site, scrolled on a monitor
  phone?: string; // a phone-width screenshot, shown on a phone instead
  inside?: { shot?: string; phone?: string }; // screens for the second, "Inside" card: a monitor, a phone, or both
};

export type Room = {
  id: string;
  plaque: [string, string];
  title: string;
  tagline: string;
  intro: string; // the opening line inside the room
  checklist: string[];
  door: string; // door paint
  glow: string; // light spilling out when it opens
  projects: Project[];
};

export const rooms: Room[] = [
  {
    id: "fullstack",
    plaque: ["FULL", "STACK"],
    title: "Full Stack & SaaS",
    tagline: "High-conversion platforms & microservices",
    intro: "Production web applications, high-conversion eCommerce storefronts, and collaborative SaaS platforms engineered with React, Next.js, and modern backends.",
    checklist: [
      "React, Next.js, TypeScript & Tailwind CSS",
      "Autonomous AI order placement & inventory sync",
      "Scalable REST APIs & Microservices architecture",
      "Authentication, Role-Based Access & Payment Gateways",
      "High-performance SEO & A/B tested conversion flows",
    ],
    door: "#1f2d3d",
    glow: "#e09f5a",
    projects: [
      {
        title: "Tarzify Storefront",
        shot: "/projects/arovia.jpg",
        kicker: "Founder & Lead Engineer · Production",
        body: "Engineered a high-conversion eCommerce storefront on Microsoft Azure using React and Next.js, integrated with autonomous AI agents for automated operations.",
        points: [
          "Designed premium UI/UX architecture on Microsoft Azure utilizing React and Next.js.",
          "Integrated autonomous AI agents for auto-order placement and inventory synchronization, reducing manual operational overhead by 70%.",
          "Designed premium product visuals and infographics using Adobe Photoshop and Lightroom.",
          "Optimized SEO and click-through rates (CTR) by 25% through iterative A/B testing of layouts.",
        ],
        impact: [
          { metric: "-70%", label: "Manual operational overhead" },
          { metric: "+25%", label: "CTR improvement via A/B testing" },
          { metric: "99.9%", label: "Uptime on Microsoft Azure Cloud" },
        ],
        tech: ["React", "Next.js", "TypeScript", "Microsoft Azure", "AI Agents", "Tailwind CSS", "SEO"],
        live: "https://tarzify.com/",
        code: "https://github.com/malikabdullah1786",
      },
      {
        title: "London Hospitality SaaS",
        shot: "/projects/importlyai.jpg",
        kicker: "Full-Stack Engineer · Client Product",
        body: "End-to-end guest booking and property operations portal for luxury London apartments with real-time room availability.",
        points: [
          "Architected reactive booking engine with real-time availability calendar and Stripe payments.",
          "Built staff management dashboard for housekeeping dispatch and automated guest messaging.",
          "Engineered dynamic pricing models based on occupancy thresholds and seasonal demand.",
        ],
        impact: [
          { metric: "1.2s", label: "Average page load speed" },
          { metric: "100%", label: "Automated booking dispatch" },
        ],
        tech: ["Next.js", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "Stripe API"],
        code: "https://github.com/malikabdullah1786",
      },
      {
        title: "Collabify SaaS Platform",
        shot: "/projects/eventflow.jpg",
        kicker: "Lead Architect · Real-Time Collaboration",
        body: "Real-time team workspace platform with live canvas, collaborative documents, and granular permission controls.",
        points: [
          "Implemented real-time bidirectional state sync using WebSockets and optimistic UI updates.",
          "Developed modular workspace dashboard with role-based access control (RBAC).",
        ],
        impact: [
          { metric: "<50ms", label: "WebSocket synchronization latency" },
        ],
        tech: ["React", "Node.js", "WebSockets", "MongoDB", "Express", "Tailwind CSS"],
        code: "https://github.com/malikabdullah1786",
      },
    ],
  },
  {
    id: "mobile",
    plaque: ["MOBILE", "APPS"],
    title: "Mobile Apps",
    tagline: "Cross-platform mobile applications & utilities",
    intro: "Native and cross-platform mobile apps built for performance, real-time tracking, offline reliability, and intuitive user experiences.",
    checklist: [
      "Cross-platform mobile app development",
      "Real-time geolocation & live ride tracking",
      "Offline caching & background synchronization",
      "Secure authentication & biometric protection",
      "Fast camera-based QR scanning pipelines",
    ],
    door: "#2c3b2e",
    glow: "#82c99b",
    projects: [
      {
        title: "Ride-Share Application",
        phone: "/projects/xceed-app.jpg",
        kicker: "Founder & Lead Mobile Engineer",
        body: "Full-featured on-demand ride sharing Android application with live driver tracking, fare calculation, and instant ride requests.",
        points: [
          "Built real-time driver-passenger matching algorithm using geospatial queries and live GPS streams.",
          "Implemented push notifications for driver arrival, trip status changes, and emergency SOS alerts.",
          "Optimized battery consumption during continuous background location tracking.",
        ],
        impact: [
          { metric: "<200ms", label: "Location ping updates" },
          { metric: "4.8★", label: "Beta user satisfaction" },
        ],
        tech: ["Android", "Flutter", "Firebase", "Google Maps API", "REST APIs", "Node.js"],
        code: "https://github.com/malikabdullah1786",
      },
      {
        title: "FastScanAttend",
        phone: "/projects/xceed-help-m.jpg",
        kicker: "Mobile Utility · FAST-NUCES",
        body: "Instant camera-based attendance app using QR and biometric verification to streamline university lecture hall attendance.",
        points: [
          "Sub-second QR scanning engine operating offline with local SQLite queue.",
          "One-tap cloud sync that reconciles records with university database.",
        ],
        impact: [
          { metric: "350ms", label: "Scan to check-in duration" },
        ],
        tech: ["Mobile", "Camera API", "SQLite", "Node.js", "Express"],
        code: "https://github.com/malikabdullah1786",
      },
    ],
  },
  {
    id: "devops",
    plaque: ["DEVOPS", "CLOUD"],
    title: "DevOps & Cloud",
    tagline: "Automation, CI/CD, and infrastructure",
    intro: "Automated cloud pipelines, self-hosted n8n orchestrations, containerized microservices, and reliable high-availability deployments.",
    checklist: [
      "Self-hosted n8n workflow automation & webhooks",
      "Docker containerization & multi-stage builds",
      "Microsoft Azure Cloud deployments & App Services",
      "Automated expert-verification & ticket routing",
      "CI/CD pipelines with health checks & zero-downtime",
    ],
    door: "#3b2626",
    glow: "#f08c7a",
    projects: [
      {
        title: "Property Automation & Digitization",
        shot: "/projects/codearena.jpg",
        kicker: "Zenolve · Production Enterprise · 2025 – Present",
        body: "End-to-end automation and digitization of UK property maintenance systems, replacing manual operations with self-hosted n8n orchestrations.",
        points: [
          "Architected complex automation workflows with self-hosted n8n to streamline tenant issue reporting and maintenance scheduling.",
          "Specialized in Dockerization and deployment via Microsoft Azure Cloud to guarantee environment parity.",
          "Engineered automated expert-verification modules for plumbing and electrical diagnostics.",
          "Led the development of Reel Vault, focusing on high-efficiency media storage and retrieval logic.",
        ],
        impact: [
          { metric: "10x", label: "Faster maintenance ticket resolution" },
          { metric: "100%", label: "Dockerized reproducible deployments" },
          { metric: "Zero", label: "Manual data entry in property logs" },
        ],
        tech: ["n8n", "Docker", "Microsoft Azure", "Python", "PHP", "Java", "CI/CD"],
        code: "https://github.com/malikabdullah1786",
      },
      {
        title: "Aerosync: Distributed Airline System",
        shot: "/projects/sponsorgrid.jpg",
        kicker: "Distributed Systems Architect",
        body: "Fault-tolerant distributed flight booking and scheduling system with consensus mechanisms and atomic transaction handling.",
        points: [
          "Eliminated double-booking race conditions under high concurrency using distributed locking.",
          "Containerized microservices communicating via asynchronous event queues.",
        ],
        impact: [
          { metric: "0", label: "Race condition failures under load" },
        ],
        tech: ["Distributed Systems", "Docker", "Node.js", "Redis", "PostgreSQL"],
        code: "https://github.com/malikabdullah1786",
      },
    ],
  },
  {
    id: "systems",
    plaque: ["CORE", "SYSTEMS"],
    title: "Core & C++ Systems",
    tagline: "High-performance data structures & algorithms",
    intro: "Low-level system architecture, robust C++ application engines, and object-oriented architectures engineered for maximum memory safety and speed.",
    checklist: [
      "Modern C++ (C++17/20) & Object-Oriented Design",
      "Custom memory management & pointer safety",
      "Complex data structures: Trees, Graphs, Hash Tables",
      "Multi-threaded concurrency & file serialization",
      "Enterprise audit logs & ACID-compliant transactions",
    ],
    door: "#2a253b",
    glow: "#aa8be8",
    projects: [
      {
        title: "Hospital Management System",
        shot: "/projects/xceed-home.jpg",
        kicker: "Enterprise C++ Software Engine",
        body: "A robust, high-performance hospital administration and medical record platform built in C++ with advanced custom data structures.",
        points: [
          "Implemented custom B-Trees and Hash Maps for O(1) patient lookup and doctor scheduling.",
          "Created binary file serialization with checksum verification for tamper-proof medical records.",
          "Engineered role-based triage queue prioritizing emergency room admissions automatically.",
        ],
        impact: [
          { metric: "<1ms", label: "Record query execution" },
          { metric: "100%", label: "Data integrity verification" },
        ],
        tech: ["C++", "Data Structures", "Algorithms", "OOP", "File I/O", "System Design"],
        code: "https://github.com/malikabdullah1786",
      },
      {
        title: "ATM & Banking Management Engine",
        shot: "/projects/strangerblogs.jpg",
        kicker: "Financial Systems Engine",
        body: "Transaction-safe banking software implementing ACID guarantees, account ledger hashing, and encrypted PIN authentication.",
        points: [
          "Implemented deadlock-free multithreaded account transfers with mutex locks.",
          "Maintained immutable append-only ledger for financial auditing.",
        ],
        impact: [
          { metric: "ACID", label: "Guaranteed transactional safety" },
        ],
        tech: ["C++", "Concurrency", "Encryption", "System Architecture"],
        code: "https://github.com/malikabdullah1786",
      },
    ],
  },
];

export type Chapter = {
  year: string;
  range: string;
  title: string;
  where: string;
  points: string[];
  tint: string; // colour of the light behind this chapter
};

export const story: Chapter[] = [
  {
    year: "2025",
    range: "JAN 2025 — PRESENT",
    title: "Full Stack Developer & DevOps Intern",
    where: "Zenolve",
    points: [
      "Contributing to the development and automation of property maintenance and enterprise media systems.",
      "Architecting self-hosted n8n workflows, Docker deployments on Azure, and high-efficiency media storage logic.",
    ],
    tint: "#e7a77c",
  },
  {
    year: "2024",
    range: "2024 — PRESENT",
    title: "Deputy Head of Software",
    where: "SOFTEC, FAST-NUCES Lahore",
    points: [
      "Leading technical software operations for Pakistan's largest annual student tech competition.",
      "Overseeing judging portal architecture, developer team coordination, and software quality assurance.",
    ],
    tint: "#c99ab4",
  },
  {
    year: "2024",
    range: "2024 — PRESENT",
    title: "Core Team Lead",
    where: "Google Developer Student Club (GDSC), FAST-NUCES",
    points: [
      "Leading hands-on technical workshops and dev sprints on Cloud computing, Docker, and full-stack development.",
      "Mentored junior student developers in building real-world open-source applications.",
    ],
    tint: "#9fb79a",
  },
  {
    year: "2022",
    range: "2022 — 2026",
    title: "BS Software Engineering",
    where: "FAST-NUCES Lahore",
    points: [
      "Specializing in Distributed Computing, Operating Systems, Algorithm Optimization, and Software Architecture.",
      "Built multiple complex desktop, mobile, and web applications across C++, Java, and TypeScript.",
    ],
    tint: "#9db0d6",
  },
  {
    year: "2020",
    range: "2020 — 2022",
    title: "FSc Pre-Engineering",
    where: "Punjab Group of Colleges",
    points: [
      "Strong mathematical foundations in calculus, physics, and computational logic.",
      "Where the passion for computer engineering and problem solving first ignited.",
    ],
    tint: "#e6c58a",
  },
];

// The split-flap board
export const numbers = [
  { value: "09+", label: "Production projects" },
  { value: "-70%", label: "Manual overhead cut" },
  { value: "10+", label: "Dockerized services" },
  { value: "05+", label: "Tech teams led" },
  { value: "100%", label: "On-time delivery" },
  { value: "15+", label: "Technologies mastered" },
];

// The keyboard
export const toolbox: { row: string; keys: string[] }[] = [
  { row: "Languages", keys: ["C++", "TypeScript", "JavaScript", "Python", "Java", "PHP", "SQL"] },
  { row: "Frontend", keys: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"] },
  { row: "Backend", keys: ["Node.js", "Express", "PHP", "REST APIs", "WebSockets", "Microservices"] },
  { row: "Cloud & DevOps", keys: ["Docker", "n8n (Self-hosted)", "Microsoft Azure", "CI/CD", "Nginx"] },
  { row: "Databases", keys: ["PostgreSQL", "MongoDB", "MySQL", "Firebase", "Redis"] },
  { row: "Architecture", keys: ["Distributed Systems", "OOP", "Data Structures", "System Design"] },
];
