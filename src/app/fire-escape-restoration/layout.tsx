import { ReactNode } from "react";

// Geist Sans

// Metadata for SEO (Move to layout.tsx if needed)
export const metadata = {
  title:
    "Fire Escape Restoration Services in Brooklyn, Queens, Bronx & Manhattan NYC",
  description:
    "Top-rated fire escape restoration services in Brooklyn, Queens, The Bronx, and Manhattan, NYC. Ensure safety and compliance with expert fire escape repairs and restoration.",
  keywords:
    "fire escape restoration Brooklyn, fire escape repair Queens, fire escape inspection Bronx, fire escape restoration Manhattan, fire escape repair contractors NYC, NYC fire escape services, fire escape compliance repair Brooklyn, fire escape safety restoration NYC, exterior fire escape restoration Queens, fire escape repairs NYC",
  openGraph: {
    title:
      "Fire Escape Restoration Services in Brooklyn, Queens, Bronx & Manhattan NYC",
    description:
      "Top-rated fire escape restoration services in Brooklyn, Queens, The Bronx, and Manhattan, NYC. Ensure safety and compliance with expert fire escape repairs and restoration.",
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
