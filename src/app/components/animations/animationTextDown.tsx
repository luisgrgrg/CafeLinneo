"use client"
import { motion } from 'framer-motion'
import { ReactNode } from 'react';

interface AnimationTextDownProps { children: ReactNode; duration: number; }
export const AnimationTextDown = ({ children, duration }: AnimationTextDownProps) => {
    return (
        <motion.h2
            className="flex justify-center items-center mb-4 text-4xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration }}
        >
            {children}
        </motion.h2>
    )
}


