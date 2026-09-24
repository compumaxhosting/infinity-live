import type { Metadata } from "next";

const pageUrl =
  "https://www.infinityconstructionnyc.com/construction-restoration-bronx";

const imgUrl =
  "https://www.infinityconstructionnyc.com/historical-landmark/construction-queen.png";

export const metadata: Metadata = {
  title:
    "Bronx Construction & Restoration Services | Infinity Construction NYC",

  description:
    "Expert Bronx construction and restoration services including brownstone, masonry, brick pointing, stoop, facade, waterproofing and roof restoration.",

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
      "Bronx Construction & Restoration Services | Infinity Construction NYC",
    description:
      "Expert Bronx construction and restoration services including brownstone, masonry, brick pointing, stoop, facade, waterproofing and roof restoration.",
    url: pageUrl,
    siteName: "Infinity Construction NYC",
    images: [
      {
        url: imgUrl,
        alt: "Construction and restoration services in The Bronx, NY",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Bronx Construction & Restoration Services | Infinity Construction NYC",
    description:
      "Expert Bronx construction and restoration services including brownstone, masonry, brick pointing, stoop, facade, waterproofing and roof restoration.",
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
      name: "Bronx Construction & Restoration Services | Infinity Construction NYC",
      description:
        "Expert Bronx construction and restoration services including brownstone, masonry, brick pointing, stoop, facade, waterproofing and roof restoration.",
      isPartOf: {
        "@id": "https://www.infinityconstructionnyc.com/#website",
      },
      about: {
        "@id": "https://www.infinityconstructionnyc.com/#business",
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      inLanguage: "en-US",
    },

    {
      "@type": "WebSite",
      "@id": "https://www.infinityconstructionnyc.com/#website",
      url: "https://www.infinityconstructionnyc.com/",
      name: "Infinity Construction NYC",
      publisher: {
        "@id": "https://www.infinityconstructionnyc.com/#business",
      },
      inLanguage: "en-US",
    },

    {
      "@type": "LocalBusiness",
      "@id": "https://www.infinityconstructionnyc.com/#business",
      name: "Infinity Construction NYC",
      url: "https://www.infinityconstructionnyc.com/",
      telephone: "+1-347-939-5779",
      description:
        "Construction and restoration contractor serving the Bronx, NY, specializing in brownstone restoration, masonry repair, brick pointing, stoop restoration, facade restoration, waterproofing, stucco, roof restoration and exterior metal restoration.",
      areaServed: {
        "@type": "Place",
        name: "Bronx, New York, United States",
      },
      knowsAbout: [
        "Brownstone Restoration",
        "Brownstone Stoop Restoration",
        "Masonry Repair",
        "Brick Pointing",
        "Facade Restoration",
        "Waterproofing",
        "Stucco Restoration",
        "Roof Restoration",
        "Fire Escape Restoration",
        "Metal Restoration",
        "Concrete Work",
        "Stone Work",
        "Exterior Painting",
      ],
    },

    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Construction & Restoration Services in the Bronx",
      serviceType: [
        "Brownstone Restoration",
        "Masonry Repair",
        "Brick Pointing",
        "Stoop Restoration",
        "Facade Restoration",
        "Waterproofing",
        "Stucco Services",
        "Roof Restoration",
        "Fire Escape Restoration",
        "Metal Restoration",
        "Concrete Work",
        "Stone Work",
        "Painting and Masonry",
      ],
      provider: {
        "@id": "https://www.infinityconstructionnyc.com/#business",
      },
      areaServed: {
        "@type": "City",
        name: "Bronx",
        containedInPlace: {
          "@type": "State",
          name: "New York",
        },
      },
      url: pageUrl,
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
          name: "Bronx Construction & Restoration",
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
          name: "Do you restore Bronx brownstones?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Infinity Construction NYC provides brownstone restoration, stoop restoration and related masonry restoration services in the Bronx.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide brick pointing in the Bronx?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Infinity Construction NYC provides brick pointing and repointing services for deteriorated masonry in the Bronx.",
          },
        },
        {
          "@type": "Question",
          name: "Can you restore a brownstone stoop?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Brownstone stoop restoration and renovation are among the exterior restoration services provided by Infinity Construction NYC.",
          },
        },
        {
          "@type": "Question",
          name: "Do you repair fire escapes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Infinity Construction NYC provides fire escape and exterior metal restoration services.",
          },
        },
        {
          "@type": "Question",
          name: "What if my Bronx property is in a historic district?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The NYC Landmarks Preservation Commission should be consulted to determine whether the property is designated and whether proposed exterior work requires approval.",
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
