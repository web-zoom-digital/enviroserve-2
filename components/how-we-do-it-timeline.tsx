"use client";

import React from "react";
import { motion } from "framer-motion";
import { Truck, Scale, Wrench, RefreshCw, Factory, FileCheck2, ArrowRight, ShieldCheck, ArrowDown } from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Collection & Logistics",
    description: "Pan-India GPS-tracked pickup using specialized hazardous waste containment boxes.",
    details: ["UN-certified containment", "Form-9 manifest documentation", "24-48h dispatch SLA"],
    icon: Truck,
  },
  {
    step: "02",
    title: "Assessment & Sorting",
    description: "Barcode tagging, category weighing, and chemical diagnostic analysis.",
    details: ["Digital mass measurement", "Barcode lot tracking", "Chemistry classification"],
    icon: Scale,
  },
  {
    step: "03",
    title: "Safe Dismantling",
    description: "Manual de-manufacturing and battery discharge under strict safety protocols.",
    details: ["Deep battery discharging", "Hazardous isolation", "DoD data sanitization"],
    icon: Wrench,
  },
  {
    step: "04",
    title: "Material Recovery",
    description: "Mechanical shredding, density separation, and Black Mass/metal extraction.",
    details: ["Sub-10mm granulation", "Eddy current sorting", "Black Mass extraction"],
    icon: RefreshCw,
  },
  {
    step: "05",
    title: "Eco Recycling",
    description: "Closed-loop refining returning pure base materials back to manufacturers.",
    details: ["Hydrometallurgical refining", "98%+ metal purity", "Secondary plastics reclamation"],
    icon: Factory,
  },
  {
    step: "06",
    title: "CPCB Reporting",
    description: "Filing Form-6 Destruction Certificates and transferring verified EPR credits.",
    details: ["Form-6 digital issuance", "CPCB portal integration", "100% legal audit trail"],
    icon: FileCheck2,
  },
];

export function HowWeDoItTimeline() {
  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden relative border-t border-slate-900">
      {/* Background Glow Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Centered) */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/90 border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase tracking-wider shadow-lg">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Operational Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Step-by-Step Recycling & Compliance Lifecycle
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium">
            From initial transit pickup to CPCB portal certificate submission, explore how our closed-loop facility operates.
          </p>
        </div>

        {/* Desktop Process Grid (Horizontal Flow) */}
        <div className="hidden lg:block relative mb-12">
          {/* Connecting Line */}
          <div className="absolute top-[52px] left-[5%] right-[5%] h-1 bg-slate-800 rounded-full z-0" />
          <div className="absolute top-[52px] left-[5%] right-[20%] h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 rounded-full z-0 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />

          <div className="grid grid-cols-6 gap-4 relative z-10">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  {/* Step Badge */}
                  <div className="relative mb-5">
                    <div className="w-20 h-20 rounded-3xl bg-slate-900 border-2 border-emerald-500/40 group-hover:border-emerald-400 group-hover:bg-gradient-to-br group-hover:from-emerald-600 group-hover:to-teal-700 flex items-center justify-center text-emerald-400 group-hover:text-white shadow-xl transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-8 h-8" />
                    </div>
                    <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-black shadow-md border border-emerald-400">
                      {step.step}
                    </span>
                  </div>

                  <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-wider mb-1">
                    Stage {step.step}
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed px-1 line-clamp-3">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Process View (Centered Vertical Flow with Down Arrows) */}
        <div className="lg:hidden flex flex-col items-center space-y-4">
          {processSteps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === processSteps.length - 1;
            return (
              <React.Fragment key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="w-full max-w-sm flex flex-col items-center text-center p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl cursor-pointer hover:border-emerald-500/50 group transition-all"
                >
                  {/* Step Badge & Icon Box */}
                  <div className="relative mb-4">
                    <div className="w-20 h-20 rounded-3xl bg-slate-950 border-2 border-emerald-500/40 group-hover:border-emerald-400 group-hover:bg-gradient-to-br group-hover:from-emerald-600 group-hover:to-teal-700 flex items-center justify-center text-emerald-400 group-hover:text-white shadow-xl transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-8 h-8" />
                    </div>
                    <span className="absolute -top-2 -right-2 px-2.5 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-black shadow-md border border-emerald-400">
                      {step.step}
                    </span>
                  </div>

                  <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-wider mb-1">
                    Stage {step.step}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xs">
                    {step.description}
                  </p>

                  <div className="pt-3 flex flex-wrap justify-center gap-2 mt-2 border-t border-slate-800/80 w-full">
                    {step.details.map((d, dIdx) => (
                      <span key={dIdx} className="text-[11px] font-semibold bg-emerald-950/80 text-emerald-300 px-2.5 py-1 rounded-lg border border-emerald-800/50">
                        ✓ {d}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Down Arrow Connector between steps */}
                {!isLast && (
                  <div className="flex flex-col items-center justify-center my-1 text-emerald-400">
                    <div className="w-0.5 h-3 bg-gradient-to-b from-emerald-500 to-teal-400" />
                    <div className="p-2 rounded-full bg-slate-900 border border-emerald-500/40 text-emerald-400 shadow-md">
                      <ArrowDown className="w-4 h-4 animate-bounce" />
                    </div>
                    <div className="w-0.5 h-3 bg-gradient-to-b from-teal-400 to-emerald-500" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

      </div>
    </section>
  );
}

