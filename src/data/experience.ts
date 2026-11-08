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
        title: 'Full Stack Developer, DevOps & Automation Engineer Intern',
        organization: 'Zenolve',
        type: 'work',
        duration: 'January 2025 – Present',
        description: 'Key technical contributor to the digitization and automation of complex property and media systems.',
        achievements: [
            'Contributing to the development of the UK’s largest property website using PHP, Python, and Java.',
            'Architecting complex automation workflows with self-hosted n8n to streamline data processing and reduce manual overhead.',
            'Specializing in Dockerization and deployment via Microsoft Azure Cloud to ensure environment consistency.',
            'Managing end-to-end digitization of property maintenance systems, including automated expert-verification modules for plumbing and electrical issues.',
            'Leading the development of Reel Vault, an application focused on high-efficiency media storage and retrieval logic.'
        ],
        techStack: ['PHP', 'Python', 'Java', 'n8n', 'Docker', 'Microsoft Azure', 'Reel Vault'],
        icon: Briefcase,
        color: '#6366f1'
    },
    {
        id: 'softec',
        title: 'Deputy Head of Software',
        organization: 'SOFTEC (FAST-NUCES)',
        type: 'leadership',
        duration: '2024 - Present',
        description: 'Leading technical teams and managing digital infrastructure for Pakistan’s premier IT flagship event.',
        achievements: [
            'Supervising website development and deployment for SOFTEC competitions.',
            'Coordinating technical support teams during the flagship event.',
            'Managing cloud hosting and system administration for user registrations.'
        ],
        icon: Users,
        color: '#f59e0b'
    },
    {
        id: 'office-dept',
        title: 'Deputy',
        organization: 'Office Department',
        type: 'leadership',
        duration: '2024 - Present',
        description: 'Overseeing departmental coordination and administrative efficiency.',
        achievements: [
            'Managing inter-departmental communications and scheduling.',
            'Organizing logistics and workflow structures for administrative teams.',
            'Streamlining document flows and operations.'
        ],
        icon: Users,
        color: '#10b981'
    },
    {
        id: 'media-pr',
        title: 'Officer',
        organization: 'Media & Public Relations (PR) Societies',
        type: 'leadership',
        duration: '2024 - Present',
        description: 'Managing brand communication and media coverage for large-scale events.',
        achievements: [
            'Designing and coordinating social media marketing campaigns.',
            'Bridging external media outlets with internal societies to maximize outreach.',
            'Handling public relations and communications for campus events.'
        ],
        icon: Users,
        color: '#ec4899'
    },
    {
        id: 'gdsc',
        title: 'Officer',
        organization: 'Google Developer Student Club (GDSC)',
        type: 'leadership',
        duration: '2024 - Present',
        description: 'Promoting Google technologies and mentoring junior developers.',
        achievements: [
            'Conducting workshops on web technologies and Google APIs.',
            'Mentoring students in their programming journeys and projects.',
            'Collaborating on local community impact projects.'
        ],
        icon: Users,
        color: '#06b6d4'
    },
    {
        id: 'fast-nuces',
        title: 'BS Software Engineering',
        organization: 'FAST-NUCES Lahore',
        type: 'education',
        duration: '2024 – 2028',
        description: 'Currently in the 5th Semester (Junior Student) of Software Engineering.',
        achievements: [
            'Advanced studies in C++, OOP, Data Structures, and Database Systems.',
            'Active participant and organizer in campus technical societies.',
            'Runner-up in APM \'26 (All Pakistan Mathematics Olympiad - Scavenger Hunt).'
        ],
        icon: GraduationCap,
        color: '#06b6d4'
    },
    {
        id: 'gcu-lahore',
        title: 'Intermediate FSc Pre-Engineering',
        organization: 'Government College University (GCU) Lahore',
        type: 'education',
        duration: 'Completed',
        description: 'High School/College education specializing in Pre-Engineering sciences.',
        achievements: [
            'Grade: A+',
            'Excelled in Mathematics, Physics, and Chemistry.',
            'Developed analytical problem-solving skills.'
        ],
        icon: GraduationCap,
        color: '#8b5cf6'
    }
];
