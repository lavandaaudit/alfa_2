import React from "react";
import Hero from "@/components/blocks/Hero";
import KitBuilderPreview from "@/components/blocks/KitBuilderPreview";
import InfoGallery from "@/components/blocks/InfoGallery";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <KitBuilderPreview />
        <InfoGallery />
      </main>
      <Footer />
    </div>
  );
}
