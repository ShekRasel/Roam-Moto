"use client";

import { Marquee } from "@/components/ui/Marquee";

export function MarqueeSection() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-14 md:px-8">
      <div className="grid gap-4">
        <Marquee
          items={[
            "Ducati",
            "Triumph",
            "BMW",
            "Harley-Davidson",
            "Yamaha",
            "Honda",
            "KTM",
            "MV Agusta",
            "Aprilia",
            "Norton",
            "Indian",
            "Royal Enfield",
          ]}
        />
        <Marquee
          reverse
          items={[
            "Speed",
            "Precision",
            "Power",
            "Innovation",
            "Craftsmanship",
            "Heritage",
            "Performance",
            "Luxury",
            "Engine",
            "Design",
            "Excellence",
            "Passion",
          ]}
        />
      </div>
    </section>
  );
}
