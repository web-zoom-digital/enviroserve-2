"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function BlogHero() {
  return (
    <section className="relative w-full min-h-[650px] sm:min-h-[720px] lg:h-[80vh] flex items-center justify-center overflow-hidden text-white pt-12">
      {/* Background Image with DSLR view */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-blog-dslr.jpg"
          alt="EnviroServe Blog Header DSLR"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 pt-12">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/80 backdrop-blur-md text-emerald-300 text-xs sm:text-sm font-bold uppercase tracking-widest border border-emerald-400/40 shadow-lg"
        >
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span>BLOG & INDUSTRY INSIGHTS</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading text-white tracking-tight leading-tight max-w-4xl mx-auto"
          style={{ textShadow: "0 4px 20px rgba(0, 0, 0, 0.9), 0 2px 6px rgba(0, 0, 0, 0.95)" }}
        >
          Knowledge Hub. <br className="hidden sm:inline" />
          Regulations & EPR Insights.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl text-slate-100 max-w-3xl mx-auto leading-relaxed font-medium"
          style={{ textShadow: "0 2px 12px rgba(0, 0, 0, 0.9)" }}
        >
          Stay informed with expert analysis on E-Waste rules, Battery Waste Management (BWM 2022), CPCB portal compliance guidelines, and sustainable circular economy practices across India.
        </motion.p>
      </div>
    </section>
  );
}

