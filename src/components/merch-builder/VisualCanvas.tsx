"use client";

import React from "react";
import { Product, SelectedItem, LineItem } from "@/types";
import { motion, AnimatePresence } from "framer-motion";
import { cn, Badge } from "@/components/shared";
import { Sparkles, ShoppingCart } from "lucide-react";

interface VisualCanvasProps {
  lineItems: LineItem[];
  mode: "catalog" | "kit";
  activeKitName?: string;
}

export const VisualCanvas = ({
  lineItems,
  mode,
  activeKitName
}: VisualCanvasProps) => {
  return (
    <div className="relative h-full bg-gray-50 flex flex-col overflow-hidden">
      
      {/* ── Background Grid Decorative ───────── */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, black 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      {/* ── Top Info Bar ─────────────────────── */}
      <div className="relative z-10 p-8 flex justify-between items-start">
        <div className="space-y-1">
          <Badge variant={mode === "kit" ? "gold" : "default"}>
            {mode === "kit" ? "KIT CONFIGURATOR" : "CUSTOM MERCH BUILDER"}
          </Badge>
          <h1 className="text-3xl font-black tracking-tight uppercase">
            {mode === "kit" && activeKitName ? activeKitName : "Personalized Setup"}
          </h1>
        </div>

        <div className="hidden sm:flex flex-col items-end text-right">
          <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em]">EU Production Standards</p>
          <p className="text-[10px] font-bold">100% Quality Assurance</p>
        </div>
      </div>

      {/* ── Visual Grid ──────────────────────── */}
      <div className="flex-1 relative z-10 p-8 flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          {lineItems.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="text-center space-y-6 max-w-sm"
            >
              <div className="w-16 h-16 bg-white border border-gray-100 flex items-center justify-center mx-auto shadow-sm">
                <ShoppingCart className="text-gray-200" size={32} strokeWidth={1} />
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-black uppercase tracking-widest">Start Customizing</h3>
                <p className="text-xs text-gray-400 leading-relaxed uppercase tracking-tighter italic">
                  Select products from the left gallery to build your brand vision. All items include primary logo branding by default.
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={cn(
                "w-full h-full grid gap-6 content-center",
                lineItems.length === 1 ? "grid-cols-1 max-w-lg" : 
                lineItems.length === 2 ? "grid-cols-2 max-w-2xl" :
                "grid-cols-2 lg:grid-cols-3 max-w-4xl"
              )}
            >
              {lineItems.map((item, i) => (
                <motion.div
                  key={item.product.id}
                  layoutId={item.product.id}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: i * 0.05, type: "spring", damping: 15 }}
                  className="relative group aspect-square bg-white shadow-2xl shadow-black/5 overflow-hidden border border-gray-100"
                >
                  <img
                    src={item.product.media.main}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt=""
                  />
                  
                  {/* Floating Unit Tag */}
                  <div className="absolute top-2 left-2 px-2 py-1 bg-black text-white text-[8px] font-black tracking-widest">
                    {item.quantity} UNITS
                  </div>

                  {/* Glass Card Details */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-white/90 backdrop-blur-md translate-y-1 group-hover:translate-y-0 transition-transform">
                    <p className="text-[9px] font-black uppercase tracking-widest truncate">{item.product.name}</p>
                    <p className="text-[8px] text-alfa-gold font-bold">READY TO BRAND</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Subtle Bottom Tag ────────────────── */}
      <div className="p-8 flex items-center gap-2 opacity-30">
        <Sparkles size={12} />
        <span className="text-[9px] font-bold uppercase tracking-[0.3em]">Canvas View v2.0 - Precision Merch Rendering</span>
      </div>

    </div>
  );
};
