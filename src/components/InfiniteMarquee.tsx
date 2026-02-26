import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

interface InfiniteMarqueeProps {
    children: ReactNode;
    speed?: number;
    direction?: 'left' | 'right';
    pauseOnHover?: boolean;
    className?: string;
}

export default function InfiniteMarquee({
    children,
    speed = 30,
    direction = 'left',
    pauseOnHover = true,
    className = ''
}: InfiniteMarqueeProps) {
    return (
        <div className={`marquee overflow-hidden ${className}`}>
            <motion.div
                className="marquee-content flex gap-8"
                animate={{
                    x: direction === 'left' ? [0, '-50%'] : ['-50%', 0]
                }}
                transition={{
                    duration: speed,
                    ease: 'linear',
                    repeat: Infinity,
                }}
                style={{ display: 'flex' }}
                whileHover={pauseOnHover ? { animationPlayState: 'paused' } : undefined}
            >
                {children}
                {children}
            </motion.div>
        </div>
    );
}
