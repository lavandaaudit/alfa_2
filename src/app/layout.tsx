import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Alfa Media Group | Premium Printing & Merchandise Production",
  description: "European leader in offset, digital, and UV printing. Specializing in corporate branding, packaging, and high-end promotional merchandise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-alfa-gold selection:text-black">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
