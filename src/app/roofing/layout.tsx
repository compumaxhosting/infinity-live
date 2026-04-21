import { ReactNode } from "react";

// Geist Sans

// Metadata for SEO (Move to layout.tsx if needed)
export const metadata = {
  title:
    "Roofing Contractor in Brooklyn, NY | Expert Roofing Services in Queens, The Bronx & Manhattan",
  description:
    "Infinity Construction NYC is your trusted roofing contractor in Brooklyn, NY, offering expert roofing services in Brooklyn, Queens, The Bronx, and Manhattan, New York City. Roof repairs, replacements, and installations",
  keywords:
    "Roofing contractor in Brooklyn, roofing services Brooklyn, roofing contractors Queens, roof repair The Bronx, roof installation Manhattan, Infinity Construction NYC, commercial roofing services NYC, residential roofing contractors Brooklyn, flat roof repair NYC, roof replacement Manhattan",
  openGraph: {
    title:
      "Roofing Contractor in Brooklyn, NY | Expert Roofing Services in Queens, The Bronx & Manhattan",
    description:
      "Infinity Construction NYC is your trusted roofing contractor in Brooklyn, NY, offering expert roofing services in Brooklyn, Queens, The Bronx, and Manhattan, New York City. Roof repairs, replacements, and installations",
    url: "https://www.infinityconstructionnyc.com/roofing",
    images: [
      {
        url: "https://www.infinityconstructionnyc.com/cover-image.webp",
        width: 1200,
        height: 630,
        alt: "Infinity Construction NYC",
      },
    ],
    type: "website",
  },
  alternates: { canonical: "/roofing" },
};

// Schema Markup (Best moved to a separate component)
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

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* No extra content like Header or Footer here */}
      {children} {/* Only the content from the About page will be rendered */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
         
    </div>
  );
}
