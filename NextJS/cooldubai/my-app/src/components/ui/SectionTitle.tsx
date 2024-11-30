"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
  className?: string;
}

export const SectionTitle = ({ children, subtitle, className = "" }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={`text-center mb-16 ${className}`}
    >
      <h2 className="text-3xl font-bold mb-4 text-cyan-950">{children}</h2>
      {subtitle && <p className="text-cyan-800">{subtitle}</p>}
    </motion.div>
  );
};
