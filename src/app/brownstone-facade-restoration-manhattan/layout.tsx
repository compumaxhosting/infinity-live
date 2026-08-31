import type { Metadata } from "next";

const pageUrl =
  "https://www.infinityconstructionnyc.com/brownstone-facade-restoration-manhattan";
const imgUrl =
  "https://www.infinityconstructionnyc.com/historical-landmark/brownstone-facade-restoration-manhattan.webp";

export const metadata: Metadata = {
  title: "Brownstone Facade Restoration Contractor Manhattan, NY",

  description:
    "Brownstone facade restoration contractor in Manhattan, NY. Expert brownstone repair, masonry, repointing, waterproofing and historic facade restoration.",

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
    title: "Brownstone Facade Restoration Contractor Manhattan, NY",
    description:
      "Brownstone facade restoration and repair in Manhattan, NY, including masonry repair, repointing, waterproofing and historic facade restoration.",
    url: pageUrl,
    siteName: "Infinity Construction NYC",
    images: [
      {
        url: imgUrl,
        alt: "Brownstone facade restoration and repair in Manhattan, NY",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Brownstone Facade Restoration Contractor Manhattan, NY",
    description:
      "Brownstone facade restoration and repair in Manhattan, NY, including masonry repair, repointing, waterproofing and historic facade restoration.",
    images: [imgUrl],
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
      name: "Brownstone Facade Restoration & Repair Contractor in Manhattan, NY",
      description:
        "Brownstone facade restoration and repair in Manhattan, NY for stone, masonry, architectural details, and exterior damage.",

      isPartOf: {
        "@type": "WebSite",
        name: "Infinity Construction NYC",
        url: "https://www.infinityconstructionnyc.com/",
      },

      about: {
        "@id": `${pageUrl}#service`,
      },
    },

    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Brownstone Facade Restoration in Manhattan, NY",
      serviceType: "Brownstone Facade Restoration and Repair",

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

      url: pageUrl,
    },

    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,

      mainEntity: [
        {
          "@type": "Question",
          name: "What is brownstone facade restoration in Manhattan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Brownstone facade restoration involves repairing deteriorated brownstone, masonry, exterior surfaces, and architectural details while preserving the property's existing character where practical.",
          },
        },

        {
          "@type": "Question",
          name: "What are common signs that a brownstone facade needs repair?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Common signs include cracks, deteriorated surfaces, spalling, damaged mortar joints, loose material, failed previous repairs, and visible signs of water intrusion.",
          },
        },

        {
          "@type": "Question",
          name: "Can damaged brownstone be repaired instead of replaced?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Localized brownstone deterioration may be repairable without replacing the entire facade. The appropriate approach depends on the existing material and extent of damage.",
          },
        },

        {
          "@type": "Question",
          name: "Does brownstone facade restoration include architectural details?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depending on the property's condition, restoration may include window surrounds, decorative masonry, carved details, and other exterior architectural elements.",
          },
        },

        {
          "@type": "Question",
          name: "Can water-related damage be addressed during facade restoration?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. When moisture contributes to facade deterioration, the source of the water should be evaluated and appropriate exterior repairs can be considered.",
          },
        },

        {
          "@type": "Question",
          name: "Does a Manhattan brownstone require landmark approval?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Requirements depend on the property's location, designation, and proposed exterior work. Properties subject to historic preservation rules may require review or approval.",
          },
        },

        {
          "@type": "Question",
          name: "How much does brownstone facade restoration cost in Manhattan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Costs vary by property and project scope. Factors can include facade size, deterioration, accessibility, materials, repair methods, and the extent of restoration required.",
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
