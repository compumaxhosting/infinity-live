import { ReactNode } from "react";

// Geist Sans

// Metadata for SEO (Move to layout.tsx if needed)
export const metadata = {
  title:
    "Professional Interior Painting & Masonry NYC | Infinity Construction",
  description:
    "Premium interior painting, plaster repair, and masonry services in NYC. We specialize in brownstone restoration and flawless finishes in Brooklyn, Manhattan, and Queens.",
  keywords:
    "painting and masonry near me, masonry contractors Brooklyn, interior painting Manhattan, exterior house painting Queens, NYC brick pointing, stucco repair NYC, local masonry experts NYC, brownstone painting NYC, commercial painting Bronx, masonry repair NYC",
  openGraph: {
    title:
      "Professional Interior Painting & Masonry NYC | Infinity Construction",
    description:
      "Premium interior painting, plaster repair, and masonry services in NYC. We specialize in brownstone restoration and flawless finishes in Brooklyn, Manhattan, and Queens.",
    url: "https://www.infinityconstructionnyc.com/painting-and-masonry",
    images: [
      {
        url: "https://www.infinityconstructionnyc.com/cover-image.jpg",
        width: 1200,
        height: 630,
        alt: "Infinity Construction NYC",
      },
    ],
    type: "website",
  },
  alternates: { canonical: "/painting-and-masonry" },
};

// Schema Markup (Best moved to a separate component)
const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Infinity Construction NYC",
  url: "https://www.infinityconstructionnyc.com/",
  logo: "https://www.infinityconstructionnyc.com/logo.png",
  image: "https://www.infinityconstructionnyc.com/cover-image.jpg",
  description:
    "Premium interior painting, plaster repair, and masonry services in NYC. We specialize in brownstone restoration and flawless finishes in Brooklyn, Manhattan, and Queens.",
  address: {
    "@type": "PostalAddress",
    streetAddress: " 1809 Albany Ave ",
    addressLocality: " Brooklyn ",
    addressRegion: "NY",
    postalCode: " 11210 ",
    addressCountry: "US",
  },
  telephone: "+1- 347 939 5779",
  openingHoursWeekdays: "Monday to friday 07:00- 22:00",
  openingHoursWeekends: "saturday-sunday 07:00- 12=7:00",

  sameAs: [
    "https://www.facebook.com/infinityconstructionnyc",
    "https://www.instagram.com/infinity_construction_nyc/",
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: "40.7128", // replace with actual latitude
    longitude: "-74.0060", // replace with actual longitude
  },
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
