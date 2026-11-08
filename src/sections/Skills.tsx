import { motion } from 'framer-motion';
import { skillCategories, allTechIcons } from '../data/skills';
import AnimatedCard from '../components/AnimatedCard';
import InfiniteMarquee from '../components/InfiniteMarquee';

export default function Skills() {
    return (
        <section id="skills" className="section py-24 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

        <div className="page-wrapper relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="font-sans uppercase tracking-widest text-xs font-semibold text-[var(--color-accent-primary)] mb-2 block">
                        Technical Arsenal
                    </span>
                    <h2 className="section-title text-[var(--color-text-primary)]">
                        My Skills
                    </h2>
                    <p className="section-subtitle mx-auto mt-4 font-sans text-[var(--color-text-secondary)]">
                        From low-level C++ optimization to cloud-scale DevOps and cybersecurity
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 font-sans">
                    {skillCategories.map((category) => (
                        <AnimatedCard
                            key={category.name}
                            glowColor="204, 120, 92"
                            className="bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent-primary)]/45 transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
                                    <category.icon size={20} className="text-[var(--color-accent-primary)]" />
                                </div>
                                <h3 className="text-lg font-medium font-display text-[var(--color-text-primary)]">
                                    {category.name}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <motion.span
                                        key={skill.name}
                                        className="tag cursor-default font-sans text-xs"
                                        whileHover={{
                                            scale: 1.05,
                                            borderColor: 'var(--color-accent-primary)',
                                            color: 'var(--color-accent-primary)'
                                        }}
                                    >
                                        {skill.name}
                                        {skill.level === 'expert' && (
                                            <span className="ml-1 text-[var(--color-accent-primary)]">★</span>
                                        )}
                                    </motion.span>
                                ))}
                            </div>
                        </AnimatedCard>
                    ))}
                </div>

                {/* Infinite Tech Icons Marquee */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16"
                >
                    <p className="text-center text-[var(--color-text-muted)] mb-6 text-sm uppercase tracking-wider">
                        Technologies I Work With
                    </p>

                    <InfiniteMarquee speed={40} direction="left">
                        {allTechIcons.map((tech) => (
                            <motion.div
                                key={tech}
                                className="flex items-center gap-2 px-4 py-2 rounded-full glass"
                                whileHover={{ scale: 1.1 }}
                            >
                                <span className="text-[var(--color-text-secondary)] font-medium whitespace-nowrap">
                                    {tech}
                                </span>
                            </motion.div>
                        ))}
                    </InfiniteMarquee>

                    {/* Second row - opposite direction */}
                    <div className="mt-4">
                        <InfiniteMarquee speed={35} direction="right">
                            {[...allTechIcons].reverse().map((tech) => (
                                <motion.div
                                    key={`${tech}-2`}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full glass"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <span className="text-[var(--color-text-secondary)] font-medium whitespace-nowrap">
                                        {tech}
                                    </span>
                                </motion.div>
                            ))}
                        </InfiniteMarquee>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
