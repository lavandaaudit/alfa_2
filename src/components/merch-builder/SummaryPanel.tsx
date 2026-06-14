"use client";

import React from "react";
import { Product, SelectedItem, LineItem, PricingSummary } from "@/types";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Trash2, Minus, Plus, FileText, Send, Clock, Truck } from "lucide-react";
import { Button, Badge, cn } from "@/components/shared";

interface SummaryPanelProps {
  summary: PricingSummary;
  selectedItems: SelectedItem[];
  onUpdateQty: (productId: string, qty: number) => void;
  onRemove: (productId: string) => void;
}

export const SummaryPanel = ({
  summary,
  selectedItems,
  onUpdateQty,
  onRemove
}: SummaryPanelProps) => {
  return (
    <div className="h-full flex flex-col bg-white border-l border-gray-100">
      
      {/* ── Header ──────────────────────────── */}
      <div className="p-6 border-b border-gray-100 bg-gray-50/50">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <ShoppingBag size={14} className="text-gray-400" />
            <h2 className="text-xs font-black uppercase tracking-[0.2em]">Live Kit Summary</h2>
          </div>
          <Badge variant="gold">{selectedItems.length} Items</Badge>
        </div>
        <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Real-time B2B Quote</p>
      </div>

      {/* ── Items List ──────────────────────── */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <AnimatePresence mode="popLayout">
          {summary.lineItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-40 flex flex-col items-center justify-center text-center space-y-2 opacity-30"
            >
              <ShoppingBag size={32} strokeWidth={1} />
              <p className="text-[10px] uppercase font-bold tracking-widest">Configuration is empty</p>
            </motion.div>
          ) : (
            summary.lineItems.map((item) => (
              <motion.div
                key={item.product.id}
                layout
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="group space-y-3"
              >
                <div className="flex justify-between items-start">
                  <div className="space-y-0.5">
                    <h4 className="text-[11px] font-bold uppercase tracking-tight">{item.product.name}</h4>
                    <p className="text-[9px] text-gray-400 uppercase tracking-widest">
                      Applied Tier: {item.appliedTier.qty}+ units
                    </p>
                  </div>
                  <button
                    onClick={() => onRemove(item.product.id)}
                    className="p-1.5 text-gray-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <Trash2 size={12} />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  {/* Quantity Slider/Input */}
                  <div className="flex items-center bg-gray-50 border border-gray-100">
                    <button
                      onClick={() => onUpdateQty(item.product.id, Math.max(1, item.quantity - 10))}
                      className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                      <Minus size={10} />
                    </button>
                    <div className="w-10 text-center font-black text-xs">
                      {item.quantity}
                    </div>
                    <button
                      onClick={() => onUpdateQty(item.product.id, item.quantity + 10)}
                      className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                      <Plus size={10} />
                    </button>
                  </div>

                  <div className="text-right">
                    <p className="text-[10px] font-bold">€{item.lineTotal.toLocaleString()}</p>
                    <p className="text-[8px] text-gray-400 text-right uppercase">€{item.pricePerUnit.toFixed(2)}/unit</p>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      {/* ── Footer / Total ──────────────────── */}
      <div className="p-6 bg-black text-white space-y-6">
        
        {/* Production Stats */}
        <div className="grid grid-cols-2 gap-4 pb-6 border-b border-white/10">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-alfa-gold">
              <Clock size={10} />
              <span className="text-[9px] font-bold uppercase tracking-widest">Lead Time</span>
            </div>
            <p className="text-xs font-black">{summary.productionDays} Business Days</p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-alfa-gold">
              <Truck size={10} />
              <span className="text-[9px] font-bold uppercase tracking-widest">Est. Delivery</span>
            </div>
            <p className="text-xs font-black truncate">{summary.estimatedDelivery}</p>
          </div>
        </div>

        {/* Total Price */}
        <div className="flex justify-between items-end">
          <div className="space-y-0.5">
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Total Estimate (EUR)</span>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-black tracking-tighter">€{summary.subtotal.toLocaleString()}</span>
              <span className="text-xs text-alfa-gold font-bold">Excl. VAT</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-1 gap-2 pt-2">
          <Button variant="gold" className="w-full text-[10px]">
            <Send size={14} className="mr-2" /> Request Official Quote
          </Button>
          <Button variant="outline" className="w-full text-[10px] border-white/20 text-white hover:bg-white hover:text-black">
            <FileText size={14} className="mr-2" /> Download PDF Preview
          </Button>
        </div>

        <p className="text-[8px] text-gray-500 text-center leading-relaxed italic">
          *Valid for 30 days. Final pricing subject to artwork technical review and delivery zone verification.
        </p>
      </div>

    </div>
  );
};
