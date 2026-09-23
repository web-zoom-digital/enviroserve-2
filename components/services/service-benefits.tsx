"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileCheck2 } from "lucide-react";

interface BenefitItem {
  title: string;
  description: string;
}

interface ServiceBenefitsProps {
  benefits: BenefitItem[];
}

export function ServiceBenefits({ benefits }: ServiceBenefitsProps) {
  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-enviro-light text-enviro-green text-xs font-bold uppercase tracking-wider">
            <span>VALUE & IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-enviro-navy font-heading tracking-tight">
            WHY THIS SERVICE MATTERS
          </h2>
          <p className="text-base text-enviro-gray">
            Tangible operational, statutory, and environmental benefits for enterprise organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 space-y-4 flex flex-col justify-between cursor-pointer group hover:bg-emerald-50/40 hover:border-emerald-300/80"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-enviro-green text-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-6 group-hover:bg-emerald-600 transition-all duration-300">
                  <FileCheck2 className="w-6 h-6 transition-transform duration-300 group-hover:rotate-6" />
                </div>
                <h3 className="text-xl font-bold text-enviro-navy">{benefit.title}</h3>
                <p className="text-sm text-enviro-gray leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
