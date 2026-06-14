"use client";

import React from "react";

const Logo = ({ className = "h-12" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="relative flex flex-col items-center">
        {/* SVG Leaf/Floral Element inspired by the provided logo */}
        <svg viewBox="0 0 100 60" className="h-10 w-auto text-black">
          <path 
            d="M50 50 C 40 40, 30 50, 20 40 C 30 30, 40 20, 50 10 C 60 20, 70 30, 80 40 C 70 50, 60 40, 50 50 Z" 
            fill="none" 
            stroke="black" 
            strokeWidth="1.5" 
          />
          <path d="M50 10 L50 50" stroke="black" strokeWidth="1" />
          <path d="M50 20 L40 25 M50 20 L60 25 M50 35 L42 40 M50 35 L58 40" stroke="black" strokeWidth="1" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-xl tracking-tighter uppercase leading-none">Alfa Media Group LTD</span>
        <div className="flex items-center gap-1 mt-1">
          {/* EU Flag */}
          <div className="w-3 h-2 bg-blue-700 relative overflow-hidden flex items-center justify-center">
             <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
          </div>
          {/* Ukraine Flag */}
          <div className="w-3 h-2 flex flex-col">
            <div className="h-1/2 bg-blue-600"></div>
            <div className="h-1/2 bg-yellow-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
