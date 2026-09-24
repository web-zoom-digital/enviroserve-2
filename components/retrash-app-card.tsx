"use client";

import React from "react";
import { Smartphone } from "lucide-react";

const playStoreUrl = process.env.NEXT_PUBLIC_RETRASH_PLAY_STORE_URL || "https://play.google.com/store/apps/details?id=com.retrash.partner&hl=en_IN";

export function ReTrashAppCard() {
  return (
    <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xl space-y-5 mx-auto">
      {/* Partner Co-Branding Header */}
      <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
            <Smartphone className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">RETRASH APP</div>
            <div className="text-sm font-extrabold text-slate-900 leading-tight">Collection Network Partner</div>
          </div>
        </div>
        <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-extrabold uppercase tracking-wide shrink-0">
          Live on Android
        </span>
      </div>

      {/* Badges & QR Code Layout */}
      <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-5">
        
        {/* Store Buttons */}
        <div className="flex flex-col gap-3 w-full sm:w-auto">
          {/* Google Play Store Badge */}
          <a
            href={playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-transform duration-200 hover:scale-[1.03] active:scale-95"
          >
            <div className="bg-black text-white px-4 py-2.5 rounded-xl border border-slate-800 flex items-center gap-3 w-full sm:w-44 shadow-md">
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M3.6 2.3A1.9 1.9 0 0 0 3 3.7v16.6a1.9 1.9 0 0 0 .6 1.4l.1.1 9.3-9.3v-.2L3.7 2.2l-.1.1z" />
                <path fill="#FBBC04" d="M16.1 15.5l-3.1-3.1v-.2l3.1-3.1.1.1 3.7 2.1c1.1.6 1.1 1.6 0 2.2l-3.8 2.0z" />
                <path fill="#4285F4" d="M16.2 15.4L13 12.3 3.6 21.7c.4.4.9.4 1.6 0l11-6.3" />
                <path fill="#34A853" d="M16.2 8.6L5.2 2.3c-.7-.4-1.2-.4-1.6 0l9.4 9.4 3.2-3.1z" />
              </svg>
              <div className="text-left">
                <div className="text-[8px] uppercase tracking-wider font-semibold text-slate-300">GET IT ON</div>
                <div className="text-xs font-bold leading-tight font-sans">Google Play</div>
              </div>
            </div>
          </a>

          {/* App Store Badge */}
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="block transition-transform duration-200 hover:scale-[1.03] active:scale-95"
          >
            <div className="bg-black text-white px-4 py-2.5 rounded-xl border border-slate-800 flex items-center gap-3 w-full sm:w-44 shadow-md">
              <svg className="w-5 h-5 shrink-0 fill-current" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.63-.78 1.07-1.85.95-2.93-.93.04-2.07.62-2.74 1.41-.6.7-.1.13-1.86.99-2.92 1.05.08 2.12-.58 2.8-.02z" />
              </svg>
              <div className="text-left">
                <div className="text-[8px] uppercase tracking-wider font-semibold text-slate-300">DOWNLOAD ON THE</div>
                <div className="text-xs font-bold leading-tight font-sans">App Store</div>
              </div>
            </div>
          </a>
        </div>

        {/* QR Code Square Graphic */}
        <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center shrink-0">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28">
            <svg viewBox="0 0 100 100" className="w-full h-full text-slate-900 fill-current">
              {/* QR Code Corner Markers */}
              <rect x="5" y="5" width="28" height="28" rx="4" fill="none" stroke="currentColor" strokeWidth="6" />
              <rect x="13" y="13" width="12" height="12" rx="2" fill="currentColor" />
              
              <rect x="67" y="5" width="28" height="28" rx="4" fill="none" stroke="currentColor" strokeWidth="6" />
              <rect x="75" y="13" width="12" height="12" rx="2" fill="currentColor" />
              
              <rect x="5" y="67" width="28" height="28" rx="4" fill="none" stroke="currentColor" strokeWidth="6" />
              <rect x="13" y="75" width="12" height="12" rx="2" fill="currentColor" />

              {/* QR Data Pattern Rects */}
              <rect x="40" y="8" width="6" height="6" />
              <rect x="50" y="8" width="6" height="6" />
              <rect x="40" y="20" width="6" height="6" />
              <rect x="54" y="20" width="6" height="6" />
              <rect x="8" y="40" width="6" height="6" />
              <rect x="20" y="40" width="6" height="6" />
              <rect x="20" y="52" width="6" height="6" />
              <rect x="38" y="38" width="8" height="8" />
              <rect x="50" y="38" width="8" height="8" />
              <rect x="62" y="38" width="8" height="8" />
              <rect x="74" y="38" width="8" height="8" />
              <rect x="86" y="38" width="8" height="8" />
              <rect x="38" y="50" width="8" height="8" />
              <rect x="54" y="50" width="8" height="8" />
              <rect x="70" y="50" width="8" height="8" />
              <rect x="40" y="68" width="6" height="6" />
              <rect x="52" y="68" width="6" height="6" />
              <rect x="64" y="68" width="8" height="8" />
              <rect x="76" y="68" width="8" height="8" />
              <rect x="88" y="68" width="6" height="6" />
              <rect x="40" y="80" width="6" height="6" />
              <rect x="56" y="80" width="6" height="6" />
              <rect x="70" y="80" width="8" height="8" />
              <rect x="84" y="80" width="8" height="8" />
            </svg>
          </div>
          <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider mt-1.5">
            Scan to Install
          </span>
        </div>

      </div>

      {/* Bottom ReTrash Tagline */}
      <div className="text-center text-xs text-slate-500 font-semibold italic pt-1">
        &ldquo;Cleaning the Earth, One Pickup at a Time.&rdquo;
      </div>
    </div>
  );
}
