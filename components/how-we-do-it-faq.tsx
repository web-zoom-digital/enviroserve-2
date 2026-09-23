"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "How does EnviroServe ensure safe hazardous waste pickup from our corporate facility?",
    a: "We deploy CPCB-authorized, GPS-monitored vehicles equipped with UN-certified containment bins, secondary spill kits, and trained hazardous waste logistics personnel. Every consignment is mapped under Form-9 Hazardous Waste Manifest rules.",
  },
  {
    q: "How long does it take to issue the CPCB Form-6 Destruction Certificate?",
    a: "Form-6 recycling certificates are generated digitally within 3 to 5 business days after material intake, mass verification, and initial de-manufacturing at our facility.",
  },
  {
    q: "What measures are taken to guarantee 100% data destruction for IT assets?",
    a: "We adhere strictly to DoD 5220.22-M and NIST 800-88 sanitization standards. Storage media undergo high-coercivity magnetic degaussing followed by physical mechanical shredding into sub-10mm particles, accompanied by serial-numbered Certificates of Destruction.",
  },
  {
    q: "How are EPR credits generated and transferred on the CPCB portal?",
    a: "After physical recycling and metal recovery, processing data is uploaded to the Central Pollution Control Board (CPCB) portal. Verified credits under E-Waste Rules 2022, Battery Waste Management Rules 2022, or Plastic Packaging Rules are directly transferred to your corporate account.",
  },
  {
    q: "Can corporate clients conduct an on-site audit of the recycling facility?",
    a: "Yes. We encourage client compliance teams and third-party auditors to inspect our scientific de-manufacturing lines, mass balance tracking systems, and environmental safety protocols. Virtual real-time video audit tours are also available.",
  },
  {
    q: "What happens to the materials recovered during processing?",
    a: "Recovered high-purity Black Mass (lithium, cobalt, nickel), copper foils, structural steel, and secondary plastics are sold directly to OEM refiners and battery cell manufacturers, ensuring a complete circular economy without landfill disposal.",
  },
];

export function HowWeDoItFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-emerald-600" />
            <span>Operational FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            Frequently Asked Operational Questions
          </h2>
          <p className="text-base text-slate-600">
            Clear answers about our logistics, audit procedures, data security, and CPCB portal filings.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={cn(
                  "rounded-2xl border transition-all duration-200 overflow-hidden",
                  isOpen 
                    ? "bg-white border-emerald-300 shadow-md ring-1 ring-emerald-200" 
                    : "bg-white border-slate-200 hover:border-slate-300"
                )}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 pr-4">
                    <ShieldCheck className={cn("w-5 h-5 flex-shrink-0 transition-colors", isOpen ? "text-emerald-600" : "text-slate-400")} />
                    <span className="font-heading font-bold text-base sm:text-lg text-slate-900">
                      {faq.q}
                    </span>
                  </div>
                  <div className={cn(
                    "p-1.5 rounded-xl transition-all flex-shrink-0",
                    isOpen ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"
                  )}>
                    <ChevronDown className={cn("w-5 h-5 transition-transform duration-300", isOpen ? "rotate-180" : "")} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
