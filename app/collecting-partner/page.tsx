
import React from "react";
import { CollectingPartnerHero } from "@/components/collecting-partner-hero";
import { CollectingPartnerContent } from "@/components/collecting-partner-content";

export const metadata = {
  title: "ReTrash — Collection Partner | EnviroServe Waste Management",
  description: "EnviroServe partners with ReTrash to power accessible waste & scrap collection, doorstep pickup, e-waste channelization, and seamless entry into certified recycling workflows.",
  alternates: {
    canonical: "https://enviroserve.in/collecting-partner",
  },
  openGraph: {
    title: "ReTrash — Our Collection Partner | EnviroServe",
    description: "Discover how ReTrash powers organized doorstep waste & scrap collection, connecting waste generators with EnviroServe's authorized recycling network.",
    url: "https://enviroserve.in/collecting-partner",
    siteName: "EnviroServe",
    images: [{ url: "/images/partners/retrash/retrash-collecting-partner.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ReTrash — Our Collection Partner | EnviroServe",
    description: "Discover how ReTrash powers organized doorstep waste & scrap collection.",
    images: ["/images/partners/retrash/retrash-collecting-partner.jpg"],
  },
};

export default function CollectingPartnerPage() {
  return (
    <>
      <CollectingPartnerHero />
      <CollectingPartnerContent />
    </>
  );
}

