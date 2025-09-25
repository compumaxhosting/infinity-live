import { ReactNode } from "react";

// Geist Sans

// Metadata for SEO (Move to layout.tsx if needed)
export const metadata = {
  title:
    "Professional Brick & CMU Block laying Services in NYC | Infinity Construction",
  description:
    "Expert brick and CMU block masonry services for residential and commercial properties in New York. Quality craftsmanship for structural integrity and aesthetic appeal.",
  keywords: [
    "brick layering NYC",
    "CMU block installation",
    "masonry services New York",
    "brick facade construction",
    "concrete block wall installation",
    "commercial masonry contractors",
    "residential brickwork",
    "building foundation specialists",
  ],
  openGraph: {
    title:
      "Professional Brick & CMU Block laying Services in NYC | Infinity Construction",
    description:
      "Expert brick and CMU block masonry services for residential and commercial properties in New York. Quality craftsmanship for structural integrity and aesthetic appeal.",
    url: "https://www.infinityconstructionnyc.com/brownstone-facade-restoration",
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
  name: "Infinity Construction NYC",
  url: "https://www.infinityconstructionnyc.com/",
  logo: "https://www.infinityconstructionnyc.com/logo.png",
  image: "https://www.infinityconstructionnyc.com/cover-image.jpg",
  description:
    "Expert brick and CMU block masonry services for residential and commercial properties in New York. Quality craftsmanship for structural integrity and aesthetic appeal.",
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
    "https://www.linkedin.com/company/infinityconstructionnyc",
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
