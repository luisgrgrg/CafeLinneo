"use client"
import { motion } from 'framer-motion'

export const AnimatedParagraph1 = () => {
    return (
        <motion.p
            className="mb-4 text-2xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
        >
            El <strong className=" text-white">MEJOR</strong> momento del día comienza con un <strong className=" text-white">BUEN CAFÉ</strong>
        </motion.p>
    )
}
