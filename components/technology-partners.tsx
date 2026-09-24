"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cpu, BatteryCharging, FlaskConical, ShieldCheck, Sparkles } from "lucide-react";

const partners = [
  {
    id: "csir",
    name: "CSIR",
    subtitle: "PCB Recycling Technology",
    description: "Collaborating on advanced printed circuit board (PCB) recycling process technologies for precious metal recovery.",
    logo: "/technology-hero/csir-logo.svg",
    alt: "CSIR technology partner logo",
    badge: "PCB Recycling",
    icon: Cpu,
  },
  {
    id: "li-ion",
    name: "Lithium-Ion Recycling Technology Partner",
    subtitle: "Battery Recycling Technology",
    description: "Direct channelization and extraction workflows for lithium-ion EV battery packs and secondary cells.",
    logo: "/technology-hero/lithium-ion-technology-partner.svg",
    alt: "Lithium-Ion Recycling Technology Partner logo",
    badge: "Lithium-Ion Recycling",
    icon: BatteryCharging,
  },
  {
    id: "cmet",
    name: "C-MET, Hyderabad",
    subtitle: "Under MeitY",
    description: "Research & technological alignment in e-waste processing, hazardous scrap treatment, and critical material extraction.",
    logo: "/technology-hero/cmet-logo.svg",
    alt: "C-MET Hyderabad technology partner logo",
    badge: "Materials & Electronics Tech",
    icon: FlaskConical,
  },
];

export function TechnologyPartners() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.firstElementChild?.clientWidth || 280;
    const newIndex = Math.round(scrollPosition / (cardWidth + 16));
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < partners.length) {
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
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>TECHNOLOGY ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-enviro-navy tracking-tight">
            Our Technology Partners
          </h2>
          <p className="text-base text-enviro-gray leading-relaxed">
            Collaborating with technology and research partners to strengthen responsible recycling, material recovery and circular-economy solutions.
          </p>
        </div>

        {/* Responsive Container: Row Slider on Mobile, 3-Col Grid on Desktop */}
        <div className="relative">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden gap-4 pb-4 pt-1 -mx-4 cursor-pointer px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 md:pt-0 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible"
          >
            {partners.map((partner, index) => {
              const IconComponent = partner.icon;
              return (
                <motion.div
                  key={partner.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="snap-center shrink-0 w-[85vw] max-w-[340px] sm:w-[360px] md:w-auto md:shrink group relative bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    {/* Top Bar: Badge & Icon */}
                    <div className="flex items-center justify-between">
                      <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
                        {partner.badge}
                      </span>
                      
                    </div>

                    {/* Logo Container */}
                    <div className="h-24 w-full bg-slate-50/80 rounded-2xl p-4 flex items-center justify-center border border-slate-100 group-hover:bg-white group-hover:border-emerald-100 transition-colors duration-300">
                      <div className="relative w-full h-full">
                        <Image
                          src={partner.logo}
                          alt={partner.alt}
                          fill
                          className="object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </div>

                    {/* Text Details */}
                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors duration-200">
                        {partner.name}
                      </h3>
                      <div className="text-xs font-bold uppercase tracking-wide text-emerald-700">
                        {partner.subtitle}
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed pt-1">
                        {partner.description}
                      </p>
                    </div>
                  </div>

                  {/* Subtle Card Footer / Indicator */}
                  
                </motion.div>
              );
            })}
          </div>

          {/* Slider Pagination Control Dots (Mobile only) */}
          <div className="flex items-center justify-center gap-2 mt-4 md:hidden">
            {partners.map((_, idx) => (
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
