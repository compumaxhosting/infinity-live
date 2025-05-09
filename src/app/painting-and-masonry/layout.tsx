import { ReactNode } from "react";

// Geist Sans

// Metadata for SEO (Move to layout.tsx if needed)
export const metadata = {
  title:
    "Painting & Masonry Services Near Me in NYC | Brooklyn, Queens, Bronx & Manhattan",
  description:
    "Looking for expert painting and masonry services near you in Brooklyn, Queens, The Bronx, or Manhattan? Infinity Construction NYC offers top-quality interior/exterior painting and masonry solutions across New York City.",
  keywords:
    "painting and masonry near me, masonry contractors Brooklyn, interior painting Manhattan, exterior house painting Queens, NYC brick pointing, stucco repair NYC, local masonry experts NYC, brownstone painting NYC, commercial painting Bronx, masonry repair NYC",
  openGraph: {
    title:
      "Painting & Masonry Services Near Me in NYC | Brooklyn, Queens, Bronx & Manhattan",
    description:
      "Looking for expert painting and masonry services near you in Brooklyn, Queens, The Bronx, or Manhattan? Infinity Construction NYC offers top-quality interior/exterior painting and masonry solutions across New York City.",
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
};

// Schema Markup (Best moved to a separate component)
const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Infinity Construction NYC",
  "url": "https://www.infinityconstructionnyc.com/",
  "logo": "https://www.infinityconstructionnyc.com/logo.png",
  "image": "https://www.infinityconstructionnyc.com/cover-image.jpg",
  "description": "Infinity Construction NYC specializes in home improvements and remodeling in New York.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": " 1809 Albany Ave ",
    "addressLocality": " Brooklyn ",
    "addressRegion": "NY",
    "postalCode": " 11210 ",
    "addressCountry": "US",
  },
  "telephone": "+1- 347 939 5779",
  "openingHoursWeekdays": "Monday to friday 07:00- 22:00",
  "openingHoursWeekends": "saturday-sunday 07:00- 12=7:00",

  "sameAs": [
    "https://www.facebook.com/infinityconstructionnyc",
    "https://www.instagram.com/infinityconstructionnyc",
    "https://www.linkedin.com/company/infinityconstructionnyc",
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "40.7128", // replace with actual latitude
    "longitude": "-74.0060", // replace with actual longitude
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
