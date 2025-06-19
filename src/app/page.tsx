// app/page.tsx
import Head from "next/head";
import OurServices from "../components/servicesSection/OurServices";
import CarouselSection from "../components/carouselSection/CarouselSection";
import Footer from "../components/Footer";
import HeaderTwo from "../components/headerSection/HeaderTwo";
import HeroSection from "../components/Hero";
// import LetsChat from "../components/extras/LetsChat";
import MapComponent from "../components/MapComponent";
import ServicesSection from "@/components/ContactSection";
// import ContactScroll from "@/components/extras/ContactScroll";
import SocialLinks from "@/components/SocialLinks";
import OurTestimonial from "@/components/OurTestimonial";
// import ContactBar from "@/components/ContactBar";

// ✅ Visible in browser <head> and view-source
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
      {/* SEO meta tags visible in source code */}
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
          content="https://www.infinityconstructionnyc.com/cover-image.jpg"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
      </Head>

      {/* Page Layout */}
      <HeaderTwo />
      <CarouselSection />
      <HeroSection />
      <OurServices />
      <OurTestimonial />
      <ServicesSection />
      <SocialLinks />
      <MapComponent />
      <Footer />
    </>
  );
}
  