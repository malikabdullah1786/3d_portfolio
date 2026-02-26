import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Users, Code2 } from 'lucide-react';

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start']
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    const stats = [
        { icon: Code2, value: '450+', label: 'n8n Workflows', color: '#6366f1' },
        { icon: Trophy, value: '26+', label: 'Certifications', color: '#f59e0b' },
        { icon: Users, value: '5+', label: 'Leadership Roles', color: '#10b981' },
    ];

    const paragraphs = [
        "I am a Software Engineering student at FAST-NUCES Lahore dedicated to building high-performance, scalable software solutions. From low-level system optimization in C++ to high-level application architecture, I thrive on solving complex engineering challenges.",
        "As the Founder & CEO of Ride Share APK, I've built a ride-sharing platform from scratch that empowers students and daily commuters. This journey taught me to see problems as opportunities and code as a tool for change.",
        "Beyond engineering, I am deeply involved in the university ecosystem. As a GDSC Lead, SOFTEC Deputy, and Media & PR Officer, I bridge the gap between technical innovation and community building."
    ];

    return (
        <section id="about" ref={sectionRef} className="section py-24 relative">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-[var(--color-accent-primary)] font-medium mb-2 block">
                        About Me
                    </span>
                    <h2 className="section-title">
                        The <span className="gradient-text">Founder-Engineer</span>
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
                                className="text-lg text-[var(--color-text-secondary)] leading-relaxed"
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
                            className="glass p-4 rounded-xl mt-8"
                        >
                            <p className="text-[var(--color-accent-tertiary)] font-semibold">
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
                                className="card flex items-center gap-6 group"
                                whileHover={{ x: 10 }}
                            >
                                <div
                                    className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                                    style={{
                                        background: `linear-gradient(135deg, ${stat.color}20, ${stat.color}40)`,
                                        border: `1px solid ${stat.color}50`
                                    }}
                                >
                                    <stat.icon size={28} style={{ color: stat.color }} />
                                </div>
                                <div>
                                    <motion.span
                                        className="text-4xl font-bold block"
                                        style={{ color: stat.color }}
                                    >
                                        {stat.value}
                                    </motion.span>
                                    <span className="text-[var(--color-text-secondary)]">
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
                    <blockquote className="text-2xl md:text-3xl font-light italic text-[var(--color-text-secondary)]">
                        "I am passionate about creating tech that moves the world—whether it's a ride-share app or a high-speed C++ backend."
                    </blockquote>
                </motion.div>
            </div>
        </section>
    );
}
