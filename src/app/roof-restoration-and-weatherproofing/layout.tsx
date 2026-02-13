import { ReactNode } from "react";

// Geist Sans

// Metadata for SEO (Move to layout.tsx if needed)
export const metadata = {
  title:
    "Professional Roof Restoration & Weatherproofing Services in NYC | Infinity Construction",
  description:
    "Need professional roof restoration and weatherproofing near you in Brooklyn, Queens, The Bronx, or Manhattan? Infinity Construction NYC provides expert roofing solutions to protect your property across New York City.",
  keywords: [
    "roof restoration NYC",
    "weatherproofing services",
    "roof repair New York",
    "commercial roofing contractors",
    "residential roof restoration",
    "waterproof roofing solutions",
    "roof inspection NYC",
    "licensed roofers",
  ],
  openGraph: {
    title:
      "Professional Roof Restoration & Weatherproofing Services in NYC | Infinity Construction",
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
  alternates: { canonical: "/roof-restoration-and-weatherproofing" },
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
    "Need professional roof restoration and weatherproofing near you in Brooklyn, Queens, The Bronx, or Manhattan? Infinity Construction NYC provides expert roofing solutions to protect your property across New York City.",
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
    "https://www.instagram.com/infinityconstructionnyc",
    
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
