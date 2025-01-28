"use client"
import { motion, useAnimation } from 'framer-motion'
import { ReactNode, useEffect } from 'react';

interface AnimatedUpProps {
    children: ReactNode;
    duration: number;
}

export const AnimatedUpScroll = ({ children, duration }: AnimatedUpProps) => {
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const yOffset = window.pageYOffset;
            if (yOffset > 0) {
                controls.start({ opacity: 1, scale: 1 });
            } else {
                controls.start({ opacity: 0, scale: 0.8 });
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [controls]);

    return (
        <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={controls}
            transition={{ duration }}
        >
            {children}
        </motion.div>
    );
};
