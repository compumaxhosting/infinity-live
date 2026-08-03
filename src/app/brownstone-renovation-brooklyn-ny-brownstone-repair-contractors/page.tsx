import BrownstoneRenovationBrooklynNyBrownstoneRepairContractors from "@/components/BrownstoneRenovationBrooklyn-ny-brownstone-repair-contractors";
import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import PhoneCall from "@/components/PhoneCall";
import React from "react";

const page = () => {
  return (
    <div>
      <HeaderSpecial />
      <div className="pt-16 xl:pt-24">
        <BrownstoneRenovationBrooklynNyBrownstoneRepairContractors />{" "}
      </div>
      <Footer />

      <PhoneCall />
    </div>
  );
};

export default page;
