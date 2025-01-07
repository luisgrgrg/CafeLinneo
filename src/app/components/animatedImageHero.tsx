"use client"
import { motion } from 'framer-motion'

export const AnimatedImage = () => {
    return (
        <motion.div
            className="grid grid-cols-1 content-center gap-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
        >
            <img className="w-auto lg:h-4/6 lg:ml-48 md:ml-80 md:h-2/6 sm:h-1/6 drop-shadow-4xl" src="./images/section-home-img-product.png" alt="office content 2" />
        </motion.div>
    ) 
}

