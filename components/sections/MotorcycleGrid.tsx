import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motorcycles } from "@/lib/motorcycles-data";
import { MotorcycleCard } from "@/components/ui/MotorcycleCard";
export function MotorcycleGrid() {
  return (
    <section className="section shell" id="collection">
      <div className="section-heading">
        <div>
          <p className="eyebrow">THE COLLECTION</p>
          <h2>
            Different bikes.
            <br />
            Same sense of freedom.
          </h2>
        </div>
        <div>
          <p>
            Find the ride that feels like you.
            <br />A day out or a whole weekend away.
          </p>
          <Link href="/motorcycles" className="text-link">
            Explore all motorcycles <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
      <div className="bike-grid">
        {motorcycles.map((m) => (
          <MotorcycleCard key={m.id} motorcycle={m} />
        ))}
      </div>
      <p className="collection-note">
        Illustrative daily rates · Explore each bike to plan your ride.
      </p>
    </section>
  );
}
