// Certifications data

export interface Certification {
    id: string;
    name: string;
    issuer: string;
    category: 'cybersecurity' | 'programming' | 'blockchain' | 'web' | 'ai' | 'community' | 'academic';
    credentialId?: string;
    issuedDate?: string;
    description?: string;
    skills?: string[];
    featured: boolean;
}

export const certifications: Certification[] = [
    // Cybersecurity Certifications
    {
        id: 'strategic-cybersec',
        name: 'A Strategic Approach to Cybersecurity',
        issuer: 'University of Maryland',
        category: 'cybersecurity',
        credentialId: 'UC7SBVOGM1RZ',
        issuedDate: 'Jan 2026',
        skills: ['Cybersecurity', 'Ethical Hacking'],
        featured: true
    },
    {
        id: 'cybersec-everyone',
        name: 'Cybersecurity for Everyone',
        issuer: 'University of Maryland',
        category: 'cybersecurity',
        credentialId: '3ALKSNNAMTDZ',
        issuedDate: 'Jan 2026',
        skills: ['Cybersecurity'],
        featured: true
    },
    {
        id: 'ms-computers-os-security',
        name: 'Introduction to Computers and Operating Systems and Security',
        issuer: 'Microsoft',
        category: 'cybersecurity',
        credentialId: '18EF6MHK9XLR',
        issuedDate: 'Jan 2026',
        skills: ['Cybersecurity', 'Ethical Hacking'],
        featured: true
    },
    {
        id: 'isc2-security-principles',
        name: 'Security Principles',
        issuer: 'ISC2',
        category: 'cybersecurity',
        credentialId: 'GF4JBAPKBDHC',
        issuedDate: 'Jan 2026',
        skills: ['Cybersecurity'],
        featured: true
    },
    {
        id: 'kali-linux-hacking',
        name: 'Ethical Hacking with Kali Linux: Learn & Secure',
        issuer: 'EDUCBA',
        category: 'cybersecurity',
        credentialId: '0I9DKMK0UUPK',
        issuedDate: 'Jan 2026',
        skills: ['Cybersecurity', 'Ethical Hacking'],
        featured: true
    },
    {
        id: 'ethical-hacking-fundamentals',
        name: 'Ethical Hacking Fundamentals',
        issuer: 'LearnKartS',
        category: 'cybersecurity',
        credentialId: 'F16VAOCGFH9Q',
        issuedDate: 'Jan 2026',
        skills: ['Cybersecurity', 'Ethical Hacking'],
        featured: true
    },
    {
        id: 'ceh-unit2',
        name: 'Certified Ethical Hacker (CEH): Unit 2',
        issuer: 'United Latino Students Association',
        category: 'cybersecurity',
        credentialId: '3S8WDWZ4C3DJ',
        issuedDate: 'Jan 2026',
        skills: ['Cybersecurity', 'Ethical Hacking'],
        featured: true
    },
    {
        id: 'google-network-architecture',
        name: 'Network Architecture',
        issuer: 'Google',
        category: 'cybersecurity',
        credentialId: '00H5LCLPYSPI',
        issuedDate: 'Jan 2026',
        skills: ['Cybersecurity', 'Ethical Hacking'],
        featured: true
    },

    // Programming Certifications
    {
        id: 'python-data-structures',
        name: 'Python Data Structures',
        issuer: 'University of Michigan',
        category: 'programming',
        credentialId: '9NBO49YDZ4FN',
        issuedDate: 'Jan 2025',
        skills: ['Python Data Structures'],
        featured: true
    },
    {
        id: 'python-programming-intro',
        name: 'Introduction to Programming Using Python',
        issuer: 'University of Michigan',
        category: 'programming',
        credentialId: 'WEVNH2M4I6UQ',
        issuedDate: 'Jan 2025',
        skills: ['Python'],
        featured: true
    },
    {
        id: 'cpp-oop',
        name: 'Object-Oriented Data Structures in C++',
        issuer: 'University of Illinois Urbana-Champaign',
        category: 'programming',
        credentialId: 'AHVMWBJ23977',
        issuedDate: 'Jun 2025',
        skills: ['C++', 'OOP'],
        featured: true
    },
    {
        id: 'javascript-basics',
        name: 'Introduction to Javascript: The Basics',
        issuer: 'Coursera Project Network',
        category: 'programming',
        credentialId: 'YL2SYLF0MJFO',
        issuedDate: 'Jun 2025',
        skills: ['JavaScript'],
        featured: false
    },

    // Web & Tools Certifications
    {
        id: 'html-tables-forms',
        name: 'Tables and Forms in HTML',
        issuer: 'Coursera Project Network',
        category: 'web',
        credentialId: 'EMCFLK2L5MA7',
        issuedDate: 'Jun 2025',
        skills: ['HTML'],
        featured: false
    },
    {
        id: 'google-docs',
        name: 'Introduction to Google Docs',
        issuer: 'Coursera Project Network',
        category: 'web',
        credentialId: 'SO6N8YVBP3HL',
        issuedDate: 'Jun 2025',
        featured: false
    },
    {
        id: 'google-analytics',
        name: 'Getting Started in Google Analytics',
        issuer: 'Coursera Project Network',
        category: 'web',
        credentialId: 'XEYKQS90QS67',
        issuedDate: 'Jun 2025',
        featured: false
    },
    {
        id: 'wordpress-blog',
        name: 'Use WordPress to Create a Blog for your Business',
        issuer: 'Coursera Project Network',
        category: 'web',
        credentialId: '86GQ5QH45GHY',
        issuedDate: 'Jun 2025',
        featured: false
    },
    {
        id: 'mailchimp-marketing',
        name: 'Use Mailchimp to Build an E-mail Marketing Campaign',
        issuer: 'Coursera Project Network',
        category: 'web',
        credentialId: '1JOWZNH4LFPK',
        issuedDate: 'Jun 2025',
        featured: false
    },

    // AI & Blockchain
    {
        id: 'ai-for-everyone',
        name: 'AI For Everyone',
        issuer: 'DeepLearning.AI',
        category: 'ai',
        credentialId: 'ECPTYCK6F37T',
        issuedDate: 'Jun 2025',
        featured: true
    },
    {
        id: 'dapps',
        name: 'Decentralized Applications (DApps)',
        issuer: 'University at Buffalo, SUNY',
        category: 'blockchain',
        credentialId: 'YUXFZK54ZG46',
        issuedDate: 'Jan 2025',
        skills: ['Decentralized Applications'],
        featured: true
    },

    // Community & Academic
    {
        id: 'hospital-community',
        name: 'Hospital Community Service',
        issuer: 'Al Rehmat Benevolent Trust Hospital',
        category: 'community',
        issuedDate: 'May 2025',
        description: 'Volunteered to spread awareness about diabetes, hypertension, and hepatitis.',
        skills: ['Communication', 'Commercial Awareness'],
        featured: false
    },
    {
        id: 'softec-programming',
        name: 'SOFTEC Programming Competition',
        issuer: 'SOFTEC',
        category: 'academic',
        issuedDate: 'May 2025',
        description: 'Participated in one of the biggest tech events at FAST-NUCES.',
        skills: ['C++'],
        featured: true
    },
    {
        id: 'lums-religious-festival',
        name: 'Religious Festival Certificate',
        issuer: 'Lahore University of Management Sciences',
        category: 'academic',
        issuedDate: 'Feb 2025',
        featured: false
    },
    {
        id: 'giki-math-olympiad',
        name: 'Mathematics Olympiad',
        issuer: 'Ghulam Ishaq Khan University',
        category: 'academic',
        issuedDate: 'Jan 2026',
        featured: true
    }
];

