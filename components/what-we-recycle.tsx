"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, BatteryCharging, Battery, Boxes, Sparkles, Sun } from "lucide-react";

const categoryCards = [
  {
    title: "E-Waste",
    subtitle: "Electronics & Tech Scrap",
    description: "Scientific de-manufacturing of computers, servers, PCBs, telecom hardware, and consumer devices.",
    image: "/images/categories/ewaste.webp",
    href: "/services/e-waste-recycling",
    icon: Cpu,
    colorStyle: "bg-emerald-500/10 text-emerald-600 border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white",
    badgeBg: "bg-emerald-50 text-emerald-700",
  },
  {
    title: "Li-Ion Batteries",
    subtitle: "EV Packs & Energy Storage",
    description: "Closed-loop material recovery from EV packs, ESS units, and portable lithium cells.",
    image: "/images/categories/liion.png",
    href: "/services/li-ion-battery-recycling",
    icon: BatteryCharging,
    colorStyle: "bg-amber-500/10 text-amber-600 border-amber-200 group-hover:bg-amber-500 group-hover:text-white",
    badgeBg: "bg-amber-50 text-amber-700",
  },
  {
    title: "Solar Scrap",
    subtitle: "Photovoltaic Modules & Glass",
    description: "Thermal delamination and glass, silver, and silicon recovery from decommissioned solar panels.",
    image: "/images/hero/hero-home-dslr.jpg",
    href: "/services/solar-panel-recycling",
    icon: Sun,
    colorStyle: "bg-yellow-500/10 text-yellow-600 border-yellow-200 group-hover:bg-yellow-500 group-hover:text-white",
    badgeBg: "bg-yellow-50 text-yellow-800",
  },
  {
    title: "Battery Waste",
    subtitle: "Lead-Acid & Industrial Cells",
    description: "Compliant processing of lead-acid, UPS, industrial, and secondary battery cells.",
    image: "/images/categories/battery.webp",
    href: "/services/battery-waste-epr",
    icon: Battery,
    colorStyle: "bg-blue-500/10 text-blue-600 border-blue-200 group-hover:bg-blue-600 group-hover:text-white",
    badgeBg: "bg-blue-50 text-blue-700",
  },
  {
    title: "Metal Waste",
    subtitle: "Ferrous & Non-Ferrous Alloys",
    description: "Ferrous and non-ferrous industrial metal recovery from decommissioned equipment.",
    image: "/images/categories/metal.png",
    href: "/services/reverse-logistics",
    icon: Boxes,
    colorStyle: "bg-slate-500/10 text-slate-700 border-slate-200 group-hover:bg-slate-800 group-hover:text-white",
    badgeBg: "bg-slate-100 text-slate-700",
  },
  {
    title: "Other Recyclables",
    subtitle: "Tyres, Used Oil & Industrial Scrap",
    description: "Comprehensive take-back solutions for waste tyres, used oil, and industrial scrap.",
    image: "/images/categories/recyclables.jpg",
    href: "/services/multi-category-epr",
    icon: Sparkles,
    colorStyle: "bg-teal-500/10 text-teal-600 border-teal-200 group-hover:bg-teal-600 group-hover:text-white",
    badgeBg: "bg-teal-50 text-teal-700",
  },
];

export function WhatWeRecycle() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.firstElementChild?.clientWidth || 280;
    const newIndex = Math.round(scrollPosition / (cardWidth + 16));
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < categoryCards.length) {
      setActiveIndex(newIndex);
    }
  };

  const scrollToSlide = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.firstElementChild?.clientWidth || 280;
    container.scrollTo({
      left: index * (cardWidth + 16),
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  return (
    <section className="py-16 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-enviro-light text-enviro-green text-xs font-bold uppercase tracking-wider">
            <span>Recycle More • Preserve Nature</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-enviro-navy tracking-tight">
            What We Recycle & Recover
          </h2>
          <p className="text-base text-enviro-gray">
            Giving materials a second life through certified zero-landfill recycling — keeping land, rivers, and forests clean so nature can thrive.
          </p>
        </div>

        {/* Responsive Container: Row Slider on Mobile, Grid on Desktop */}
        <div className="relative">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden gap-4 pb-4 pt-1 -mx-4 cursor-pointer px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 md:pt-0 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible"
          >
            {categoryCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="snap-center shrink-0 w-[85vw] max-w-[340px] sm:w-[360px] md:w-auto md:shrink flex flex-col"
                >
                  <Link
                    href={card.href}
                    className="group block bg-enviro-bg rounded-2xl p-6 border border-slate-200/80 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      {/* Top Header: Content-matched Icon Badge & Image */}
                      <div className="flex items-center justify-between">
                        <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-all duration-300 ${card.colorStyle}`}>
                          <Icon className="w-7 h-7" />
                        </div>

                        <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-md border border-slate-100 bg-white transition-transform duration-300 group-hover:scale-110 shrink-0">
                          <Image
                            src={card.image}
                            alt={card.title}
                            fill
                            className="object-cover"
                            sizes="64px"
                            quality={80}
                          />
                        </div>
                      </div>

                      {/* Title, Subtitle Badge & Description */}
                      <div className="space-y-1.5">
                        <div className={`inline-block px-2.5 py-0.5 rounded text-[11px] font-bold ${card.badgeBg}`}>
                          {card.subtitle}
                        </div>
                        <h3 className="text-xl font-bold text-enviro-navy group-hover:text-enviro-green transition-colors">
                          {card.title}
                        </h3>
                        <p className="text-sm text-enviro-gray leading-relaxed pt-1">
                          {card.description}
                        </p>
                      </div>
                    </div>

                    {/* Explore Arrow Button Footer */}
                    <div className="pt-6 flex items-center gap-2 text-sm font-bold text-enviro-green group-hover:text-enviro-accent transition-colors">
                      <span>Explore Stream</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Slider Pagination Controls (Mobile only) */}
          <div className="flex items-center justify-center gap-2 mt-4 md:hidden">
            {categoryCards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === idx
                    ? "w-7 h-2.5 bg-emerald-600"
                    : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
