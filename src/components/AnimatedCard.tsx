import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { type MouseEvent, type ReactNode } from 'react';

interface AnimatedCardProps {
    children: ReactNode;
    className?: string;
    glowColor?: string;
}

export default function AnimatedCard({ children, className = '', glowColor = '252, 213, 53' }: AnimatedCardProps) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useMotionValue(0), { stiffness: 150, damping: 15 });
    const rotateY = useSpring(useMotionValue(0), { stiffness: 150, damping: 15 });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = width / 2;
        const centerY = height / 2;

        const rotateXValue = ((y - centerY) / centerY) * -8;
        const rotateYValue = ((x - centerX) / centerX) * 8;

        rotateX.set(rotateXValue);
        rotateY.set(rotateYValue);

        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        rotateX.set(0);
        rotateY.set(0);
    };

    const background = useMotionTemplate`
    radial-gradient(
      300px circle at ${mouseX}px ${mouseY}px,
      rgba(${glowColor}, 0.15),
      transparent 80%
    )
  `;

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
            }}
            className={`card relative overflow-hidden ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ background }}
            />
            <div style={{ transform: 'translateZ(20px)' }}>
                {children}
            </div>
        </motion.div>
    );
}
