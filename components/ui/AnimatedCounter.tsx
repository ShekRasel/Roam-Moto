"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export function AnimatedCounter({
  value,
  suffix = "+",
  label,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) {
      return;
    }

    const duration = 1.2;
    const increment = Math.max(1, Math.floor(value / 60));
    let current = 0;
    const start = performance.now();

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      current = Math.floor(progress * value);
      setCount(current);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <div ref={ref} className="space-y-3">
      <p className="text-4xl font-accent font-bold uppercase tracking-[0.15em] text-white md:text-5xl">
        {count}
        {suffix}
      </p>
      <p className="text-sm uppercase tracking-[0.18em] text-white/60">
        {label}
      </p>
    </div>
  );
}
