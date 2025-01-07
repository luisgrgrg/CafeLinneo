"use client"
import { motion } from 'framer-motion'

export const AnimatedTitle = () => {
    return (
        <motion.h2
            className="flex justify-center items-center mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <img className="items-center w-4/6" src="./images/section-home-img-h1-name-product.png" />
        </motion.h2>
    )
}

 
