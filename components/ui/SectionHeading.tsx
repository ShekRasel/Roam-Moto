"use client";

import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export function SectionHeading({
  title,
  subtitle,
  children,
}: SectionHeadingProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="h-0.5 w-16 rounded-full bg-accent" />
        <p className="text-xs uppercase tracking-[0.35em] text-white/60">
          {title}
        </p>
      </div>
      <div className="space-y-3">
        <h2 className="font-accent text-3xl font-bold uppercase tracking-[0.12em] text-white md:text-4xl">
          {subtitle ?? title}
        </h2>
        {children && (
          <p className="max-w-2xl text-sm leading-7 text-white/70">
            {children}
          </p>
        )}
      </div>
    </div>
  );
}
