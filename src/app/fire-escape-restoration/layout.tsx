import { ReactNode } from "react";

export const metadata = {
  title: "Fire Escape & Metal Restoration NYC | Infinity Construction",
  description:
    "Professional fire escape, metal railing & fence restoration services in NYC. Certified safety compliance, rust removal, and structural reinforcement.",
  keywords: [
    "fire escape restoration NYC",
    "metal railing repair",
    "fence restoration services",
    "rust removal NYC",
    "structural reinforcement",
    "building safety compliance",
    "metal coating specialists",
    "emergency fire escape repairs",
  ],
  openGraph: {
    title:
      "Fire Escape Restoration Services in Brooklyn, Queens, Bronx & Manhattan NYC",
    description:
      "Professional fire escape, metal railing & fence restoration services in NYC. Certified safety compliance, rust removal, and structural reinforcement.",
    url: "https://www.infinityconstructionnyc.com/fire-escape-restoration",
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
  alternates: { canonical: "/fire-escape-restoration" },
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
    "Professional fire escape, metal railing & fence restoration services in NYC. Certified safety compliance, rust removal, and structural reinforcement.",
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
