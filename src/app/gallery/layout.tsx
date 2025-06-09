import { ReactNode } from "react";

// Geist Sans

// Metadata for SEO (Move to layout.tsx if needed)
export const metadata = {
  title: "Photo Gallery of Our Work | Roofing, Masonry & Restoration in NYC",
  description:
    "Browse the photo gallery of Infinity Construction NYC showcasing roofing, masonry, and restoration work across Brooklyn, Queens, The Bronx & Manhattan. See our quality craftsmanship in action.",
  keywords:
    "construction photo gallery NYC, masonry work images Brooklyn, roofing project photos Queens, brownstone restoration gallery Bronx, contractor work showcase NYC, home exterior before and after, NYC renovation images, building restoration NYC, Infinity Construction gallery, completed project photos NYC",
  openGraph: {
    title: "Photo Gallery of Our Work | Roofing, Masonry & Restoration in NYC",
    description:
      "Browse the photo gallery of Infinity Construction NYC showcasing roofing, masonry, and restoration work across Brooklyn, Queens, The Bronx & Manhattan. See our quality craftsmanship in action.",
    url: "https://www.infinityconstructionnyc.com/gallery",
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
    "Infinity Construction NYC specializes in home improvements and remodeling in New York.",
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
