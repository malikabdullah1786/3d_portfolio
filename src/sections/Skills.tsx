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
                        Technical Arsenal
                    </span>
                    <h2 className="section-title">
                        My <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="section-subtitle mx-auto mt-4">
                        From low-level C++ optimization to cloud-scale DevOps and cybersecurity
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {skillCategories.map((category, index) => (
                        <AnimatedCard
                            key={category.name}
                            glowColor={category.color.replace('#', '').match(/.{2}/g)?.map(x => parseInt(x, 16)).join(', ') || '99, 102, 241'}
                            className={`${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div
                                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                                    style={{
                                        background: `linear-gradient(135deg, ${category.color}20, ${category.color}40)`,
                                        border: `1px solid ${category.color}50`
                                    }}
                                >
                                    <category.icon size={20} style={{ color: category.color }} />
                                </div>
                                <h3 className="text-lg font-semibold" style={{ color: category.color }}>
                                    {category.name}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <motion.span
                                        key={skill.name}
                                        className="tag cursor-default"
                                        whileHover={{
                                            scale: 1.1,
                                            backgroundColor: `${category.color}20`,
                                            borderColor: category.color
                                        }}
                                    >
                                        {skill.name}
                                        {skill.level === 'expert' && (
                                            <span className="ml-1 text-yellow-500">★</span>
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
