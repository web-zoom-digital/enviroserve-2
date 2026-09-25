"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Truck,
  Smartphone,
  ShieldCheck,
  Recycle,
  Download,
  Calendar,
  Scale,
  Layers,
  ChevronRight,
  HelpCircle,
  Building2,
  Home,
  Cpu,
  RefreshCw,
  ChevronDown,
  ArrowUpRight,
  CheckCircle2,
  Sparkles
} from "lucide-react";

const playStoreUrl = process.env.NEXT_PUBLIC_RETRASH_PLAY_STORE_URL || "https://play.google.com/store/apps/details?id=com.retrash.partner&hl=en_IN";

const collectionCategories = [
  {
    title: "Scrap Metal & Paper",
    desc: "Ferrous and non-ferrous metal scrap, copper wiring, aluminum offcuts, brass, and bulk cardboard/paper scrap.",
    icon: Layers,
    badge: "Domestic & Commercial",
    colorStyle: "from-emerald-500/10 to-teal-500/10 text-emerald-600 border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white",
  },
  {
    title: "E-Waste & IT Equipment",
    desc: "Obsolete computers, laptops, servers, mobile phones, printed circuit boards, cables, and electronic devices.",
    icon: Cpu,
    badge: "Electronic Scrap",
    colorStyle: "from-blue-500/10 to-cyan-500/10 text-blue-600 border-blue-200 group-hover:bg-blue-600 group-hover:text-white",
  },
  {
    title: "Household Recyclables",
    desc: "Domestic dry recyclable packaging, rigid plastic containers, glass bottles, and sorted paper boxes.",
    icon: Home,
    badge: "Doorstep Pickup",
    colorStyle: "from-amber-500/10 to-orange-500/10 text-amber-600 border-amber-200 group-hover:bg-amber-500 group-hover:text-white",
  },
  {
    title: "Office & Business Clutter",
    desc: "Bulk office paper waste, decommissioned furniture scrap, IT hardware, and packaging materials.",
    icon: Building2,
    badge: "Bulk Enterprise",
    colorStyle: "from-purple-500/10 to-indigo-500/10 text-purple-600 border-purple-200 group-hover:bg-purple-600 group-hover:text-white",
  },
  {
    title: "Institutional Scrap",
    desc: "Campus maintenance scrap, university labs equipment scrap, hotel dry waste, and hospital non-hazardous scrap.",
    icon: RefreshCw,
    badge: "Scheduled Consignment",
    colorStyle: "from-teal-500/10 to-emerald-500/10 text-teal-600 border-teal-200 group-hover:bg-teal-600 group-hover:text-white",
  },
  {
    title: "Industrial Dry Recyclables",
    desc: "Manufacturing floor dry metal offcuts, plastic sprues, clean packaging films, and scrap drums.",
    icon: Truck,
    badge: "Logistics Hub",
    colorStyle: "from-green-500/10 to-lime-500/10 text-green-600 border-green-200 group-hover:bg-green-600 group-hover:text-white",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Schedule Pickup",
    desc: "Request a convenient doorstep collection time slot via the ReTrash mobile app or web platform.",
    icon: Calendar,
  },
  {
    step: "02",
    title: "On-Site Weighing & Collection",
    desc: "Verified collection crews arrive equipped with calibrated digital scales and eco-transport vehicles.",
    icon: Scale,
  },
  {
    step: "03",
    title: "Sorting & Segregation",
    desc: "Collected materials are segregated into specific streams (metals, plastics, e-waste) for maximum recovery value.",
    icon: Layers,
  },
  {
    step: "04",
    title: "Authorized Channelization",
    desc: "Sorted consignments are transferred into EnviroServe's registered green transport & facility logistics network.",
    icon: Truck,
  },
  {
    step: "05",
    title: "Recycling & Recovery",
    desc: "EnviroServe executes scientific de-manufacturing, material extraction, and compliance reporting.",
    icon: Recycle,
  },
];

