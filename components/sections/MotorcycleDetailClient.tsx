"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { motorcycles } from "@/lib/motorcycles-data";
import { ImageGallery } from "@/components/ui/ImageGallery";
import { ColorPicker } from "@/components/ui/ColorPicker";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Motorcycle = (typeof motorcycles)[number];

type Props = {
  motorcycle: Motorcycle;
};

export default function MotorcycleDetailClient({ motorcycle }: Props) {
  const [color, setColor] = useState(motorcycle.colors[0]);

  const related = useMemo(
    () =>
      motorcycles.filter((item) =>
        motorcycle.relatedModels.includes(item.slug),
      ),
    [motorcycle],
  );

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-28 md:px-8">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-8">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-accent">
              Motorcycles
            </p>
            <h1 className="font-accent text-5xl font-bold uppercase tracking-[0.12em] text-white md:text-6xl">
              {motorcycle?.model}
            </h1>
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">
              {motorcycle?.type}
            </p>
            <p className="max-w-2xl text-base leading-8 text-white/70">
              {motorcycle?.description}
            </p>
          </div>
          <div className="rounded-[36px] border border-white/10 bg-white/5 p-6 shadow-premium">
            <div className="grid gap-4 sm:grid-cols-2">
              {Object.entries(motorcycle?.specifications || {}).map(
                ([key, value]) => (
                  <div
                    key={key}
                    className="rounded-3xl border border-white/10 bg-black/50 p-4 text-sm text-white/70"
                  >
                    <p className="font-semibold text-white">{key}</p>
                    <p className="mt-2">{value}</p>
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="space-y-6">
            <SectionHeading
              title="Design Philosophy"
              subtitle="Every curve tells a story of speed"
            >
              The Velocity series is engineered to feel aerodynamic, precise and
              deeply luxurious at every angle.
            </SectionHeading>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-premium">
                <p className="text-sm leading-7 text-white/70">
                  Crafted for the rider who seeks a rich connection between
                  machine and road, delivered through advanced materials,
                  refined engineering and purposeful design language.
                </p>
              </div>
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black/40 p-6">
                <Image
                  src={motorcycle?.images[1] ?? motorcycle?.image}
                  alt={motorcycle?.model}
                  width={800}
                  height={600}
                  className="h-full w-full rounded-[28px] object-cover"
                />
              </div>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-premium">
              <p className="text-xs uppercase tracking-[0.35em] text-accent">
                Technical Excellence
              </p>
              <div className="mt-6 grid gap-3">
                {motorcycle?.features.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-3xl border border-white/10 bg-black/50 p-4 text-sm text-white/70"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            <ColorPicker
              colors={motorcycle?.colors}
              selected={color}
              onSelect={setColor}
            />
          </div>
        </div>

        <aside className="space-y-8">
          <div className="rounded-[36px] border border-white/10 bg-white/5 p-6 shadow-premium">
            <PriceDisplay price={motorcycle?.price} />
            <div className="mt-8 rounded-[28px] border border-white/10 bg-black/60 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-accent">
                360° Experience
              </p>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Activate the rotation trigger to explore the motorcycle in
                motion through an immersive presentation.
              </p>
              <button className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-accent px-5 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:brightness-105">
                Start 360° View
              </button>
            </div>
          </div>
          <ImageGallery images={motorcycle?.images} />
          <div className="rounded-[36px] border border-white/10 bg-white/5 p-6 shadow-premium">
            <p className="text-xs uppercase tracking-[0.35em] text-accent">
              Related Models
            </p>
            <div className="mt-4 space-y-4">
              {related.map((model) => (
                <motion.a
                  key={model.slug}
                  href={`/motorcycles/${model.slug}`}
                  whileHover={{ x: 8 }}
                  className="block rounded-3xl border border-white/10 bg-black/50 p-4 text-sm text-white transition"
                >
                  <p className="font-semibold text-white">{model.model}</p>
                  <p className="text-white/60">{model.type}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
