"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,_#0A0A0A_0%,_#1A1A05_40%,_#0A0A0A_100%)]">
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/images/hero/showcase.jpg"
          alt="Luxury motorcycle"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>
      <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col justify-between px-4 py-20 md:px-8">
        <div className="flex justify-end gap-4 text-white/70">
          <a
            href="#"
            aria-label="Instagram"
            className="transition hover:text-accent"
          >
            <Instagram size={18} />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="transition hover:text-accent"
          >
            <Youtube size={18} />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="transition hover:text-accent"
          >
            <Twitter size={18} />
          </a>
        </div>
        <div className="grid gap-12 pt-24 lg:grid-cols-[0.9fr_1fr] lg:items-end lg:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-2xl space-y-8"
          >
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.4em] text-white/60">
                Velocity Studio
              </p>
              <h1 className="font-accent text-5xl font-bold uppercase leading-[0.9] tracking-[0.18em] text-white sm:text-6xl md:text-7xl">
                Masterpieces in Motion
              </h1>
              <p className="max-w-xl text-base leading-8 text-white/70 md:text-lg">
                Experience the pinnacle of two-wheeled engineering through
                motion, craftsmanship and immersive design.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button className="shadow-glow" variant="primary">
                Explore the Collection
              </Button>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-white/70 shadow-premium">
                <p className="font-semibold text-white">Premium storytelling</p>
                <p className="text-xs uppercase tracking-[0.28em] text-white/50">
                  Luxury digital experience
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-4 shadow-premium"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_35%)]" />
            <div className="relative h-[420px] overflow-hidden rounded-[32px]">
              <Image
                src="/images/hero/showcase.jpg"
                alt="Motorcycle showcase"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-6 space-y-3 text-sm text-white/70">
              <p>Signature collection of elevated performance machines.</p>
              <div className="flex items-center gap-3 text-white/80">
                <span className="inline-flex h-2 w-2 rounded-full bg-accent" />
                <span>Innovative design guidelines</span>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex items-center justify-center gap-3 pb-6 pt-10 text-white/60">
          <ArrowDown className="animate-bounce" size={20} />
          <span className="uppercase tracking-[0.3em]">Scroll to discover</span>
        </div>
      </div>
    </section>
  );
}
