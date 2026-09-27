import Link from "next/link";
export default function NotFound() {
  return (
    <div className="shell empty-state">
      <p className="eyebrow">404 · A SMALL DETOUR</p>
      <h1>This road ends here.</h1>
      <p>We couldn’t find that page. Let’s get you back to the motorcycles.</p>
      <Link href="/motorcycles" className="button button-orange">
        Explore motorcycles ↗
      </Link>
    </div>
  );
}
