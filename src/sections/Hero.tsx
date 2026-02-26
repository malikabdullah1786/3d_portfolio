import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';

export default function Hero() {
    const titleWords = ['Software', 'Engineer', '&', 'Founder'];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
            },
        },
    };

    const tagVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut" as const,
            },
        },
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="section min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Gradient Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
                        filter: 'blur(60px)',
                    }}
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
                        filter: 'blur(60px)',
                    }}
                    animate={{
                        x: [0, -50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            </div>

            <div className="container relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Profile Picture */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-8"
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}
                    >
                        <div className="relative">
                            {/* Glowing ring */}
                            <motion.div
                                className="absolute -inset-1 rounded-full"
                                style={{
                                    background: 'linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary), var(--color-accent-tertiary))',
                                }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                            />
                            {/* Profile image container */}
                            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[var(--color-bg-primary)]">
                                <img
                                    src="/profile.png"
                                    alt="Muhammad Abdullah"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        // Fallback to initials if image not found
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        target.parentElement!.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] flex items-center justify-center text-4xl md:text-5xl font-bold text-white">MA</div>';
                                    }}
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Greeting */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-4"
                    >
                        Hi, I'm
                    </motion.p>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text"
                    >
                        Muhammad Abdullah
                    </motion.h1>

                    {/* Animated Title */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8"
                    >
                        {titleWords.map((word, index) => (
                            <motion.span
                                key={index}
                                variants={wordVariants}
                                className="text-2xl md:text-4xl font-semibold text-[var(--color-text-primary)]"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* Tags */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-wrap justify-center gap-3 mb-12"
                    >
                        {['C++ Expert', 'Full-Stack Developer', 'DevOps Specialist', 'Cybersecurity'].map((tag) => (
                            <motion.span
                                key={tag}
                                variants={tagVariants}
                                className="tag"
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* Institution */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        className="text-[var(--color-text-secondary)] mb-8"
                    >
                        Software Engineering Student at{' '}
                        <span className="text-[var(--color-accent-primary)] font-semibold">FAST-NUCES Lahore</span>
                        {' '}| GDSC Lead | SOFTEC Deputy
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className="flex flex-wrap justify-center gap-4 mb-12"
                    >
                        <MagneticButton
                            className="btn btn-primary"
                            onClick={() => scrollToSection('projects')}
                        >
                            View My Work
                        </MagneticButton>
                        <MagneticButton
                            className="btn btn-secondary"
                            onClick={() => scrollToSection('contact')}
                        >
                            Get In Touch
                        </MagneticButton>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                        className="flex justify-center gap-6"
                    >
                        <motion.a
                            href="https://github.com/malikabdullah1786"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors"
                            whileHover={{ scale: 1.2, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Github size={24} />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/muhammad-abdullah-67b841206"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors"
                            whileHover={{ scale: 1.2, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Linkedin size={24} />
                        </motion.a>
                        <motion.a
                            href="mailto:your.email@example.com"
                            className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors"
                            whileHover={{ scale: 1.2, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Mail size={24} />
                        </motion.a>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="cursor-pointer text-[var(--color-text-secondary)]"
                        onClick={() => scrollToSection('about')}
                    >
                        <ArrowDown size={28} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
