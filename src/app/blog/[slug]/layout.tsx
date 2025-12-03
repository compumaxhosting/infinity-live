import { ReactNode } from "react";
import { BlogsData } from "@/data/BlogsData";
import type { Metadata } from "next";

type LayoutProps = {
  children: ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const blog = BlogsData.find((b) => b.slug === resolvedParams.slug);

  if (!blog) {
    return {
      title: "Blog not found",
      description: "No blog details available.",
      keywords: "infinity construction, blog, not found",
      openGraph: {
        title: "Blog not found",
        description: "No blog details available.",
        url: `https://www.infinityconstructionnyc.com/blog/${resolvedParams.slug}`,
        type: "article",
      },
    };
  }

  const safeDescription =
    blog.metadescription ||
    (typeof blog.description === "string" ? blog.description : "");

  return {
    title: blog.metatitle || blog.title,
    description: safeDescription,
    keywords: typeof blog.keywords === "string" ? blog.keywords : undefined,

    openGraph: {
      title: blog.metatitle || blog.title,
      description: safeDescription,
      url: `https://www.infinityconstructionnyc.com/blog/${blog.slug}`,
      images: [
        {
          url: blog.image,
          width: 800,
          height: 600,
          alt: blog.title,
        },
      ],
      type: "article",
    },
  };
}

export default async function BlogLayout({ children, params }: LayoutProps) {
  const resolvedParams = await params;
  const blog = BlogsData.find((b) => b.slug === resolvedParams.slug);

  if (!blog) {
    return <div>Blog not found.</div>;
  }

  const safeDescription =
    blog.metadescription ||
    (typeof blog.description === "string" ? blog.description : "");

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.metatitle || blog.title,
    description: safeDescription,
    image: blog.image,
    url: `https://www.infinityconstructionnyc.com/blog/${blog.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {children}
    </>
  );
}
