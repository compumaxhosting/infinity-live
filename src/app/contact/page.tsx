import React from "react";
import Script from "next/script";
import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import ServicesSection from "@/components/ContactSection";
import PhoneCall from "@/components/PhoneCall";

const Page = () => {
  return (
    <>
      {/* ✅ JSON-LD Structured Data for Contact Page */}
      <Script
        id="json-ld-contact"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Infinity Construction NYC",
            description:
              "Get in touch with Infinity Construction NYC for expert brownstone renovation and masonry services across New York City.",
            url: "https://www.infinityconstructionnyc.com/contact",
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
        <div className="pt-5 sm:pt-14 2xl:pt-24">
          <ServicesSection />
        </div>
        <Footer />

        <PhoneCall />
      </div>
    </>
  );
};

export default Page;
