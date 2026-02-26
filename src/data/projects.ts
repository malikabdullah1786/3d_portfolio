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
        id: 'rideshare',
        title: 'Ride Share APK',
        role: 'Founder & CEO',
        description: 'A ride-sharing platform empowering students and daily commuters by turning their essential travel into a sustainable source of income or savings.',
        longDescription: 'Built from scratch as a passion project to solve a real-world problem. The app connects riders and drivers in a purposeful way, enabling empty seats to become income opportunities without altering daily routines.',
        techStack: ['Flutter', 'Dart', 'Node.js', 'Express', 'MongoDB', 'Firebase Auth', 'Google Maps SDK'],
        features: [
            'Google Maps Integration with live navigation',
            'Real-Time Fare Calculation based on distance & traffic',
            'Admin-Managed Driver Verification',
            'CNIC/Email secure verification',
            'Dual-role Dashboard (Driver & Passenger)',
            'Driver Ratings & Reviews system'
        ],
        liveUrl: 'https://lnkd.in/ekm_GvHz',
        color: '#06b6d4',
        featured: true
    },
    {
        id: 'gemini-clone',
        title: 'Gemini AI Clone',
        role: 'Developer',
        description: 'A modern AI interface clone built to explore cutting-edge frontend capabilities and AI integration patterns.',
        longDescription: 'Developed to demonstrate proficiency in modern React ecosystem and AI API integration, featuring a sleek, responsive interface that mimics the conversational AI experience.',
        techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'AI API'],
        features: [
            'Modern conversational UI',
            'AI API integration',
            'Real-time response streaming',
            'Code syntax highlighting',
            'Responsive dark theme'
        ],
        color: '#8b5cf6',
        featured: true
    },
    {
        id: 'sms-marketing',
        title: 'SMS Marketing Backend',
        role: 'Developer',
        description: 'A multi-tenant SaaS platform for restaurant marketing during non-busy hours.',
        longDescription: 'Designed specifically for restaurant marketing automation, this backend system enables targeted SMS campaigns during off-peak hours to maximize customer engagement and revenue.',
        techStack: ['Python', 'FastAPI', 'Supabase', 'Twilio', 'PostgreSQL'],
        features: [
            'Multi-tenant architecture',
            'Automated campaign scheduling',
            'Twilio SMS integration',
            'Customer segmentation',
            'Analytics dashboard'
        ],
        color: '#10b981',
        featured: true
    },
    {
        id: 'reel-vault',
        title: 'ReelVault MVP',
        role: 'Founder & Developer',
        description: 'AI-powered iOS app for organizing saved Instagram reels with automatic categorization, transcription, and intelligent search.',
        longDescription: 'ReelVault is an innovative content management solution that helps users organize their saved Instagram reels. The app uses AI to automatically transcribe audio (OpenAI Whisper), generate 2-3 sentence summaries (GPT-4), and categorize content into Business Ideas, Marketing Tips, Productivity, Case Studies, or Other. Features simple keyword search across summaries and transcriptions.',
        techStack: ['Swift', 'iOS', 'Node.js', 'PostgreSQL', 'Redis', 'OpenAI Whisper', 'GPT-4', 'Instagram oEmbed API'],
        features: [
            'Instagram reel URL import with metadata extraction',
            'AI audio transcription using OpenAI Whisper',
            'GPT-4 powered 2-3 sentence summaries',
            'Automatic categorization (5 categories)',
            'Keyword search across summaries & transcriptions',
            'Category-based browsing & filtering',
            'Reel detail view with full transcription',
            'Background job queue for async processing',
            'iOS Share Extension (stretch goal)',
            'Email + password authentication'
        ],
        color: '#f59e0b',
        featured: true
    },
    {
        id: 'bank-management',
        title: 'Bank Management System',
        role: 'Developer',
        description: 'A comprehensive banking solution built in C++ featuring complete account management, transactions, payment history, and financial operations.',
        longDescription: 'A full-featured bank management system implementing core banking operations with robust data structures, file handling for persistence, and secure authentication. Includes loan management, mini statements, and complete transaction tracking. Demonstrates advanced C++ programming with OOP principles.',
        techStack: ['C++', 'Data Structures', 'File Handling', 'OOP'],
        features: [
            'Account creation & management (Savings, Current, Fixed Deposit)',
            'Deposit & withdrawal operations with validation',
            'Fund transfers between accounts',
            'Complete payment history & transaction logs',
            'Mini statement & detailed account statements',
            'Interest calculation (monthly/yearly)',
            'Loan application & EMI calculator',
            'Balance inquiry & account details',
            'Secure PIN-based authentication',
            'Admin panel for account management'
        ],
        githubUrl: 'https://github.com/malikabdullah1786',
        color: '#3b82f6',
        featured: true
    },
    {
        id: 'hospital-management',
        title: 'Hospital Management System',
        role: 'Developer',
        description: 'A Qt-based desktop application integrating DeepSeek AI for medical insights and patient record management.',
        longDescription: 'A comprehensive healthcare management system built with Qt framework applying OOP principles to manage patient records while integrating DeepSeek AI for intelligent medical insights. Designed for healthcare professionals with a secure, user-friendly interface.',
        techStack: ['Qt Framework', 'C++', 'DeepSeek AI', 'SQLite', 'OOP'],
        features: [
            'OOP-driven architecture design',
            'Patient record management (CRUD)',
            'DeepSeek AI medical insights integration',
            'Secure data storage & encryption',
            'Intuitive desktop UI with Qt',
            'Medical history tracking'
        ],
        githubUrl: 'https://github.com/malikabdullah1786',
        color: '#ef4444',
        featured: true
    },
    {
        id: 'inventory-management',
        title: 'Inventory Management System',
        role: 'Developer',
        description: 'A robust inventory tracking and management solution for businesses to monitor stock levels and operations.',
        longDescription: 'An efficient inventory management system designed to help businesses track products, manage stock levels, and streamline operations. Features real-time inventory updates and comprehensive reporting.',
        techStack: ['C++', 'Data Structures', 'File I/O', 'OOP'],
        features: [
            'Product catalog management',
            'Stock level tracking',
            'Low stock alerts',
            'Sales & purchase records',
            'Inventory reports generation',
            'Search & filter functionality'
        ],
        githubUrl: 'https://github.com/malikabdullah1786',
        color: '#a855f7',
        featured: false
    }
];

