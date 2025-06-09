import Link from "next/link";
import React from "react";

const CarouselContent: React.FC = () => {
  return (
    <div
      className="absolute hidden inset-0 sm:flex items-center justify-center z-20"
      style={{ fontFamily: "var(--font-forum)" }}
    >
      <div className="text-white p-6 text-center flex flex-col justify-center items-center min-h-[400px]">
        <h2
          className="text-2xl md:text-4xl lg:text-5xl"
          style={{ textShadow: "0px 0px 10px black" }}
        >
          Welcome To
        </h2>
        {/* Display title */}
        <h1
          className="mt-4 sm:text-4xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold"
          style={{ textShadow: "0px 0px 10px black" }}
        >
          Infinity Construction NYC
        </h1>{" "}
        {/* Display description */}
        {/* <p
          className="mt-4 xl:px-56 text-lg 2xl:text-xl"
          style={{ textShadow: "0px 0px 10px black" }}
        >
          Infinity Construction NYC is a leading Brownstone Restoration
          Specialist Company.
        </p> */}
        {/* Buttons Section */}
        <div className="mt-6 flex gap-6 flex-col sm:flex-row">
          {/* Contact Us Button */}
          <Link
            href="/contact"
            className="bg-primary border-2 border-primary text-2xl text-white py-3 px-4 rounded-full hover:bg-orange-600 hover:border-orange-600 transition-all duration-300 w-[200px]"
          >
            Contact Us
          </Link>

          {/* Portfolio Button */}
          <Link
            href="/gallery"
            className="bg-transparent border-2 border-white text-2xl text-white py-3 px-4 rounded-full hover:bg-primary hover:border-primary transition-all duration-300 w-[200px]"
            style={{ textShadow: "0px 0px 10px black" }}
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarouselContent;
