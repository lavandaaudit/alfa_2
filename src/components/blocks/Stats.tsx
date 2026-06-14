"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Years of Experience", value: "15+" },
  { label: "Completed Projects", value: "500+" },
  { label: "Countries Delivered", value: "30+" },
  { label: "Quality Guarantee", value: "100%" }
];

const Stats = () => {
  return (
    <section className="bg-alfa-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center space-y-2"
            >
              <span className="text-5xl md:text-6xl font-bold tracking-tighter">{stat.value}</span>
              <div className="w-8 h-[2px] bg-alfa-gold mb-2" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
