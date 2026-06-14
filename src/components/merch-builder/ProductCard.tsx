"use client";

import React from "react";
import { Product, BrandColor, ProductCategory } from "@/types";
import { motion } from "framer-motion";
import { Plus, Check, Info } from "lucide-react";
import { Badge, cn } from "@/components/shared";

interface ProductCardProps {
  product: Product;
  isSelected: boolean;
  onToggle: (id: string) => void;
  onPreview: (product: Product) => void;
}

export const ProductCard = ({ product, isSelected, onToggle, onPreview }: ProductCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "group relative bg-white border transition-all duration-300 overflow-hidden",
        isSelected ? "border-black ring-1 ring-black" : "border-gray-100 hover:border-gray-300"
      )}
    >
      {/* ── Image Area ───────────────────────── */}
      <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
        <img
          src={product.media.main}
          alt={product.name}
          className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />

        {/* Action Buttons */}
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <button
            onClick={(e) => { e.stopPropagation(); onToggle(product.id); }}
            className={cn(
              "w-8 h-8 flex items-center justify-center transition-all duration-300",
              isSelected ? "bg-black text-alfa-gold" : "bg-white text-black hover:bg-black hover:text-white"
            )}
          >
            {isSelected ? <Check size={16} strokeWidth={3} /> : <Plus size={16} />}
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onPreview(product); }}
            className="w-8 h-8 bg-white/80 backdrop-blur-sm text-black flex items-center justify-center hover:bg-black hover:text-white transition-all opacity-0 group-hover:opacity-100"
          >
            <Info size={14} />
          </button>
        </div>

        {/* Popular Badge */}
        {product.popular && (
          <div className="absolute bottom-2 left-2">
            <Badge variant="gold">Popular</Badge>
          </div>
        )}
      </div>

      {/* ── Content ──────────────────────────── */}
      <div className="p-3 space-y-1">
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-[11px] font-bold uppercase tracking-tight leading-tight line-clamp-1">
            {product.name}
          </h3>
          <span className="text-[10px] font-black text-gray-400">
            €{product.basePrice.toFixed(2)}
          </span>
        </div>
        <div className="flex items-center gap-1.5 overflow-hidden">
          <span className="text-[9px] text-gray-400 uppercase tracking-widest truncate">
            {product.subcategory || product.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
};
