import type { Metadata } from "next";
import { ReactNode } from "react";

const siteUrl = "https://www.infinityconstructionnyc.com";
const pageUrl = `${siteUrl}/masonry-contractors`;
const logoUrl = `${siteUrl}/logo.webp`;
const ogImage = `${siteUrl}/cover-image.webp`;

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Masonry Contractors New York City | Infinity Construction NYC",
      description:
        "Masonry contractors serving Brooklyn, Manhattan, Queens and The Bronx for brick repair, pointing, facade restoration, brownstone restoration, limestone restoration, concrete work, waterproofing and stoop restoration.",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${pageUrl}#service`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      inLanguage: "en-US",
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
      "@type": "GeneralContractor",
      "@id": `${siteUrl}/#business`,
      name: "Infinity Construction NYC",
      description:
        "Licensed & insured brownstone restoration and historical landmark specialist serving New York City since 2001.",
      url: siteUrl,
      telephone: "+1-347-939-5779",
      email: "Infinityconstructionnyc@gmail.com",
      priceRange: "$$",
      image: logoUrl,

      address: [
        {
          "@type": "PostalAddress",
          streetAddress: "1809 Albany Ave",
          addressLocality: "Brooklyn",
          addressRegion: "NY",
          postalCode: "11210",
          addressCountry: "US",
        },
        {
          "@type": "PostalAddress",
          streetAddress: "152 E 118th St S1",
          addressLocality: "New York",
          addressRegion: "NY",
          postalCode: "10035",
          addressCountry: "US",
        },
      ],

      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "06:00",
          closes: "20:00",
        },
      ],

      areaServed: [
        {
          "@type": "City",
          name: "Brooklyn",
        },
        {
          "@type": "City",
          name: "Manhattan",
        },
        {
          "@type": "City",
          name: "Queens",
        },
        {
          "@type": "City",
          name: "The Bronx",
        },
        {
          "@type": "City",
          name: "New York City",
        },
      ],

      knowsAbout: [
        "Masonry",
        "Brick Pointing",
        "Brick Repair",
        "Facade Restoration",
        "Brownstone Restoration",
        "Limestone Restoration",
        "Concrete Work",
        "Waterproofing",
        "Stoop Restoration",
      ],

      sameAs: [
        "https://www.facebook.com/Infinityconstructionnyc/",
        "https://www.instagram.com/infinityconstructionnyc/",
        "https://www.linkedin.com/company/infinity-construction-nyc/",
        "https://www.yelp.com/biz/infinity-construction-nyc-brooklyn",
      ],
    },

    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Masonry Contracting Services in New York City",
      serviceType: "Masonry Contractor",
      url: pageUrl,
      description:
        "Professional masonry contracting and exterior masonry services for properties throughout New York City, including brick pointing, brick repair, facade restoration, brownstone restoration, limestone restoration, concrete work, waterproofing and stoop restoration.",
      provider: {
        "@id": `${siteUrl}/#business`,
      },

      areaServed: [
        {
          "@type": "City",
          name: "Brooklyn",
        },
        {
          "@type": "City",
          name: "Manhattan",
        },
        {
          "@type": "City",
          name: "Queens",
        },
        {
          "@type": "City",
          name: "The Bronx",
        },
      ],

      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "NYC Masonry Services",
        itemListElement: [
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
              name: "Brick Repair",
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
              name: "Concrete Work",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Masonry Waterproofing",
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
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Masonry Contractors",
          item: pageUrl,
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      url: `${pageUrl}#faq`,
      name: "Masonry Contractors NYC Frequently Asked Questions",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does a masonry contractor do in NYC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A masonry contractor performs construction, repair, maintenance and restoration work involving brick, stone, concrete, mortar, brownstone and limestone.",
          },
        },
        {
          "@type": "Question",
          name: "How do I know if my brickwork needs repointing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cracked, missing, recessed or deteriorated mortar joints can indicate that brickwork should be professionally inspected for possible repointing.",
          },
        },
        {
          "@type": "Question",
          name: "Does Infinity Construction NYC provide brownstone and limestone restoration?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Infinity Construction NYC provides brownstone and limestone restoration services as part of its exterior masonry services in New York City.",
          },
        },
        {
          "@type": "Question",
          name: "Do masonry contractors provide waterproofing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Masonry contractors may provide related waterproofing services to help address moisture intrusion and protect exterior masonry.",
          },
        },
        {
          "@type": "Question",
          name: "Which areas of New York City does Infinity Construction NYC serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Infinity Construction NYC provides masonry and exterior construction services in Brooklyn, Manhattan, Queens and The Bronx.",
          },
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title:
    "Masonry Contractors in Brooklyn, Queens, Bronx & Manhattan | Infinity Construction NYC",

  description:
    "Infinity Construction NYC offers masonry contractor services in Brooklyn, Queens, The Bronx, and Manhattan, New York City, including brickwork, stonework, masonry repair, facade restoration, brownstone restoration, limestone restoration, waterproofing and stoop restoration.",

  keywords:
    "masonry contractors Brooklyn, masonry contractors Queens, masonry contractors The Bronx, masonry services Manhattan, Infinity Construction NYC, brickwork contractors NYC, stonework contractors Brooklyn, masonry restoration services, professional masonry contractors NYC, masonry repair contractors Manhattan",

  authors: [
    {
      name: "Infinity Construction NYC",
    },
  ],

  alternates: {
    canonical: "/masonry-contractors",
  },

  robots: {
    index: true,
    follow: true,
  },

  referrer: "strict-origin-when-cross-origin",

  openGraph: {
    type: "website",
    title:
      "Masonry Contractors in Brooklyn, Queens, Bronx & Manhattan | Infinity Construction NYC",
    description:
      "Infinity Construction NYC offers masonry contractor services in Brooklyn, Queens, The Bronx, and Manhattan, New York City, including brickwork, stonework, masonry repair, facade restoration, brownstone restoration, limestone restoration, waterproofing and stoop restoration.",
    url: pageUrl,
    siteName: "Infinity Construction NYC",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Infinity Construction NYC masonry contractors",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Masonry Contractors in Brooklyn, Queens, Bronx & Manhattan | Infinity Construction NYC",
    description:
      "Masonry contractor services in Brooklyn, Queens, The Bronx, and Manhattan, including brickwork, stonework, masonry repair, facade restoration, brownstone restoration, limestone restoration, waterproofing and stoop restoration.",
    images: [ogImage],
  },
};

export default function MasonryContractorsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {children}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
    </>
  );
}
