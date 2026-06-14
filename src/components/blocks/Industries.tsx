"use client";

import React from "react";
import { motion } from "framer-motion";

const industryList = [
  { name: "Event Agencies", sector: "Creative" },
  { name: "Marketing Hubs", sector: "Strategic" },
  { name: "Global Corporations", sector: "Enterprise" },
  { name: "Non-Profit Orgs", sector: "Social" },
  { name: "Tech Universities", sector: "Academic" },
  { name: "SaaS Startups", sector: "Digital" }
];

const Industries = () => {
  return (
    <section className="section-container bg-white">
      <div className="flex flex-col items-center text-center mb-20">
        <span className="text-gray-400 font-bold uppercase tracking-[0.3em] text-xs mb-4">Who We Serve</span>
        <h2 className="h2 max-w-2xl">Tailored Production Solutions Across Key Sectors</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-gray-100">
        {industryList.map((industry, index) => (
          <motion.div
            key={industry.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group aspect-video flex flex-col justify-between p-12 border-r border-b border-gray-100 hover:bg-black hover:text-white transition-all duration-500 cursor-default"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-alfa-gold">{industry.sector}</span>
            <h3 className="text-3xl font-bold tracking-tight">{industry.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Industries;
