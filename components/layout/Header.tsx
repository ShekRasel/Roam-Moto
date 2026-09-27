"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation } from "@/lib/constants";
export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [path]);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand" aria-label="Velocity Studio home">
          <span className="brand-mark" aria-hidden="true">
            V<span> /</span>
          </span>
          <span>
            VELOCITY
            <span className="brand-sub">STUDIO · MOTORCYCLE EXPERIENCES</span>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={path === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          className="button button-dark header-book"
          href="/customize-booking"
        >
          Book a ride <ArrowUpRight size={16} />
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav shell"
          aria-label="Mobile navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={path === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/customize-booking" onClick={() => setOpen(false)}>
            Book a ride <ArrowUpRight size={18} />
          </Link>
        </nav>
      )}
    </header>
  );
}
