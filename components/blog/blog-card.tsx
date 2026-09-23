"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/types/blog";
import { motion } from "framer-motion";
import { Calendar, MessageSquare, ArrowRight } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
    >
      <div>
        {/* Featured Image */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-100">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-3 left-3 bg-enviro-navy/95 text-white text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-md">
            {post.category}
          </div>
        </div>

        {/* Post Content */}
        <div className="p-6 space-y-3">
          {/* Date & No Comments Metadata */}
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-enviro-accent" />
              {post.date}
            </span>
            <span className="flex items-center gap-1 text-slate-400">
              <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
              {post.commentsCount || "No Comments"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-lg sm:text-xl font-bold font-heading text-enviro-navy group-hover:text-enviro-green transition-colors leading-snug line-clamp-2">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h2>

          {/* Excerpt */}
          <p className="text-xs sm:text-sm text-enviro-gray line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* Footer Read More */}
      <div className="p-6 pt-0">
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-enviro-green group-hover:text-enviro-accent transition-colors"
        >
          <span>Read More</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
        </Link>
      </div>
    </motion.article>
  );
}
