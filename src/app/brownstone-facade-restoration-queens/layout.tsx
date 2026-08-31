import type { Metadata } from "next";

const pageUrl =
  "https://www.infinityconstructionnyc.com/brownstone-facade-restoration-queens";
const imgUrl =
  "https://www.infinityconstructionnyc.com/historical-landmark/brownstone-facade-restoration-queens.webp";

export const metadata: Metadata = {
  title:
    "Brownstone Facade Restoration Contractor Queens NY | Infinity Construction NYC",

  description:
    "Brownstone facade restoration and repair in Queens, NY for masonry, repointing, waterproofing, stoops, and historic exterior restoration.",

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
      "Brownstone Facade Restoration Contractor Queens NY | Infinity Construction NYC",
    description:
      "Professional brownstone facade restoration and repair in Queens, NY, including masonry, repointing, waterproofing, stoops, and historic facades.",
    url: pageUrl,
    siteName: "Infinity Construction NYC",
    images: [
      {
        url: imgUrl,
        alt: "Brownstone facade restoration and repair in Queens NY",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Brownstone Facade Restoration Contractor Queens NY | Infinity Construction NYC",
    description:
      "Brownstone facade restoration and repair in Queens, NY for masonry, repointing, waterproofing, stoops, and historic exteriors.",
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
      name: "Brownstone Facade Restoration & Repair Contractor in Queens, NY",
      description:
        "Brownstone facade restoration and repair services in Queens, NY, including masonry repair, repointing, waterproofing, stoop restoration, and historic exterior restoration.",

      isPartOf: {
        "@id": "https://www.infinityconstructionnyc.com/#website",
      },

      about: {
        "@id": `${pageUrl}#service`,
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
      "@type": "Organization",
      "@id": "https://www.infinityconstructionnyc.com/#organization",
      name: "Infinity Construction NYC",
      url: "https://www.infinityconstructionnyc.com/",
    },

    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Brownstone Facade Restoration & Repair in Queens, NY",
      serviceType: "Brownstone Facade Restoration",

      provider: {
        "@id": "https://www.infinityconstructionnyc.com/#organization",
      },

      areaServed: {
        "@type": "City",
        name: "Queens",

        containedInPlace: {
          "@type": "State",
          name: "New York",
        },
      },

      url: pageUrl,

      description:
        "Brownstone facade restoration and repair in Queens, NY, including facade masonry repair, repointing, waterproofing, stoop restoration, and historic exterior restoration.",
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
