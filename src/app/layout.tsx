import "./globals.css";
import { Inter, Be_Vietnam_Pro } from "next/font/google";

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
    streetAddress: "456 Infinity Ave",
    addressLocality: "Brooklyn",
    addressRegion: "NY",
    postalCode: "11201",
    addressCountry: "US",
  },
  telephone: "+1-347-555-1234",
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
