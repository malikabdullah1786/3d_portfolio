import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';
import AnimatedCard from '../components/AnimatedCard';
import { useTheme } from '../context/ThemeContext';

export default function Projects() {
    const { theme } = useTheme();
    const featuredProjects = projects.filter(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);

    const getBadgeStyle = (color: string, isDark: boolean) => {
        if (isDark) {
            return {
                backgroundColor: 'rgba(252, 213, 53, 0.15)',
                color: '#fcd535',
                border: '1px solid rgba(252, 213, 53, 0.3)'
            };
        }
        if (theme === 'light' && color.toLowerCase() === '#fcd535') {
            return {
                backgroundColor: '#fcd53520',
                color: '#b08400',
                border: '1px solid #fcd53540'
            };
        }
        return {
            backgroundColor: `${color}15`,
            color: color,
            border: `1px solid ${color}35`
        };
    };

    return (
        <section id="projects" className="section py-20 relative">
            <div className="page-wrapper">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="font-sans uppercase tracking-widest text-xs font-semibold text-[var(--color-accent-primary)] mb-2 block">
                        Featured Work
                    </span>
                    <h2 className="section-title text-[var(--color-text-primary)]">
                        Engineering Projects
                    </h2>
                    <p className="section-subtitle mx-auto mt-4">
                        A collection of custom applications, developer tools, and automation workflows.
                    </p>
                </motion.div>

                {/* Featured Projects Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {featuredProjects.map((project, index) => {
                        const isDarkCard = index === 0 && theme === 'dark';
                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-100px' }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative ${index === 0 ? 'lg:col-span-2' : ''}`}
                            >
                                <AnimatedCard
                                    glowColor={isDarkCard ? '252, 213, 53' : project.color.replace('#', '').match(/.{2}/g)?.map(x => parseInt(x, 16)).join(', ') || '252, 213, 53'}
                                    className={`h-full ${
                                        isDarkCard
                                            ? '!bg-[var(--color-bg-card)] !text-[var(--color-text-primary)] border-2 border-[var(--color-accent-primary)] shadow-2xl'
                                            : 'bg-[var(--color-bg-card)] text-[var(--color-text-primary)]'
                                    }`}
                                >
                                    {/* Project Content */}
                                    <div className="relative z-10 flex flex-col justify-between h-full">
                                        <div>
                                            {/* Header */}
                                            <div className="flex items-center justify-between mb-4">
                                                <span
                                                    className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider font-sans"
                                                    style={getBadgeStyle(project.color, isDarkCard)}
                                                >
                                                    {project.role}
                                                </span>
                                                <div className="flex gap-4">
                                                    {project.githubUrl && (
                                                        <motion.a
                                                            href={project.githubUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className={`${isDarkCard ? 'text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)]' : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'} transition-colors`}
                                                            whileHover={{ scale: 1.15 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            title="GitHub Repository"
                                                        >
                                                            <Github size={20} />
                                                        </motion.a>
                                                    )}
                                                    {project.liveUrl && (
                                                        <motion.a
                                                            href={project.liveUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className={`${isDarkCard ? 'text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)]' : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'} transition-colors`}
                                                            whileHover={{ scale: 1.15 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            title="Live Project Link"
                                                        >
                                                            <ExternalLink size={20} />
                                                        </motion.a>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Title */}
                                            <h3
                                                className={`text-2xl md:text-3xl font-medium font-display mb-3 ${
                                                    isDarkCard ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-primary)]'
                                                }`}
                                            >
                                                {project.title}
                                            </h3>

                                            {/* Short description */}
                                            <p className={`text-base mb-4 leading-relaxed font-sans ${isDarkCard ? 'text-[var(--color-text-secondary)]' : 'text-[var(--color-text-secondary)]'}`}>
                                                {project.description}
                                            </p>

                                            {/* Long description */}
                                            <p
                                                className={`text-sm mb-6 leading-relaxed border-l-2 pl-3 font-sans ${
                                                    isDarkCard ? 'text-[var(--color-text-muted)] border-[var(--color-accent-primary)]' : 'text-[var(--color-text-muted)] border-[var(--color-border)]'
                                                }`}
                                                style={isDarkCard ? {} : { borderColor: theme === 'light' && project.color.toLowerCase() === '#fcd535' ? '#b08400' : `${project.color}80` }}
                                            >
                                                {project.longDescription}
                                            </p>

                                            {/* Key Features */}
                                            <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 font-sans ${isDarkCard ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-primary)]'}`}>
                                                Key Contributions:
                                            </h4>
                                            <ul className="grid md:grid-cols-2 gap-3 mb-6">
                                                {project.features.map((feature, i) => (
                                                    <li key={i} className={`text-sm flex items-start gap-2 leading-relaxed font-sans ${isDarkCard ? 'text-[var(--color-text-secondary)]' : 'text-[var(--color-text-secondary)]'}`}>
                                                        <ChevronRight
                                                            className="shrink-0 mt-1"
                                                            size={14}
                                                            style={{
                                                                color: theme === 'light' && project.color.toLowerCase() === '#fcd535'
                                                                    ? '#b08400'
                                                                    : isDarkCard
                                                                        ? '#fcd535'
                                                                        : project.color
                                                            }}
                                                        />
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Tech Stack */}
                                        <div className={`flex flex-wrap gap-1.5 border-t pt-4 mt-4 ${isDarkCard ? 'border-[var(--color-border)]' : 'border-[var(--color-border)]'}`}>
                                            {project.techStack.map((tech) => {
                                                const isYellowTech = project.color.toLowerCase() === '#fcd535';
                                                return (
                                                    <span
                                                        key={tech}
                                                        className="tag text-xs font-medium py-1 px-2.5 font-sans"
                                                        style={
                                                            theme === 'light'
                                                                ? isYellowTech
                                                                    ? { borderColor: '#fcd53535', color: '#b08400', backgroundColor: '#fcd53510' }
                                                                    : { borderColor: `${project.color}30`, color: project.color }
                                                                : isDarkCard
                                                                    ? { borderColor: 'rgba(252, 213, 53, 0.25)', color: '#eaecef', backgroundColor: 'var(--color-bg-secondary)' }
                                                                    : { borderColor: `${project.color}30` }
                                                        }
                                                    >
                                                        {tech}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </AnimatedCard>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Other Projects */}
                {otherProjects.length > 0 && (
                    <div className="mt-20">
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-sans uppercase tracking-widest text-xs font-semibold text-center mb-10 text-[var(--color-text-secondary)]"
                        >
                            Other Engineering Projects
                        </motion.h3>

                        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                            {otherProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <AnimatedCard
                                        glowColor={project.color.replace('#', '').match(/.{2}/g)?.map(x => parseInt(x, 16)).join(', ') || '204, 120, 92'}
                                        className="bg-[var(--color-bg-card)] text-[var(--color-text-primary)]"
                                    >
                                        <div className="flex items-center justify-between mb-3">
                                            <span
                                                className="px-2 py-0.5 rounded text-xs font-semibold uppercase tracking-wider font-sans"
                                                style={getBadgeStyle(project.color, false)}
                                            >
                                                {project.role}
                                            </span>
                                            <div className="flex gap-3">
                                                {project.githubUrl && (
                                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]">
                                                        <Github size={18} />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                        <h4 className="text-lg font-medium font-display mb-2 text-[var(--color-text-primary)]">{project.title}</h4>
                                        <p className="text-sm text-[var(--color-text-secondary)] mb-4 leading-relaxed font-sans">
                                            {project.description}
                                        </p>
                                        
                                        {/* Long description for completeness */}
                                        <p className="text-xs text-[var(--color-text-muted)] mb-4 leading-relaxed border-l pl-2 font-sans" style={{ borderColor: theme === 'light' && project.color.toLowerCase() === '#fcd535' ? '#b08400' : `${project.color}60` }}>
                                            {project.longDescription}
                                        </p>

                                        <div className="flex flex-wrap gap-1.5 border-t border-[var(--color-border)] pt-3 mt-3">
                                            {project.techStack.map((tech) => (
                                                <span key={tech} className="tag text-xs py-0.5 px-2 font-sans">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </AnimatedCard>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
