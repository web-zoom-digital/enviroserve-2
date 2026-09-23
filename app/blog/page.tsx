"use client";

import React, { useState } from "react";
import { blogsData } from "@/data/blogs";
import { BlogCategory } from "@/types/blog";
import { BlogHero } from "@/components/blog/blog-hero";
import { BlogCategories } from "@/components/blog/blog-categories";
import { BlogCard } from "@/components/blog/blog-card";
import { BlogSidebar } from "@/components/blog/blog-sidebar";

export default function BlogListingPage() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("All Posts");

  // Filter posts based on active category selection
  const filteredPosts =
    activeCategory === "All Posts"
      ? blogsData
      : blogsData.filter(
          (post) => post.category.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Blog Hero */}
      <BlogHero />

      {/* 2. Main Content & Sidebar Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Category Navigation Pills */}
          <BlogCategories
            activeCategory={activeCategory}
            onSelectCategory={(cat) => setActiveCategory(cat)}
          />

          {/* Desktop 70% Main Content / 30% Sidebar Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-4">
            
            {/* Main Blog Cards Area (70% / 8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post, idx) => (
                    <BlogCard key={post.slug} post={post} index={idx} />
                  ))}
                </div>
              ) : (
                <div className="p-12 text-center bg-slate-50 rounded-2xl border border-slate-200 text-slate-500 font-medium">
                  No articles found in category &quot;{activeCategory}&quot;.
                </div>
              )}
            </div>

            {/* Sidebar Area (30% / 4 cols) */}
            <div className="lg:col-span-4">
              <BlogSidebar
                posts={blogsData}
                activeCategory={activeCategory}
                onSelectCategory={(cat) => setActiveCategory(cat)}
              />
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
