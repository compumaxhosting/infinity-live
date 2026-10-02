import { ReactNode } from "react";

// Metadata for SEO
export const metadata = {
  title:
    "Roofing Contractor in Brooklyn, NY | Expert Roofing Services in Queens, The Bronx & Manhattan",
  description:
    "Infinity Construction NYC provides roofing services in Brooklyn, Manhattan, Queens and The Bronx, including roof repair, replacement, installation and restoration.",
  keywords:
    "roofing contractor Brooklyn, roofing services Brooklyn, roof repair Brooklyn, roof replacement Brooklyn, roofing contractors Queens, roof repair The Bronx, roof installation Manhattan, NYC roofing services, flat roof installation NYC, roof restoration NYC, emergency roof repair NYC",
  openGraph: {
    title:
      "Roofing Contractor in Brooklyn, NY | Expert Roofing Services in Queens, The Bronx & Manhattan",
    description:
      "Infinity Construction NYC provides roofing services in Brooklyn, Manhattan, Queens and The Bronx, including roof repair, replacement, installation and restoration.",
    url: "https://www.infinityconstructionnyc.com/roofing",
    images: [
      {
        url: "https://www.infinityconstructionnyc.com/cover-image.webp",
        width: 1200,
        height: 630,
        alt: "Infinity Construction NYC Roofing Services",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "/roofing",
  },
};

// Schema Markup
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.infinityconstructionnyc.com/#business",
      name: "Infinity Construction NYC",
      url: "https://www.infinityconstructionnyc.com/",
      telephone: "+1-347-939-5779",
      description:
        "Infinity Construction NYC provides roofing and exterior construction services for residential and commercial properties throughout Brooklyn, Manhattan, Queens and The Bronx.",
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
      knowsAbout: [
        "Roof Repair",
        "Roof Replacement",
        "Roof Installation",
        "Flat Roof Installation",
        "Roof Restoration",
        "Roof Weatherproofing",
        "Emergency Roof Repair",
        "Residential Roofing",
        "Commercial Roofing",
      ],
    },

    {
      "@type": "WebPage",
      "@id": "https://www.infinityconstructionnyc.com/roofing#webpage",
      url: "https://www.infinityconstructionnyc.com/roofing",
      name: "NYC Roofing Services | Roof Repair & Replacement | Infinity Construction NYC",
      description:
        "Infinity Construction NYC provides roofing services in Brooklyn, Manhattan, Queens and The Bronx, including roof repair, replacement, installation and restoration.",
      isPartOf: {
        "@id": "https://www.infinityconstructionnyc.com/#website",
      },
      about: {
        "@id": "https://www.infinityconstructionnyc.com/roofing#service",
      },
      mainEntity: {
        "@id": "https://www.infinityconstructionnyc.com/roofing#service",
      },
      breadcrumb: {
        "@id": "https://www.infinityconstructionnyc.com/roofing#breadcrumb",
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
      "@type": "Service",
      "@id": "https://www.infinityconstructionnyc.com/roofing#service",
      name: "NYC Roofing Services",
      serviceType: "Roofing Services",
      description:
        "Roofing services including roof repair, roof replacement, roof installation, flat roof installation, roof restoration, weatherproofing and emergency roof repair.",
      provider: {
        "@id": "https://www.infinityconstructionnyc.com/#business",
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
      audience: [
        {
          "@type": "Audience",
          audienceType: "Residential Property Owners",
        },
        {
          "@type": "Audience",
          audienceType: "Commercial Property Owners",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Roofing Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Roof Repair",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Roof Replacement",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Roof Installation",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Flat Roof Installation",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Roof Restoration",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Roof Weatherproofing",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Emergency Roof Repair",
            },
          },
        ],
      },
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.infinityconstructionnyc.com/roofing#breadcrumb",
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
          name: "Roofing",
          item: "https://www.infinityconstructionnyc.com/roofing",
        },
      ],
    },
  ],
};

export default function RoofingLayout({ children }: { children: ReactNode }) {
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
