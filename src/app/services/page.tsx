import React from "react";
import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import Services from "@/components/servicesSection/Services";
import PhoneCall from "@/components/PhoneCall";

const Page = () => {
  return (
    <>
      
      {/* Page Layout */}
      <div>
        <HeaderSpecial />
        <div className="pt-32 sm:pt-14 2xl:pt-24">
          <Services />
        </div>
        <Footer />

        <PhoneCall />
      </div>
    </>
  );
};

export default Page;
