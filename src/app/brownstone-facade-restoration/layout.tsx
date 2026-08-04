import { ReactNode } from "react";

import type { Metadata } from "next";

// SEO Metadata
export const metadata: Metadata = {
  title:
    "Brownstone Facade Restoration Brooklyn & Manhattan | Infinity Construction NYC",

  description:
    "Expert Brownstone Facade Restoration in Brooklyn and Manhattan. Infinity Construction NYC provides historic masonry repair, waterproofing, and facade preservation services across NYC.",

  keywords: [
    "Brownstone Facade Restoration Brooklyn",
    "Brownstone Facade Restoration Manhattan",
    "Brownstone Restoration Queens",
    "Brownstone Facade Renovation Bronx",
    "Historic Brownstone Restoration NYC",
    "Brownstone Masonry Contractor Brooklyn",
    "Brownstone Facade Repair Manhattan",
    "Brownstone Exterior Restoration Queens",
    "Brownstone Stone Repair Bronx",
    "Landmark Facade Restoration NYC",
    "Brownstone Waterproofing Manhattan",
    "Brownstone Lintel Repair Queens",
    "Brownstone Cornice Restoration Bronx",
    "Brownstone Masonry Repair Brooklyn",
    "Brownstone Stoop Restoration Manhattan",
    "Brownstone Facade Resurfacing Queens",
    "Brownstone Crack Repair Bronx",
    "Brownstone Facade Preservation NYC",
    "Brownstone Sandstone Restoration Brooklyn",
    "Brownstone Building Restoration Queens",
    "Professional Brownstone Restoration NYC",
    "Historic Facade Restoration NYC",
  ],

  authors: [
    {
      name: "Infinity Construction NYC",
    },
  ],

  robots: {
    index: true,
    follow: true,
  },

  referrer: "strict-origin-when-cross-origin",

  alternates: {
    canonical:
      "https://www.infinityconstructionnyc.com/brownstone-facade-restoration",
  },

  openGraph: {
    type: "website",

    title:
      "Brownstone Facade Restoration Brooklyn & Manhattan | Infinity Construction NYC",

    description:
      "Professional brownstone facade restoration in Brooklyn and Manhattan. Expert masonry repair, sandstone restoration, waterproofing, and historic preservation services in NYC.",

    url: "https://www.infinityconstructionnyc.com/brownstone-facade-restoration",

    siteName: "Infinity Construction NYC",

    images: [
      {
        url: "https://www.infinityconstructionnyc.com/blog/blog-brownstone.webp",
        width: 1200,
        height: 630,
        alt: "Brownstone Facade Restoration Brooklyn and Manhattan by Infinity Construction NYC",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Brownstone Facade Restoration Brooklyn & Manhattan | Infinity Construction NYC",

    description:
      "Restore historic brownstone buildings with expert facade repair, masonry restoration, waterproofing, and preservation services across NYC.",

    images: [
      "https://www.infinityconstructionnyc.com/blog/blog-brownstone.webp",
    ],
  },
};

// Schema Markup
const schemaData = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",

  name: "Infinity Construction NYC",

  description:
    "Licensed & insured brownstone restoration and historical landmark specialist serving New York City since 2015.",

  url: "https://www.infinityconstructionnyc.com/",

  telephone: "347-939-5779",

  email: "Infinityconstructionnyc@gmail.com",

  priceRange: "$$",

  image: "https://www.infinityconstructionnyc.com/logo.png",

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
  ],

  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "9",
  },

  sameAs: [
    "https://www.facebook.com/Infinityconstructionnyc/",
    "https://www.instagram.com/infinityconstructionnyc/",
    "https://www.linkedin.com/company/infinity-construction-nyc/",
    "https://www.yelp.com/biz/infinity-construction-nyc-brooklyn",
  ],
};

export default function BrownstoneFacadeRestorationLayout({
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
