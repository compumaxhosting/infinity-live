import React from "react";
import Script from "next/script";
import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import PhoneCall from "@/components/PhoneCall";
import ServicesForm from "@/components/servicesSection/ServicesForm";

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
        <div className="pt-32 sm:pt-16 2xl:pt-28">
          <div className="flex flex-col gap-6 bg-accent dark:bg-gray-900 py-12 pb-0 md:pb-12 border-b border">
            <div>
              <div className="text-center mb-4">
                <h1
                  className="text-3xl sm:text-5xl text-tertiary dark:text-white"
                  style={{ fontFamily: "var(--font-forum)" }}
                >
                  Contact Us
                </h1>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-6 lg:flex-row">
              <div className="w-full lg:w-1/2">
                <ServicesForm />
              </div>
            </div>
          </div>
        </div>
        <Footer />

        <PhoneCall />
      </div>
    </>
  );
};

export default Page;
