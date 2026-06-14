import React from "react";
import Industries from "@/components/blocks/Industries";

const IndustriesPage = () => {
  return (
    <div className="pt-32">
      <div className="section-container">
        <span className="text-gray-400 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Sectors</span>
        <h1 className="text-6xl font-bold tracking-tight mb-12">Who We Work With</h1>
        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
          From high-velocity startups to established global enterprises, we provide production support tailored to specific industry requirements.
        </p>
      </div>
      <Industries />
    </div>
  );
};

export default IndustriesPage;
