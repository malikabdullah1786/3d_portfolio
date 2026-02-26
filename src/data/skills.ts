import {
    Code2,
    Smartphone,
    Server,
    Database,
    Container,
    Cloud,
    Shield,
    Palette,
    Wrench,
    BookOpen,
    type LucideIcon
} from 'lucide-react';

export interface Skill {
    name: string;
    icon?: string;
    level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface SkillCategory {
    name: string;
    icon: LucideIcon;
    color: string;
    skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
    {
        name: 'Languages',
        icon: Code2,
        color: '#6366f1',
        skills: [
            { name: 'C++', level: 'expert' },
            { name: 'Python', level: 'advanced' },
            { name: 'JavaScript', level: 'advanced' },
            { name: 'TypeScript', level: 'advanced' },
            { name: 'PHP', level: 'intermediate' },
            { name: 'Dart', level: 'intermediate' },
            { name: 'SQL', level: 'advanced' },
        ]
    },
    {
        name: 'Frontend',
        icon: Smartphone,
        color: '#06b6d4',
        skills: [
            { name: 'React', level: 'advanced' },
            { name: 'Next.js', level: 'advanced' },
            { name: 'Flutter', level: 'intermediate' },
            { name: 'Tailwind CSS', level: 'advanced' },
            { name: 'HTML5', level: 'expert' },
            { name: 'CSS3', level: 'expert' },
        ]
    },
    {
        name: 'Backend',
        icon: Server,
        color: '#10b981',
        skills: [
            { name: 'Node.js', level: 'advanced' },
            { name: 'FastAPI', level: 'advanced' },
            { name: 'Express.js', level: 'advanced' },
        ]
    },
    {
        name: 'Databases',
        icon: Database,
        color: '#f59e0b',
        skills: [
            { name: 'MongoDB', level: 'advanced' },
            { name: 'Supabase', level: 'advanced' },
            { name: 'SQL Server', level: 'intermediate' },
            { name: 'Firebase', level: 'advanced' },
        ]
    },
    {
        name: 'DevOps & Automation',
        icon: Container,
        color: '#8b5cf6',
        skills: [
            { name: 'Docker', level: 'advanced' },
            { name: 'n8n', level: 'expert' },
            { name: 'Git', level: 'advanced' },
            { name: 'GitHub', level: 'advanced' },
            { name: 'Render', level: 'intermediate' },
            { name: 'Vercel', level: 'intermediate' },
        ]
    },
    {
        name: 'Cloud & APIs',
        icon: Cloud,
        color: '#ec4899',
        skills: [
            { name: 'Firebase Auth', level: 'advanced' },
            { name: 'Google Maps SDK', level: 'advanced' },
            { name: 'Twilio', level: 'advanced' },
            { name: 'Google Cloud', level: 'intermediate' },
        ]
    },
    {
        name: 'Cybersecurity',
        icon: Shield,
        color: '#ef4444',
        skills: [
            { name: 'Kali Linux', level: 'advanced' },
            { name: 'Metasploit', level: 'intermediate' },
            { name: 'Gobuster', level: 'intermediate' },
            { name: 'Burp Suite', level: 'intermediate' },
            { name: 'Wireshark', level: 'intermediate' },
            { name: 'Nmap', level: 'intermediate' },
        ]
    },
    {
        name: 'Design & UI',
        icon: Palette,
        color: '#14b8a6',
        skills: [
            { name: 'Figma', level: 'intermediate' },
            { name: 'Lucide Icons', level: 'advanced' },
            { name: 'Framer Motion', level: 'intermediate' },
        ]
    },
    {
        name: 'IDE & Tools',
        icon: Wrench,
        color: '#64748b',
        skills: [
            { name: 'VS Code', level: 'expert' },
            { name: 'Android Studio', level: 'intermediate' },
            { name: 'Postman', level: 'advanced' },
            { name: 'Chrome DevTools', level: 'advanced' },
        ]
    },
    {
        name: 'Learning Platforms',
        icon: BookOpen,
        color: '#0ea5e9',
        skills: [
            { name: 'Coursera', level: 'expert' },
            { name: 'LinkedIn Learning', level: 'intermediate' },
        ]
    }
];

// All tech icons for the marquee
export const allTechIcons = [
    'C++', 'Python', 'JavaScript', 'TypeScript', 'PHP', 'Dart',
    'React', 'Next.js', 'Flutter', 'Tailwind', 'HTML5', 'CSS3',
    'Node.js', 'Express', 'FastAPI',
    'MongoDB', 'Supabase', 'Firebase', 'SQL Server',
    'Docker', 'Git', 'GitHub', 'n8n', 'Render', 'Vercel',
    'Firebase Auth', 'Google Maps', 'Twilio', 'Google Cloud',
    'Kali Linux', 'Metasploit', 'Gobuster', 'Burp Suite', 'Wireshark',
    'Figma', 'VS Code', 'Postman'
];
