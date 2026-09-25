"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cpu, BatteryCharging, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

interface PartnerCard {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  logo: string;
  alt: string;
  highlights: string[];
  icon: React.ElementType;
}

const partnerCards: PartnerCard[] = [
  {
    id: "csir",
    badge: "PCB RECYCLING TECH",
    title: "CSIR (Council of Scientific & Industrial Research)",
    subtitle: "PCB Recycling Technology Partner",
    description:
      "Collaborating on advanced printed circuit board (PCB) recycling process technologies for high-purity precious metal recovery, critical material extraction, and scientific e-waste de-manufacturing.",
    logo: "/technology-hero/csir-logo.svg",
    alt: "CSIR technology partner logo",
    highlights: [
      "Advanced PCB De-manufacturing",
      "Precious Metal Recovery & Refining",
      "CSIR Certified Process Technologies",
    ],
    icon: Cpu,
  },
  {
    id: "cmet-li-ion",
    badge: "LI-ION & MATERIALS TECH",
    title: "C-MET & Lithium-Ion Tech Partner",
    subtitle: "Battery Extraction & Critical Materials (Under MEITY)",
    description:
      "Joint research & technological alignment in e-waste processing, hazardous scrap treatment, and closed-loop lithium-ion battery recovery for EV battery packs and secondary cells.",
    logo: "/technology-hero/cmet-logo.svg",
    alt: "C-MET Hyderabad technology partner logo",
    highlights: [
      "MEITY / C-MET Research Alignment",
      "Closed-Loop Li-Ion Extraction",
      "EV Battery Packs & Secondary Cells",
    ],
    icon: BatteryCharging,
  },
];

export function TechnologyPartners() {

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <span>TECHNOLOGY PARTNER </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-enviro-navy tracking-tight">
            Our Technology Partners
          </h2>
          <p className="text-base text-enviro-gray leading-relaxed">
            Collaborating with premier government research institutions and specialized technology partners for zero-landfill material recovery.
          </p>
        </div>

        {/* 2 Cards Layout (Full-width Centered Grid on Mobile, 2 Columns on Desktop) */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-stretch justify-center justify-items-center md:justify-items-stretch">
            {/* Card 1: CSIR (PCB Recycling) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md md:max-w-none group relative bg-white rounded-3xl p-5 sm:p-9 border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              {/* Background Ambient Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="space-y-6 relative z-10">
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 text-[11px] sm:text-xs font-bold uppercase tracking-wider shrink-0">
                    {partnerCards[0].badge}
                  </span>
                  <div className="p-2 sm:p-2.5 rounded-2xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 shadow-sm shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                </div>

                {/* Large Prominent Logo Box */}
                <div className="h-32 sm:h-44 w-full bg-slate-50/90 rounded-2xl p-4 flex items-center justify-center border border-slate-100 group-hover:bg-white group-hover:border-emerald-200 group-hover:shadow-md transition-all duration-300">
                  <div className="relative w-full h-full">
                    <Image
                      src={partnerCards[0].logo}
                      alt={partnerCards[0].alt}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                      priority
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2.5">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors duration-200">
                    {partnerCards[0].title}
                  </h3>
                  <div className="text-xs font-bold uppercase tracking-wide text-emerald-700">
                    {partnerCards[0].subtitle}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed pt-1">
                    {partnerCards[0].description}
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {partnerCards[0].highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Card 2: C-MET Single Large Logo */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="w-full max-w-md md:max-w-none group relative bg-white rounded-3xl p-5 sm:p-9 border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              {/* Background Ambient Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="space-y-6 relative z-10">
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-200/80 text-[11px] sm:text-xs font-bold uppercase tracking-wider shrink-0">
                    {partnerCards[1].badge}
                  </span>
                  <div className="p-2 sm:p-2.5 rounded-2xl bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 shadow-sm shrink-0">
                    <BatteryCharging className="w-5 h-5" />
                  </div>
                </div>

                {/* Large Prominent Logo Box */}
                <div className="h-32 sm:h-44 w-full bg-slate-50/90 rounded-2xl p-4 flex items-center justify-center border border-slate-100 group-hover:bg-white group-hover:border-teal-200 group-hover:shadow-md transition-all duration-300">
                  <div className="relative w-full h-full">
                    <Image
                      src={partnerCards[1].logo}
                      alt={partnerCards[1].alt}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                      priority
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2.5">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-teal-700 transition-colors duration-200">
                    {partnerCards[1].title}
                  </h3>
                  <div className="text-xs font-bold uppercase tracking-wide text-teal-700">
                    {partnerCards[1].subtitle}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed pt-1">
                    {partnerCards[1].description}
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {partnerCards[1].highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
