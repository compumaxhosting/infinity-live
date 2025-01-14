import BrownstoneRenovationBrooklynNyBrownstoneRepairContractors from "@/components/BrownstoneRenovationBrooklyn-ny-brownstone-repair-contractors";
import LetsChat from "@/components/extras/LetsChat";
import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import React from "react";

const page = () => {
  return (
    <div>
      <HeaderSpecial />
      <div className="pt-10 xl:pt-24">
        <BrownstoneRenovationBrooklynNyBrownstoneRepairContractors />{" "}
      </div>
      <LetsChat />
      <Footer />
    </div>
  );
};

export default page;
