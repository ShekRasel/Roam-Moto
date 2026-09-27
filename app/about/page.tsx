import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export const metadata = { title: "Our story" };
export default function AboutPage() {
  return (
    <>
      <section className="shell about-hero">
        <div>
          <p className="eyebrow">THE IDEA BEHIND VELOCITY</p>
          <h1>
            Life’s better
            <br />
            with a little
            <br />
            <em>open road.</em>
          </h1>
          <p>
            We’re here for the early starts, the unplanned stops, and the roads
            that make you forget to check your phone.
          </p>
          <p>
            Velocity Studio is a motorcycle rental concept built around those
            moments. A small collection of characterful bikes, an easy way to
            plan, and a good reason to get outside.
          </p>
          <Link href="/motorcycles" className="text-link">
            Meet your next ride <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="about-image">
          <Image
            src="/images/motorcycles/velocity-V1-2.avif"
            alt="A rider enjoying the open road in the evening light"
            fill
            priority
            sizes="(max-width: 600px) 100vw, 50vw"
          />
        </div>
      </section>
      <section className="manifesto section">
        <div className="shell">
          <p className="eyebrow">OUR WAY OF THINKING</p>
          <h2>
            You don’t always need a destination.
            <br />
            Sometimes, you just need
            <br />
            <em>a good reason to go.</em>
          </h2>
        </div>
      </section>
      <section className="shell section">
        <p className="eyebrow">WHAT MATTERS TO US</p>
        <h2>
          Good bikes. Clear choices.
          <br />
          Room for adventure.
        </h2>
        <div className="values-grid">
          {[
            [
              "01",
              "Character over quantity",
              "A collection you can understand. Each motorcycle has a clear riding style, a matching photo, and a reason to choose it.",
            ],
            [
              "02",
              "Keep it straightforward",
              "Daily rental prices, simple packages, and a visible estimate. Know what you’re planning before taking the next step.",
            ],
            [
              "03",
              "Ride your own ride",
              "A day out can mean something different to everyone. Choose the bike and pace that fit your experience and your idea of a good day.",
            ],
          ].map(([n, t, p]) => (
            <div key={n}>
              <span>{n}</span>
              <h3>{t}</h3>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="shell section related-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">WHERE WE ARE TODAY</p>
            <h2>An idea you can explore.</h2>
          </div>
          <div>
            <p>
              This site is a working design concept.
              <br />
              Browse the bikes and try a demo ride plan.
              <br />
              Real rentals and payments are not available yet.
            </p>
            <Link href="/customize-booking" className="text-link">
              Try planning a ride <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
