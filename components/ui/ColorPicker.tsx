"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils";

const palette: Record<string, string> = {
  "Matte Black": "#111111",
  "Racing Red": "#CC0000",
  "Metallic Silver": "#8A8A8A",
  "Midnight Blue": "#0B1D3F",
  Gold: "#C0A060",
  "Pearl White": "#F8F5F0",
  "Phantom Black": "#0F0F0F",
  "Solar Orange": "#E8682C",
  "Arctic White": "#F4F4F4",
  Copper: "#B26B3F",
  "Graphite Grey": "#4B5358",
  "Desert Sand": "#C7A17A",
};

interface ColorPickerProps {
  colors: string[];
  selected: string;
  onSelect: (color: string) => void;
}

export function ColorPicker({ colors, selected, onSelect }: ColorPickerProps) {
  return (
    <div className="space-y-4 rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-premium">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-accent">
            Color Options
          </p>
          <p className="mt-2 text-sm text-white/70">
            Choose a finish and preview the palette.
          </p>
        </div>
        <span className="rounded-2xl bg-white/5 px-4 py-2 text-sm text-white/70">
          {selected}
        </span>
      </div>
      <div className="flex flex-wrap gap-3">
        {colors.map((color) => (
          <button
            key={color}
            type="button"
            onClick={() => onSelect(color)}
            className={cn(
              "flex h-16 w-16 items-center justify-center rounded-3xl border transition",
              selected === color
                ? "border-accent bg-white/10 shadow-glow"
                : "border-white/10 bg-white/5 hover:border-accent",
            )}
            style={{ backgroundColor: palette[color] || "#111111" }}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/80">
              {color === selected ? "✓" : ""}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
