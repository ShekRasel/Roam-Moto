"use client";

import { motion } from "framer-motion";
import { navigation } from "@/lib/constants";
import { Instagram, Youtube, Twitter } from "lucide-react";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mt-20 border-t border-[#C0A060]/10 bg-black/80 px-4 py-12 text-white/80 backdrop-blur-xl md:px-8"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.32em] text-white/80">
            Velocity Studio
          </p>
          <p className="max-w-md text-sm leading-7 text-white/70">
            A luxury digital experience platform for the world’s most refined
            motorcycle enthusiasts.
          </p>
          <div className="flex items-center gap-4 text-white/80">
            <a href="#" className="transition hover:text-accent">
              <Instagram size={18} />
            </a>
            <a href="#" className="transition hover:text-accent">
              <Youtube size={18} />
            </a>
            <a href="#" className="transition hover:text-accent">
              <Twitter size={18} />
            </a>
          </div>
        </div>
        <div className="grid gap-3 text-sm text-white/70 md:text-right">
          <p className="text-white/90">Navigation</p>
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="max-w-sm space-y-3 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-premium">
          <p className="text-sm uppercase tracking-[0.3em] text-white/80">
            Newsletter
          </p>
          <p className="text-sm text-white/70">
            Receive curated launches and studio journeys.
          </p>
          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-2xl border border-white/10 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-accent"
            />
            <button className="rounded-2xl bg-gradient-to-r from-accent to-highlight px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:brightness-110">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/50">
        © 2026 Velocity Studio. Crafted with precision.
      </div>
    </motion.footer>
  );
}
