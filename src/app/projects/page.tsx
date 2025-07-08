import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import PhoneCall from "@/components/PhoneCall";
import ProjectSection from "@/components/ProjectsSection";
import React from "react";

const page = () => {
  return (
    <div>
      <HeaderSpecial />
      <div className="pt-32 sm:pt-14 2xl:pt-24">
        <ProjectSection />
      </div>
      <Footer />

      <PhoneCall />
    </div>
  );
};

export default page;
