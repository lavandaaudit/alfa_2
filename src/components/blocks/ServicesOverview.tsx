"use client";

import React from "react";
import { motion } from "framer-motion";
import { Copy, Printer, Package, Maximize, Zap, Palette } from "lucide-react";

const services = [
  {
    title: "Offset Printing",
    description: "High-volume precision for magazines, brochures, and catalogs.",
    icon: <Printer className="w-8 h-8" />,
    color: "bg-blue-50"
  },
  {
    title: "Digital Printing",
    description: "Fast turnaround for small batches and personalized content.",
    icon: <Zap className="w-8 h-8" />,
    color: "bg-yellow-50"
  },
  {
    title: "Packaging",
    description: "Custom box production, die-cutting, and luxury finishes.",
    icon: <Package className="w-8 h-8" />,
    color: "bg-gray-50"
  },
  {
    title: "Large Format",
    description: "Banners, vinyls, and exhibition branding at scale.",
    icon: <Maximize className="w-8 h-8" />,
    color: "bg-red-50"
  },
  {
    title: "Binding",
    description: "Perfect binding, saddle stitch, and specialist finishing.",
    icon: <Copy className="w-8 h-8" />,
    color: "bg-green-50"
  },
  {
    title: "Sublimation",
    description: "Specialist printing for textiles and corporate apparel.",
    icon: <Palette className="w-8 h-8" />,
    color: "bg-purple-50"
  }
];

const ServicesOverview = () => {
  return (
    <section className="section-container bg-white">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
        <div className="max-w-2xl">
          <span className="text-gray-400 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Capabilities</span>
          <h2 className="h2 mb-0">Unmatched Production Quality for Every Scale</h2>
        </div>
        <div className="pb-2">
          <a href="/services" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-alfa-gold transition-colors">
            View All Services
            <div className="w-8 h-[2px] bg-black group-hover:bg-alfa-gold transition-colors" />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group p-10 border border-gray-100 hover:border-black transition-all duration-500 relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="mb-8 text-black group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="w-0 group-hover:w-full h-[1px] bg-alfa-gold transition-all duration-500" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesOverview;
