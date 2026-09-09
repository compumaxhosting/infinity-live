import type { Metadata, Viewport } from "next";

const pageUrl =
  "https://www.infinityconstructionnyc.com/brownstone-facade-restoration-brooklyn";
const imgUrl =
  "https://www.infinityconstructionnyc.com/historical-landmark/brownstone-facade-brooklyn.webp";

export const metadata: Metadata = {
  title:
    "Brownstone Façade Restoration Brooklyn NY | Infinity Construction NYC",

  description:
    "Brownstone façade restoration and repair in Brooklyn, NY for deteriorated stone, masonry, architectural details, and exterior damage.",

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
      "Brownstone Façade Restoration Brooklyn NY | Infinity Construction NYC",
    description:
      "Brownstone façade restoration and repair in Brooklyn, NY for deteriorated stone, masonry, architectural details, and exterior damage.",
    url: pageUrl,
    siteName: "Infinity Construction NYC",
    images: [
      {
        url: imgUrl,
        alt: "Brownstone façade restoration and repair in Brooklyn NY",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Brownstone Façade Restoration Brooklyn NY | Infinity Construction NYC",
    description:
      "Brownstone façade restoration and repair in Brooklyn, NY for stone, masonry, architectural details, and exterior damage.",
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
      name: "Brownstone Façade Restoration & Repair Contractor in Brooklyn, NY",
      description:
        "Brownstone façade restoration and repair in Brooklyn, NY for deteriorated stone, masonry, architectural details, and exterior damage.",

      isPartOf: {
        "@id": "https://www.infinityconstructionnyc.com/#website",
      },

      about: {
        "@type": "Service",
        name: "Brownstone Façade Restoration",
        serviceType: "Brownstone Façade Restoration and Repair",

        areaServed: {
          "@type": "City",
          name: "Brooklyn",
        },

        provider: {
          "@type": "Organization",
          name: "Infinity Construction NYC",
          url: "https://www.infinityconstructionnyc.com/",
        },
      },
    },

    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Brownstone Façade Restoration & Repair in Brooklyn, NY",
      serviceType: "Brownstone Façade Restoration and Repair",
      description:
        "Restoration and repair services for brownstone façades, masonry, exterior architectural details, cracks, deteriorated surfaces, and related exterior damage.",

      provider: {
        "@type": "Organization",
        name: "Infinity Construction NYC",
        url: "https://www.infinityconstructionnyc.com/",
      },

      areaServed: {
        "@type": "City",
        name: "Brooklyn",

        containedInPlace: {
          "@type": "State",
          name: "New York",
        },
      },

      url: pageUrl,
    },

    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,

      mainEntity: [
        {
          "@type": "Question",
          name: "What is brownstone façade restoration?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Brownstone façade restoration is the process of repairing deteriorated brownstone, masonry, architectural details, and other exterior elements while preserving the property's existing character where practical.",
          },
        },

        {
          "@type": "Question",
          name: "What are signs that a brownstone façade needs repair?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cracks, deteriorated surfaces, spalling, damaged mortar joints, loose material, failed previous repairs, and signs of water intrusion may indicate that a façade assessment is needed.",
          },
        },

        {
          "@type": "Question",
          name: "Can damaged brownstone be repaired instead of replaced?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In many cases, localized deterioration can be repaired without replacing the entire façade. The appropriate method depends on the existing material and the extent of damage.",
          },
        },

        {
          "@type": "Question",
          name: "Does façade restoration include architectural details?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Depending on the property's condition, restoration can include window surrounds, decorative masonry, carved details, and other exterior architectural features.",
          },
        },

        {
          "@type": "Question",
          name: "Does brownstone façade restoration include waterproofing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Water-related problems may require repairs that address moisture intrusion. The source of the moisture should be evaluated before choosing a waterproofing or repair approach.",
          },
        },

        {
          "@type": "Question",
          name: "Does a Brooklyn brownstone require landmark approval?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on the property's location and designation and the type of exterior work proposed. Properties within designated historic districts may be subject to NYC Landmarks Preservation Commission requirements.",
          },
        },

        {
          "@type": "Question",
          name: "How much does brownstone façade restoration cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There is no standard price for every property. Cost can depend on façade size, deterioration, accessibility, materials, repair techniques, and the overall scope of work.",
          },
        },

        {
          "@type": "Question",
          name: "How do I start a brownstone façade restoration project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Start with an evaluation of the façade and its visible deterioration. A contractor can then help determine the appropriate repair scope, materials, and project requirements.",
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
