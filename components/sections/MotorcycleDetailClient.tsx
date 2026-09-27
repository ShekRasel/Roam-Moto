import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motorcycles, RideMotorcycle } from "@/lib/motorcycles-data";
import { formatCurrency } from "@/lib/utils";
import { MotorcycleCard } from "@/components/ui/MotorcycleCard";
export default function MotorcycleDetailClient({
  motorcycle: m,
}: {
  motorcycle: RideMotorcycle;
}) {
  return (
    <div className="shell">
      <div className="breadcrumb">
        <Link href="/motorcycles">
          <ArrowLeft size={14} className="inline mr-2" />
          Our motorcycles
        </Link>
        <span>/</span>
        <span>{m.model}</span>
      </div>
      <section className="detail-layout">
        <div className="detail-photo">
          <Image
            src={m.image}
            alt={`${m.color} ${m.model}`}
            fill
            priority
            sizes="(max-width: 600px) 100vw, 55vw"
            style={{ objectPosition: m.imagePosition }}
          />
        </div>
        <div className="detail-copy">
          <p className="eyebrow">
            {m.type.toUpperCase()} · {m.label.toUpperCase()}
          </p>
          <h1>{m.model}</h1>
          <p className="lead">{m.tagline}</p>
          <p>{m.description}</p>
          <dl className="spec-list">
            <div>
              <dt>Best for</dt>
              <dd>{m.bestFor}</dd>
            </div>
            <div>
              <dt>Riding style</dt>
              <dd>{m.ridingStyle}</dd>
            </div>
            <div>
              <dt>Shown in</dt>
              <dd>{m.color}</dd>
            </div>
            <div>
              <dt>Plan your escape</dt>
              <dd>1, 2, or 3 days</dd>
            </div>
          </dl>
          <div className="price-box">
            <div className="price-line">
              <div>
                <strong>{formatCurrency(m.price)}</strong>
                <span> / day</span>
              </div>
              <span>Sample rental rate</span>
            </div>
            <Link
              href={`/customize-booking?bike=${m.slug}`}
              className="button button-orange"
            >
              Plan a ride on this bike <ArrowUpRight size={18} />
            </Link>
            <p>Choose your dates and see an estimate. No payment required.</p>
          </div>
          <p className="detail-note">
            This is a concept listing, not live inventory. Photos illustrate the
            model family; exact specifications, model year, and availability are
            not confirmed.
          </p>
        </div>
      </section>
      <section className="section related-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">KEEP EXPLORING</p>
            <h2>Another way to get away.</h2>
          </div>
        </div>
        <div className="bike-grid">
          {motorcycles
            .filter((b) => b.id !== m.id)
            .map((b) => (
              <MotorcycleCard key={b.id} motorcycle={b} />
            ))}
        </div>
      </section>
    </div>
  );
}
