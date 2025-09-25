import React from "react";
import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import PhoneCall from "@/components/PhoneCall";
import ServicesForm from "@/components/servicesSection/ServicesForm";

const Page = () => {
  return (
    <>
      <div>
        <HeaderSpecial />
        <div className="pt-32 sm:pt-16 2xl:pt-28">
          <div className="flex flex-col gap-6 bg-accent dark:bg-gray-900 py-12 pb-0 md:pb-12 border-b border">
            <div>
              <div className="text-center mb-4">
                <h1
                  className="text-3xl sm:text-5xl text-tertiary dark:text-white"
                  style={{ fontFamily: "var(--font-forum)" }}
                >
                  Contact Us
                </h1>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-6 lg:flex-row">
              <div className="w-full lg:w-1/2">
                <ServicesForm />
              </div>
            </div>
          </div>
        </div>
        <Footer />

        <PhoneCall />
      </div>
    </>
  );
};

export default Page;
