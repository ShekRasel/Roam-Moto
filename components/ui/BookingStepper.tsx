"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

interface BookingStepperProps {
  step: number;
  setStep: (value: number) => void;
}

const labels = ["Model", "Color", "Package", "Date", "Details"];

export function BookingStepper({ step, setStep }: BookingStepperProps) {
  return (
    <div className="space-y-6 rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-premium">
      <div className="flex flex-wrap gap-3">
        {labels.map((label, index) => (
          <button
            key={label}
            type="button"
            onClick={() => setStep(index)}
            className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.35em] transition ${
              step === index
                ? "bg-accent text-black"
                : "bg-white/5 text-white/70 hover:bg-white/10"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="rounded-3xl bg-black/40 p-4">
        <motion.div
          initial={false}
          animate={{ width: `${((step + 1) / labels.length) * 100}%` }}
          className="h-2 rounded-full bg-accent"
        />
      </div>
    </div>
  );
}
