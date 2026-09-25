"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  ChevronDown, 
  ChevronRight,
  Menu, 
  X, 
  PhoneCall, 
  Recycle, 
  ShieldCheck, 
  Truck, 
  Cpu, 
  BatteryCharging, 
  FileCheck, 
  Droplets, 
  Layers, 
  FileSpreadsheet, 
  Briefcase, 
  HardDrive, 
  CircleDot,
  Battery,
  Sun,
  ArrowRight,
  Sparkles,
  Home,
  Users,
  HelpCircle,
  BookOpen,
  Phone,
  Leaf
} from "lucide-react";
import { cn } from "@/lib/utils";

const servicesList = [
  {
    category: "Recycling Solutions",
    badge: "",
    icon: Recycle,
    items: [
      { name: "E-Waste Recycling", href: "/services/e-waste-recycling", desc: "Scientific de-manufacturing & metal recovery", icon: Cpu },
      { name: "Li-Ion Battery Recycling", href: "/services/li-ion-battery-recycling", desc: "EV battery packs & critical mineral recovery", icon: BatteryCharging },
      { name: "Solar Panel Recycling", href: "/services/solar-panel-recycling", desc: "PV panel dismantling & glass/silicon recovery", icon: Sun },
    ],
  },
  {
    category: "CPCB EPR Compliance",
    badge: "",
    icon: ShieldCheck,
    items: [
      { name: "E-Waste EPR Compliance", href: "/services/e-waste-epr", desc: "CPCB portal targets & credit generation", icon: FileCheck },
      { name: "Li-Ion Battery EPR", href: "/services/li-ion-battery-epr", desc: "BWM Rules 2022 obligation credits", icon: ShieldCheck },
      { name: "General Battery EPR", href: "/services/battery-waste-epr", desc: "Lead-acid & dry cell battery credits", icon: Battery },
    ],
  },
  {
    category: "Enterprise & Advisory",
    badge: "",
    icon: Truck,
    items: [
      { name: "Multi-Category EPR Desk", href: "/services/multi-category-epr", desc: "Unified single-window advisory desk", icon: Layers },
      { name: "Annual EPR Audit & Filing", href: "/services/annual-filing", desc: "Error-free documentation & CPCB audits", icon: FileSpreadsheet },
      { name: "Circular Economy Responsibility", href: "/services/pro-services", desc: "Closed-loop take-back & circular campaigns", icon: Briefcase },
      { name: "Reverse Logistics Fleet", href: "/services/reverse-logistics", desc: "Pan-India hazardous waste pickup fleet", icon: Truck },
      { name: "Corporate Asset Liquidation", href: "/services/asset-liquidation", desc: "IT asset disposal & DoD data destruction", icon: HardDrive },
    ],
  },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns & mobile drawer on route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "glass-nav shadow-lg py-2.5 border-b border-emerald-100/60"
          : "bg-white/95 backdrop-blur-md border-b border-gray-100 py-3.5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Tagline Badge */}
          <Link href="/" className="flex items-center gap-3 group relative z-50">
            <div className="relative w-40 sm:w-44 h-11 sm:h-12 flex items-center transition-transform group-hover:scale-[1.02]">
              <Image
                src="/images/logo/EnviroServe-1.png"
                alt="EnviroServe Logo"
                fill
                className="object-contain object-left"
                priority
                sizes="(max-width: 640px) 160px, 176px"
                quality={90}
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link
              href="/"
              className={cn(
                "relative py-2 text-sm font-semibold transition-colors duration-200 hover:text-emerald-600",
                pathname === "/" ? "text-emerald-700 font-bold" : "text-slate-700"
              )}
            >
              <span>Home</span>
              {pathname === "/" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 rounded-full animate-in fade-in" />
              )}
            </Link>

            <Link
              href="/about"
              className={cn(
                "relative py-2 text-sm font-semibold transition-colors duration-200 hover:text-emerald-600",
                pathname === "/about" ? "text-emerald-700 font-bold" : "text-slate-700"
              )}
            >
              <span>About Us</span>
              {pathname === "/about" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 rounded-full animate-in fade-in" />
              )}
            </Link>

            {/* Desktop Services Mega Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={cn(
                  "flex items-center gap-1.5 py-2 text-sm font-semibold transition-colors duration-200 hover:text-emerald-600 focus:outline-none group/btn",
                  pathname.startsWith("/services") ? "text-emerald-700 font-bold" : "text-slate-700"
                )}
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
              >
                <span>Services</span>
                <span className="px-2 py-0.5 text-[10px] font-extrabold bg-emerald-100 text-emerald-800 rounded-full group-hover/btn:bg-emerald-600 group-hover/btn:text-white transition-colors">
                  14
                </span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-300",
                    servicesOpen ? "rotate-180 text-emerald-600" : "text-slate-400"
                  )}
                />
              </button>

              {/* Mega Menu Dropdown Container - Solid Pure White Background with Card Grid */}
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[940px] mt-1 bg-white rounded-3xl shadow-[0_30px_70px_-15px_rgba(16,185,129,0.25)] border-2 border-emerald-100/90 p-7 animate-in fade-in slide-in-from-top-3 duration-200 z-50">
                  
                  {/* Category Columns */}
                  <div className="grid grid-cols-3 gap-6">
                    {servicesList.map((cat, idx) => {
                      const CatIcon = cat.icon;
                      return (
                        <div key={idx} className="space-y-3.5">
                          
                          {/* Category Header */}
                          <div className="flex items-center justify-between pb-2.5 border-b-2 border-emerald-100/80">
                            <div className="flex items-center gap-2">
                              <div className="p-2 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-100 text-emerald-700 shadow-sm border border-emerald-200/50">
                                <CatIcon className="w-4 h-4" />
                              </div>
                              <span className="font-heading font-extrabold text-sm text-slate-800 tracking-tight">
                                {cat.category}
                              </span>
                            </div>
                           
                           
                          </div>

                          {/* Items List as Soft Interactive Cards */}
                          <div className="space-y-2">
                            {cat.items.map((item, itemIdx) => {
                              const ItemIcon = item.icon;
                              const isActive = pathname === item.href;
                              return (
                                <Link
                                  key={itemIdx}
                                  href={item.href}
                                  className={cn(
                                    "group/card flex items-start gap-3 p-3 rounded-2xl transition-all duration-300 border cursor-pointer",
                                    isActive 
                                      ? "bg-emerald-50 border-emerald-300 shadow-md ring-1 ring-emerald-200"
                                      : "bg-slate-50/80 border-slate-100/90 hover:bg-gradient-to-r hover:from-emerald-50/90 hover:via-teal-50/50 hover:to-emerald-50/90 hover:border-emerald-200 hover:shadow-md hover:scale-[1.02]"
                                  )}
                                >
                                  <div className="p-2.5 rounded-xl bg-emerald-100/80 text-emerald-700 group-hover/card:bg-gradient-to-br group-hover/card:from-emerald-600 group-hover/card:to-teal-700 group-hover/card:text-white group-hover/card:scale-110 group-hover/card:rotate-6 shadow-sm transition-all duration-300 mt-0.5">
                                    <ItemIcon className="w-4 h-4 transition-transform duration-300 group-hover/card:rotate-6" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                      <span className="text-xs font-bold text-slate-800 group-hover/card:text-emerald-700 transition-colors truncate">
                                        {item.name}
                                      </span>
                                      <ChevronRight className="w-4 h-4 text-emerald-600 opacity-0 group-hover/card:opacity-100 group-hover/card:translate-x-1 transition-all duration-300" />
                                    </div>
                                    <p className="text-[11px] text-slate-500 group-hover/card:text-slate-600 line-clamp-1 mt-0.5 font-medium leading-snug">
                                      {item.desc}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>

                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/how-we-do-it"
              className={cn(
                "relative py-2 text-sm font-semibold transition-colors duration-200 hover:text-emerald-600",
                pathname === "/how-we-do-it" ? "text-emerald-700 font-bold" : "text-slate-700"
              )}
            >
              <span>How We Do It</span>
              {pathname === "/how-we-do-it" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 rounded-full animate-in fade-in" />
              )}
            </Link>

            <Link
              href="/collecting-partner"
              className={cn(
                "relative py-2 text-sm font-semibold transition-colors duration-200 hover:text-emerald-600 flex items-center gap-1.5",
                pathname === "/collecting-partner" ? "text-emerald-700 font-bold" : "text-slate-700"
              )}
            >
              <span>Collection Partner</span>
              
              {pathname === "/collecting-partner" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 rounded-full animate-in fade-in" />
              )}
            </Link>

            <Link
              href="/blog"
              className={cn(
                "relative py-2 text-sm font-semibold transition-colors duration-200 hover:text-emerald-600",
                pathname.startsWith("/blog") ? "text-emerald-700 font-bold" : "text-slate-700"
              )}
            >
              <span>Blog</span>
              {pathname.startsWith("/blog") && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 rounded-full animate-in fade-in" />
              )}
            </Link>

            <Link
              href="/contact"
              className={cn(
                "relative py-2 text-sm font-semibold transition-colors duration-200 hover:text-emerald-600",
                pathname === "/contact" ? "text-emerald-700 font-bold" : "text-slate-700"
              )}
            >
              <span>Contact</span>
              {pathname === "/contact" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 rounded-full animate-in fade-in" />
              )}
            </Link>
          </nav>

          {/* Desktop Right Action CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-md shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/30 hover:scale-[1.03] active:scale-[0.98]"
            >
              <PhoneCall className="w-4 h-4 text-emerald-200 animate-pulse" />
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-2xl bg-emerald-50 hover:bg-emerald-100/80 text-emerald-800 border border-emerald-200/60 focus:outline-none transition-all active:scale-95 shadow-sm"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-emerald-700 transition-transform rotate-90 duration-200" />
              ) : (
                <Menu className="w-6 h-6 text-emerald-700 transition-transform duration-200" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Backdrop & Drawer Container */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] sm:top-[68px] bottom-0 z-40 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
          
          <div className="bg-white border-b border-emerald-100 rounded-b-3xl shadow-2xl max-h-[calc(100vh-80px)] flex flex-col animate-in slide-in-from-top-4 duration-300">
            
            {/* Scrollable Content inside Drawer */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-3 custom-scrollbar flex-1">
              
              {/* Home Link */}
              <Link
                href="/"
                className={cn(
                  "flex items-center gap-3 p-3 rounded-2xl font-bold text-base transition-all",
                  pathname === "/" 
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200/80 shadow-sm" 
                    : "text-slate-800 hover:bg-slate-50"
                )}
              >
                <div className={cn("p-2 rounded-xl", pathname === "/" ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-600")}>
                  <Home className="w-4 h-4" />
                </div>
                <span>Home</span>
              </Link>

              {/* About Us Link */}
              <Link
                href="/about"
                className={cn(
                  "flex items-center gap-3 p-3 rounded-2xl font-bold text-base transition-all",
                  pathname === "/about" 
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200/80 shadow-sm" 
                    : "text-slate-800 hover:bg-slate-50"
                )}
              >
                <div className={cn("p-2 rounded-xl", pathname === "/about" ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-600")}>
                  <Users className="w-4 h-4" />
                </div>
                <span>About Us</span>
              </Link>

              {/* Mobile Services Accordion with Dedicated Scrollable Area */}
              <div className="rounded-2xl border border-emerald-100 bg-white overflow-hidden shadow-sm">
                
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between p-3.5 text-base font-bold text-slate-800 hover:bg-emerald-50/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-emerald-100/80 text-emerald-700">
                      <Recycle className="w-4 h-4" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span>Services</span>
                      <span className="text-[10px] font-extrabold bg-emerald-600 text-white px-2 py-0.5 rounded-full">
                        14 Services
                      </span>
                    </div>
                  </div>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-emerald-600 transition-transform duration-300",
                      mobileServicesOpen ? "rotate-180" : ""
                    )}
                  />
                </button>

                {/* Scrollable Mobile Services Container */}
                {mobileServicesOpen && (
                  <div className="px-3 pb-3 pt-1 border-t border-emerald-100/70 bg-slate-50">
                    
                    {/* Visual Scroll Hint Badge */}
                    <div className="flex items-center justify-between text-[11px] font-bold text-emerald-800 bg-emerald-100/70 px-3 py-1.5 rounded-xl mb-2.5">
                      <span>Scroll to explore all services</span>
                      <span className="animate-bounce text-emerald-600">↓</span>
                    </div>

                    {/* Dedicated Scrollable Services Area */}
                    <div className="max-h-[340px] overflow-y-auto custom-scrollbar space-y-4 pr-1">
                      {servicesList.map((cat, catIdx) => {
                        const CatIcon = cat.icon;
                        return (
                          <div key={catIdx} className="space-y-2">
                            {/* Category Banner */}
                            <div className="sticky top-0 z-10 flex items-center gap-2 bg-white px-2.5 py-1.5 rounded-xl border border-emerald-100 shadow-sm text-xs font-bold text-emerald-800">
                              <CatIcon className="w-3.5 h-3.5 text-emerald-600" />
                              <span className="uppercase tracking-wider">{cat.category}</span>
                            </div>

                            {/* Service Items */}
                            <div className="grid grid-cols-1 gap-1.5 pl-1">
                              {cat.items.map((item, itemIdx) => {
                                const ItemIcon = item.icon;
                                const isActive = pathname === item.href;
                                return (
                                  <Link
                                    key={itemIdx}
                                    href={item.href}
                                    className={cn(
                                      "flex items-center gap-2.5 p-2 rounded-xl transition-all border",
                                      isActive
                                        ? "bg-emerald-600 text-white font-bold border-emerald-600 shadow-sm"
                                        : "bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border-gray-100"
                                    )}
                                  >
                                    <div className={cn(
                                      "p-1.5 rounded-lg flex-shrink-0",
                                      isActive ? "bg-white/20 text-white" : "bg-emerald-50 text-emerald-700"
                                    )}>
                                      <ItemIcon className="w-3.5 h-3.5" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="text-xs font-semibold truncate leading-snug">
                                        {item.name}
                                      </div>
                                    </div>
                                    <ChevronRight className={cn("w-3.5 h-3.5 flex-shrink-0 opacity-60", isActive ? "text-white" : "text-slate-400")} />
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                  </div>
                )}

              </div>

              {/* How We Do It Link */}
              <Link
                href="/how-we-do-it"
                className={cn(
                  "flex items-center gap-3 p-3 rounded-2xl font-bold text-base transition-all",
                  pathname === "/how-we-do-it" 
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200/80 shadow-sm" 
                    : "text-slate-800 hover:bg-slate-50"
                )}
              >
                <div className={cn("p-2 rounded-xl", pathname === "/how-we-do-it" ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-600")}>
                  <HelpCircle className="w-4 h-4" />
                </div>
                <span>How We Do It</span>
              </Link>

              {/* Collecting Partner Link */}
              <Link
                href="/collecting-partner"
                className={cn(
                  "flex items-center gap-3 p-3 rounded-2xl font-bold text-base transition-all",
                  pathname === "/collecting-partner" 
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200/80 shadow-sm" 
                    : "text-slate-800 hover:bg-slate-50"
                )}
              >
                <div className={cn("p-2 rounded-xl", pathname === "/collecting-partner" ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-600")}>
                  <Truck className="w-4 h-4" />
                </div>
                <div className="flex items-center justify-between flex-1">
                  <span>Collection Partner</span>
                 
                </div>
              </Link>

              {/* Blog Link */}
              <Link
                href="/blog"
                className={cn(
                  "flex items-center gap-3 p-3 rounded-2xl font-bold text-base transition-all",
                  pathname.startsWith("/blog") 
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200/80 shadow-sm" 
                    : "text-slate-800 hover:bg-slate-50"
                )}
              >
                <div className={cn("p-2 rounded-xl", pathname.startsWith("/blog") ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-600")}>
                  <BookOpen className="w-4 h-4" />
                </div>
                <span>Blog</span>
              </Link>

              {/* Contact Link */}
              <Link
                href="/contact"
                className={cn(
                  "flex items-center gap-3 p-3 rounded-2xl font-bold text-base transition-all",
                  pathname === "/contact" 
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200/80 shadow-sm" 
                    : "text-slate-800 hover:bg-slate-50"
                )}
              >
                <div className={cn("p-2 rounded-xl", pathname === "/contact" ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-600")}>
                  <Phone className="w-4 h-4" />
                </div>
                <span>Contact</span>
              </Link>

            </div>

            {/* Bottom Drawer CTA Button */}
            <div className="p-4 border-t border-emerald-100 bg-slate-50/90 rounded-b-3xl">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-bold py-3.5 rounded-2xl shadow-lg shadow-emerald-600/20 active:scale-[0.98] transition-all"
              >
                <PhoneCall className="w-4 h-4 text-emerald-200 animate-pulse" />
                <span>Contact Us for EPR Quote</span>
              </Link>
            </div>

          </div>

        </div>
      )}
    </header>
  );
}

