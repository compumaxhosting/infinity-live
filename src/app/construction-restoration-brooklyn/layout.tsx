import type { Metadata, Viewport } from "next";

const pageUrl =
  "https://www.infinityconstructionnyc.com/construction-restoration-brooklyn";

const imgUrl =
  "https://www.infinityconstructionnyc.com/historical-landmark/construction-manhattan.png";

export const metadata: Metadata = {
  title: "Construction & Restoration Brooklyn NY | Infinity Construction NYC",

  description:
    "Brooklyn NY construction and restoration for brownstones, brick facades, masonry, roofing, waterproofing, fire escapes, concrete and stone.",

  keywords: [
    "Brooklyn construction",
    "Brooklyn restoration",
    "construction restoration Brooklyn NY",
    "brownstone restoration Brooklyn",
    "facade restoration Brooklyn",
    "brick pointing Brooklyn",
    "masonry restoration Brooklyn",
    "waterproofing Brooklyn NY",
    "roof restoration Brooklyn",
    "fire escape restoration Brooklyn",
    "limestone restoration Brooklyn",
  ],

  authors: [{ name: "Infinity Construction NYC" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: "website",
    title: "Construction & Restoration Brooklyn NY | Infinity Construction NYC",
    description:
      "Brooklyn NY construction and restoration for brownstones, brick facades, masonry, roofing, waterproofing, fire escapes, concrete and stone.",
    url: pageUrl,
    siteName: "Infinity Construction NYC",
    images: [
      {
        url: imgUrl,
        alt: "Brooklyn construction and restoration services by Infinity Construction NYC",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Construction & Restoration Brooklyn NY | Infinity Construction NYC",
    description:
      "Brooklyn NY construction and restoration for brownstones, brick facades, masonry, roofing, waterproofing, fire escapes, concrete and stone.",
    images: [imgUrl],
  },

  other: {
    referrer: "strict-origin-when-cross-origin",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const schema = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Construction & Restoration Brooklyn NY | Infinity Construction NYC",
      description:
        "Brooklyn NY construction and restoration for brownstones, brick facades, masonry, roofing, waterproofing, fire escapes, concrete and stone.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.infinityconstructionnyc.com/#website",
      },
      about: {
        "@id": `${pageUrl}#service`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
    },

    {
      "@type": "WebSite",
      "@id": "https://www.infinityconstructionnyc.com/#website",
      url: "https://www.infinityconstructionnyc.com/",
      name: "Infinity Construction NYC",
      publisher: {
        "@id": "https://www.infinityconstructionnyc.com/#business",
      },
      inLanguage: "en-US",
    },

    {
      "@type": "GeneralContractor",
      "@id": "https://www.infinityconstructionnyc.com/#business",
      name: "Infinity Construction NYC",
      url: "https://www.infinityconstructionnyc.com/",
      telephone: "+1-347-939-5779",
      description:
        "Construction and restoration contractor serving Brooklyn and New York City.",
      areaServed: [
        {
          "@type": "City",
          name: "Brooklyn",
        },
        {
          "@type": "City",
          name: "New York",
        },
      ],
    },

    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Construction & Restoration Services in Brooklyn, NY",
      serviceType: "Construction and Restoration",
      description:
        "Construction and restoration services for Brooklyn brownstones, row houses, brick facades and masonry buildings, including brick pointing, waterproofing, roofing, fire escapes, concrete, stone and exterior restoration.",
      provider: {
        "@id": "https://www.infinityconstructionnyc.com/#business",
      },
      areaServed: {
        "@type": "City",
        name: "Brooklyn",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Brooklyn Construction & Restoration Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Brownstone & Limestone Restoration",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Brick Pointing & Repointing",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Facade & Masonry Restoration",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Waterproofing & Stucco",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Roof Restoration",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Fire Escape & Metal Restoration",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Concrete & Stone Work",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Exterior Painting & Masonry",
            },
          },
        ],
      },
    },

    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.infinityconstructionnyc.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Construction & Restoration Brooklyn",
          item: pageUrl,
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Do you restore Brooklyn brownstones?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Infinity Construction NYC provides brownstone and limestone facade, stoop and architectural-detail restoration in Brooklyn.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide brick pointing in Brooklyn?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Infinity Construction NYC provides brick pointing and repointing for deteriorated masonry and mortar joints.",
          },
        },
        {
          "@type": "Question",
          name: "Can you work on historic Brooklyn properties?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Owners of landmarked properties or properties within designated historic districts should verify applicable NYC Landmarks Preservation Commission requirements before beginning regulated exterior work.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide several restoration services for one property?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Masonry, waterproofing, roofing, concrete, stone, metal and painting work can be evaluated together when a property requires multiple repairs.",
          },
        },
      ],
    },
  ],
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
    </>
  );
}
