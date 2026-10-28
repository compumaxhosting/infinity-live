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

  const isCostGuideBlog =
    resolvedParams.slug ===
    "how-much-does-brownstone-facade-restoration-cost-in-nyc";

  const isWarningSignsBlog =
    resolvedParams.slug === "brownstone-facade-repair-brooklyn-warning-signs";

  const isMasonryBlog =
    resolvedParams.slug === "masonry-facade-restoration-waterproofing-nyc";

  const schemaData = isMasonryBlog
    ? {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BlogPosting",
            "@id": `${BASE_URL}/blog/${blog.slug}#blogposting`,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${BASE_URL}/blog/${blog.slug}`,
            },
            headline: "Masonry Facade Restoration and Waterproofing in New York",
            description:
              "Discover how masonry facade restoration and waterproofing in NYC protect buildings from water leaks, damaged brickwork, moisture intrusion, and costly repairs.",
            url: `${BASE_URL}/blog/${blog.slug}`,
            image: {
              "@type": "ImageObject",
              url: imageUrl,
            },
            author: {
              "@type": "Organization",
              name: "Infinity Construction NYC",
              url: `${BASE_URL}/`,
            },
            publisher: {
              "@type": "Organization",
              name: "Infinity Construction NYC",
              url: `${BASE_URL}/`,
              logo: {
                "@type": "ImageObject",
                url: `${BASE_URL}/logo.webp`,
              },
            },
            inLanguage: "en-US",
            keywords: [
              "masonry facade restoration NYC",
              "facade waterproofing NYC",
              "masonry restoration New York City",
              "brick pointing NYC",
              "brownstone restoration NYC",
              "exterior facade repair NYC",
            ],
            articleSection: [
              "Masonry Facade Restoration",
              "Waterproofing",
              "Facade Maintenance",
              "Frequently Asked Questions",
            ],
          },
          {
            "@type": "WebPage",
            "@id": `${BASE_URL}/blog/${blog.slug}#webpage`,
            url: `${BASE_URL}/blog/${blog.slug}`,
            name: "Masonry Facade Restoration and Waterproofing in New York",
            description:
              "Learn about masonry facade restoration, waterproofing, brick repointing, common facade problems, and maintenance for New York City buildings.",
            isPartOf: {
              "@type": "WebSite",
              name: "Infinity Construction NYC",
              url: `${BASE_URL}/`,
            },
            inLanguage: "en-US",
          },
          {
            "@type": "HomeAndConstructionBusiness",
            "@id": `${BASE_URL}/#business`,
            name: "Infinity Construction NYC",
            url: `${BASE_URL}/`,
            telephone: "+1-347-939-5779",
            areaServed: [
              {
                "@type": "City",
                name: "New York City",
              },
              {
                "@type": "Place",
                name: "Brooklyn, New York",
              },
              {
                "@type": "Place",
                name: "Manhattan, New York",
              },
              {
                "@type": "Place",
                name: "Queens, New York",
              },
              {
                "@type": "Place",
                name: "The Bronx, New York",
              },
            ],
            knowsAbout: [
              "Masonry facade restoration",
              "Facade waterproofing",
              "Brick pointing and repointing",
              "Brownstone restoration",
              "Limestone restoration",
              "Exterior masonry repair",
            ],
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${BASE_URL}/blog/${blog.slug}#breadcrumb`,
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${BASE_URL}/`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: `${BASE_URL}/blog`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Masonry Facade Restoration & Waterproofing NYC",
                item: `${BASE_URL}/blog/${blog.slug}`,
              },
            ],
          },
          {
            "@type": "FAQPage",
            "@id": `${BASE_URL}/blog/${blog.slug}#faq`,
            mainEntity: [
              {
                "@type": "Question",
                name: "Who does masonry facade restoration in New York City?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Specialized masonry and facade restoration contractors repair brick, brownstone, limestone, mortar joints, and exterior surfaces throughout NYC. Infinity Construction NYC lists facade restoration, masonry repair, brick repointing, and waterproofing among its services.",
                },
              },
              {
                "@type": "Question",
                name: "How do I know if my building needs facade waterproofing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Signs include recurring interior leaks, damp exterior walls, deteriorating mortar, cracked masonry, peeling paint, and water stains around windows. Correcting failed joints, flashing, drainage, or other defects may be more effective than applying a coating alone.",
                },
              },
              {
                "@type": "Question",
                name: "How much does facade restoration cost in NYC?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The cost depends on the facade's size, building height, material type, extent of damage, and access requirements. Small localized repairs generally cost less than comprehensive restoration involving scaffolding, extensive repointing, or structural work.",
                },
              },
              {
                "@type": "Question",
                name: "What is the difference between repointing and waterproofing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Repointing removes deteriorated mortar from masonry joints and replaces it with compatible new mortar. Waterproofing addresses water entry using suitable sealants, flashing repairs, drainage improvements, or other appropriate systems.",
                },
              },
              {
                "@type": "Question",
                name: "Does NYC require facade inspections?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Generally, buildings higher than six stories must undergo facade inspections every five years under the city's Facade Inspection & Safety Program (FISP). Inspections and compliance reports must be completed by appropriately qualified professionals.",
                },
              },
              {
                "@type": "Question",
                name: "Which areas of New York City does Infinity Construction NYC serve?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Infinity Construction NYC states that it serves Brooklyn, Manhattan, Queens, and The Bronx. Its listed services include brownstone and limestone restoration, facade repairs, brick pointing, waterproofing, roofing, and related exterior construction.",
                },
              },
            ],
          },
        ],
      }
    : isWarningSignsBlog
    ? {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BlogPosting",
            "@id": `${BASE_URL}/blog/${blog.slug}#article`,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${BASE_URL}/blog/${blog.slug}`,
            },
            headline:
              "Brownstone Facade Repair in Brooklyn: 7 Warning Signs Your Building Needs Restoration",
            description:
              "Discover seven warning signs your Brooklyn brownstone needs facade repair, including crumbling stone, cracks, damaged mortar, water stains, and failing repairs.",
            image: {
              "@type": "ImageObject",
              url: imageUrl,
            },
            author: {
              "@type": "Organization",
              name: "Infinity Construction NYC",
              url: `${BASE_URL}/`,
            },
            publisher: {
              "@type": "Organization",
              name: "Infinity Construction NYC",
              url: `${BASE_URL}/`,
              logo: {
                "@type": "ImageObject",
                url: `${BASE_URL}/logo.webp`,
              },
            },
            url: `${BASE_URL}/blog/${blog.slug}`,
            isPartOf: {
              "@type": "Blog",
              name: "Infinity Construction NYC Blog",
              url: `${BASE_URL}/blog`,
            },
            inLanguage: "en-US",
            articleSection: "Brownstone Facade Restoration",
            keywords: [
              "brownstone facade repair Brooklyn",
              "brownstone facade restoration",
              "brownstone repair NYC",
              "facade restoration Brooklyn",
              "masonry repair",
              "historic brownstone restoration",
              "facade repair Manhattan",
              "facade repair Queens",
              "facade repair The Bronx",
            ],
            about: [
              {
                "@type": "Thing",
                name: "Brownstone facade repair",
              },
              {
                "@type": "Thing",
                name: "Historic masonry restoration",
              },
              {
                "@type": "Place",
                name: "Brooklyn, New York City",
              },
            ],
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${BASE_URL}/blog/${blog.slug}#breadcrumb`,
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${BASE_URL}/`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: `${BASE_URL}/blog`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Brownstone Facade Repair in Brooklyn: 7 Warning Signs",
                item: `${BASE_URL}/blog/${blog.slug}`,
              },
            ],
          },
          {
            "@type": "FAQPage",
            "@id": `${BASE_URL}/blog/${blog.slug}#faq`,
            mainEntity: [
              {
                "@type": "Question",
                name: "How do I know if my Brooklyn brownstone needs facade restoration?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Warning signs include crumbling stone, widening cracks, missing mortar, water stains, peeling coatings, damaged stoops, and failing previous repairs. A qualified facade professional can assess the damage and recommend appropriate repairs.",
                },
              },
              {
                "@type": "Question",
                name: "How much does brownstone facade repair cost in Brooklyn?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The cost depends on the extent of stone damage, building size and height, accessibility, repair materials, scaffolding, and applicable compliance requirements. An on-site inspection and itemized estimate provide the most reliable budget.",
                },
              },
              {
                "@type": "Question",
                name: "Can damaged brownstone be repaired instead of replaced?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Many damaged areas can be repaired with compatible restoration mortars or specialized stone-repair techniques. Severely deteriorated or unstable sections may require partial replacement, depending on the stone's condition and the cause of damage.",
                },
              },
              {
                "@type": "Question",
                name: "How long does brownstone restoration take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Small brownstone repairs may take a few days, while extensive facade restoration can take several weeks or longer. Weather, building access, material curing, decorative details, scaffolding, and permit requirements affect the timeline.",
                },
              },
              {
                "@type": "Question",
                name: "Is brownstone facade restoration required in New York City?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Certain facade inspections, maintenance measures, and repairs may be required under New York City regulations, depending on building classification and circumstances. Landmark and historic-district requirements may also apply.",
                },
              },
              {
                "@type": "Question",
                name: "Can water damage be repaired without fixing the entire facade?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Often, localized stone repairs and correction of the water source are sufficient. However, moisture can extend beyond visible damage, so a professional should assess the surrounding masonry and determine whether broader repairs are needed.",
                },
              },
              {
                "@type": "Question",
                name: "Do brownstones in Manhattan, Queens, and The Bronx need the same repairs as Brooklyn properties?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The basic restoration principles are similar, but each building has different materials, exposure conditions, architectural details, and maintenance history. A property-specific assessment determines the appropriate repair strategy.",
                },
              },
            ],
          },
        ],
      }
    : isCostGuideBlog
    ? {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BlogPosting",
            "@id": `${BASE_URL}/blog/${blog.slug}#blogposting`,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${BASE_URL}/blog/${blog.slug}`,
            },
            headline: blog.metatitle || blog.title,
            description: safeDescription,
            image: imageUrl,
            author: {
              "@type": "Organization",
              name: "Infinity Construction NYC",
              url: `${BASE_URL}/`,
            },
            publisher: {
              "@type": "Organization",
              name: "Infinity Construction NYC",
              url: `${BASE_URL}/`,
              logo: {
                "@type": "ImageObject",
                url: `${BASE_URL}/logo.webp`,
              },
            },
            datePublished: "2026-10-12",
            dateModified: "2026-10-12",
            articleSection: "Brownstone Restoration",
            keywords: blog.keywords,
            about: {
              "@type": "Thing",
              name: "Brownstone Facade Restoration",
            },
            mentions: [
              {
                "@type": "City",
                name: "New York City",
              },
              {
                "@type": "Place",
                name: "Brooklyn",
              },
              {
                "@type": "Place",
                name: "Manhattan",
              },
              {
                "@type": "Place",
                name: "Queens",
              },
              {
                "@type": "Place",
                name: "The Bronx",
              },
            ],
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${BASE_URL}/blog/${blog.slug}#breadcrumb`,
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${BASE_URL}/`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: `${BASE_URL}/blog`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Brownstone Façade Restoration Cost in NYC",
                item: `${BASE_URL}/blog/${blog.slug}`,
              },
            ],
          },
          {
            "@type": "FAQPage",
            "@id": `${BASE_URL}/blog/${blog.slug}#faq`,
            mainEntity: [
              {
                "@type": "Question",
                name: "How much does it cost to restore a brownstone facade in NYC?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A typical NYC brownstone facade restoration can range from approximately $15,000 to $100,000 or more, depending on the scope. Smaller repairs may cost less, while extensive historic restoration involving major stone replacement, structural repairs or architectural reconstruction can exceed $100,000.",
                },
              },
              {
                "@type": "Question",
                name: "How much does brownstone repointing cost in NYC?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Published NYC pricing commonly places masonry repointing around $10 to $30 per square foot, although the final cost depends on facade size, accessibility, mortar requirements and the condition of the existing masonry.",
                },
              },
              {
                "@type": "Question",
                name: "Does a landmarked brownstone require LPC approval?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Potentially, yes. Exterior work affecting a designated landmark or property within a regulated historic district may require approval from the NYC Landmarks Preservation Commission before work begins.",
                },
              },
              {
                "@type": "Question",
                name: "Is brownstone resurfacing better than replacing the facade?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Not necessarily. The appropriate restoration method depends on the condition and historic character of the existing brownstone. Historic preservation requirements and the condition of the original material should be evaluated before choosing resurfacing, patching or replacement.",
                },
              },
              {
                "@type": "Question",
                name: "How can I get a brownstone restoration estimate in NYC?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Start with an on-site facade inspection from an experienced restoration contractor. The contractor should identify damaged areas, explain the recommended repair methods, separate structural work from cosmetic improvements and provide a detailed written scope and estimate.",
                },
              },
            ],
          },
        ],
      }
    : {
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
