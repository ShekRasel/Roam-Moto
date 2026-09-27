import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { RideMotorcycle } from "@/lib/motorcycles-data";
import { formatCurrency } from "@/lib/utils";
export function MotorcycleCard({ motorcycle }: { motorcycle: RideMotorcycle }) {
  return (
    <article className="bike-card">
      <Link
        href={`/motorcycles/${motorcycle.slug}`}
        className="bike-card-image"
        aria-label={`Explore ${motorcycle.model}`}
      >
        <Image
          src={motorcycle.image}
          alt={`${motorcycle.color} ${motorcycle.model} motorcycle`}
          fill
          sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
          style={{ objectPosition: motorcycle.imagePosition }}
        />
        <span className="image-pill">{motorcycle.type}</span>
        <span className="image-arrow">
          <ArrowUpRight size={21} />
        </span>
      </Link>
      <div className="bike-card-content">
        <p className="small-label">{motorcycle.label}</p>
        <h3>
          <Link href={`/motorcycles/${motorcycle.slug}`}>
            {motorcycle.model}
          </Link>
        </h3>
        <p className="bike-caption">{motorcycle.tagline}</p>
        <div className="bike-card-bottom">
          <p>
            <strong>{formatCurrency(motorcycle.price)}</strong>
            <span> / day</span>
          </p>
          <Link
            href={`/customize-booking?bike=${motorcycle.slug}`}
            className="text-link"
          >
            Plan a ride <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
