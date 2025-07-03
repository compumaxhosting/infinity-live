import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import PhoneCall from "@/components/PhoneCall";
import React from "react";

const page = () => {
  return (
    <div>
      <HeaderSpecial />
      <div
        className="container mx-auto p-4 pt-28 2xl:pt-36"
        style={{ fontFamily: "var(--font-forum)" }}
      >
        <h1 className="text-center text-5xl font-bold text-tertiary mb-8">Roofing Service & Solution</h1>
        <p className="text-lg">
        At Infinity Construction NYC, we understand the importance of a robust and reliable roof, especially in areas like Brooklyn and Manhattan. That&apos;s why we offer a comprehensive suite of roofing services to meet all your needs, from routine maintenance to complete replacements. Whether you need Brooklyn Roof Repair Services, Roof Replacement in Brooklyn NY, or Flat Roof Installation in Brooklyn, our team of experienced and certified professionals is here to help.
        </p>
        <p>
        For those in Manhattan, we&apos;re your go-to Manhattan Roofing Contractors, offering everything from Emergency Roof Repair to full Roof Installation in Manhattan NY. Whether it&apos;s Residential Roofing in Brooklyn or Commercial Roof Contractors in Manhattan, we&apos;re dedicated to providing exceptional quality artistry and ensuring your complete satisfaction. Trust Infinity Construction NYC, one of the Top Rated Roofing Companies in Manhattan, for all your roofing needs.
        </p>
      </div>
      <Footer />
      
              <PhoneCall />
    </div>
  );
};

export default page;
