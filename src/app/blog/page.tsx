import React from "react";
import BlogData from "@/components/BlogSection";
import { BlogsOverview } from "@/components/extras/BlogsOverview";
import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import PhoneCall from "@/components/PhoneCall";

const Page = () => {
  return (
    <>
     

      {/* Page Layout */}
      <div>
        <BlogsOverview />
        <HeaderSpecial />
        <div className="pt-36 sm:pt-14 2xl:pt-24 border-b">
          <BlogData />
        </div>
        <Footer />

        <PhoneCall />
      </div>
    </>
  );
};

export default Page;
