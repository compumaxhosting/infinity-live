import { ReactNode } from "react";

// Geist Sans

// Metadata for SEO (Move to layout.tsx if needed)
export const metadata = {
  title:
    "Roof Restoration & Weatherproofing Near Me | Brooklyn, Queens, Bronx & Manhattan",
  description:
    "Need professional roof restoration and weatherproofing near you in Brooklyn, Queens, The Bronx, or Manhattan? Infinity Construction NYC provides expert roofing solutions to protect your property across New York City.",
  keywords:
    "roof restoration near me, weatherproofing services NYC, flat roof repair Brooklyn, roof waterproofing Queens, commercial roof restoration Bronx, roof leak repair Manhattan, NYC roofing contractors, residential roof weatherproofing, roof sealing NYC, emergency roof repair NYC",
  openGraph: {
    title:
      "Roof Restoration & Weatherproofing Near Me | Brooklyn, Queens, Bronx & Manhattan",
    description:
      "Need professional roof restoration and weatherproofing near you in Brooklyn, Queens, The Bronx, or Manhattan? Infinity Construction NYC provides expert roofing solutions to protect your property across New York City.",
    url: "https://www.infinityconstructionnyc.com/roof-restoration-and-weatherproofing",
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
