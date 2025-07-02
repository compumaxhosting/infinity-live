import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import OurTestimonial from "@/components/OurTestimonial";
import React from "react";

const page = () => {
  return (
    <div>
      <HeaderSpecial />
      <div className="pt-5 sm:pt-14 2xl:pt-24">
        <Gallery />
        <OurTestimonial />
      </div>
      <Footer />
    </div>
  );
};

export default page;
