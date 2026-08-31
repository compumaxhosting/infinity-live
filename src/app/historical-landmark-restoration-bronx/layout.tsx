import type { Metadata } from "next";

const pageUrl =
  "https://www.infinityconstructionnyc.com/historical-landmark-restoration-bronx/";

export const metadata: Metadata = {
  title: "Historical Landmark Restoration Bronx | Infinity Construction",

  description:
    "Historical landmark restoration in The Bronx for brownstone, limestone, masonry, stoops and historic facades by Infinity Construction NYC.",

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
    title: "Historical Landmark Restoration Bronx | Infinity Construction",
    description:
      "Historical landmark restoration in The Bronx for brownstone, limestone, masonry, stoops and historic facades by Infinity Construction NYC.",
    url: pageUrl,
    siteName: "Infinity Construction NYC",
    images: [
      {
        url: "https://www.infinityconstructionnyc.com/wp-content/uploads/2024/01/historical-restoration.jpg",
        alt: "Historical landmark restoration and historic facade restoration in The Bronx",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Historical Landmark Restoration Bronx | Infinity Construction",
    description:
      "Historical landmark restoration in The Bronx for brownstone, limestone, masonry, stoops and historic facades by Infinity Construction NYC.",
    images: [
      "https://www.infinityconstructionnyc.com/wp-content/uploads/2024/01/historical-restoration.jpg",
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
      name: "Historical Landmark Restoration Contractor in The Bronx, NY",
      description:
        "Historical landmark restoration in The Bronx for brownstone, limestone, masonry, stoops and historic facades by Infinity Construction NYC.",

      isPartOf: {
        "@id": "https://www.infinityconstructionnyc.com/#website",
      },

      about: {
        "@id": "https://www.infinityconstructionnyc.com/#organization",
      },
    },

    {
      "@type": "WebSite",
      "@id": "https://www.infinityconstructionnyc.com/#website",
      url: "https://www.infinityconstructionnyc.com/",
      name: "Infinity Construction NYC",

      publisher: {
        "@id": "https://www.infinityconstructionnyc.com/#organization",
      },
    },

    {
      "@type": "HomeAndConstructionBusiness",
      "@id": "https://www.infinityconstructionnyc.com/#organization",
      name: "Infinity Construction NYC",
      url: "https://www.infinityconstructionnyc.com/",
      description:
        "NYC contractor providing historical restoration, brownstone and limestone restoration, masonry, facade restoration, waterproofing and related exterior restoration services.",

      areaServed: {
        "@type": "City",
        name: "The Bronx",
      },

      knowsAbout: [
        "Historical Landmark Restoration",
        "Historic Facade Restoration",
        "Brownstone Restoration",
        "Limestone Restoration",
        "Historic Masonry Restoration",
        "Brownstone Stoop Restoration",
        "Brick Pointing",
        "Exterior Waterproofing",
      ],
    },

    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Historical Landmark Restoration in The Bronx",
      serviceType: "Historical Landmark Restoration",

      provider: {
        "@id": "https://www.infinityconstructionnyc.com/#organization",
      },

      areaServed: {
        "@type": "City",
        name: "The Bronx",

        address: {
          "@type": "PostalAddress",
          addressLocality: "The Bronx",
          addressRegion: "NY",
          addressCountry: "US",
        },
      },

      url: pageUrl,
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
