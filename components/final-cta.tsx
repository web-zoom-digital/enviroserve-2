import React from "react";
import Link from "next/link";
import { ArrowRight, PhoneCall, ShieldCheck } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-enviro-navy via-emerald-950 to-enviro-navy text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>CPCB Authorized Execution</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white max-w-3xl mx-auto leading-tight">
          Ready to Build a Compliant & Sustainable Future?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Partner with EnviroServe for scientific e-waste recycling, closed-loop lithium battery recovery, and single-window EPR advisory across India.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-enviro-accent hover:bg-emerald-400 text-enviro-navy font-bold text-base px-8 py-4 rounded-xl transition-all shadow-xl hover:scale-105 active:scale-95"
          >
            <PhoneCall className="w-5 h-5" />
            <span>Connect with an Expert</span>
          </Link>

          <Link
            href="/services/e-waste-recycling"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-base px-8 py-4 rounded-xl transition-all border border-white/20"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
