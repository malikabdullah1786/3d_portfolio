import { motion } from 'framer-motion';
import { useState } from 'react';
import { Shield, Award, CheckCircle } from 'lucide-react';
import { certifications, certificationCategories, securityTools } from '../data/certifications';
import InfiniteMarquee from '../components/InfiniteMarquee';

export default function Certifications() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [flippedCard, setFlippedCard] = useState<string | null>(null);

    const filteredCerts = activeCategory === 'all'
        ? certifications
        : certifications.filter(cert => cert.category === activeCategory);

    return (
        <section id="certifications" className="section py-24 relative overflow-hidden font-sans">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            {/* ── Centered header area ── */}
            <div className="page-wrapper relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="font-sans uppercase tracking-widest text-xs font-semibold text-[var(--color-accent-text)] mb-2 block">
                        Verified Expertise
                    </span>
                    <h2 className="section-title text-[var(--color-text-primary)]">
                        26+ Certifications
                    </h2>
                    <p className="section-subtitle mt-4 font-sans">
                        Certified in Cybersecurity, Programming & Emerging Technologies
                    </p>
                </motion.div>

                {/* Featured Certification */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ maxWidth: '720px', margin: '0 auto 56px' }}
                >
                    <div
                        style={{
                            background: 'var(--color-bg-card)',
                            border: '1px solid var(--color-border)',
                            borderRadius: '14px',
                            padding: '28px 32px',
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                    >
                        {/* Decorative icon */}
                        <div style={{ position: 'absolute', top: 0, right: 0, width: '120px', height: '120px', opacity: 0.06, pointerEvents: 'none' }}>
                            <Shield size={120} style={{ color: 'var(--color-accent-primary)' }} />
                        </div>

                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                            <div
                                style={{
                                    width: '52px', height: '52px', borderRadius: '10px', flexShrink: 0,
                                    background: 'var(--color-bg-secondary)',
                                    border: '1px solid var(--color-border)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}
                            >
                                <Award size={24} style={{ color: 'var(--color-accent-text)' }} />
                            </div>
                            <div>
                                <span
                                    style={{
                                        fontSize: '10px', fontWeight: 700, textTransform: 'uppercase',
                                        letterSpacing: '0.1em', color: 'var(--color-accent-text)',
                                    }}
                                >
                                    Featured Certificate
                                </span>
                                <h3
                                    style={{
                                        fontSize: '1.25rem', fontWeight: 500, marginTop: '4px',
                                        color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)',
                                        lineHeight: 1.3,
                                    }}
                                >
                                    Google Cybersecurity Professional Certificate
                                </h3>
                                <p
                                    style={{
                                        fontSize: '14px', color: 'var(--color-text-secondary)',
                                        marginTop: '8px', lineHeight: 1.65,
                                    }}
                                >
                                    Comprehensive program covering security operations, threat detection,
                                    incident response, and hands-on experience with SIEM tools.
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '14px', color: '#22c55e' }}>
                                    <CheckCircle size={16} />
                                    <span style={{ fontSize: '13px', fontWeight: 600 }}>Verified by Google</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Category Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginBottom: '40px' }}
                >
                    {certificationCategories.slice(0, 6).map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            style={{
                                padding: '6px 16px',
                                borderRadius: '6px',
                                fontSize: '11.5px',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.07em',
                                fontFamily: 'var(--font-sans)',
                                cursor: 'pointer',
                                border: activeCategory === category.id
                                    ? '1px solid var(--color-accent-primary)'
                                    : '1px solid var(--color-border)',
                                background: activeCategory === category.id
                                    ? 'var(--color-accent-primary)'
                                    : 'var(--color-bg-secondary)',
                                color: activeCategory === category.id
                                    ? '#181a20'
                                    : 'var(--color-text-secondary)',
                                transition: 'all 180ms ease',
                            }}
                        >
                            {category.name}
                            <span style={{ opacity: 0.65, marginLeft: '4px' }}>({category.count})</span>
                        </button>
                    ))}
                </motion.div>
            </div>

            {/* ── Full-width Marquee (outside page-wrapper intentionally) ── */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ marginBottom: '60px' }}
            >
                <InfiniteMarquee speed={50} direction="left" pauseOnHover>
                    {filteredCerts.map((cert) => (
                        <motion.div
                            key={cert.id}
                            className="relative cursor-pointer"
                            style={{ width: '272px', height: '152px', perspective: '1000px' }}
                            onClick={() => setFlippedCard(flippedCard === cert.id ? null : cert.id)}
                            whileHover={{ scale: 1.03 }}
                        >
                            <motion.div
                                style={{ width: '100%', height: '100%', transformStyle: 'preserve-3d' }}
                                animate={{ rotateY: flippedCard === cert.id ? 180 : 0 }}
                                transition={{ duration: 0.55 }}
                            >
                                {/* Front */}
                                <div
                                    style={{
                                        position: 'absolute', inset: 0,
                                        background: 'var(--color-bg-card)',
                                        border: '1px solid var(--color-border)',
                                        borderRadius: '10px',
                                        padding: '16px',
                                        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                                        backfaceVisibility: 'hidden',
                                    }}
                                >
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                                            <Shield size={13} style={{ color: 'var(--color-accent-text)', flexShrink: 0 }} />
                                            <span style={{ fontSize: '10px', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.07em' }}>
                                                {cert.category}
                                            </span>
                                        </div>
                                        <h4 style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-primary)', lineHeight: 1.4, fontFamily: 'var(--font-display)' }}>
                                            {cert.name}
                                        </h4>
                                    </div>
                                    <p style={{ fontSize: '11.5px', color: 'var(--color-text-secondary)' }}>
                                        Issued by {cert.issuer}
                                    </p>
                                </div>

                                {/* Back */}
                                <div
                                    style={{
                                        position: 'absolute', inset: 0,
                                        background: 'var(--color-bg-card)',
                                        border: '1px solid var(--color-accent-primary)',
                                        borderRadius: '10px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        backfaceVisibility: 'hidden',
                                        transform: 'rotateY(180deg)',
                                    }}
                                >
                                    <div style={{ textAlign: 'center' }}>
                                        <CheckCircle size={28} style={{ color: '#22c55e', margin: '0 auto 8px' }} />
                                        <p style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-accent-text)' }}>
                                            Verified
                                        </p>
                                        <p style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                                            Click to flip back
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </InfiniteMarquee>
            </motion.div>

            {/* ── Security Tools ── */}
            <div className="page-wrapper">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h3
                        style={{
                            textAlign: 'center', marginBottom: '28px',
                            fontSize: '1.1rem', fontWeight: 500,
                            color: 'var(--color-text-primary)', fontFamily: 'var(--font-display)',
                        }}
                    >
                        Security Tools Mastered
                    </h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
                        {securityTools.map((tool, index) => (
                            <motion.div
                                key={tool.name}
                                initial={{ opacity: 0, scale: 0.85 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.04 }}
                                whileHover={{ scale: 1.05, y: -3 }}
                                style={{
                                    background: 'var(--color-bg-card)',
                                    border: '1px solid var(--color-border)',
                                    borderRadius: '8px',
                                    padding: '10px 16px',
                                    display: 'flex', alignItems: 'center', gap: '10px',
                                    cursor: 'default',
                                    transition: 'border-color 200ms',
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--color-accent-primary)')}
                                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--color-border)')}
                            >
                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-accent-primary)', flexShrink: 0 }} />
                                <div>
                                    <p style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-primary)' }}>{tool.name}</p>
                                    <p style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>{tool.category}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
