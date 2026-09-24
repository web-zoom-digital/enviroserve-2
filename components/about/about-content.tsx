"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { companyInfo } from "@/data/company";
import { ContactForm } from "@/components/contact-form";
import { 
  Cpu, 
  BatteryCharging, 
  ShieldCheck, 
  Truck, 
  Briefcase, 
  HardDrive, 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  Eye, 
  Factory, 
  FileCheck2, 
  Recycle, 
  Building2, 
  Globe2, 
  Boxes, 
  ChevronDown, 
  PhoneCall, 
  Mail, 
  MapPin, 
  Sparkles,
  HelpCircle,
  Layers,
  BarChart3,
  Wrench,
  Scale,
  Sun
} from "lucide-react";

// Section 3: What We Do Cards Data
const whatWeDoServices = [
  {
    title: "E-Waste Recycling",
    category: "Electronics & Tech Scrap",
    description: "Scientific de-manufacturing of computers, servers, PCBs, telecom hardware, and consumer electronics under zero-landfill protocols.",
    href: "/services/e-waste-recycling",
    icon: Cpu,
    image: "/images/categories/ewaste.webp",
    colorStyle: "bg-emerald-500/10 text-emerald-600 border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white",
  },
  {
    title: "Li-Ion Battery Recycling",
    category: "EV & Energy Storage",
    description: "Closed-loop material recovery from electric vehicle battery packs, ESS storage units, and portable lithium cells.",
    href: "/services/li-ion-battery-recycling",
    icon: BatteryCharging,
    image: "/images/categories/liion.png",
    colorStyle: "bg-amber-500/10 text-amber-600 border-amber-200 group-hover:bg-amber-500 group-hover:text-white",
  },
  {
    title: "Solar Panel Recycling",
    category: "Photovoltaic Modules",
    description: "Thermal delamination and glass, aluminum, silver, and silicon extraction from decommissioned PV modules.",
    href: "/services/solar-panel-recycling",
    icon: Sun,
    image: "/images/hero/hero-home-dslr.jpg",
    colorStyle: "bg-yellow-500/10 text-yellow-600 border-yellow-200 group-hover:bg-yellow-600 group-hover:text-white",
  },
  {
    title: "EPR Solutions",
    category: "CPCB Portal Compliance",
    description: "Single-window advisory, target mapping, credit procurement, and annual return filing for E-Waste, Plastics, Batteries, Tyres, and Oil.",
    href: "/services/e-waste-epr",
    icon: ShieldCheck,
    image: "/images/categories/plastic.webp",
    colorStyle: "bg-green-500/10 text-green-600 border-green-200 group-hover:bg-green-600 group-hover:text-white",
  },
  {
    title: "Reverse Logistics",
    category: "Pan-India Fleet",
    description: "GPS-monitored, UN-certified hazardous waste transit fleet providing seamless corporate take-back logistics nationwide.",
    href: "/services/reverse-logistics",
    icon: Truck,
    image: "/images/categories/metal.png",
    colorStyle: "bg-blue-500/10 text-blue-600 border-blue-200 group-hover:bg-blue-600 group-hover:text-white",
  },
  {
    title: "PRO Services",
    category: "Turnkey Operations",
    description: "Producer Responsibility Organisation services running physical take-back centers, aggregator networks, and public awareness campaigns.",
    href: "/services/pro-services",
    icon: Briefcase,
    image: "/images/services/77b38d02-7a38-4c16-b60b-cd637fd8aa56.jpeg",
    colorStyle: "bg-purple-500/10 text-purple-600 border-purple-200 group-hover:bg-purple-600 group-hover:text-white",
  },
  {
    title: "Asset Liquidation",
    category: "IT Asset Disposal",
    description: "Enterprise IT asset valuation, residual value recovery, and certified DoD 5220.22-M data wiping and physical data destruction.",
    href: "/services/asset-liquidation",
    icon: HardDrive,
    image: "/images/services/360_F_319512685_63GEqom3zgl15eTV97QSrqL8i28D3XJ0.jpg",
    colorStyle: "bg-teal-500/10 text-teal-600 border-teal-200 group-hover:bg-teal-600 group-hover:text-white",
  },
];

