import type { Metadata } from "next";

const pageUrl =
  "https://www.infinityconstructionnyc.com/manhattan-brownstone-restoration";

export const metadata: Metadata = {
  title: "Manhattan Brownstone Restoration | Infinity Construction NYC",

  description:
    "Manhattan brownstone restoration for façades, stoops, masonry, waterproofing, and exterior repairs by Infinity Construction NYC.",

  authors: [{ name: "Infinity Construction NYC" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: pageUrl,
  },

  themeColor: "#ffffff",

  openGraph: {
    type: "website",
    title: "Manhattan Brownstone Restoration | Infinity Construction NYC",
    description:
      "Manhattan brownstone restoration for façades, stoops, masonry, waterproofing, and exterior repairs by Infinity Construction NYC.",
    url: pageUrl,
    siteName: "Infinity Construction NYC",
    images: [
      {
        url: "YOUR-IMAGE-URL-HERE",
        alt: "Brownstone restoration in Manhattan NY",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Manhattan Brownstone Restoration | Infinity Construction NYC",
    description:
      "Brownstone restoration in Manhattan, NY including façade, stoop, masonry, waterproofing, and exterior repairs.",
    images: ["YOUR-IMAGE-URL-HERE"],
  },

  other: {
    referrer: "strict-origin-when-cross-origin",
  },
};

const schema = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Manhattan Brownstone Restoration | Infinity Construction NYC",
      description:
        "Manhattan brownstone restoration for façades, stoops, masonry, waterproofing, and exterior repairs by Infinity Construction NYC.",

      mainEntity: {
        "@id": `${pageUrl}#service`,
      },
    },

    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Manhattan Brownstone Restoration",
      serviceType: "Brownstone Restoration",
      description:
        "Brownstone restoration services in Manhattan including façade restoration, stoop restoration, masonry repair, waterproofing, and exterior repairs.",

      url: pageUrl,

      provider: {
        "@type": "Organization",
        name: "Infinity Construction NYC",
        url: "https://www.infinityconstructionnyc.com/",
      },

      areaServed: {
        "@type": "City",
        name: "Manhattan",

        containedInPlace: {
          "@type": "State",
          name: "New York",
        },
      },
    },

    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,

      mainEntity: [
        {
          "@type": "Question",
          name: "What does brownstone restoration in Manhattan involve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Brownstone restoration can include façade repairs, stoop restoration, masonry work, surface repairs, architectural detail restoration, and waterproofing, depending on the property's condition.",
          },
        },

        {
          "@type": "Question",
          name: "How do I know if my Manhattan brownstone needs restoration?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cracks, deteriorated stone, damaged mortar joints, weakened surfaces, water intrusion, and damaged stoop areas can indicate that a professional assessment may be appropriate.",
          },
        },

        {
          "@type": "Question",
          name: "Can an old brownstone façade be repaired instead of replaced?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In many situations, localized deterioration can be repaired without replacing the entire façade. The appropriate method depends on the existing material and extent of deterioration.",
          },
        },

        {
          "@type": "Question",
          name: "Does brownstone restoration in Manhattan include waterproofing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Waterproofing may be part of a restoration project when moisture or water intrusion contributes to deterioration. The source of moisture should be evaluated before selecting a repair method.",
          },
        },

        {
          "@type": "Question",
          name: "Does a Manhattan brownstone require Landmarks Preservation Commission approval?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Requirements can depend on whether the property is individually landmarked or located within a designated historic district and on the type of exterior work proposed.",
          },
        },

        {
          "@type": "Question",
          name: "How much does brownstone restoration cost in Manhattan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There is no standard price for every property. Costs depend on factors such as building size, extent of deterioration, accessibility, materials, repair methods, and overall project scope.",
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
