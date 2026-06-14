import React from "react";
import ServicesOverview from "@/components/blocks/ServicesOverview";

const ServicesPage = () => {
  return (
    <div className="pt-32">
      <div className="section-container">
        <span className="text-gray-400 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Expertise</span>
        <h1 className="text-6xl font-bold tracking-tight mb-12">Industrial Printing <br /> Solutions</h1>
        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
          We combine traditional craft with cutting-edge technology to deliver printing and production services that define quality in the European market.
        </p>
      </div>
      <ServicesOverview />
      <div className="section-container bg-alfa-gray-100 mt-20">
        <h2 className="text-3xl font-bold mb-12">Technical Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: "Max Print Format", value: "1500 x 3000 mm" },
            { label: "Paper Weight Range", value: "60 - 450 gsm" },
            { label: "Specialty Finishes", value: "UV, Emboss, Foil" },
            { label: "Production Capacity", value: "100k+ units/day" }
          ].map(spec => (
            <div key={spec.label} className="p-8 bg-white border border-gray-200">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">{spec.label}</p>
              <p className="text-xl font-bold tracking-tight">{spec.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
