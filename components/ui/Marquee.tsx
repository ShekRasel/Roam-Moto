"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  reverse?: boolean;
}

export function Marquee({ items, reverse = false }: MarqueeProps) {
  const direction = reverse ? 1 : -1;

  return (
    <div className="overflow-hidden rounded-full border border-white/10 bg-black/30 py-3">
      <motion.div
        animate={{ x: [0, direction * 1000] }}
        transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
        className="flex min-w-full items-center gap-8 whitespace-nowrap text-sm uppercase tracking-[0.35em] text-white/60"
      >
        {items.concat(items).map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="inline-flex items-center gap-2"
          >
            <span>{item}</span>
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
