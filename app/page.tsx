"use client";

import React from "react";
import { Hero } from "@/components/hero";
import { WhatWeRecycle } from "@/components/what-we-recycle";
import { CoreServices } from "@/components/core-services";
import { EPRComplianceSection } from "@/components/epr-compliance-section";
import { HowWeDoItTimeline } from "@/components/how-we-do-it-timeline";
import { WhyEnviroServe } from "@/components/why-enviroserve";
import { IndustriesServed } from "@/components/industries-served";
import { LatestBlogs } from "@/components/latest-blogs";
import { FinalCTA } from "@/components/final-cta";
import { ContactForm } from "@/components/contact-form";
import { companyInfo } from "@/data/company";
import { MapPin, PhoneCall, Mail } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { TechnologyPartners } from "@/components/technology-partners";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — no scroll animation, it's the first visible section */}
      <Hero />

      {/* 2. What We Recycle */}
      <ScrollReveal variant="fadeUp" delay={0.05}>
        <WhatWeRecycle />
      </ScrollReveal>
      {/* 2.5 Technology Partners */}
      <ScrollReveal variant="fadeUp" delay={0.05}>
        <TechnologyPartners />
      </ScrollReveal>
      {/* 3. Our Core Services */}
      <ScrollReveal variant="fadeUp" delay={0.05}>
        <CoreServices />
      </ScrollReveal>

      {/* 4. EPR Compliance Section */}
      <ScrollReveal variant="fadeLeft" delay={0.05}>
        <EPRComplianceSection />
      </ScrollReveal>

      {/* 5. How We Do It Timeline */}
      <ScrollReveal variant="slideUp" delay={0.05}>
        <HowWeDoItTimeline />
      </ScrollReveal>

      {/* 6. Why EnviroServe */}
      <ScrollReveal variant="fadeRight" delay={0.05}>
        <WhyEnviroServe />
      </ScrollReveal>

      {/* 7. Industries We Serve */}
      <ScrollReveal variant="scaleUp" delay={0.05} duration={0.7}>
        <IndustriesServed />
      </ScrollReveal>

      {/* 8. Latest Blogs */}
      <ScrollReveal variant="fadeUp" delay={0.05}>
        <LatestBlogs />
      </ScrollReveal>

      {/* 9. Final CTA */}
      <ScrollReveal variant="scaleUp" delay={0.05} duration={0.65}>
        <FinalCTA />
      </ScrollReveal>

      {/* 10. Homepage Contact Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left: Contact Info — slides in from left */}
            <ScrollReveal variant="fadeLeft" delay={0.1} className="lg:col-span-5">
              <div className="space-y-8">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-enviro-green text-xs font-bold uppercase tracking-wider">
                    <span>Contact Headquarters</span>
                  </div>
                  <h2 className="text-3xl font-extrabold text-enviro-navy tracking-tight">
                    Reach Out to EnviroServe
                  </h2>
                  <p className="text-sm text-enviro-gray leading-relaxed">
                    Connect with our team in New Delhi for custom e-waste recycling quotes, battery take-back programs, or CPCB EPR consultation.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                    <div className="p-3 rounded-xl bg-enviro-light text-enviro-green shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Corporate Office</div>
                      <div className="text-sm font-semibold text-enviro-navy mt-0.5 leading-snug">
                        {companyInfo.address.full}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                    <div className="p-3 rounded-xl bg-enviro-light text-enviro-green shrink-0">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone Lines</div>
                      <div className="text-sm font-semibold text-enviro-navy mt-0.5">
                        Toll Free: <a href={`tel:${companyInfo.contact.tollFree}`} className="hover:text-enviro-green">{companyInfo.contact.tollFree}</a>
                      </div>
                      <div className="text-xs text-slate-500">
                        Direct: {companyInfo.contact.phone}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                    <div className="p-3 rounded-xl bg-enviro-light text-enviro-green shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Official Email</div>
                      <div className="text-sm font-semibold text-enviro-navy mt-0.5">
                        <a href={`mailto:${companyInfo.contact.email}`} className="hover:text-enviro-green">
                          {companyInfo.contact.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Contact Form — slides in from right */}
            <ScrollReveal variant="fadeRight" delay={0.2} className="lg:col-span-7">
              <ContactForm />
            </ScrollReveal>

          </div>
        </div>
      </section>
    </>
  );
}
