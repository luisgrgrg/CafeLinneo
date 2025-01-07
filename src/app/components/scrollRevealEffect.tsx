"use client"
import { ReactNode, useRef } from "react"
import { motion, useInView } from 'framer-motion'

interface ScrollRevealEffectProps { children: ReactNode; duration: number; }

export const ScrollRevealEffect = ({ children, duration }: ScrollRevealEffectProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref)
    return (
        <motion.div
            style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(100)",
                transition: `all .3s cubic-bezier(0.17,0.55,0.55,1) ${duration}s`
            }}
            ref={ref}
        >
            {children}
        </motion.div>
    )
}