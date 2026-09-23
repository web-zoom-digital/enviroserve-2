"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Target } from "lucide-react";

interface ServiceAudienceProps {
  title: string;
  categories: string[];
}

export function ServiceAudience({ title, categories }: ServiceAudienceProps) {
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-enviro-green text-xs font-bold uppercase tracking-wider">
            <Target className="w-4 h-4 text-enviro-green" />
            <span>APPLICABLE SECTORS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-enviro-navy font-heading tracking-tight">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3 font-bold text-sm text-enviro-navy hover:border-emerald-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group hover:bg-emerald-50/40"
            >
              <CheckCircle2 className="w-5 h-5 text-enviro-accent shrink-0 group-hover:scale-125 transition-transform duration-300" />
              <span>{cat}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
