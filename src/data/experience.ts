import { Briefcase, GraduationCap, Users, type LucideIcon } from 'lucide-react';

export interface Experience {
    id: string;
    title: string;
    organization: string;
    type: 'work' | 'education' | 'leadership';
    duration: string;
    description: string;
    achievements: string[];
    techStack?: string[];
    icon: LucideIcon;
    color: string;
}

export const experiences: Experience[] = [
    {
        id: 'zenolve',
        title: 'Full Stack Intern',
        organization: 'Zenolve',
        type: 'work',
        duration: '2025',
        description: 'Led property management digitization and automation initiatives, creating comprehensive workflow solutions.',
        achievements: [
            'Created 450+ n8n automation workflows',
            'Implemented Docker containerization for dev environments',
            'Streamlined deployment pipelines',
            'Contributed to full-stack development using PHP and Python'
        ],
        techStack: ['Docker', 'n8n', 'PHP', 'Python', 'Automation'],
        icon: Briefcase,
        color: '#6366f1'
    },
    {
        id: 'property-uk',
        title: 'Full Stack Developer',
        organization: 'Property Management System (UK)',
        type: 'work',
        duration: '2025',
        description: 'Digitized a comprehensive London-based property management system, implementing secure verification and real-time dispatch workflows.',
        achievements: [
            'Multi-tier verification platform for service experts',
            'Real-time dispatch for urban maintenance (plumbing, electrical)',
            'Migrated manual paperwork to Docker-driven automated environment',
            'Scaled massive property website for London market'
        ],
        techStack: ['PHP', 'Docker', 'MySQL', 'n8n', 'REST APIs'],
        icon: Briefcase,
        color: '#8b5cf6'
    },
    {
        id: 'gdsc',
        title: 'GDSC Lead',
        organization: 'Google Developer Student Clubs',
        type: 'leadership',
        duration: 'Current',
        description: 'Fostering a community of developers at FAST-NUCES Lahore, organizing tech events and workshops.',
        achievements: [
            'Leading developer community initiatives',
            'Organizing workshops and tech talks',
            'Mentoring junior developers',
            'Building connections with Google ecosystem'
        ],
        icon: Users,
        color: '#10b981'
    },
    {
        id: 'softec',
        title: 'SOFTEC Deputy',
        organization: 'Office Department',
        type: 'leadership',
        duration: 'Current',
        description: 'Managing campus-wide tech initiatives and supporting the operational success of SOFTEC events.',
        achievements: [
            'Managing operational logistics',
            'Coordinating with multiple teams',
            'Supporting tech competition management',
            'Event planning and execution'
        ],
        icon: Users,
        color: '#f59e0b'
    },
    {
        id: 'media-pr',
        title: 'Media & PR Officer',
        organization: 'University Society',
        type: 'leadership',
        duration: 'Current',
        description: 'Bridging the gap between technical innovation and public communication.',
        achievements: [
            'Managing social media presence',
            'Creating promotional content',
            'Press releases and communications',
            'Event documentation and coverage'
        ],
        icon: Users,
        color: '#ec4899'
    },
    {
        id: 'fast-nuces',
        title: 'BS Software Engineering',
        organization: 'FAST-NUCES Lahore',
        type: 'education',
        duration: 'Current',
        description: 'Pursuing a degree in Software Engineering with focus on C++, system optimization, and full-stack development.',
        achievements: [
            'Current CGPA: A+ Grade',
            'Advanced C++ and data structures',
            'APM \'26 Runner-up (Scavenger Hunt)',
            'Leading tech communities (GDSC Lead)'
        ],
        icon: GraduationCap,
        color: '#06b6d4'
    },
    {
        id: 'gcu-lahore',
        title: 'FSc Pre-Engineering',
        organization: 'Government College University Lahore',
        type: 'education',
        duration: 'Completed',
        description: 'Pre-Engineering studies with focus on Mathematics, Physics, and Chemistry.',
        achievements: [
            'Grade: A+',
            'Strong foundation in Mathematics',
            'Physics & Chemistry excellence',
            'Engineering entrance preparation'
        ],
        icon: GraduationCap,
        color: '#8b5cf6'
    },
    {
        id: 'dar-e-arqam',
        title: 'Matriculation',
        organization: 'Dar e Arqam School',
        type: 'education',
        duration: 'Completed',
        description: 'Secondary education with strong academic foundation.',
        achievements: [
            'Grade: A+',
            'Academic excellence',
            'Foundation in Sciences',
            'Extra-curricular activities'
        ],
        icon: GraduationCap,
        color: '#10b981'
    }
];

