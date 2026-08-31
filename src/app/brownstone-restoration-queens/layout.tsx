import type { Metadata } from "next";

const pageUrl =
  "https://www.infinityconstructionnyc.com/brownstone-restoration-queens";
const imgUrl =
  "https://www.infinityconstructionnyc.com/historical-landmark/brownstone-restoration-queens.webp";
export const metadata: Metadata = {
  title: "Brownstone Restoration Queens NY | Infinity Construction NYC",

  description:
    "Brownstone restoration in Queens, NY for façades, stoops, masonry, waterproofing, and historic exterior repairs by Infinity Construction NYC.",

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
    title: "Brownstone Restoration Queens NY | Infinity Construction NYC",
    description:
      "Brownstone restoration in Queens, NY for façades, stoops, masonry, waterproofing, and historic exterior repairs.",
    url: pageUrl,
    siteName: "Infinity Construction NYC",
    images: [
      {
        url: imgUrl,
        alt: "Brownstone restoration and façade repair in Queens NY",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Brownstone Restoration Queens NY | Infinity Construction NYC",
    description:
      "Professional brownstone restoration in Queens, NY including façade, stoop, masonry, and waterproofing services.",
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
      name: "Brownstone Restoration Queens NY | Infinity Construction NYC",
      headline: "Brownstone Restoration in Queens, NY",
      description:
        "Brownstone restoration in Queens, NY for façades, stoops, masonry, waterproofing, and historic exterior repairs by Infinity Construction NYC.",

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
      name: "Brownstone Restoration in Queens",
      serviceType: "Brownstone Restoration",
      description:
        "Brownstone restoration services in Queens including façade repair, stoop restoration, masonry repair, repointing, waterproofing, and exterior architectural restoration.",

      url: pageUrl,

      provider: {
        "@id": "https://www.infinityconstructionnyc.com/#business",
      },

      areaServed: {
        "@type": "City",
        name: "Queens",

        containedInPlace: {
          "@type": "State",
          name: "New York",
        },
      },

      category: [
        "Brownstone Restoration",
        "Brownstone Repair",
        "Brownstone Stoop Restoration",
        "Masonry Repair",
        "Brownstone Waterproofing",
        "Historic Exterior Restoration",
      ],
    },

    {
      "@type": "LocalBusiness",
      "@id": "https://www.infinityconstructionnyc.com/#business",
      name: "Infinity Construction NYC",
      url: "https://www.infinityconstructionnyc.com/",
      telephone: "+1-347-939-5779",
      email: "Infinityconstructionnyc@gmail.com",

      knowsAbout: [
        "Brownstone Restoration",
        "Brownstone Repair",
        "Brownstone Stoop Restoration",
        "Masonry Restoration",
        "Limestone Restoration",
        "Exterior Waterproofing",
        "Historic Restoration",
      ],
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
          name: "Queens",
          item: "https://www.infinityconstructionnyc.com/service-areas/queens",
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
