"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQItem } from "@/data/services";

interface ServiceFAQProps {
  faqs: FAQItem[];
  shortTitle: string;
}

export function ServiceFAQ({ faqs, shortTitle }: ServiceFAQProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-enviro-light text-enviro-green text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-enviro-green" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-enviro-navy font-heading tracking-tight">
            QUESTIONS ABOUT {shortTitle.toUpperCase()}
          </h2>
          <p className="text-base text-enviro-gray">
            Clear, practical answers regarding our service workflow, legal compliance, and material recovery.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="bg-slate-50 border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-enviro-navy hover:text-enviro-green transition-colors focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-enviro-accent">Q.</span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-enviro-green transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-enviro-gray leading-relaxed border-t border-slate-200/50 pl-11 font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
