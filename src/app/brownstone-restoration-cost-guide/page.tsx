import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import PhoneCall from "@/components/PhoneCall";
import ServiceDownloadForm from "@/components/ServiceDownloadForm";
import React from "react";

const BrownstoneStoopRenovationPage = () => {
  return (
    <div>
      <HeaderSpecial />
      <main className="container mx-auto pt-36 sm:pt-32 md:pt-32 pb-12 text-base sm:text-lg leading-relaxed">
        <ServiceDownloadForm />
      </main>

      <Footer />
      <PhoneCall />
    </div>
  );
};

export default BrownstoneStoopRenovationPage;
