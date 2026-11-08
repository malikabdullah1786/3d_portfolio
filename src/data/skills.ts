import {
    Code2,
    Smartphone,
    Server,
    Database,
    Container,
    Shield,
    Wrench,
    Brain,
    Users,
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
            { name: 'JavaScript', level: 'advanced' },
            { name: 'TypeScript', level: 'advanced' },
            { name: 'Python', level: 'advanced' },
            { name: 'Java', level: 'advanced' },
            { name: 'PHP', level: 'intermediate' },
            { name: 'Dart', level: 'intermediate' },
            { name: 'SQL', level: 'advanced' },
        ]
    },
    {
        name: 'Web Development',
        icon: Server,
        color: '#10b981',
        skills: [
            { name: 'React.js', level: 'advanced' },
            { name: 'Next.js', level: 'advanced' },
            { name: 'MERN/PERN Stack', level: 'advanced' },
            { name: 'HTML5', level: 'expert' },
            { name: 'CSS3', level: 'expert' },
            { name: 'Tailwind CSS', level: 'advanced' },
        ]
    },
    {
        name: 'App Development',
        icon: Smartphone,
        color: '#06b6d4',
        skills: [
            { name: 'Flutter (.dart)', level: 'advanced' },
            { name: 'Restful APIs', level: 'advanced' },
            { name: 'Ride-Sharing architecture', level: 'advanced' },
        ]
    },
    {
        name: 'Automation & DevOps',
        icon: Container,
        color: '#8b5cf6',
        skills: [
            { name: 'n8n (Workflow Automation)', level: 'expert' },
            { name: 'Docker (Containerization)', level: 'advanced' },
            { name: 'Microsoft Azure', level: 'advanced' },
            { name: 'Azure DevOps', level: 'advanced' },
            { name: 'CI/CD Pipelines', level: 'advanced' },
            { name: 'Git & GitHub', level: 'expert' },
        ]
    },
    {
        name: 'AI & LLM Engineering',
        icon: Brain,
        color: '#ec4899',
        skills: [
            { name: 'Prompt Engineering', level: 'expert' },
            { name: 'Gemini API', level: 'expert' },
            { name: 'DeepSeek API', level: 'expert' },
            { name: 'Data Validation', level: 'advanced' },
            { name: 'RLHF Concepts', level: 'intermediate' },
        ]
    },
    {
        name: 'Databases & Cloud',
        icon: Database,
        color: '#f59e0b',
        skills: [
            { name: 'PostgreSQL', level: 'advanced' },
            { name: 'MongoDB', level: 'advanced' },
            { name: 'Supabase', level: 'advanced' },
            { name: 'Azure SQL', level: 'advanced' },
            { name: 'Firebase', level: 'advanced' },
        ]
    },
    {
        name: 'Cybersecurity',
        icon: Shield,
        color: '#ef4444',
        skills: [
            { name: 'Ethical Hacking', level: 'advanced' },
            { name: 'Kali Linux', level: 'advanced' },
            { name: 'Network Architecture', level: 'advanced' },
            { name: 'Security Principles', level: 'advanced' },
        ]
    },
    {
        name: 'Professional Skills',
        icon: Users,
        color: '#14b8a6',
        skills: [
            { name: 'Leadership', level: 'expert' },
            { name: 'Project Management', level: 'advanced' },
            { name: 'Public Relations', level: 'advanced' },
            { name: 'Communication', level: 'expert' },
            { name: 'Analytical Problem Solving', level: 'expert' },
            { name: 'Event Management', level: 'advanced' },
        ]
    },
    {
        name: 'Tools & IDEs',
        icon: Wrench,
        color: '#64748b',
        skills: [
            { name: 'Qt Framework', level: 'advanced' },
            { name: 'VS Code', level: 'expert' },
            { name: 'Postman', level: 'advanced' },
            { name: 'Docker Desktop', level: 'advanced' },
        ]
    }
];

// All tech icons for the marquee
export const allTechIcons = [
    'C++', 'Java', 'Python', 'JavaScript', 'TypeScript', 'PHP', 'Dart',
    'React.js', 'Next.js', 'Flutter', 'Tailwind', 'HTML5', 'CSS3',
    'Node.js', 'Express', 'Spring Boot', 'n8n',
    'PostgreSQL', 'MongoDB', 'Supabase', 'Firebase', 'Azure SQL',
    'Docker', 'Git', 'GitHub', 'Microsoft Azure', 'Azure DevOps', 'CI/CD Pipelines',
    'DeepSeek API', 'Gemini API', 'Twilio', 'RESTful APIs',
    'Kali Linux', 'Qt Framework', 'VS Code', 'Postman'
];
