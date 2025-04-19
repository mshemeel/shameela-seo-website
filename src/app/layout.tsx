import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://shameelapromotions.com"),
  title: "Shameela Sheriff | SEO Expert & Digital Marketing Strategist",
  description: "Shameela Sheriff, the leading Digital Marketing Strategist in Palakkad, specializing in SEO, content writing, and social media marketing.",
  keywords: ["SEO Expert", "Digital Marketing", "Palakkad", "Shameela Sheriff", "Website Optimization", "Content Writing", "Social Media Marketing"],
  authors: [{ name: "Shameela Sheriff" }],
  creator: "Shameela Sheriff",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://shameelapromotions.com",
    title: "Shameela Sheriff | SEO Expert & Digital Marketing Strategist",
    description: "Leading Digital Marketing Strategist in Palakkad, helping businesses boost their online presence.",
    siteName: "Shameela Sheriff - SEO Expert"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
