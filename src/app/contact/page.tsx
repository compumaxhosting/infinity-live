import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import ServicesSection from "@/components/ContactSection";
import React from "react";

const page = () => {
  return (
    <div>
      <HeaderSpecial />
      <div className="pt-5 sm:pt-14 2xl:pt-24">
        <ServicesSection />
      </div>
      <Footer />
    </div>
  );
};

export default page;
