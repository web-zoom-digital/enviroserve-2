
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Truck,
  Smartphone,
  ShieldCheck,
  Recycle,
  ArrowRight,
  Download,
  CheckCircle2,
  Calendar,
  Scale,
  Layers,
  FileText,
  ExternalLink,
  ChevronRight,
  HelpCircle,
  Building2,
  Home,
  Cpu,
  RefreshCw,
  Award
} from "lucide-react";
// import { PageJsonLd, FAQJsonLd } from "@/components/json-ld";
import { Breadcrumbs } from "@/components/blog/breadcrumbs";
import { CollectingPartnerHero } from "@/components/collecting-partner-hero";

export const metadata = {
  title: "ReTrash — Collecting Partner | EnviroServe Waste Management",
  description: "EnviroServe partners with ReTrash to power accessible waste & scrap collection, doorstep pickup, e-waste channelization, and seamless entry into certified recycling workflows.",
  alternates: {
    canonical: "https://enviroserve.in/collecting-partner",
  },
  openGraph: {
    title: "ReTrash — Our Collecting Partner | EnviroServe",
    description: "Discover how ReTrash powers organized doorstep waste & scrap collection, connecting waste generators with EnviroServe's authorized recycling network.",
    url: "https://enviroserve.in/collecting-partner",
    siteName: "EnviroServe",
    images: [{ url: "/images/partners/retrash/retrash-collecting-partner.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ReTrash — Our Collecting Partner | EnviroServe",
    description: "Discover how ReTrash powers organized doorstep waste & scrap collection.",
    images: ["/images/partners/retrash/retrash-collecting-partner.jpg"],
  },
};

const playStoreUrl = process.env.NEXT_PUBLIC_RETRASH_PLAY_STORE_URL || "https://play.google.com/store/apps/details?id=in.retrash.app";

const collectionCategories = [
  {
    title: "Scrap Metal & Paper",
    desc: "Ferrous and non-ferrous metal scrap, copper wiring, aluminum offcuts, brass, and bulk cardboard/paper scrap.",
    icon: Layers,
    badge: "Domestic & Commercial",
  },
  {
    title: "E-Waste & IT Equipment",
    desc: "Obsolete computers, laptops, servers, mobile phones, printed circuit boards, cables, and electronic devices.",
    icon: Cpu,
    badge: "Electronic Scrap",
  },
  {
    title: "Household Recyclables",
    desc: "Domestic dry recyclable packaging, rigid plastic containers, glass bottles, and sorted paper boxes.",
    icon: Home,
    badge: "Doorstep Pickup",
  },
  {
    title: "Office & Business Clutter",
    desc: "Bulk office paper waste, decommissioned furniture scrap, IT hardware, and packaging materials.",
    icon: Building2,
    badge: "Bulk Enterprise",
  },
  {
    title: "Institutional Scrap",
    desc: "Campus maintenance scrap, university labs equipment scrap, hotel dry waste, and hospital non-hazardous scrap.",
    icon: RefreshCw,
    badge: "Scheduled Consignment",
  },
  {
    title: "Industrial Dry Recyclables",
    desc: "Manufacturing floor dry metal offcuts, plastic sprues, clean packaging films, and scrap drums.",
    icon: Truck,
    badge: "Logistics Hub",
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

export default function CollectingPartnerPage() {
  return (
    <>
      <CollectingPartnerHero />

      {/* ============ REST OF PAGE ============ */}
      <div className="pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">

          {/* Breadcrumbs */}
          {/* <Breadcrumbs
            items={[
              { label: "Collecting Partner (ReTrash)" },
            ]}
          /> */}

          {/* About ReTrash Section */}
          <section className="mt-16 bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

              {/* Logo & Card (4 cols) */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center space-y-4 max-w-[320px] mx-auto w-full">
                {/* ReTrash Image Graphic Card */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-slate-200/90 bg-white">
                  <Image
                    src="/images/services/retrash.webp"
                    alt="ReTrash — Collection Network Partner"
                    fill
                    className="object-contain p-2"
                  />
                </div>

                {/* Google Play Store Badge - Full width matching image card */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.retrash.partner&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block transition-transform duration-200 hover:scale-[1.02] active:scale-95 shadow-md rounded-xl"
                >
                  <div className="bg-black text-white px-5 py-3 rounded-xl border border-slate-800 flex items-center justify-center gap-3.5 w-full">
                    <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24">
                      <path fill="#EA4335" d="M3.6 2.3A1.9 1.9 0 0 0 3 3.7v16.6a1.9 1.9 0 0 0 .6 1.4l.1.1 9.3-9.3v-.2L3.7 2.2l-.1.1z" />
                      <path fill="#FBBC04" d="M16.1 15.5l-3.1-3.1v-.2l3.1-3.1.1.1 3.7 2.1c1.1.6 1.1 1.6 0 2.2l-3.8 2.0z" />
                      <path fill="#4285F4" d="M16.2 15.4L13 12.3 3.6 21.7c.4.4.9.4 1.6 0l11-6.3" />
                      <path fill="#34A853" d="M16.2 8.6L5.2 2.3c-.7-.4-1.2-.4-1.6 0l9.4 9.4 3.2-3.1z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-[9px] uppercase tracking-wider font-semibold text-slate-300">GET IT ON</div>
                      <div className="text-sm font-bold leading-tight font-sans">Google Play</div>
                    </div>
                  </div>
                </a>
              </div>

              {/* Description & Value Proposition (8 cols) */}
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                  Smarter Collection Network
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 tracking-tight">
                  Bridging Waste Generators with Authorized Recycling
                </h2>

                <p className="text-slate-600 leading-relaxed text-base">
                  ReTrash is an innovative waste collection initiative built to make recycling accessible, organized, and transparent for households, commercial offices, and educational institutions across India.
                </p>

                <p className="text-slate-600 leading-relaxed text-base">
                  Through the ReTrash app-based platform, waste generators can book door-step pickups for dry recyclables, scrap metal, and discarded electronics. Once collected, ReTrash ensures that recyclable waste avoids informal dumping sites and flows directly into certified green channels managed by EnviroServe.
                </p>

                {/* 4 Feature Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                    <Smartphone className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">App-Based Scheduling</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Book pickups at your convenient time slot with real-time tracking.</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Verified On-Site Personnel</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Trained pickup staff operating calibrated digital scales.</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>

          {/* Collection Categories Section */}
          <section className="mt-16 space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-block px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                What Can Be Collected
              </div>
              <h2 className="text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
                Comprehensive Waste & Scrap Categories
              </h2>
              <p className="text-slate-600 text-base">
                ReTrash facilitates doorstep pickup and bulk consignment collection for a wide array of recyclable streams.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {collectionCategories.map((cat, idx) => {
                const CatIcon = cat.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-xl bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <CatIcon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full">
                        {cat.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mt-1.5">
                        {cat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* How Collection Process Works Timeline */}
          <section id="how-it-works" className="mt-20 bg-slate-900 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 space-y-12">

            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-block px-3.5 py-1 rounded-full bg-lime-400/20 text-lime-300 border border-lime-400/30 text-xs font-bold uppercase tracking-wider">
                Step-by-Step Workflow
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight">
                How the Collection to Recycling Journey Works
              </h2>
              <p className="text-slate-300 text-base">
                A transparent 5-step process moving waste from your doorstep into certified recovery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
              {processSteps.map((step, idx) => {
                const StepIcon = step.icon;
                return (
                  <div key={idx} className="relative bg-slate-800/80 p-6 rounded-2xl border border-slate-700 space-y-4 hover:border-emerald-500/50 transition-all group">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-extrabold font-heading text-lime-400">
                        {step.step}
                      </span>
                      <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                        <StepIcon className="w-5 h-5" />
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
                );
              })}
            </div>

          </section>

          {/* From Collection to Recycling Ecosystem Journey */}
          <section className="mt-20 bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200 space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-block px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 text-center">
              <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-lg mx-auto shadow-md">
                  1
                </div>
                <h4 className="font-bold text-slate-900 text-base">Waste Generator</h4>
                <p className="text-xs text-slate-600">Homeowner or business schedules scrap pickup via ReTrash app.</p>
              </div>

              <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-lg mx-auto shadow-md">
                  2
                </div>
                <h4 className="font-bold text-slate-900 text-base">ReTrash Doorstep Pickup</h4>
                <p className="text-xs text-slate-600">Verified crew collects, weighs, and segregates recyclables on-site.</p>
              </div>

              <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-lg mx-auto shadow-md">
                  3
                </div>
                <h4 className="font-bold text-slate-900 text-base">EnviroServe Facility</h4>
                <p className="text-xs text-slate-600">Materials undergo de-manufacturing, shredding, and refining.</p>
              </div>

              <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-lg mx-auto shadow-md">
                  4
                </div>
                <h4 className="font-bold text-slate-900 text-base">Circular Resource</h4>
                <p className="text-xs text-slate-600">Secondary metals & materials re-enter industrial supply chains.</p>
              </div>
            </div>

            {/* Related Service Internal Links */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-600">
              <span className="text-slate-400">Related Services:</span>
              <Link href="/services/reverse-logistics" className="hover:text-emerald-700 underline">Reverse Logistics</Link>
              <span>•</span>
              <Link href="/services/e-waste-recycling" className="hover:text-emerald-700 underline">E-Waste Recycling</Link>
              <span>•</span>
              <Link href="/services/li-ion-battery-recycling" className="hover:text-emerald-700 underline">Battery Waste</Link>
              <span>•</span>
              <Link href="/services/e-waste-epr" className="hover:text-emerald-700 underline">EPR Compliance</Link>
            </div>
          </section>

          {/* FAQ Accordion Section */}
          <section className="mt-20 max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <div className="inline-block px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                Frequently Asked Questions
              </div>
              <h2 className="text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
                Collecting Partner FAQs
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, fIdx) => (
                <div key={fIdx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-2">
                  <h3 className="text-base font-bold text-slate-900 flex items-start gap-2.5">
                    <HelpCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed pl-7">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA Banner */}
          <section className="mt-20 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl p-8 sm:p-12 text-center text-white shadow-xl space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight">
              Ready to Give Your Recyclables a Responsible Next Step?
            </h2>
            <p className="text-emerald-100 max-w-2xl mx-auto text-base sm:text-lg">
              Download the ReTrash app for individual doorstep scrap pickup, or consult EnviroServe for enterprise B2B recycling & EPR compliance management.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-white text-emerald-800 hover:bg-emerald-50 font-extrabold px-7 py-3.5 rounded-2xl shadow-md transition-all hover:scale-[1.02]"
              >
                <Download className="w-5 h-5" />
                <span>Download ReTrash App</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-emerald-800/80 hover:bg-emerald-900 text-white font-bold px-7 py-3.5 rounded-2xl border border-white/20 transition-all hover:scale-[1.02]"
              >
                <span>Contact EnviroServe</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
