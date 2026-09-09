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

  const isTargetBlog =
    resolvedParams.slug ===
    "brownstone-facade-repair-waterproofing-manhattan-guide-2026";

  const canonicalUrl = isTargetBlog
    ? "https://www.infinityconstructionnyc.com/blog/brownstone-facade-repair-waterproofing-manhattan-guide-2026"
    : `${BASE_URL}/blog/${blog.slug}`;

  const pageTitle = isTargetBlog
    ? "Brownstone Facade Repair & Waterproofing Manhattan | 2026 Guide"
    : blog.metatitle || blog.title;

  const pageDescription = isTargetBlog
    ? "Learn expert brownstone facade repair and waterproofing in Manhattan. Discover restoration tips, costs, inspections, and maintenance for NYC properties."
    : safeDescription;

  const ogTitle = isTargetBlog
    ? "The Ultimate 2026 Guide to Brownstone Facade Repair & Waterproofing in Manhattan"
    : blog.metatitle || blog.title;

  const ogDescription = isTargetBlog
    ? "Expert guide to brownstone facade repair, waterproofing, brick restoration, and facade inspections for Manhattan property owners."
    : safeDescription;

  const ogImage = isTargetBlog
    ? "https://www.infinityconstructionnyc.com/blog/blog-brownstone.webp"
    : imageUrl;

  const ogImageAlt = isTargetBlog
    ? "Brownstone facade repair and waterproofing project in Manhattan"
    : blog.title;

  return {
    title: pageTitle,

    description: pageDescription,

    keywords: isTargetBlog
      ? "brownstone facade repair Manhattan, facade repair waterproofing Manhattan, brick restoration Manhattan, brick repointing services Manhattan, brownstone restoration NYC, facade inspection contractors NYC"
      : typeof blog.keywords === "string"
        ? blog.keywords
        : undefined,

    authors: [
      {
        name: "Infinity Construction NYC",
      },
    ],

    alternates: {
      canonical: canonicalUrl,
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
      url: canonicalUrl,
      title: ogTitle,
      description: ogDescription,
      siteName: "Infinity Construction NYC",

      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: isTargetBlog
        ? "Protect your NYC property with expert brownstone facade repair and waterproofing in Manhattan."
        : pageDescription,
      images: [ogImage],
    },

    other: {
      "article:author": "Infinity Construction NYC",
      "article:section": "Brownstone Restoration",
      "article:tag":
        "Brownstone Facade Repair, Facade Waterproofing, Brick Restoration, Manhattan, NYC Construction",
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
