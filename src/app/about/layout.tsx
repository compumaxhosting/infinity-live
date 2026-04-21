import { ReactNode } from "react";

// Geist Sans

// Metadata for SEO (Move to layout.tsx if needed)
export const metadata = {
  title:
    "Trusted Contractors in Brooklyn, Queens, Bronx & Manhattan NYC | infinityconstructionnyc.com",
  description:
    "Learn about Infinity Construction NYC, your trusted construction partner for expert services in Brooklyn, Queens, The Bronx, and Manhattan, New York City. Over 20 years of experience.",
  keywords:
    "Infinity Construction NYC, construction contractors Brooklyn, general contractors NYC, renovation services Queens, expert construction The Bronx, building restoration Manhattan, masonry contractors Brooklyn, home renovation NYC, construction company The Bronx, professional contractors Manhattan",
  openGraph: {
    title:
      "Trusted Contractors in Brooklyn, Queens, Bronx & Manhattan NYC | infinityconstructionnyc.com",
    description:
      "Learn about Infinity Construction NYC, your trusted construction partner for expert services in Brooklyn, Queens, The Bronx, and Manhattan, New York City. Over 20 years of experience.",
    url: "https://www.infinityconstructionnyc.com/about",
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
  alternates: { canonical: "/about" },
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
    <>
      {/* No extra content like Header or Footer here */}
      {children} {/* Only the content from the About page will be rendered */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
         
    </>
  );
}
