import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbsProps {
  items: {
    label: string;
    href?: string;
  }[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `https://enviroserve.in${item.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="py-3 px-4 bg-slate-100 rounded-xl mb-6 border border-slate-200/80">
        <ol className="flex items-center flex-wrap gap-2 text-xs text-slate-600 font-medium">
          <li className="flex items-center gap-1">
            <Link href="/" className="hover:text-enviro-green flex items-center gap-1 transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
          </li>
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              {item.href ? (
                <Link href={item.href} className="hover:text-enviro-green transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-enviro-navy font-bold line-clamp-1 max-w-[200px] sm:max-w-md">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
