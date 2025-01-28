"use client"
import { motion } from 'framer-motion'
import { ReactNode } from 'react';

interface AnimatedUpProps { children: ReactNode; duration: number; }

export const AnimatedUp = ({children, duration} : AnimatedUpProps) => {
    return (
        <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration }}
        >
           {children}
        </motion.div>
    ) 
}

