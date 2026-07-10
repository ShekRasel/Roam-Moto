"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      className={`glass-panel rounded-[28px] border border-white/10 p-6 shadow-premium ${className}`}
    >
      {children}
    </motion.div>
  );
}
