"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";

interface ServiceSummaryProps {
  text: string;
  highlights: string[];
}

export function ServiceSummary({ text, highlights }: ServiceSummaryProps) {
  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-emerald-50/50 p-8 sm:p-10 rounded-3xl border border-emerald-200/80 shadow-sm space-y-6"
        >
          <div className="flex items-center gap-2 text-enviro-green font-bold text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-enviro-accent" />
            <span>AT A GLANCE / SERVICE SUMMARY</span>
          </div>

          <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium max-w-4xl">
            {text}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 border-t border-emerald-200/60">
            {highlights.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white p-3.5 rounded-xl border border-emerald-100 text-xs sm:text-sm font-bold text-enviro-navy shadow-sm flex items-center gap-2.5"
              >
                <CheckCircle2 className="w-4 h-4 text-enviro-green shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
