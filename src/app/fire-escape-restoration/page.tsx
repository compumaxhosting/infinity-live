import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import React from "react";

const page = () => {
  return (
    <div>
      <HeaderSpecial />
      <div
        className="container mx-auto p-4 pt-4 sm:pt-28 border-b"
        style={{ fontFamily: "var(--font-forum)" }}
      >
        <h1 className="text-4xl mb-4">Fire Escape Restoration, Replacement or Installation in NYC</h1>
        <p className="text-lg">
        Your fire escape is a critical safety feature of your building. Unfortunately, exposure to the elements can quickly lead to damage and safety hazards. That&apos;s where the Infinity Construction NYC INC team comes in. We&apos;re a top-notch service provider in New York City, offering comprehensive fire escape solutions to meet your needs, from inspection and installation to repair, painting and maintenance. We are ensuring your building remains code-compliant and ready for any emergency.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default page;
