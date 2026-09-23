"use client";

import React from "react";
import { motion } from "framer-motion";
import { Laptop, Car, Zap, ShoppingBag, Radio, Stethoscope } from "lucide-react";

const industries = [
  { 
    name: "IT & Hardware OEMs", 
    icon: Laptop, 
    desc: "E-waste recycling, EPR target fulfillment & IT asset liquidation",
    colorStyle: "bg-blue-500/10 text-blue-600 border-blue-200 group-hover:bg-blue-600 group-hover:text-white" 
  },
  { 
    name: "Automotive & EV Brands", 
    icon: Car, 
    desc: "Li-ion battery pack recycling & tyre waste EPR compliance",
    colorStyle: "bg-emerald-500/10 text-emerald-600 border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white" 
  },
  { 
    name: "Energy & Utilities", 
    icon: Zap, 
    desc: "Solar ESS battery recovery & transformer oil re-refining EPR",
    colorStyle: "bg-amber-500/10 text-amber-600 border-amber-200 group-hover:bg-amber-500 group-hover:text-white" 
  },
  { 
    name: "FMCG & Packaging", 
    icon: ShoppingBag, 
    desc: "Category I, II, III & IV plastic packaging EPR credits",
    colorStyle: "bg-green-500/10 text-green-600 border-green-200 group-hover:bg-green-600 group-hover:text-white" 
  },
  { 
    name: "Telecom Infrastructure", 
    icon: Radio, 
    desc: "Decommissioned cell tower hardware & battery bank logistics",
    colorStyle: "bg-purple-500/10 text-purple-600 border-purple-200 group-hover:bg-purple-600 group-hover:text-white" 
  },
  { 
    name: "Healthcare & Labs", 
    icon: Stethoscope, 
    desc: "Electronic medical device de-manufacturing & data wiping",
    colorStyle: "bg-rose-500/10 text-rose-600 border-rose-200 group-hover:bg-rose-600 group-hover:text-white" 
  },
];

export function IndustriesServed() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-enviro-green text-xs font-bold uppercase tracking-wider">
            <span>Market Reach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-enviro-navy tracking-tight">
            Industries We Serve
          </h2>
          <p className="text-base text-enviro-gray">
            Tailored circular economy and regulatory compliance solutions across major industrial sectors in India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group p-6 rounded-2xl bg-enviro-bg border border-slate-200/80 hover:border-emerald-300 transition-all duration-300 flex items-start gap-4 shadow-sm hover:shadow-md"
              >
                <div className={`p-3.5 rounded-xl border flex items-center justify-center shrink-0 transition-all duration-300 ${ind.colorStyle}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-enviro-navy group-hover:text-enviro-green transition-colors">
                    {ind.name}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-enviro-gray leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
