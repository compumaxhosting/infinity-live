import type { Metadata } from "next";
import { Inter, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
});

const bevietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-bevietnam",
});

export const metadata: Metadata = {
  title: "Infinity Construction NYC | Roofing, Masonry & Restoration Experts",
  description:
    "Trusted roofing, masonry, stucco, and brownstone restoration experts in NYC. Serving Brooklyn, Queens, Bronx, and Manhattan with expert craftsmanship and reliable service.",
  keywords:
    "roofing contractors NYC, masonry services Brooklyn, brownstone restoration NYC, NYC construction experts, stucco repair Queens, sidewalk replacement Bronx, home remodeling NYC, Infinity Construction NYC, chimney repair Brooklyn, facade renovation NYC",
  openGraph: {
    title: "Infinity Construction NYC | Roofing, Masonry & Restoration Experts",
    description:
      "Trusted roofing, masonry, stucco, and brownstone restoration experts in NYC. Serving Brooklyn, Queens, Bronx, and Manhattan with expert craftsmanship and reliable service.",
    url: "https://www.infinityconstructionnyc.com/",
    images: [
      {
        url: "https://www.infinityconstructionnyc.com/og-image.jpg",
        width: 2500,
        height: 1330,
        alt: "Infinity Construction NYC",
      },
    ],
    siteName: "Infinity Construction NYC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Infinity Construction NYC | Roofing, Masonry & Restoration Experts",
    description:
      "Trusted roofing, masonry, stucco, and brownstone restoration experts in NYC. Serving Brooklyn, Queens, Bronx, and Manhattan with expert craftsmanship and reliable service.",
    images: ["https://www.infinityconstructionnyc.com/og-image.jpg"],
  },
  other: {
    "google-site-verification": "your-google-site-verification-code",
  },
};

// Structured data for SEO (update details below with your actual business info)
const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Infinity Construction NYC",
  url: "https://www.infinityconstructionnyc.com/",
  logo: "https://www.infinityconstructionnyc.com/assets/images/logo.png",
  image: "https://www.infinityconstructionnyc.com/og-image.jpg",
  description:
    "Expert roofing, masonry, stucco, sidewalk, and brownstone restoration services in Brooklyn, Queens, Bronx, and Manhattan.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "456 Infinity Ave", // ← Replace with actual business address
    addressLocality: "Brooklyn",
    addressRegion: "NY",
    postalCode: "11201",
    addressCountry: "US",
  },
  telephone: "+1-347-555-1234", // ← Replace with your business phone
  areaServed: ["Brooklyn", "Queens", "Bronx", "Manhattan"],
  sameAs: [
    "https://www.instagram.com/infinityconstructionnyc",
    "https://www.facebook.com/infinityconstructionnyc",
    "https://twitter.com/infinitybuildsnyc",
    "https://www.linkedin.com/company/infinityconstructionnyc",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bevietnam.variable}`}>
      <body>
        {children}
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </body>
    </html>
  );
}
