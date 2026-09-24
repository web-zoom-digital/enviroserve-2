import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HowWeDoItTimeline } from "@/components/how-we-do-it-timeline";
import { HowWeDoItFAQ } from "@/components/how-we-do-it-faq";
import { 
  ShieldCheck, 
  Truck, 
  Scale, 
  Wrench, 
  Factory, 
  FileCheck2, 
  ArrowRight,
  Cpu,
  BatteryCharging,
  Layers,
  Sparkles,
  Award,
  CheckCircle2,
  FileText,
  Lock,
  Flame,
  ChevronRight,
  PhoneCall
} from "lucide-react";

export const metadata: Metadata = {
  title: "How We Do It | Scientific Recycling & Operational Workflow | EnviroServe",
  description:
    "Explore EnviroServe's 6-step closed-loop recycling lifecycle: Collection, Assessment, Safe Dismantling, Material Recovery, Eco-Refining, and CPCB Portal Reporting.",
};

const detailedSteps = [
  {
    step: "01",
    title: "Collection & Pan-India Hazardous Logistics",
    desc: "Deploying authorized, GPS-tracked vehicles equipped with UN-certified containment boxes to collect e-waste and spent battery packs directly from corporate facilities under Form-9 manifest compliance.",
    bullets: ["UN-certified containment bins", "Form-9 Hazardous Manifest tracking", "24-48 hour Pan-India pickup SLA"],
    icon: Truck,
  },
  {
    step: "02",
    title: "Assessment, Weighing & Barcode Tagging",
    desc: "Every incoming material batch undergoes digital mass measurement, barcode lot assignment, and diagnostic chemistry classification to maintain an immutable chain of custody.",
    bullets: ["Barcode lot serialization", "Calibrated weighbridge measurement", "Hazardous chemistry sorting"],
    icon: Scale,
  },
  {
    step: "03",
    title: "Safe Dismantling & Depollution",
    desc: "Manual de-manufacturing to isolate hazardous elements (CRTs, mercury switches, capacitors), complete electrical discharging of battery cells, and DoD-level data sanitization.",
    bullets: ["Deep battery cell discharging", "DoD 5220.22-M data destruction", "Capacitor & mercury isolation"],
    icon: Wrench,
  },
  {
    step: "04",
    title: "Mechanical Shredding & Metal Recovery",
    desc: "Multi-stage automated granulation, density-based air classification, eddy-current non-ferrous separation, and extraction of high-purity Black Mass (Cobalt, Lithium, Nickel).",
    bullets: ["Sub-10mm industrial granulation", "Eddy-current metal separation", "High-purity Black Mass recovery"],
    icon: Factory,
  },
  {
    step: "05",
    title: "Closed-Loop Refining & Supply Chain Re-Entry",
    desc: "Hydrometallurgical refining and smelting returning virgin-grade base metals (Copper, Aluminum), secondary plastics, and critical minerals back into industrial manufacturing.",
    bullets: ["98%+ metal purity recovery", "Virgin-grade copper & aluminum", "Zero-landfill disposal policy"],
    icon: ShieldCheck,
  },
  {
    step: "06",
    title: "Documentation & CPCB Portal Filing",
    desc: "Issuing serial-matched Form-6 Recycling & Destruction Certificates and uploading verified EPR credits directly to Central Pollution Control Board (CPCB) compliance portals.",
    bullets: ["Digital Form-6 certificate issuance", "CPCB portal target credit transfer", "100% legal audit verification"],
    icon: FileCheck2,
  },
];

const technologies = [
  {
    title: "Inert-Gas Lithium Shredder",
    desc: "Argon & nitrogen blanketed shredding chamber preventing thermal runaway during EV battery pack processing.",
    icon: BatteryCharging,
    stat: "Zero Fire Hazard",
  },
  {
    title: "Automated Granulator & Air Classifier",
    desc: "High-speed rotor knives separating circuit board components from copper foils and plastic polymers with 99% efficiency.",
    icon: Cpu,
    stat: "sub-10mm Granulation",
  },
  {
    title: "Magnetic Degausser & Hard Drive Shredder",
    desc: "High-coercivity magnetic field degaussing followed by physical mechanical destruction of storage drives.",
    icon: Lock,
    stat: "DoD 5220.22-M Standard",
  },
  {
    title: "Solar Panel Glass-Silicon Separator",
    desc: "Thermal-mechanical delamination isolating photovoltaic tempered glass, silver busbars, and EVA film layers.",
    icon: Layers,
    stat: "95% Solar Glass Recovery",
  },
];

