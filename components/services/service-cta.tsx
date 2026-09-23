"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";

interface ServiceCTAProps {
  shortTitle?: string;
}

export function ServiceCTA({ shortTitle }: ServiceCTAProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-enviro-navy via-emerald-950 to-slate-900 text-white text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 space-y-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
            <span>TAKE ACTION TODAY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            READY TO HANDLE YOUR WASTE RESPONSIBLY?
          </h2>

          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Talk to the EnviroServe team about your {shortTitle ? shortTitle.toLowerCase() : "recycling"}, EPR or waste-management requirement.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-enviro-accent hover:bg-emerald-400 text-enviro-navy font-extrabold text-base px-8 py-4 rounded-full transition-all shadow-xl hover:scale-105 active:scale-95"
            >
              <PhoneCall className="w-5 h-5" />
              <span>Talk to Our Experts</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-base px-8 py-4 rounded-full transition-all border border-white/30 backdrop-blur-md"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
