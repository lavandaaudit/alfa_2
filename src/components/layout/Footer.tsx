import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-white/10 pb-20">
        {/* Company Info */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-alfa-gold flex items-center justify-center">
              <span className="text-black font-bold text-xl">A</span>
            </div>
            <span className="font-bold text-xl tracking-tight uppercase">Alfa Media Group</span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Premium European corporate printing and merchandise production. High-quality materials for businesses that value excellence.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="p-2 border border-white/20 hover:bg-alfa-gold hover:text-black transition-all">
              <Linkedin size={18} />
            </Link>
            <Link href="#" className="p-2 border border-white/20 hover:bg-alfa-gold hover:text-black transition-all">
              <Instagram size={18} />
            </Link>
            <Link href="#" className="p-2 border border-white/20 hover:bg-alfa-gold hover:text-black transition-all">
              <Twitter size={18} />
            </Link>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold uppercase tracking-widest text-sm mb-8 text-alfa-gold">Services</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link href="#services" className="hover:text-white transition-colors">Offset Printing</Link></li>
            <li><Link href="#services" className="hover:text-white transition-colors">Digital Printing</Link></li>
            <li><Link href="#services" className="hover:text-white transition-colors">UV / Screen Printing</Link></li>
            <li><Link href="#services" className="hover:text-white transition-colors">Packaging Production</Link></li>
            <li><Link href="#services" className="hover:text-white transition-colors">Large Format</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-bold uppercase tracking-widest text-sm mb-8 text-alfa-gold">Company</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Portfolio</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Production Facility</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Testimonials</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h4 className="font-bold uppercase tracking-widest text-sm mb-8 text-alfa-gold">Get in Touch</h4>
          <div className="space-y-4 text-sm text-gray-400">
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-alfa-gold" />
              <span>2294598@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-alfa-gold" />
              <span>+380 44 123 45 67</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-alfa-gold mt-1" />
              <span>Kyiv, Ukraine <br /> European Office: Warsaw, Poland</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest">
        <p>© 2026 Alfa Media Group. All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
