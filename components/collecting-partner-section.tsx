"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Truck, ArrowRight, CheckCircle2 } from "lucide-react";

const playStoreUrl = process.env.NEXT_PUBLIC_RETRASH_PLAY_STORE_URL || "https://play.google.com/store/apps/details?id=com.retrash.partner&hl=en_IN";

export function CollectingPartnerSection() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Content & Redirect Link */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <Truck className="w-3.5 h-3.5 text-emerald-600" />
              <span>OFFICIAL COLLECTING PARTNER</span>
            </div>

            {/* Section Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-enviro-navy tracking-tight leading-tight">
              Doorstep Scrap & E-Waste Pickup with <span className="text-emerald-600">ReTrash</span>
            </h2>

            {/* Description */}
            <p className="text-base text-enviro-gray leading-relaxed">
              EnviroServe collaborates with <strong>ReTrash</strong> to make waste recycling effortless and accessible. Through organized, app-driven doorstep collection, households, corporate offices, and institutions can channel scrap metal, e-waste, and dry recyclables straight into certified recovery workflows.
            </p>

            {/* Bullet Points */}
            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-700">
                  <strong>App-Driven Convenience:</strong> Schedule doorstep scrap pickups for domestic or bulk enterprise waste with real-time tracking.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-700">
                  <strong>Calibrated Digital Scales:</strong> Verified collection staff operating transparent digital weighing instruments.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-700">
                  <strong>100% Certified Recycling:</strong> Materials avoid informal dumping and flow directly into EnviroServe&apos;s authorized facilities.
                </span>
              </div>
            </div>

            {/* CTA Redirect Link to Collecting Partner Page */}
            <div className="pt-4">
              <Link
                href="/collecting-partner"
                className="inline-flex items-center gap-2.5 bg-enviro-green hover:bg-enviro-hover text-white font-extrabold text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 group"
              >
                <span>Explore Collecting Partner Page</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

          </div>

          {/* Right Column: ReTrash Logo Card & Play Store Badge (Sized to match left column) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end items-center">
            <div className="flex flex-col items-center justify-center space-y-5 max-w-[440px] w-full mx-auto lg:ml-auto lg:mr-0">
              {/* ReTrash Image Graphic Card */}
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-slate-200/90 bg-white">
                <Image
                  src="/images/services/retrash.webp"
                  alt="ReTrash — Collection Network Partner"
                  fill
                  className="object-contain p-3"
                  priority
                />
              </div>

              {/* Google Play Store Badge - Full width matching image card */}
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block transition-transform duration-200 hover:scale-[1.02] active:scale-95 shadow-lg rounded-2xl"
              >
                <div className="bg-black text-white px-6 py-4 rounded-2xl border border-slate-800 flex items-center justify-center gap-4 w-full">
                  <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24">
                    <path fill="#EA4335" d="M3.6 2.3A1.9 1.9 0 0 0 3 3.7v16.6a1.9 1.9 0 0 0 .6 1.4l.1.1 9.3-9.3v-.2L3.7 2.2l-.1.1z" />
                    <path fill="#FBBC04" d="M16.1 15.5l-3.1-3.1v-.2l3.1-3.1.1.1 3.7 2.1c1.1.6 1.1 1.6 0 2.2l-3.8 2.0z" />
                    <path fill="#4285F4" d="M16.2 15.4L13 12.3 3.6 21.7c.4.4.9.4 1.6 0l11-6.3" />
                    <path fill="#34A853" d="M16.2 8.6L5.2 2.3c-.7-.4-1.2-.4-1.6 0l9.4 9.4 3.2-3.1z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-300">GET IT ON</div>
                    <div className="text-lg font-bold leading-tight font-sans">Google Play</div>
                  </div>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
