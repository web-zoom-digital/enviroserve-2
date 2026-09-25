"use client";

import React from "react";
import Link from "next/link";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { PhoneCall, Send } from "lucide-react";
import { companyInfo } from "@/data/company";

export function FloatingWidgets() {
  const whatsappNumber = "919910088435";
  const defaultMsg = encodeURIComponent(
    "Hello EnviroServe, I would like to inquire about recycling & EPR compliance services."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMsg}`;
  const phoneUrl = `tel:${companyInfo.contact.primaryPhone.replace(/\s+/g, "")}`;

  return (
    <>
      <div className="hidden lg:flex fixed bottom-6 right-6 z-50 flex-col items-end gap-3.5 pointer-events-auto">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white"
        >
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />
          <FaWhatsapp className="w-7 h-7 relative z-10 drop-shadow-sm" />
        </a>

        <a
          href={phoneUrl}
          aria-label="Call Us"
          className="group relative flex items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white"
        >
          <FaPhoneAlt className="w-5 h-5 relative z-10 drop-shadow-sm" />
      
        </a>
      </div>

      {/* Mobile Bottom Navigation Bar (Compact & Sleek) */}
      <div className="fixed bottom-0 inset-x-0 z-50 lg:hidden bg-white/95 backdrop-blur-xl border-t border-emerald-100/90 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-5 py-1">
        <div className="max-w-xs mx-auto flex items-center justify-between">
          
          {/* Call Now */}
          <a
            href={phoneUrl}
            className="flex flex-col items-center justify-center text-center gap-0.5 group text-slate-700 hover:text-emerald-700 active:scale-95 transition-all py-0.5"
            aria-label="Call Us"
          >
            <div className="p-1.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200/60 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-all">
              <PhoneCall className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-bold tracking-tight text-slate-700">
              Call Now
            </span>
          </a>

          {/* Floating WhatsApp Center Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Chat"
            className="flex flex-col items-center justify-center -translate-y-2.5 group active:scale-95 transition-all"
          >
            <div className="relative p-2.5 rounded-full bg-gradient-to-tr from-[#25D366] via-[#20bd5a] to-emerald-500 text-white shadow-[0_4px_16px_rgba(37,211,102,0.4)] border-[3px] border-white transition-transform group-hover:scale-105">
              <span className="absolute -inset-0.5 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
              <FaWhatsapp className="w-5 h-5 relative z-10" />
            </div>
            <span className="text-[9px] font-black text-emerald-800 bg-emerald-100/95 px-2 py-0.2 rounded-full border border-emerald-200/70 shadow-2xs -mt-1 tracking-tight">
              WhatsApp
            </span>
          </a>

          {/* Contact Page Link */}
          <Link
            href="/contact"
            className="flex flex-col items-center justify-center text-center gap-0.5 group text-slate-700 hover:text-emerald-700 active:scale-95 transition-all py-0.5"
            aria-label="Contact Page"
          >
            <div className="p-1.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200/60 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-all">
              <Send className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-bold tracking-tight text-slate-700">
              Contact
            </span>
          </Link>

        </div>
      </div>
    </>
  );
}
