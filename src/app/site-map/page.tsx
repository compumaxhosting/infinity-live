import React from "react";
import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import PhoneCall from "@/components/PhoneCall";
import SiteMap from "@/components/extras/SiteMap";
const Page = () => {
  return (
    <>
      <div>
        <HeaderSpecial />
        <div className="pt-5 sm:pt-14 2xl:pt-24" />
        <SiteMap />
        <Footer />
        <PhoneCall />
      </div>
    </>
  );
};

export default Page;
