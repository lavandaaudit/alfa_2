"use client";

import React, { useState, useMemo, useEffect } from "react";
import productsData from "@/data/products.json";
import kitsData from "@/data/kits.json";
import { 
  Product, 
  Kit, 
  SelectedItem, 
  BuilderState, 
  ProductCategory, 
  BrandColor, 
  LineItem, 
  PricingSummary,
  PricingTier
} from "@/types";

// UI Components
import { FilterBar } from "@/components/merch-builder/FilterBar";
import { ProductCard } from "@/components/merch-builder/ProductCard";
import { KitCard } from "@/components/merch-builder/KitCard";
import { VisualCanvas } from "@/components/merch-builder/VisualCanvas";
import { SummaryPanel } from "@/components/merch-builder/SummaryPanel";
import { Header } from "@/components/layout/Header"; // Ensure header is available

const products = productsData as Product[];
const kits = kitsData as Kit[];

export default function MerchBuilderPage() {
  // ── State ───────────────────────────────────────────
  const [state, setState] = useState<BuilderState>({
    mode: "catalog",
    selectedItems: [],
    activeCategory: "all",
    activeColor: "all",
    searchQuery: ""
  });

  // ── Handlers ────────────────────────────────────────

  const toggleProduct = (productId: string) => {
    setState(prev => {
      const exists = prev.selectedItems.find(item => item.productId === productId);
      const newItems = exists 
        ? prev.selectedItems.filter(item => item.productId !== productId)
        : [...prev.selectedItems, { productId, quantity: 100 }];
      
      return { 
        ...prev, 
        selectedItems: newItems,
        mode: "catalog", // Switch to catalog if manually adding/removing
        activeKitId: undefined 
      };
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setState(prev => ({
      ...prev,
      selectedItems: prev.selectedItems.map(item => 
        item.productId === productId ? { ...item, quantity } : item
      )
    }));
  };

  const selectKit = (kit: Kit) => {
    setState(prev => ({
      ...prev,
      mode: "kit",
      activeKitId: kit.id,
      selectedItems: kit.items.map(ki => ({ 
        productId: ki.productId, 
        quantity: ki.defaultQty 
      }))
    }));
  };

  // ── Pricing Engine Logic ────────────────────────────

  const calculateLineItem = (productId: string, quantity: number): LineItem | null => {
    const product = products.find(p => p.id === productId);
    if (!product) return null;

    // Find the applicable tier
    // Tiers are sorted by qty ascending. We find the last one where qty <= requested qty
    const applicableTier = [...product.tiers]
      .sort((a, b) => b.qty - a.qty)
      .find(t => quantity >= t.qty) || product.tiers[0];

    return {
      product,
      quantity,
      pricePerUnit: applicableTier.pricePerUnit,
      lineTotal: applicableTier.pricePerUnit * quantity,
      appliedTier: applicableTier
    };
  };

  const summary: PricingSummary = useMemo(() => {
    const lineItems = state.selectedItems
      .map(item => calculateLineItem(item.productId, item.quantity))
      .filter((item): item is LineItem => item !== null);

    const subtotal = lineItems.reduce((acc, item) => acc + item.lineTotal, 0);
    const maxProductionDays = lineItems.length > 0 
      ? Math.max(...lineItems.map(i => i.product.productionDays)) 
      : 0;

    // Calc est delivery (simple logic: today + prod days + 3 days shipping)
    const today = new Date();
    const deliveryDate = new Date(today);
    deliveryDate.setDate(today.getDate() + maxProductionDays + 3);
    const estDelivery = deliveryDate.toLocaleDateString("en-GB", { 
      day: "numeric", 
      month: "short", 
      year: "numeric" 
    });

    return {
      lineItems,
      subtotal,
      currency: "EUR",
      productionDays: maxProductionDays,
      estimatedDelivery: estDelivery
    };
  }, [state.selectedItems]);

  // ── Filters & Search ────────────────────────────────

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const categoryMatch = state.activeCategory === "all" || p.category === state.activeCategory;
      const colorMatch = state.activeColor === "all" || p.colorTags.includes(state.activeColor) || p.colorTags.includes("all");
      const searchMatch = p.name.toLowerCase().includes(state.searchQuery.toLowerCase());
      return categoryMatch && colorMatch && searchMatch;
    });
  }, [state.activeCategory, state.activeColor, state.searchQuery]);

  const activeKit = useMemo(() => kits.find(k => k.id === state.activeKitId), [state.activeKitId]);

  // ── Render ──────────────────────────────────────────

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header occupies fixed space if needed, 
          but usually Merch Builder is a specialized tool. 
          Assuming it starts below global header (pt-16) or replaces it. 
      */}
      
      <div className="flex flex-1 overflow-hidden pt-16">
        
        {/* ── LEFT PANEL: Catalog / KIT Selection ────────── */}
        <aside className="w-80 border-r border-gray-100 flex flex-col bg-white overflow-hidden">
          
          <div className="p-6 overflow-y-auto space-y-2">
            <FilterBar 
              mode={state.mode}
              setMode={(mode) => setState(prev => ({ ...prev, mode }))}
              activeCategory={state.activeCategory}
              setCategory={(cat) => setState(prev => ({ ...prev, activeCategory: cat }))}
              activeColor={state.activeColor}
              setColor={(color) => setState(prev => ({ ...prev, activeColor: color }))}
            />

            <div className="pt-8 space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                {state.mode === "catalog" ? "Available Merch" : "Kit Presets"}
              </h4>

              <div className="grid grid-cols-1 gap-4">
                {state.mode === "catalog" ? (
                  filteredProducts.map(p => (
                    <ProductCard 
                      key={p.id}
                      product={p}
                      isSelected={state.selectedItems.some(i => i.productId === p.id)}
                      onToggle={toggleProduct}
                      onPreview={() => {}} // TODO: Lightbox preview
                    />
                  ))
                ) : (
                  kits.map(k => (
                    <KitCard 
                      key={k.id}
                      kit={k}
                      isActive={state.activeKitId === k.id}
                      onSelect={selectKit}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </aside>

        {/* ── CENTER: Visual Canvas ──────────────────────── */}
        <main className="flex-1 overflow-hidden">
          <VisualCanvas 
            lineItems={summary.lineItems}
            mode={state.mode}
            activeKitName={activeKit?.name}
          />
        </main>

        {/* ── RIGHT PANEL: Summary ────────────────────────── */}
        <aside className="w-80 border-l border-gray-100 bg-white overflow-hidden">
          <SummaryPanel 
            summary={summary}
            selectedItems={state.selectedItems}
            onUpdateQty={updateQuantity}
            onRemove={toggleProduct} // Removing is just toggling off
          />
        </aside>

      </div>
    </div>
  );
}
