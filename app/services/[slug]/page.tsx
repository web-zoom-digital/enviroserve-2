import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { servicesData } from "@/data/services";
import { ServiceHero } from "@/components/services/service-hero";
import { ServiceSummary } from "@/components/services/service-summary";
import { ServiceAlternatingSections } from "@/components/services/service-alternating-sections";
import { ServiceProcess } from "@/components/services/service-process";
import { ServiceBenefits } from "@/components/services/service-benefits";
import { ServiceAudience } from "@/components/services/service-audience";
import { WhyEnviroServeSection } from "@/components/services/why-enviroserve-section";
import { ServiceCTA } from "@/components/services/service-cta";
import { ServiceFAQ } from "@/components/services/service-faq";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = servicesData[params.slug];
  if (!service) {
    return {
      title: "Service Not Found | EnviroServe",
    };
  }

  return {
    title: service.meta.title,
    description: service.meta.description,
    keywords: service.meta.keywords,
    alternates: {
      canonical: `https://enviroserve.in/services/${params.slug}`,
    },
    openGraph: {
      title: service.meta.title,
      description: service.meta.description,
      url: `https://enviroserve.in/services/${params.slug}`,
      siteName: "EnviroServe",
      images: [
        {
          url: service.heroImage,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.meta.title,
      description: service.meta.description,
      images: [service.heroImage],
    },
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = servicesData[params.slug];
  if (!service) {
    notFound();
  }

  // JSON-LD Schemas
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    provider: {
      "@type": "Organization",
      name: "EnviroServe Technologies Pvt. Ltd.",
      url: "https://enviroserve.in",
    },
    serviceType: service.category,
    description: service.heroDescription,
    url: `https://enviroserve.in/services/${params.slug}`,
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
        name: "Services",
        item: "https://enviroserve.in/services/e-waste-recycling",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.shortTitle,
        item: `https://enviroserve.in/services/${params.slug}`,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="min-h-screen bg-white">
        
        {/* 1. HERO (Light Theme) */}
        <ServiceHero
          title={service.title}
          eyebrowCategory={service.eyebrowCategory}
          heroDescription={service.heroDescription}
          heroImage={service.heroImage}
          shortTitle={service.shortTitle}
        />

        {/* 2. QUICK SUMMARY / AT A GLANCE */}
        <ServiceSummary
          text={service.summary.text}
          highlights={service.summary.highlights}
        />

        {/* 3. MANDATORY ALTERNATING SECTIONS (IMAGE LEFT/RIGHT) */}
        <ServiceAlternatingSections sections={service.alternatingSections} />

        {/* 4. SERVICE PROCESS */}
        <ServiceProcess steps={service.processSteps} />

        {/* 5. BENEFITS & VALUE */}
        <ServiceBenefits benefits={service.benefits} />

        {/* 6. WHO IS THIS FOR? */}
        <ServiceAudience
          title={service.targetAudience.title}
          categories={service.targetAudience.categories}
        />

        {/* 7. WHY ENVIROSERVE */}
        <WhyEnviroServeSection
          title={service.whyEnviroServe.title}
          items={service.whyEnviroServe.items}
        />

        {/* 8. CTA (IMMEDIATELY BEFORE FAQ) */}
        <ServiceCTA shortTitle={service.shortTitle} />

        {/* 9. FAQ ACCORDION */}
        <ServiceFAQ faqs={service.faqs} shortTitle={service.shortTitle} />

      </div>
    </>
  );
}
