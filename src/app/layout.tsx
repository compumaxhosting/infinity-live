import "./globals.css";
import { Inter, Be_Vietnam_Pro } from "next/font/google";
import type { Metadata } from "next";

// ✅ Fonts optimized (non-blocking)
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
  display: "swap",
});

const bevietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-bevietnam",
  display: "swap",
});

// ✅ Metadata (same data, improved delivery)
export const metadata: Metadata = {
  title: "Brownstone Construction and Restoration in Brooklyn, New York",
  description:
    "Transform and restore your brownstone with Infinity Construction NYC. Serving Brooklyn, Manhattan, Queens, and the Bronx, we specialize in expert masonry, renovation, and brownstone restoration services.",
  keywords:
    "Brownstone restoration NYC, Masonry services Brooklyn, Brownstone construction Manhattan, Masonry contractors Bronx, Renovation services Queens, Brownstone repair NYC, Infinity Construction NYC, Quality masonry Brooklyn, Brownstone renovation NYC, NYC masonry experts",
  metadataBase: new URL("https://www.infinityconstructionnyc.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Brownstone Construction and Restoration in Brooklyn, New York",
    description:
      "Transform and restore your brownstone with Infinity Construction NYC. Serving Brooklyn, Manhattan, Queens, and the Bronx, we specialize in expert masonry, renovation, and brownstone restoration services.",
    url: "https://www.infinityconstructionnyc.com/",
    images: [
      {
        url: "/cover-image.webp", // ✅ local path = faster
        width: 1200,
        height: 630,
        alt: "Infinity Construction NYC",
      },
    ],
    type: "website",
  },
};

// ✅ Structured Data (unchanged)
const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Infinity Construction NYC",
  url: "https://www.infinityconstructionnyc.com/",
  logo: "https://www.infinityconstructionnyc.com/logo.webp",
  image: "https://www.infinityconstructionnyc.com/cover-image.webp",
  description:
    "Transform and restore your brownstone with Infinity Construction NYC. Serving Brooklyn, Manhattan, Queens, and the Bronx, we specialize in expert masonry, renovation, and brownstone restoration services.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1809 Albany Ave",
    addressLocality: "Brooklyn",
    addressRegion: "NY",
    postalCode: "11210",
    addressCountry: "US",
  },
  telephone: "+1-347-939-5779",
  openingHours: ["Mo-Fr 07:00-22:00", "Sa-Su 07:00-17:00"],
  sameAs: [
    "https://www.facebook.com/infinityconstructionnyc",
    "https://www.instagram.com/infinity_construction_nyc/",
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: "40.7128",
    longitude: "-74.0060",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bevietnam.variable}`}>
      <head>
        {/* ✅ Preconnect (correct + minimal) */}
        <link
          rel="preconnect"
          href="https://www.infinityconstructionnyc.com"
          crossOrigin=""
        />
        <link
          rel="dns-prefetch"
          href="https://www.infinityconstructionnyc.com"
        />

        {/* ✅ Preload LCP image (IMPORTANT boost) */}
        <link rel="preload" as="image" href="/img-2.webp" type="image/webp" />

        {/* ✅ Verification tags */}
        <meta
          name="google-site-verification"
          content="r3Qkntf2cikOsd6jUtQvXgLYihfV4NSBgvk6FOK0Wjc"
        />
        <meta
          name="p:domain_verify"
          content="fc7baee557a0e8360b2c7f0532795f25"
        />
      </head>

      <body>
        {children}

        {/* ✅ JSON-LD (non-blocking placement) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdSchema),
          }}
        />
      </body>
    </html>
  );
}
