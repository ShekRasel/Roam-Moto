"use client";

import { motion } from "framer-motion";
import { motorcycles } from "@/lib/motorcycles-data";
import { MotorcycleCard } from "@/components/ui/MotorcycleCard";

export function MotorcycleGrid() {
  return (
    <section className="space-y-8 border-t border-white/10 pt-14">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-accent">
            THE COLLECTION
          </p>
          <h2 className="font-accent text-4xl font-bold uppercase tracking-[0.12em] text-white md:text-5xl">
            Discover the signature fleet
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-white/70">
          Every machine is curated with advanced engineering and a sculpted
          aesthetic that commands attention.
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        {motorcycles.map((motorcycle) => (
          <MotorcycleCard
            key={motorcycle.id}
            slug={motorcycle.slug}
            image={motorcycle.image}
            model={motorcycle.model}
            type={motorcycle.type}
            spec={`${motorcycle.horsepower} HP • ${motorcycle.acceleration}`}
          />
        ))}
      </motion.div>
    </section>
  );
}
