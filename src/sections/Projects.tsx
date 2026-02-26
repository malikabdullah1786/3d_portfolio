import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';
import AnimatedCard from '../components/AnimatedCard';

export default function Projects() {
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);

    const featuredProjects = projects.filter(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);

    return (
        <section id="projects" className="section py-24 relative">
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
                        Featured Work
                    </span>
                    <h2 className="section-title">
                        My <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="section-subtitle mx-auto mt-4">
                        From founder-led ventures to innovative technical solutions
                    </p>
                </motion.div>

                {/* Featured Projects */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                            className={`relative ${index === 0 ? 'lg:col-span-2' : ''}`}
                        >
                            <AnimatedCard
                                glowColor={project.color.replace('#', '').match(/.{2}/g)?.map(x => parseInt(x, 16)).join(', ') || '99, 102, 241'}
                                className="h-full"
                            >
                                {/* Project Content */}
                                <div className="relative z-10">
                                    {/* Role Badge */}
                                    <div className="flex items-center justify-between mb-4">
                                        <span
                                            className="px-3 py-1 rounded-full text-sm font-medium"
                                            style={{
                                                backgroundColor: `${project.color}20`,
                                                color: project.color,
                                                border: `1px solid ${project.color}50`
                                            }}
                                        >
                                            {project.role}
                                        </span>
                                        <div className="flex gap-3">
                                            {project.githubUrl && (
                                                <motion.a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                                                    whileHover={{ scale: 1.2 }}
                                                    whileTap={{ scale: 0.9 }}
                                                >
                                                    <Github size={20} />
                                                </motion.a>
                                            )}
                                            {project.liveUrl && (
                                                <motion.a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                                                    whileHover={{ scale: 1.2 }}
                                                    whileTap={{ scale: 0.9 }}
                                                >
                                                    <ExternalLink size={20} />
                                                </motion.a>
                                            )}
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="text-2xl md:text-3xl font-bold mb-3"
                                        style={{ color: project.color }}
                                    >
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-[var(--color-text-secondary)] mb-4">
                                        {project.description}
                                    </p>

                                    {/* Expanded Content on Hover */}
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{
                                            height: hoveredProject === project.id ? 'auto' : 0,
                                            opacity: hoveredProject === project.id ? 1 : 0
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-[var(--color-text-muted)] mb-4 text-sm">
                                            {project.longDescription}
                                        </p>

                                        <h4 className="text-sm font-semibold text-[var(--color-text-primary)] mb-2">
                                            Key Features:
                                        </h4>
                                        <ul className="grid md:grid-cols-2 gap-1 mb-4">
                                            {project.features.map((feature, i) => (
                                                <li key={i} className="text-sm text-[var(--color-text-muted)] flex items-center gap-2">
                                                    <ChevronRight size={14} style={{ color: project.color }} />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {project.techStack.map((tech) => (
                                            <motion.span
                                                key={tech}
                                                className="tag text-xs"
                                                whileHover={{ scale: 1.1 }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>

                                {/* Background Glow Effect */}
                                <motion.div
                                    className="absolute inset-0 opacity-0 rounded-xl"
                                    animate={{
                                        opacity: hoveredProject === project.id ? 0.1 : 0
                                    }}
                                    style={{
                                        background: `radial-gradient(circle at center, ${project.color}, transparent 70%)`
                                    }}
                                />
                            </AnimatedCard>
                        </motion.div>
                    ))}
                </div>

                {/* Other Projects */}
                {otherProjects.length > 0 && (
                    <>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-xl font-semibold text-center mb-8 text-[var(--color-text-secondary)]"
                        >
                            Other Noteworthy Projects
                        </motion.h3>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {otherProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <AnimatedCard
                                        glowColor={project.color.replace('#', '').match(/.{2}/g)?.map(x => parseInt(x, 16)).join(', ') || '99, 102, 241'}
                                    >
                                        <span
                                            className="px-2 py-0.5 rounded text-xs font-medium mb-3 inline-block"
                                            style={{
                                                backgroundColor: `${project.color}20`,
                                                color: project.color
                                            }}
                                        >
                                            {project.role}
                                        </span>
                                        <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                                        <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1">
                                            {project.techStack.slice(0, 4).map((tech) => (
                                                <span key={tech} className="tag text-xs">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </AnimatedCard>
                                </motion.div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}
