import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { experiences } from '../data/experience';

export default function Experience() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start']
    });

    const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%']);

    // Separate experiences by type
    const workExperiences = experiences.filter(exp => exp.type === 'work');
    const leadershipExperiences = experiences.filter(exp => exp.type === 'leadership');
    const educationExperiences = experiences.filter(exp => exp.type === 'education');

    return (
        <section id="experience" ref={sectionRef} className="section py-24 relative">
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
                        My Journey
                    </span>
                    <h2 className="section-title">
                        Experience & <span className="gradient-text">Leadership</span>
                    </h2>
                </motion.div>

                {/* Timeline Container */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Animated Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-[var(--color-border)]">
                        <motion.div
                            className="w-full bg-gradient-to-b from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)]"
                            style={{ height: lineHeight }}
                        />
                    </div>

                    {/* Work Experience */}
                    <div className="mb-12">
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-xl font-semibold text-[var(--color-accent-primary)] mb-8 md:text-center"
                        >
                            💼 Professional Experience
                        </motion.h3>

                        {workExperiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-100px' }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative mb-8 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div
                                    className="absolute top-6 w-4 h-4 rounded-full border-4 border-[var(--color-bg-primary)] z-10"
                                    style={{
                                        backgroundColor: exp.color,
                                        left: index % 2 === 0 ? 'auto' : '-2.5rem',
                                        right: index % 2 === 0 ? '-2.5rem' : 'auto',
                                    }}
                                />

                                {/* Card */}
                                <motion.div
                                    className="card"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <div
                                            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                                            style={{
                                                background: `linear-gradient(135deg, ${exp.color}20, ${exp.color}40)`,
                                                border: `1px solid ${exp.color}50`
                                            }}
                                        >
                                            <exp.icon size={24} style={{ color: exp.color }} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg">{exp.title}</h4>
                                            <p className="text-[var(--color-text-secondary)]">{exp.organization}</p>
                                            <span className="text-sm text-[var(--color-text-muted)]">{exp.duration}</span>
                                        </div>
                                    </div>

                                    <p className="text-[var(--color-text-secondary)] mb-4">
                                        {exp.description}
                                    </p>

                                    <ul className="space-y-2">
                                        {exp.achievements.slice(0, 3).map((achievement, i) => (
                                            <li key={i} className="text-sm text-[var(--color-text-muted)] flex items-start gap-2">
                                                <span style={{ color: exp.color }}>▹</span>
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>

                                    {exp.techStack && (
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {exp.techStack.map((tech) => (
                                                <span key={tech} className="tag text-xs">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Leadership */}
                    <div className="mb-12">
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-xl font-semibold text-[var(--color-accent-success)] mb-8 md:text-center"
                        >
                            👥 Leadership Roles
                        </motion.h3>

                        <div className="grid md:grid-cols-3 gap-4 pl-8 md:pl-0">
                            {leadershipExperiences.map((exp, index) => (
                                <motion.div
                                    key={exp.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="card text-center"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div
                                        className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                                        style={{
                                            background: `linear-gradient(135deg, ${exp.color}20, ${exp.color}40)`,
                                            border: `1px solid ${exp.color}50`
                                        }}
                                    >
                                        <exp.icon size={24} style={{ color: exp.color }} />
                                    </div>
                                    <h4 className="font-semibold">{exp.title}</h4>
                                    <p className="text-sm text-[var(--color-text-secondary)]">{exp.organization}</p>
                                    <span className="tag mt-2 inline-block text-xs" style={{ borderColor: exp.color, color: exp.color }}>
                                        {exp.duration}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-xl font-semibold text-[var(--color-accent-tertiary)] mb-8 md:text-center"
                        >
                            🎓 Education
                        </motion.h3>

                        {educationExperiences.map((exp) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="card max-w-2xl mx-auto text-center"
                            >
                                <div
                                    className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4"
                                    style={{
                                        background: `linear-gradient(135deg, ${exp.color}20, ${exp.color}40)`,
                                        border: `1px solid ${exp.color}50`
                                    }}
                                >
                                    <exp.icon size={28} style={{ color: exp.color }} />
                                </div>
                                <h4 className="font-semibold text-xl">{exp.title}</h4>
                                <p className="text-lg text-[var(--color-accent-tertiary)]">{exp.organization}</p>
                                <p className="text-[var(--color-text-secondary)] mt-2">{exp.description}</p>
                                <div className="flex flex-wrap justify-center gap-2 mt-4">
                                    {exp.achievements.map((achievement, i) => (
                                        <span key={i} className="tag text-xs">
                                            {achievement}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
