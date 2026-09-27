"use client";
import { useState } from "react";
import { Info } from "lucide-react";
import { motorcycles } from "@/lib/motorcycles-data";
import { MotorcycleCard } from "@/components/ui/MotorcycleCard";
const categories = ["All motorcycles", "Sport", "Roadster"] as const;
export default function MotorcyclesPage() {
  const [active, setActive] = useState<string>("All motorcycles");
  const filtered = motorcycles.filter(
    (m) => active === "All motorcycles" || m.type === active,
  );
  return (
    <div className="shell collection-page">
      <div className="page-heading">
        <p className="eyebrow">FIND YOUR KIND OF FREEDOM</p>
        <h1>
          A ride for every
          <br />
          <em>kind of weekend.</em>
        </h1>
        <p>
          Sporty, classic, or a little extraordinary. Explore our motorcycle
          collection and build a ride around what moves you.
        </p>
      </div>
      <div className="collection-tools">
        <div className="filter-list" aria-label="Filter motorcycles by style">
          {categories.map((c) => (
            <button
              type="button"
              key={c}
              className="filter-button"
              aria-pressed={active === c}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <p aria-live="polite">{filtered.length} motorcycles</p>
      </div>
      <div className="bike-grid">
        {filtered.map((m) => (
          <MotorcycleCard key={m.id} motorcycle={m} />
        ))}
      </div>
      <div className="info-banner">
        <Info size={18} />
        <span>
          Explore a concept collection. Rates are sample daily rentals, not
          purchase prices. Model year, availability, and final rental terms
          would be confirmed before a real booking.
        </span>
      </div>
    </div>
  );
}
