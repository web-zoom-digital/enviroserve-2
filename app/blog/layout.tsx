import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Blog & Insights | EnviroServe India",
    template: "%s | EnviroServe Blog",
  },
  description:
    "Explore latest news, regulatory updates on CPCB EPR rules, e-waste de-manufacturing, and lithium-ion battery recycling solutions from EnviroServe.",
  alternates: {
    canonical: "https://enviroserve.in/blog",
  },
  openGraph: {
    title: "Blog & Insights | EnviroServe",
    description: "Latest news on CPCB EPR rules, e-waste, and battery recycling.",
    url: "https://enviroserve.in/blog",
    siteName: "EnviroServe",
    images: [{ url: "/images/blog/epr-compliance.webp" }],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "EnviroServe Blog & Knowledge Hub",
    description: "Latest articles on e-waste recycling, lithium-ion battery recovery, and EPR compliance in India.",
    url: "https://enviroserve.in/blog",
    publisher: {
      "@type": "Organization",
      name: "EnviroServe Technologies Pvt. Ltd.",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      {children}
    </>
  );
}
