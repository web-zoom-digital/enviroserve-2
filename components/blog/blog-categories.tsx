"use client";

import React from "react";
import { BlogCategory } from "@/types/blog";
import { cn } from "@/lib/utils";

interface BlogCategoriesProps {
  activeCategory: BlogCategory;
  onSelectCategory: (category: BlogCategory) => void;
}

const categoriesList: BlogCategory[] = [
  "All Posts",
  "Battery Waste",
  "e-Waste",
  "EPR",
  "Hazardous waste",
  "Plastic Waste",
  "Waste management",
];

export function BlogCategories({
  activeCategory,
  onSelectCategory,
}: BlogCategoriesProps) {
  return (
    <div className="w-full overflow-x-auto pb-4 pt-2 border-b border-slate-200 scrollbar-none">
      <div className="flex items-center gap-2 min-w-max">
        {categoriesList.map((cat, idx) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={idx}
              onClick={() => onSelectCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 focus:outline-none",
                isActive
                  ? "bg-enviro-green text-white shadow-sm scale-105"
                  : "bg-slate-100 text-enviro-navy hover:bg-emerald-100 hover:text-enviro-green"
              )}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}
