import { ReactNode } from "react";

// Geist Sans

// Metadata for SEO (Move to layout.tsx if needed)
export const metadata = {
  title:
    "Stucco Restoration & Waterproofing Services in NYC | Infinity Construction",
  description:
    "Expert protection for exterior walls, parapets, and retaining walls. Professional stucco restoration and waterproofing in NYC to stop water intrusion and structural decay.",
  keywords: [
    "stucco restoration NYC",
    "waterproofing services New York",
    "exterior wall repair",
    "parapet waterproofing",
    "retaining wall protection",
    "building envelope solutions",
    "stucco repair contractors",
    "waterproofing specialists NYC",
  ],
  openGraph: {
    title:
      "Stucco Restoration & Waterproofing Services in NYC | Infinity Construction",
    description:
      "Expert protection for exterior walls, parapets, and retaining walls. Professional stucco restoration and waterproofing in NYC to stop water intrusion and structural decay.",
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
  alternates: { canonical: "/stucco" },
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
    "Expert protection for exterior walls, parapets, and retaining walls. Professional stucco restoration and waterproofing in NYC to stop water intrusion and structural decay.",
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
