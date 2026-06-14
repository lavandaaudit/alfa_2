"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, Mail, Phone, User, Send, Plus, Minus, Trash2 } from "lucide-react";

interface Product {
  id: string;
  name: string;
  image: string;
  defaultQty: number;
}

const KIT_PRODUCTS: Product[] = [
  { id: "tshirt", name: "T-Shirt Premium", image: "/assets/products/tshirt.png", defaultQty: 10 },
  { id: "hoodie", name: "Hoodie Luxe", image: "/assets/products/hoodie.png", defaultQty: 5 },
  { id: "badge", name: "Event Badge", image: "/assets/products/badge.png", defaultQty: 100 },
  { id: "pen", name: "Metal Pen", image: "/assets/products/pen.png", defaultQty: 100 },
  { id: "notebook", name: "Notebook A5", image: "/assets/products/notebook.png", defaultQty: 50 },
  { id: "totebag", name: "Eco Tote Bag", image: "/assets/products/totebag.png", defaultQty: 100 },
];

const KitBuilderPreview = () => {
  const [selectedItems, setSelectedItems] = useState(
    KIT_PRODUCTS.map(p => ({ ...p, qty: p.defaultQty }))
  );
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", surname: "", contact: "" });
  const [isSent, setIsSent] = useState(false);

  const updateQty = (id: string, delta: number) => {
    setSelectedItems(prev => prev.map(item => 
      item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
    ));
  };

  const handleQtyChange = (id: string, value: string) => {
    const num = parseInt(value) || 0;
    setSelectedItems(prev => prev.map(item => 
      item.id === id ? { ...item, qty: num } : item
    ));
  };

  const removeItem = (id: string) => {
    setSelectedItems(prev => prev.filter(item => item.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending email to 2294598@gmail.com
    console.log("Sending request to 2294598@gmail.com", {
      client: formData,
      items: selectedItems
    });
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setIsFormOpen(false);
    }, 3000);
  };

  return (
    <section id="kit-builder" className="bg-white py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-alfa-gold font-bold uppercase tracking-[0.3em] text-[10px]"
          >
            Customization Mode
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
            ALFA <span className="text-alfa-gold">EVENT KIT</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Customize your corporate set. Adjust quantities, add or remove items. 
            Send a request to get a personalized quote within 2 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Product Grid */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
            {KIT_PRODUCTS.map((product) => {
              const isSelected = selectedItems.find(i => i.id === product.id);
              return (
                <motion.div 
                  key={product.id}
                  whileHover={{ y: -5 }}
                  className={`relative p-4 border transition-all duration-300 ${
                    isSelected ? "border-black bg-gray-50" : "border-gray-100 hover:border-gray-300"
                  }`}
                  onClick={() => {
                    if (!isSelected) {
                      setSelectedItems([...selectedItems, { ...product, qty: product.defaultQty }]);
                    }
                  }}
                >
                  <div className="aspect-square bg-white mb-4 overflow-hidden group">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="font-bold text-xs uppercase tracking-wider mb-2">{product.name}</h3>
                  
                  {isSelected && (
                    <div className="flex items-center justify-between gap-2 mt-4 bg-white border border-black/10 p-1">
                      <button 
                        onClick={(e) => { e.stopPropagation(); updateQty(product.id, -10); }}
                        className="p-1 hover:bg-gray-100"
                      >
                        <Minus size={12} />
                      </button>
                      <input 
                        type="text" 
                        value={isSelected.qty}
                        onChange={(e) => handleQtyChange(product.id, e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        className="w-12 text-center text-[10px] font-bold focus:outline-none"
                      />
                      <button 
                        onClick={(e) => { e.stopPropagation(); updateQty(product.id, 10); }}
                        className="p-1 hover:bg-gray-100"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  )}

                  {!isSelected && (
                    <div className="mt-4 flex justify-center">
                      <span className="text-[10px] font-bold uppercase text-gray-400">+ Add to Kit</span>
                    </div>
                  )}

                  {isSelected && (
                    <button 
                      onClick={(e) => { e.stopPropagation(); removeItem(product.id); }}
                      className="absolute top-2 right-2 text-gray-300 hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={12} />
                    </button>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Summary & Form */}
          <div className="sticky top-24 bg-black text-white p-8">
            <h3 className="text-xl font-bold uppercase tracking-tight mb-8 border-b border-white/10 pb-4">
              Your Kit Summary
            </h3>
            
            <div className="space-y-4 mb-12">
              {selectedItems.length === 0 ? (
                <p className="text-gray-500 text-sm italic">No items selected</p>
              ) : (
                selectedItems.map(item => (
                  <div key={item.id} className="flex justify-between items-center text-xs">
                    <span className="text-gray-400">{item.name}</span>
                    <span className="font-bold">{item.qty} pcs</span>
                  </div>
                ))
              )}
            </div>

            {!isFormOpen ? (
              <button 
                disabled={selectedItems.length === 0}
                onClick={() => setIsFormOpen(true)}
                className="w-full py-4 bg-alfa-gold text-black font-black uppercase tracking-widest text-xs hover:bg-white transition-all disabled:opacity-50"
              >
                Get Consultation
              </button>
            ) : (
              <motion.form 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="space-y-1">
                  <label className="text-[9px] uppercase tracking-widest text-gray-400">First Name</label>
                  <input 
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm focus:border-alfa-gold outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] uppercase tracking-widest text-gray-400">Last Name</label>
                  <input 
                    required
                    type="text"
                    value={formData.surname}
                    onChange={(e) => setFormData({...formData, surname: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm focus:border-alfa-gold outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] uppercase tracking-widest text-gray-400">Telegram or Email</label>
                  <input 
                    required
                    type="text"
                    value={formData.contact}
                    onChange={(e) => setFormData({...formData, contact: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm focus:border-alfa-gold outline-none transition-all"
                    placeholder="@username or email"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-4 bg-alfa-gold text-black font-black uppercase tracking-widest text-xs hover:bg-white transition-all flex items-center justify-center gap-2"
                >
                  {isSent ? "Request Sent!" : "Send Request"}
                  {!isSent && <Send size={14} />}
                </button>
                
                <button 
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="w-full text-center text-[10px] uppercase tracking-widest text-gray-500 hover:text-white mt-2"
                >
                  Back to edits
                </button>
              </motion.form>
            )}

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-[10px] text-gray-500 leading-relaxed uppercase tracking-wider">
                Our managers will contact you with a visual mockup and commercial offer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KitBuilderPreview;
