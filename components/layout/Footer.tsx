import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navigation } from "@/lib/constants";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top">
          <div>
            <p className="eyebrow">LESS ROUTINE. MORE ROAD.</p>
            <h2>
              Your next story
              <br />
              starts with a ride.
            </h2>
            <Link href="/motorcycles" className="text-link">
              Find your motorcycle <ArrowUpRight size={19} />
            </Link>
          </div>
          <div className="footer-links">
            <p>Explore</p>
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/customize-booking">Book a ride</Link>
          </div>
          <div className="footer-note">
            <span className="brand footer-brand">
              VELOCITY STUDIO
              <span className="orange-dot" />
            </span>
            <p>Motorcycles worth taking the long way for.</p>
            <p className="demo-note">
              A concept rental experience. Bikes and rates are illustrative;
              online reservations and payments are not active.
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Velocity Studio</span>
          <span>Made for the journey.</span>
          <a href="#main-content">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
