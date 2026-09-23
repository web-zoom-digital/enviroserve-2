"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Recycle, Truck, FileCheck2, Cpu, BatteryCharging } from "lucide-react";

interface WhyEnviroServeProps {
  title: string;
  items: { title: string; desc: string }[];
}

export function WhyEnviroServeSection({ title, items }: WhyEnviroServeProps) {
  const icons = [ShieldCheck, Recycle, Truck, FileCheck2, Cpu, BatteryCharging];

  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-enviro-light text-enviro-green text-xs font-bold uppercase tracking-wider">
            <span>OUR PROVEN CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-enviro-navy font-heading tracking-tight">
            {title}
          </h2>
          <p className="text-base text-enviro-gray">
            Delivering verified environmental integrity, technical precision, and legal compliance nationwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-4 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group hover:bg-emerald-50/40 hover:border-emerald-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-enviro-light text-enviro-green flex items-center justify-center border border-emerald-200 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Icon className="w-6 h-6 transition-transform duration-300 group-hover:rotate-6" />
                </div>
                <h3 className="text-xl font-bold text-enviro-navy">{item.title}</h3>
                <p className="text-sm text-enviro-gray leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
