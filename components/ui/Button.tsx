"use client";

import { clsx } from "clsx";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const styles = {
  primary: "bg-gradient-to-r from-accent to-highlight text-black shadow-glow",
  secondary:
    "bg-gradient-to-r from-[#C0A060] to-[#E8D5A0] text-black shadow-glow",
  outline: "border border-white/15 bg-white/5 text-white hover:border-accent",
  ghost: "bg-transparent text-white/90 hover:text-white",
};

export function Button({
  variant = "primary",
  children,
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      type={type}
      onClick={onClick}
      className={clsx(
        "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition focus:outline-none",
        styles[variant],
        className,
      )}
    >
      {children}
    </motion.button>
  );
}
