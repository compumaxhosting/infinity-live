import React from "react";
import Script from "next/script";
import AboutTemp from "@/components/AboutTemp";
import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
// import BrownstoneRenovationBrooklynNyBrownstoneRepairContractors from "@/components/BrownstoneRenovationBrooklyn-ny-brownstone-repair-contractors";

const Page = () => {
  return (
    <>
      {/* ✅ JSON-LD Structured Data for AboutPage */}
      <Script
        id="json-ld-about"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Infinity Construction NYC",
            description:
              "Trusted brownstone renovation and masonry experts serving Brooklyn, Manhattan, Queens, and the Bronx. Learn more about our company, mission, and values.",
            url: "https://www.infinityconstructionnyc.com/about",
            publisher: {
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
        <div className="pt-5 sm:pt-14 2xl:pt-24" />
        <AboutTemp />
        <Footer />
      </div>
    </>
  );
};

export default Page;
