import React from "react";
import FeaturedProjects from "@/components/blocks/FeaturedProjects";

const PortfolioPage = () => {
  return (
    <div className="pt-32">
      <div className="section-container">
        <span className="text-gray-400 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Case Studies</span>
        <h1 className="text-6xl font-bold tracking-tight mb-12">Visual Excellence <br /> in Motion</h1>
        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
          Explore a selection of our most successful production partnerships and see the quality of Alfa Media Group first-hand.
        </p>
      </div>
      <FeaturedProjects />
    </div>
  );
};

export default PortfolioPage;
