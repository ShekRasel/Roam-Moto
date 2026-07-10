"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 15, label: "Models" },
  { value: 50, label: "Countries" },
  { value: 20, label: "Awards" },
  { value: 1000, label: "Happy Riders" },
];

export function StatsSection() {
  return (
    <section className="rounded-[36px] border border-white/10 bg-white/5 p-6 shadow-premium">
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.35em] text-accent">
            STATS
          </p>
          <h3 className="font-accent text-3xl font-bold uppercase tracking-[0.12em] text-white">
            Performance metrics
          </h3>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-white/10 bg-black/60 p-6"
            >
              <AnimatedCounter value={item.value} label={item.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
