import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Compass, CalendarDays, Bike } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { MotorcycleGrid } from "@/components/sections/MotorcycleGrid";
export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="intro-strip">
        <div className="shell">
          <span>
            <Bike size={19} /> A bike for your kind of ride
          </span>
          <span>
            <CalendarDays size={19} /> One day to a long weekend
          </span>
          <span>
            <Compass size={19} /> A little further from ordinary
          </span>
        </div>
      </div>
      <MotorcycleGrid />
      <section className="how-section section" id="how-it-works">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">FROM DAYDREAM TO DAY TRIP</p>
              <h2>
                Less planning.
                <br />
                More riding.
              </h2>
            </div>
            <p>
              Motorcycle rental, made easy to understand.
              <br />
              Here’s how to put your ride together.
            </p>
          </div>
          <div className="steps-grid">
            {[
              {
                n: "01",
                icon: Bike,
                title: "Find your motorcycle",
                text: "Explore the bikes and choose the style that suits your trip and riding experience.",
              },
              {
                n: "02",
                icon: CalendarDays,
                title: "Make a plan",
                text: "Pick a one-, two-, or three-day package, your start date, and a pickup city.",
              },
              {
                n: "03",
                icon: Compass,
                title: "Review your ride",
                text: "See the estimated price and check your details. Try the full flow with a demo ride plan.",
              },
            ].map((s) => (
              <div className="how-card" key={s.n}>
                <div className="how-card-top">
                  <span>{s.n}</span>
                  <s.icon size={25} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <Link className="text-link" href="/customize-booking">
            Build your ride plan <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
      <section className="story-section shell section">
        <div className="story-image">
          <Image
            src="/images/motorcycles/velocity-C1-2.avif"
            alt="A classic BMW roadster on a quiet tree-lined road"
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
          />
        </div>
        <div className="story-copy">
          <p className="eyebrow">WHY WE RIDE</p>
          <h2>
            Some detours
            <br />
            are the <em>whole point.</em>
          </h2>
          <p>
            A coffee stop you didn’t plan. A road you’ve never taken. That
            moment when the city finally falls behind you.
          </p>
          <p>
            Velocity Studio is built around a simple idea: a great motorcycle
            can turn an ordinary day into a story worth telling.
          </p>
          <Link href="/about" className="text-link">
            A little about us <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <section className="shell faq-section section">
        <div>
          <p className="eyebrow">BEFORE YOU GO</p>
          <h2>
            A few good
            <br />
            questions.
          </h2>
          <Link href="/contact" className="text-link">
            Still curious? Get in touch <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="faq-list">
          {[
            [
              "Am I buying a motorcycle?",
              "No. This experience is designed around short motorcycle rentals, from a single day to a three-day weekend.",
            ],
            [
              "What does the estimated price include?",
              "The demo estimate is the listed daily rental rate multiplied by the number of days. Fuel, deposits, insurance, and any other charges are not included or confirmed.",
            ],
            [
              "Can I make a real booking here?",
              "Not yet. This is a concept website. You can explore the motorcycles and create a demo ride plan, but no bike is reserved and no payment is taken.",
            ],
            [
              "Do I need a motorcycle licence?",
              "For a real rental, you would need a valid motorcycle licence and would need to meet the provider’s age, experience, and insurance requirements.",
            ],
          ].map(([q, a]) => (
            <details key={q}>
              <summary>
                {q}
                <span>+</span>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
