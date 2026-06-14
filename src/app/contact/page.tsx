import React from "react";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="pt-32">
      <div className="section-container">
        <span className="text-gray-400 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Get in Touch</span>
        <h1 className="text-6xl font-bold tracking-tight mb-12">Let&apos;s Start a <br /> Conversation</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 py-10">
          <div className="space-y-12">
            <p className="text-xl text-gray-600 leading-relaxed max-w-md">
              Whether you need a quick quote or a full production strategy, our team is ready to assist you.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-alfa-gold flex items-center justify-center shrink-0">
                  <Mail className="text-black" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email Us</h4>
                  <p className="text-gray-500">hello@alfamedia.com</p>
                  <p className="text-gray-500 text-sm">Response within 24 hours</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-black flex items-center justify-center shrink-0">
                  <Phone className="text-alfa-gold" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Call Us</h4>
                  <p className="text-gray-500">+380 44 123 45 67</p>
                  <p className="text-gray-500 text-sm">Mon-Fri: 9:00 - 18:00</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-gray-100 flex items-center justify-center shrink-0">
                  <MapPin className="text-black" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Visit Our Production</h4>
                  <p className="text-gray-500">Kyiv, Ukraine | Warsaw, Poland</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-black p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-8 uppercase tracking-tight">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">FullName</label>
                  <input type="text" className="w-full border-b-2 border-gray-100 py-3 px-2 outline-none focus:border-alfa-gold transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Email Address</label>
                  <input type="email" className="w-full border-b-2 border-gray-100 py-3 px-2 outline-none focus:border-alfa-gold transition-colors" placeholder="john@company.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Project Details</label>
                <textarea rows={4} className="w-full border-b-2 border-gray-100 py-3 px-2 outline-none focus:border-alfa-gold transition-colors resize-none" placeholder="Tell us about your requirements..." />
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-3">
                <MessageSquare size={18} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
