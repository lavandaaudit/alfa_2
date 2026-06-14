"use client";

import React from "react";
import { Kit } from "@/types";
import { motion } from "framer-motion";
import { Badge, cn } from "@/components/shared";
import { Layers, ArrowRight } from "lucide-react";

interface KitCardProps {
  kit: Kit;
  isActive: boolean;
  onSelect: (kit: Kit) => void;
}

export const KitCard = ({ kit, isActive, onSelect }: KitCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={() => onSelect(kit)}
      className={cn(
        "group cursor-pointer bg-white border transition-all duration-300 overflow-hidden",
        isActive ? "border-black ring-1 ring-black" : "border-gray-100 hover:border-gray-300 shadow-sm"
      )}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={kit.coverImage}
          alt={kit.name}
          className={cn(
            "w-full h-full object-cover transition-all duration-700",
            isActive ? "scale-105" : "grayscale group-hover:grayscale-0 group-hover:scale-110"
          )}
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
        
        <div className="absolute top-2 left-2 flex gap-1">
          <Badge variant="gold" className="text-[8px]">{kit.items.length} ITEMS</Badge>
          <Badge variant="default" className="text-[8px] bg-white/80">{kit.preset}</Badge>
        </div>

        {isActive && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
             <div className="bg-alfa-gold text-black p-2 rounded-full">
                <ArrowRight size={16} strokeWidth={3} />
             </div>
          </div>
        )}
      </div>

      <div className="p-3 space-y-1">
        <div className="flex items-center gap-2 text-gray-400">
           <Layers size={10} />
           <span className="text-[9px] font-black uppercase tracking-widest">{kit.tagline}</span>
        </div>
        <h3 className="text-xs font-black uppercase tracking-tight line-clamp-1">
          {kit.name}
        </h3>
        <p className="text-[9px] text-gray-400 line-clamp-2 leading-relaxed uppercase tracking-tighter">
          {kit.description}
        </p>
      </div>
    </motion.div>
  );
};
