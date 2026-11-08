import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavItem { label: string; path: string; }

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const navItems: NavItem[] = [
        { label: 'Home',           path: '/' },
        { label: 'Projects',       path: '/projects' },
        { label: 'Skills',         path: '/skills' },
        { label: 'Experience',     path: '/experience' },
        { label: 'Certifications', path: '/certifications' },
        { label: 'Contact',        path: '/contact' },
    ];

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => { setIsOpen(false); }, [location.pathname]);

    return (
        <header
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 50,
                transition: 'all 300ms ease',
                borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
                background: scrolled
                    ? 'var(--color-bg-primary)'
                    : 'transparent',
                backdropFilter: scrolled ? 'blur(16px)' : 'none',
            }}
        >
            <div
                style={{
                    maxWidth: '1440px',
                    margin: '0 auto',
                    padding: '0 2rem',
                    height: '64px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '24px',
                }}
            >
                {/* ── Brand ── */}
                <Link
                    to="/"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        textDecoration: 'none',
                        flexShrink: 0,
                    }}
                >
                    {/* Terminal icon */}
                    <span
                        style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '8px',
                            background: 'var(--color-accent-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                        }}
                    >
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#181a20" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="4 17 10 11 4 5" />
                            <line x1="12" y1="19" x2="20" y2="19" />
                        </svg>
                    </span>
                    <span
                        style={{
                            fontSize: '17px',
                            fontWeight: 600,
                            letterSpacing: '-0.02em',
                            color: 'var(--color-text-primary)',
                            fontFamily: 'var(--font-display)',
                        }}
                    >
                        M. Abdullah
                    </span>
                </Link>

                {/* ── Desktop Nav ── */}
                <nav
                    style={{
                        alignItems: 'center',
                        gap: '4px',
                        flex: 1,
                        justifyContent: 'center',
                    }}
                    className="nav-desktop"
                >
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                style={{
                                    position: 'relative',
                                    padding: '6px 14px',
                                    fontSize: '13.5px',
                                    fontWeight: isActive ? 600 : 500,
                                    fontFamily: 'var(--font-sans)',
                                    color: isActive
                                        ? 'var(--color-accent-text)'
                                        : 'var(--color-text-secondary)',
                                    textDecoration: 'none',
                                    borderRadius: '6px',
                                    transition: 'all 200ms ease',
                                    background: isActive ? 'var(--color-bg-hover)' : 'transparent',
                                    whiteSpace: 'nowrap',
                                }}
                                onMouseEnter={(e) => {
                                    if (!isActive) {
                                        (e.currentTarget as HTMLElement).style.color = 'var(--color-text-primary)';
                                        (e.currentTarget as HTMLElement).style.background = 'var(--color-bg-hover)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!isActive) {
                                        (e.currentTarget as HTMLElement).style.color = 'var(--color-text-secondary)';
                                        (e.currentTarget as HTMLElement).style.background = 'transparent';
                                    }
                                }}
                            >
                                {item.label}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeBar"
                                        style={{
                                            position: 'absolute',
                                            bottom: '2px',
                                            left: '14px',
                                            right: '14px',
                                            height: '2px',
                                            background: 'var(--color-accent-primary)',
                                            borderRadius: '2px',
                                        }}
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* ── Right: Theme + Hamburger ── */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle navigation"
                        className="nav-mobile-btn"
                        style={{
                            padding: '8px',
                            borderRadius: '8px',
                            border: '1px solid var(--color-border)',
                            background: 'var(--color-bg-card)',
                            color: 'var(--color-text-secondary)',
                            cursor: 'pointer',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* ── Mobile Menu ── */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        style={{
                            background: 'var(--color-bg-secondary)',
                            borderBottom: '1px solid var(--color-border)',
                            overflow: 'hidden',
                        }}
                        className="nav-mobile-menu"
                    >
                        <div style={{ padding: '12px 24px 20px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            {navItems.map((item) => {
                                const isActive = location.pathname === item.path;
                                return (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        style={{
                                            padding: '10px 14px',
                                            borderRadius: '8px',
                                            fontSize: '14px',
                                            fontWeight: isActive ? 600 : 500,
                                            fontFamily: 'var(--font-sans)',
                                            color: isActive ? 'var(--color-accent-text)' : 'var(--color-text-secondary)',
                                            background: isActive ? 'var(--color-bg-card)' : 'transparent',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
