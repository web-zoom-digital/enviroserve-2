"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { blogsData } from "@/data/blogs";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export function LatestBlogs() {
  const recentBlogs = blogsData.slice(0, 3);

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-enviro-light text-enviro-green text-xs font-bold uppercase tracking-wider">
              <span>Recycle More • Eco Insights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-enviro-navy tracking-tight">
              Stories & Insights for a Greener Tomorrow
            </h2>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-enviro-green hover:text-enviro-hover transition-colors group"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentBlogs.map((blog, idx) => (
            <article
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-enviro-navy/90 text-white text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-md">
                    {blog.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-enviro-accent" />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-enviro-accent" />
                      {blog.readingTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-enviro-navy group-hover:text-enviro-green transition-colors line-clamp-2">
                    <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-enviro-gray line-clamp-3 leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/blog/${blog.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-enviro-green group-hover:text-enviro-accent transition-colors"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
