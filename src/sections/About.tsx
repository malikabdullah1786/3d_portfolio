import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Users, Code2 } from 'lucide-react';

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start']
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    const stats = [
        { icon: Code2, value: '250+', label: 'n8n Workflows' },
        { icon: Trophy, value: '26+', label: 'Certifications' },
        { icon: Users, value: '4+', label: 'Leadership Roles' },
    ];

    const paragraphs = [
        "I am a junior Software Engineering student (5th Semester) at FAST-NUCES Lahore, specializing in system architectures, automation engineering, and custom software solutions. I combine rigorous academic training in object-oriented systems and data structures with hands-on professional experiences.",
        "Currently, as a Full Stack and DevOps Intern at Zenolve, I work on high-impact systems, contributing to a prominent UK property platform, building custom containerized integrations, and managing self-hosted automation infrastructure. I also founded Tarzify, where I engineered automated order workflows and optimized SEO funnels.",
        "On campus, I actively shape the student tech community. I serve as the Deputy Head of Software for SOFTEC, organizing technical tracks and managing IT deployments, alongside leadership roles in the Google Developer Student Club (GDSC) and the student Media & PR office."
    ];

    return (
        <section id="about" ref={sectionRef} className="section py-24 relative font-sans">
            <div className="page-wrapper">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="font-sans uppercase tracking-widest text-xs font-semibold text-[var(--color-accent-text)] mb-2 block">
                        About Me
                    </span>
                    <h2 className="section-title text-[var(--color-text-primary)]">
                        The Founder-Engineer
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Content */}
                    <div className="space-y-6">
                        {paragraphs.map((paragraph, index) => (
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="text-lg text-[var(--color-text-secondary)] leading-relaxed font-sans"
                            >
                                {paragraph}
                            </motion.p>
                        ))}

                        {/* Achievements Highlight */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="card p-4 rounded-xl mt-8 border-l-4 border-[var(--color-accent-text)] bg-[var(--color-bg-card)] font-sans"
                        >
                            <p className="text-[var(--color-text-primary)] font-medium">
                                🏆 APM '26 Runner-up (All Pakistan Mathematics Olympiad - Scavenger Hunt)
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Side - Stats Cards */}
                    <motion.div style={{ y }} className="grid gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="card bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent-primary)]/45 flex items-center gap-6 group"
                                whileHover={{ x: 10 }}
                            >
                                <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-[var(--color-bg-secondary)] border border-[var(--color-border)] group-hover:border-[var(--color-accent-text)] transition-all duration-300">
                                    <stat.icon size={26} className="text-[var(--color-accent-text)]" />
                                </div>
                                <div>
                                    <span className="text-3xl font-medium font-display text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-text)] transition-colors block">
                                        {stat.value}
                                    </span>
                                    <span className="text-[var(--color-text-secondary)] text-sm font-medium font-sans">
                                        {stat.label}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Quote Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-20 text-center max-w-3xl mx-auto"
                >
                    <blockquote className="text-xl md:text-2xl font-light italic font-display text-[var(--color-text-secondary)]">
                        "I focus on writing readable, high-performance code and designing resilient system architectures that solve real operational bottlenecks."
                    </blockquote>
                </motion.div>
            </div>
        </section>
    );
}
