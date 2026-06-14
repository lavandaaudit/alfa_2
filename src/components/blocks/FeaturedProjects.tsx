"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  { 
    title: "FinTech Global Summit", 
    category: "Full Branding & Signage",
    image: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    title: "Premium Tech Kit", 
    category: "Custom Merchandise",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    title: "Luxury Watch Catalog", 
    category: "Offset Printing",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800" 
  }
];

const FeaturedProjects = () => {
  return (
    <section className="section-container bg-white">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
        <div className="max-w-2xl">
          <span className="text-gray-400 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Work</span>
          <h2 className="h2 mb-0">Crafting Visual Impact for Global Brands</h2>
        </div>
        <div className="pb-2">
          <a href="/portfolio" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-alfa-gold transition-colors">
            Explore Portfolio
            <div className="w-8 h-[2px] bg-black group-hover:bg-alfa-gold transition-colors" />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[4/5] bg-gray-100 overflow-hidden mb-6 relative">
               {/* Image placeholder with overlay effect */}
               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 z-10" />
               <img 
                 src={project.image} 
                 alt={project.title}
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
               />
               <div className="absolute inset-0 flex items-center justify-center translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  <span className="btn-primary !p-4 !text-[10px]">View Case Study</span>
               </div>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-alfa-gold mb-2">{project.category}</p>
            <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
