import "./globals.css";
import { Inter, Be_Vietnam_Pro } from "next/font/google";
import type { Metadata } from "next";

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

// ✅ Default metadata for entire site
export const metadata: Metadata = {
  title: "Brownstone Construction and Restoration in Brooklyn, New York",
  description:
    "Transform and restore your brownstone with Infinity Construction NYC. Serving Brooklyn, Manhattan, Queens, and the Bronx, we specialize in expert masonry, renovation, and brownstone restoration services.",
  keywords:
    "Brownstone restoration NYC, Masonry services Brooklyn, Brownstone construction Manhattan, Masonry contractors Bronx, Renovation services Queens, Brownstone repair NYC, Infinity Construction NYC, Quality masonry Brooklyn, Brownstone renovation NYC, NYC masonry experts",
  openGraph: {
    title: "Brownstone Construction and Restoration in Brooklyn, New York",
    description:
      "Transform and restore your brownstone with Infinity Construction NYC. Serving Brooklyn, Manhattan, Queens, and the Bronx, we specialize in expert masonry, renovation, and brownstone restoration services.",
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
  metadataBase: new URL("https://www.infinityconstructionnyc.com"),

  alternates: {
    canonical: "/",
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Infinity Construction NYC",
  url: "https://www.infinityconstructionnyc.com/",
  logo: "https://www.infinityconstructionnyc.com/logo.png",
  image: "https://www.infinityconstructionnyc.com/cover-image.jpg",
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
    "https://www.instagram.com/infinityconstructionnyc",
    
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
        <meta
          name="google-site-verification"
          content="r3Qkntf2cikOsd6jUtQvXgLYihfV4NSBgvk6FOK0Wjc"
        />
      </head>
      <body>
        {children}
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
