import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';

export default function Contact() {
    const socialLinks = [
        { icon: Github, href: 'https://github.com/malikabdullah1786', label: 'GitHub' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammad-abdullah-67b841206', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:malikabdullah1786@gmail.com', label: 'Email' },
    ];

    return (
        <section id="contact" className="section py-24 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute bottom-0 left-0 right-0 h-1/2"
                    style={{
                        background: 'linear-gradient(to top, rgba(99, 102, 241, 0.05), transparent)'
                    }}
                />
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
                        Let's Connect
                    </span>
                    <h2 className="section-title">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="section-subtitle mx-auto mt-4">
                        Have a project in mind or just want to say hello? I'd love to hear from you!
                    </p>
                </motion.div>

                {/* Contact Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mx-auto"
                >
                    <div className="card glass p-8 md:p-12 text-center relative overflow-hidden">
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
                            <Send size={160} className="text-[var(--color-accent-primary)]" />
                        </div>

                        {/* Location */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center justify-center gap-2 text-[var(--color-text-secondary)] mb-8"
                        >
                            <MapPin size={18} />
                            <span>Lahore, Pakistan</span>
                        </motion.div>

                        {/* Main CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="mb-8"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                Ready to build something{' '}
                                <span className="gradient-text">amazing</span> together?
                            </h3>
                            <p className="text-[var(--color-text-secondary)]">
                                Whether you're looking for a developer, collaborator, or just want to connect,
                                I'm always open to discussing new opportunities.
                            </p>
                        </motion.div>

                        {/* Tally Form Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="mb-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
                        >
                            <MagneticButton
                                className="btn btn-primary text-lg px-8 py-4"
                                onClick={() => {
                                    // Open Tally form popup
                                    if (typeof window !== 'undefined' && (window as any).Tally) {
                                        (window as any).Tally.openPopup('0QOqDZ', { layout: 'modal' });
                                    } else {
                                        // Fallback to Tally link if script not loaded
                                        window.open('https://tally.so/r/0QOqDZ', '_blank');
                                    }
                                }}
                            >
                                <Send size={20} />
                                Send Message
                            </MagneticButton>
                            <MagneticButton
                                className="btn btn-secondary text-lg px-8 py-4"
                                onClick={() => window.location.href = 'mailto:malikabdullah1786@gmail.com'}
                            >
                                <Mail size={20} />
                                Email Me
                            </MagneticButton>
                        </motion.div>

                        {/* Divider */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className="flex-1 h-px bg-[var(--color-border)]" />
                            <span className="text-[var(--color-text-muted)] text-sm">or find me on</span>
                            <div className="flex-1 h-px bg-[var(--color-border)]" />
                        </div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="flex justify-center gap-6"
                        >
                            {socialLinks.map((link, index) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    whileHover={{ scale: 1.2, y: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <div className="w-14 h-14 rounded-xl glass flex items-center justify-center border border-[var(--color-border)] group-hover:border-[var(--color-accent-primary)] transition-colors">
                                        <link.icon size={24} className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent-primary)] transition-colors" />
                                    </div>
                                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-[var(--color-text-muted)] opacity-0 group-hover:opacity-100 transition-opacity">
                                        {link.label}
                                    </span>
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>

                {/* Footer */}
                <motion.footer
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-20 text-center"
                >
                    <p className="text-sm text-[var(--color-text-muted)] mt-2">
                        © {new Date().getFullYear()} Muhammad Abdullah. All rights reserved.
                    </p>
                </motion.footer>
            </div>
        </section>
    );
}
