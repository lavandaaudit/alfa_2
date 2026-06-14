"use client";

import React from "react";
import { ProductCategory, BrandColor } from "@/types";
import { cn } from "@/components/shared";
import { motion } from "framer-motion";

interface FilterBarProps {
  activeCategory: ProductCategory | "all";
  setCategory: (cat: ProductCategory | "all") => void;
  activeColor: BrandColor;
  setColor: (color: BrandColor) => void;
  mode: "catalog" | "kit";
  setMode: (mode: "catalog" | "kit") => void;
}

const CATEGORIES: (ProductCategory | "all")[] = [
  "all",
  "Apparel",
  "Bags",
  "Notebooks & Stationery",
  "Drinkware",
  "Event",
  "Printing",
  "Packaging"
];

const COLORS: { id: BrandColor; label: string; class: string }[] = [
  { id: "all",              label: "All Colors",    class: "bg-gray-200" },
  { id: "corporate-blue",   label: "Corporate Blue",class: "bg-blue-600" },
  { id: "luxury-black",     label: "Luxury Black",  class: "bg-black" },
  { id: "green-eco",        label: "Green Eco",     class: "bg-green-600" },
  { id: "neutral-beige",    label: "Neutral Beige", class: "bg-[#D2B48C]" },
  { id: "vibrant-campaign", label: "Vibrant",       class: "bg-gradient-to-tr from-orange-500 to-pink-500" },
];

export const FilterBar = ({
  activeCategory,
  setCategory,
  activeColor,
  setColor,
  mode,
  setMode
}: FilterBarProps) => {
  return (
    <div className="space-y-8 py-2">
      
      {/* ── Mode Switcher ─────────────────────── */}
      <div className="grid grid-cols-2 p-1 bg-gray-100 rounded-none h-11">
        <button
          onClick={() => setMode("catalog")}
          className={cn(
            "text-[10px] font-bold uppercase tracking-widest transition-all",
            mode === "catalog" ? "bg-white text-black shadow-sm" : "text-gray-500 hover:text-black"
          )}
        >
          Browse Mode
        </button>
        <button
          onClick={() => setMode("kit")}
          className={cn(
            "text-[10px] font-bold uppercase tracking-widest transition-all",
            mode === "kit" ? "bg-black text-alfa-gold shadow-sm" : "text-gray-500 hover:text-black"
          )}
        >
          KIT Mode
        </button>
      </div>

      {/* ── Brand Color Filter (Art Director's Idea) ── */}
      <div className="space-y-4">
        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Brand Color Filter</h4>
        <div className="grid grid-cols-2 gap-2">
          {COLORS.map((color) => (
            <button
              key={color.id}
              onClick={() => setColor(color.id)}
              className={cn(
                "flex items-center gap-2 p-2 border transition-all text-left",
                activeColor === color.id ? "border-black bg-black text-white" : "border-gray-100 hover:border-gray-200 bg-white"
              )}
            >
              <div className={cn("w-3 h-3 shrink-0 rounded-full", color.class)} />
              <span className="text-[9px] font-bold uppercase tracking-wider truncate">{color.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Categories ────────────────────────── */}
      <div className="space-y-4">
        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Category</h4>
        <div className="flex flex-wrap gap-1.5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={cn(
                "px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest border transition-all",
                activeCategory === cat ? "bg-black text-white border-black" : "bg-white text-gray-500 border-gray-100 hover:border-gray-300"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};
