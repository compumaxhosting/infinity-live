import type { Metadata } from "next";

const pageUrl =
  "https://www.infinityconstructionnyc.com/historical-landmark-restoration-manhattan/";

export const metadata: Metadata = {
  title:
    "Historical Landmark Restoration Manhattan NY | Infinity Construction NYC",

  description:
    "Historical landmark restoration in Manhattan, NY for brownstone, limestone, masonry, facades, stoops, waterproofing, and historic exterior restoration.",

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
    title:
      "Historical Landmark Restoration Manhattan NY | Infinity Construction NYC",
    description:
      "Historical landmark restoration in Manhattan for brownstone, limestone, masonry, facades, stoops, waterproofing, and historic exterior restoration.",
    url: pageUrl,
    siteName: "Infinity Construction NYC",
    images: [
      {
        url: "YOUR-IMAGE-URL-HERE",
        alt: "Historical landmark restoration and facade repair in Manhattan NY",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Historical Landmark Restoration Manhattan NY | Infinity Construction NYC",
    description:
      "Historical landmark restoration in Manhattan for brownstone, limestone, masonry, facades, stoops, waterproofing, and historic exterior restoration.",
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
      name: "Historical Landmark Restoration Manhattan NY | Infinity Construction NYC",
      description:
        "Historical landmark restoration in Manhattan for brownstone, limestone, masonry, facades, stoops, waterproofing, and historic exterior restoration.",

      isPartOf: {
        "@type": "WebSite",
        "@id": "https://www.infinityconstructionnyc.com/#website",
        url: "https://www.infinityconstructionnyc.com/",
        name: "Infinity Construction NYC",
      },

      about: {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Historical Landmark Restoration in Manhattan",
        serviceType: "Historical Landmark Restoration",

        provider: {
          "@type": "LocalBusiness",
          "@id": "https://www.infinityconstructionnyc.com/#business",
          name: "Infinity Construction NYC",
          url: "https://www.infinityconstructionnyc.com/",
          telephone: "+1-347-939-5779",

          address: {
            "@type": "PostalAddress",
            streetAddress: "152 E 118th St S1",
            addressLocality: "New York",
            addressRegion: "NY",
            postalCode: "10035",
            addressCountry: "US",
          },
        },

        areaServed: {
          "@type": "City",
          name: "Manhattan",
        },
      },
    },

    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,

      mainEntity: [
        {
          "@type": "Question",
          name: "What is historical landmark restoration in Manhattan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Historical landmark restoration involves repairing and preserving historic exterior features such as brownstone and limestone facades, masonry, stoops, architectural details, and other building elements while respecting applicable preservation requirements.",
          },
        },

        {
          "@type": "Question",
          name: "Does a landmarked building in Manhattan require LPC approval?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Exterior work affecting an individual landmark or a building within a designated historic district generally requires review and an appropriate permit from the NYC Landmarks Preservation Commission. The specific permit type depends on the property and proposed work.",
          },
        },

        {
          "@type": "Question",
          name: "Can a historic Manhattan brownstone facade be repaired instead of replaced?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In many cases, existing historic materials can be repaired or restored rather than completely replaced. The appropriate approach depends on the condition, material, extent of deterioration, and applicable preservation requirements.",
          },
        },

        {
          "@type": "Question",
          name: "What does historic facade restoration in Manhattan include?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Historic facade restoration may include brownstone and limestone repair, masonry restoration, brick repointing, stoop restoration, architectural detail repair, stucco work, and exterior waterproofing.",
          },
        },

        {
          "@type": "Question",
          name: "How do I know if my Manhattan historic facade needs restoration?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cracks, deteriorated stone, failing mortar joints, loose masonry, water infiltration, spalling, and damaged architectural details can indicate that a professional facade evaluation is appropriate.",
          },
        },

        {
          "@type": "Question",
          name: "Is limestone restoration different from brownstone restoration?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Limestone and brownstone have different material characteristics and may require different cleaning, patching, repair, mortar, and restoration methods.",
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
