import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
export const metadata: Metadata = {
  title: {
    default: "Velocity Studio — A better way to get away",
    template: "%s | Velocity Studio",
  },
  description:
    "Find your next motorcycle ride. Explore the collection and plan a day trip or weekend escape with Velocity Studio.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
