"use client";

import React from "react";
import Link from "next/link";
import { Leaf, ArrowRight } from "lucide-react";

export function NatureBanner() {
  return (
    <section className="py-6 bg-slate-50 border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-enviro-navy via-emerald-950 to-enviro-navy text-white px-6 py-5 sm:px-8 sm:py-6 shadow-lg border border-emerald-500/20 flex flex-col md:flex-row items-center justify-between gap-5">
          
          {/* Decorative Glow */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />

          {/* Left Side: Content */}
          <div className="space-y-1.5 text-center md:text-left z-10">
            <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-white">
              Protecting Ecosystems through Sustainable Circular Solutions
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Partner with EnviroServe to turn electronic, battery, and industrial scrap into valuable secondary resources with zero-landfill compliance.
            </p>
          </div>

          {/* Right Side: Button */}
          <div className="shrink-0 z-10 w-full md:w-auto flex justify-center md:justify-end">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm px-6 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-emerald-500/20 hover:scale-105 active:scale-95 group cursor-pointer"
            >
              <span>Connect With Us</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
