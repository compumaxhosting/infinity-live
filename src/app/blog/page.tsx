import React from "react";
import Script from "next/script";
import BlogData from "@/components/BlogSection";
import { BlogsOverview } from "@/components/extras/BlogsOverview";
import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import PhoneCall from "@/components/PhoneCall";

const Page = () => {
  return (
    <>
      {/* ✅ JSON-LD for Blog Page */}
      <Script
        id="json-ld-blog"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Infinity Construction NYC Blog",
            description:
              "Explore expert tips, guides, and articles on brownstone renovation, masonry services, and historic property restoration in NYC.",
            url: "https://www.infinityconstructionnyc.com/blogs",
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
        <BlogsOverview />
        <HeaderSpecial />
        <div className="pt-36 sm:pt-14 2xl:pt-24 border-b">
          <BlogData />
        </div>
        <Footer />

        <PhoneCall />
      </div>
    </>
  );
};

export default Page;
