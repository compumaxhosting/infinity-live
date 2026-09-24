import { ReactNode } from "react";
import type { Metadata } from "next";

const siteUrl = "https://www.infinityconstructionnyc.com";
const faqUrl = `${siteUrl}/faq`;
const ogImage = `${siteUrl}/blog/img-12.webp`;

export const metadata: Metadata = {
  title: "Best Masonry Contractors NYC | Masonry FAQ | Infinity Construction NYC",

  description:
    "Get answers about NYC masonry, brick pointing, brownstone, facade restoration, waterproofing and more. Serving Brooklyn, Manhattan, Queens & The Bronx.",

  keywords:
    "best masonry contractors NYC, masonry contractors NYC, masonry repair NYC, brick pointing NYC, brownstone restoration NYC, facade restoration NYC, masonry FAQ NYC, brick repair NYC, waterproofing NYC",

  authors: [
    {
      name: "Infinity Construction NYC",
    },
  ],

  alternates: {
    canonical: "/faq",
  },

  robots: {
    index: true,
    follow: true,
  },

  referrer: "strict-origin-when-cross-origin",

  openGraph: {
    type: "website",
    title: "Best Masonry Contractors NYC | Masonry FAQ",
    description:
      "Find answers about NYC masonry, brick pointing, brownstone restoration, facade repair, waterproofing and more.",
    url: faqUrl,
    siteName: "Infinity Construction NYC",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Masonry contractors performing exterior restoration work in New York City",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Masonry Contractors NYC | Masonry FAQ",
    description:
      "Explore answers about masonry repair, brick pointing, brownstone restoration, facade repair and waterproofing across NYC.",
    images: [ogImage],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": `${faqUrl}#faqpage`,
      url: faqUrl,
      name: "Masonry Contractors NYC FAQ",
      description:
        "Answers to common questions about masonry repair, brick pointing, brownstone restoration, facade restoration, waterproofing and related exterior construction services in New York City.",
      inLanguage: "en-US",

      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },

      about: {
        "@id": `${siteUrl}/#business`,
      },

      mainEntity: [
        {
          "@type": "Question",
          name: "How do I know if my NYC building needs masonry repair?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Look for cracked or missing mortar, loose or damaged bricks, spalling, water stains, deteriorating facade surfaces, or visible cracks. These issues can indicate that the exterior needs professional evaluation.",
          },
        },

        {
          "@type": "Question",
          name: "What should I do if I notice cracks or crumbling brick on my building?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Do not ignore visible masonry deterioration. Have the affected area inspected to determine whether the problem is limited to mortar and surface damage or requires more extensive masonry or facade restoration.",
          },
        },

        {
          "@type": "Question",
          name: "When does brick pointing become necessary on an NYC property?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Brick pointing may be needed when mortar joints become cracked, recessed, loose, or deteriorated. Repointing restores the joints and helps protect the surrounding masonry from moisture and weather exposure.",
          },
        },

        {
          "@type": "Question",
          name: "Is brick repointing the same thing as replacing damaged bricks?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Repointing replaces deteriorated mortar joints, while brick replacement involves removing and replacing individual damaged masonry units. A project may require one or both depending on the condition of the wall.",
          },
        },

        {
          "@type": "Question",
          name: "How can I tell whether my brownstone needs restoration or just minor repairs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The answer depends on the condition of the facade, architectural details, stoop, mortar, and underlying masonry. An inspection can help determine whether localized repairs or a broader restoration approach is appropriate.",
          },
        },

        {
          "@type": "Question",
          name: "Can an older Brooklyn brownstone be restored without losing its original character?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Brownstone restoration can focus on repairing deteriorated areas while preserving important architectural details and the property's historic appearance. Material selection and restoration methods are particularly important for older buildings.",
          },
        },

        {
          "@type": "Question",
          name: "What is involved in restoring a brownstone facade in NYC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depending on the building, restoration can involve repairing deteriorated brownstone, masonry and architectural details, addressing cracks and water intrusion, restoring damaged areas, and completing related exterior work.",
          },
        },

        {
          "@type": "Question",
          name: "Can you restore a limestone facade as well as brownstone?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Limestone restoration is among Infinity Construction NYC's exterior restoration services and can include work on limestone facades, stoops, and architectural elements.",
          },
        },

        {
          "@type": "Question",
          name: "Can deteriorated mortar cause water damage?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Deteriorated mortar can create pathways for moisture to enter masonry assemblies. Identifying and repairing the source of water intrusion can help protect the facade and surrounding building materials.",
          },
        },

        {
          "@type": "Question",
          name: "Does a landmarked NYC building need approval for facade work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Additional preservation requirements may apply to exterior work on landmarked properties or buildings in designated historic districts. Requirements depend on the property and proposed scope of work.",
          },
        },

        {
          "@type": "Question",
          name: "How much does masonry restoration cost in NYC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Masonry restoration costs vary based on the property's size, the extent of deterioration, materials, access, waterproofing requirements, and project scope. A project-specific evaluation is needed to determine the appropriate work.",
          },
        },

        {
          "@type": "Question",
          name: "Do you provide masonry services throughout Brooklyn, Manhattan, Queens, and The Bronx?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Infinity Construction NYC provides masonry, facade restoration, brownstone restoration, waterproofing, and related exterior construction services throughout Brooklyn, Manhattan, Queens, and The Bronx.",
          },
        },

        {
          "@type": "Question",
          name: "How do I get started with a masonry or facade restoration project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contact Infinity Construction NYC with details about the property and the exterior work you need. You can discuss the condition of the masonry, facade, brownstone, limestone, stoop, waterproofing, or other exterior elements and determine the appropriate next step.",
          },
        },
      ],
    },

    {
      "@type": "GeneralContractor",
      "@id": `${siteUrl}/#business`,
      name: "Infinity Construction NYC",
      url: siteUrl,
      telephone: "+1-347-939-5779",

      description:
        "Infinity Construction NYC provides masonry, brownstone and limestone restoration, facade repair, brick pointing, waterproofing, roofing, concrete, stone and related exterior construction services throughout New York City.",

      areaServed: [
        {
          "@type": "AdministrativeArea",
          name: "Brooklyn, New York City, New York",
        },
        {
          "@type": "AdministrativeArea",
          name: "Manhattan, New York City, New York",
        },
        {
          "@type": "AdministrativeArea",
          name: "Queens, New York City, New York",
        },
        {
          "@type": "AdministrativeArea",
          name: "The Bronx, New York City, New York",
        },
        {
          "@type": "City",
          name: "New York City",
          address: {
            "@type": "PostalAddress",
            addressLocality: "New York City",
            addressRegion: "NY",
            addressCountry: "US",
          },
        },
      ],

      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Masonry & Exterior Restoration Services",

        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Masonry Repair",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Brick Pointing and Repointing",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Brownstone Restoration",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Limestone Restoration",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Facade Restoration",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Exterior Waterproofing",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Stoop Restoration",
            },
          },
        ],
      },
    },

    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Infinity Construction NYC",

      publisher: {
        "@id": `${siteUrl}/#business`,
      },

      inLanguage: "en-US",
    },

    {
      "@type": "WebPage",
      "@id": `${faqUrl}#webpage`,
      url: faqUrl,
      name: "Masonry Contractors NYC FAQ",

      description:
        "Frequently asked questions about masonry repair, brick pointing, brownstone restoration, limestone restoration, facade repair, waterproofing and exterior construction services in New York City.",

      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },

      about: {
        "@id": `${siteUrl}/#business`,
      },

      mainEntity: {
        "@id": `${faqUrl}#faqpage`,
      },

      inLanguage: "en-US",
    },
  ],
};

export default function FAQLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      {children}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
    </div>
  );
}
