"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, ChevronRight, Home, ShieldCheck } from "lucide-react";

interface ServiceHeroProps {
  title: string;
  eyebrowCategory: string;
  heroDescription: string;
  heroImage: string;
  shortTitle: string;
}

export function ServiceHero({
  title,
  eyebrowCategory,
  heroDescription,
  heroImage,
  shortTitle,
}: ServiceHeroProps) {
  return (
    <section className="bg-slate-50 border-b border-slate-200/80 pt-28 pb-16 lg:pb-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm font-semibold text-slate-500 mb-8 flex-wrap">
          <Link href="/" className="hover:text-enviro-green transition-colors flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
          <Link href="/services/e-waste-recycling" className="hover:text-enviro-green transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
          <span className="text-enviro-navy font-bold">{shortTitle}</span>
        </nav>

        {/* Hero Content Grid (Light Theme) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Area */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Category Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-enviro-light text-enviro-green border border-emerald-200 text-xs font-bold uppercase tracking-wider shadow-sm">
              <ShieldCheck className="w-4 h-4 text-enviro-accent" />
              <span>{eyebrowCategory}</span>
            </div>

            {/* H1 Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-enviro-navy tracking-tight leading-tight">
              {title}
            </h1>

            {/* 2-3 Natural Sentences Description */}
            <p className="text-base sm:text-lg text-enviro-gray leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              {heroDescription}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 bg-enviro-green hover:bg-enviro-hover text-white font-extrabold text-base px-8 py-4 rounded-full transition-all shadow-md hover:shadow-xl hover:scale-105 active:scale-95 border border-emerald-500/40"
              >
                <PhoneCall className="w-5 h-5 text-emerald-300" />
                <span>Talk to Our Experts</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-enviro-navy font-bold text-base px-7 py-4 rounded-full transition-all border border-slate-300 shadow-sm"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 text-enviro-green" />
              </Link>
            </div>
          </motion.div>

          {/* Right Unique DSLR Image (NO HUMANS) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative h-[360px] sm:h-[420px] w-full rounded-3xl overflow-hidden border-4 border-white shadow-2xl group">
              <Image
                src={heroImage}
                alt={`${title} DSLR View`}
                fill
                className="object-fit group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
