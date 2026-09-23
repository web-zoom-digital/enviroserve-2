import React from "react";
import Link from "next/link";
import Image from "next/image";
import { companyInfo } from "@/data/company";
import { MapPin, PhoneCall, Mail, ArrowUpRight, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-enviro-navy text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="bg-white p-3 rounded-xl inline-block w-48">
              <div className="relative w-full h-10">
                <Image
                  src="/images/logo/EnviroServe-1.png"
                  alt="EnviroServe Technologies Pvt. Ltd."
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
            <p className="text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
              Recycle More • Enjoy Nature For More
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              EnviroServe Technologies Pvt. Ltd. is dedicated to protecting nature by making e-waste recycling, battery recovery, and CPCB EPR compliance accessible, human-centric, and sustainable for all.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-800/60 px-3 py-1.5 rounded-lg w-fit">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>CPCB & SPCB Traceable Solutions</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white font-heading uppercase tracking-wider border-b border-emerald-600/40 pb-2 w-fit">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors flex items-center gap-1 group">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors flex items-center gap-1 group">
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/services/e-waste-recycling" className="hover:text-emerald-400 transition-colors flex items-center gap-1 group">
                  <span>Services Overview</span>
                </Link>
              </li>
              <li>
                <Link href="/how-we-do-it" className="hover:text-emerald-400 transition-colors flex items-center gap-1 group">
                  <span>How We Do It</span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-emerald-400 transition-colors flex items-center gap-1 group">
                  <span>Blog & Insights</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors flex items-center gap-1 group">
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: EPR Services */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white font-heading uppercase tracking-wider border-b border-emerald-600/40 pb-2 w-fit">
              EPR Services
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/services/e-waste-epr" className="hover:text-emerald-400 transition-colors flex items-center justify-between group">
                  <span>E-Waste EPR</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                </Link>
              </li>
              <li>
                <Link href="/services/li-ion-battery-epr" className="hover:text-emerald-400 transition-colors flex items-center justify-between group">
                  <span>Li-Ion Battery EPR</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                </Link>
              </li>
              <li>
                <Link href="/services/plastic-waste-epr" className="hover:text-emerald-400 transition-colors flex items-center justify-between group">
                  <span>Plastic Waste EPR</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                </Link>
              </li>
              <li>
                <Link href="/services/tyre-waste-epr" className="hover:text-emerald-400 transition-colors flex items-center justify-between group">
                  <span>Tyre Waste EPR</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                </Link>
              </li>
              <li>
                <Link href="/services/used-oil-epr" className="hover:text-emerald-400 transition-colors flex items-center justify-between group">
                  <span>Used Oil EPR</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                </Link>
              </li>
              <li>
                <Link href="/services/multi-category-epr" className="hover:text-emerald-400 transition-colors flex items-center justify-between group">
                  <span>Multi-Category EPR</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                </Link>
              </li>
              <li>
                <Link href="/services/annual-filing" className="hover:text-emerald-400 transition-colors flex items-center justify-between group">
                  <span>Annual Filing & Audits</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white font-heading uppercase tracking-wider border-b border-emerald-600/40 pb-2 w-fit">
              Contact Info
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{companyInfo.address.full}</span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneCall className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-xs text-slate-400">Toll Free</div>
                  <a href={`tel:${companyInfo.contact.tollFree}`} className="hover:text-emerald-400 font-semibold text-white transition-colors">
                    {companyInfo.contact.tollFree}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
                <a href={`mailto:${companyInfo.contact.email}`} className="hover:text-emerald-400 font-semibold text-white transition-colors">
                  {companyInfo.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 {companyInfo.name} All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-200 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-200 transition-colors cursor-pointer">Terms & Conditions</span>
            <span className="hover:text-slate-200 transition-colors cursor-pointer">CPCB Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