// Section 4: Challenges We Help Businesses Solve
const businessChallenges = [
  {
    number: "01",
    title: "Managing End-of-Life Electronics",
    description: "Preventing toxic heavy metal leaching and informal scrap burning through certified scientific de-manufacturing.",
    icon: Cpu,
  },
  {
    number: "02",
    title: "Responsible Battery Waste Handling",
    description: "Eliminating thermal runaway fire hazards while recovering critical minerals like Lithium, Cobalt, and Nickel.",
    icon: BatteryCharging,
  },
  {
    number: "03",
    title: "EPR Compliance & Documentation",
    description: "Navigating complex CPCB/SPCB portal targets, credit generation, and annual filings without risk of audit penalties.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Collection & Reverse Logistics",
    description: "Eliminating transit hazards with GPS-monitored, UN-certified hazardous waste transport fleets across India.",
    icon: Truck,
  },
  {
    number: "05",
    title: "Responsible Recycling & Recovery",
    description: "Diverting post-industrial scrap and electronics into virgin-grade secondary raw materials for manufacturing.",
    icon: Recycle,
  },
  {
    number: "06",
    title: "Waste Traceability & Documentation",
    description: "Delivering tamper-proof Form-6 recycling certificates and transparent mass-balance audit trail logs.",
    icon: FileCheck2,
  },
];

// Section 5: How EnviroServe Helps (Process Flow)
const workflowSteps = [
  {
    step: "01",
    title: "Understand the Requirement",
    description: "Audit client waste metrics, product sales volumes, and regulatory compliance obligations.",
    icon: BarChart3,
  },
  {
    step: "02",
    title: "Plan Collection & Compliance",
    description: "Formulate customized take-back logistics schedules and CPCB target mapping.",
    icon: Scale,
  },
  {
    step: "03",
    title: "Manage Logistics",
    description: "Dispatch GPS-tracked, UN-certified transport containers for secure on-site pickup.",
    icon: Truck,
  },
  {
    step: "04",
    title: "Responsible Channelisation",
    description: "Transport waste streams directly to CPCB/SPCB authorized recycling plants.",
    icon: Factory,
  },
  {
    step: "05",
    title: "Recycling & Recovery",
    description: "Execute scientific de-manufacturing, automated shredding, and secondary material extraction.",
    icon: Wrench,
  },
  {
    step: "06",
    title: "Documentation & Reporting",
    description: "Issue Form-6 Destruction Certificates and upload verified EPR credits to CPCB portals.",
    icon: FileCheck2,
  },
];

// Section 6: Our Approach Steps
const approachSteps = [
  { step: "01", title: "Collection", desc: "Pan-India secure GPS pickup" },
  { step: "02", title: "Sorting & Assessment", desc: "Diagnostic chemistry classification" },
  { step: "03", title: "Processing", desc: "De-manufacturing & depollution" },
  { step: "04", title: "Material Recovery", desc: "Black mass & metal extraction" },
  { step: "05", title: "Responsible Recycling", desc: "Zero-landfill circular re-entry" },
  { step: "06", title: "Documentation", desc: "Audit-ready Form-6 & EPR filing" },
];

// Section 9: Who We Work With
const clientCategories = [
  { title: "Manufacturers", desc: "Electrical, electronic equipment (EEE) OEMs and battery cell producers.", icon: Factory },
  { title: "Importers", desc: "Tech hardware, lithium cell, base oil, and lubricant importers.", icon: Globe2 },
  { title: "Brand Owners (PIBOs)", desc: "Consumer electronics brands, FMCG packaging users, and appliance makers.", icon: Building2 },
  { title: "Corporates", desc: "Enterprise IT companies, commercial banks, and tech parks updating hardware.", icon: Briefcase },
  { title: "Enterprises", desc: "Industrial manufacturing plants, utility operators, and data centers.", icon: Boxes },
  { title: "Technology Businesses", desc: "Telecom infrastructure providers and server facility operators.", icon: Cpu },
  { title: "Retailers", desc: "E-commerce platforms and retail chains deploying take-back channels.", icon: Sparkles },
];

