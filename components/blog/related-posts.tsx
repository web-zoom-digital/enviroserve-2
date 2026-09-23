import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/types/blog";
import { Calendar, ArrowRight } from "lucide-react";

interface RelatedPostsProps {
  currentSlug: string;
  category: string;
  allPosts: BlogPost[];
}

export function RelatedPosts({ currentSlug, category, allPosts }: RelatedPostsProps) {
  // Filter related posts by category first, excluding current post
  let related = allPosts.filter(
    (p) => p.slug !== currentSlug && p.category.toLowerCase() === category.toLowerCase()
  );

  // If less than 2, fill with other recent posts
  if (related.length < 2) {
    const additional = allPosts.filter(
      (p) => p.slug !== currentSlug && !related.some((r) => r.slug === p.slug)
    );
    related = [...related, ...additional].slice(0, 2);
  } else {
    related = related.slice(0, 2);
  }

  if (related.length === 0) return null;

  return (
    <section className="pt-12 border-t border-slate-200 mt-12 space-y-6">
      <h3 className="text-2xl font-bold font-heading text-enviro-navy">
        Related Articles
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {related.map((post, idx) => (
          <article
            key={idx}
            className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group shadow-sm"
          >
            <div>
              <div className="relative h-44 w-full bg-slate-200">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-enviro-navy text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                  {post.category}
                </div>
              </div>

              <div className="p-5 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Calendar className="w-3.5 h-3.5 text-enviro-accent" />
                  <span>{post.date}</span>
                </div>
                <h4 className="text-base font-bold font-heading text-enviro-navy group-hover:text-enviro-green transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h4>
              </div>
            </div>

            <div className="p-5 pt-0">
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-enviro-green group-hover:text-enviro-accent transition-colors"
              >
                <span>Read Article</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
