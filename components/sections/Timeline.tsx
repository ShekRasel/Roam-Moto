"use client";

const timeline = [
  {
    year: "2010",
    title: "Founded in a small garage",
    description:
      "The studio began with a vision to redefine high-performance motorcycle design.",
  },
  {
    year: "2013",
    title: "First prototype unveiled",
    description:
      "A breakthrough concept launched with meticulous craftsmanship and precision engineering.",
  },
  {
    year: "2016",
    title: "International expansion",
    description:
      "Velocity Studio introduced its signature collection to clients around the globe.",
  },
  {
    year: "2020",
    title: "Award-winning design recognized",
    description:
      "Global accolades confirmed the brand’s commitment to modern luxury and performance.",
  },
  {
    year: "2024",
    title: "Global presence in 50+ countries",
    description:
      "The studio now serves a premium community of riders worldwide.",
  },
];

export function Timeline() {
  return (
    <div className="space-y-8 rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-premium">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.35em] text-accent">
          Milestones
        </p>
        <h3 className="text-3xl font-accent font-bold uppercase tracking-[0.12em] text-white">
          A story of relentless pursuit
        </h3>
      </div>
      <div className="space-y-6">
        {timeline.map((item) => (
          <div
            key={item.year}
            className="grid gap-4 rounded-3xl border border-white/10 bg-black/50 p-6 md:grid-cols-[120px_1fr]"
          >
            <p className="text-2xl font-bold text-accent">{item.year}</p>
            <div>
              <p className="text-lg font-semibold text-white">{item.title}</p>
              <p className="mt-2 text-sm leading-7 text-white/70">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
