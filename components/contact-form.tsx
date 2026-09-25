"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    service: "E-Waste Recycling",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSuccess(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          company: "",
          service: "E-Waste Recycling",
          message: "",
        });
      } else {
        setErrorMsg(data.error || "Failed to submit enquiry. Please try again.");
      }
    } catch (err: any) {
      setErrorMsg("An unexpected error occurred. Please check your network connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-card">
      <div className="space-y-2 mb-8">
        <h3 className="text-2xl font-bold font-heading text-enviro-navy">
          Get In Touch with Us!
        </h3>
        <p className="text-sm text-enviro-gray">
          Feel free to ask any question or let&apos;s talk about your recycling and EPR compliance requirements.
        </p>
      </div>

      {success && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-enviro-green flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
          <div className="text-sm font-semibold">
            Thank you for reaching out! Your enquiry has been sent successfully. Our team will contact you shortly.
          </div>
        </div>
      )}

      {errorMsg && (
        <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-300 text-rose-700 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <div className="text-sm font-semibold">{errorMsg}</div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Name */}
          <div className="space-y-1.5">
            <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-enviro-navy">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-enviro-accent focus:ring-2 focus:ring-emerald-200 text-sm text-enviro-navy transition-all outline-none"
            />
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-enviro-navy">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-enviro-accent focus:ring-2 focus:ring-emerald-200 text-sm text-enviro-navy transition-all outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Email */}
          <div className="space-y-1.5">
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-enviro-navy">
              Official Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="name@company.com"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-enviro-accent focus:ring-2 focus:ring-emerald-200 text-sm text-enviro-navy transition-all outline-none"
            />
          </div>

          {/* Company */}
          <div className="space-y-1.5">
            <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-enviro-navy">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your Organization"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-enviro-accent focus:ring-2 focus:ring-emerald-200 text-sm text-enviro-navy transition-all outline-none"
            />
          </div>
        </div>

        {/* Service Required */}
        <div className="space-y-1.5">
          <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-enviro-navy">
            Service Required *
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-enviro-accent focus:ring-2 focus:ring-emerald-200 text-sm text-enviro-navy bg-white transition-all outline-none"
          >
            <option value="E-Waste Recycling">E-Waste Recycling</option>
            <option value="Li-Ion Battery Recycling">Li-Ion Battery Recycling</option>
            <option value="E-Waste EPR">E-Waste EPR Compliance</option>
            <option value="Li-Ion Battery EPR">Li-Ion Battery EPR Compliance</option>
            <option value="Battery Waste EPR">Battery Waste EPR Compliance</option>
            <option value="Multi-Category EPR">Multi-Category EPR Advisory</option>
            <option value="Annual EPR Filing">Annual Filing & Documentation</option>
            <option value="Circular Economy Responsibility">Circular Economy Responsibility</option>
            <option value="Reverse Logistics">Reverse Logistics</option>
            <option value="Asset Liquidation">Corporate Asset Liquidation</option>
          </select>
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-enviro-navy">
            Enquiry Details
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your recycling quantity or EPR requirement..."
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-enviro-accent focus:ring-2 focus:ring-emerald-200 text-sm text-enviro-navy transition-all outline-none resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full inline-flex items-center justify-center gap-2 bg-enviro-green hover:bg-enviro-hover disabled:bg-slate-400 text-white font-bold text-base py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Sending Enquiry...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Send Enquiry</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
