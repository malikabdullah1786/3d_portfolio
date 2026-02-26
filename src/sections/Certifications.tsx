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
        <section id="certifications" className="section py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="container relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-[var(--color-accent-primary)] font-medium mb-2 block">
                        Verified Expertise
                    </span>
                    <h2 className="section-title">
                        <span className="gradient-text">23+</span> Certifications
                    </h2>
                    <p className="section-subtitle mx-auto mt-4">
                        Certified in Cybersecurity, Programming & Emerging Technologies
                    </p>
                </motion.div>

                {/* Featured Certification */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto mb-16"
                >
                    <div className="card glass relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                            <Shield size={128} className="text-[var(--color-accent-primary)]" />
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="w-20 h-20 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)]">
                                <Award size={36} className="text-white" />
                            </div>
                            <div>
                                <span className="text-sm text-[var(--color-accent-warning)] font-medium">
                                    Featured Certificate
                                </span>
                                <h3 className="text-2xl font-bold mt-1 gradient-text">
                                    Google Cybersecurity Professional Certificate
                                </h3>
                                <p className="text-[var(--color-text-secondary)] mt-2">
                                    Comprehensive program covering security operations, threat detection,
                                    incident response, and hands-on experience with SIEM tools.
                                </p>
                                <div className="flex items-center gap-2 mt-4 text-[var(--color-accent-success)]">
                                    <CheckCircle size={18} />
                                    <span className="font-medium">Verified by Google</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-2 mb-12"
                >
                    {certificationCategories.slice(0, 6).map((category) => (
                        <motion.button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category.id
                                ? 'bg-[var(--color-accent-primary)] text-white'
                                : 'bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] border border-[var(--color-border)]'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category.name}
                            <span className="ml-1 opacity-60">({category.count})</span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* Certificates Marquee */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <InfiniteMarquee speed={50} direction="left" pauseOnHover>
                        {filteredCerts.map((cert) => (
                            <motion.div
                                key={cert.id}
                                className="relative w-72 h-40 cursor-pointer perspective-1000"
                                onClick={() => setFlippedCard(flippedCard === cert.id ? null : cert.id)}
                                whileHover={{ scale: 1.05 }}
                            >
                                <motion.div
                                    className="w-full h-full"
                                    animate={{ rotateY: flippedCard === cert.id ? 180 : 0 }}
                                    transition={{ duration: 0.6 }}
                                    style={{ transformStyle: 'preserve-3d' }}
                                >
                                    {/* Front */}
                                    <div
                                        className="absolute inset-0 card flex flex-col justify-between backface-hidden"
                                        style={{ backfaceVisibility: 'hidden' }}
                                    >
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <Shield size={16} className="text-[var(--color-accent-primary)]" />
                                                <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider">
                                                    {cert.category}
                                                </span>
                                            </div>
                                            <h4 className="font-semibold text-sm leading-tight">
                                                {cert.name}
                                            </h4>
                                        </div>
                                        <p className="text-xs text-[var(--color-text-secondary)]">
                                            Issued by {cert.issuer}
                                        </p>
                                    </div>

                                    {/* Back */}
                                    <div
                                        className="absolute inset-0 card flex items-center justify-center"
                                        style={{
                                            backfaceVisibility: 'hidden',
                                            transform: 'rotateY(180deg)'
                                        }}
                                    >
                                        <div className="text-center">
                                            <CheckCircle size={32} className="text-[var(--color-accent-success)] mx-auto mb-2" />
                                            <p className="font-semibold text-[var(--color-accent-success)]">Verified</p>
                                            <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                                                Click to flip back
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </InfiniteMarquee>
                </motion.div>

                {/* Security Tools Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <h3 className="text-xl font-semibold text-center mb-8 text-[var(--color-text-secondary)]">
                        🛡️ Security Tools Mastered
                    </h3>

                    <div className="flex flex-wrap justify-center gap-4">
                        {securityTools.map((tool, index) => (
                            <motion.div
                                key={tool.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="card px-4 py-3 flex items-center gap-3"
                                whileHover={{ scale: 1.1, y: -5 }}
                            >
                                <div className="w-2 h-2 rounded-full bg-[var(--color-accent-warning)]" />
                                <div>
                                    <p className="font-medium text-sm">{tool.name}</p>
                                    <p className="text-xs text-[var(--color-text-muted)]">{tool.category}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
