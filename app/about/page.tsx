import { SectionHeading } from "@/components/ui/SectionHeading";
import { TeamSection } from "@/components/sections/TeamSection";
import { Timeline } from "@/components/sections/Timeline";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1440px] px-4 py-28 md:px-8">
      <section className="rounded-[36px] border border-white/10 bg-white/5 p-12 shadow-premium">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <SectionHeading
              title="We don't build motorcycles."
              subtitle="We craft legends."
            />
            <p className="max-w-2xl text-base leading-8 text-white/70">
              Velocity Studio is a luxury motorcycle atelier focused on
              immersive storytelling, engineering excellence and bespoke rider
              experiences. Each launch is an orchestration of aesthetic
              precision and performance.
            </p>
            <p className="text-sm uppercase tracking-[0.35em] text-accent">
              The Philosophy
            </p>
          </div>
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black/40">
            <img
              src="/images/about/workshop.svg"
              alt="Workshop"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="mt-16 grid gap-10 xl:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-8">
          <div className="rounded-[36px] border border-white/10 bg-white/5 p-10 shadow-premium">
            <h2 className="text-3xl font-accent font-bold uppercase tracking-[0.12em] text-white">
              Our Story
            </h2>
            <div className="mt-8 space-y-6 text-sm leading-8 text-white/70">
              <p>
                Founded from a passion for extraordinary machines, Velocity
                Studio combines boutique craftsmanship with high-performance
                motorcycle design.
              </p>
              <p>
                Every detail is refined through relentless research, premium
                materials and a relentless pursuit of motion that feels alive.
              </p>
              <p>
                From concept to road, our studio delivers a luxury experience
                that is as memorable as the ride itself.
              </p>
            </div>
          </div>
          <Timeline />
        </div>
        <TeamSection />
      </section>
    </div>
  );
}
