import BrownstoneRenovationBrooklynNyBrownstoneRepairContractors from "@/components/BrownstoneRenovationBrooklyn-ny-brownstone-repair-contractors";
import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import HeroSection from "@/components/Hero";
import React from "react";

const page = () => {
  return (
    <div>
      <HeaderSpecial />
      <div className="pt-5 sm:pt-14 2xl:pt-24">
        <BrownstoneRenovationBrooklynNyBrownstoneRepairContractors />{" "}
        <HeroSection />
      </div>
      <Footer />
    </div>
  );
};

export default page;
