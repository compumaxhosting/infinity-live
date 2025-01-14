import Footer from "@/components/Footer";
import HeaderSpecial from "@/components/headerSection/HeaderSpecial";
import React from "react";

const page = () => {
  return (
    <div>
      <HeaderSpecial />
      <div
        className="container mx-auto p-4 pt-28"
        style={{ fontFamily: "var(--font-forum)" }}
      >
        <h1 className="text-4xl mb-4">Asphalt Paving Solutions in NYC</h1>
        <p className="text-lg">
          Transform your New York City property with our expert asphalt paving
          services. At Infinity Construction, we specialize in creating durable
          and high-quality surfaces for driveways, parking lots, walkways, and
          roads. With decades of experience, we ensure excellence in every
          project across Brooklyn, Manhattan, Queens, and The Bronx. Trust us to
          elevate your property with our reliable asphalt paving solutions.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default page;
