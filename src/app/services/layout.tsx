import { ReactNode } from "react";

// Geist Sans

// Metadata for SEO (Move to layout.tsx if needed)
export const metadata = {
  title:
    "Construction Services Near Me in NYC | Roofing, Masonry, Waterproofing & More",
  description:
    "Infinity Construction NYC offers expert construction services near you in Brooklyn, Queens, The Bronx & Manhattan. Specializing in roofing, masonry, brownstone restoration, and waterproofing solutions across New York City.",
  keywords:
    "construction services NYC, roofing contractors Brooklyn, masonry work Queens, waterproofing services NYC, brownstone restoration Bronx, general contractor Manhattan, home renovation NYC, building repair services, exterior restoration NYC, local construction experts NYC",
  openGraph: {
    title:
      "Construction Services Near Me in NYC | Roofing, Masonry, Waterproofing & More",
    description:
      "Infinity Construction NYC offers expert construction services near you in Brooklyn, Queens, The Bronx & Manhattan. Specializing in roofing, masonry, brownstone restoration, and waterproofing solutions across New York City.",
    url: "https://www.infinityconstructionnyc.com/",
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