// Section 10: Why EnviroServe
const whyChooseUs = [
  { title: "Responsible Recycling", desc: "100% adherence to CPCB & SPCB zero-landfill processing standards.", icon: Recycle },
  { title: "E-Waste Expertise", desc: "Specialized de-manufacturing and precious metal extraction capabilities.", icon: Cpu },
  { title: "Battery Recycling", desc: "Advanced closed-loop recovery of Cobalt, Lithium, Nickel, and Lead.", icon: BatteryCharging },
  { title: "EPR Support", desc: "Single-window portal registration, credit procurement, and annual filing.", icon: ShieldCheck },
  { title: "Reverse Logistics", desc: "Pan-India GPS-tracked fleet with UN-certified hazardous containment.", icon: Truck },
  { title: "Structured Management", desc: "Complete mass-balance audit trails and verified Form-6 certificates.", icon: FileCheck2 },
];

// Section 11: FAQ Accordions
const faqs = [
  {
    question: "What types of waste does EnviroServe handle?",
    answer: "EnviroServe specializes in e-waste (computers, servers, PCBs, telecom hardware), lithium-ion batteries (EV packs, ESS units, portable cells), lead-acid batteries, plastic packaging waste (Categories I-IV), waste tyres, used oil, and industrial metal scrap.",
  },
  {
    question: "Does EnviroServe provide e-waste recycling services?",
    answer: "Yes, EnviroServe operates CPCB-authorized e-waste recycling operations—providing scientific manual dismantling, mechanical shredding, metal recovery, and certified physical data destruction.",
  },
  {
    question: "Does EnviroServe support EPR requirements?",
    answer: "Yes, EnviroServe provides turnkey Extended Producer Responsibility (EPR) advisory and credit fulfillment across E-Waste, Plastics, Batteries, Tyres, and Used Oil under Central Pollution Control Board (CPCB) portals.",
  },
  {
    question: "Does EnviroServe handle Li-ion battery recycling?",
    answer: "Yes, we process spent Lithium-Ion batteries from Electric Vehicles (EVs), energy storage systems (ESS), and portable electronics—safely discharging cells and recovering critical minerals like Cobalt, Lithium, Nickel, and Manganese.",
  },
  {
    question: "How does EnviroServe manage collection and recycling?",
    answer: "We deploy a pan-India fleet of authorized, GPS-tracked vehicles equipped with UN-certified containment vessels to collect waste directly from client facilities and transport it to licensed processing plants.",
  },
  {
    question: "How can a business contact EnviroServe?",
    answer: "You can reach our corporate advisory team by calling toll-free at 1800 309 9943 / 011-43510683, emailing info@enviroserve.in, or filling out the contact form below.",
  },
];

