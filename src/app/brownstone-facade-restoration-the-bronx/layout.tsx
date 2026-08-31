import type { Metadata } from "next";

const pageUrl =
  "https://www.infinityconstructionnyc.com/brownstone-facade-restoration-the-bronx";
const imgUrl =
  "https://www.infinityconstructionnyc.com/historical-landmark/brownstone-facade-restoration-the-bronx.webp";

export const metadata: Metadata = {
  title: "Brownstone Facade Restoration Contractor Bronx, NY",

  description:
    "Brownstone facade restoration contractor in The Bronx, NY. Expert brownstone repair, masonry, repointing, waterproofing and historic restoration.",

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
    title: "Brownstone Facade Restoration Contractor Bronx, NY",
    description:
      "Brownstone facade restoration and repair in The Bronx, NY, including masonry repair, repointing, waterproofing, stoop restoration and historic facade work.",
    url: pageUrl,
    siteName: "Infinity Construction NYC",
    images: [
      {
        url: imgUrl,
        alt: "Brownstone facade restoration and repair in The Bronx, NY",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Brownstone Facade Restoration Contractor Bronx, NY",
    description:
      "Brownstone facade restoration and repair in The Bronx, NY, including masonry repair, repointing, waterproofing, stoop restoration and historic facade work.",
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
      name: "Brownstone Facade Restoration & Repair Contractor in The Bronx, NY",
      description:
        "Brownstone facade restoration and repair services in The Bronx, NY, including masonry repair, repointing, waterproofing, stoop restoration and historic facade restoration.",

      isPartOf: {
        "@type": "WebSite",
        "@id": "https://www.infinityconstructionnyc.com/#website",
        url: "https://www.infinityconstructionnyc.com/",
        name: "Infinity Construction NYC",
      },

      about: {
        "@id": `${pageUrl}#service`,
      },

      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
    },

    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Brownstone Facade Restoration & Repair",
      serviceType: "Brownstone Facade Restoration",
      description:
        "Brownstone facade restoration and repair services in The Bronx, including masonry repair, repointing, waterproofing, stoop restoration and historic facade restoration.",

      provider: {
        "@id": "https://www.infinityconstructionnyc.com/#business",
      },

      areaServed: {
        "@type": "City",
        name: "The Bronx",

        containedInPlace: {
          "@type": "State",
          name: "New York",
        },
      },

      url: pageUrl,
    },

    {
      "@type": "LocalBusiness",
      "@id": "https://www.infinityconstructionnyc.com/#business",
      name: "Infinity Construction NYC",
      url: "https://www.infinityconstructionnyc.com/",
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
          name: "Service Areas",
          item: "https://www.infinityconstructionnyc.com/service-areas",
        },

        {
          "@type": "ListItem",
          position: 3,
          name: "The Bronx",
          item: "https://www.infinityconstructionnyc.com/service-areas/the-bronx",
        },

        {
          "@type": "ListItem",
          position: 4,
          name: "Brownstone Facade Restoration",
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
          name: "What does brownstone facade restoration include?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Brownstone facade restoration may include masonry repair, surface restoration, repointing, waterproofing, and restoration of architectural details. The scope depends on the property's condition.",
          },
        },

        {
          "@type": "Question",
          name: "What is brownstone repointing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Brownstone repointing involves removing deteriorated mortar from masonry joints and replacing it with suitable new mortar.",
          },
        },

        {
          "@type": "Question",
          name: "Can brownstone stoops and steps be restored?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Brownstone stoops and steps can be included in a restoration project when they have cracks, erosion, damaged surfaces, or other deterioration.",
          },
        },

        {
          "@type": "Question",
          name: "Does a Bronx brownstone need LPC approval?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Requirements depend on the property's designation and the exterior work proposed. Properties within designated historic districts or individual landmarks may require LPC review or approval.",
          },
        },

        {
          "@type": "Question",
          name: "Why is waterproofing important for brownstone?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Moisture can contribute to deterioration of masonry and mortar. Addressing potential water-entry points can be an important part of protecting restored facade areas.",
          },
        },

        {
          "@type": "Question",
          name: "Does every Bronx building require a facade inspection?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. NYC's Facade Inspection & Safety Program generally applies to buildings higher than six stories. Property owners should confirm the requirements applicable to their specific building.",
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
