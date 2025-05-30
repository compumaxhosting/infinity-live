import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import Footer from "@/components/Footer";
import { BlogsData } from "@/data/BlogsData";
import { BlogsOverview } from "@/components/extras/BlogsOverview";

interface PageProps {
  params: Promise<{ slug: string }>; // <-- params is Promise now
}

export default async function BlogPage({ params }: PageProps) {
  const resolvedParams = await params; // await here
  const blog = BlogsData.find((b) => b.slug === resolvedParams.slug);

  if (!blog) return notFound();

  return (
    <>
      <BlogsOverview />
      <HeaderSpecial />
      <div className="pt-5 sm:pt-20 2xl:pt-32 border-b">
        <section className="bg-white text-black">
          <section className="py-2">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
              {/* Left: Text */}
              <div>
                <Link
                  href="/blog"
                  className="text-sm text-gray-700 hover:underline"
                >
                  ← Back to Blogs
                </Link>
                <h1 className="mt-4 text-2xl md:text-4xl font-bold">
                  {blog.title}
                </h1>
                <div className="mt-4 text-lg text-justify text-gray-700">
                  {blog.description}
                </div>
              </div>

              <div className="w-full max-w-md mx-auto">
                <div className="rounded-3xl overflow-hidden shadow-xl md:shadow-2xl border border-gray-200">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={800}
                    height={600}
                    className="w-full h-80 object-center"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Full-width Content Section */}
          <section className="max-w-7xl mx-auto px-6 pt-8 pb-2">
            {blog.sections.map((section, index) => (
              <article key={index} className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  {section.title}
                </h2>
                <div className="text-gray-700 leading-relaxed text-justify">
                  {section.paragraph}
                </div>
              </article>
            ))}
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
}
