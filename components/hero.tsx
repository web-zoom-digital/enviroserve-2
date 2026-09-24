"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Leaf } from "lucide-react";

const heroSlides = [
  {
    eyebrow: "Recycle More • Enjoy Nature For More",
    title: "Recycle More. Enjoy Nature For More.",
    description: "Join hands with EnviroServe to build a sustainable and eco-friendly tomorrow through certified recycling, battery recovery, and circular waste management.",
    buttonText: "Join the Mission",
    buttonHref: "/services/e-waste-recycling",
    image: "/images/hero/hero-home-dslr.jpg",
  },
  {
    eyebrow: "Circular Future & Sustainability",
    title: "Recycle More to Preserve Earth's Natural Ecosystems",
    description: "Connecting recyclers, producers, and brand owners through traceable waste management solutions and turnkey CPCB EPR compliance.",
    buttonText: "Explore Our Services",
    buttonHref: "/services/e-waste-epr",
    image: "/images/hero/hero-services-dslr.jpg",
  },
  {
    eyebrow: "Certified E-Waste & Battery Recovery",
    title: "Protecting Nature Today for a Flourishing Tomorrow",
    description: "Safe disposal and certified recovery of electronic & battery waste — empowering communities to recycle more and enjoy nature for generations.",
    buttonText: "Our E-Waste Services",
    buttonHref: "/services/e-waste-recycling",
    image: "/images/hero/hero-howwedoit-dslr.jpg",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative w-full h-screen min-h-[650px] flex items-center justify-center overflow-hidden">
      
      {/* 100% Full Screen Background Image without Dark Mode or Opacity Overlays */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Main Content Container with High Readability Text Shadow */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {/* Eyebrow Pill */}
            {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/80 backdrop-blur-md text-emerald-300 border border-emerald-400/40 text-xs sm:text-sm font-bold tracking-wide uppercase shadow-lg">
              <Leaf className="w-4 h-4 text-emerald-400" />
              <span>{slide.eyebrow}</span>
            </div> */}

            {/* H1 Title with crisp text shadow for readability over bright image */}
            <h1 
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading text-white tracking-tight leading-tight max-w-4xl mx-auto"
              style={{ textShadow: "0 4px 16px rgba(0, 0, 0, 0.85), 0 2px 4px rgba(0, 0, 0, 0.9)" }}
            >
              {slide.title}
            </h1>

            {/* Subtitle Description */}
            <p 
              className="text-lg sm:text-2xl text-white max-w-2xl mx-auto font-semibold leading-relaxed"
              style={{ textShadow: "0 2px 12px rgba(0, 0, 0, 0.85)" }}
            >
              {slide.description}
            </p>

            {/* Action Buttons */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={slide.buttonHref}
                className="inline-flex items-center gap-2.5 bg-enviro-green hover:bg-enviro-hover text-white font-extrabold text-base sm:text-lg px-9 py-4 rounded-full transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95 border-2 border-emerald-400/40"
              >
                <span>{slide.buttonText}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-slate-900/80 hover:bg-slate-900 text-white font-bold text-base sm:text-lg px-8 py-4 rounded-full transition-all border border-white/40 backdrop-blur-md shadow-xl"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        <button
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
          className="p-2.5 rounded-full bg-slate-900/80 hover:bg-enviro-green text-white transition-colors border border-white/30 backdrop-blur-md"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-3 rounded-full transition-all duration-300 ${
                currentSlide === idx ? "w-9 bg-enviro-accent shadow-md" : "w-3 bg-white/70 hover:bg-white"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="p-2.5 rounded-full bg-slate-900/80 hover:bg-enviro-green text-white transition-colors border border-white/30 backdrop-blur-md"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

    </section>
  );
}
