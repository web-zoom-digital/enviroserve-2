"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, ShieldCheck, Truck, HardDrive, ArrowRight } from "lucide-react";

const coreServices = [
  {
    title: "PRO Services",
    subtitle: "Producer Responsibility Organisation",
    description: "Turnkey operational support managing post-consumer product lifecycles, ground-level collection bins, awareness drives, and verified channelisation.",
    image: "/images/services/77b38d02-7a38-4c16-b60b-cd637fd8aa56.jpeg",
    href: "/services/pro-services",
    icon: Briefcase,
    highlights: ["Ground-level collection network", "Public awareness campaigns", "Audit-ready reporting"],
  },
  {
    title: "EPR Compliance",
    subtitle: "Extended Producer Responsibility",
    description: "Structured registration, target calculation, verified credit generation, and annual filing across CPCB single-window portals.",
    image: "/images/services/3775146-1024x683.jpg",
    href: "/services/e-waste-epr",
    icon: ShieldCheck,
    highlights: ["CPCB portal execution", "Credit procurement & transfer", "100% Audit immunity"],
  },
  {
    title: "Reverse Logistics",
    subtitle: "Pan-India Secure Transportation",
    description: "Hazardous-certified transit fleet, GPS tracking, UN-rated packaging, and Form-9 manifest compliance for bulk scrap pickups.",
    image: "/images/services/WhatsApp-Image-2025-12-16-at-15.16.20.jpeg",
    href: "/services/reverse-logistics",
    icon: Truck,
    highlights: ["Pan-India pickup fleet", "Form-9 manifest execution", "Hazardous material safety"],
  },
  {
    title: "Asset Liquidation",
    subtitle: "Enterprise IT Disposal & Security",
    description: "Certified DoD 5220.22-M & NIST 800-88 data sanitization, physical storage shredding, and maximum residual value recovery.",
    image: "/images/services/360_F_319512685_63GEqom3zgl15eTV97QSrqL8i28D3XJ0.jpg",
    href: "/services/asset-liquidation",
    icon: HardDrive,
    highlights: ["Certified data destruction", "On-site mobile shredding", "Fair market valuation"],
  },
];

export function CoreServices() {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-enviro-green text-xs font-bold uppercase tracking-wider">
            <span>Enterprise Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-enviro-navy tracking-tight">
            Our Core Services
          </h2>
          <p className="text-base text-enviro-gray">
            Proven corporate solutions helping businesses meet environmental standards, recover asset value, and manage end-of-life logistics.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Image Banner */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-enviro-navy/80 via-enviro-navy/30 to-transparent" />
                    <div className="absolute top-4 left-4 p-3 rounded-2xl bg-white/90 backdrop-blur-md text-enviro-green shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="absolute bottom-4 left-6 text-white">
                      <div className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                        {service.subtitle}
                      </div>
                      <h3 className="text-2xl font-bold font-heading">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-sm text-enviro-gray leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      {service.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2 text-xs font-semibold text-enviro-navy">
                          <div className="w-1.5 h-1.5 rounded-full bg-enviro-accent" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <Link
                    href={service.href}
                    className="inline-flex items-center justify-between w-full bg-enviro-light hover:bg-enviro-green text-enviro-green hover:text-white font-bold text-sm px-5 py-3 rounded-xl transition-colors duration-300"
                  >
                    <span>Learn More Solutions</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
