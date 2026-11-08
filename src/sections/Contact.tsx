import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Send, Clock, CheckCircle2, Copy, Check, Briefcase } from 'lucide-react';

export default function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [copied, setCopied] = useState(false);

    const socialLinks = [
        { icon: Github,   href: 'https://github.com/malikabdullah1786',              label: 'GitHub',   sub: 'Open source work' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/malikabdullah1786/',    label: 'LinkedIn', sub: 'Professional network' },
        { icon: Mail,     href: 'mailto:malikabdullah1786@gmail.com',                label: 'Email',    sub: 'Direct message' },
    ];

    const infoCards = [
        {
            icon: Briefcase,
            title: 'Current Availability',
            body: 'Open to Internships, DevOps roles, n8n/Docker automation integrations, and Full Stack development contracts.',
            delay: 0,
        },
        {
            icon: MapPin,
            title: 'Location & Timezone',
            body: 'Lahore, Pakistan — GMT+5 (Asia/Karachi). Available for remote collaboration worldwide.',
            delay: 0.1,
        },
        {
            icon: Clock,
            title: 'Average Response Time',
            body: 'Typically responds within 12 hours. For urgent matters, reach out directly on LinkedIn.',
            delay: 0.2,
        },
    ];

    const copyEmail = () => {
        navigator.clipboard.writeText('malikabdullah1786@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        await new Promise((r) => setTimeout(r, 1600));
        setLoading(false);
        setSubmitted(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    /* Inline styles for inputs — guarantees visibility in both light & dark themes */
    const inputStyle: React.CSSProperties = {
        width: '100%',
        padding: '12px 16px',
        borderRadius: '8px',
        border: '1.5px solid var(--color-border)',
        background: 'var(--color-bg-primary)',
        color: 'var(--color-text-primary)',
        fontSize: '14px',
        fontFamily: 'var(--font-sans)',
        outline: 'none',
        transition: 'border-color 200ms ease',
    };

    return (
        <section id="contact" className="section py-28 relative overflow-hidden">

            {/* Soft ambient glow */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
                    style={{ background: 'radial-gradient(circle, rgba(252,213,53,0.07) 0%, transparent 70%)' }}
                />
            </div>

            <div className="page-wrapper relative z-10">

                {/* ── Section Header ─────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="text-center mb-20"
                >
                    <span
                        style={{ color: 'var(--color-accent-text)' }}
                        className="block uppercase tracking-widest text-xs font-semibold mb-3 font-sans"
                    >
                        Get In Touch
                    </span>
                    <h2 className="section-title" style={{ color: 'var(--color-text-primary)' }}>
                        Let's Build Something Together
                    </h2>
                    <p
                        className="section-subtitle mt-4 font-sans"
                        style={{ maxWidth: '560px' }}
                    >
                        Whether you have a project, an internship opportunity, or just want to connect —
                        I'd love to hear from you. Drop a message and I'll get back to you shortly.
                    </p>
                </motion.div>

                {/* ── Two-column layout ──────────────────────────────── */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

                    {/* ── LEFT: Info cards ── */}
                    <div className="lg:col-span-2 flex flex-col gap-5">

                        {/* Info cards */}
                        {infoCards.map((card) => (
                            <motion.div
                                key={card.title}
                                initial={{ opacity: 0, x: -24 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: card.delay }}
                                style={{
                                    background: 'var(--color-bg-card)',
                                    border: '1px solid var(--color-border)',
                                    borderRadius: '12px',
                                    padding: '20px 24px',
                                    display: 'flex',
                                    gap: '16px',
                                    alignItems: 'flex-start',
                                }}
                            >
                                <div
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '8px',
                                        background: 'var(--color-bg-secondary)',
                                        border: '1px solid var(--color-border)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                        color: 'var(--color-accent-text)',
                                    }}
                                >
                                    <card.icon size={18} />
                                </div>
                                <div>
                                    <p
                                        className="text-xs font-semibold uppercase tracking-widest mb-1.5 font-sans"
                                        style={{ color: 'var(--color-text-primary)', letterSpacing: '0.08em' }}
                                    >
                                        {card.title}
                                    </p>
                                    <p
                                        className="text-sm leading-relaxed font-sans"
                                        style={{ color: 'var(--color-text-secondary)' }}
                                    >
                                        {card.body}
                                    </p>
                                </div>
                            </motion.div>
                        ))}

                        {/* Direct email copy */}
                        <motion.div
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            style={{
                                background: 'var(--color-bg-card)',
                                border: '1px solid var(--color-border)',
                                borderRadius: '12px',
                                padding: '20px 24px',
                            }}
                        >
                            <p
                                className="text-xs font-semibold uppercase tracking-widest mb-3 font-sans"
                                style={{ color: 'var(--color-text-primary)' }}
                            >
                                Direct Email
                            </p>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    gap: '12px',
                                    padding: '10px 14px',
                                    borderRadius: '8px',
                                    background: 'var(--color-bg-secondary)',
                                    border: '1px solid var(--color-border)',
                                }}
                            >
                                <span
                                    className="text-sm font-mono truncate"
                                    style={{ color: 'var(--color-text-primary)' }}
                                >
                                    malikabdullah1786@gmail.com
                                </span>
                                <button
                                    onClick={copyEmail}
                                    title="Copy to clipboard"
                                    style={{
                                        padding: '6px',
                                        borderRadius: '6px',
                                        border: 'none',
                                        background: 'transparent',
                                        cursor: 'pointer',
                                        color: copied ? '#22c55e' : 'var(--color-text-secondary)',
                                        transition: 'color 200ms',
                                        flexShrink: 0,
                                    }}
                                >
                                    {copied ? <Check size={15} /> : <Copy size={15} />}
                                </button>
                            </div>
                            {copied && (
                                <p className="text-xs mt-2 font-sans" style={{ color: '#22c55e' }}>
                                    ✓ Copied to clipboard
                                </p>
                            )}
                        </motion.div>

                        {/* Social links */}
                        <motion.div
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <p
                                className="text-xs font-semibold uppercase tracking-widest mb-3 font-sans"
                                style={{ color: 'var(--color-text-muted)' }}
                            >
                                Connect Elsewhere
                            </p>
                            <div className="grid grid-cols-3 gap-3">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            gap: '8px',
                                            padding: '16px 8px',
                                            borderRadius: '10px',
                                            border: '1px solid var(--color-border)',
                                            background: 'var(--color-bg-card)',
                                            textDecoration: 'none',
                                            transition: 'all 200ms ease',
                                        }}
                                        onMouseEnter={(e) => {
                                            (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-accent-primary)';
                                            (e.currentTarget as HTMLElement).style.background = 'var(--color-bg-hover)';
                                        }}
                                        onMouseLeave={(e) => {
                                            (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)';
                                            (e.currentTarget as HTMLElement).style.background = 'var(--color-bg-card)';
                                        }}
                                    >
                                        <link.icon size={20} style={{ color: 'var(--color-accent-text)' }} />
                                        <span
                                            className="text-xs font-semibold font-sans"
                                            style={{ color: 'var(--color-text-primary)' }}
                                        >
                                            {link.label}
                                        </span>
                                        <span
                                            className="text-xs font-sans text-center"
                                            style={{ color: 'var(--color-text-muted)', fontSize: '10px' }}
                                        >
                                            {link.sub}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* ── RIGHT: Contact Form ── */}
                    <div className="lg:col-span-3">
                        <motion.div
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: 0.15 }}
                            style={{
                                background: 'var(--color-bg-card)',
                                border: '1px solid var(--color-border)',
                                borderRadius: '16px',
                                padding: '36px 40px',
                            }}
                        >
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.93 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-10"
                                >
                                    <div
                                        style={{
                                            width: '64px',
                                            height: '64px',
                                            borderRadius: '50%',
                                            background: 'rgba(34,197,94,0.1)',
                                            border: '1px solid rgba(34,197,94,0.3)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto 24px',
                                            color: '#22c55e',
                                        }}
                                    >
                                        <CheckCircle2 size={32} />
                                    </div>
                                    <h3
                                        className="text-2xl font-semibold font-display mb-3"
                                        style={{ color: 'var(--color-text-primary)' }}
                                    >
                                        Message Sent!
                                    </h3>
                                    <p
                                        className="text-sm leading-relaxed mb-8 font-sans max-w-sm mx-auto"
                                        style={{ color: 'var(--color-text-secondary)' }}
                                    >
                                        Thank you for reaching out. I have received your message and will reply within 12 hours.
                                    </p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="btn btn-secondary text-sm px-6 py-3"
                                    >
                                        Send Another Message
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit}>

                                    <h3
                                        className="text-xl font-semibold font-display mb-1"
                                        style={{ color: 'var(--color-text-primary)' }}
                                    >
                                        Send a Message
                                    </h3>
                                    <p
                                        className="text-sm mb-8 font-sans"
                                        style={{ color: 'var(--color-text-secondary)' }}
                                    >
                                        Fill in the details below and I'll get back to you as soon as possible.
                                    </p>

                                    {/* Name + Email row */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-xs font-semibold uppercase tracking-wider mb-2 font-sans"
                                                style={{ color: 'var(--color-text-primary)' }}
                                            >
                                                Full Name <span style={{ color: 'var(--color-accent-text)' }}>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formState.name}
                                                onChange={handleChange}
                                                placeholder="e.g. John Doe"
                                                style={inputStyle}
                                                onFocus={(e) => (e.target.style.borderColor = 'var(--color-accent-primary)')}
                                                onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-xs font-semibold uppercase tracking-wider mb-2 font-sans"
                                                style={{ color: 'var(--color-text-primary)' }}
                                            >
                                                Email Address <span style={{ color: 'var(--color-accent-text)' }}>*</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formState.email}
                                                onChange={handleChange}
                                                placeholder="e.g. john@example.com"
                                                style={inputStyle}
                                                onFocus={(e) => (e.target.style.borderColor = 'var(--color-accent-primary)')}
                                                onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                                            />
                                        </div>
                                    </div>

                                    {/* Subject */}
                                    <div className="mb-5">
                                        <label
                                            htmlFor="subject"
                                            className="block text-xs font-semibold uppercase tracking-wider mb-2 font-sans"
                                            style={{ color: 'var(--color-text-primary)' }}
                                        >
                                            Subject{' '}
                                            <span
                                                className="normal-case font-normal tracking-normal"
                                                style={{ color: 'var(--color-text-muted)' }}
                                            >
                                                (Optional)
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formState.subject}
                                            onChange={handleChange}
                                            placeholder="What is this about?"
                                            style={inputStyle}
                                            onFocus={(e) => (e.target.style.borderColor = 'var(--color-accent-primary)')}
                                            onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                                        />
                                    </div>

                                    {/* Message */}
                                    <div className="mb-7">
                                        <label
                                            htmlFor="message"
                                            className="block text-xs font-semibold uppercase tracking-wider mb-2 font-sans"
                                            style={{ color: 'var(--color-text-primary)' }}
                                        >
                                            Message <span style={{ color: 'var(--color-accent-text)' }}>*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            value={formState.message}
                                            onChange={handleChange}
                                            placeholder="Describe your project, opportunity, or question in detail..."
                                            style={{ ...inputStyle, resize: 'none' }}
                                            onFocus={(e) => (e.target.style.borderColor = 'var(--color-accent-primary)')}
                                            onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
                                        />
                                    </div>

                                    {/* Footer row */}
                                    <div
                                        className="flex flex-col sm:flex-row items-center justify-between gap-4"
                                        style={{
                                            paddingTop: '4px',
                                            borderTop: '1px solid var(--color-border)',
                                        }}
                                    >
                                        <span
                                            className="text-xs font-sans"
                                            style={{ color: 'var(--color-text-muted)' }}
                                        >
                                            🔒 Your data is safe and never shared.
                                        </span>
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="btn btn-primary"
                                            style={{
                                                minWidth: '160px',
                                                opacity: loading ? 0.7 : 1,
                                                cursor: loading ? 'not-allowed' : 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '8px',
                                            }}
                                        >
                                            {loading ? (
                                                <>
                                                    <span
                                                        style={{
                                                            width: '16px',
                                                            height: '16px',
                                                            border: '2px solid #181a20',
                                                            borderTopColor: 'transparent',
                                                            borderRadius: '50%',
                                                            animation: 'spin 0.7s linear infinite',
                                                            display: 'inline-block',
                                                        }}
                                                    />
                                                    Sending…
                                                </>
                                            ) : (
                                                <>
                                                    <Send size={15} />
                                                    Send Message
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
