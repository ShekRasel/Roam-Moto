"use client";

import { useState } from "react";
import { Info } from "lucide-react";

interface HotspotProps {
  label: string;
  description: string;
  position: { top: string; left: string };
}

export function Hotspot({ label, description, position }: HotspotProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute" style={position}>
      <button
        type="button"
        onClick={() => setOpen((state) => !state)}
        className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white transition hover:border-accent"
      >
        <Info size={18} className="transition group-hover:text-accent" />
      </button>
      {open && (
        <div className="absolute left-12 top-1/2 w-64 -translate-y-1/2 rounded-3xl border border-white/10 bg-black/90 p-4 text-sm text-white shadow-premium">
          <p className="font-semibold text-white">{label}</p>
          <p className="mt-2 text-white/70">{description}</p>
        </div>
      )}
    </div>
  );
}
