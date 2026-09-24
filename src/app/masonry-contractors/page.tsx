import MasonryContractors from "@/components/extras/MasonryContractors";
import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import PhoneCall from "@/components/PhoneCall";
import React from "react";

const page = () => {
  return (
    <div>
      <HeaderSpecial />

      <main className="container mx-auto px-4 pt-28 pb-12 sm:px-6 sm:pt-28 lg:pb-16 2xl:pt-36">
        <MasonryContractors />
      </main>

      <Footer />

      <PhoneCall />
    </div>
  );
};

export default page;