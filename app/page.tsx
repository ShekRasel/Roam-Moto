import { Hero } from "@/components/sections/Hero";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { FeatureCards } from "@/components/sections/FeatureCards";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { MotorcycleGrid } from "@/components/sections/MotorcycleGrid";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <MarqueeSection />
      <div className="mx-auto max-w-[1440px] px-4 pb-24 pt-24 md:px-8">
        <MotorcycleGrid />
        <div className="mt-20 grid gap-10 lg:grid-cols-3">
          <FeatureCards />
          <StatsSection />
          <TestimonialCarousel />
        </div>
      </div>
    </div>
  );
}
