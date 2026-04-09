import { ReactNode } from "react";

export const metadata = {
  title: "Brownstone Construction and Restoration in Brooklyn, New York",
  description:
    "Transform and restore your brownstone with Infinity Construction NYC. Serving Brooklyn, Manhattan, Queens, and the Bronx, we specialize in expert masonry, renovation, and brownstone restoration services. Call us today for quality craftsmanship.",
  keywords:
    "Brownstone restoration NYC, Masonry services Brooklyn, Brownstone construction Manhattan, Masonry contractors Bronx, Renovation services Queens, Brownstone repair NYC, Infinity Construction NYC, Quality masonry Brooklyn, Brownstone renovation NYC, NYC masonry experts",
  openGraph: {
    title: "Brownstone Construction and Restoration in Brooklyn, New York",
    description:
      "Transform and restore your brownstone with Infinity Construction NYC. Serving Brooklyn, Manhattan, Queens, and the Bronx, we specialize in expert masonry, renovation, and brownstone restoration services.",
    url: "https://www.infinityconstructionnyc.com/industries",
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
  alternates: { canonical: "/industries" },
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
    "Transform and restore your brownstone with Infinity Construction NYC. Serving Brooklyn, Manhattan, Queens, and the Bronx, we specialize in expert masonry, renovation, and brownstone restoration services. Call us today for quality craftsmanship.",
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
