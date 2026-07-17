import { ReactNode } from "react";
import { BlogsData } from "@/data/BlogsData";
import type { Metadata } from "next";

type LayoutProps = {
  children: ReactNode;
  params: Promise<{ slug: string }>;
};

const BASE_URL = "https://www.infinityconstructionnyc.com";

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
      keywords: "Infinity Construction NYC, Blog",

      alternates: {
        canonical: `${BASE_URL}/blog/${resolvedParams.slug}`,
      },

      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const safeDescription =
    blog.metadescription ||
    (typeof blog.description === "string" ? blog.description : "");

  const imageUrl = blog.image.startsWith("http")
    ? blog.image
    : `${BASE_URL}${blog.image}`;

  return {
    title: blog.metatitle || blog.title,

    description: safeDescription,

    keywords: typeof blog.keywords === "string" ? blog.keywords : undefined,

    authors: [
      {
        name: "Infinity Construction NYC",
      },
    ],

    alternates: {
      canonical: `${BASE_URL}/blog/${blog.slug}`,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },

    referrer: "strict-origin-when-cross-origin",

    openGraph: {
      type: "article",
      url: `${BASE_URL}/blog/${blog.slug}`,
      title: blog.metatitle || blog.title,
      description: safeDescription,
      siteName: "Infinity Construction NYC",

      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
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

  const imageUrl = blog.image.startsWith("http")
    ? blog.image
    : `${BASE_URL}${blog.image}`;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",

    headline: blog.metatitle || blog.title,

    description: safeDescription,

    image: imageUrl,

    url: `${BASE_URL}/blog/${blog.slug}`,

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${blog.slug}`,
    },

    author: {
      "@type": "Person",
      name: "Infinity Construction NYC",
    },

    publisher: {
      "@type": "Organization",
      name: "Infinity Construction NYC",

      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.webp`,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      {children}
    </>
  );
}
