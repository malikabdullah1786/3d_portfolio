import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MagneticButton from '../components/MagneticButton';

export default function Hero() {
    const navigate = useNavigate();

    const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];
    const fadeUp = (delay: number) => ({
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.65, delay, ease: EASE },
    });

    const scrollDown = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="hero"
            style={{
                minHeight: 'calc(100vh - 5rem)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                padding: '4rem 1.5rem 6rem',
            }}
        >
            {/* Ambient background orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(252,213,53,0.06) 0%, transparent 70%)',
                        filter: 'blur(60px)',
                    }}
                    animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(240,185,11,0.05) 0%, transparent 70%)',
                        filter: 'blur(60px)',
                    }}
                    animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                />
            </div>

            {/* Main content — fully centered column */}
            <div
                style={{
                    width: '100%',
                    maxWidth: '800px',
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 10,
                    gap: '0',
                }}
            >
                {/* Profile avatar */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    style={{ marginBottom: '28px', position: 'relative', display: 'inline-block' }}
                >
                    {/* Rotating glow ring */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                        style={{
                            position: 'absolute',
                            inset: '-4px',
                            borderRadius: '50%',
                            background: 'var(--gradient-primary)',
                            opacity: 0.6,
                            zIndex: 0,
                        }}
                    />
                    <div
                        style={{
                            position: 'relative',
                            width: '128px',
                            height: '128px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            border: '4px solid var(--color-bg-primary)',
                            zIndex: 1,
                        }}
                    >
                        <img
                            src="/profile.jpeg"
                            alt="Muhammad Abdullah"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                if (target.parentElement) {
                                    target.parentElement.innerHTML =
                                        '<div style="width:100%;height:100%;background:linear-gradient(135deg,#FCD535,#F0B90B);display:flex;align-items:center;justify-content:center;font-size:2.5rem;font-weight:700;color:#181a20;">MA</div>';
                                }
                            }}
                        />
                    </div>
                </motion.div>

                {/* "Hi, I'm" label */}
                <motion.p
                    {...fadeUp(0.1)}
                    style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.18em',
                        color: 'var(--color-accent-text)',
                        marginBottom: '12px',
                        fontFamily: 'var(--font-sans)',
                    }}
                >
                    Hi, I'm
                </motion.p>

                {/* Name */}
                <motion.h1
                    {...fadeUp(0.2)}
                    style={{
                        fontSize: 'clamp(2.4rem, 7vw, 4.5rem)',
                        fontWeight: 600,
                        letterSpacing: '-0.03em',
                        lineHeight: 1.1,
                        color: 'var(--color-text-primary)',
                        fontFamily: 'var(--font-display)',
                        marginBottom: '16px',
                    }}
                >
                    Muhammad Abdullah
                </motion.h1>

                {/* Role tag — all on one line, no word-wrapping */}
                <motion.p
                    {...fadeUp(0.35)}
                    style={{
                        fontSize: 'clamp(1.1rem, 3vw, 1.6rem)',
                        fontWeight: 400,
                        fontStyle: 'italic',
                        color: 'var(--color-text-secondary)',
                        fontFamily: 'var(--font-display)',
                        marginBottom: '28px',
                        lineHeight: 1.4,
                    }}
                >
                    Software Engineer{' '}
                    <span style={{ color: 'var(--color-accent-text)', fontStyle: 'normal', fontWeight: 500 }}>
                        &
                    </span>{' '}
                    Automation Expert
                </motion.p>

                {/* Skill tags */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '10px',
                        marginBottom: '32px',
                    }}
                >
                    {['C++', 'React & Next.js', 'n8n & Docker', 'Azure DevOps', 'Cybersecurity'].map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                    ))}
                </motion.div>

                {/* Bio — institution & role */}
                <motion.div
                    {...fadeUp(0.65)}
                    style={{
                        marginBottom: '36px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '6px',
                    }}
                >
                    <p
                        style={{
                            fontSize: '15px',
                            color: 'var(--color-text-secondary)',
                            fontFamily: 'var(--font-sans)',
                            lineHeight: 1.6,
                        }}
                    >
                        Junior Software Engineering Student (5th Semester) at{' '}
                        <span style={{ color: 'var(--color-accent-text)', fontWeight: 600 }}>FAST-NUCES Lahore</span>
                    </p>
                    <p
                        style={{
                            fontSize: '13px',
                            color: 'var(--color-text-muted)',
                            fontFamily: 'var(--font-sans)',
                        }}
                    >
                        Full Stack Developer & DevOps Intern at{' '}
                        <span style={{ color: 'var(--color-text-secondary)', fontWeight: 500 }}>Zenolve</span>
                    </p>
                </motion.div>

                {/* CTA buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.8 }}
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '14px',
                        marginBottom: '40px',
                    }}
                >
                    <MagneticButton
                        className="btn btn-primary"
                        onClick={() => navigate('/projects')}
                    >
                        View My Work
                    </MagneticButton>
                    <MagneticButton
                        className="btn btn-secondary"
                        onClick={() => navigate('/contact')}
                    >
                        Get In Touch
                    </MagneticButton>
                </motion.div>

                {/* Social icons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.55, delay: 1.0 }}
                    style={{ display: 'flex', justifyContent: 'center', gap: '28px' }}
                >
                    {[
                        { href: 'https://github.com/malikabdullah1786', icon: Github, title: 'GitHub' },
                        { href: 'https://www.linkedin.com/in/malikabdullah1786/', icon: Linkedin, title: 'LinkedIn' },
                        { href: 'mailto:malikabdullah1786@gmail.com', icon: Mail, title: 'Email' },
                    ].map(({ href, icon: Icon, title }) => (
                        <motion.a
                            key={title}
                            href={href}
                            target={href.startsWith('mailto') ? undefined : '_blank'}
                            rel="noopener noreferrer"
                            title={title}
                            whileHover={{ scale: 1.2, y: -3 }}
                            whileTap={{ scale: 0.9 }}
                            style={{
                                color: 'var(--color-text-secondary)',
                                transition: 'color 200ms',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent-text)')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
                        >
                            <Icon size={22} />
                        </motion.a>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-6 left-1/2"
                style={{ transform: 'translateX(-50%)' }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                    onClick={scrollDown}
                    style={{
                        cursor: 'pointer',
                        color: 'var(--color-text-secondary)',
                        opacity: 0.5,
                        transition: 'opacity 200ms',
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.5')}
                >
                    <ArrowDown size={26} />
                </motion.div>
            </motion.div>
        </section>
    );
}