const complianceBadges = [
  { title: "CPCB & SPCB Authorized", desc: "Official state & central pollution board authorizations for hazardous waste handling.", icon: Award },
  { title: "ISO Certified Facility", desc: "Certified under ISO 9001 (Quality), ISO 14001 (Environment), & ISO 45001 (Safety).", icon: CheckCircle2 },
  { title: "Form-6 & Form-9 Compliant", desc: "Digital Form-6 destruction certificates and Form-9 manifest generation.", icon: FileText },
  { title: "100% Audit Protection", desc: "End-to-end digital audit trail protecting corporate compliance teams.", icon: ShieldCheck },
];

export default function HowWeDoItPage() {
  return (
    <div className="overflow-x-hidden bg-white min-h-screen">
      
      {/* 1. HERO SECTION (Large full scale matching Home Page hero) */}
      <section className="relative w-full min-h-[650px] sm:min-h-[720px] lg:h-[80vh] flex items-center justify-center overflow-hidden text-white pt-12">
        {/* Background DSLR Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-howwedoit-dslr.jpg"
            alt="How We Do It Facility View DSLR"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 pt-12">
          

          <h1 
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading text-white tracking-tight leading-tight max-w-4xl mx-auto animate-in slide-in-from-bottom-3 duration-500"
            style={{ textShadow: "0 4px 20px rgba(0, 0, 0, 0.9), 0 2px 6px rgba(0, 0, 0, 0.95)" }}
          >
            How We Do It. <br className="hidden sm:inline" />
            Scientific Recycling Lifecycle.
          </h1>

          <p 
            className="text-base sm:text-xl text-slate-100 max-w-3xl mx-auto leading-relaxed font-medium animate-in slide-in-from-bottom-4 duration-500"
            style={{ textShadow: "0 2px 12px rgba(0, 0, 0, 0.9)" }}
          >
            From Pan-India GPS-tracked logistics pickup to CPCB Form-6 certificate issuance, explore our 6-stage scientific de-manufacturing, material recovery, and zero-landfill processing lifecycle.
          </p>
        </div>
      </section>

      {/* 6-Step Interactive Timeline Section */}
      <HowWeDoItTimeline />

      {/* Deep-Dive Operational Mechanics Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <span>Deep-Dive Processing</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
              Detailed Workflow Mechanics
            </h2>
            <p className="text-base text-slate-600">
              Every stage of material handling adheres strictly to the E-Waste Management Rules 2022 & Battery Waste Management Rules 2022.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedSteps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div 
                  key={idx} 
                  className="p-7 rounded-3xl bg-slate-50/80 border border-slate-200/80 space-y-5 shadow-sm hover:shadow-xl hover:border-emerald-300 hover:bg-white transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-3xl font-extrabold font-heading text-emerald-600 group-hover:scale-110 transition-transform">
                      {s.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-slate-900 leading-snug group-hover:text-emerald-700 transition-colors">
                    {s.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>

                  <div className="pt-3 border-t border-slate-200/60 space-y-2">
                    {s.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Advanced Technology & Equipment Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950 border border-emerald-700 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <span>Machinery & Innovation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
              State-of-the-Art Processing Machinery
            </h2>
            <p className="text-base text-slate-300">
              Our automated de-manufacturing machinery maximizes material purity while ensuring zero safety hazards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((t, idx) => {
              const TechIcon = t.icon;
              return (
                <div key={idx} className="p-6 rounded-3xl bg-slate-800/90 border border-slate-700 space-y-4 hover:border-emerald-500/80 transition-all duration-300 group">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-emerald-950 text-emerald-400 border border-emerald-800 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                      <TechIcon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
                      {t.stat}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {t.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Safety & Compliance Badges Grid */}
      <section className="py-20 bg-emerald-50/60 border-y border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
              Complete Regulatory & Legal Guarantee
            </h2>
            <p className="text-sm text-slate-600">
              Eliminate legal liability with CPCB-compliant documentation and certified processes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceBadges.map((b, idx) => {
              const BadgeIcon = b.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-emerald-200/80 space-y-3 shadow-sm text-center">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <BadgeIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{b.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Operational FAQ Section */}
      <HowWeDoItFAQ />

      {/* High-Converting Bottom CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white space-y-6 shadow-2xl relative overflow-hidden border border-emerald-800/40">
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/80 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/50">
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              <span>Schedule Facility Audit</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              Ready to Audit Our Facility or Book Pickup?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Schedule an on-site compliance walk-through or arrange Pan-India hazardous waste pickup with our operational desk.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-emerald-600/30 transition-all scale-100 hover:scale-[1.03] active:scale-[0.98]"
              >
                <span>Book Facility Audit</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold px-8 py-4 rounded-2xl border border-slate-700 transition-all"
              >
                <span>Contact Logistics Team</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
