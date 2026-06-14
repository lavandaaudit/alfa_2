"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Play, Pause, Volume2, VolumeX, ChevronRight, ArrowRight } from "lucide-react";

/**
 * Hero Media System
 * Supports both videos and photos.
 * 10 seconds interval.
 */
const HERO_MEDIA = [
  { type: "video", src: "/videos/production-1.mp4", alt: "Production Process 01" },
  { type: "image", src: "/assets/factory.png", alt: "Modern Factory Floor" },
  { type: "video", src: "/videos/production-2.mp4", alt: "Quality Control" },
  { type: "image", src: "/assets/products/tshirt.png", alt: "Premium Branding" },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_MEDIA.length);
  };

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    
    // 10 second interval as requested
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex]);

  const currentMedia = HERO_MEDIA[currentIndex];

  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-20">
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-6 space-y-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <span className="h-[1px] w-12 bg-alfa-gold" />
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-alfa-gold">
              Premium B2B Platform
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-6xl md:text-8xl xl:text-9xl font-black tracking-tighter leading-[0.85] uppercase"
          >
            Event<br />
            Branding<br />
            <span className="text-gray-200">Experts</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 text-lg max-w-md leading-relaxed"
          >
            We don't just print logos. We build comprehensive merchandise 
            ecosystems for world-class corporate events and brands.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="#kit-builder" className="group relative px-8 py-4 bg-black text-white font-bold text-xs uppercase tracking-widest overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Start Building <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-alfa-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
            
            <Link href="/catalog" className="px-8 py-4 border-2 border-black text-black font-bold text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all">
              View Catalog
            </Link>
          </motion.div>
        </div>

        {/* Right Media Display */}
        <div className="lg:col-span-6 relative aspect-[4/5] bg-gray-50 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="absolute inset-0"
            >
              {currentMedia.type === "video" ? (
                <video
                  ref={videoRef}
                  src={currentMedia.src}
                  autoPlay
                  muted={isMuted}
                  playsInline
                  loop
                  className="w-full h-full object-cover"
                />
              ) : (
                <img 
                  src={currentMedia.src} 
                  alt={currentMedia.alt}
                  className="w-full h-full object-cover"
                />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Media Overlay Info */}
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent text-white">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-alfa-gold mb-1">Preview {currentIndex + 1}</p>
                <h4 className="text-sm font-bold uppercase tracking-widest">{currentMedia.alt}</h4>
              </div>
              
              <div className="flex gap-2">
                {currentMedia.type === "video" && (
                  <button 
                    onClick={() => setIsMuted(!isMuted)}
                    className="w-8 h-8 bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-alfa-gold hover:text-black transition-all"
                  >
                    {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                  </button>
                )}
                <div className="flex items-center gap-1.5 ml-4">
                  {HERO_MEDIA.map((_, i) => (
                    <div 
                      key={i}
                      className={`h-1 transition-all duration-300 ${i === currentIndex ? "w-8 bg-alfa-gold" : "w-2 bg-white/30"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />
    </section>
  );
};

export default Hero;

