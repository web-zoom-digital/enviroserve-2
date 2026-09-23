import React from "react";
import { companyInfo } from "@/data/company";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyInfo.name,
    alternateName: companyInfo.shortName,
    url: "https://enviroserve.in",
    logo: "https://enviroserve.in/images/logo/EnviroServe-1.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: companyInfo.contact.tollFree,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: companyInfo.address.street,
      addressLocality: companyInfo.address.city,
      postalCode: companyInfo.address.postalCode,
      addressCountry: "IN",
    },
    sameAs: [
      companyInfo.social.linkedin,
      companyInfo.social.twitter,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: companyInfo.name,
    image: "https://enviroserve.in/images/logo/EnviroServe-1.png",
    "@id": "https://enviroserve.in/#localbusiness",
    url: "https://enviroserve.in",
    telephone: companyInfo.contact.tollFree,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyInfo.address.street,
      addressLocality: companyInfo.address.city,
      postalCode: companyInfo.address.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.6454796,
      longitude: 77.2372481,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "EnviroServe Technologies",
    url: "https://enviroserve.in",
    publisher: {
      "@type": "Organization",
      name: companyInfo.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: name,
    description: description,
    provider: {
      "@type": "Organization",
      name: companyInfo.name,
      url: "https://enviroserve.in",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    url: url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  url,
  image,
  datePublished,
  authorName,
}: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  authorName: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: image,
    url: url,
    datePublished: datePublished,
    author: {
      "@type": "Organization",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: companyInfo.name,
      logo: {
        "@type": "ImageObject",
        url: "https://enviroserve.in/images/logo/EnviroServe-1.png",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
