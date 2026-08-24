import type { Metadata } from "next";

const pageUrl =
  "https://www.infinityconstructionnyc.com/brownstone-restoration-brooklyn";
const imgUrl =
  "https://www.infinityconstructionnyc.com/historical-landmark/brownstone-restoration-brooklyn.webp";

export const metadata: Metadata = {
  title: "Brownstone Restoration Brooklyn NY | Infinity Construction NYC",

  description:
    "Brownstone restoration in Brooklyn, NY for façades, stoops, masonry, waterproofing, and historic exterior repairs by Infinity Construction NYC.",

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
    title: "Brownstone Restoration Brooklyn NY | Infinity Construction NYC",
    description:
      "Brownstone restoration in Brooklyn, NY for façades, stoops, masonry, waterproofing, and historic exterior repairs.",
    url: pageUrl,
    siteName: "Infinity Construction NYC",
    images: [
      {
        url: imgUrl,
        alt: "Brownstone restoration and façade repair in Brooklyn NY",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Brownstone Restoration Brooklyn NY | Infinity Construction NYC",
    description:
      "Professional brownstone restoration in Brooklyn, NY including façade, stoop, masonry, and waterproofing services.",
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
      name: "Brownstone Restoration Brooklyn NY | Infinity Construction NYC",
      headline: "Brownstone Restoration in Brooklyn, NY",
      description:
        "Brownstone restoration in Brooklyn, NY for façades, stoops, masonry, waterproofing, and exterior repairs by Infinity Construction NYC.",

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
    },

    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Brownstone Restoration in Brooklyn, NY",
      serviceType: "Brownstone Restoration",
      description:
        "Brownstone restoration services in Brooklyn including façade restoration, stoop repair, masonry restoration, waterproofing, and exterior architectural repairs.",

      url: pageUrl,

      provider: {
        "@id": "https://www.infinityconstructionnyc.com/#business",
      },

      areaServed: {
        "@type": "City",
        name: "Brooklyn",

        containedInPlace: {
          "@type": "State",
          name: "New York",
        },
      },
    },

    {
      "@type": "LocalBusiness",
      "@id": "https://www.infinityconstructionnyc.com/#business",
      name: "Infinity Construction NYC",
      url: "https://www.infinityconstructionnyc.com/",

      areaServed: {
        "@type": "City",
        name: "New York City",
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
          name: "Brownstone Restoration",
          item: pageUrl,
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
