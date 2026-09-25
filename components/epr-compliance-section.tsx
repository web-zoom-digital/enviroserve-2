"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Cpu, 
  Recycle, 
  BatteryCharging, 
  Disc, 
  Droplet, 
  Layers, 
  FileSpreadsheet, 
  ArrowRight, 
  PhoneCall 
} from "lucide-react";

const eprModules = [
  {
    title: "E-Waste EPR",
    category: "EEE Lifecycles",
    description: "Turnkey CPCB portal filing, target calculation, and verified credit generation for electronic producers.",
    href: "/services/e-waste-epr",
    image: "/images/categories/ewaste.webp",
    icon: Cpu,
    colorStyle: "bg-emerald-500/10 text-emerald-600 border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white",
  },
 
  {
    title: "Battery Waste EPR",
    category: "BWM Rules 2022",
    description: "Compliance under Battery Waste Management Rules 2022 for EV, industrial, and portable battery brands.",
    href: "/services/li-ion-battery-epr",
    image: "/images/categories/liion.png",
    icon: BatteryCharging,
    colorStyle: "bg-amber-500/10 text-amber-600 border-amber-200 group-hover:bg-amber-500 group-hover:text-white",
  },
  
  {
    title: "Used Oil EPR",
    category: "Base Oil & Lubricants",
    description: "Re-refining EPR credit procurement and portal submission for lubricant and base oil producers.",
    href: "/services/used-oil-epr",
    image: "/images/services/WhatsApp-Image-2025-12-16-at-15.04.31-3.jpeg",
    icon: Droplet,
    colorStyle: "bg-blue-500/10 text-blue-600 border-blue-200 group-hover:bg-blue-600 group-hover:text-white",
  },
  {
    title: "Multi-Category EPR",
    category: "Unified Portfolio",
    description: "Single-window advisory desk managing multi-product portfolio compliance across all CPCB portals.",
    href: "/services/multi-category-epr",
    image: "/images/services/3775146-1024x683.jpg",
    icon: Layers,
    colorStyle: "bg-purple-500/10 text-purple-600 border-purple-200 group-hover:bg-purple-600 group-hover:text-white",
  },
  {
    title: "Annual Filing & Audits",
    category: "Documentation & Returns",
    description: "Pre-filing sales reconciliation, ICEGATE import cross-checking, and zero-error return submission.",
    href: "/services/annual-filing",
    image: "/images/services/360_F_319512685_63GEqom3zgl15eTV97QSrqL8i28D3XJ0.jpg",
    icon: FileSpreadsheet,
    colorStyle: "bg-teal-500/10 text-teal-600 border-teal-200 group-hover:bg-teal-600 group-hover:text-white",
  },
];

export function EPRComplianceSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-enviro-green text-xs font-bold uppercase tracking-wider">
            <span>Recycle More • CPCB & SPCB Advisory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-enviro-navy tracking-tight">
            EPR Compliance Made Simple & Human
          </h2>
          <p className="text-base text-enviro-gray">
            Empowering Producers, Importers, and Brand Owners (PIBOs) to recycle more and protect nature with transparent, audit-ready compliance.
          </p>
        </div>

        {/* 7-Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eprModules.map((module, idx) => {
            const Icon = module.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
              >
                <Link
                  href={module.href}
                  className="group block bg-slate-50 hover:bg-enviro-light/60 p-6 rounded-2xl border border-slate-200/80 hover:border-emerald-300 transition-all duration-300 h-full flex flex-col justify-between cursor-pointer"
                >
                  <div className="space-y-4">
                    {/* Content-matched Icon, Image Thumbnail & Category Badge */}
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300 shadow-sm ${module.colorStyle}`}>
                        <Icon className="w-6 h-6" />
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-200/80 text-slate-700">
                          {module.category}
                        </span>
                        <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-sm border border-slate-200/60 bg-white shrink-0 group-hover:scale-105 transition-transform">
                          <Image
                            src={module.image}
                            alt={module.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-enviro-navy group-hover:text-enviro-green transition-colors">
                        {module.title}
                      </h3>
                      <p className="mt-1.5 text-xs sm:text-sm text-enviro-gray leading-relaxed">
                        {module.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center gap-2 text-xs font-bold text-enviro-green group-hover:text-enviro-accent transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}

          {/* CTA Box filling 8th grid position */}
          
        </div>

      </div>
    </section>
  );
}
