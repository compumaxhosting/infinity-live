import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import PhoneCall from "@/components/PhoneCall";
import React from "react";

const page = () => {
  return (
    <div>
      <HeaderSpecial />
      <div
        className="container mx-auto p-4 pt-4 sm:pt-28 2xl:pt-36"
        style={{ fontFamily: "var(--font-forum)" }}
      >
        <h1 className="text-center text-5xl font-bold text-tertiary mb-8">
          Best Masonry Contractors New York{" "}
        </h1>
        <p className="text-lg">
          Welcome to Infinity Construction NYC, your premier choice for masonry
          contractors in Brooklyn, Manhattan, and Queens, New York. With our
          unwavering commitment to quality craftsmanship and attention to
          detail, we specialize in delivering top-notch masonry solutions that
          enhance the beauty and durability of your property.
        </p>
        <p>
          Our team of skilled masons brings experience and knowledge to every
          project, ensuring exceptional results for residential and
          commercial clients.
        </p>
      </div>
      <Footer />

      <PhoneCall />
    </div>
  );
};

export default page;
