"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Event Kit",   href: "#kit-builder", highlight: true },
  { name: "Production",  href: "#production" },
  { name: "Services",    href: "#services" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || mobileOpen
            ? "bg-white border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

          {/* ── Logo ─────────────────────────────── */}
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2.5 shrink-0 group"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-black flex items-center justify-center shrink-0 group-hover:bg-alfa-gold transition-colors duration-200">
              <span className="text-alfa-gold group-hover:text-black font-black text-base sm:text-lg leading-none">A</span>
            </div>
            {/* Text hides on very small screens, shows from sm+ */}
            <span className="font-bold text-sm sm:text-base uppercase tracking-tight hidden xs:block sm:block whitespace-nowrap">
              Alfa Media
            </span>
          </Link>

          {/* ── Desktop Nav ──────────────────────── */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              link.highlight ? (
                <Link
                  key={link.name}
                  href={link.href}
                  className="ml-2 px-5 py-2.5 bg-alfa-gold text-black font-bold text-xs uppercase tracking-wider hover:bg-black hover:text-alfa-gold transition-all duration-200 flex items-center gap-1.5"
                >
                  {link.name}
                  <ArrowUpRight size={12} />
                </Link>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium uppercase tracking-wider hover:text-alfa-gold transition-colors duration-200"
                >
                  {link.name}
                </Link>
              )
            ))}
            <Link
              href="/contact"
              className="ml-4 px-5 py-2.5 border border-black text-black font-bold text-xs uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* ── Mobile Hamburger ─────────────────── */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* ── Mobile Menu Fullscreen Overlay ──────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 top-16 z-40 bg-white lg:hidden flex flex-col"
          >
            {/* Nav Links */}
            <div className="flex flex-col px-6 pt-8 pb-6 gap-1 flex-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between py-5 border-b border-gray-100 group ${
                      link.highlight ? "text-black" : ""
                    }`}
                  >
                    <span className="text-2xl font-bold tracking-tight">{link.name}</span>
                    {link.highlight && (
                      <span className="w-8 h-8 bg-alfa-gold flex items-center justify-center shrink-0">
                        <ArrowUpRight size={16} className="text-black" />
                      </span>
                    )}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + navLinks.length * 0.06 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between py-5 border-b border-gray-100"
                >
                  <span className="text-2xl font-bold tracking-tight">Contact</span>
                </Link>
              </motion.div>
            </div>

            {/* Footer of mobile menu */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="px-6 pb-8 pt-4 border-t border-gray-100"
            >
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">European Production Partner</p>
              <Link
                href="/merch-builder"
                onClick={() => setMobileOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-4 bg-alfa-gold text-black font-bold text-sm uppercase tracking-wider"
              >
                Build Your Kit
                <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