export function AboutContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-24 pb-12 overflow-x-hidden">

      {/* ==========================================
          1. ABOUT HERO
      ========================================== */}
      <section className="relative w-full min-h-[650px] sm:min-h-[720px] lg:h-[80vh] flex items-center justify-center overflow-hidden text-white pt-12">
        {/* Background DSLR Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-about-dslr.jpg"
            alt="EnviroServe About Hero DSLR view"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 pt-12">
          {/* <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/80 backdrop-blur-md text-emerald-300 text-xs sm:text-sm font-bold uppercase tracking-widest border border-emerald-400/40 shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>RECYCLE MORE • ENJOY NATURE FOR MORE</span>
          </motion.div> */}

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading text-white tracking-tight leading-tight max-w-4xl mx-auto"
            style={{ textShadow: "0 4px 20px rgba(0, 0, 0, 0.9), 0 2px 6px rgba(0, 0, 0, 0.95)" }}
          >
            Recycling More for a Cleaner Planet. <br className="hidden sm:inline" />
            Living in Harmony with Nature.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl text-slate-100 max-w-3xl mx-auto leading-relaxed font-medium"
            style={{ textShadow: "0 2px 12px rgba(0, 0, 0, 0.9)" }}
          >
            At EnviroServe, we believe that when we recycle more, we protect our lakes, forests, and clean air — allowing everyone to enjoy nature for more years to come.
          </motion.p>
        </div>
      </section>

      {/* ==========================================
          2. WHO WE ARE
      ========================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image Column */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 h-[380px] sm:h-[460px] group">
                <Image
                  src="/images/services/77b38d02-7a38-4c16-b60b-cd637fd8aa56.jpeg"
                  alt="EnviroServe Facility & Operations"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-enviro-navy/40 to-transparent" />
              </div>
            </motion.div>

            {/* Right Text Column */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-enviro-light text-enviro-green text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-enviro-green" />
                <span>WHO WE ARE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-enviro-navy font-heading tracking-tight leading-snug">
                {companyInfo.name}
              </h2>

              <p className="text-base text-enviro-gray leading-relaxed">
                Since our inception, we have worked at the intersection of innovation, awareness, and action—helping corporate institutions, manufacturers, and industrial brands transition from traditional linear waste disposal to sustainable, circular models of waste recovery and material reuse.
              </p>

              <p className="text-base text-enviro-gray leading-relaxed">
                Based in New Delhi, we provide specialized expertise in e-waste recycling, lithium-ion battery extraction, plastic packaging waste management, and single-window Extended Producer Responsibility (EPR) advisory across India.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm font-semibold text-enviro-navy">
                  <CheckCircle2 className="w-5 h-5 text-enviro-accent shrink-0" />
                  <span>Certified CPCB & SPCB Zero-Landfill Processing Partner</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-enviro-navy">
                  <CheckCircle2 className="w-5 h-5 text-enviro-accent shrink-0" />
                  <span>Pan-India GPS-Monitored Reverse Logistics Fleet</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-enviro-navy">
                  <CheckCircle2 className="w-5 h-5 text-enviro-accent shrink-0" />
                  <span>Certified Enterprise Data Destruction & Asset Liquidation</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ==========================================
          3. WHAT WE DO
      ========================================== */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-enviro-green text-xs font-bold uppercase tracking-wider shadow-xs">
              <Layers className="w-4 h-4 text-enviro-green" />
              <span>OUR CORE CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-enviro-navy font-heading tracking-tight">
              WHAT WE DO
            </h2>
            <p className="text-base text-enviro-gray">
              We deliver specialized waste recovery, compliance advisory, and reverse logistics solutions tailored for modern enterprise operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatWeDoServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                >
                  <Link
                    href={service.href}
                    className="group block bg-white rounded-3xl p-7 border border-slate-200/80 shadow-card hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col justify-between"
                  >
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-all duration-300 shadow-sm ${service.colorStyle}`}>
                          <Icon className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-slate-100 bg-white shadow-sm shrink-0 transition-transform duration-300 group-hover:scale-110">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-700 uppercase tracking-wider">
                          {service.category}
                        </span>
                        <h3 className="text-xl font-bold text-enviro-navy group-hover:text-enviro-green transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm text-enviro-gray leading-relaxed pt-1">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="pt-6 flex items-center gap-2 text-sm font-bold text-enviro-green group-hover:text-enviro-accent transition-colors">
                      <span>Explore Service</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ==========================================
          4. CHALLENGES WE HELP BUSINESSES SOLVE
      ========================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-enviro-light text-enviro-green text-xs font-bold uppercase tracking-wider">
              <Wrench className="w-4 h-4 text-enviro-green" />
              <span>REAL-WORLD SOLUTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-enviro-navy font-heading tracking-tight">
              CHALLENGES WE HELP BUSINESSES SOLVE
            </h2>
            <p className="text-base text-enviro-gray">
              Helping corporate enterprises, manufacturers, and brand owners address critical operational and environmental pain points.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessChallenges.map((challenge, idx) => {
              const Icon = challenge.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all duration-300 shadow-sm space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-enviro-green shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-3xl font-extrabold font-heading text-emerald-600/80">
                        {challenge.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-enviro-navy">{challenge.title}</h3>
                    <p className="text-sm text-enviro-gray leading-relaxed">{challenge.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ==========================================
          5. HOW ENVIROSERVE HELPS (PROCESS WORKFLOW)
      ========================================== */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-800">
              <BarChart3 className="w-4 h-4 text-emerald-400" />
              <span>OPERATIONAL METHODOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
              HOW WE HELP BUSINESSES
            </h2>
            <p className="text-base text-slate-300">
              Our 6-step structured workflow ensures seamless execution, full environmental compliance, and complete legal verification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workflowSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700/80 hover:border-emerald-500/50 transition-all duration-300 space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-2xl font-extrabold font-heading text-emerald-400">
                        {step.step}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ==========================================
          6. OUR APPROACH
      ========================================== */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-enviro-light text-enviro-green text-xs font-bold uppercase tracking-wider">
              <Recycle className="w-4 h-4 text-enviro-green" />
              <span>SUSTAINABLE METHODOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-enviro-navy font-heading tracking-tight">
              OUR APPROACH TO RESPONSIBLE RECYCLING
            </h2>
            <p className="text-base text-enviro-gray">
              From physical intake to final CPCB portal credit submission, our process guarantees maximum material recovery.
            </p>
          </div>

          {/* Sequential Approach Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {approachSteps.map((app, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2 hover:bg-enviro-light/60 transition-all duration-300 shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-enviro-green text-white font-extrabold text-xs flex items-center justify-center mx-auto">
                  {app.step}
                </div>
                <h3 className="text-sm font-bold text-enviro-navy">{app.title}</h3>
                <p className="text-[11px] text-enviro-gray leading-tight">{app.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ==========================================
          7. MISSION & 8. VISION
      ========================================== */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Mission Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-card space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-enviro-light text-enviro-green flex items-center justify-center border border-emerald-200">
                  <Target className="w-8 h-8" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-enviro-green">
                  OUR PURPOSE
                </div>
                <h3 className="text-3xl font-bold font-heading text-enviro-navy">
                  Our Mission
                </h3>
                <p className="text-base text-enviro-gray leading-relaxed">
                  To engineer world-class, scientific recycling infrastructure and seamless EPR compliance systems that protect natural ecosystems, prevent toxic leaching, and return critical secondary materials back into industrial manufacturing.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3 text-xs font-semibold text-enviro-navy">
                <CheckCircle2 className="w-4 h-4 text-enviro-accent" />
                <span>Zero-Landfill Resource Recovery Protocol</span>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-card space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-enviro-accent flex items-center justify-center border border-emerald-200">
                  <Eye className="w-8 h-8" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-enviro-accent">
                  OUR FUTURE GOAL
                </div>
                <h3 className="text-3xl font-bold font-heading text-enviro-navy">
                  Our Vision
                </h3>
                <p className="text-base text-enviro-gray leading-relaxed">
                  To be India&apos;s most trusted circular economy catalyst—setting benchmarks for environmental stewardship, zero-landfill processing, and 100% transparent regulatory advisory for enterprises nationwide.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3 text-xs font-semibold text-enviro-navy">
                <CheckCircle2 className="w-4 h-4 text-enviro-accent" />
                <span>Pan-India Sustainable Circular Economy Benchmark</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ==========================================
          9. WHO WE WORK WITH
      ========================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-enviro-light text-enviro-green text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-enviro-green" />
              <span>KEY CLIENTELE SECTORS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-enviro-navy font-heading tracking-tight">
              WHO WE WORK WITH
            </h2>
            <p className="text-base text-enviro-gray">
              Empowering diverse business categories with verified recycling execution and regulatory compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="p-6 rounded-2xl bg-enviro-bg border border-slate-200/90 hover:border-emerald-400 transition-all duration-300 space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-white text-enviro-green flex items-center justify-center border border-slate-200 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-enviro-navy">{cat.title}</h3>
                  <p className="text-xs text-enviro-gray leading-relaxed">{cat.desc}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ==========================================
          10. WHY ENVIROSERVE
      ========================================== */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-enviro-green text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-enviro-green" />
              <span>OUR DISTINCT VALUE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-enviro-navy font-heading tracking-tight">
              WHY ENVIROSERVE
            </h2>
            <p className="text-base text-enviro-gray">
              Built on verified operational strengths, legal transparency, and scientific material recovery capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-8 rounded-3xl bg-white border border-slate-200 shadow-card hover:shadow-xl transition-all duration-300 space-y-4"
                >
                  <div className="w-14 h-14 rounded-2xl bg-enviro-light text-enviro-green flex items-center justify-center border border-emerald-200">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-enviro-navy">{item.title}</h3>
                  <p className="text-sm text-enviro-gray leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ==========================================
          11. FAQ (ACCORDION INTERACTION)
      ========================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-enviro-light text-enviro-green text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-4 h-4 text-enviro-green" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-enviro-navy font-heading tracking-tight">
              QUESTIONS ABOUT ENVIROSERVE
            </h2>
            <p className="text-base text-enviro-gray">
              Everything you need to know about our recycling operations, battery recovery, and EPR compliance solutions.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="bg-slate-50 border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
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
                        <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-enviro-gray leading-relaxed border-t border-slate-200/50 pl-11">
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

      {/* ==========================================
          12. CTA
      ========================================== */}
      <section className="py-20 bg-gradient-to-br from-enviro-navy via-emerald-950 to-slate-900 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
            <span>GET STARTED</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            LET&apos;S BUILD A MORE RESPONSIBLE RECYCLING FUTURE
          </h2>

          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Have an e-waste, battery recycling, EPR or waste-management requirement? Talk to the EnviroServe team.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-enviro-accent hover:bg-emerald-400 text-enviro-navy font-extrabold text-base px-8 py-4 rounded-full transition-all shadow-xl hover:scale-105 active:scale-95"
            >
              <PhoneCall className="w-5 h-5" />
              <span>Talk to Our Experts</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-base px-8 py-4 rounded-full transition-all border border-white/30 backdrop-blur-md"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================
          13. EXISTING CONTACT SECTION
      ========================================== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-enviro-light text-enviro-green text-xs font-bold uppercase tracking-wider">
              <span>GET IN TOUCH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-enviro-navy font-heading">
              Corporate Contact & Advisory Office
            </h2>
            <p className="text-base text-enviro-gray">
              Reach out directly to our recycling consultants and regulatory advisory desk.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Office Info & Map */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-card space-y-6">
                <h3 className="text-lg font-bold font-heading text-enviro-navy border-b border-slate-100 pb-3">
                  Direct Office Contacts
                </h3>

                <div className="space-y-5 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-enviro-light text-enviro-green shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Office Email</div>
                      <a href={`mailto:${companyInfo.contact.email}`} className="font-bold text-enviro-navy hover:text-enviro-green transition-colors text-base block mt-0.5">
                        {companyInfo.contact.email}
                      </a>
                      <a href={`mailto:${companyInfo.contact.altEmail}`} className="text-xs text-slate-500 hover:text-enviro-green transition-colors block">
                        {companyInfo.contact.altEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-enviro-light text-enviro-green shrink-0">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Office Phone</div>
                      <a href={`tel:${companyInfo.contact.tollFree}`} className="font-bold text-enviro-navy hover:text-enviro-green transition-colors text-base block mt-0.5">
                        Toll Free: {companyInfo.contact.tollFree}
                      </a>
                      <div className="text-xs text-slate-500">Landline: {companyInfo.contact.phone}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-enviro-light text-enviro-green shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Office Address</div>
                      <div className="font-semibold text-enviro-navy leading-snug mt-0.5">
                        {companyInfo.address.full}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="bg-white p-3 rounded-3xl border border-slate-200 shadow-card overflow-hidden h-72 relative">
                <iframe
                  src={companyInfo.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                  title="EnviroServe Office Map Location"
                />
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
