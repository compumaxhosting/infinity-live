   import React from "react";
import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import PhoneCall from "@/components/PhoneCall";
import HiddenPageContent from "@/components/HiddenPageContent";

const Page = () => {
  return (
    <>
      <div>
        <HeaderSpecial />
        <div className="pt-5 sm:pt-14 2xl:pt-24" />
        <HiddenPageContent /> 
        <Footer />
        <PhoneCall />
      </div>
    </>
  );
};

export default Page;