export const certificationCategories = [
    { id: 'all', name: 'All', count: certifications.length },
    { id: 'cybersecurity', name: 'Cybersecurity', count: certifications.filter(c => c.category === 'cybersecurity').length },
    { id: 'programming', name: 'Programming', count: certifications.filter(c => c.category === 'programming').length },
    { id: 'web', name: 'Web & Tools', count: certifications.filter(c => c.category === 'web').length },
    { id: 'ai', name: 'AI', count: certifications.filter(c => c.category === 'ai').length },
    { id: 'blockchain', name: 'Blockchain', count: certifications.filter(c => c.category === 'blockchain').length },
    { id: 'community', name: 'Community', count: certifications.filter(c => c.category === 'community').length },
    { id: 'academic', name: 'Academic', count: certifications.filter(c => c.category === 'academic').length },
];

export const securityTools = [
    { name: 'Metasploit', category: 'Exploitation' },
    { name: 'Nmap', category: 'Exploitation' },
    { name: 'Gobuster', category: 'Exploitation' },
    { name: 'Burp Suite', category: 'Analysis' },
    { name: 'Wireshark', category: 'Analysis' },
    { name: 'OWASP ZAP', category: 'Analysis' },
    { name: 'Kali Linux', category: 'Operating System' },
    { name: 'Parrot OS', category: 'Operating System' },
];
