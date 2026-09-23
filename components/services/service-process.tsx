"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProcessStepItem } from "@/data/services";

interface ServiceProcessProps {
  steps: ProcessStepItem[];
  title?: string;
}

export function ServiceProcess({ steps, title = "Step-by-Step Service Process Workflow" }: ServiceProcessProps) {
  return (
    <section id="process" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-enviro-green text-xs font-bold uppercase tracking-wider">
            <span>SERVICE PROCESS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-enviro-navy font-heading tracking-tight">
            {title}
          </h2>
          <p className="text-base text-enviro-gray">
            Our structured multi-tier process ensures complete traceability, maximum recovery, and zero environmental leakage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-card hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 space-y-3 flex flex-col justify-between cursor-pointer group hover:border-emerald-300 hover:bg-emerald-50/30"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-enviro-light text-enviro-green font-extrabold font-heading text-lg flex items-center justify-center border border-emerald-200 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white group-hover:rotate-6 transition-all duration-300 shadow-sm">
                  {step.number}
                </div>
                <h3 className="text-base font-bold text-enviro-navy">{step.title}</h3>
                <p className="text-xs text-enviro-gray leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
