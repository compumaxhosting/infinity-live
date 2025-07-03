
import Head from "next/head";
import Script from "next/script";
import OurServices from "../components/servicesSection/OurServices";
import CarouselSection from "../components/carouselSection/CarouselSection";
import Footer from "../components/Footer";
import HeaderTwo from "../components/headerSection/HeaderTwo";
import HeroSection from "../components/Hero";
import MapComponent from "../components/MapComponent";
import ServicesSection from "@/components/ContactSection";
import SocialLinks from "@/components/SocialLinks";
import OurTestimonial from "@/components/OurTestimonial";
import OurAffiliatesSection from "@/components/OurAffiliatesSection";
import ContactScroll from "@/components/extras/ContactScroll";
import PhoneCall from "@/components/PhoneCall";

export const metadata = {
  title: "Brownstone Construction and Restoration in Brooklyn, New York",
  description:
    "Transform and restore your brownstone with Infinity Construction NYC. Serving Brooklyn, Manhattan, Queens, and the Bronx, we specialize in expert masonry, renovation, and brownstone restoration services.",
  keywords:
    "Brownstone restoration NYC, Masonry services Brooklyn, Brownstone construction Manhattan, Masonry contractors Bronx, Renovation services Queens, Brownstone repair NYC, Infinity Construction NYC, Quality masonry Brooklyn, Brownstone renovation NYC, NYC masonry experts",
};

export default function Home() {
  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta
          property="og:url"
          content="https://www.infinityconstructionnyc.com/"
        />
        <meta
          property="og:image"
          content="https://www.infinityconstructionnyc.com/logo-new.png"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
      </Head>

      {/* ✅ JSON-LD Scripts - placed outside <Head /> as per Next.js best practice */}
      <Script
        id="json-ld-business"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Infinity Construction NYC",
            image: "https://www.infinityconstructionnyc.com/logo-new.png",
            "@id": "https://www.infinityconstructionnyc.com",
            url: "https://www.infinityconstructionnyc.com",
            telephone: "+1-347-939-5779",
            address: {
              "@type": "PostalAddress",
              streetAddress: "1809 Albany Ave",
              addressLocality: "Brooklyn",
              addressRegion: "NY",
              postalCode: "11210",
              addressCountry: "US",
            },
            openingHours: "Mo-Sa 08:00-18:00",
            priceRange: "$$",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "27",
            },
            sameAs: [
              "https://www.facebook.com/infinityconstructionnyc",
              "https://www.instagram.com/infinity_construction_nyc",
              "https://www.linkedin.com/in/imrul-hassan-403724268",
            ],
          }),
        }}
      />

      <Script
        id="json-ld-reviews"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Infinity Construction NYC",
            review: [
              {
                "@type": "Review",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                },
                author: {
                  "@type": "Person",
                  name: "ANN CULLARO",
                },
                reviewBody:
                  "I recommend future Brownstone homeowners to take advantage of Infinity Construction NYC's services, specializing in brownstone restoration. They did an exquisite job with my brownstone facade and stoop restoration and we loved the end results. There was no discoloration or fading and the finishing was very smooth & clean. The professionalism and feedback I got were unforgettable.",
              },
              {
                "@type": "Review",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                },
                author: {
                  "@type": "Person",
                  name: "SABRINA FINNS",
                },
                reviewBody:
                  "Infinity Construction NYC renovated my house and it looks amazing. The interior design team knew exactly what I wanted, and did a wonderful job in renovating my basement. They installed bathrooms, ceramic and wood floors, research lights, and closets. They opened up my basement and now I have a lot of spare space. They did such a superb job and I appreciate Infinity's customer service.",
              },
            ],
          }),
        }}
      />

      {/* Page Sections */}
      <HeaderTwo />
      <CarouselSection />
      <HeroSection />
      <OurServices />
      <OurTestimonial />
      <OurAffiliatesSection />
      <ServicesSection />
      <SocialLinks />
      <ContactScroll />
      <MapComponent />
      <Footer />
      <PhoneCall />
    </>
  );
}
