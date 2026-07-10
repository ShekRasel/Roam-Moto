"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface MotorcycleCardProps {
  slug: string;
  image: string;
  model: string;
  type: string;
  spec: string;
}

export function MotorcycleCard({
  slug,
  image,
  model,
  type,
  spec,
}: MotorcycleCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 160, damping: 18 }}
      className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-premium"
    >
      <Link
        href={`/motorcycles/${slug}`}
        className="block overflow-hidden rounded-[32px]"
      >
        <div className="relative h-72 overflow-hidden transition duration-500 group-hover:scale-105">
          <img
            src={image}
            alt={model}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/90 to-transparent px-5 py-4 transition duration-500 group-hover:translate-y-0">
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">
              {type}
            </p>
            <p className="mt-2 text-xl font-semibold text-white">{model}</p>
            <p className="mt-1 text-sm text-white/70">{spec}</p>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
