import React from "react";
import Script from "next/script";
import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import OurServices from "@/components/servicesSection/OurServices";

const Page = () => {
  return (
    <>
      {/* ✅ JSON-LD Structured Data for Services Page */}
      <Script
        id="json-ld-services"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Our Services - Infinity Construction NYC",
            description:
              "Explore expert masonry, brownstone restoration, roofing, stucco, concrete, and general renovation services provided by Infinity Construction NYC across Brooklyn, Queens, Manhattan, and the Bronx.",
            url: "https://www.infinityconstructionnyc.com/services",
            about: {
              "@type": "Organization",
              name: "Infinity Construction NYC",
              logo: {
                "@type": "ImageObject",
                url: "https://www.infinityconstructionnyc.com/logo-new.png",
              },
              sameAs: [
                "https://www.facebook.com/infinityconstructionnyc",
                "https://www.instagram.com/infinity_construction_nyc",
                "https://www.linkedin.com/in/imrul-hassan-403724268",
              ],
            },
          }),
        }}
      />

      {/* Page Layout */}
      <div>
        <HeaderSpecial />
        <div className="sm:pt-14 md:pt-20">
          <OurServices />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Page;