const ecosystemSteps = [
  {
    num: "1",
    title: "Waste Generator",
    desc: "Homeowner or business schedules scrap pickup via ReTrash app.",
  },
  {
    num: "2",
    title: "ReTrash Doorstep Pickup",
    desc: "Verified crew collects, weighs, and segregates recyclables on-site.",
  },
  {
    num: "3",
    title: "EnviroServe Facility",
    desc: "Materials undergo de-manufacturing, shredding, and refining.",
  },
  {
    num: "4",
    title: "Circular Resource",
    desc: "Secondary metals & materials re-enter industrial supply chains.",
  },
];

const faqs = [
  {
    question: "What is ReTrash and how does it relate to EnviroServe?",
    answer: "ReTrash is EnviroServe's dedicated Collecting Partner. ReTrash focuses on the collection side of the recycling ecosystem—providing convenient, app-driven doorstep pickup for scrap, e-waste, and recyclable materials. EnviroServe receives and processes these collected materials in authorized recycling and material recovery facilities.",
  },
  {
    question: "What types of waste can I schedule for pickup via ReTrash?",
    answer: "ReTrash collects a wide variety of dry recyclables, including metal scrap (iron, copper, aluminum, brass), electronic waste (computers, smartphones, appliances, cables), paper & cardboard, and rigid plastic scrap.",
  },
  {
    question: "How do I book a waste pickup?",
    answer: "You can easily schedule a pickup by downloading the ReTrash app from Google Play or by visiting retrash.in. Select your location, choose the material categories, pick a date, and confirm your request.",
  },
  {
    question: "Where can I download the official ReTrash app?",
    answer: "The ReTrash application is available for Android smartphones on the Google Play Store. You can tap the 'Download on Google Play' button on this page to visit the official listing directly.",
  },
  {
    question: "What happens to collected waste after pickup?",
    answer: "Once collected and segregated by ReTrash, the recyclable materials are channelized directly into EnviroServe's authorized processing ecosystem, where metals, circuit board components, and plastics undergo scientific recycling and resource recovery.",
  },
  {
    question: "Can businesses and commercial offices use ReTrash for bulk scrap pickup?",
    answer: "Yes! ReTrash handles both residential doorstep pickups and commercial bulk scrap collection for corporate offices, institutions, and industrial sites.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function CollectingPartnerContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="pb-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* About ReTrash Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/90 relative overflow-hidden"
        >
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">

            {/* Logo & Card (4 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-4 flex flex-col items-center justify-center space-y-5 max-w-[320px] mx-auto w-full"
            >
              {/* ReTrash Image Graphic Card */}
              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-slate-200/90 bg-white cursor-pointer group"
              >
                <Image
                  src="/images/services/retrash.webp"
                  alt="ReTrash — Collection Network Partner"
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/5 transition-colors duration-300" />
              </motion.div>

              {/* Google Play Store Badge */}
              <motion.a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="w-full block shadow-lg rounded-xl cursor-pointer group"
              >
                <div className="bg-slate-950 hover:bg-black text-white px-5 py-3.5 rounded-xl border border-slate-800 flex items-center justify-center gap-3.5 w-full transition-all duration-300 shadow-md group-hover:shadow-emerald-900/20">
                  <svg className="w-6 h-6 shrink-0 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24">
                    <path fill="#EA4335" d="M3.6 2.3A1.9 1.9 0 0 0 3 3.7v16.6a1.9 1.9 0 0 0 .6 1.4l.1.1 9.3-9.3v-.2L3.7 2.2l-.1.1z" />
                    <path fill="#FBBC04" d="M16.1 15.5l-3.1-3.1v-.2l3.1-3.1.1.1 3.7 2.1c1.1.6 1.1 1.6 0 2.2l-3.8 2.0z" />
                    <path fill="#4285F4" d="M16.2 15.4L13 12.3 3.6 21.7c.4.4.9.4 1.6 0l11-6.3" />
                    <path fill="#34A853" d="M16.2 8.6L5.2 2.3c-.7-.4-1.2-.4-1.6 0l9.4 9.4 3.2-3.1z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[9px] uppercase tracking-wider font-semibold text-slate-300">GET IT ON</div>
                    <div className="text-sm font-bold leading-tight font-sans flex items-center gap-1">
                      <span>Google Play</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </div>
                </div>
              </motion.a>
            </motion.div>

            {/* Description & Value Proposition (8 cols) */}
            <div className="lg:col-span-8 space-y-5">
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 text-emerald-800 text-xs font-bold uppercase tracking-wider shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Smarter Collection Network</span>
              </motion.div>

              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight leading-snug">
                Bridging Waste Generators with Authorized Recycling
              </h2>

              <p className="text-slate-600 leading-relaxed text-base">
                ReTrash is an innovative waste collection initiative built to make recycling accessible, organized, and transparent for households, commercial offices, and educational institutions across India.
              </p>

              <p className="text-slate-600 leading-relaxed text-base">
                Through the ReTrash app-based platform, waste generators can book door-step pickups for dry recyclables, scrap metal, and discarded electronics. Once collected, ReTrash ensures that recyclable waste avoids informal dumping sites and flows directly into certified green channels managed by EnviroServe.
              </p>

              {/* 2 Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                <motion.div
                  whileHover={{ y: -3, borderColor: "rgba(16, 185, 129, 0.4)", backgroundColor: "rgba(240, 253, 244, 0.6)" }}
                  transition={{ duration: 0.2 }}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5 cursor-pointer shadow-xs group"
                >
                  <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                    <Smartphone className="w-5 h-5 flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">App-Based Scheduling</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Book pickups at your convenient time slot with real-time tracking.</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -3, borderColor: "rgba(16, 185, 129, 0.4)", backgroundColor: "rgba(240, 253, 244, 0.6)" }}
                  transition={{ duration: 0.2 }}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5 cursor-pointer shadow-xs group"
                >
                  <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                    <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">Verified On-Site Personnel</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Trained pickup staff operating calibrated digital scales.</p>
                  </div>
                </motion.div>
              </div>

            </div>

          </div>
        </motion.section>

        {/* Collection Categories Section */}
        <section className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto space-y-3"
          >
            <div className="inline-block px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              What Can Be Collected
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
              Comprehensive Waste & Scrap Categories
            </h2>
            <p className="text-slate-600 text-base">
              ReTrash facilitates doorstep pickup and bulk consignment collection for a wide array of recyclable streams.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {collectionCategories.map((cat, idx) => {
              const CatIcon = cat.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 space-y-4 group cursor-pointer flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${cat.colorStyle} transition-all duration-300 shadow-sm`}>
                        <CatIcon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase bg-slate-100 group-hover:bg-emerald-100 group-hover:text-emerald-800 text-slate-700 px-3 py-1 rounded-full transition-colors">
                        {cat.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mt-2">
                        {cat.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 flex items-center gap-1.5 text-xs font-bold text-emerald-600 group-hover:text-emerald-700">
                    <span>Available for Pickup</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* How Collection Process Works Timeline */}
        <motion.section
          id="how-it-works"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-slate-950 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 space-y-12 relative overflow-hidden shadow-2xl"
        >
          {/* Ambient Lighting Orbs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-lime-400/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="text-center max-w-3xl mx-auto space-y-3 relative z-10">
            <div className="inline-block px-3.5 py-1.5 rounded-full bg-lime-400/20 text-lime-300 border border-lime-400/30 text-xs font-bold uppercase tracking-wider shadow-sm">
              Step-by-Step Workflow
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight">
              How the Collection to Recycling Journey Works
            </h2>
            <p className="text-slate-300 text-base">
              A transparent 5-step process moving waste from your doorstep into certified recovery.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10"
          >
            {processSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -6, borderColor: "rgba(163, 230, 53, 0.6)", backgroundColor: "rgba(30, 41, 59, 0.95)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-4 hover:shadow-2xl hover:shadow-lime-500/10 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-extrabold font-heading text-lime-400 group-hover:scale-110 transition-transform">
                        {step.step}
                      </span>
                      <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-lime-400 group-hover:text-slate-950 transition-colors duration-300 shadow-sm">
                        <StepIcon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-lime-300 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed mt-2">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 flex items-center gap-1 text-[11px] font-bold text-lime-400">
                    <span>Stage {step.step}</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>

        {/* From Collection to Recycling Ecosystem Journey */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/90 space-y-8"
        >
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-block px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              Ecosystem Integration
            </div>
            <h2 className="text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
              From Doorstep Collection to Closed-Loop Recovery
            </h2>
            <p className="text-slate-600 text-base">
              How ReTrash and EnviroServe collaborate to turn discarded materials into circular raw inputs.
            </p>
          </div>

          {/* Visual Process Flow */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-5 pt-2 text-center"
          >
            {ecosystemSteps.map((es, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.03, borderColor: "rgba(16, 185, 129, 0.4)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-3 cursor-pointer shadow-xs hover:shadow-md hover:bg-emerald-50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-lg mx-auto shadow-md group-hover:bg-emerald-700 group-hover:scale-110 transition-all duration-300">
                  {es.num}
                </div>
                <h3 className="font-bold text-slate-900 text-base group-hover:text-emerald-700 transition-colors">
                  {es.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {es.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Related Service Internal Links */}
          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-slate-600">
            <span className="text-slate-400">Related Services:</span>
            <Link href="/services/reverse-logistics">
              <motion.span whileHover={{ scale: 1.05 }} className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 hover:bg-emerald-100 hover:text-emerald-800 cursor-pointer transition-colors">
                Reverse Logistics
              </motion.span>
            </Link>
            <Link href="/services/e-waste-recycling">
              <motion.span whileHover={{ scale: 1.05 }} className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 hover:bg-emerald-100 hover:text-emerald-800 cursor-pointer transition-colors">
                E-Waste Recycling
              </motion.span>
            </Link>
            <Link href="/services/li-ion-battery-recycling">
              <motion.span whileHover={{ scale: 1.05 }} className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 hover:bg-emerald-100 hover:text-emerald-800 cursor-pointer transition-colors">
                Battery Waste
              </motion.span>
            </Link>
            <Link href="/services/e-waste-epr">
              <motion.span whileHover={{ scale: 1.05 }} className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 hover:bg-emerald-100 hover:text-emerald-800 cursor-pointer transition-colors">
                EPR Compliance
              </motion.span>
            </Link>
          </div>
        </motion.section>

        {/* FAQ Accordion Section */}
        <section className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-3"
          >
            <div className="inline-block px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
              Collecting Partner FAQs
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, fIdx) => {
              const isOpen = openFaq === fIdx;
              return (
                <motion.div
                  key={fIdx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: fIdx * 0.05 }}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-300 hover:border-emerald-300"
                >
                  <button
                    onClick={() => toggleFaq(fIdx)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-base text-slate-900 hover:text-emerald-700 transition-colors cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-1.5 rounded-full bg-slate-100 text-slate-600 shrink-0"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed pl-14 border-t border-slate-100">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Final CTA Banner */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 rounded-3xl p-8 sm:p-14 text-center text-white shadow-2xl space-y-6 relative overflow-hidden"
        >
          {/* Subtle Graphic Shimmer */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)] pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight max-w-3xl mx-auto leading-tight">
              Ready to Give Your Recyclables a Responsible Next Step?
            </h2>
            <p className="text-emerald-100 max-w-2xl mx-auto text-base sm:text-lg font-medium">
              Download the ReTrash app for individual doorstep scrap pickup, or consult EnviroServe for enterprise B2B recycling & EPR compliance management.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <motion.a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 30px -10px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2.5 bg-white text-emerald-900 hover:bg-emerald-50 font-extrabold px-8 py-4 rounded-2xl shadow-xl transition-all cursor-pointer text-base"
              >
                <Download className="w-5 h-5" />
                <span>Download ReTrash App</span>
              </motion.a>

              <Link href="/contact">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-emerald-950/70 hover:bg-emerald-950 text-white font-bold px-8 py-4 rounded-2xl border border-white/30 transition-all cursor-pointer backdrop-blur-md text-base"
                >
                  <span>Contact EnviroServe</span>
                  <ChevronRight className="w-4 h-4" />
                </motion.span>
              </Link>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
