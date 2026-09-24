import type { Metadata, Viewport } from "next";

const pageUrl =
  "https://www.infinityconstructionnyc.com/construction-restoration-queens";

const imgUrl =
  "https://www.infinityconstructionnyc.com/historical-landmark/construction-manhattan.png";

export const metadata: Metadata = {
  title:
    "Construction & Restoration Services in Queens, NY | Infinity Construction NYC",

  description:
    "Construction and restoration services in Queens, NY, including masonry, brick pointing, waterproofing, roofing, stucco, fire escapes, concrete and painting.",

  keywords: [
    "construction services Queens NY",
    "restoration services Queens NY",
    "masonry Queens NY",
    "brick pointing Queens",
    "waterproofing Queens NY",
    "roof restoration Queens",
    "fire escape restoration Queens",
    "stucco Queens NY",
    "concrete repair Queens",
    "Infinity Construction NYC",
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
    title:
      "Construction & Restoration Services in Queens, NY | Infinity Construction NYC",
    description:
      "Construction and restoration services in Queens, NY, including masonry, roofing, waterproofing, stucco, fire escapes, concrete, stone and painting.",
    url: pageUrl,
    siteName: "Infinity Construction NYC",
    images: [
      {
        url: imgUrl,
        alt: "Construction and restoration services in Queens, NY",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Construction & Restoration Services in Queens, NY | Infinity Construction NYC",
    description:
      "Construction and restoration services in Queens, NY, including masonry, roofing, waterproofing, stucco, fire escapes, concrete and painting.",
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
      "@type": "LocalBusiness",
      "@id": "https://www.infinityconstructionnyc.com/#business",
      name: "Infinity Construction NYC",
      url: "https://www.infinityconstructionnyc.com/",
      telephone: "+1-347-939-5779",
      description:
        "Infinity Construction NYC provides construction and restoration services in Queens, NY, including masonry, brick pointing, waterproofing, roofing, stucco, fire escape restoration, concrete, stone and painting.",
      areaServed: {
        "@type": "City",
        name: "Queens",
        containedInPlace: {
          "@type": "State",
          name: "New York",
          containedInPlace: {
            "@type": "Country",
            name: "United States",
          },
        },
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
    },

    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Construction & Restoration Services in Queens, NY",
      description:
        "Construction and restoration services in Queens, NY, including masonry, brick pointing, waterproofing, roofing, stucco, fire escapes, concrete, stone and painting.",
      isPartOf: {
        "@id": "https://www.infinityconstructionnyc.com/#website",
      },
      about: {
        "@id": "https://www.infinityconstructionnyc.com/#business",
      },
      mainEntity: {
        "@id": `${pageUrl}#service`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      inLanguage: "en-US",
    },

    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Construction & Restoration Services in Queens",
      serviceType: "Construction and Exterior Restoration",
      provider: {
        "@id": "https://www.infinityconstructionnyc.com/#business",
      },
      areaServed: {
        "@type": "City",
        name: "Queens",
        containedInPlace: {
          "@type": "State",
          name: "New York",
          containedInPlace: {
            "@type": "Country",
            name: "United States",
          },
        },
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Queens Construction & Restoration Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Masonry & Brick Restoration",
              serviceType: "Masonry Restoration",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Brick Pointing & Repointing",
              serviceType: "Brick Pointing",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Waterproofing & Stucco",
              serviceType: "Waterproofing and Stucco",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Roof Restoration",
              serviceType: "Roof Restoration",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Fire Escape & Metal Restoration",
              serviceType: "Fire Escape Restoration",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Concrete & Stone Work",
              serviceType: "Concrete and Stone Restoration",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Exterior Painting",
              serviceType: "Exterior Painting",
            },
          },
        ],
      },
      url: pageUrl,
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
          name: "Construction & Restoration Services in Queens",
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
          name: "Do you provide brick pointing in Queens?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Infinity Construction NYC provides brick pointing and repointing as part of its masonry restoration services in Queens.",
          },
        },
        {
          "@type": "Question",
          name: "Can you waterproof a masonry building in Queens?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Infinity Construction NYC provides exterior waterproofing and stucco services for appropriate masonry surfaces in Queens.",
          },
        },
        {
          "@type": "Question",
          name: "Do you restore fire escapes in Queens?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Fire escape and exterior metal restoration services are available for properties in Queens.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work on residential properties in Queens?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Infinity Construction NYC provides residential and commercial construction and exterior restoration services.",
          },
        },
        {
          "@type": "Question",
          name: "Can you handle multiple exterior repairs on one property?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Depending on the property, masonry, waterproofing, roofing, concrete, stone, metal and painting work can be coordinated as part of a larger restoration project.",
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
