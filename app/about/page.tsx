import React from "react";
import { Metadata } from "next";
import { AboutContent } from "@/components/about/about-content";
import { companyInfo } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us | EnviroServe Technologies Pvt. Ltd. | India's Leading Recycling & EPR Partner",
  description:
    "Learn about EnviroServe Technologies Pvt. Ltd.—India's trusted pioneer in responsible e-waste recycling, lithium-ion battery recovery, reverse logistics, and Extended Producer Responsibility (EPR) compliance.",
  keywords: [
    "about EnviroServe",
    "EnviroServe Technologies",
    "e waste recycling company",
    "e waste management company",
    "battery recycling company",
    "EPR solutions India",
    "waste management company",
    "recycling company India",
    "electronic waste recycling",
  ],
  alternates: {
    canonical: "https://enviroserve.in/about",
  },
  openGraph: {
    title: "About Us | EnviroServe Technologies Pvt. Ltd.",
    description:
      "Responsible Recycling. Built for a Circular Future. Learn how EnviroServe empowers enterprises across India with scientific waste recovery and EPR compliance.",
    url: "https://enviroserve.in/about",
    siteName: "EnviroServe",
    images: [
      {
        url: "/images/hero/hero-about-dslr.jpg",
        alt: "EnviroServe Technologies About Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | EnviroServe Technologies Pvt. Ltd.",
    description: "Responsible Recycling. Built for a Circular Future.",
    images: ["/images/hero/hero-about-dslr.jpg"],
  },
};

export default function AboutPage() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyInfo.name,
    url: "https://enviroserve.in",
    logo: "https://enviroserve.in/images/logo/EnviroServe-1.png",
    description: companyInfo.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyInfo.address.street,
      addressLocality: companyInfo.address.city,
      postalCode: companyInfo.address.postalCode,
      addressCountry: companyInfo.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: companyInfo.contact.tollFree,
      contactType: "customer service",
      email: companyInfo.contact.email,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://enviroserve.in/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Us",
        item: "https://enviroserve.in/about",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What types of waste does EnviroServe handle?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "EnviroServe specializes in e-waste (computers, servers, PCBs, telecom hardware), lithium-ion batteries (EV packs, ESS units, portable cells), lead-acid batteries, plastic packaging waste (Categories I-IV), waste tyres, used oil, and industrial metal scrap.",
        },
      },
      {
        "@type": "Question",
        name: "Does EnviroServe provide e-waste recycling services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, EnviroServe operates CPCB-authorized e-waste recycling operations—providing scientific manual dismantling, mechanical shredding, metal recovery, and certified physical data destruction.",
        },
      },
      {
        "@type": "Question",
        name: "Does EnviroServe support EPR requirements?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, EnviroServe provides turnkey Extended Producer Responsibility (EPR) advisory and credit fulfillment across E-Waste, Plastics, Batteries, Tyres, and Used Oil under Central Pollution Control Board (CPCB) portals.",
        },
      },
      {
        "@type": "Question",
        name: "Does EnviroServe handle Li-ion battery recycling?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we process spent Lithium-Ion batteries from Electric Vehicles (EVs), energy storage systems (ESS), and portable electronics—safely discharging cells and recovering critical minerals like Cobalt, Lithium, Nickel, and Manganese.",
        },
      },
      {
        "@type": "Question",
        name: "How does EnviroServe manage collection and recycling?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We deploy a pan-India fleet of authorized, GPS-tracked vehicles equipped with UN-certified containment vessels to collect waste directly from client facilities and transport it to licensed processing plants.",
        },
      },
      {
        "@type": "Question",
        name: "How can a business contact EnviroServe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can reach our corporate advisory team by calling toll-free at 1800 309 9943 / 011-43510683, emailing info@enviroserve.in, or filling out the contact form below.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <AboutContent />
    </>
  );
}
