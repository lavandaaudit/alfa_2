"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="bg-white py-32 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-black text-white p-16 md:p-24 relative overflow-hidden">
          {/* Accent decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-alfa-gold/20 blur-[100px] -mr-32 -mt-32" />
          
          <div className="relative z-10 space-y-10 max-w-3xl">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
              Have a Project <br /> 
              <span className="text-alfa-gold underline decoration-1 underline-offset-8 transition-all hover:decoration-white">in Mind?</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl">
              Let&apos;s discuss how we can bring your branding and production ideas to life with European quality standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/contact" className="btn-primary text-center">
                Contact Us
              </Link>
              <Link href="/merch-builder" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-black text-center">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
