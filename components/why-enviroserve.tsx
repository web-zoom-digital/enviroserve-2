"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Leaf, Zap, Globe2 } from "lucide-react";

const whyUsPoints = [
  {
    title: "Protecting Our Natural Ecosystems",
    description: "Every item we recycle helps prevent soil and water contamination — giving nature room to breathe, thrive, and remain pristine.",
    icon: Leaf,
  },
  {
    title: "100% Audit-Secure & Transparent",
    description: "Every credit certificate and Form-6 manifest is backed by verified physical recycling ledgers you can trust with complete confidence.",
    icon: ShieldCheck,
  },
  {
    title: "Zero-Landfill Commitment",
    description: "We divert 100% of hazardous components away from landfills, recovering precious resources and putting them back into circular life.",
    icon: Zap,
  },
  {
    title: "Pan-India Green Movement",
    description: "Our eco-certified logistics connect businesses and communities across India to make recycling effortless, accessible, and impactful.",
    icon: Globe2,
  },
];

export function WhyEnviroServe() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-enviro-light text-enviro-green text-xs font-bold uppercase tracking-wider">
            <span>Recycle More • Enjoy Nature For More</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-enviro-navy tracking-tight">
            Why Businesses & Communities Choose EnviroServe
          </h2>
          <p className="text-base text-enviro-gray">
            When you recycle more with us, you protect our planet&apos;s natural beauty while ensuring 100% seamless compliance for your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyUsPoints.map((point, idx) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-emerald-300 transition-all duration-300 space-y-4 cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-xl bg-enviro-light text-enviro-green group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center transition-colors duration-300">
                  <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-lg font-bold text-enviro-navy group-hover:text-enviro-green transition-colors">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-enviro-gray leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
