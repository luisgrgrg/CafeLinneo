"use client"
import { motion } from 'framer-motion'

export const AnimatedParagraph2 = () => {
    return (
        <motion.p
            className="mb-4 text-xl mt-10"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
        >
            Descubre el <strong className=" text-white">Auténtico</strong> sabor del <strong className=" text-white">Café Arábico del Valle del Cauca.</strong>
        </motion.p>
    )
}

