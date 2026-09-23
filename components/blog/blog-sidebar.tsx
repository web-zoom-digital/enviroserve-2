"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost, BlogCategory } from "@/types/blog";
import { companyInfo } from "@/data/company";
import { Bookmark, Clock, Tag, FolderOpen } from "lucide-react";

interface BlogSidebarProps {
  posts: BlogPost[];
  onSelectCategory?: (category: BlogCategory) => void;
  activeCategory?: BlogCategory;
}

const allCategories: BlogCategory[] = [
  "Battery Waste",
  "e-Waste",
  "EPR",
  "Hazardous waste",
  "Plastic Waste",
  "Waste management",
];

export function BlogSidebar({ posts, onSelectCategory, activeCategory }: BlogSidebarProps) {
  // Sort most recent posts by index/date
  const recentPosts = [...posts].slice(0, 4);

  // Dynamically calculate post counts per category
  const getCategoryCount = (categoryName: string) => {
    return posts.filter(
      (p) => p.category.toLowerCase() === categoryName.toLowerCase()
    ).length;
  };

  // Collect all unique tags across posts
  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags || [])));

  return (
    <aside className="space-y-8">
      
      {/* 1. About Company Widget */}
      <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-enviro-green font-bold text-sm font-heading uppercase tracking-wider border-b border-slate-200 pb-2">
          <Bookmark className="w-4 h-4 text-enviro-accent" />
          <span>About Company</span>
        </div>
        <p className="text-xs text-enviro-gray leading-relaxed">
          {companyInfo.name} is a leading waste management company committed to sustainable recycling, e-waste solutions, and environmental consultancy, empowering a cleaner and greener future.
        </p>
      </div>

      {/* 2. Most Recent Posts Widget */}
      <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-enviro-navy font-bold text-sm font-heading uppercase tracking-wider border-b border-slate-200 pb-2">
          <Clock className="w-4 h-4 text-enviro-accent" />
          <span>Most Recent Posts</span>
        </div>

        <div className="space-y-4">
          {recentPosts.map((post, idx) => (
            <div key={idx} className="flex items-start gap-3 group">
              <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-slate-200 shrink-0 mt-0.5">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-1">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-bold text-enviro-navy group-hover:text-enviro-green transition-colors line-clamp-2 leading-snug"
                >
                  {post.title}
                </Link>
                <div className="text-[11px] text-slate-400">{post.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Category List Widget with Dynamic Counts */}
      <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-enviro-navy font-bold text-sm font-heading uppercase tracking-wider border-b border-slate-200 pb-2">
          <FolderOpen className="w-4 h-4 text-enviro-accent" />
          <span>Category</span>
        </div>

        <ul className="space-y-2 text-xs sm:text-sm">
          {allCategories.map((cat, idx) => {
            const count = getCategoryCount(cat);
            const isSelected = activeCategory === cat;
            return (
              <li key={idx}>
                <button
                  onClick={() => onSelectCategory && onSelectCategory(cat)}
                  className={`w-full flex items-center justify-between text-left py-1.5 px-2 rounded-lg transition-colors ${
                    isSelected
                      ? "bg-enviro-green text-white font-bold"
                      : "text-slate-700 hover:text-enviro-green hover:bg-emerald-50 font-medium"
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${isSelected ? "bg-white/20 text-white" : "bg-slate-200 text-slate-600"}`}>
                    ({count})
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* 4. Tags Widget */}
      {allTags.length > 0 && (
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-enviro-navy font-bold text-sm font-heading uppercase tracking-wider border-b border-slate-200 pb-2">
            <Tag className="w-4 h-4 text-enviro-accent" />
            <span>Tags</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {allTags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-700 hover:border-emerald-400 hover:text-enviro-green transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

    </aside>
  );
}
