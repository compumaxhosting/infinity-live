import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import OurTestimonial from "@/components/OurTestimonial";
import PhoneCall from "@/components/PhoneCall";
import React from "react";

const page = () => {
  return (
    <div>
      <HeaderSpecial />
      <div className="pt-32 sm:pt-14 2xl:pt-24">
        <Gallery />
        <OurTestimonial />
      </div>
      <Footer />

      <PhoneCall />
    </div>
  );
};

export default page;
