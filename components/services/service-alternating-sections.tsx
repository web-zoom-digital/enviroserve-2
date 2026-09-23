"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { ServiceSection } from "@/data/services";

interface ServiceAlternatingSectionsProps {
  sections: ServiceSection[];
}

export function ServiceAlternatingSections({ sections }: ServiceAlternatingSectionsProps) {
  return (
    <div className="space-y-0">
      {sections.map((section, idx) => {
        // Section 1 (idx 0): Image Left (isImageLeft = true)
        // Section 2 (idx 1): Image Right (isImageLeft = false)
        // Section 3 (idx 2): Image Left (isImageLeft = true)
        // Section 4 (idx 3): Image Right (isImageLeft = false)
        const isImageLeft = idx % 2 === 0;

        return (
          <section
            key={idx}
            className={`py-16 sm:py-20 border-b border-slate-200/80 ${
              idx % 2 === 0 ? "bg-white" : "bg-slate-50"
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Image Column */}
                <motion.div
                  initial={{ opacity: 0, x: isImageLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`lg:col-span-6 ${
                    isImageLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white h-[320px] sm:h-[400px] group bg-white">
                    <Image
                      src={section.image}
                      alt={section.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" />
                  </div>
                </motion.div>

                {/* Content Column */}
                <motion.div
                  initial={{ opacity: 0, x: isImageLeft ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`lg:col-span-6 space-y-5 ${
                    isImageLeft ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-enviro-light text-enviro-green text-xs font-bold uppercase tracking-wider">
                    <span>{section.subtitle}</span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-extrabold text-enviro-navy font-heading tracking-tight leading-snug">
                    {section.title}
                  </h2>

                  <div className="space-y-3 text-sm sm:text-base text-enviro-gray leading-relaxed font-normal">
                    {section.content.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>

                  {section.points && section.points.length > 0 && (
                    <div className="space-y-2.5 pt-2">
                      {section.points.map((pt, ptIdx) => (
                        <div key={ptIdx} className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-enviro-navy">
                          <CheckCircle2 className="w-4 h-4 text-enviro-green shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>

              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
