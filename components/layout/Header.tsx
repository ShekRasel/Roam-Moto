"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { navigation } from "@/lib/constants";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-2xl"
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-4 py-4 md:px-8">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-[0.22em] text-white/90"
        >
          VELOCITY STUDIO
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-[0.28em] text-white/70 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/90 transition hover:border-accent hover:bg-white/10 md:hidden">
          <Menu size={20} />
        </button>
      </div>
    </motion.header>
  );
}
