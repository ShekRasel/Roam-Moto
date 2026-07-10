"use client";

import { Sparkles, Gauge, Crown } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

const features = [
  {
    title: "Performance Engineering",
    description: "Precision-tuned systems for a thrilling power delivery.",
    icon: Gauge,
  },
  {
    title: "Timeless Design",
    description: "Sculpted forms that celebrate speed and presence.",
    icon: Sparkles,
  },
  {
    title: "Bespoke Experience",
    description: "A tailored ride journey from first touch to finish line.",
    icon: Crown,
  },
];

export function FeatureCards() {
  return (
    <div className="grid gap-6">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-accent">
          WHY VELOCITY
        </p>
        <h3 className="font-accent text-3xl font-bold uppercase tracking-[0.12em] text-white">
          Precision and elegance in every detail
        </h3>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <GlassCard key={feature.title} className="group overflow-hidden">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-white/5 text-accent transition group-hover:bg-accent/10">
                  <Icon size={28} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-white/70">{feature.description}</p>
                </div>
              </div>
            </GlassCard>
          );
        })}
      </div>
    </div>
  );
}
