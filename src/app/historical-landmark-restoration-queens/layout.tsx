import type { Metadata } from "next";

const pageUrl =
  "https://www.infinityconstructionnyc.com/historical-landmark-restoration-queens/";

export const metadata: Metadata = {
  title: "Historical Landmark Restoration Queens | Infinity Construction",

  description:
    "Historical landmark restoration in Queens, NY for brownstone, limestone, masonry, facades and stoops by Infinity Construction NYC.",

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
    title: "Historical Landmark Restoration Queens | Infinity Construction",
    description:
      "Historical landmark restoration in Queens, NY for brownstone, limestone, masonry, facades and stoops by Infinity Construction NYC.",
    url: pageUrl,
    siteName: "Infinity Construction NYC",
    images: [
      {
        url: "https://www.infinityconstructionnyc.com/img-3.webp",
        alt: "Historical landmark restoration in Queens by Infinity Construction NYC",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Historical Landmark Restoration Queens | Infinity Construction",
    description:
      "Historical landmark restoration in Queens, NY for brownstone, limestone, masonry, facades and stoops by Infinity Construction NYC.",
    images: [
      "https://www.infinityconstructionnyc.com/img-3.webp",
    ],
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
      name: "Historical Landmark Restoration Contractor in Queens, NY",
      description:
        "Historical landmark restoration in Queens, NY for brownstone, limestone, masonry, facades and stoops by Infinity Construction NYC.",

      isPartOf: {
        "@type": "WebSite",
        "@id": "https://www.infinityconstructionnyc.com/#website",
        url: "https://www.infinityconstructionnyc.com/",
        name: "Infinity Construction NYC",
      },

      about: {
        "@id": "https://www.infinityconstructionnyc.com/#business",
      },
    },

    {
      "@type": "LocalBusiness",
      "@id": "https://www.infinityconstructionnyc.com/#business",
      name: "Infinity Construction NYC",
      url: "https://www.infinityconstructionnyc.com/",
      description:
        "Historical restoration, brownstone and limestone restoration, masonry, facade repair, waterproofing and related exterior construction services in New York City.",

      areaServed: {
        "@type": "City",
        name: "Queens",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Queens",
          addressRegion: "NY",
          addressCountry: "US",
        },
      },
    },

    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Historical Landmark Restoration in Queens",
      serviceType: "Historical Landmark Restoration",
      description:
        "Historical landmark restoration services in Queens including brownstone and limestone restoration, historic facade repair, masonry restoration, stoop restoration and exterior waterproofing.",

      provider: {
        "@id": "https://www.infinityconstructionnyc.com/#business",
      },

      areaServed: {
        "@type": "City",
        name: "Queens",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Queens",
          addressRegion: "NY",
          addressCountry: "US",
        },
      },
    },

    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,

      mainEntity: [
        {
          "@type": "Question",
          name: "What is historical landmark restoration in Queens?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Historical landmark restoration involves repairing and preserving historic buildings and exterior architectural features while maintaining their character and using appropriate restoration methods.",
          },
        },

        {
          "@type": "Question",
          name: "Does every historic property in Queens require an LPC permit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. LPC requirements depend on the property's designation and the proposed work. Property owners should verify the property's status and applicable requirements before beginning exterior alterations.",
          },
        },

        {
          "@type": "Question",
          name: "Can a brownstone facade be restored instead of replaced?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In many situations, damaged areas can be repaired while sound original material is preserved. The appropriate method depends on the condition and construction of the existing facade.",
          },
        },

        {
          "@type": "Question",
          name: "Does Infinity Construction NYC provide brownstone and limestone restoration?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Brownstone and limestone restoration are among the historical restoration and masonry services offered by Infinity Construction NYC.",
          },
        },

        {
          "@type": "Question",
          name: "Can historic stoops be restored?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Historic stoops can be restored depending on their material, construction, condition, and the nature of the deterioration.",
          },
        },

        {
          "@type": "Question",
          name: "What problems can historic facade restoration address?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depending on the property, restoration can address deteriorated masonry, damaged mortar joints, surface deterioration, cracks, spalling, water-related deterioration and damaged architectural elements.",
          },
        },

        {
          "@type": "Question",
          name: "How do I choose a historic restoration contractor in Queens?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Look for a contractor with relevant experience in historic masonry, brownstone and limestone restoration, facade repair and exterior restoration. For landmarked properties, make sure the project scope accounts for applicable NYC preservation requirements.",
          },
        },

        {
          "@type": "Question",
          name: "Does historic restoration include waterproofing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It can. Exterior waterproofing may be appropriate when moisture intrusion is contributing to masonry or facade deterioration, but the correct solution depends on the building and source of the water problem.",
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