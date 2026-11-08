import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { experiences } from '../data/experience';

export default function Experience() {
    const location = useLocation();
    const path = location.pathname;

    const showWork = path === '/experience' || path === '/';
    const showLeadership = path === '/leadership' || path === '/';
    const showEducation = path === '/education' || path === '/';

    const workExperiences = experiences.filter(exp => exp.type === 'work');
    const leadershipExperiences = experiences.filter(exp => exp.type === 'leadership');
    const educationExperiences = experiences.filter(exp => exp.type === 'education');

    return (
        <section id="experience" className="section py-20 relative min-h-[70vh]">
            <div className="page-wrapper">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="font-sans uppercase tracking-widest text-xs font-semibold text-[var(--color-accent-primary)] mb-2 block">
                        {path === '/experience' && 'Professional Path'}
                        {path === '/leadership' && 'Involvement'}
                        {path === '/education' && 'Academics'}
                        {path === '/' && 'My Journey'}
                    </span>
                    <h2 className="section-title text-[var(--color-text-primary)]">
                        {path === '/experience' && <>Work Experience</>}
                        {path === '/leadership' && <>Leadership & Involvement</>}
                        {path === '/education' && <>Education & Credentials</>}
                        {path === '/' && <>Experience & Leadership</>}
                    </h2>
                </motion.div>

                <div className="max-w-6xl mx-auto space-y-16">
                    {/* Work Experience Route */}
                    {showWork && (
                        <div>
                            {path === '/' && (
                                <h3 className="text-xl font-medium font-display text-[var(--color-accent-primary)] mb-8 flex items-center gap-2">
                                    Professional Experience
                                </h3>
                            )}
                            <div className="space-y-8">
                                {workExperiences.map((exp, index) => (
                                    <motion.div
                                        key={exp.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="card border border-[var(--color-border)] hover:border-[var(--color-accent-primary)]/40 bg-[var(--color-bg-card)] transition-all duration-300"
                                    >
                                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
                                                    <exp.icon size={24} className="text-[var(--color-accent-primary)]" />
                                                </div>
                                                <div>
                                                    <h4 className="font-medium font-display text-xl md:text-2xl text-[var(--color-text-primary)]">{exp.title}</h4>
                                                    <p className="text-base text-[var(--color-accent-primary)] font-medium font-sans">{exp.organization}</p>
                                                </div>
                                            </div>
                                            <div className="md:text-right shrink-0">
                                                <span className="px-2.5 py-1 rounded bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-xs font-medium text-[var(--color-text-secondary)] font-sans">
                                                    {exp.duration}
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-[var(--color-text-secondary)] text-base mb-6 leading-relaxed font-sans">
                                            {exp.description}
                                        </p>

                                        <h5 className="text-xs font-bold text-[var(--color-text-primary)] uppercase tracking-wider mb-3 font-sans">Key Contributions:</h5>
                                        <ul className="space-y-3 mb-6">
                                            {exp.achievements.map((achievement, i) => (
                                                <li key={i} className="text-[var(--color-text-secondary)] text-base flex items-start gap-3 leading-relaxed font-sans">
                                                    <span className="text-[var(--color-accent-primary)] mt-1.5 text-xs">●</span>
                                                    <span>{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {exp.techStack && (
                                            <div className="border-t border-[var(--color-border)] pt-4">
                                                <h5 className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-2 font-sans">Technologies Used:</h5>
                                                <div className="flex flex-wrap gap-2">
                                                    {exp.techStack.map((tech) => (
                                                        <span key={tech} className="tag text-xs font-medium py-1 px-2.5 font-sans">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Leadership Route */}
                    {showLeadership && (
                        <div>
                            {path === '/' && (
                                <h3 className="text-xl font-medium font-display text-[var(--color-accent-primary)] mb-8 flex items-center gap-2">
                                    Leadership & Involvement
                                </h3>
                            )}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {leadershipExperiences.map((exp, index) => (
                                    <motion.div
                                        key={exp.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="card flex flex-col h-full border border-[var(--color-border)] hover:border-[var(--color-accent-primary)]/40 bg-[var(--color-bg-card)] transition-all duration-300"
                                        whileHover={{ y: -6 }}
                                    >
                                        <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 shrink-0 bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
                                            <exp.icon size={22} className="text-[var(--color-accent-primary)]" />
                                        </div>
                                        <h4 className="font-medium font-display text-lg text-[var(--color-text-primary)] mb-1">{exp.title}</h4>
                                        <p className="text-sm font-medium text-[var(--color-accent-primary)] mb-3 font-sans">{exp.organization}</p>
                                        
                                        <p className="text-sm text-[var(--color-text-secondary)] mb-4 flex-grow leading-relaxed font-sans">
                                            {exp.description}
                                        </p>

                                        <div className="border-t border-[var(--color-border)] pt-4 mt-auto">
                                            <ul className="space-y-2 text-left mb-4">
                                                {exp.achievements.map((achievement, i) => (
                                                    <li key={i} className="text-xs text-[var(--color-text-secondary)] flex items-start gap-1.5 font-sans">
                                                        <span className="text-[var(--color-accent-primary)] mt-0.5">•</span>
                                                        <span>{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <span className="inline-block text-xs font-medium text-[var(--color-text-secondary)] bg-[var(--color-bg-secondary)] border border-[var(--color-border)] px-2 py-1 rounded font-sans">
                                                {exp.duration}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Education Route */}
                    {showEducation && (
                        <div>
                            {path === '/' && (
                                <h3 className="text-xl font-medium font-display text-[var(--color-accent-primary)] mb-8 flex items-center gap-2">
                                    Education
                                </h3>
                            )}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {educationExperiences.map((exp, index) => (
                                    <motion.div
                                        key={exp.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="card border border-[var(--color-border)] hover:border-[var(--color-accent-primary)]/40 bg-[var(--color-bg-card)] transition-all duration-300 flex flex-col justify-between"
                                    >
                                        <div>
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
                                                    <exp.icon size={24} className="text-[var(--color-accent-primary)]" />
                                                </div>
                                                <div>
                                                    <h4 className="font-medium font-display text-xl text-[var(--color-text-primary)]">{exp.title}</h4>
                                                    <p className="text-base text-[var(--color-accent-primary)] font-medium font-sans">{exp.organization}</p>
                                                </div>
                                            </div>
                                            <p className="text-base text-[var(--color-text-secondary)] mb-6 leading-relaxed font-sans">
                                                {exp.description}
                                            </p>
                                            <ul className="space-y-2 mb-6">
                                                {exp.achievements.map((achievement, i) => (
                                                    <li key={i} className="text-sm text-[var(--color-text-secondary)] flex items-start gap-2 font-sans">
                                                        <span className="text-[var(--color-accent-primary)]">•</span>
                                                        <span>{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="border-t border-[var(--color-border)] pt-4 mt-auto flex items-center justify-between">
                                            <span className="text-xs text-[var(--color-text-secondary)] font-medium uppercase tracking-wider font-sans">Timeline</span>
                                            <span className="px-2.5 py-1 rounded bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-xs font-medium text-[var(--color-text-secondary)] font-sans">
                                                {exp.duration}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
