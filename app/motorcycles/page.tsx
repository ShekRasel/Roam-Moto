"use client";

import { useMemo, useState } from "react";
import { motorcycles } from "@/lib/motorcycles-data";
import { FilterButton } from "@/components/ui/FilterButton";
import { MotorcycleCard } from "@/components/ui/MotorcycleCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const categories = [
  "All",
  "Sport",
  "Touring",
  "Cruiser",
  "Adventure",
  "Electric",
] as const;

export default function MotorcyclesPage() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    if (active === "All") return motorcycles;
    return motorcycles.filter((model) => model.type === active);
  }, [active]);

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-28 md:px-8">
      <SectionHeading
        title="The Collection"
        subtitle="Where engineering meets art"
      >
        Discover a signature lineup of motorcycles that blend luxury, precision
        and raw performance.
      </SectionHeading>
      <div className="mt-10 flex flex-wrap gap-3">
        {categories.map((category) => (
          <FilterButton
            key={category}
            label={category}
            active={active === category}
            onClick={() => setActive(category)}
          />
        ))}
      </div>
      <p className="mt-6 text-sm text-white/60">{filtered.length} results</p>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((motorcycle) => (
          <MotorcycleCard
            key={motorcycle.id}
            slug={motorcycle.slug}
            image={motorcycle.image}
            model={motorcycle.model}
            type={motorcycle.type}
            spec={`${motorcycle.engine} • ${motorcycle.horsepower} HP`}
          />
        ))}
      </div>
    </div>
  );
}
