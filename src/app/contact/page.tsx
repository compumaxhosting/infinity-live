import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import React from "react";
import ServicesForm from "@/components/servicesSection/ServicesForm";

const page = () => {
  return (
    <div>
      <HeaderSpecial />
      <div className="w-full lg:w-1/2 flex justify-center">
        <ServicesForm />
      </div>

      <Footer />
    </div>
  );
};

export default page;
