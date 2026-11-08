import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
    const socialLinks = [
        { icon: Github,   href: 'https://github.com/malikabdullah1786',           label: 'GitHub' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/malikabdullah1786/', label: 'LinkedIn' },
        { icon: Mail,     href: 'mailto:malikabdullah1786@gmail.com',             label: 'Email' },
    ];

    const navColumns = [
        {
            heading: 'Portfolio',
            links: [
                { label: 'Home',       path: '/' },
                { label: 'Projects',   path: '/projects' },
                { label: 'Skills',     path: '/skills' },
            ],
        },
        {
            heading: 'More',
            links: [
                { label: 'Experience',     path: '/experience' },
                { label: 'Certifications', path: '/certifications' },
                { label: 'Contact',        path: '/contact' },
            ],
        },
    ];

    return (
        <footer
            style={{
                background: 'var(--color-bg-card)',
                borderTop: '1px solid var(--color-border)',
                marginTop: 'auto',
                fontFamily: 'var(--font-sans)',
            }}
        >
            {/* Main footer content */}
            <div
                style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '56px 2rem 40px',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '40px',
                    alignItems: 'flex-start',
                }}
            >
                {/* ── Brand column ── */}
                <div style={{ maxWidth: '300px' }}>
                    <Link
                        to="/"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            textDecoration: 'none',
                            marginBottom: '16px',
                        }}
                    >
                        <span
                            style={{
                                width: '30px',
                                height: '30px',
                                borderRadius: '7px',
                                background: 'var(--color-accent-primary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                            }}
                        >
                            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#181a20" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="4 17 10 11 4 5" />
                                <line x1="12" y1="19" x2="20" y2="19" />
                            </svg>
                        </span>
                        <span
                            style={{
                                fontSize: '17px',
                                fontWeight: 600,
                                color: 'var(--color-text-primary)',
                                fontFamily: 'var(--font-display)',
                                letterSpacing: '-0.02em',
                            }}
                        >
                            Muhammad Abdullah
                        </span>
                    </Link>
                    <p
                        style={{
                            fontSize: '13.5px',
                            color: 'var(--color-text-secondary)',
                            lineHeight: 1.7,
                            marginBottom: '20px',
                        }}
                    >
                        Junior Software Engineering Student at FAST-NUCES Lahore.
                        Building Full Stack systems, DevOps pipelines, and AI automation solutions.
                    </p>

                    {/* Social icons */}
                    <div style={{ display: 'flex', gap: '10px' }}>
                        {socialLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                                rel="noopener noreferrer"
                                aria-label={link.label}
                                style={{
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '8px',
                                    border: '1px solid var(--color-border)',
                                    background: 'var(--color-bg-secondary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--color-text-secondary)',
                                    textDecoration: 'none',
                                    transition: 'all 200ms ease',
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-accent-primary)';
                                    (e.currentTarget as HTMLElement).style.color = 'var(--color-accent-text)';
                                    (e.currentTarget as HTMLElement).style.background = 'var(--color-bg-hover)';
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)';
                                    (e.currentTarget as HTMLElement).style.color = 'var(--color-text-secondary)';
                                    (e.currentTarget as HTMLElement).style.background = 'var(--color-bg-secondary)';
                                }}
                            >
                                <link.icon size={16} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* ── Nav columns ── */}
                {navColumns.map((col) => (
                    <div key={col.heading}>
                        <h4
                            style={{
                                fontSize: '11px',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                color: 'var(--color-text-primary)',
                                marginBottom: '16px',
                            }}
                        >
                            {col.heading}
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {col.links.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        style={{
                                            fontSize: '13.5px',
                                            color: 'var(--color-text-muted)',
                                            textDecoration: 'none',
                                            transition: 'color 180ms ease',
                                        }}
                                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text-primary)')}
                                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                {/* ── Contact column ── */}
                <div>
                    <h4
                        style={{
                            fontSize: '11px',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            color: 'var(--color-text-primary)',
                            marginBottom: '16px',
                        }}
                    >
                        Get In Touch
                    </h4>
                    <p
                        style={{
                            fontSize: '13px',
                            color: 'var(--color-text-secondary)',
                            lineHeight: 1.65,
                            marginBottom: '14px',
                        }}
                    >
                        Open to collaboration, internships, and freelance contracts.
                    </p>
                    <a
                        href="mailto:malikabdullah1786@gmail.com"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            fontSize: '13px',
                            fontWeight: 500,
                            color: 'var(--color-accent-text)',
                            textDecoration: 'none',
                            transition: 'opacity 180ms',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
                        onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                    >
                        malikabdullah1786@gmail.com
                        <ExternalLink size={12} />
                    </a>
                </div>
            </div>

            {/* ── Bottom bar ── */}
            <div
                style={{
                    borderTop: '1px solid var(--color-border)',
                    padding: '18px 2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '16px',
                }}
            >
                <p
                    style={{
                        fontSize: '12px',
                        color: 'var(--color-text-muted)',
                        textAlign: 'center',
                    }}
                >
                    © {new Date().getFullYear()} Muhammad Abdullah — All rights reserved.
                </p>
            </div>
        </footer>
    );
}
