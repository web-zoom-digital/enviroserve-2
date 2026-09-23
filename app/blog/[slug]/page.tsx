import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { blogsData } from "@/data/blogs";
import { Metadata } from "next";
import { ArticleJsonLd } from "@/components/json-ld";
import { Breadcrumbs } from "@/components/blog/breadcrumbs";
import { BlogSidebar } from "@/components/blog/blog-sidebar";
import { RelatedPosts } from "@/components/blog/related-posts";
import { Calendar, Clock, User, MessageSquare, Tag } from "lucide-react";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogsData.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const blog = blogsData.find((b) => b.slug === params.slug);
  if (!blog) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${blog.title} | EnviroServe`,
    description: blog.excerpt,
    alternates: {
      canonical: `https://enviroserve.in/blog/${blog.slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: `https://enviroserve.in/blog/${blog.slug}`,
      siteName: "EnviroServe",
      images: [{ url: blog.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image],
    },
  };
}

export default function BlogPostPage({ params }: BlogPageProps) {
  const blog = blogsData.find((b) => b.slug === params.slug);
  if (!blog) {
    notFound();
  }

  return (
    <>
      <ArticleJsonLd
        title={blog.title}
        description={blog.excerpt}
        url={`https://enviroserve.in/blog/${blog.slug}`}
        image={`https://enviroserve.in${blog.image}`}
        datePublished={blog.date}
        authorName={blog.author.name}
      />

      <div className="pt-28 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: blog.title },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-4">
            
            {/* Main Article Content (8 cols) */}
            <article className="lg:col-span-8 space-y-8">
              
              {/* Header */}
              <header className="space-y-4">
                <div className="inline-block px-3.5 py-1 rounded-full bg-enviro-light text-enviro-green text-xs font-bold uppercase tracking-wider">
                  {blog.category}
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-enviro-navy tracking-tight leading-tight">
                  {blog.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-500 pt-2 border-t border-slate-200">
                  <span className="flex items-center gap-1.5 font-semibold text-enviro-navy">
                    <User className="w-4 h-4 text-enviro-green" />
                    {blog.author.name}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-enviro-accent" />
                    {blog.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-enviro-accent" />
                    {blog.readingTime}
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <MessageSquare className="w-4 h-4" />
                    {blog.commentsCount || "No Comments"}
                  </span>
                </div>
              </header>

              {/* Featured Image */}
              <div className="relative h-[320px] sm:h-[440px] w-full rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Body Prose Paragraphs */}
              <div className="prose prose-lg max-w-none text-slate-800 leading-[1.8] space-y-6 pt-2">
                <p className="text-lg font-semibold text-enviro-navy leading-relaxed border-l-4 border-enviro-green pl-4 bg-emerald-50/50 py-3 rounded-r-xl">
                  {blog.excerpt}
                </p>

                {blog.content.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-base sm:text-lg text-slate-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tags Cloud Footer */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="pt-6 border-t border-slate-200 flex items-center gap-3 flex-wrap">
                  <div className="flex items-center gap-1 text-xs font-bold uppercase text-enviro-navy">
                    <Tag className="w-4 h-4 text-enviro-green" />
                    <span>Article Tags:</span>
                  </div>
                  {blog.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Related Posts Module */}
              <RelatedPosts
                currentSlug={blog.slug}
                category={blog.category}
                allPosts={blogsData}
              />
            </article>

            {/* Sidebar (4 cols) */}
            <aside className="lg:col-span-4">
              <BlogSidebar posts={blogsData} />
            </aside>

          </div>

        </div>
      </div>
    </>
  );
}
