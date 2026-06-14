"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, Globe, Zap, Shield, Users } from "lucide-react";

const GALLERY_ITEMS = [
  {
    tag: "Capabilities",
    title: "Global Production Scale",
    description: "From offset printing to custom apparel. We operate at a scale that supports the world's largest corporate events.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600",
    icon: <Globe className="w-6 h-6" />
  },
  {
    tag: "Quality",
    title: "Precision Branding",
    description: "Every item in your kit is branded with extreme attention to detail, using the latest UV, DTG, and Embroidery technologies.",
    image: "https://images.unsplash.com/photo-1504198453319-5ce911baf2ea?auto=format&fit=crop&q=80&w=1600",
    icon: <Zap className="w-6 h-6" />
  },
  {
    tag: "Trust",
    title: "500+ EU Corporate Clients",
    description: "We are the trusted production partner for marketing agencies and enterprises across Europe.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1600",
    icon: <Users className="w-6 h-6" />
  },
  {
    tag: "Innovation",
    title: "Sustainable Materials",
    description: "We prioritize eco-friendly packaging and organic textiles to align with your brand's sustainability goals.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1600",
    icon: <Shield className="w-6 h-6" />
  }
];

const InfoGallery = () => {
  return (
    <section id="production" className="bg-white">
      {/* Introduction to Gallery */}
      <div id="services" className="max-w-7xl mx-auto px-6 py-24 border-b border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="space-y-6">
            <span className="text-alfa-gold font-bold uppercase tracking-[0.3em] text-[10px]">Information Hub</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85]">
              Production<br />
              Excellence<br />
              <span className="text-gray-200">In Motion</span>
            </h2>
          </div>
          <div className="pb-4">
            <p className="text-gray-500 text-lg leading-relaxed max-w-md">
              Everything we do is built on the foundation of technical precision and aesthetic authority. 
              Explore our core pillars.
            </p>
          </div>
        </div>
      </div>

      {/* The Gallery - Large Full Width Slides */}
      <div className="space-y-2">
        {GALLERY_ITEMS.map((item, index) => (
          <div key={index} className="relative h-[80vh] w-full overflow-hidden group">
            {/* Background Image with Zoom Effect */}
            <div className="absolute inset-0">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl space-y-6"
              >
                <div className="flex items-center gap-4 text-alfa-gold">
                  <div className="p-3 bg-alfa-gold text-black">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em]">{item.tag}</span>
                </div>
                
                <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                  {item.title}
                </h3>
                
                <p className="text-gray-300 text-lg leading-relaxed max-w-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {item.description}
                </p>

                <div className="pt-4 overflow-hidden">
                  <div className="h-[2px] w-0 group-hover:w-full bg-alfa-gold transition-all duration-1000" />
                </div>
              </motion.div>
            </div>

            {/* Index Counter */}
            <div className="absolute top-12 right-12 text-white/20 text-8xl font-black italic">
              0{index + 1}
            </div>
          </div>
        ))}
      </div>

      {/* Final CTA in Gallery style */}
      <div className="bg-black py-40 flex items-center justify-center text-center px-6">
        <div className="max-w-3xl space-y-10">
          <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
            Ready to Start<br />
            <span className="text-alfa-gold">Your Project?</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="#kit-builder" className="px-12 py-6 bg-alfa-gold text-black font-black uppercase tracking-widest text-xs hover:bg-white transition-all">
              Configure Your Kit
            </Link>
            <a href="mailto:2294598@gmail.com" className="px-12 py-6 border border-white/20 text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all">
              Direct Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoGallery;
