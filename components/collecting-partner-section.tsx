"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Truck, ArrowRight, CheckCircle2 } from "lucide-react";

const playStoreUrl = process.env.NEXT_PUBLIC_RETRASH_PLAY_STORE_URL || "https://play.google.com/store/apps/details?id=com.retrash.partner&hl=en_IN";

export function CollectingPartnerSection() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Truck className="w-3.5 h-3.5 text-emerald-600" />
            <span>OFFICIAL COLLECTION PARTNER</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-enviro-navy tracking-tight leading-tight">
            Doorstep Scrap & E-Waste Pickup with <span className="text-emerald-600">ReTrash</span>
          </h2>

          <p className="text-base sm:text-lg text-enviro-gray leading-relaxed max-w-2xl mx-auto">
            EnviroServe collaborates with <strong>ReTrash</strong> to make waste recycling effortless and accessible. Through organized, app-driven doorstep collection, households, corporate offices, and institutions can channel scrap metal, e-waste, and dry recyclables straight into certified recovery workflows.
          </p>
        </div>

        {/* Grid Section: Bullet Points (Left) & ReTrash Card/Play Store (Right) - Aligned to max-w-6xl */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Bullet Points Card */}
          <div className="lg:col-span-6 bg-white p-7 sm:p-9 rounded-3xl border border-slate-200/80 shadow-md space-y-5 flex flex-col justify-center">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-sm sm:text-base font-semibold text-slate-700 leading-relaxed">
                <strong className="text-enviro-navy font-bold">App-Driven Convenience:</strong> Schedule doorstep scrap pickups for domestic or bulk enterprise waste with real-time tracking.
              </span>
            </div>
            <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-sm sm:text-base font-semibold text-slate-700 leading-relaxed">
                <strong className="text-enviro-navy font-bold">Calibrated Digital Scales:</strong> Verified collection staff operating transparent digital weighing instruments.
              </span>
            </div>
            <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-sm sm:text-base font-semibold text-slate-700 leading-relaxed">
                <strong className="text-enviro-navy font-bold">100% Certified Recycling:</strong> Materials avoid informal dumping and flow directly into EnviroServe&apos;s authorized facilities.
              </span>
            </div>
          </div>

          {/* Right Column: ReTrash Logo Card & Play Store Badge */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="flex flex-col items-center justify-center space-y-4 max-w-[460px] w-full">
              {/* ReTrash Image Graphic Card */}
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-md border border-slate-200/90 bg-white cursor-pointer hover:scale-[1.01] transition-transform">
                <Image
                  src="/images/services/retrash.webp"
                  alt="ReTrash — Collection Network Partner"
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>

              {/* Google Play Store Badge */}
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block transition-transform duration-200 hover:scale-[1.02] active:scale-95 shadow-md rounded-2xl cursor-pointer"
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

        {/* Bottom Centered Explore Button */}
        <div className="pt-4 flex justify-center w-full">
          <Link
            href="/collecting-partner"
            className="inline-flex items-center gap-2.5 bg-enviro-green hover:bg-enviro-hover text-white font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 group cursor-pointer"
          >
            <span>Explore Collection Partner Page</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
