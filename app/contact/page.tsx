import React from "react";
import Image from "next/image";
import { companyInfo } from "@/data/company";
import { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { MapPin, PhoneCall, Mail, Clock, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | EnviroServe Delhi Corporate Headquarters",
  description:
    "Get in touch with EnviroServe Technologies Pvt. Ltd. in Daryaganj, New Delhi. Reach out for e-waste recycling, lithium-ion battery recovery, and EPR compliance enquiries.",
};

export default function ContactPage() {
  return (
    <div className="overflow-x-hidden bg-white min-h-screen">
      
      {/* 1. HERO SECTION (Large full scale matching Home Page hero) */}
      <section className="relative w-full min-h-[650px] sm:min-h-[720px] lg:h-[80vh] flex items-center justify-center overflow-hidden text-white pt-12">
        {/* Background DSLR Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-contact-dslr.jpg"
            alt="Contact EnviroServe Corporate Header DSLR"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 pt-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/80 backdrop-blur-md text-emerald-300 text-xs sm:text-sm font-bold uppercase tracking-widest border border-emerald-400/40 shadow-lg animate-in fade-in duration-500"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>CORPORATE CONTACT & HEADQUARTERS</span>
          </div>

          <h1 
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading text-white tracking-tight leading-tight max-w-4xl mx-auto animate-in slide-in-from-bottom-3 duration-500"
            style={{ textShadow: "0 4px 20px rgba(0, 0, 0, 0.9), 0 2px 6px rgba(0, 0, 0, 0.95)" }}
          >
            Get in Touch. <br className="hidden sm:inline" />
            Speak with Our Experts.
          </h1>

          <p 
            className="text-base sm:text-xl text-slate-100 max-w-3xl mx-auto leading-relaxed font-medium animate-in slide-in-from-bottom-4 duration-500"
            style={{ textShadow: "0 2px 12px rgba(0, 0, 0, 0.9)" }}
          >
            Reach out to our environmental consultants, waste logistics coordinators, and regulatory team for enterprise recycling quotes, facility audits, or CPCB portal EPR advisory.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Contact Details & Map */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* About Brief */}
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-card space-y-3">
                <div className="inline-flex items-center gap-2 text-enviro-green font-bold text-xs uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-enviro-accent" />
                  <span>EnviroServe Technologies Pvt. Ltd.</span>
                </div>
                <p className="text-sm text-enviro-gray leading-relaxed">
                  We believe that responsible waste management is the foundation of a sustainable future. Based in New Delhi, our mission is to revolutionize how waste—especially e-waste and recyclables—is handled by offering efficient, ethical, and eco-conscious solutions.
                </p>
              </div>

              {/* Direct Info */}
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

              {/* Google Maps Embed */}
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
