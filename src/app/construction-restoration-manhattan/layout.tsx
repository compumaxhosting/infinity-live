import type { Metadata, Viewport } from "next";

const pageUrl =
  "https://www.infinityconstructionnyc.com/construction-restoration-manhattan";

const imgUrl =
  "https://www.infinityconstructionnyc.com/historical-landmark/construction-queen.png";

export const metadata: Metadata = {
  title:
    "Manhattan Construction & Restoration Services | Infinity Construction NYC",

  description:
    "Expert Manhattan construction and restoration services for brownstone, limestone, facades, masonry, roofing, waterproofing and commercial properties.",

  keywords: [
    "Manhattan construction services",
    "Manhattan restoration services",
    "brownstone restoration Manhattan",
    "limestone restoration Manhattan",
    "facade restoration Manhattan",
    "masonry restoration Manhattan",
    "brick repointing Manhattan",
    "waterproofing Manhattan",
    "roof restoration Manhattan",
    "fire escape restoration Manhattan",
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
      "Manhattan Construction & Restoration Services | Infinity Construction NYC",
    description:
      "Expert Manhattan construction and restoration services for brownstone, limestone, facades, masonry, roofing, waterproofing and commercial properties.",
    url: pageUrl,
    siteName: "Infinity Construction NYC",
    images: [
      {
        url: imgUrl,
        alt: "Manhattan construction and restoration services by Infinity Construction NYC",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Manhattan Construction & Restoration Services | Infinity Construction NYC",
    description:
      "Expert Manhattan construction and restoration services for brownstone, limestone, facades, masonry, roofing, waterproofing and commercial properties.",
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
      "@type": "HomeAndConstructionBusiness",
      "@id": "https://www.infinityconstructionnyc.com/#business",
      name: "Infinity Construction NYC",
      url: "https://www.infinityconstructionnyc.com/",
      telephone: "+1-347-939-5779",
      areaServed: {
        "@type": "Place",
        name: "Manhattan, New York City, NY",
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
      name: "Manhattan Construction & Restoration Services",
      description:
        "Construction and restoration services in Manhattan for brownstone, limestone, facades, masonry, roofing, waterproofing and commercial properties.",
      isPartOf: {
        "@id": "https://www.infinityconstructionnyc.com/#website",
      },
      about: {
        "@id": `${pageUrl}#service`,
      },
      publisher: {
        "@id": "https://www.infinityconstructionnyc.com/#business",
      },
      mainEntity: {
        "@id": `${pageUrl}#service`,
      },
    },

    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Manhattan Construction & Restoration Services",
      serviceType: "Construction and Exterior Restoration",
      provider: {
        "@id": "https://www.infinityconstructionnyc.com/#business",
      },
      areaServed: {
        "@type": "Place",
        name: "Manhattan, New York City, NY",
      },
      url: pageUrl,
      description:
        "Construction and restoration services in Manhattan including brownstone, limestone, facade, masonry, brick repointing, waterproofing, stucco, roofing, fire escape, metal, concrete, stone and exterior restoration.",
    },

    {
      "@type": "Service",
      "@id": `${pageUrl}#brownstone-restoration`,
      name: "Brownstone & Limestone Restoration",
      serviceType: "Brownstone and Limestone Restoration",
      provider: {
        "@id": "https://www.infinityconstructionnyc.com/#business",
      },
      areaServed: {
        "@type": "Place",
        name: "Manhattan, New York City, NY",
      },
    },

    {
      "@type": "Service",
      "@id": `${pageUrl}#facade-restoration`,
      name: "Facade & Masonry Restoration",
      serviceType: "Facade and Masonry Restoration",
      provider: {
        "@id": "https://www.infinityconstructionnyc.com/#business",
      },
      areaServed: {
        "@type": "Place",
        name: "Manhattan, New York City, NY",
      },
    },

    {
      "@type": "Service",
      "@id": `${pageUrl}#brick-repointing`,
      name: "Brick Pointing & Repointing",
      serviceType: "Brick Pointing and Repointing",
      provider: {
        "@id": "https://www.infinityconstructionnyc.com/#business",
      },
      areaServed: {
        "@type": "Place",
        name: "Manhattan, New York City, NY",
      },
    },

    {
      "@type": "Service",
      "@id": `${pageUrl}#waterproofing`,
      name: "Waterproofing & Stucco",
      serviceType: "Waterproofing and Stucco",
      provider: {
        "@id": "https://www.infinityconstructionnyc.com/#business",
      },
      areaServed: {
        "@type": "Place",
        name: "Manhattan, New York City, NY",
      },
    },

    {
      "@type": "Service",
      "@id": `${pageUrl}#roof-restoration`,
      name: "Roof Restoration",
      serviceType: "Roof Restoration",
      provider: {
        "@id": "https://www.infinityconstructionnyc.com/#business",
      },
      areaServed: {
        "@type": "Place",
        name: "Manhattan, New York City, NY",
      },
    },

    {
      "@type": "Service",
      "@id": `${pageUrl}#fire-escape-restoration`,
      name: "Fire Escape & Metal Restoration",
      serviceType: "Fire Escape and Metal Restoration",
      provider: {
        "@id": "https://www.infinityconstructionnyc.com/#business",
      },
      areaServed: {
        "@type": "Place",
        name: "Manhattan, New York City, NY",
      },
    },

    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Do you restore Manhattan brownstones?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Infinity Construction NYC provides brownstone and limestone restoration, including facade and stoop restoration.",
          },
        },
        {
          "@type": "Question",
          name: "Do you repair brick and masonry in Manhattan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Brick pointing, repointing and masonry restoration are part of the company's Manhattan restoration services.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work on commercial buildings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Infinity Construction NYC provides construction and restoration services for residential and commercial properties.",
          },
        },
        {
          "@type": "Question",
          name: "Can roofing and facade restoration be combined?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depending on the property's condition, multiple exterior restoration services can be included in one project scope.",
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
