import { ReactNode } from "react";

// Geist Sans

// Metadata for SEO (Move to layout.tsx if needed)
export const metadata = {
  title:
    "Brownstone Repair & Restoration NYC | Brooklyn, Manhattan, Queens & The Bronx",
  description:
    "Infinity Construction NYC offers expert brownstone repair and restoration services across NYC. Serving Brooklyn, Manhattan, Queens, & The Bronx. Free Estimates",
  keywords: [
    "Brownstone restoration NYC,Masonry services Brooklyn,Renovation Manhattan,Construction Bronx,Infinity Construction NYC",
  ],
  openGraph: {
    title:
      "Brownstone Repair & Restoration NYC | Brooklyn, Manhattan, Queens & The Bronx",
    description:
      "Infinity Construction NYC offers expert brownstone repair and restoration services across NYC. Serving Brooklyn, Manhattan, Queens, & The Bronx. Free Estimates",
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
  alternates: { canonical: "/brownstone-repair-restoration" },
};

// Schema Markup (Best moved to a separate component)
const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Infinity Construction NYC",
  url: "https://www.infinityconstructionnyc.com/",
  logo: "https://www.infinityconstructionnyc.com/logo.webp",
  image: "https://www.infinityconstructionnyc.com/cover-image.webp",
  description:
    "Infinity Construction NYC offers expert brownstone repair and restoration services across NYC. Serving Brooklyn, Manhattan, Queens, & The Bronx. Free Estimates",
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
