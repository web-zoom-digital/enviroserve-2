"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";

const playStoreUrl = process.env.NEXT_PUBLIC_RETRASH_PLAY_STORE_URL || "https://play.google.com/store/apps/details?id=com.retrash.partner&hl=en_IN";

export function CollectingPartnerHero() {
  return (
    <section className="relative w-full h-screen min-h-[650px] flex items-center justify-center overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/partners/retrash/retrash-collecting-partner.jpg"
          alt="ReTrash collection partner — doorstep waste pickup"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          quality={85}
        />
      </div>

      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-slate-950/60 via-slate-900/50 to-slate-950/70" />

      {/* Centered Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          {/* Eyebrow Badge */}
         
          {/* ReTrash Logo — co-branding mark */}
          

          {/* H1 — same style as homepage */}
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading text-white tracking-tight leading-tight max-w-4xl mx-auto"
            style={{ textShadow: "0 4px 16px rgba(0, 0, 0, 0.85), 0 2px 4px rgba(0, 0, 0, 0.9)" }}
          >
            Powering Responsible Collection with{" "}
            <span className="text-lime-300">ReTrash</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg sm:text-2xl text-white max-w-2xl mx-auto font-semibold leading-relaxed"
            style={{ textShadow: "0 2px 12px rgba(0, 0, 0, 0.85)" }}
          >
            Doorstep scrap & e-waste collection, channelized into EnviroServe&apos;s certified recycling network.
          </p>

          {/* CTA Buttons — same style as homepage */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-enviro-green hover:bg-enviro-hover text-white font-extrabold text-base sm:text-lg px-9 py-4 rounded-full transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95 border-2 border-emerald-400/40"
            >
              <Download className="w-5 h-5" />
              <span>Download ReTrash App</span>
            </a>

            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 bg-slate-900/80 hover:bg-slate-900 text-white font-bold text-base sm:text-lg px-8 py-4 rounded-full transition-all border border-white/40 backdrop-blur-md shadow-xl"
            >
              <span>How It Works</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade into page content */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent z-[2]" />
    </section>
  );
}
