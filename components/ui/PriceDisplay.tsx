"use client";

import { formatCurrency } from "@/lib/utils";

interface PriceDisplayProps {
  price: number;
}

export function PriceDisplay({ price }: PriceDisplayProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-premium">
      <p className="text-sm uppercase tracking-[0.3em] text-white/60">
        Starting Price
      </p>
      <p className="mt-3 text-4xl font-accent font-bold uppercase tracking-[0.1em] text-white">
        {formatCurrency(price)}
      </p>
    </div>
  );
}
