import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import React from "react";

const page = () => {
  return (
    <div>
      <HeaderSpecial />
      <div
        className="container mx-auto p-4 pt-4 sm:pt-28 2xl:pt-36 border-b"
        style={{ fontFamily: "var(--font-forum)" }}
      >
        <h1 className="text-center text-5xl font-bold text-tertiary mb-8">Brownstone Restoration Contractors</h1>
        <p className="text-lg">
        At Infinity Construction, we understand the timeless allure of brownstones and the importance of preserving their historic charm. As the leading provider of Best Brownstone Restoration in Brooklyn, NY, and Manhattan, our team of dedicated Brownstone Restoration Contractors is committed to revitalizing these architectural gems, breathing new life into your property while honoring its rich heritage.
        </p>
        <p>Transform your brownstone with expert construction, restoration, and remodeling services in Brooklyn. Our skilled contractors offer affordable repairs and renovations, serving Brooklyn, Manhattan, and Queens.</p>
      </div>
      <Footer />
    </div>
  );
};

export default page;
