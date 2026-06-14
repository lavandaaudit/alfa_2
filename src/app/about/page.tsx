import React from "react";

const AboutPage = () => {
  return (
    <div className="pt-32">
      <div className="section-container">
        <span className="text-gray-400 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Story</span>
        <h1 className="text-6xl font-bold tracking-tight mb-12">Quality Without <br /> Compromise</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 py-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">15 Years of Precision</h2>
            <p className="text-gray-600 leading-relaxed">
              Founded in Kyiv and expanding across Europe, Alfa Media Group has always stood for technical excellence. Our journey started with a single offset press and a vision to redefine corporate printing standards.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, with production facilities in Ukraine and Poland, we serve over 500 regular corporate clients, delivering everything from simple business cards to complex luxury packaging and event branding kits.
            </p>
          </div>
          <div className="aspect-video bg-gray-100 flex items-center justify-center p-12">
             <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">Production Facility Gallery</span>
          </div>
        </div>

        <div className="py-20 border-t border-gray-100">
          <h2 className="text-3xl font-bold mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Craftsmanship", desc: "Every print run is an opportunity to achieve perfection." },
              { title: "Innovation", desc: "We invest in the latest UV and digital technologies." },
              { title: "Reliability", desc: "Strict deadlines are the foundation of our reputation." }
            ].map(value => (
              <div key={value.title} className="space-y-4">
                <div className="w-12 h-[2px] bg-alfa-gold" />
                <h3 className="text-xl font-bold uppercase tracking-tight">{value.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
