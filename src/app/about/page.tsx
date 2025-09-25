import React from "react";
import AboutTemp from "@/components/AboutTemp";
import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import PhoneCall from "@/components/PhoneCall";
const Page = () => {
  return (
    <>
      <div>
        <HeaderSpecial />
        <div className="pt-5 sm:pt-14 2xl:pt-24" />
        <AboutTemp />
        <Footer />
        <PhoneCall />
      </div>
    </>
  );
};

export default Page;
