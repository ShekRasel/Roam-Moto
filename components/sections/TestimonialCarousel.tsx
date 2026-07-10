"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/testimonials-data";
import { Star } from "lucide-react";

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 4000);
    return () => window.clearInterval(timer);
  }, []);

  const testimonial = testimonials[index];

  return (
    <section className="rounded-[36px] border border-white/10 bg-white/5 p-6 shadow-premium">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.35em] text-accent">
          CLIENT VOICES
        </p>
        <h3 className="font-accent text-3xl font-bold uppercase tracking-[0.12em] text-white">
          Trusted by riders worldwide
        </h3>
      </div>
      <div className="mt-6 space-y-4">
        <AnimatePresence mode="wait">
          <motion.article
            key={testimonial.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="glass-panel rounded-[32px] p-6 shadow-premium"
          >
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 overflow-hidden rounded-full border border-white/10">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg font-semibold text-white">
                  {testimonial.name}
                </p>
                <p className="text-sm uppercase tracking-[0.2em] text-white/60">
                  {testimonial.location}
                </p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-7 text-white/70">
              “{testimonial.quote}”
            </p>
            <div className="mt-4 flex items-center gap-1 text-accent">
              {Array.from({ length: testimonial.rating }).map((_, idx) => (
                <Star key={idx} size={16} />
              ))}
            </div>
          </motion.article>
        </AnimatePresence>
        <div className="flex items-center gap-2">
          {testimonials.map((item, dotIndex) => (
            <button
              key={item.id}
              onClick={() => setIndex(dotIndex)}
              className={`h-2 w-8 rounded-full transition ${dotIndex === index ? "bg-accent" : "bg-white/10"}`}
              aria-label={`Go to testimonial ${dotIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
