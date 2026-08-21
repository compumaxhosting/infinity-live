import type { Metadata } from "next";

const pageUrl =
  "https://www.infinityconstructionnyc.com/service-areas/the-bronx/brownstone-restoration";

export const metadata: Metadata = {
  title: "Brownstone Restoration Bronx NY | Infinity Construction NYC",

  description:
    "Brownstone restoration in The Bronx, NY for façades, stoops, masonry, waterproofing, and historic exterior repairs by Infinity Construction NYC.",

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
    title: "Brownstone Restoration Bronx NY | Infinity Construction NYC",
    description:
      "Brownstone restoration in The Bronx, NY for façades, stoops, masonry, waterproofing, and historic exterior repairs.",
    url: pageUrl,
    siteName: "Infinity Construction NYC",
    images: [
      {
        url: "YOUR-IMAGE-URL-HERE",
        alt: "Brownstone restoration and façade repair in The Bronx NY",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Brownstone Restoration Bronx NY | Infinity Construction NYC",
    description:
      "Professional brownstone restoration in The Bronx, NY including façade, stoop, masonry, and waterproofing services.",
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
      name: "Brownstone Restoration Bronx NY | Infinity Construction NYC",
      headline: "Brownstone Restoration in The Bronx, NY",
      description:
        "Brownstone restoration in The Bronx, NY for façades, stoops, masonry, waterproofing, and exterior repairs by Infinity Construction NYC.",

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
      name: "Brownstone Restoration in The Bronx",
      serviceType: "Brownstone Restoration",
      description:
        "Brownstone restoration services in The Bronx including façade restoration, stoop repair, masonry restoration, waterproofing, and exterior architectural repairs.",

      url: pageUrl,

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
