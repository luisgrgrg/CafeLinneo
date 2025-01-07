"use client";
import { motion } from "framer-motion";

interface FloatingImageProps {
  src: string;
  className?: string;
  alt: string;
  duration: number;
  style?: React.CSSProperties;
  ymove: number;
} 

export const FloatingImage = ({ src, className, alt, duration, ymove }: FloatingImageProps) => {
  return (
    <motion.div
      animate={{
        y: [0, ymove, 0], // Movimiento hacia arriba y abajo
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "mirror", // Repite la animación hacia adelante y hacia atrás
        ease: "easeInOut",
      }}
    >
      <img src={src} alt={alt} className={className} />
    </motion.div>
  );
};
