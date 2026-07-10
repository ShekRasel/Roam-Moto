import type { Metadata } from "next";
import "./globals.css";
import { Orbitron, Inter, Syncopate } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-orbitron",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const syncopate = Syncopate({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-syncopate",
});

export const metadata: Metadata = {
  title: "Velocity Studio",
  description: "An immersive luxury motorcycle experience platform.",
  metadataBase: new URL("https://velocitystudio.example"),
  openGraph: {
    title: "Velocity Studio",
    description: "An immersive luxury motorcycle experience platform.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${inter.variable} ${syncopate.variable}`}
    >
      <body>
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(232,104,44,0.08),_transparent_24%),radial-gradient(circle_at_80%_10%,_rgba(192,160,96,0.08),_transparent_18%),_#0A0A0A] text-white">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
