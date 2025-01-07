"use client"
import { motion } from 'framer-motion'

export const AnimatedParagraph3 = () => {
    return (
        <motion.p
            className="mb-4 text-2xl mt-10"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
        >
            <strong className=" text-white">¡Encuentra tu café ahora!</strong>
        </motion.p>
    )
}

