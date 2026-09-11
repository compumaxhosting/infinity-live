import BrownstoneStoopRestoration from "@/components/BrownstoneStoopRestoration";
import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import PhoneCall from "@/components/PhoneCall";
import ProjectsSection from "@/components/ProjectsSection";
import React from "react";

const BrownstoneStoopRenovationPage = () => {
  return (
    <div>
      <HeaderSpecial />
      <main className="container mx-auto pt-36 sm:pt-32 md:pt-32 pb-12 text-base sm:text-lg leading-relaxed">
        <BrownstoneStoopRestoration />
        <ProjectsSection />
      </main>

      <Footer />
      <PhoneCall />
    </div>
  );
};

export default BrownstoneStoopRenovationPage;
