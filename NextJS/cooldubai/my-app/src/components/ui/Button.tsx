"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button = ({ children, onClick, className = "" }: ButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
    >
      {children}
    </motion.button>
  );
};
