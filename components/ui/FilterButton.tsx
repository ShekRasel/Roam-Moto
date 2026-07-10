"use client";

import { cn } from "@/lib/utils";

interface FilterButtonProps {
  active: boolean;
  label: string;
  onClick: () => void;
}

export function FilterButton({ active, label, onClick }: FilterButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] transition",
        active
          ? "border-accent bg-accent/10 text-white shadow-glow"
          : "border-white/10 bg-white/5 text-white/70 hover:border-accent/40 hover:text-white",
      )}
    >
      {label}
    </button>
  );
}
