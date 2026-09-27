import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
export function Hero() {
  return (
    <section className="hero">
      <Image
        src="/images/motorcycles/velocity-V1-2.avif"
        alt="A motorcyclist taking the scenic road at sunset"
        fill
        priority
        sizes="100vw"
        className="hero-image"
      />
      <div className="hero-shade" />
      <div className="shell hero-content">
        <p className="eyebrow">
          <span className="orange-dot" /> MOTORCYCLES. MOMENTS. MILES.
        </p>
        <h1>
          Good rides.
          <br />
          Great <em>escapes.</em>
        </h1>
        <p className="hero-description">
          Motorcycle rentals for a day or a weekend away.
          <br />
          Find your bike. Pick your dates. Take the scenic route.
        </p>
        <div className="button-row">
          <Link href="/motorcycles" className="button button-orange">
            Find your ride <ArrowUpRight size={19} />
          </Link>
          <Link href="/#how-it-works" className="hero-secondary">
            How it works <ArrowDown size={16} />
          </Link>
        </div>
        <div className="hero-bottom">
          <span>YOUR WEEKEND, REIMAGINED.</span>
          <a href="#collection">
            Discover the collection <ArrowDown size={16} />
          </a>
        </div>
      </div>
      <span className="hero-side-note">THE ROAD IS CALLING — VOL. 01</span>
    </section>
  );
}
