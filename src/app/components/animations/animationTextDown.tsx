"use client"
import { motion } from 'framer-motion'
import { ReactNode } from 'react';

interface AnimationTextDownProps { children: ReactNode; duration: number; delay: number  }
export const AnimationTextDown = ({ children, duration, delay }: AnimationTextDownProps) => {
    return (
        <motion.h2
            className="flex justify-center items-center mb-3"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration, delay }}
        >
            {children}
        </motion.h2>
    )
}


